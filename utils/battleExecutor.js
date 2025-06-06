import * as AbilityExecutor from './abilityExecutor.js';

export function initializeChampionForBattle(card) {
  // Ensure tags array exists
  card.tags = card.tags || [];

  // Initialize boolean state flags for clarity and logic
  card.attacked ??= false;
  card.exhausted ??= false;

  // Initialize attack counters
  card.champAttackCount ??= 0;
  card.champMaxAttacks ??= 1;

  // Ensure the tags "destroyed" and "destroyedByBattle" are managed only when needed
  // Here, we just ensure they are not present at battle start
  // You don't want to add them preemptively, but you can remove them if found (clean start)
  if (card.tags.includes('destroyed')) {
    card.tags = card.tags.filter(tag => tag !== 'destroyed');
  }
  if (card.tags.includes('destroyedByBattle')) {
    card.tags = card.tags.filter(tag => tag !== 'destroyedByBattle');
  }
}

export function notifyUIUpdate() {
    const event = new CustomEvent("gameStateUpdated");
    document.dispatchEvent(event);
}

export function addTag(card, tag) {
  card.tags = card.tags || [];
  if (!card.tags.includes(tag)) {
    card.tags.push(tag);
  }
}

export function removeTag(card, tag) {
  if (!card.tags) return;
  card.tags = card.tags.filter(t => t !== tag);
}

export function getCardElement(cardId, zoneSelector = "#playerChampionsBox") {
  return document.querySelector(`${zoneSelector} .card[data-card-id="${cardId}"]`);
}

export async function highlightAttackableChampions(gameState, username) {
  const champions = gameState[username]["Zone (Champion)"] || [];
  const playerAttackCount = gameState[username].playerAttackCount ?? 0;
  const maxAttacksPerTurn = gameState[username].maxAttacksPerTurn ?? Infinity;

  champions.forEach(card => {
    const champAttackCount = card.champAttackCount ?? 0;
    const champMaxAttacks = card.champMaxAttacks ?? 1;

    const el = getCardElement(card.id, "#playerChampionsBox");
    if (!el) return;

    const cardCanAttack = (
      champAttackCount < champMaxAttacks &&
      playerAttackCount < maxAttacksPerTurn &&
      !(card.tags?.includes("exhausted")) &&
      !(card.tags?.includes("destroyed"))
    );

    if (cardCanAttack) {
      if (!el.classList.contains("can-attack-highlight")) {
        el.classList.add("can-attack-highlight");
      }
    } else {
      el.classList.remove("can-attack-highlight");
    }
  });
}

export async function handleChampionClick(clickedCard, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  const playerChampions = gameState[username]["Zone (Champion)"] || [];
  const cardIndex = playerChampions.findIndex(c => String(c.id) === String(clickedCard.id));
    if (cardIndex < 0) return;
    const card = playerChampions[cardIndex];

  if (!card) {
    console.warn("❌ Clicked champion not found in gameState");
    return;
  }

  //console.log(`handleChampionClick called for ${card.name} (ID: ${card.id})`);
  //console.log(`  champAttackCount: ${card.champAttackCount ?? 0}, champMaxAttacks: ${card.champMaxAttacks ?? 1}`);
  //console.log(`  tags: ${JSON.stringify(card.tags)}`);

  card.tags = card.tags || [];

  // Prevent if exhausted or already attacked max times for this champion
  if (card.tags.includes("exhausted")) {
    //console.log(`${card.name} is exhausted, cannot attack.`);
    //alert(`${card.name} cannot attack because it is exhausted.`);
    return;
  }

  if ((card.champAttackCount ?? 0) >= (card.champMaxAttacks ?? 1)) {
    //console.log(`${card.name} has already attacked max times this turn.`);
    //alert(`${card.name} cannot attack more than ${card.champMaxAttacks ?? 1} time(s) this turn.`);
    return;
  }

    //console.log("maxAttacksPerTurn =", gameState[username].maxAttacksPerTurn);
    //console.log("playerAttackCount =", gameState[username].playerAttackCount);
  // Check if player reached max attacks per turn
  if ((gameState[username].playerAttackCount ?? 0) >= (gameState[username].maxAttacksPerTurn ?? Infinity)) {
    //alert(`You can't attack more than ${gameState[username].maxAttacksPerTurn ?? '∞'} times this turn.`);
    return;
  }

  // Confirm attack prompt
  const confirmed = await new Promise(resolve => {
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
      zIndex: 120001,
      textAlign: "center",
      boxShadow: "0 0 10px black"
    });
    overlay.innerHTML = `
      <p>Attack with <strong>${card.name}</strong>?</p>
      <button id="confirm-attack">Attack</button>
      <button id="cancel-attack" style="margin-left: 10px;">Cancel</button>
    `;
    document.body.appendChild(overlay);

    document.getElementById("confirm-attack").onclick = () => {
      document.body.removeChild(overlay);
      const element = getCardElement(card.id, "#playerChampionsBox");
      if (element) {
        element.classList.remove("swing-animation");
        void element.offsetWidth; // force reflow
        element.classList.add("swing-animation");
      }
      resolve(true);
    };
    document.getElementById("cancel-attack").onclick = () => {
      document.body.removeChild(overlay);
      resolve(false);
    };
  });
  await new Promise(resolve => setTimeout(resolve, 500));
  if (!confirmed) return;

  //console.log(`Attacking with ${card.name}. Previous attack count: ${card.champAttackCount ?? 0}, playerAttackCount: ${gameState[username].playerAttackCount ?? 0}`);

  // Proceed with attack: increment counters
  gameState[username].playerAttackCount = (gameState[username].playerAttackCount ?? 0) + 1;
  card.champAttackCount = (card.champAttackCount ?? 0) + 1;

  await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        gameId,
        owner: username,
        updatedZones: {
            "Zone (Champion)": gameState[username]["Zone (Champion)"]
        },
        updatedValues: {
            playerAttackCount: gameState[username].playerAttackCount
        }
    })
    });

  //console.log(`Updated attack counts - champAttackCount: ${card.champAttackCount}, playerAttackCount: ${gameState[username].playerAttackCount}`);

  // Opponent setup
  const opponentName = username === gameState.player1 ? gameState.player2 : gameState.player1;
  const blockers = [...(gameState[opponentName]["Zone (Champion)"] || []), ...(gameState[opponentName]["FaceDownZone"] || [])];

  if (blockers.length > 0 && confirm("Opponent has champions. Use a blocker?")) {
    highlightBlockers(blockers);
    const selected = await AbilityExecutor.promptUserToSelect(blockers, 1, "Select a blocker");
    if (selected.length > 0) {
      await resolveBattle(card, selected[0], username, opponentName, gameState, gameId, updateLocalFromGameState, addGameLogEntry);
      notifyUIUpdate();
      await updateLocalFromGameState();
      return;
    }
    clearBlockerHighlights(blockers);
  }

  // No blockers: direct attack
  const damage = card.damage ?? 0;
  await AbilityExecutor.changeLife(opponentName, -damage, gameState, username, gameId);
  addGameLogEntry(`${card.name} attacked directly for ${damage} damage.`);
  markAsAttacked(card);

  // Re-highlight attackable champions after attack
  await highlightAttackableChampions(gameState, username);

  notifyUIUpdate();
  await updateLocalFromGameState();
}

