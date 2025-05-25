export function handleBoardStateChange(card, boardState, lastBoardState) {
  if (boardState === 'Tomb' && lastBoardState !== 'Tomb') {
    declareAbility(ifSentToTomb);
  }
  if (boardState === 'Hand' && lastBoardState !== 'Deck') {
    declareAbility(drawnFromDeck);
  }
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

/*
cardCostFunction
[
  "UseBasic",
  "Offer5Mill5Sacrifice1",
  "Offer10",
  "Mill10",
  "Obliterate2YouControl",
  "Offer5",
  "Sacrifice1",
  "Discard2",
  "RevealSelfHideSelfShuffleHandRandomDiscard1",
  "Reveal1Random",
  "Discard1",
  "OppGet2ScrapToken",
  "OppGetScrapToken",
]

cardConditionFunction
[
  "Set1Turn",
  "AttachOnlyToMarksman",
  "NoDamageDealtDisableDamageDealing",
  "ControlNoChampions"
]

effectXcondition
[
  "IfWouldDie",
  "OpponentAttacks",
  "IsDrawPhase",
  "DisableAttackingThisTurn",
  "OneChampOneEquipInTomb",
  "OpponentAttacksOrWouldDestroy",
  "NotCommander",
  "IfObliterated",
  "IsYourEndPhase",
  "IfBulletCountersEqualsZero",
  "OfferHalfLife"
]


effectXcost
[
  "Excavate3",
  "ExcavateOpponent5",
  "Send1OtherHandZone",
  "Offer3FromChamps",
  "Obliterate10FromTop",
  "Target1UndeadEitherTombPlusOffer3",
  "Target1ChampInOppTombPlusOffer6",
  "Offer3",
  "Mill4PlusTargetAttacker",
  "Mill3",
  "Excavate1",
  "SacrificeSelf",
  "SacChoiceChampsYouControl",
  "ObliterateSelfPlusTargetFrontierOrHelper",
  "ObliterateSelfPlusSacrifice1YouControl",
  "SacrificeSelfTargetUndeadInTomb",
  "DeclareCardType",
  "Target1Facedown",
  "TargetChampOnZone",
  "ObliterateSelf",
  "Target1ChampInEitherTombPlusTarget3ChampsInTomb",
  "Reveal1Random",
  "ObliterateSelfTargetUndeadOrHelperInTomb",
  "Offer1",
  "Discard1PlusTarget1OnZone",
  "Destroy1ObeliskYouControl",
  "GiveOpp1Blocker"
]

effectXtext
[
  "ResurrectUnleash3MaxUndead",
  "RetrieveDifferentUndead",
  "ResurrectSelf",
  "Add1Revealed",
  "Obliterate1Revealed",
  "DestroyImmuneOnce",
  "DestroyCardsEqualToLife",
  "ResurrectUnleash1Undead",
  "DropAllTo1",
  "Obliterate1OnZone",
  "ResUnleashUndeadDuringIntermission",
  "Add1RevealedUndeadOrHelperPlusMention",
  "ResurrectTarget",
  "Excavate3Add1",
  "Resurrect1UndeadEitherTomb",
  "DestroyBattlingChampion",
  "NegateAttackBurnForDamage",
  "GainZoneLife",
  "GainDoubleZoneLife",
  "ResurrectTargetPlusGrantUndead",
  "RallyDrawnChamps",
  "MillMatchingOppTomb",
  "ResurrectTargetPlusAttach",
  "ResurrectTargetPlusAttachPlusObliterateTarget3",
  "Toll1",
  "Rally1EchoToken",
  "FlipFaceUpNonEffect",
  "NegateAttackOrDestructionPlusPop",
  "Deal3DamageToChampOrPlayer",
  "Draw2",
  "Draw1",
  "SelfGain6BulletCounters",
  "Deal6DamageToChampOrPlayer",
  "Activate1FreeEquipOrObeliskFromHandDeckTomb",
  "Activate1FreeCommanderObeliskFromHandDeckTomb",
  "Add1Equip",
  "ReturnRevealedOrderOfYourChoice",
  "DestroyTarget",
  "Retrieve1Equip",
  "Recruit1FrontierMarksman",
  "Plus1DTMinus1Damage",
  "Mill1BiggerChampDealsDamage",
  "Rally1TumbleweedToken",
  "CopyTargetLifeDamage",
  "DestroyIfTargetLeaves",
  "Excavate1PlusCheckTypePlusDestroy1Champ",
  "FlipAttackerFacedown",
  "FlipSelfFacedown",
  "ObliterateTopUntilCardTypeMatch",
  "ChampGainAttacksEqualToShuffledBack",
  "ReturnRevealedToTopOrBottom",
  "ActivateTarget",
  "DestroyAttached",
  "Place1ObeliskFromDeckToReservePlusEquipToThat1Equip",
  "Attach1EquipToObelisk",
  "Destroy2OnZone",
  "DisableChampEffects",
  "DisableBuryDiscardSacrificeObliterate",
  "SwitchControl",
  "Take10Damage",
  "LockAttacksToSelf",
  "PassOverMain1",
  "IsInfiniteSacrifices",
  "NegateAttack",
  "DecreaseAllDTBy1"
]

effectXlinger
[
  "ObliterateOthers",
  "StackBackSameOrder",
  "DestroyAllWhenLeave",
  "TargetGainWarded",
  "IfLeavesZoneDestroyAttach",
  "DecreaseBulletCounterCountWhenBattling",
  "DestroyIfTargetLeaves",
  "LockAttacksToAttached",
  "DestroyChampAtEndPhase",
  "SwapControlDuringEndPhase"
]
*/