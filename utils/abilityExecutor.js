export function handleBoardStateChange(card, boardState) {
  if (boardState === 'tomb') {
    declareAbility(card);
  }
}

function declareAbility(card) {
  const abilities = card.abilities;

  abilities.forEach((ability) => {
    if (ability.effect === 'retrieve_1_undead') {
      retrieve1Undead(card);
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