export function highlightBlockers(cards) {
  cards.forEach(card => {
    const el = document.querySelector(`.card[data-card-id="${card.id}"]`);
    if (el) {
      el.classList.add("blocker-highlight");
    }
  });
}

export function clearBlockerHighlights(cards) {
  cards.forEach(card => {
    const el = document.querySelector(`.card[data-card-id="${card.id}"]`);
    if (el) {
      el.classList.remove("blocker-highlight");
    }
  });
}


export function markAsAttacked(card) {
  //console.log("⚔️ markAsAttacked called for:", card.name);

  card.tags = card.tags || [];
  if (!card.tags.includes("attacked")) card.tags.push("attacked");
  if (!card.tags.includes("exhausted")) card.tags.push("exhausted");

  //card.champAttackCount = (card.champAttackCount ?? 0) + 1;

  const el = document.querySelector(`.card[data-card-id="${card.id}"]`);
  if (el) {
    el.classList.remove("can-attack-highlight");
  }
}

export async function resetChampionAttackCounts(gameState, username, gameId) {
  //console.log(`resetChampionAttackCounts called for player: ${username}`);
  const champions = gameState[username]["Zone (Champion)"] || [];

  champions.forEach(card => {
    card.champAttackCount = 0;
    card.tags = card.tags || [];
    removeTag(card, "attacked");
    removeTag(card, "exhausted");
    //console.log(`  Reset attack count & tags for: ${card.name} (ID: ${card.id})`);
  });

  // 🔁 PUSH updated state to server
  await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      gameId,
      owner: username,
      updatedZones: {
        "Zone (Champion)": gameState[username]["Zone (Champion)"]
      }
    })
  });
}


export async function resolveBattle(attacker, blocker, attackerOwner, blockerOwner, gameState, gameId, updateLocalFromGameState, addGameLogEntry) {
  const attackerDamage = attacker.damage ?? 0;
  const blockerDamage = blocker.damage ?? 0;

  blocker.life = (blocker.life ?? 0) - attackerDamage;
  attacker.life = (attacker.life ?? 0) - blockerDamage;

  addGameLogEntry(`${attacker.name} dealt ${attackerDamage} to ${blocker.name}`);
  addGameLogEntry(`${blocker.name} dealt ${blockerDamage} to ${attacker.name}`);

  if (blocker.life <= 0) {
    await destroyChampion(blocker, blockerOwner, gameState, gameId, updateLocalFromGameState, addGameLogEntry, true);
  }
  if (attacker.life <= 0) {
    await destroyChampion(attacker, attackerOwner, gameState, gameId, updateLocalFromGameState, addGameLogEntry, true);
  }

  markAsAttacked(attacker);
  highlightAttackableChampions(gameState, username);
}

export async function destroyChampion(card, owner, gameState, gameId, updateLocalFromGameState, addGameLogEntry, byBattle = false) {
  addTag(card, "Destroyed");
  if (byBattle) addTag(card, "DestroyedByBattle");

  addGameLogEntry(`${card.name} was destroyed${byBattle ? ' in battle' : ''}.`);

  const zone = gameState[owner]["Zone (Champion)"];
  const index = zone.findIndex(c => String(c.id) === String(card.id));
  if (index !== -1) zone.splice(index, 1);

  card.lastBoardState = "Zone (Champion)";
  card.boardState = "Tomb";
  gameState[owner].Tomb.push(card);

  // Trigger IfDestroyed logic
  await AbilityExecutor.checkLingerEffects(card, "Tomb", gameState, addGameLogEntry);

  // Update game state to server
  await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      gameId,
      owner,
      updatedZones: {
        "Zone (Champion)": gameState[owner]["Zone (Champion)"],
        Tomb: gameState[owner].Tomb
      }
    })
  });

  await updateLocalFromGameState();
}