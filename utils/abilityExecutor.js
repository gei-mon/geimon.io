import { renderCard } from './cardRenderer.js';

export function handleBoardStateChange(card, boardState, lastBoardState, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  console.log(`State change: ${card.name} from ${lastBoardState} to ${boardState}`);
  if (boardState === 'Tomb' && lastBoardState !== 'Tomb') {
    declareAbility(card, 'IfTomb', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);               //IF SENT TO TOMB
  }
  if (boardState === 'Hand' && lastBoardState === 'Deck') {
    declareAbility(card, 'IfDrawnAdded', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);         //IF DRAWN / IF ADDED
  }
  if (boardState === 'Hand' && lastBoardState === 'Tomb') {
    declareAbility(card, 'IfRetrieved', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);          //IF RETRIEVED
  }
  if (boardState === 'Tomb' && lastBoardState === 'Deck') {
    declareAbility(card, 'IfBuried', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);             //IF BURIED
  }
  if (boardState === 'Tomb' && lastBoardState === 'Hand') {
    declareAbility(card, 'IfDiscarded', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);          //IF DISCARDED
  }
  if (boardState === 'Tomb' && lastBoardState === 'Zone (Champion)' || boardState === 'Tomb' && lastBoardState === 'Zone (Arsenal)') {
    declareAbility(card, 'IfDestroyed', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);          //IF DESTROYED
    declareAbility(card, 'IfTombFromField', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);      //IF SENT FROM FIELD TO TOMB
  }
  if (boardState === 'Void' && lastBoardState !== 'Void') {
    declareAbility(card, 'IfObliterated', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);        //IF OBLITERATED
  }
  if (boardState === 'Zone (Champion)' && lastBoardState !== 'Zone (Champion)') {
    declareAbility(card, 'OnRally', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);              //ON RALLY
  }
  if (boardState === 'Zone (Champion)' && lastBoardState === 'FaceDownZone') {
    declareAbility(card, 'Flip', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);                 //FLIP
  }
  if (boardState === 'Zone (Champion)' && lastBoardState === 'Tomb') {
    declareAbility(card, 'OnResurrection', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);       //ON RESURRECTION
  }
  if (boardState === 'Zone (Champion)' && lastBoardState === 'Deck') {
    declareAbility(card, 'OnRecruit', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);            //ON RECRUIT
  }
  if (boardState === 'Zone (Champion)' && lastBoardState === 'Void') {
    declareAbility(card, 'OnUnleash', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);            //ON UNLEASH
  }
  if (boardState === 'Zone (Arsenal)' && lastBoardState !== 'Zone (Arsenal)') {
    declareAbility(card, 'OnActivation', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);         //ON ACTIVATION
  }
  if (boardState === 'Zone (Arsenal)' && lastBoardState === 'FaceDownArsenalZone') {
    declareAbility(card, 'OnActivation', gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);         //ON ACTIVATION
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
        if (type === triggerType && text === 'ResurrectSelf') {
          ResurrectSelf(card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry);
        }
    // Add more conditionals as needed for other effects
    });
  });
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

