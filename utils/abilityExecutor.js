import { renderCard } from './cardRenderer.js';
import { cards } from '../data/cards.js';
const effectUsageTracker = new Map();

export function resetEffectUsageForTurn(gameId, turnNumber) {
  if (!effectUsageTracker.has(gameId)) return;
  const tracker = effectUsageTracker.get(gameId);
  for (const turn of tracker.keys()) {
    if (turn !== turnNumber) {
      tracker.delete(turn);
    }
  }
}

export async function handleBoardStateChange(card, boardState, lastBoardState, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  //console.log(`State change: ${card.name} from ${lastBoardState} to ${boardState}`);
  if (boardState === 'Tomb' && lastBoardState !== 'Tomb') {
    await declareAbility(card, 'IfTomb', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry, null, cards);               //IF SENT TO TOMB
  }
  if (boardState === 'Hand' && lastBoardState === 'Deck') {
    await declareAbility(card, 'IfDrawnAdded', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);         //IF DRAWN / IF ADDED
  }
  if (boardState === 'Hand' && lastBoardState === 'Tomb') {
    await declareAbility(card, 'IfRetrieved', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);          //IF RETRIEVED
  }
  if (boardState === 'Tomb' && lastBoardState === 'Deck') {
    await declareAbility(card, 'IfBuried', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);             //IF BURIED
  }
  if (boardState === 'Tomb' && lastBoardState === 'Hand') {
    await declareAbility(card, 'IfDiscarded', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);          //IF DISCARDED
  }
  if (boardState === 'Tomb' && (lastBoardState === 'Zone (Champion)' || lastBoardState === 'Zone (Arsenal)')) {
    await declareAbility(card, 'IfTombFromField', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);      //IF TOMB FROM FIELD
  }
  if ((boardState === 'Tomb' && lastBoardState !== 'Tomb') || (boardState === 'Void' && lastBoardState !== 'Void')) {
    if (card.tags?.includes("Destroyed")) {
      await declareAbility(card, 'IfDestroyed', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);          //IF DESTROYED
    }
    if (card.tags?.includes("DestroyedByBattle")) {
      await declareAbility(card, 'IfDestroyedByBattle', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);  //IF DESTROYED BY BATTLE
    }
  }
  if (boardState === 'Void' && lastBoardState !== 'Void') {
    await declareAbility(card, 'IfObliterated', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);        //IF OBLITERATED
  }
  if (boardState === 'Zone (Champion)' && lastBoardState !== 'Zone (Champion)') {
    await declareAbility(card, 'OnRally', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);              //ON RALLY
  }
  if (boardState === 'Zone (Champion)' && lastBoardState === 'FaceDownZone') {
    await declareAbility(card, 'Flip', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);                 //FLIP
  }
  if (boardState === 'Zone (Champion)' && lastBoardState === 'Tomb') {
    await declareAbility(card, 'OnResurrection', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);       //ON RESURRECTION
  }
  if (boardState === 'Zone (Champion)' && lastBoardState === 'Deck') {
    await declareAbility(card, 'OnRecruit', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);            //ON RECRUIT
  }
  if (boardState === 'Zone (Champion)' && lastBoardState === 'Void') {
    await declareAbility(card, 'OnUnleash', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);            //ON UNLEASH
  }
  if (boardState === 'Zone (Arsenal)' && lastBoardState !== 'Zone (Arsenal)') {
    await declareAbility(card, 'OnActivation', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);         //ON ACTIVATION
  }
  if (boardState === 'Zone (Arsenal)' && lastBoardState === 'FaceDownArsenalZone') {
    await declareAbility(card, 'OnActivation', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);         //ON ACTIVATION
  }
}

function hasUsedEffectThisTurn(gameId, turn, cardId, effectText) {
  if (!effectUsageTracker.has(gameId)) {
    effectUsageTracker.set(gameId, new Map());
  }

  const turnMap = effectUsageTracker.get(gameId);
  if (!turnMap.has(turn)) {
    turnMap.set(turn, new Map());
  }

  const cardMap = turnMap.get(turn);
  if (!cardMap.has(cardId)) {
    cardMap.set(cardId, new Set());
  }

  const usedEffects = cardMap.get(cardId);

  if (usedEffects.has(effectText)) {
    return true; // ❌ already used
  }

  usedEffects.add(effectText); // ✅ now it's used
  return false;
}

const effectMap = {
  "ResurrectByCondition": resurrectByCondition,
  "RetrieveCardByCondition": retrieveCardByCondition,
  "Add": addCardByCondition,
  "Excavate": excavateCards
};

