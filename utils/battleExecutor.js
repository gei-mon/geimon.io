import * as AbilityExecutor from './abilityExecutor.js';

export function initializeChampionForBattle(card) {
  card.tags = card.tags || [];
  card.champAttackCount ??= 0;
  card.champMaxAttacks ??= 1;
}

export async function highlightAttackableChampions(gameState, username) {
  const champions = gameState[username]["Zone (Champion)"] || [];
  champions.forEach(card => {
    if (!card.tags.includes("Exhausted") && !card.tags.includes("Attacked")) {
      const el = document.querySelector(`.card[data-card-id="${card.id}"]`);
      if (el) el.classList.add("can-attack-highlight");
    }
  });
}

export async function handleChampionClick(card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  if (card.tags.includes("Exhausted") || card.tags.includes("Attacked")) return;

  const confirmed = confirm(`Attack with ${card.name}?`);
  if (!confirmed) return;

  const player = gameState[username];
  const maxAttacks = player.maxAttacksPerTurn ?? Infinity;
  player.playerAttackCount = (player.playerAttackCount ?? 0) + 1;

  if (player.playerAttackCount > maxAttacks) {
    alert(`You can't attack more than ${maxAttacks} time(s) this turn.`);
    return;
  }

  const opponent = username === gameState.player1 ? gameState.player2 : gameState.player1;
  const blockers = [...(gameState[opponent]["Zone (Champion)"] || []), ...(gameState[opponent]["FaceDownZone"] || [])];

  if (blockers.length > 0 && confirm("Opponent has champions. Use a blocker?")) {
    const selected = await AbilityExecutor.promptUserToSelect(blockers, 1, "Select a blocker");
    if (selected.length > 0) {
      await resolveBattle(card, selected[0], username, opponent, gameState, gameId, updateLocalFromGameState, addGameLogEntry);
      markAsAttacked(card);
      return;
    }
  }

  // No blockers: direct attack
  const damage = card.damage ?? 0;
  await AbilityExecutor.changeLife(opponent, -damage, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
  addGameLogEntry(`${card.name} attacked directly for ${damage} damage.`);
  markAsAttacked(card);
}

export function markAsAttacked(card) {
  card.tags = card.tags || [];
  if (!card.tags.includes("Attacked")) card.tags.push("Attacked");
  if (!card.tags.includes("Exhausted")) card.tags.push("Exhausted");
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
  card.tags = card.tags || [];
  if (!card.tags.includes("Destroyed")) card.tags.push("Destroyed");
  if (byBattle && !card.tags.includes("DestroyedByBattle")) card.tags.push("DestroyedByBattle");

  addGameLogEntry(`${card.name} was destroyed${byBattle ? ' in battle' : ''}.`);

  const zone = gameState[owner]["Zone (Champion)"];
  const index = zone.findIndex(c => String(c.id) === String(card.id));
  if (index !== -1) zone.splice(index, 1);

  card.lastBoardState = "Zone (Champion)";
  card.boardState = "Tomb";
  gameState[owner].Tomb.push(card);

  // Trigger IfDestroyed logic
  await AbilityExecutor.checkLingerEffects(card, "Tomb", gameState, addGameLogEntry);

  // ✅ Update game state
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
