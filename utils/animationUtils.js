// 1️⃣ Map each zoneKey to the two DOM container IDs (self vs opponent)
const zoneToContainerId = {
  "Zone (Champion)":         { self: "playerChampionsBox",        opp: "opponentChampionsBox"        },
  "FaceDownZone":            { self: "playerFaceDownBox",         opp: "opponentFaceDownBox"         },
  "Zone (Arsenal)":          { self: "playerArsenalBox",          opp: "opponentArsenalBox"          },
  "FaceDownArsenalZone":     { self: "playerFaceDownArsenalBox",  opp: "opponentFaceDownArsenalBox"  },
  "Reserve":                 { self: "playerReserveBox",          opp: "opponentReserveBox"          },
  "Hand":                    { self: "drawn-cards",               opp: "opponent-hand"               },
  "Deck":                    { self: "playerDeckBox",             opp: "opponentDeckBox"             },
  "Tomb":                    { self: "playerTombBox",             opp: "opponentTombBox"             },
  "Void":                    { self: "playerVoidBox",             opp: "opponentVoidBox"             }
};

/**
 * Animate a card moving from one zone to another.
 *
 * @param {string} cardId        – the data-card-id of the card
 * @param {string} fromZoneKey   – one of your zone keys (e.g. "Zone (Champion)")
 * @param {string} toZoneKey     – destination zone key
 * @param {object} [opts]
 * @param {boolean} [opts.isOpponent=false] – whether this is on the opponent’s side
 * @param {number}  [opts.duration=500]     – animation length in ms
 */
export function animateCardMove(cardId, fromZoneKey, toZoneKey, { isOpponent = false, duration = 500 } = {}) {
  const mappingFrom = zoneToContainerId[fromZoneKey];
  const mappingTo   = zoneToContainerId[toZoneKey];
  if (!mappingFrom || !mappingTo) return;

  const fromId = isOpponent ? mappingFrom.opp : mappingFrom.self;
  const toId   = isOpponent ? mappingTo.opp   : mappingTo.self;
  const fromEl = document.getElementById(fromId);
  const toEl   = document.getElementById(toId);
  if (!fromEl || !toEl) return;

  // Find the card element in the origin container
  const cardEl = fromEl.querySelector(`[data-card-id="${cardId}"]`);
  if (!cardEl) return;

  // 2️⃣ Clone it for a “flying” preview
  const startRect = cardEl.getBoundingClientRect();
  const clone = cardEl.cloneNode(true);
  Object.assign(clone.style, {
    position:   "fixed",
    left:       `${startRect.left}px`,
    top:        `${startRect.top}px`,
    width:      `${startRect.width}px`,
    height:     `${startRect.height}px`,
    transition: `all ${duration}ms ease-in-out`,
    zIndex:     "100000"
  });
  document.body.appendChild(clone);

  // 3️⃣ Kick off animation to the centre of the target container
  const endRect = toEl.getBoundingClientRect();
  requestAnimationFrame(() => {
    clone.style.left      = `${endRect.left + endRect.width/2 - startRect.width/2}px`;
    clone.style.top       = `${endRect.top  + endRect.height/2 - startRect.height/2}px`;
    clone.style.opacity   = "0";
    clone.style.transform = "scale(0.5)";
  });

  // 4️⃣ Clean up after
  setTimeout(() => clone.remove(), duration + 50);
}