export async function declareAbility(
  card,
  triggerType,
  gameState,
  username,
  gameId,
  updateLocalFromGameState,
  addGameLogEntry,
  batchMilledCards = null,
  fullCardDatabase = []
) {
  if (!card || !card.name || !card.abilities) {
    console.warn("🛑 Invalid or incomplete card object passed:", card);
    return;
  }

  const abilities = card.abilities || [];
  const promises = [];

  for (const ability of abilities) {
    for (const num of [1, 2, 3]) {
      const type = ability[`effect${num}type`];
      const condition = ability[`effect${num}condition`] || "";
      const cost = ability[`effect${num}cost`] || "";
      const text = ability[`effect${num}text`] || "";
      const linger = ability[`effect${num}linger`] || "";

      const typeMatches = Array.isArray(type) ? type.includes(triggerType) : type === triggerType;
      if (!typeMatches || (!text && !cost)) continue;

      const isMandatory = Array.isArray(type) ? type.includes("Mandatory") : type === "Mandatory";
      const shouldConfirm = !isMandatory && text && !/^Mill\d+$/.test(cost);

      if (typeMatches && (text || cost) && shouldConfirm) {
        const confirmed = await confirmAbilityTrigger(card.name, text);
        if (!confirmed) continue;
      }

      const cardId = card.id;
      const currentTurn = gameState.turn?.count ?? 0;

      if (hasUsedEffectThisTurn(gameId, currentTurn, cardId, text)) continue;

      // === CONDITION (Future: expand logic here if needed) ===
      if (condition) {
        const passed = await evaluateAbilityCondition(condition, card, gameState, username);
        if (!passed) continue;
      }

      // === COST STAGE ===
      if (cost && !(await payAbilityCost(cost, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry))) {
        continue;
      }

      // === MAIN EFFECT ===
      const effect = text;

      let effectFunc = null;
      if (
        effect.startsWith("Excavate") &&
        linger === "ObliterateOthers"
      ) {
        effectFunc = excavateCards;
      } else if (effect.startsWith("Retrieve") && gameState.canRetrieve !== false) {
        effectFunc = retrieveCardByCondition;
      } else if (effect.startsWith("Resurrect") && gameState.canResurrect !== false) {
        effectFunc = resurrectByCondition;
      } else if (/^Excavate(Op)?\d+$/.test(cost)) {
        effectFunc = excavateCards;
      } else if (/^Excavate(Op)?\d+$/.test(effect)) {
        effectFunc = excavateCards;
      } else if ((/^Add\d+[A-Za-z]+$/.test(effect)) && gameState.canAddCards !== false) {
        effectFunc = addCardByCondition;
      } else if (/^Mill\d+$/.test(cost)) {
        const count = parseInt(cost.replace("Mill", ""));
        effectFunc = async (...args) => {
          return millCards(
            count,
            gameState,
            username,
            gameId,
            updateLocalFromGameState,
            addGameLogEntry
          );
        };
      } else if (/^Mill\d+$/.test(effect)) {
        const count = parseInt(effect.replace("Mill", ""));
        effectFunc = async (...args) => {
          return millCards(
            count,
            gameState,
            username,
            gameId,
            updateLocalFromGameState,
            addGameLogEntry
          );
        };
      } else if (effectMap[effect]) {
        effectFunc = effectMap[effect];
      }

      if (!effectFunc) {
        console.warn(`⚠️ No effect handler for "${effect}"`);
        continue;
      }

      const promise = effectFunc(
        effect,
        card,
        gameState,
        username,
        gameId,
        updateLocalFromGameState,
        addGameLogEntry,
        batchMilledCards,
        fullCardDatabase
      );
      promises.push(promise);

      // === LINGER POST-EFFECT (basic hook) ===
      if (linger) {
        const lingerPromise = handleLinger(linger, card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
        if (lingerPromise) promises.push(lingerPromise);
      }
    }
  }

  await Promise.all(promises);
}

function parseCombinedCosts(costString) {
  const regex = /(Offer|Mill|Sacrifice)(\d+)/g;
  const costs = [];
  let match;
  while ((match = regex.exec(costString)) !== null) {
    costs.push({ type: match[1], amount: parseInt(match[2], 10) });
  }
  return costs;
}

async function confirmAbilityTrigger(cardName, effectText) {
  return new Promise(resolve => {
    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "20px",
      backgroundColor: "#333",
      color: "white",
      border: "2px solid white",
      borderRadius: "10px",
      zIndex: 150000,
      textAlign: "center"
    });
    //<p style="font-size: 0.9em; margin-bottom: 10px;">Effect: ${effectText}</p>
    overlay.innerHTML = `
      <p>Activate the effect of <strong>${cardName}</strong>?</p>
      <button id="confirm-ability">Yes</button>
      <button id="cancel-ability" style="margin-left: 10px;">No</button>
    `;
    document.body.appendChild(overlay);

    document.getElementById("confirm-ability").onclick = () => {
      document.body.removeChild(overlay);
      resolve(true);
    };
    document.getElementById("cancel-ability").onclick = () => {
      document.body.removeChild(overlay);
      resolve(false);
    };
  });
}

export function checkCardConditionFunction(card, gameState, username) {
  const tomb = gameState[username]?.Tomb || [];

  if (!card.cardConditionFunction) return true;

  // Pattern 1: Tomb5+
  const basicMatch = card.cardConditionFunction.match(/^Tomb(\d+)\+$/);
  if (basicMatch) {
    const minCount = parseInt(basicMatch[1], 10);
    return tomb.length >= minCount;
  }

  // Pattern 2: Tomb1+Knight
  const tagMatch = card.cardConditionFunction.match(/^Tomb(\d+)\+([A-Za-z]+)$/);
  if (tagMatch) {
    const minCount = parseInt(tagMatch[1], 10);
    const tag = tagMatch[2];
    const matchingCards = tomb.filter(c => c.tags?.includes(tag));
    return matchingCards.length >= minCount;
  }

  return false; // Unknown or invalid condition
}

