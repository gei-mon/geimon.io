import { renderCard } from './cardRenderer.js';
import { cards } from '../data/cards.js';
import { tokens } from '../data/tokens.js';
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

export function hasUsedEffectThisTurn(gameId, turn, cardId, effectText) {
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
  "ResurrectSelf":   resurrectByCondition,
  "ResurrectByCondition": resurrectByCondition,
  "RetrieveCardByCondition": retrieveCardByCondition,
  "Add": addCardByCondition,
  "Excavate": excavateCards,
  "Toll1": async function(effectText, card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
    const currentPlayer = gameState.turn.currentPlayer;
    const attacker = gameState[currentPlayer];
    if (!attacker) return;
    await changeLife(currentPlayer, -1, gameState, username, gameId);
    addGameLogEntry(`${currentPlayer} paid 1 Life due to ${card.name}`);
  },
  "Activate": activateCardByCondition
};

function getFallbackEffectFunc(effectText) {
  if (/^Retrieve/.test(effectText)) return retrieveCardByCondition;
  if (/^Resurrect/.test(effectText)) return resurrectByCondition;
  if (/^Add/.test(effectText)) return addCardByCondition;
  return null;
}

const serverUrl = "https://geimon-app-833627ba44e0.herokuapp.com";

// replicate your global helper from game.html
async function sendZoneUpdate(zones, gameState, username, gameId) {
  const updatedZones = {};
  zones.forEach(z => updatedZones[z] = gameState[username][z]);

  const res = await fetch(`${serverUrl}/updateGameState`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ gameId, owner: username, updatedZones })
  });
  const data = await res.json();
  if (data.updatedPlayerZone) {
    gameState[username] = data.updatedPlayerZone; // sync back
  }
  return data;
}

async function drawCardsHandler(count, card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  // 1) Remove from Deck
  const deck = gameState[username].Deck;
  const drawn = deck.splice(0, count);
  // 2) Move to Hand
  drawn.forEach(c => {
      c.lastBoardState = c.boardState;
      c.boardState     = "Hand";
  });
  gameState[username].Hand.push(...drawn);

  // 3) Persist changes
  await sendZoneUpdate(["Deck", "Hand"], gameState, username, gameId);
  // 4) UI & log
  addGameLogEntry(`${username} drew ${count} card${count>1?"s":""}.`);
  await updateLocalFromGameState();

  return drawn;
}