export function ResurrectSelf(card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  // Create a centered overlay prompt instead of window.confirm
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
    <p>${card.name} has a resurrection effect. Do you want to activate it?</p>
    <button id="resurrect-yes">Yes</button>
    <button id="resurrect-no" style="margin-left: 10px;">No</button>
  `;
  document.body.appendChild(overlay);

  document.getElementById("resurrect-yes").onclick = async () => {
    // Remove card from Tomb
    const tomb = gameState[username].Tomb;
    const index = tomb.findIndex(c => String(c.id) === String(card.id));
    if (index === -1) {
      console.warn("❌ Could not find card in Tomb to resurrect.");
      document.body.removeChild(overlay);
      return;
    }
    tomb.splice(index, 1);

    // Prepare card for resurrection
    card.lastBoardState = "Tomb";
    card.boardState = "Zone (Champion)";
    card.currentZone = "Zone (Champion)";
    card.lingerEffect = "ObliterateWhenLeave";

    // Add to Champion Zone
    gameState[username]["Zone (Champion)"].push(card);

    addGameLogEntry(`${username} resurrected ${card.name} from the Tomb.`);

    // Push updated state to server
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

    document.body.removeChild(overlay);
    updateLocalFromGameState(gameState);
  };

  document.getElementById("resurrect-no").onclick = () => {
    addGameLogEntry(`${username} chose not to resurrect ${card.name}.`);
    document.body.removeChild(overlay);
  };
}

export function RetrieveDifferentUndead(card, gameState, username, gameId, updateLocalFromGameState, addGameLogEntry) {
  const tomb = gameState[username]?.Tomb || [];

  const validTargets = tomb.filter(
    (targetCard) =>
      Array.isArray(targetCard.tags) &&
      targetCard.tags.includes("Undead") &&
      targetCard.name !== card.name
  );

  if (validTargets.length === 0) {
    const popup = document.createElement("div");
    Object.assign(popup.style, {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#333",
      color: "white",
      padding: "20px 30px",
      border: "2px solid white",
      borderRadius: "10px",
      zIndex: "150001",
      textAlign: "center",
      fontSize: "1.2em"
    });

    popup.innerHTML = `
      <p>No Valid Undead Targets To Retrieve.</p>
      <button id="closeNoUndeadPopup" style="margin-top: 15px; font-size: 1em;">Confirm</button>
    `;

    document.body.appendChild(popup);

    document.getElementById("closeNoUndeadPopup").onclick = () => {
      popup.remove();
    };

    return;
  }

  // Overlay container (like popup)
  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "min(90%, 800px)",
    overflowY: "auto",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    border: "3px solid white",
    borderRadius: "12px",
    zIndex: "150000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "10px 20px"
  });
  document.body.appendChild(overlay);

  const instruction = document.createElement("div");
  instruction.innerText = "Select 1 Undead to retrieve";
  instruction.style.color = "white";
  instruction.style.fontSize = "2em";
  instruction.style.textAlign = "center";
  overlay.appendChild(instruction);

  const cardContainer = document.createElement("div");
  Object.assign(cardContainer.style, {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    maxWidth: "100%",
    overflow: "visible"
  });

  const scale = 0.3;
  const cardWidth = 240;
  const cardHeight = 420;

  validTargets.forEach((targetCard) => {
    const scaledCard = renderCard(targetCard);
    Object.assign(scaledCard.style, {
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      margin: "5px",
      position: "relative",
      cursor: "pointer"
    });

    const wrapper = document.createElement("div");
    Object.assign(wrapper.style, {
      width: `${cardWidth * scale}px`,
      height: `${cardHeight * scale}px`,
      overflow: "visible",
      position: "relative"
    });

    const invisibleButton = document.createElement("button");
    Object.assign(invisibleButton.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      opacity: "0",
      border: "none",
      background: "transparent",
      cursor: "pointer"
    });

    invisibleButton.addEventListener("click", async () => {
      const confirmBox = document.createElement("div");
      Object.assign(confirmBox.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#333",
        color: "white",
        padding: "20px",
        border: "2px solid white",
        borderRadius: "10px",
        zIndex: "160000",
        textAlign: "center"
      });
      confirmBox.innerHTML = `
        <p>Retrieve <strong>${targetCard.name}</strong>?</p>
        <button id="confirmRetrieve">Yes</button>
        <button id="cancelRetrieve" style="margin-left: 10px;">No</button>
      `;
      document.body.appendChild(confirmBox);

      document.getElementById("confirmRetrieve").onclick = async () => {
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

    wrapper.appendChild(scaledCard);
    wrapper.appendChild(invisibleButton);
    cardContainer.appendChild(wrapper);
  });

  overlay.appendChild(cardContainer);
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