export async function handleCardCostFunction(card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  const deck = gameState[username].Deck;
  const life = gameState[username].life;
  const controlledChampions = [
    ...(gameState[username]["Zone (Champion)"] || []),
    ...(gameState[username]["FaceDownZone"] || [])
  ];

  // If cardCostFunction is a combined string like "Offer5Mill5Sacrifice1"
  if (/^(Offer|Mill|Sacrifice)/.test(card.cardCostFunction)) {
    //console.log('Parsing cost string:', card.cardCostFunction);
    const costs = parseCombinedCosts(card.cardCostFunction);
    //console.log('Parsed costs:', costs);

    if (!Array.isArray(costs)) {
      console.error('Parsed costs is not an array:', costs);
      return false;
    }

    // Validate all costs first (return false if any cannot pay)
    for (const cost of costs) {
      if (cost.type === "Offer" && life <= cost.amount) return false;
      if (cost.type === "Mill" && deck.length < cost.amount) return false;
      if (cost.type === "Sacrifice" && controlledChampions.length < cost.amount) return false;
    }

    // Pay each cost in sequence
    for (const cost of costs) {
      switch (cost.type) {
        case "Offer":
          await offerLife(cost.amount, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
          break;
        case "Mill":
          await millCards(cost.amount, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
          break;
        case "Sacrifice":
          const success = await sacrificeChampions(cost.amount, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
          if (!success) return false;
          break;
      }
    }
    return true;
  }

  switch (card.cardCostFunction) {
    case "UseBasic":
      break;
    default:
      return false;
  }
}

async function sendLifeUpdate(gameId, gameState, player) {
    await fetch('https://geimon-app-833627ba44e0.herokuapp.com/updateGameState', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            gameId,
            updatedZones: {
                life: gameState[player].life
            },
            owner: player
        })
    });
}


export function changeLife(player, amount, gameState, username, gameId) {
    if (!gameState[player]) return;

    if (gameState.invertHealingAndDamage) {
        amount = -amount;
    }

    const originalLife = gameState[player].life;
    let newLife = originalLife + amount;
    if (newLife < 0) newLife = 0;

    gameState[player].life = newLife;

    const isSelf = player === username;
    const lifeElem = document.getElementById(isSelf ? "player-life" : "opponent-life");
    const screenHalf = document.getElementById(isSelf ? "player-side" : "opponent-side");

    if (lifeElem && screenHalf) {
        animateLifeNumber(lifeElem, originalLife, newLife);

        const flash = document.createElement("div");
        flash.className = `life-flash ${amount > 0 ? "heal" : "damage"} ${isSelf ? "bottom" : "top"}`;
        screenHalf.appendChild(flash);

        setTimeout(() => flash.classList.add("active"), 10);
        setTimeout(() => flash.remove(), 700);
    }

    sendLifeUpdate(gameId, gameState, player);

    if (newLife <= 0) {
        // Dispatch a custom event to trigger game loss
        document.dispatchEvent(new CustomEvent("playerLifeReachedZero", {
            detail: { player }
        }));
    }

    // Return true if this reduced the player's life to 0
    return newLife <= 0;
}

function animateLifeNumber(element, start, end) {
    const duration = 500;
    const stepTime = 30;
    const steps = Math.floor(duration / stepTime);
    let currentStep = 0;

    const step = () => {
        currentStep++;
        const progress = currentStep / steps;
        const value = Math.round(start + (end - start) * progress);
        element.textContent = value;

        if (currentStep < steps) {
            setTimeout(step, stepTime);
        } else {
            element.textContent = end;
        }
    };
    step();
}

async function resolveBatchIfTombEffects(milledCards, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
    for (const card of milledCards) {
      const fullCard = cards.find(c => String(c.id) === String(card.id));
      if (!fullCard) {
        console.warn("⚠️ Could not find full card info for milled card ID:", card.id);
        continue;
      }

      fullCard.boardState = "Tomb";
      fullCard.lastBoardState = "Deck";

      // Replace the card in the batch with the full version
      const index = milledCards.findIndex(c => String(c.id) === String(card.id));
      if (index !== -1) {
        milledCards[index] = fullCard;
      }

      await declareAbility(fullCard, 'IfTomb', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry, milledCards, cards);
      await declareAbility(fullCard, 'IfBuried', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry, milledCards, cards);
    }
}

export async function millCards(
    count,
    gameState,
    username,
    gameId,
    updateLocalFromGameState,
    addGameLogEntry
) {
    const deck = gameState[username].Deck;
    const tomb = gameState[username].Tomb;

    if (deck.length < count) {
        console.warn(`⚠️ Not enough cards to mill. Requested: ${count}, Available: ${deck.length}`);
        count = deck.length;
    }

    const milled = deck.splice(0, count); // Top X cards (0 is top)
    const reversed = milled.reverse();    // Topmost should go beneath

    // Add to tomb in reverse order
    for (const card of reversed) {
        card.lastBoardState = "Deck";
        card.boardState = "Tomb";
        tomb.push(card);
    }

    // Save deck and tomb update
    await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        gameId,
        owner: username,
        updatedZones: {
            Deck: deck,
            Tomb: tomb
        }
        })
    });

    addGameLogEntry(`${username} milled ${count} card${count > 1 ? 's' : ''}`);

    // Wait one frame for state sync
    await new Promise(requestAnimationFrame);

    // Now resolve any effects of cards sent to tomb
    await resolveBatchIfTombEffects(reversed, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
}

export async function offerLife(amount, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
    if (gameState[username].life <= amount) {
        console.warn(`${username} cannot offer ${amount} life — would drop to 0 or less.`);
        return false;
    }

    changeLife(username, -amount, gameState, username, gameId);

    addGameLogEntry(`${username} offered ${amount} life`);

    if (updateLocalFromGameState) await updateLocalFromGameState();

    return true;
}

