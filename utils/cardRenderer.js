import { keywords } from "../data/keywords.js";
import { tokens } from "../data/tokens.js";
import { cards } from '../data/cards.js';

export function renderCard(card, container) {
  const cardElement = document.createElement("div");
  cardElement.className = "card";
  cardElement.dataset.cardId = card.uid || card.id;

  if (card.type === "Champion") {
    cardElement.classList.add("champion");
    const firstTag = card.tags?.[0] || "";
    const secondTag = card.tags?.[1] || "";
    const thirdTag = card.tags?.[2] || "";
    if (firstTag === "Cryptbound") {
      cardElement.classList.add("cryptbound");}
    if (firstTag === "Frontier") {
      cardElement.classList.add("frontier");}
    if (firstTag === "Clockwork") {
      cardElement.classList.add("clockwork");}
    if (firstTag === "Noble") {
      cardElement.classList.add("noble");}
    if (firstTag === "Vivisect") {
      cardElement.classList.add("vivisect");}
    if (firstTag === "Nightveil") {
      cardElement.classList.add("nightveil");}
    if (firstTag === "Valiant") {
      cardElement.classList.add("valiant");}
    if (firstTag === "Dealt") {
      cardElement.classList.add("dealt");}
    if (firstTag === "Honed") {
      cardElement.classList.add("honed");}
    if (firstTag === "Gallant") {
      cardElement.classList.add("gallant");}
    if (firstTag === "Verdant") {
      cardElement.classList.add("verdant");}
    if (firstTag === "Chrome") {
      cardElement.classList.add("chrome");}
    if (firstTag === "Arcanum") {
      cardElement.classList.add("arcanum");}
    if (firstTag === "Primordial") {
      cardElement.classList.add("primordial");}
    if (firstTag === "Hellfire") {
      cardElement.classList.add("hellfire");}
    if (firstTag === "Frenzied") {
      cardElement.classList.add("frenzied");}
    if (firstTag === "Righteous") {
      cardElement.classList.add("righteous");}
    if (firstTag === "Oldblood") {
      cardElement.classList.add("oldblood");}
    if (firstTag === "Crescendo") {
      cardElement.classList.add("crescendo");}
    if (firstTag === "Radiant") {
      cardElement.classList.add("radiant");}
    if (firstTag === "Enlightened") {
      cardElement.classList.add("enlightened");}
    if (firstTag === "Driftmarked") {
      cardElement.classList.add("driftmarked");}
    if (firstTag === "Token") {
      cardElement.classList.add("token");}
    if (secondTag === "Token") {
      cardElement.classList.add("token");}
    if (thirdTag === "Token") {
      cardElement.classList.add("token");}
  }
  else if (card.type === "Action") {
    cardElement.classList.add("action");
  }
  else if (card.type === "Obelisk") {
    cardElement.classList.add("obelisk");
  }
  else if (card.type === "Equipment") {
    cardElement.classList.add("equipment");
  }
  else if (card.type === "Rush") {
    cardElement.classList.add("rush");
  }
  else if (card.type === "Reflex") {
    cardElement.classList.add("reflex");
  }

  const tags = (card.tags || []).filter(tag => tag !== "").join(" ");

  const abilitiesHTML = card.abilities.map(ability => {
    let abilityText = ability.text;

    // Process keywords first
    ability.keywords.forEach(keyword => {
      const keywordRegex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
      const keywordDescription = (keywords[keyword] || 'No description').replace(/<\/?[^>]+(>|$)/g, "");
      // Replace keyword with span, store only the description text in the tooltip (no HTML)
      abilityText = abilityText.replace( keywordRegex, 
        `<span class='keyword' data-description='${keywordDescription.replace(/<\/?[^>]+(>|$)/g, "")}'>${keyword}</span>`
        );
    });

    // Define key phrases to format
    const keyPhrases = cards.flatMap(card => card.abilities.flatMap(ability => [ability.effect1name, ability.effect2name, ability.effect3name].filter(name => name)));

    // Format key phrases and keywords
    keyPhrases.forEach(phrase => {
      const phraseRegex = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
      abilityText = abilityText.replace(
        phraseRegex,
        `<strong>${phrase}</strong>`
      );
    });

    // Format keywords with tooltip spans
    ability.keywords.forEach(keyword => {
      const keywordRegex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
      const keywordDescription = (keywords[keyword] || 'No description').replace(/<\/?[^>]+(>|$)/g, "");
      abilityText = abilityText.replace(
        keywordRegex,
        `<strong><span class='keyword' data-description='${keywordDescription}'>${keyword}</span></strong>`
      );
    });

    const tokenNames = tokens.map(t => t.name);
    tokenNames.forEach(tokenName => {
      const tokenRegex = new RegExp(`\\b${tokenName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
      abilityText = abilityText.replace(
        tokenRegex,
        `<span class='token-name' data-token='${tokenName}'>${tokenName}</span>`
      );
    });

    return `<div class="keyword">${abilityText}</div>`;

  }).join(" ");  // Use a single space to join the final abilities HTML string

  cardElement.innerHTML = `
    <div class="card-name">${card.name}</div>
    <div class="card-image">
      <img src="${card.image}" alt="${card.name}" class="card-art">
    </div>
    <div class="card-tags">${tags}</div>
    ${card.condition ? `<div class="card-condition"><strong>Condition:</strong> ${card.condition}</div>` : ""}
    ${card.cost && card.cost !== "Basic" ? 
      `<div class="card-cost"><strong>Cost:</strong> ${renderTextWithTokens(card.cost)}</div>` : ""}
    <div class="card-text">${abilitiesHTML}</div>
    ${card.type === "Champion" ? `
    <div class="bottom-bar">
      <div class="damage">${card.damage}</div>
      <div class="life">${card.life}</div>
      <div class="damageThreshold">${card.damageThreshold}</div>
    </div>
  ` : ""}
`;

  adjustNameSize(cardElement);
  cardElement.offsetHeight;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => adjustTextSize(cardElement));
  });
  const tooltip = document.getElementById("tooltip");
  addTooltipListeners(cardElement);
  addTokenTooltipListeners(cardElement);

cardElement.querySelectorAll(".keyword").forEach(keyword => {
    keyword.addEventListener("mouseenter", (e) => {
    const description = e.target.dataset.description;

    if (description && description.trim() !== "") {
      tooltip.textContent = description;
      tooltip.style.display = "block";
      tooltip.style.fontFamily = `"Times New Roman", Times, serif`;
    } else {
      tooltip.style.display = "none";
    }
  });

  keyword.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  keyword.addEventListener("mousemove", (e) => {
    if (tooltip.style.display === "block") {
      tooltip.style.left = `${e.pageX + 10}px`;
      tooltip.style.top = `${e.pageY - 40}px`;
    }
  });
});
// === Add discard-capable button overlay ===
const cardButton = document.createElement("button");
cardButton.classList.add("card-button");
cardButton.style.position = "absolute";
cardButton.style.top = "0";
cardButton.style.left = "0";
cardButton.style.width = "100%";
cardButton.style.height = "100%";
cardButton.style.opacity = "0";
cardButton.style.cursor = "pointer";
cardButton.style.zIndex = "1000";
cardButton.style.border = "none";
cardButton.style.background = "transparent";

// Set default handler (for regular clicks)
const defaultHandler = (e) => {
  const cardId = String(card.id);
  const inSacrificeMode = window.sacrificeMode && window.validSacrificeIds?.has(cardId);
  //console.log("🧪 Sacrifice mode active:", window.sacrificeMode, "Valid UIDs:", [...window.validSacrificeIds], "Clicked card ID:", cardId);

  if (inSacrificeMode) {
    e.stopPropagation();
    e.preventDefault();
    //console.log("🔥 Sacrifice button clicked for", card.name);

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

      // ✅ Manually trigger the sacrifice logic
      if (window.__pendingSacrificeSelection) {
        window.__pendingSacrificeSelection(card);
      } else {
        console.warn("⚠️ No pending sacrifice callback.");
      }
    };

    document.getElementById("cancel-sacrifice").onclick = () => {
      document.body.removeChild(confirmBox);
    };
    return;
  }
  console.log(`🟢 Default card clicked: ${card.name}`);
};
// Check if card has at least one reflex-speed effect and is currently in a legal zone
const canRespondFromTomb = card.abilities?.some(ab =>
  Array.isArray(ab.effect1type) && ab.effect1type.includes("Reflex") && ab.effect1type.includes("Tomb") && card.boardState === "Tomb"
);
const canRespondFromVoid = card.abilities?.some(ab =>
  Array.isArray(ab.effect1type) && ab.effect1type.includes("Reflex") && ab.effect1type.includes("Void") && card.boardState === "Void"
);
const isReflexSpeedCard =
  card.type === "Reflex" ||
  card.type === "Rush" ||
  canRespondFromTomb ||
  canRespondFromVoid ||
  card.abilities?.some(ab => ab.effect1type === "Reflex" || (Array.isArray(ab.effect1type) && ab.effect1type.includes("Reflex")));

if (isReflexSpeedCard && (card.boardState === "Hand" || card.boardState?.includes("Zone") || canRespondFromTomb || canRespondFromVoid)) {
  cardButton.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`⚡ Reflex-speed click: ${card.name}`);
    if (window.__onReflexClick) {
      window.__onReflexClick(card);
    } else {
      console.warn("⚠️ No reflex handler wired.");
    }
  };
} else {
  cardButton.onclick = defaultHandler;
}

cardButton._originalHandler = cardButton.onclick;

cardElement.appendChild(cardButton);
if (container) {
  container.appendChild(cardElement);
}
//console.log("🔄 Creating DOM for:", card.id, card.name);
return cardElement;
}

export function adjustNameSize(cardElement) {
  const nameContainer = cardElement.querySelector(".card-name");
  const nameBoxHeight = nameContainer.offsetHeight;  // Get the fixed height of the name box
  let fontSize = parseFloat(window.getComputedStyle(nameContainer).fontSize);

  // Reduce font size if text overflows the width, but ensure it stays within the fixed height of the name box
  while (nameContainer.scrollWidth > nameContainer.offsetWidth && fontSize > 12) {
    fontSize -= 1.2;
    nameContainer.style.fontSize = `${fontSize}px`;
  }

  // If the text still overflows vertically, adjust the font size down
  while (nameContainer.scrollHeight > nameBoxHeight && fontSize > 12) {
    fontSize -= 1;
    nameContainer.style.fontSize = `${fontSize}px`;
  }
}

export function adjustTextSize(cardElement) {
  const textContainer = cardElement.querySelector(".card-text");
  const isChampion = cardElement.classList.contains("champion");
  const bottomBar = cardElement.querySelector(".bottom-bar");

  // === Champion logic (unchanged) ===
  if (isChampion && bottomBar) {
    let fontSize = parseFloat(window.getComputedStyle(textContainer).fontSize);
    const minSize = 6;
    const maxHeight = textContainer.offsetHeight;

    while (textContainer.scrollHeight > maxHeight && fontSize > minSize) {
      fontSize -= 1;
      textContainer.style.fontSize = `${fontSize}px`;
    }

    bottomBar.querySelectorAll(".damage, .life").forEach(el => {
      el.style.fontSize = "1.6em";
    });

    return; // done with champions
  }

  // === Non-champion logic ===
  let fontSize = parseFloat(window.getComputedStyle(textContainer).fontSize);
  const minSize = 6;

  // Temporarily force the max-height for accurate evaluation
  const maxHeight = textContainer.clientHeight || 200; // fallback in px
  while (textContainer.scrollHeight > textContainer.clientHeight && fontSize > minSize) {
    fontSize -= 1;
    textContainer.style.fontSize = `${fontSize}px`;
  }
}


function getTokenByName(name) {
  return tokens.find(token => token.name.toLowerCase() === name.toLowerCase());
}

export function addTooltipListeners(container) {
    const keywords = container.querySelectorAll(".keyword");

    const tooltip = document.getElementById("tooltip");

    keywords.forEach(keyword => {
        const description = keyword.dataset.description;

        if (description && description.trim() !== "") {

            keyword.addEventListener("mouseenter", (e) => {
                tooltip.textContent = description;
                tooltip.style.display = "block";
            });

            keyword.addEventListener("mouseleave", () => {
                tooltip.style.display = "none";
            });

            keyword.addEventListener("mousemove", (e) => {
                if (tooltip.style.display === "block") {
                    tooltip.style.left = `${e.pageX + 10}px`;
                    tooltip.style.top = `${e.pageY - 40}px`;
                }
            });
        }
    });
  }
export function addTokenTooltipListeners(container) {
  const tokenElements = container.querySelectorAll(".token-name");
  const tooltip = document.getElementById("token-tooltip");

  tokenElements.forEach(el => {
    const tokenName = el.dataset.token;
    const token = getTokenByName(tokenName);

    if (token) {
      el.addEventListener("mouseenter", (e) => {
        const tooltipText = tooltip.querySelector(".token-tooltip-text");
        if (tooltipText) {
          const abilityText = token.abilities?.[0]?.text?.trim() || "No effect.";
          const stats = `<br>( ${token.damage} / ${token.life} )`;
          tooltipText.innerHTML = `
            <strong>${token.name} ${stats}</strong><br>${abilityText}
          `;
        }

        tooltip.style.display = "block";
      });

      el.addEventListener("mousemove", (e) => {
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY - 40}px`;
      });

      el.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
      });
    }
  });
}

function renderTextWithTokens(text) {
  const tokenNames = tokens.map(t => t.name);
  tokenNames.forEach(tokenName => {
    const tokenRegex = new RegExp(`\\b${tokenName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
    text = text.replace(
      tokenRegex,
      `<span class='token-name' data-token='${tokenName}'>${tokenName}</span>`
    );
  });
  return text;
}