async function oppDrawCardsHandler(count, card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  // Find opponent
  const opponent = Object.keys(gameState).find(p => p !== username && p !== "turn");
  if (!opponent) return;

  const deck = gameState[opponent].Deck;
  const drawn = deck.splice(0, count);
  drawn.forEach(c => {
      c.lastBoardState = c.boardState;
      c.boardState     = "Hand";
  });
  gameState[opponent].Hand.push(...drawn);

  // Persist opponent zones
  await fetch(`${serverUrl}/updateGameState`, {
      method: 'POST', credentials: 'include',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
      gameId, owner: opponent,
      updatedZones: { Deck: deck, Hand: gameState[opponent].Hand }
      })
  });

  addGameLogEntry(`${opponent} drew ${count} card${count>1?"s":""} (via ${card.name}).`);
  await updateLocalFromGameState();

  return drawn;
}

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
  let revealedCards = null;

  for (const ability of abilities) {
    for (const num of [1, 2, 3]) {
      const type = ability[`effect${num}type`];
      const condition = ability[`effect${num}condition`] || "";
      const cost = ability[`effect${num}cost`] || "";
      const text = ability[`effect${num}text`] || "";
      const linger = ability[`effect${num}linger`] || "";

      const typeMatches = Array.isArray(type) ? type.includes(triggerType) : type === triggerType;
      if (!typeMatches || (!text && !cost)) continue;

      const isTombOnly = typeof type === "string"
        ? type.includes("Tomb")
        : Array.isArray(type) && type.some(t => t.includes("Tomb"));
      if (isTombOnly && card.boardState !== "Tomb") {
        console.log(`⛔ Skipping Tomb effect for ${card.name} — not in Tomb (currently in ${card.boardState})`);
        continue;
      }

      if (!isTombOnly && card.boardState === "Tomb") {
        console.log(`⛔ Skipping non-Tomb effect for ${card.name} — it is in the Tomb`);
        continue;
      }

      const isMandatory = Array.isArray(type) ? type.includes("Mandatory") : type === "Mandatory";
      const shouldConfirm = !isMandatory && text && !/^Mill\d+$/.test(cost);

      if (Array.isArray(type) && type.includes("Exhaustion")) {
        if (card.exhausted) {
          addGameLogEntry(`${card.name} is exhausted and cannot use another Exhaustion effect this turn.`);
          continue;
        }
        card.exhausted = true;
        addGameLogEntry(`${card.name} is now exhausted.`);
      }

      if (shouldConfirm) {
        const confirmed = await confirmAbilityTrigger(card.name, text);
        if (!confirmed) continue;
      }

      const cardId = card.id;
      const currentTurn = gameState.turn?.count ?? 0;

      if (hasUsedEffectThisTurn(gameId, currentTurn, cardId, text)) continue;

      if (condition) {
        const passed = await evaluateAbilityCondition(condition, card, gameState, username);
        if (!passed) continue;
      }

      if (cost && !(await payAbilityCost(cost, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry))) {
        continue;
      }

      const effects = text.split(",");

      for (const individualEffect of effects) {
        let effectFunc = null;

        if (individualEffect.startsWith("Excavate")) {
          revealedCards = await excavateCards(
            individualEffect,
            card,
            gameState,
            username,
            gameId,
            updateLocalFromGameState,
            addGameLogEntry
          );

          // ✅ Immediately remove revealed cards from deck
          if (revealedCards?.length > 0) {
            const revealedIds = new Set(revealedCards.map(c => c.id));
            gameState[username].Deck = gameState[username].Deck.filter(c => !revealedIds.has(c.id));
          }

          continue;
        }

        if (individualEffect === "Add1Revealed") {
          effectFunc = async () => {
            if (!revealedCards || revealedCards.length === 0) {
              console.warn("🚫 No revealed cards available for Add1Revealed.");
              alert("No cards were revealed to add.");
              return;
            }

            const added = await addCardByCondition(
              individualEffect,
              card,
              gameState,
              username,
              gameId,
              updateLocalFromGameState,
              addGameLogEntry,
              revealedCards
            );

            if (added && added.length > 0) {
              const addedCard = added[0];

              // ✅ Remove from revealedCards so it isn't returned or obliterated later
              revealedCards = revealedCards.filter(c => c.id !== addedCard.id);

              // ✅ Also remove from deck in case it was still there
              gameState[username].Deck = gameState[username].Deck.filter(c => c.id !== addedCard.id);
            }

            return added;
          };
        } else if (individualEffect.startsWith("Retrieve") && gameState.canRetrieve !== false) {
          effectFunc = retrieveCardByCondition;
        } else if (/^Add\d+[A-Za-z]+$/.test(individualEffect) && gameState.canAddCards !== false) {
          effectFunc = async () => {
            const added = await addCardByCondition(
              individualEffect,
              card,
              gameState,
              username,
              gameId,
              updateLocalFromGameState,
              addGameLogEntry
            );

            // ✅ REMOVE added card from revealedCards if present
            if (revealedCards?.length && Array.isArray(added)) {
              for (const addedCard of added) {
                revealedCards = revealedCards.filter(c => c.id !== addedCard.id);
              }
            }

            return added;
          };
        } else if (/^Mill\d+$/.test(individualEffect)) {
          const count = parseInt(individualEffect.replace("Mill", ""));
          effectFunc = async () => {
            return millCards(count, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
          };
        } else if (/^Rally\d+[A-Za-z]+Token$/.test(individualEffect)) {
            effectFunc = () => rallyToken(
            individualEffect, card,
            gameState, username, gameId,
            updateLocalFromGameState, addGameLogEntry
          );
        } else if (/^OppRally\d+[A-Za-z]+Token$/.test(individualEffect)) {
          effectFunc = () => oppRallyToken(
            individualEffect, card,
            gameState, username, gameId,
            updateLocalFromGameState, addGameLogEntry
          );
        } else if (/^Draw(\d+)$/.test(individualEffect)) {
          const count = +individualEffect.match(/^Draw(\d+)$/)[1];
          effectFunc = () =>
            drawCardsHandler(
              count, card,
              gameState, username, gameId,
              updateLocalFromGameState,
              addGameLogEntry
            );
        } else if (/^OppDraw(\d+)$/.test(individualEffect)) {
          const count = +individualEffect.match(/^OppDraw(\d+)$/)[1];
          effectFunc = () =>
            oppDrawCardsHandler(
              count, card,
              gameState, username, gameId,
              updateLocalFromGameState,
              addGameLogEntry
            );
        } else if (/^Activate\d*(Free)?[A-Za-z]+From/.test(individualEffect)) {
            effectFunc = async () => {
              await activateCardByCondition(
                individualEffect,
                card,
                gameState,
                username,
                gameId,
                updateLocalFromGameState,
                addGameLogEntry
              );
            };
        } else if (effectMap[individualEffect]) {
          effectFunc = () =>
            effectMap[individualEffect](
              individualEffect,
              card,
              gameState,
              username,
              gameId,
              updateLocalFromGameState,
              addGameLogEntry
            );
        }

        if (!effectFunc) {
          effectFunc = getFallbackEffectFunc(individualEffect);
        }

        if (!effectFunc) {
          console.warn(`⚠️ No effect handler for "${individualEffect}"`);
          continue;
        }

        const isReflexSpeed = ["Reflex", "Rush"].includes(type);
        if (isReflexSpeed) {
          await addPathStep(
            card,
            card.boardState,
            gameState,
            username,
            gameId,
            updateLocalFromGameState,
            addGameLogEntry,
            effectFunc,
            individualEffect
          );
        } else {
          const result = await effectFunc();
          if (result) promises.push(result);
        }
      }

      if (revealedCards?.length > 0) {
        const keptIds = gameState[username].Hand.map(c => c.id);
        const returned = revealedCards.filter(c => !keptIds.includes(c.id));
        const obliterateUsed = effects.includes("ObliterateOthers");

        if (obliterateUsed) {
          if (returned.length > 0) {
            for (const card of returned) {
              card.lastBoardState = "Deck";
              card.boardState = "Void";
              gameState[username].Void.push(card);
              addGameLogEntry(`${card.name} was obliterated from the revealed cards`);
            }

            await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                gameId,
                owner: username,
                updatedZones: {
                  Void: gameState[username].Void
                }
              })
            });
          }
        } else if (returned.length > 0) {
          const obliterateUsed = linger.includes("ObliterateOthers");
          // ✅ Return remaining revealed cards to deck
          gameState[username].Deck.push(...returned);

          // ✅ Shuffle the deck
          gameState[username].Deck = shuffleArray(gameState[username].Deck);

          // ✅ Log the shuffle
          if (!obliterateUsed) {
            addGameLogEntry(`${returned.length} excavated card(s) were returned and the deck was shuffled`);
          }

          // ✅ Persist updated deck
          await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              gameId,
              owner: username,
              updatedZones: {
                Deck: gameState[username].Deck
              }
            })
          });
        }
      }

      if (linger) {
        const lingerPromise = handleLinger(
          linger,
          card,
          gameState,
          username,
          gameId,
          updateLocalFromGameState,
          addGameLogEntry
        );
        if (lingerPromise) promises.push(lingerPromise);
      }
    }
  }

  await Promise.all(promises);
}