export function promptUserToSacrifice(amount, validCards) {
    window.__pendingSacrificeSelection = null;
    return new Promise(resolve => {
        //console.log(`promptUserToSacrifice called: select ${amount} champions`);
        //console.log("Valid cards to sacrifice:", validCards.map(c => c.name || c.id || c.uid));
        let selected = [];

        // Enable sacrifice mode
        window.sacrificeMode = true;
        window.validSacrificeIds = new Set(validCards.map(c => String(c.id)));

        const banner = document.createElement("div");
          banner.id = "sacrifice-banner";
          banner.textContent = `Select ${amount} champion${amount > 1 ? "s" : ""} to sacrifice.`;
        document.querySelectorAll(".card-button").forEach(button => {
          const parentCard = button.closest(".card");
          if (!parentCard) return;

          const cardId = parentCard.dataset.cardId;
          const isValid = validCards.some(c => String(c.id) === String(cardId) || String(c.id) === String(cardId));
          if (isValid) {
            button.textContent = "SacrificeThisCard";
          } else {
            button.textContent = "";
          }
        });

        Object.assign(banner.style, {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#222",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            zIndex: 120000,
            fontSize: "16px",
            fontWeight: "bold"
        });
        document.body.appendChild(banner);

        document.querySelectorAll(".card-button").forEach(button => {
            const parent = button.closest(".card");
            const id = parent?.dataset.cardId;
            if (window.validSacrificeIds?.has(id)) {
                button.textContent = "SacrificeThisCard";
            } else {
                button.textContent = "";
            }
        });

        window.__pendingSacrificeSelection = (card) => {
          if (!selected.find(c => String(c.id) === String(card.id))) {
            selected.push(card);
            const el = document.getElementById(`card-${card.id}`);
            if (el) el.classList.add("selected");
          }

          if (selected.length === amount) {
            for (const c of validCards) {
              const el2 = document.getElementById(`card-${c.id}`);
              if (el2) {
                el2.classList.remove("selectable", "selected");
                const btn2 = el2.querySelector(".card-button");
                if (btn2) btn2.onclick = btn2._originalHandler || (() => {});
              }
            }

            const banner = document.getElementById("sacrifice-banner");
            if (banner) banner.remove();

            window.sacrificeMode = false;
            window.validSacrificeIds = null;
            window.__pendingSacrificeSelection = null;
            resolve(selected);
          }
        };

        for (const card of validCards) {
            const el = document.getElementById(`card-${card.id}`);
            if (!el) continue;

            el.classList.add("selectable");

            const button = el.querySelector(".card-button");
            if (!button) continue;

            // ✅ Save the logic to run globally
            button.onclick = (e) => {
                e.stopPropagation();
                e.preventDefault();

                //console.log("🔥 Sacrifice button clicked:", card.name);

                const confirmBox = document.createElement("div");
                Object.assign(confirmBox.style, {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "20px",
                    backgroundColor: "#333",
                    color: "white",
                    border: "2px solid white",
                    borderRadius: "10px",
                    zIndex: "120001",
                    textAlign: "center",
                    boxShadow: "0 0 10px black"
                });

                confirmBox.innerHTML = `
                    <p>Sacrifice <strong>${card.name}</strong>?</p>
                    <button id="confirm-sacrifice">Confirm</button>
                    <button id="cancel-sacrifice" style="margin-left: 10px;">Cancel</button>
                `;

                document.body.appendChild(confirmBox);

                document.getElementById("confirm-sacrifice").onclick = () => {
                    document.body.removeChild(confirmBox);

                    // Mark selected
                    if (!selected.find(c => c.id === card.id)) {
                        selected.push(card);
                        el.classList.add("selected");
                    }

                    if (selected.length === amount) {
                        for (const c of validCards) {
                            const el2 = document.getElementById(`card-${c.id}`);
                            if (el2) {
                                el2.classList.remove("selectable", "selected");
                                const btn2 = el2.querySelector(".card-button");
                                if (btn2) btn2.onclick = btn2._originalHandler || (() => {});
                            }
                        }

                        const banner = document.getElementById("sacrifice-banner");
                        if (banner) banner.remove();

                        window.sacrificeMode = false;
                        window.validSacrificeIds = null;
                        window.__pendingSacrificeSelection = null;
                        resolve(selected);
                    }
                };

                document.getElementById("cancel-sacrifice").onclick = () => {
                    document.body.removeChild(confirmBox);
                };
            };

            // ✅ Save default so we can restore it later
            if (!button._originalHandler) {
                button._originalHandler = button.onclick;
            }
        }
    });
}

export async function waitForChampionRemoved(cardIds, username, timeout = 5000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    await fetchGameStateFromServer();
    const currentChampions = gameState[username]["Zone (Champion)"] || [];
    const currentFaceDown = gameState[username]["FaceDownZone"] || [];

    const currentIds = [
      ...currentChampions.map(c => String(c.id)),
      ...currentFaceDown.map(c => String(c.id))
    ];

    // Check if any of the cardIds remain in Champion zone
    const stillPresent = cardIds.some(id => currentIds.includes(String(id)));
    if (!stillPresent) {
      return true; // All removed
    }
    await new Promise(r => setTimeout(r, 200)); // wait 200ms before retry
  }
  console.warn("Timeout waiting for champion(s) removal from server");
  return false;
}

