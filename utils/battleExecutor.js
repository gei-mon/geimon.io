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
  document.querySelectorAll(".can-attack-highlight").forEach(el => {
    el.classList.remove("can-attack-highlight");
  });

  const champions = gameState[username]["Zone (Champion)"] || [];
  champions.forEach(card => {
    const attackCount = card.champAttackCount ?? 0;
    const maxAttacks = card.champMaxAttacks ?? 1;
    if (attackCount < maxAttacks) {
      const el = getCardElement(card.id, "#playerChampionsBox");
      if (el) el.classList.add("can-attack-highlight");
    }
  });
}

export async function handleChampionClick(card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  card.tags = card.tags || [];

  // Prevent if exhausted or already attacked
  if (card.tags.includes("exhausted")) {
    alert(`${card.name} cannot attack because it is exhausted.`);
    return;
  }

    const attackCount = card.champAttackCount ?? 0;
    const maxChampAttacks = card.champMaxAttacks ?? 1;
    if (attackCount >= maxChampAttacks) {
    alert(`${card.name} cannot attack more than ${maxChampAttacks} time(s) this turn.`);
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
  if (!confirmed) return;

  // Global max attacks per turn check (player-level)
  const player = gameState[username];
  const maxAttacks = player.maxAttacksPerTurn ?? Infinity;
  player.playerAttackCount = (player.playerAttackCount ?? 0) + 1;

  if (player.playerAttackCount > maxAttacks) {
    alert(`You can't attack more than ${maxAttacks} time(s) this turn.`);
    return;
  }

  // Opponent setup
  const opponent = username === gameState.player1 ? gameState.player2 : gameState.player1;
  const blockers = [...(gameState[opponent]["Zone (Champion)"] || []), ...(gameState[opponent]["FaceDownZone"] || [])];

  if (blockers.length > 0 && confirm("Opponent has champions. Use a blocker?")) {
    highlightBlockers(blockers);
    const selected = await AbilityExecutor.promptUserToSelect(blockers, 1, "Select a blocker");
    if (selected.length > 0) {
      await resolveBattle(card, selected[0], username, opponent, gameState, gameId, updateLocalFromGameState, addGameLogEntry);
      return;
    }
    clearBlockerHighlights(blockers);
  }

  // No blockers: direct attack
  const damage = card.damage ?? 0;
  await AbilityExecutor.changeLife(opponent, -damage, gameState, username, gameId);
  addGameLogEntry(`${card.name} attacked directly for ${damage} damage.`);
  markAsAttacked(card);
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
  console.log("⚔️ markAsAttacked called for:", card.name);
  card.tags = card.tags || [];
  if (!card.tags.includes("attacked")) card.tags.push("attacked");
  if (!card.tags.includes("exhausted")) card.tags.push("exhausted");
  card.champAttackCount = (card.champAttackCount ?? 0) + 1;

  const el = document.querySelector(`.card[data-card-id="${card.id}"]`);
  if (el) el.classList.remove("can-attack-highlight");
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