export async function addPathStep(card, zone, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry, effectFunc, label) {
  const stepNumber = window.pathStepNumber++;
  window.effectPath.push({
    cardId: card.id,
    zone,
    stepNumber,
    effectFunc,
    label
  });

  showPathStepIndicator(card.id, zone, stepNumber);
  addGameLogEntry(`${label} was added to the Path as Step ${stepNumber}`);

  // 🔁 Now prompt opposing player
  await promptOpponentToRespond(card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
}

export async function resolvePath(gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  const path = [...window.effectPath];
  window.effectPath = [];
  window.pathStepNumber = 1;

  for (let i = path.length - 1; i >= 0; i--) {
    const step = path[i];
    addGameLogEntry(`Resolving Step ${step.stepNumber}: ${step.label}`);
    if (typeof step.effectFunc === "function") {
      await step.effectFunc();
    }
  }

  document.querySelectorAll(".path-step-indicator").forEach(el => el.remove());
  await updateLocalFromGameState();
}

async function promptOpponentToRespond(triggerCard, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  const opponent = Object.keys(gameState).find(p => p !== username && p !== "turn");
  if (!opponent) return;

  const currentTurn = gameState.turn.count;
  const isTurnPlayer = gameState.turn.currentPlayer === opponent;

  const reflexCards = [
    ...gameState[opponent]["Zone (Champion)"],
    ...gameState[opponent]["FaceDownArsenalZone"],
    ...gameState[opponent].Hand,
    ...gameState[opponent].Tomb,
    ...gameState[opponent].Void
  ].filter(card => {
    if (!card || !card.abilities) return false;
    const full = cards.find(c => String(c.id) === String(card.id));
    if (!full) return false;

    const currentTurn = gameState.turn.count;
    const isTurnPlayer = gameState.turn.currentPlayer === opponent;
    const isSet = card.boardState === "FaceDownArsenalZone";
    const wasSetAtLeastOneTurnAgo = (card.setTurn || 0) < currentTurn;

    // 🧪 Reflex cards (Traps)
    if (full.type === "Reflex") {
      return isSet && wasSetAtLeastOneTurnAgo;
    }

    // ⚡ Rush cards (Quick Spells)
    if (full.type === "Rush") {
      if (isTurnPlayer && card.boardState === "Hand") return true;
      return isSet && wasSetAtLeastOneTurnAgo;
    }

    // 🧟 Reflex-speed effects from Tomb/Void
    if (["Tomb", "Void"].includes(card.boardState)) {
      const zoneType = card.boardState; // "Tomb" or "Void"
      return full.abilities.some(ability =>
        (Array.isArray(ability.effect1type) && ability.effect1type.includes("Reflex") && ability.effect1type.includes(zoneType)) ||
        (Array.isArray(ability.effect2type) && ability.effect2type.includes("Reflex") && ability.effect2type.includes(zoneType)) ||
        (Array.isArray(ability.effect3type) && ability.effect3type.includes("Reflex") && ability.effect3type.includes(zoneType))
      );
    }

    // 🛡️ Champion Reflex Effects
    const isChampion = card.boardState === "Zone (Champion)";
    const hasReflexEffect = full.abilities.some(ability =>
      (Array.isArray(ability.effect1type) && ability.effect1type.includes("Reflex")) ||
      (Array.isArray(ability.effect2type) && ability.effect2type.includes("Reflex")) ||
      (Array.isArray(ability.effect3type) && ability.effect3type.includes("Reflex"))
    );

    return isChampion && hasReflexEffect;
  });

  if (reflexCards.length === 0) {
    await new Promise(res => setTimeout(res, 600));
    resolvePath(gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
    return;
  }

  // Show selection prompt
  window.showResponsePrompt(reflexCards, async selectedCard => {
    const full = cards.find(c => c.id === selectedCard.id);
    const firstReflexEffect = full.abilities.find(a => a.effect1type === "Reflex");

    if (!firstReflexEffect) {
      addGameLogEntry(`${opponent} selected ${selectedCard.name}, but no Reflex effect was found.`);
      resolvePath(gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
      return;
    }

    const effectFunc = AbilityExecutor[firstReflexEffect.effect1name];
    if (!effectFunc) {
      addGameLogEntry(`${selectedCard.name} has no handler for ${firstReflexEffect.effect1name}`);
      resolvePath(gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
      return;
    }

    await addPathStep(
      selectedCard,
      selectedCard.boardState,
      gameState,
      opponent,
      gameId,
      updateLocalFromGameState,
      addGameLogEntry,
      effectFunc,
      firstReflexEffect.effect1text
    );
  }, () => {
    addGameLogEntry(`${opponent} passed on responding.`);
    resolvePath(gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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
  if (Array.isArray(window.effectPath) && window.effectPath.length > 0) {
    console.log("📛 Skipping individual confirm popup: part of batch Path.");
    return true; // auto-accept during chained resolution
  }
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

async function showEffectOrderSelectionPopup(effectsArray) {
  return new Promise(resolve => {
    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "90%",
      backgroundColor: "#222",
      border: "3px solid white",
      borderRadius: "12px",
      zIndex: 200000,
      padding: "20px",
      color: "white",
      textAlign: "center"
    });

    overlay.innerHTML = `<p>Activate Optional Effects? Choose the order (Mandatory effects are marked):</p>`;

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "center";
    container.style.gap = "10px";
    overlay.appendChild(container);

    const remaining = [...effectsArray]; // clone

    const renderChoices = () => {
      container.innerHTML = "";

      remaining.forEach((entry, i) => {
        const button = document.createElement("button");
        button.innerHTML = `
          <img src="${entry.card.image}" style="height: 100px;"><br>
          ${entry.card.name}${entry.mandatory ? " <span style='color: yellow;'>(Mandatory)</span>" : ""}
        `;
        Object.assign(button.style, {
          padding: "10px",
          cursor: "pointer",
          background: "#444",
          border: "2px solid white",
          color: "white"
        });

        button.onclick = () => {
          window.effectPath.push(entry);
          remaining.splice(i, 1);
          if (remaining.length > 0) {
            renderChoices(); // re-render with updated list
          } else {
            document.body.removeChild(overlay);
            resolve(); // Done choosing
          }
        };

        container.appendChild(button);
      });
    };

    renderChoices();

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    Object.assign(cancelBtn.style, {
      marginTop: "10px",
      padding: "10px 20px",
      fontSize: "1.1em",
      background: "#a00",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer"
    });

    cancelBtn.onclick = () => {
      // Only resolve mandatory ones in random order
      const mandatory = remaining.filter(e => e.mandatory);
      const shuffled = mandatory.sort(() => 0.5 - Math.random());
      window.effectPath.push(...shuffled);
      document.body.removeChild(overlay);
      resolve();
    };

    overlay.appendChild(cancelBtn);
    document.body.appendChild(overlay);
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

  if (card.cardConditionFunction === "Set1Turn") {
    const currentTurn = gameState?.turn?.count || 0;
    return card.setTurn !== undefined && card.setTurn < currentTurn;
  }

  return false; // Unknown or invalid condition
}

export function canPayCardCost(card, gameState, username) {
    // Basic check for Sacrifice1, Offer3, etc. without resolving
    if (!card.cardCostFunction) return true;

    const drawMatch = card.cardCostFunction.match(/^Draw(\d+)$/);
    if (drawMatch) {
      const count = parseInt(drawMatch[1], 10);
      return (gameState[username].Deck?.length ?? 0) >= count;
    }

    const oppDrawMatch = card.cardCostFunction.match(/^OppDraw(\d+)$/);
    if (oppDrawMatch) {
      const count = parseInt(oppDrawMatch[1], 10);
      const opponent = Object.keys(gameState).find(p => p !== username && p !== "turn");
      if (!opponent) return false;
      return (gameState[opponent].Deck?.length ?? 0) >= count;
    }

    const offerMatch = card.cardCostFunction.match(/^Offer(\d+)$/);
    if (offerMatch) {
      const offerAmt = parseInt(offerMatch[1], 10);
      return (gameState[username].life ?? 0) >= offerAmt;
    } else if (/^Rally\d+[A-Za-z]+Token$/.test(card.cardCostFunction) ||
      /^OppRally\d+[A-Za-z]+Token$/.test(card.cardCostFunction)) {
      return true;
    }

    switch (card.cardCostFunction) {
      case "Sacrifice1":
        return (gameState[username]["Zone (Champion)"]?.length ?? 0) >= 1;
        // Add more cost checks as needed
      default:
        return false;
    }
}

export function isActivatableActionCard(fullCard, gameState, username) {
  const currentPhase = gameState?.turn?.currentPhase;
  const isMainPhase = currentPhase === "Main 1" || currentPhase === "Main 2";
  const isPlayerTurn = gameState.turn?.currentPlayer === username;

  const conditionMet = !fullCard.cardConditionFunction || checkCardConditionFunction(fullCard, gameState, username);
  const costMet = !fullCard.cardCostFunction || canPayCardCost(fullCard, gameState, username);

  const isPlayableEffect = fullCard.abilities?.some(a =>
    [a.effect1text, a.effect2text, a.effect3text].some(text =>
      text && !text.includes("Target1") // ✅ skip unimplemented effect types
    )
  );

  return isMainPhase && isPlayerTurn && conditionMet && costMet && isPlayableEffect;
}

function getOpponent(username, gameState) {
  return Object.keys(gameState)
    .filter(key => key !== username && key !== 'turn')[0];
}

export async function handleCardCostFunction(card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  const deck = gameState[username].Deck;
  const life = gameState[username].life;
  const controlledChampions = [
    ...(gameState[username]["Zone (Champion)"] || []),
    ...(gameState[username]["FaceDownZone"] || [])
  ];

  if (/^Rally\d+[A-Za-z]+Token$/.test(card.cardCostFunction)) {
    return await rallyToken(
      card.cardCostFunction, card,
      gameState, username, gameId,
      updateLocalFromGameState, addGameLogEntry
    );
  }
  if (/^OppRally\d+[A-Za-z]+Token$/.test(card.cardCostFunction)) {
    return await oppRallyToken(
      card.cardCostFunction, card,
      gameState, username, gameId,
      updateLocalFromGameState, addGameLogEntry
    );
  }
  if (/^Draw(\d+)$/.test(card.cardCostFunction)) {
    const count = +card.cardCostFunction.match(/^Draw(\d+)$/)[1];
    await drawCardsHandler(
      count, card,
      gameState, username, gameId,
      updateLocalFromGameState,
      addGameLogEntry
    );
    return true;
  }
  if (/^OppDraw(\d+)$/.test(card.cardCostFunction)) {
    const count = +card.cardCostFunction.match(/^OppDraw(\d+)$/)[1];
    await oppDrawCardsHandler(
      count, card,
      gameState, username, gameId,
      updateLocalFromGameState,
      addGameLogEntry
    );
    return true;
  }

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

export async function resolveBatchIfTombEffects(
  milledCards,
  gameState,
  username,
  gameId,
  updateLocalFromGameState,
  addGameLogEntry
) {
  const triggeringEffects = [];

  for (const card of milledCards) {
    const fullCard = cards.find(c => String(c.id) === String(card.id));
    if (!fullCard) continue;

    fullCard.boardState = "Tomb";
    fullCard.lastBoardState = "Deck";

    for (const ability of fullCard.abilities || []) {
      for (let i = 1; i <= 3; i++) {
        const type = ability[`effect${i}type`];
        const text = ability[`effect${i}text`];
        if (!text) continue;

        const typeMatches = Array.isArray(type) ? type.includes("IfTomb") : type === "IfTomb";
        const mandatory = Array.isArray(type) ? type.includes("Mandatory") : false;

        if (typeMatches) {
          triggeringEffects.push({
            card: fullCard,
            effectText: text,
            mandatory
          });
        }
      }
    }
  }

  if (triggeringEffects.length <= 1) {
    for (const entry of triggeringEffects) {
      window.effectPath.push(entry);
    }
  } else {
    await showEffectOrderSelectionPopup(triggeringEffects);
  }

  // ✅ Resolve Path in reverse order — calling effect functions directly
  while (window.effectPath.length > 0) {
    const { card, effectText } = window.effectPath.pop();

    // Only call the effect text that the user selected
    const effectFunc = effectMap[effectText] || getFallbackEffectFunc(effectText);
    if (effectFunc) {
      await effectFunc(
        effectText,
        card,
        gameState,
        username,
        gameId,
        updateLocalFromGameState,
        addGameLogEntry,
        milledCards,
        cards
      );
    } else {
      console.warn(`❓ No effect handler found for effect: ${effectText}`);
    }
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

    //if (updateLocalFromGameState) await updateLocalFromGameState();

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

export async function excavateCards(
  effectText,
  card,
  gameState,
  username,
  gameId,
  updateLocalFromGameState,
  addGameLogEntry
) {
  const match = effectText.match(/^Excavate(Op)?(\d+)/);
  if (!match) {
    console.warn(`⚠️ Invalid Excavate effect: "${effectText}"`);
    return [];
  }

  const isOpponent = match[1] === "Op";
  const count = parseInt(match[2], 10);
  const targetPlayer = isOpponent ? getOpponent(username) : username;
  const deck = gameState[targetPlayer].Deck;

  if (deck.length < count) {
    console.warn("⚠️ Not enough cards to excavate.");
    return [];
  }

  // Slice top N cards
  const topCards = deck.slice(0, count);

  // Look up full card data if needed
  const revealedCards = topCards.map(c =>
    cards.find(cardObj => String(cardObj.id) === String(c.id)) || c
  );

  // 🧹 Remove revealed cards from the deck
  const revealedIds = new Set(topCards.map(c => c.id));
  gameState[targetPlayer].Deck = deck.filter(c => !revealedIds.has(c.id));

  // Store for external access (UI etc.)
  window.lastExcavatedCards = revealedCards;
  window.lastExcavatedSource = targetPlayer;
  window.lastExcavatedCount = count;

  addGameLogEntry(`${card.name} excavated ${count} card(s) from ${isOpponent ? "opponent's" : "their"} deck.`);

  return revealedCards;
}

export async function addCardByCondition(
  effectText,
  sourceCard,
  gameState,
  username,
  gameId,
  updateLocalFromGameState,
  addGameLogEntry,
  poolOverride = null
) {
  const match = effectText.match(/^Add(\d+)([A-Za-z]+)$/);
  if (!match) {
    console.warn(`❌ Invalid Add effect format: "${effectText}"`);
    return;
  }

  const count = parseInt(match[1]);
  const target = match[2];

  // Special case for 'Revealed' — use lastExcavatedCards
  let sourcePool = poolOverride || gameState[username].Deck;

  if (target === "Revealed") {
    sourcePool = window.lastExcavatedCards || [];
    if (!sourcePool.length) {
      alert("No cards were revealed to add.");
      return;
    }
  }

  let poolCards;
  if (target === "Revealed") {
    poolCards = sourcePool;
  } else {
    poolCards = sourcePool.map(c =>
      cards.find(db => String(db.id) === String(c.id)) || c
    );
  }

  const valid = poolCards.filter(card => {
    if (target === "Revealed") return true; // no filtering on revealed cards

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
    // Only remove from deck if the pool was the real deck (not revealed)
    if (!poolOverride && target !== "Revealed") {
      gameState[username].Deck = gameState[username].Deck.filter(c => String(c.id) !== String(chosen.id));
    }

    chosen.lastBoardState = "Deck";
    chosen.boardState = "Hand";
    gameState[username].Hand.push(chosen);
    addGameLogEntry(`${username} added ${chosen.name} to hand from ${target === "Revealed" ? "excavated cards" : "deck"}.`);
  }

  await updateGameStateZones(username, gameId, gameState, ["Deck", "Hand"]);
  updateLocalFromGameState();
  return selected;
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
          const deck = gameState[window.lastExcavatedSource].Deck;

          const index = deck.findIndex(c => String(c.id) === String(chosen.id));
          if (index !== -1) {
            deck.splice(index, 1);
            chosen.lastBoardState = "Deck";
            chosen.boardState = "Hand";
            gameState[username].Hand.push(chosen);
            addGameLogEntry(`${username} added ${chosen.name} to hand from excavation.`);
          }

          // ✅ NEW: Return unchosen cards to deck and shuffle
          const remaining = window.lastExcavatedCards.filter(c => c.id !== chosen.id);
          for (const r of remaining) {
            const alreadyInDeck = deck.find(c => String(c.id) === String(r.id));
            if (!alreadyInDeck) deck.push(r);
          }

          // Fisher-Yates Shuffle
          for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
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
          addGameLogEntry(`${toObliterate.length} excavated card(s) were obliterated`);
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
      if (!selectedCard) {
        alert("You must select a card to retrieve.");
        return;
      }

      const retrievedCard = selectedCard;
      const tomb = gameState[username].Tomb;

      // 📦 Debug: Tomb contents
      console.log("📦 Tomb contents:", tomb);
      console.log("🎯 Selected ID:", retrievedCard.id);

      const index = tomb.findIndex(c => String(c?.id) === String(retrievedCard.id));

      if (index !== -1) {
        tomb.splice(index, 1); // remove from Tomb
      } else {
        console.warn("⚠️ Selected card not found in actual Tomb zone. Still retrieving anyway.");
      }

      // Add to hand and update state
      retrievedCard.lastBoardState = "Tomb";
      retrievedCard.boardState = "Hand";
      gameState[username].Hand.push(retrievedCard);
      console.log("Card added to Hand:", retrievedCard);
      console.log("Current Hand:", gameState[username].Hand);

      const cleanedHand = gameState[username].Hand.map(c => ({
        id: c.id,
        boardState: c.boardState,
        lastBoardState: c.lastBoardState
      }));

      const cleanedTomb = gameState[username].Tomb.map(c => ({
        id: c.id,
        boardState: c.boardState,
        lastBoardState: c.lastBoardState
      }));

      console.log("🛰️ Sending to server:", {
        Hand: cleanedHand,
        Tomb: cleanedTomb
      });

      try {
        const response = await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            gameId,
            owner: username,
            updatedZones: {
              Hand: cleanedHand,
              Tomb: cleanedTomb
            }
          })
        });

        const text = await response.text();
        console.log("📡 Server responded:", response.status, text);
        await new Promise(resolve => setTimeout(resolve, 100));
        const event = new Event("gameStateUpdated");
        document.dispatchEvent(event);

        if (!response.ok) {
          console.error("🛑 Failed to update game state during retrieve");
        } else {

          function rehydrateZone(zone, cards) {
            return zone.map(card => {
              const full = cards.find(c => String(c.id) === String(card.id));
              if (!full) {
                console.warn("⚠️ Could not rehydrate card:", card.id);
                return card; // leave it as-is so it's not erased
              }
              return {
                ...full,
                boardState: card.boardState,
                lastBoardState: card.lastBoardState
              };
            });
          }

          gameState[username].Hand = rehydrateZone(gameState[username].Hand, cards);
          gameState[username].Tomb = rehydrateZone(gameState[username].Tomb, cards);

          addGameLogEntry(`${username} retrieved ${retrievedCard.name} from the Tomb`);

          const event = new Event("gameStateUpdated");
          document.dispatchEvent(event);
        }
      } catch (error) {
        console.error("❌ Error during retrieveCardByCondition fetch:", error);
      } finally {
        overlay.remove();
        resolve();
      }
    };
    overlay.appendChild(confirmBtn);
  });
}
export async function showEffectChoicePrompt(card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  const effects = [];
  for (let i = 1; i <= 3; i++) {
    const text = card.abilities?.[0]?.[`effect${i}text`];
    const type = card.abilities?.[0]?.[`effect${i}type`];
    if (text && type && (Array.isArray(type) ? type.includes("Standard") : type === "Standard")) {
      effects.push(text);
    }
  }

  if (effects.length === 0) return;

  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    border: "2px solid white",
    borderRadius: "10px",
    zIndex: 120001,
    textAlign: "center",
    boxShadow: "0 0 10px black"
  });

  overlay.innerHTML = `<p>Choose effect to activate:</p>`;
  effects.forEach(effect => {
    const btn = document.createElement("button");
    btn.textContent = effect;
    btn.onclick = async () => {
      document.body.removeChild(overlay);
      await declareAbility(card, "Standard", gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
    };
    overlay.appendChild(btn);
  });

  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.style.marginLeft = "10px";
  cancel.onclick = () => document.body.removeChild(overlay);
  overlay.appendChild(cancel);

  document.body.appendChild(overlay);
}

// Rally tokens to your own face-up Champion zone
export async function rallyToken(
  effectText, card,
  gameState, username, gameId,
  updateLocalFromGameState, addGameLogEntry
) {
  const m = effectText.match(/^Rally(\d+)([A-Za-z]+)Token$/);
  if (!m) {
    console.warn(`⚠️ Invalid RallyToken effect: "${effectText}"`);
    return;
  }
  const [, countStr, type] = m;
  const count = parseInt(countStr, 10);
  const tpl = tokens.find(t => t.name === `${type} Token`);
  if (!tpl) {
    console.warn(`⚠️ No token template for type: ${type}`);
    return;
  }
  const zone = gameState[username]["Zone (Champion)"];
  for (let i = 0; i < count; i++) {
    zone.push({ ...tpl, boardState: "Zone (Champion)", lastBoardState: null });
  }
  console.log(`🪙 [rallyToken] ${username}'s Zone (Champion) now contains:`, 
              zone.map(c => `${c.id} (${c.name})`));
  await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
    method: "POST", credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      gameId, owner: username,
      updatedZones: { "Zone (Champion)": zone }
    })
  });
  addGameLogEntry(`${username} rallied ${count} ${type} Token${count>1?'s':''}`);
  updateLocalFromGameState();
  console.log(`🪙 After updateLocal [rallyToken] ${username}'s Zone (Champion) now contains:`, 
              zone.map(c => `${c.id} (${c.name})`));
  return true;
}

