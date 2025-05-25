export function handleBoardStateChange(card, boardState, lastBoardState) {
  if (boardState === 'tomb' && lastBoardState !== 'tomb') {
    declareAbility(ifSentToTomb);
  }
  card.lastBoardState = card.boardState;
}

function declareAbility(card) {
  const abilities = card.abilities;

  abilities.forEach((ability) => {
    if (ability.effect === '') {
    }
  });
}

function retrieve1Undead(card) {
  console.log(`${card.name} activated Retrieve 1 Undead.`);

  // Assuming there's a global tomb array for the player's tomb
  const tomb = window.playerTomb || [];

  const validTargets = tomb.filter(
    (targetCard) => targetCard.tag2 === 'Undead' && targetCard.name !== card.name
  );

  if (validTargets.length > 0) {
    console.log('Valid targets to retrieve:', validTargets.map(c => c.name));
    // For now, we'll just log the options. Implementation of player choice can be added.
  } else {
    console.log('No valid Undead targets to retrieve.');
  }
}