export async function sacrificeChampions(amount, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
    //console.log(`sacrificeChampions called to sacrifice ${amount} champion(s)`);

    if (!gameState || !gameState[username]) {
        console.warn("⚠️ Invalid game state or username.");
        return false;
    }

    const zoneChampions = gameState[username]["Zone (Champion)"] || [];
    const faceDownZone = gameState[username]["FaceDownZone"] || [];
    const champions = [...zoneChampions, ...faceDownZone].filter(c => !c.exerted);
    //console.log("🧪 Valid champions to sacrifice:", champions.map(c => `${c.name} (exerted: ${c.exerted})`));

    //console.log(`Champions available to sacrifice: ${champions.length}`);
    if (champions.length < amount) {
        alert("Not enough champions to sacrifice.");
        return false;
    }

    window.sacrificeMode = true;
    const selected = await promptUserToSacrifice(amount, champions);

    const rallyPrompt = document.getElementById("rally-cost-overlay");
    if (rallyPrompt) rallyPrompt.remove();

    //console.log("User selected champions to sacrifice:", selected.map(c => c.name || c.id));

    // --- Set board state for each selected card BEFORE updating any zones ---
    for (const card of selected) {
        card.lastBoardState = "Zone (Champion)";
        card.boardState = "Tomb";
    }

    // --- Remove from current zones ---
    gameState[username]["Zone (Champion)"] = zoneChampions.filter(
        c => !selected.some(s => String(s.id) === String(c.id))
    );
    gameState[username]["FaceDownZone"] = faceDownZone.filter(
        c => !selected.some(s => String(s.id) === String(c.id))
    );

    // --- Push to Tomb ---
    gameState[username].Tomb.push(...selected);

    // --- THEN do side effects (animations, triggers, etc.) ---
    for (const card of selected) {
        await handleBoardStateChange(
            card,
            "Tomb",
            "Zone (Champion)",
            gameState,
            username,
            gameId,
            updateLocalFromGameState,
            addGameLogEntry
        );
    }

    addGameLogEntry(`${username} sacrificed ${amount} champion${amount > 1 ? "s" : ""}.`);

    //console.log("Before updategamestate Champions:", gameState[username]["Zone (Champion)"].map(c => c.id));

    const response = await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gameId,
        owner: username,
        updatedZones: {
          "Zone (Champion)": gameState[username]["Zone (Champion)"],
          "FaceDownZone": gameState[username]["FaceDownZone"],
          Tomb: gameState[username].Tomb
        }
      })
    });

    const data = await response.json();
    if (data.success && data.updatedPlayerZone) {
      // Replace your local zones with what the server sends
      gameState[username] = data.updatedPlayerZone;
      //console.log("After server update, Champion Zone:", gameState[username]["Zone (Champion)"].map(c => c.id));

      const selectedIds = selected.map(c => c.id);
      await waitForChampionRemoved(selectedIds, username);
    } else {
      console.warn("Server update failed or no updated zones returned");
    }

    window.sacrificeMode = false;
    //console.log("Before updateLocalFromGameState, Champion Zone:", gameState[username]["Zone (Champion)"].map(c => c.id));
    if (updateLocalFromGameState) {
        await updateLocalFromGameState();  // Force rerender of zones
    }
    //console.log("After updateLocalFromGameState, Champion Zone:", gameState[username]["Zone (Champion)"].map(c => c.id));

    return true;
}

export function checkLingerEffects(card, newZone, gameState, addGameLogEntry) {
  if (card.lingerEffect === "ObliterateWhenLeave" && card.currentZone === "Zone (Champion)" && newZone !== "Zone (Champion)") {
    // Obliterate the card instead of sending to Tomb
    card.currentZone = "Void";
    card.lingerEffect = null; // Clear the effect after it triggers
    addGameLogEntry(`${card.name} was obliterated when it left the Champion zone.`);
    return true; // Indicate that we intercepted the move
  }

  return false; // No interception
}

async function updateGameStateZones(player, gameId, gameState, zones) {
  const payload = {};
  for (const zone of zones) {
    payload[zone] = gameState[player][zone];
  }

  await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      gameId,
      owner: player,
      updatedZones: payload
    })
  });
}

async function promptUserToSelect(cards, max, message) {
  return new Promise(resolve => {
    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0,0,0,0.85)",
      color: "white",
      padding: "20px",
      borderRadius: "12px",
      zIndex: 150000,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "90%",
      maxHeight: "90%",
      overflowY: "auto",
      boxShadow: "0 0 15px black",
    });

    const prompt = document.createElement("div");
    prompt.innerHTML = `<p style="font-size: 1.2em; margin-bottom: 10px;">${message}</p>`;
    overlay.appendChild(prompt);

    const container = document.createElement("div");
    Object.assign(container.style, {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center"
    });

    let selectedCard = null;

    for (const card of cards) {
      const el = renderCard(card);
      el.classList.add("selectable");
      el.style.cursor = "pointer";
      el.style.transform = "scale(0.5)";
      el.style.transformOrigin = "top left";
      el.dataset.cardId = card.id;

      // Set up click handling before wrapping
      const button = el.querySelector(".card-button");
      if (button) {
        button._originalHandler = button.onclick;
        button.onclick = (e) => {
          e.stopPropagation();
          e.preventDefault();
          updateSelection(card, el);
        };
      }

      el.onclick = () => {
        updateSelection(card, el);
      };

      // Create a wrapper that maintains scaled layout integrity
      const wrapper = document.createElement("div");
      wrapper.style.width = `${260 * 0.5}px`;      // Adjust to your card's native width
      wrapper.style.height = `${400 * 0.5}px`;     // Adjust to your card's native height
      wrapper.style.overflow = "visible";
      wrapper.style.position = "relative";
      wrapper.style.display = "inline-block";
      wrapper.style.marginRight = "5px";
      wrapper.style.gap = "20px";
      wrapper.style.padding = "20px";
      wrapper.style.transform = "translateX(50px)";
      wrapper.appendChild(el);

      container.appendChild(wrapper);
    }


    function updateSelection(card, element) {
      // Deselect previously selected card
      document.querySelectorAll(".card.selected").forEach(el => el.classList.remove("selected"));
      selectedCard = card;
      element.classList.add("selected");
    }

    overlay.appendChild(container);

    const buttonContainer = document.createElement("div");
    buttonContainer.style.marginTop = "20px";

    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Confirm";
    confirmBtn.onclick = () => {
      if (!selectedCard) return;
      document.body.removeChild(overlay);
      resolve([selectedCard]);
    };

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.style.marginLeft = "10px";
    cancelBtn.onclick = () => {
      document.body.removeChild(overlay);
      resolve([]);
    };

    buttonContainer.appendChild(confirmBtn);
    buttonContainer.appendChild(cancelBtn);
    overlay.appendChild(buttonContainer);

    document.body.appendChild(overlay);
  });
}