// Rally tokens to your opponent’s face-up Champion zone
export async function oppRallyToken(
  effectText, card,
  gameState, username, gameId,
  updateLocalFromGameState, addGameLogEntry
) {
  const m = effectText.match(/^OppRally(\d+)([A-Za-z]+)Token$/);
  if (!m) {
    console.warn(`⚠️ Invalid OppRallyToken effect: "${effectText}"`);
    return;
  }
  const [, countStr, type] = m;
  const count = parseInt(countStr, 10);
  const tpl = tokens.find(t => t.name === `${type} Token`);
  if (!tpl) {
    console.warn(`⚠️ No token template for type: ${type}`);
    return;
  }
  // helper from excavateCards
  const opponent = getOpponent(username, gameState);
  const zone = gameState[opponent]["Zone (Champion)"];
  for (let i = 0; i < count; i++) {
    zone.push({ ...tpl, boardState: "Zone (Champion)", lastBoardState: null });
  }
  console.log(`🪙 [oppRallyToken] Opponent’s Zone (Champion) now contains:`, 
              zone.map(c => `${c.id} (${c.name})`));
  await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
    method: "POST", credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      gameId, owner: opponent,
      updatedZones: { "Zone (Champion)": zone }
    })
  });
  addGameLogEntry(`${username} rallied ${count} ${type} Token${count>1?'s':''} for opponent`);
  updateLocalFromGameState();
  console.log(`🪙 After updateLocal [oppRallyToken] Opponent’s Zone (Champion) now contains:`, 
              zone.map(c => `${c.id} (${c.name})`));
  return true;
}

