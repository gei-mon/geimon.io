import { renderCard } from './cardRenderer.js';

export function handleBoardStateChange(card, boardState, lastBoardState, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  console.log(`State change: ${card.name} from ${lastBoardState} to ${boardState}`);
  if (boardState === 'Tomb' && lastBoardState !== 'Tomb') {
    declareAbility(card, 'IfTomb', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
  }
  if (boardState === 'Hand' && lastBoardState === 'Deck') {
    declareAbility(card, 'IfDrawnAdded', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
  }
  if (boardState === 'Tomb' && lastBoardState === 'Deck') {
    declareAbility(card, 'IfBuried', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
  }
  if (boardState === 'Tomb' && lastBoardState === 'Hand') {
    declareAbility(card, 'IfDiscarded', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
  }
  if (boardState === 'Tomb' && lastBoardState === 'Zone') {
    declareAbility(card, 'IfDestroyed', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
  }
  if (boardState === 'Void' && lastBoardState !== 'Zone') {
    declareAbility(card, 'IfObliterated', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
  }
  if (boardState === 'Zone' && lastBoardState !== 'Zone') {
    declareAbility(card, 'OnRally', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
    declareAbility(card, 'OnActivation', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
  }
  if (boardState === 'Zone (Champion)' && lastBoardState === 'FaceDownZone') {
    declareAbility(card, 'Flip', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
  }
}

export function declareAbility(card, triggerType, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  console.log(`Checking abilities on ${card.name} for trigger: ${triggerType}`);
  if (!card || !card.name || !card.abilities) {
    console.warn("🛑 Invalid or incomplete card object passed:", card);
    return;
  }

  const abilities = card.abilities || [];
  console.log("Abilities attached to card:", card.abilities);
  if (!card.abilities) {
    console.warn(`Card ${card.name} has no abilities defined!`);
    return;
  }

  abilities.forEach((ability) => {
    [1, 2, 3].forEach(num => {
        const type = ability[`effect${num}type`];
        const text = ability[`effect${num}text`];

        if (type === triggerType && text === 'RetrieveDifferentUndead') {
          RetrieveDifferentUndead(card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
        }
    // Add more conditionals as needed for other effects
    });
  });
}

export function RetrieveDifferentUndead(card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  console.log(`${card.name} activated Retrieve 1 Undead.`);

  const tomb = gameState[username]?.Tomb || [];

  const validTargets = tomb.filter(
    (targetCard) =>
      Array.isArray(targetCard.tags) &&
      targetCard.tags.includes("Undead") &&
      targetCard.name !== card.name
  );

  if (validTargets.length === 0) {
    console.log('No valid Undead targets to retrieve.');
    return;
  }

  // Overlay container
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  overlay.style.zIndex = "150000";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.flexWrap = "wrap";
  document.body.appendChild(overlay);

  const instruction = document.createElement("div");
  instruction.innerText = "Select 1 Undead to retrieve";
  instruction.style.color = "white";
  instruction.style.fontSize = "2em";
  instruction.style.width = "100%";
  instruction.style.textAlign = "center";
  instruction.style.marginBottom = "20px";
  overlay.appendChild(instruction);

  validTargets.forEach((targetCard) => {
    const cardEl = renderCard(targetCard);
    cardEl.style.transform = "scale(0.8)";
    cardEl.style.margin = "10px";
    cardEl.style.cursor = "pointer";
    cardEl.style.pointerEvents = "auto";
    cardEl.addEventListener("click", async () => {
      const confirmBox = document.createElement("div");
      confirmBox.style.position = "fixed";
      confirmBox.style.top = "50%";
      confirmBox.style.left = "50%";
      confirmBox.style.transform = "translate(-50%, -50%)";
      confirmBox.style.backgroundColor = "#333";
      confirmBox.style.color = "white";
      confirmBox.style.padding = "20px";
      confirmBox.style.border = "2px solid white";
      confirmBox.style.borderRadius = "10px";
      confirmBox.style.zIndex = "160000";
      confirmBox.innerHTML = `
        <p>Retrieve <strong>${targetCard.name}</strong>?</p>
        <button id="confirmRetrieve">Yes</button>
        <button id="cancelRetrieve" style="margin-left: 10px;">No</button>
      `;
      document.body.appendChild(confirmBox);

      document.getElementById("confirmRetrieve").onclick = async () => {
        // Move the selected card from Tomb to Hand
        const index = gameState[username].Tomb.findIndex(c => c.id === targetCard.id);
        const [retrievedCard] = gameState[username].Tomb.splice(index, 1);
        retrievedCard.lastBoardState = "Tomb";
        retrievedCard.boardState = "Hand";
        gameState[username].Hand.push(retrievedCard);

        await fetch("https://geimon-app-833627ba44e0.herokuapp.com/updateGameState", {
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

        addGameLogEntry(`${username} retrieved ${retrievedCard.name} from the Tomb`);

        overlay.remove();
        confirmBox.remove();
        updateLocalFromGameState();
      };

      document.getElementById("cancelRetrieve").onclick = () => {
        confirmBox.remove();
      };
    });
    overlay.appendChild(cardEl);
  });
}


/*
type
[
Standard
Passive
Mandatory

Rush
Reflex

Exhaustion

OnRally
OnActivation

Tomb
IfTomb

IfDestroyed
IfDiscarded
IfObliterated

Flip
BattleFlip
]

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
  "OppRecruit1CommanderObelisk",
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
  "Draw2PerOppCommanderObelisk",
  "Reveal5DeckCardsOpponentChoose1ToAddObliterateRemaining",
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