export async function excavateCards(effectText, card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  const match = effectText.match(/^Excavate(Op)?(\d+)/);
  if (!match) {
    console.warn(`⚠️ Invalid Excavate effect: "${effectText}"`);
    return;
  }

  const isOpponent = match[1] === "Op";
  const count = parseInt(match[2], 10);
  const targetPlayer = isOpponent ? getOpponent(username) : username;
  const deck = gameState[targetPlayer].Deck;

  if (deck.length < count) {
    console.warn("⚠️ Not enough cards to excavate.");
    return;
  }

  const revealed = deck.slice(0, count).map(c => cards.find(cardObj => String(cardObj.id) === String(c.id)) || c);
  window.lastExcavatedCards = revealed;
  window.lastExcavatedSource = targetPlayer;
  window.lastExcavatedCount = count;

  addGameLogEntry(`${card.name} excavated ${count} card(s) from ${isOpponent ? "opponent's" : "their"} deck.`);
}

export async function addCardByCondition(effectText, sourceCard, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  const match = effectText.match(/^Add(\d+)([A-Za-z]+)$/);
  if (!match) {
    console.warn(`❌ Invalid Add effect format: "${effectText}"`);
    return;
  }

  const count = parseInt(match[1]);
  const target = match[2];
  const deck = gameState[username].Deck;

  const valid = deck.filter(card => {
    const hasTag = card.tags?.includes(target);
    const isType = card.type === target;
    const comboMatch = /^[A-Z][a-z]+[A-Z][a-z]+$/.test(target); // e.g., CommanderObelisk
    const camelParts = target.match(/[A-Z][a-z]+/g);
    const hasBoth = camelParts?.length === 2 &&
      card.type === camelParts[1] &&
      card.tags?.includes(camelParts[0]);

    return hasTag || isType || hasBoth;
  });

  if (!valid.length) {
    alert(`No cards in your deck match: ${target}`);
    return;
  }

  const selected = await promptUserToSelect(valid, Math.min(count, valid.length), `Choose up to ${count} card(s) to Add to Hand matching: ${target}`);
  if (!selected.length) return;

  for (const chosen of selected) {
    const index = deck.findIndex(c => c.id === chosen.id);
    if (index !== -1) deck.splice(index, 1);
    chosen.lastBoardState = "Deck";
    chosen.boardState = "Hand";
    gameState[username].Hand.push(chosen);
    addGameLogEntry(`${username} added ${chosen.name} to hand from deck.`);
  }

  await updateGameStateZones(username, gameId, gameState, ["Deck", "Hand"]);
  updateLocalFromGameState();
}

async function evaluateAbilityCondition(condition, card, gameState, username) {
  // Extend this for future condition types
  if (condition === "") return true;
  if (condition === "IfWouldDie") {
    return card.boardState === "Zone (Champion)" || card.lastBoardState === "Zone (Champion)";
  }
  console.warn(`⚠️ Unknown condition: "${condition}"`);
  return true;
}