export async function ActivateXFreeCardFromZones ({
  card,
  effectText,
  gameState,
  username,
  gameId,
  updateLocalFromGameState,
  addGameLogEntry
}) {
  const match = effectText.match(/^Activate(\d+)Free([A-Za-z]+)From([A-Za-z]+(?:Or[A-Za-z]+)*)$/);
  if (!match) return console.warn("❌ Invalid ActivateXFree format:", effectText);

  const [, countRaw, type, zoneText] = match;
  const count = parseInt(countRaw);
  const zones = zoneText.split("Or");

  const validZones = {
    Hand: "Hand",
    Deck: "Deck",
    Reserve: "Reserve",
    Tomb: "Tomb"
  };

  const availableCards = [];

  for (const zone of zones) {
    const zoneKey = validZones[zone];
    if (!zoneKey) continue;

    const zoneCards = gameState[username][zoneKey];
    if (!Array.isArray(zoneCards)) continue;

    for (const target of zoneCards) {
      const fullTarget = cards.find(c => String(c.id) === String(target.id));
      if (!fullTarget) continue;
      if (fullTarget.type !== type) continue;

      // Check condition
      if (fullTarget.cardConditionFunction) {
        const meets = checkCardConditionFunction(fullTarget, gameState, username);
        if (!meets) continue;
      }

      availableCards.push({ card: target, full: fullTarget, zone: zoneKey });
    }
  }

  if (availableCards.length === 0) {
    addGameLogEntry(`No valid ${type} found in ${zones.join(", ")} to activate.`);
    return;
  }

  const selected = await new Promise(resolve => {
    const overlay = document.createElement("div");
    overlay.style = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.8); display: flex; flex-wrap: wrap;
      align-items: center; justify-content: center; z-index: 100000;
    `;

    availableCards.forEach(entry => {
      const btn = document.createElement("div");
      btn.textContent = entry.full.name + ` (${entry.zone})`;
      btn.style = `
        background: white; color: black; padding: 10px; margin: 10px;
        border: 2px solid black; cursor: pointer;
      `;
      btn.onclick = () => {
        document.body.removeChild(overlay);
        resolve(entry);
      };
      overlay.appendChild(btn);
    });

    document.body.appendChild(overlay);
  });

  const sourceZone = gameState[username][selected.zone];
  const idx = sourceZone.findIndex(c => String(c.id) === String(selected.card.id));
  if (idx >= 0) sourceZone.splice(idx, 1);

  selected.full.boardState = "Zone (Arsenal)";
  selected.full.lastBoardState = selected.zone;
  gameState[username]["Zone (Arsenal)"].push(selected.full);

  addGameLogEntry(`${username} activated ${selected.full.name} from their ${selected.zone}.`);
  await updateLocalFromGameState();
};

async function activateCardByCondition(effectText, card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  const free = effectText.includes("Free");
  const match = effectText.match(/^Activate(\d*)(Free)?([A-Za-z]+)From(.+)$/);

  if (!match) {
    console.warn(`🚫 Invalid Activate pattern: ${effectText}`);
    return;
  }

  const count = parseInt(match[1] || "1", 10);
  const cardType = match[3];
  const rawZones = match[4];

  const validZones = rawZones
    .split(/Or/i)
    .map(z => z.trim())
    .filter(z => !!z);

  const candidates = validZones.flatMap(zone => {
    const zoneCards = gameState[username][zone] || [];
    return zoneCards.filter(c => {
      const full = cards.find(f => f.id === c.id);
      return full && full.type === cardType;
    });
  });

  if (candidates.length === 0) {
    alert(`No valid ${cardType} found in ${validZones.join(", ")}`);
    return;
  }

  const selected = candidates.slice(0, count); // TODO: implement selection UI if needed

  if (!free) {
    for (const target of selected) {
      const full = cards.find(c => c.id === target.id);
      if (full?.cardCostFunction) {
        const costPassed = await AbilityExecutor.payCardCostFunction(
          full,
          gameState,
          username,
          gameId,
          updateLocalFromGameState,
          addGameLogEntry
        );
        if (!costPassed) {
          alert(`Cost could not be paid for ${full.name}`);
          continue;
        }
      }
    }
  }

  for (const target of selected) {
    const sourceZone = gameState[username][target.boardState] || [];
    const idx = sourceZone.findIndex(c => c.id === target.id);
    if (idx !== -1) sourceZone.splice(idx, 1);

    target.lastBoardState = target.boardState;
    target.boardState = "Zone (Arsenal)";

    gameState[username]["Zone (Arsenal)"].push(target);
    addGameLogEntry(`${username} activated ${target.name} from ${target.lastBoardState}`);
  }

  await sendZoneUpdate(["Zone (Arsenal)", ...validZones], gameState, username, gameId);
  await updateLocalFromGameState();
}