async function payAbilityCost(cost, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  if (!cost) return true;

  const compositeMatch = /^(Offer|Mill|Sacrifice)\d+(.*)/.exec(cost);
  if (compositeMatch || cost.includes("Offer") || cost.includes("Mill") || cost.includes("Sacrifice")) {
    const fakeCard = { cardCostFunction: cost }; // Reuse your existing logic
    return await handleCardCostFunction(fakeCard, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
  }

  // Extend here if needed
  console.warn(`⚠️ Unknown cost format: "${cost}"`);
  return true;
}
async function handleLinger(lingerText, card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  if (!window.lastExcavatedCards || !Array.isArray(window.lastExcavatedCards)) {
    console.warn("No excavated cards available for linger effect.");
    return;
  }

  const lingerParts = lingerText.split(",").map(p => p.trim());

  for (const part of lingerParts) {
    switch (part) {
      case "Add1Revealed":
        const selected = await promptUserToSelect(window.lastExcavatedCards, 1, "Choose 1 card to add to your hand.");
        if (selected.length > 0) {
          if (gameState.canAddCards === false) {
            addGameLogEntry(`${username} attempted to add a card to hand, but was blocked by the Blindfolded Totem.`);
            break;
          }

          const chosen = selected[0];
          const index = gameState[window.lastExcavatedSource].Deck.findIndex(c => String(c.id) === String(chosen.id));
          if (index !== -1) {
            gameState[window.lastExcavatedSource].Deck.splice(index, 1);
            chosen.lastBoardState = "Deck";
            chosen.boardState = "Hand";
            gameState[username].Hand.push(chosen);
            addGameLogEntry(`${username} added ${chosen.name} to hand from excavation.`);
          }
        }
        break;

      case "ObliterateOthers":
        const toObliterate = window.lastExcavatedCards.filter(c => !gameState[username].Hand.includes(c));
        for (const card of toObliterate) {
          const index = gameState[window.lastExcavatedSource].Deck.findIndex(c => String(c.id) === String(card.id));
          if (index !== -1) {
            gameState[window.lastExcavatedSource].Deck.splice(index, 1);
          }
          card.lastBoardState = "Deck";
          card.boardState = "Void";
          gameState[window.lastExcavatedSource].Void.push(card);
        }
        if (toObliterate.length > 0)
          addGameLogEntry(`${toObliterate.length} excavated card(s) were obliterated.`);
        break;

      default:
        console.warn(`⚠️ Unrecognized linger effect: "${part}"`);
    }
  }

  await updateGameStateZones(username, gameId, gameState, ["Deck", "Hand", "Void"]);
  updateLocalFromGameState();
  delete window.lastExcavatedCards;
  delete window.lastExcavatedSource;
  delete window.lastExcavatedCount;
}

export async function resurrectByCondition(
  effectText,
  card,
  gameState,
  username,
  gameId,
  updateLocalFromGameState,
  addGameLogEntry
) {
  return new Promise(async (resolve) => {
    const tomb = gameState[username]?.Tomb || [];

    if (effectText === "ResurrectSelf") {
      const index = tomb.findIndex(c => String(c.id) === String(card.id));
      if (index === -1) {
        console.warn("❌ Cannot resurrect self; not in tomb.");
        return resolve();
      }

      tomb.splice(index, 1);
      card.lastBoardState = "Tomb";
      card.boardState = "Zone (Champion)";
      card.currentZone = "Zone (Champion)";
      card.lingerEffect = "ObliterateWhenLeave";
      gameState[username]["Zone (Champion)"].push(card);

      await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameId,
          owner: username,
          updatedZones: {
            Tomb: gameState[username].Tomb,
            "Zone (Champion)": gameState[username]["Zone (Champion)"]
          }
        })
      });

      addGameLogEntry(`${username} resurrected ${card.name} from the Tomb.`);
      updateLocalFromGameState(gameState);
      resolve();
    } else {
      const match = effectText.match(/^Resurrect(\d+)([A-Za-z]+)$/);
      if (!match) {
        console.warn(`❌ Invalid resurrection effect format: ${effectText}`);
        return resolve();
      }

      const [, countStr, tag] = match;
      const count = parseInt(countStr);
      const tagName = tag;

      const validTargets = tomb.filter(c => c.tags?.includes(tagName));
      if (validTargets.length === 0) {
        alert(`No ${tagName} cards available in your Tomb to resurrect.`);
        return resolve();
      }

      // UI Overlay Setup
      const overlay = document.createElement("div");
      Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.9)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        zIndex: 120000
      });

      const title = document.createElement("div");
      title.textContent = `Select up to ${count} ${tagName}(s) to resurrect.`;
      title.style.color = "white";
      title.style.fontSize = "20px";
      overlay.appendChild(title);

      const list = document.createElement("div");
      Object.assign(list.style, {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        maxWidth: "90vw"
      });
      overlay.appendChild(list);

      const selected = new Set();

      validTargets.forEach(target => {
        const wrapper = document.createElement("div");
        Object.assign(wrapper.style, {
          transform: "scale(1.5)",
          transformOrigin: "top left",
          transition: "outline 0.3s ease",
          cursor: "pointer"
        });

        const cardEl = renderCard(target);
        wrapper.appendChild(cardEl);

        wrapper.onclick = () => {
          if (selected.has(target)) {
            selected.delete(target);
            wrapper.style.outline = "none";
          } else if (selected.size < count) {
            selected.add(target);
            wrapper.style.outline = "3px solid yellow";
          }
        };

        list.appendChild(wrapper);
      });

      const confirmBtn = document.createElement("button");
      confirmBtn.textContent = "Confirm Resurrection";
      Object.assign(confirmBtn.style, {
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer"
      });

      confirmBtn.onclick = async () => {
        const resurrected = [...selected];
        resurrected.forEach(c => {
          const i = tomb.findIndex(tc => tc.id === c.id);
          if (i !== -1) tomb.splice(i, 1);
          c.lastBoardState = "Tomb";
          c.boardState = "Zone (Champion)";
          c.currentZone = "Zone (Champion)";
          c.lingerEffect = "ObliterateWhenLeave";
          gameState[username]["Zone (Champion)"].push(c);
        });

        await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            gameId,
            owner: username,
            updatedZones: {
              Tomb: gameState[username].Tomb,
              "Zone (Champion)": gameState[username]["Zone (Champion)"]
            }
          })
        });

        addGameLogEntry(`${username} resurrected ${resurrected.length} ${tagName}(s) from the Tomb.`);
        document.body.removeChild(overlay);
        updateLocalFromGameState(gameState);
        resolve();
      };

      overlay.appendChild(confirmBtn);
      document.body.appendChild(overlay);
    }
  });
}

export function retrieveCardByCondition(
  effectText,
  card,
  gameState,
  username,
  gameId,
  updateLocalFromGameState,
  addGameLogEntry,
  batchMilledCards = null,
  fullCardDatabase // <-- new required param
) {
  return new Promise((resolve) => {
    const match = effectText.match(/^Retrieve(Different)?([A-Za-z]+)$/);
    if (!match) {
      console.warn(`⚠️ Invalid retrieve effect name: "${effectText}"`);
      return resolve();
    }

    const [_, differentFlag, tag] = match;

    // Get raw Tomb array (partial/full cards)
    const tombArray = gameState[username]?.Tomb || [];
    let tombSource = [...tombArray];

    // Add batch milled cards if any (full objects)
    if (Array.isArray(batchMilledCards) && batchMilledCards.length > 0) {
      batchMilledCards.forEach(card => {
        if (!tombSource.some(c => c.id === card.id)) {
          tombSource.push(card);
        }
      });
    }

    // Hydrate tombSource cards by looking up full cards in database
    tombSource = tombSource.map(cardOrRef => {
      if (cardOrRef.tags && cardOrRef.name) {
        return cardOrRef; // already full card
      }
      const fullCard = fullCardDatabase.find(
        full => String(full.id) === String(cardOrRef.id)
      );
      if (!fullCard) {
        console.warn(`⚠️ Could not find full card data for ID: ${cardOrRef.id}`);
      }
      return fullCard || null;
    }).filter(c => c !== null);

    // Filter tombSource for cards with tags array
    tombSource = tombSource.filter(c => c && Array.isArray(c.tags));

    // Clean up nulls in gameState tomb
    gameState[username].Tomb = gameState[username].Tomb.filter(c => c != null);

    // Find valid targets: has tag, and different if required
    const validTargets = tombSource.filter(targetCard => {
      if (!targetCard) return false;
      if (!Array.isArray(targetCard.tags)) return false;

      const hasTag = targetCard.tags.includes(tag);
      const differentName = !differentFlag || targetCard.name !== card.name;

      return hasTag && differentName;
    });

    if (validTargets.length === 0) {
      const popup = document.createElement("div");
      Object.assign(popup.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#333",
        color: "white",
        padding: "20px",
        border: "2px solid white",
        borderRadius: "10px",
        zIndex: "150001",
        textAlign: "center",
        fontSize: "1.2em"
      });

      popup.innerHTML = `
        <p>No valid ${tag} cards to retrieve.</p>
        <button id="closePopup" style="margin-top: 15px;">Confirm</button>
      `;

      document.body.appendChild(popup);
      document.getElementById("closePopup").onclick = () => {
        popup.remove();
        resolve();
      };
      return;
    }

    // Create overlay for selection
    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "min(90%, 800px)",
      backgroundColor: "#222",
      border: "3px solid white",
      borderRadius: "12px",
      zIndex: "160000",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      padding: "10px 20px"
    });
    document.body.appendChild(overlay);

    const header = document.createElement("div");
    header.innerHTML = `<p style="color: white; font-size: 1.2em;">Select 1 ${tag} to retrieve</p>`;
    overlay.appendChild(header);

    const cardContainer = document.createElement("div");
    Object.assign(cardContainer.style, {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px"
    });
    overlay.appendChild(cardContainer);

    let selectedWrapper = null;
    let selectedCard = null;

    validTargets.forEach(targetCard => {
      // Assume renderCard is your existing function to create a card DOM element
      const wrapper = document.createElement("div");
      Object.assign(wrapper.style, {
        width: `${260 * 0.3}px`,
        height: `${400 * 0.3}px`,
        position: "relative",
        cursor: "pointer"
      });

      const scaledCard = renderCard(targetCard);
      Object.assign(scaledCard.style, {
        top: "-22.5%",
        left: "50%",
        transform: "scale(0.3)",
        transformOrigin: "top left",
        pointerEvents: "none"
      });

      const overlayBtn = document.createElement("button");
      Object.assign(overlayBtn.style, {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        opacity: "0",
        background: "transparent",
        border: "none",
        cursor: "pointer"
      });

      overlayBtn.onclick = () => {
        if (selectedWrapper === wrapper) {
          // Deselect
          wrapper.style.outline = "none";
          wrapper.style.boxShadow = "none";
          selectedWrapper = null;
          selectedCard = null;
        } else {
          if (selectedWrapper) selectedWrapper.style.outline = "none";
          if (selectedWrapper) selectedWrapper.style.boxShadow = "none";
          wrapper.style.outline = "4px solid yellow";
          wrapper.style.boxShadow = "0 0 12px 4px yellow";
          wrapper.style.boxSizing = "border-box";
          wrapper.style.margin = "0";
          wrapper.style.padding = "0";
          wrapper.style.position = "relative";

          selectedWrapper = wrapper;
          selectedCard = targetCard;
        }
      };

      wrapper.appendChild(scaledCard);
      wrapper.appendChild(overlayBtn);
      cardContainer.appendChild(wrapper);
    });

    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Confirm";
    Object.assign(confirmBtn.style, {
      fontSize: "1.2em",
      padding: "10px 20px",
      marginTop: "10px",
      //backgroundColor: "#4caf50",
      //color: "white",
      border: "none",
      borderRadius: "2px",
      cursor: "pointer"
    });

    confirmBtn.onclick = async () => {
      if (!selectedCard) return alert("You must select a card to retrieve.");

      // Find index of selectedCard in Tomb by ID
      const index = gameState[username].Tomb.findIndex(c => String(c.id) === String(selectedCard.id));
      if (index !== -1) {
        const [retrievedCard] = gameState[username].Tomb.splice(index, 1);
        retrievedCard.lastBoardState = "Tomb";
        retrievedCard.boardState = "Hand";
        gameState[username].Hand.push(retrievedCard);

        try {
          const response = await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              gameId,
              owner: username,
              updatedZones: {
                Hand: gameState[username].Hand,
                Tomb: gameState[username].Tomb
              }
            })
          });

          if (!response.ok) {
            console.error("🛑 Failed to update game state during retrieve");
            return resolve();
          }

          addGameLogEntry(`${username} retrieved ${retrievedCard.name} from the Tomb`);
          overlay.remove();
          updateLocalFromGameState();
          resolve();

        } catch (error) {
          console.error("❌ Error during retrieveCardByCondition fetch:", error);
          resolve();
        }
      } else {
        alert("❌ Card not found in Tomb.");
        overlay.remove();
        resolve();
      }
    };

    overlay.appendChild(confirmBtn);
  });
}