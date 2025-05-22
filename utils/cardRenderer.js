import { keywords } from "../data/keywords.js";

export function renderCard(card, container) {
  const cardElement = document.createElement("div");
  cardElement.className = "card";

  if (card.type === "Champion") {
    cardElement.classList.add("champion");
    const firstTag = card.tags?.[0] || "";
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
      console.log(`Keyword: ${keyword}, Description: ${keywords[keyword]}`);
      // Replace keyword with span, store only the description text in the tooltip (no HTML)
      abilityText = abilityText.replace( keywordRegex, 
        `<span class='keyword' data-description='${keywordDescription.replace(/<\/?[^>]+(>|$)/g, "")}'>${keyword}</span>`
        );
    });

// Define key phrases to format
const keyPhrases = ["Decisive Plan","Foretell my Fate","Bottoms Up","Roam Around","If Destroyed","Good Morning","Goodnight","I Found It","Flip","Surrender Now","Gotcha","Sniffer Sense","Take the Bullet","Mounted","While Equipped","Hail Mary","Arm Thy Knight","Awaken Allies","Healing Hands","Bestow Life","Sacrificial Blade","Reforged","Garbage Lord", "Trash Picker", "Ride", "Or Die", "Mandatory", "Lightbulb", "Wake-Up Jolt", "Upgrade", "Emergency Transport", "Secret Weapon", "Wake the Beast", "Garage Baby", "Library Assistant", "Powerful Core", "Helping Hand", "If Discarded", "Deadeye", "If Sent to Tomb", "On Rally", "On Resurrection", "Mind Augus", "Exhaustion", "Shattered Connection", "Reflex", "Break the Seal", "Fateseal", "Rend Soul", "If Obliterated", "Soulburn"];

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

return `<div class="keyword">${abilityText}</div>`;

  }).join(" ");  // Use a single space to join the final abilities HTML string

  cardElement.innerHTML = `
    <div class="card-name">${card.name}</div>
    <div class="card-image">
      <img src="${card.image}" alt="${card.name}" class="card-art">
    </div>
    <div class="card-tags">${tags}</div>
    ${card.condition ? `<div class="card-condition">Condition: ${card.condition}</div>` : ""}
    ${card.cost && card.cost !== "Basic" ? `<div class="card-cost">Cost: ${card.cost}</div>` : ""}
    <div class="card-text" style="padding: 0;">${abilitiesHTML}</div>
    ${card.type === "Champion" ? `
    <div class="bottom-bar">
      <div class="damage">${card.damage}</div>
      <div class="life">${card.life}</div>
      ${card.damageThreshold ? `<div class="damageThreshold">${card.damageThreshold}</div>` : ""}
    </div>
  ` : ""}
`;

  container.appendChild(cardElement);
  adjustNameSize(cardElement);
  cardElement.offsetHeight;
  requestAnimationFrame(() => {
  requestAnimationFrame(() => adjustTextSize(cardElement));
  });
  const tooltip = document.getElementById("tooltip");
  console.log("Ability HTML before cloning:", abilitiesHTML);

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
console.log("Card Keywords for:", card.name);
cardElement.querySelectorAll(".keyword").forEach((kw, index) => {
    console.log(`Keyword ${index + 1}:`, kw.textContent, "Description:", kw.dataset.description);
});
return cardElement;
}
function adjustNameSize(cardElement) {
  const nameContainer = cardElement.querySelector(".card-name");
  const nameBoxHeight = nameContainer.offsetHeight;  // Get the fixed height of the name box
  let fontSize = parseFloat(window.getComputedStyle(nameContainer).fontSize);

  // Reduce font size if text overflows the width, but ensure it stays within the fixed height of the name box
  while (nameContainer.scrollWidth > nameContainer.offsetWidth && fontSize > 12) {
    fontSize -= 1;
    nameContainer.style.fontSize = `${fontSize}px`;
  }

  // If the text still overflows vertically, adjust the font size down
  while (nameContainer.scrollHeight > nameBoxHeight && fontSize > 12) {
    fontSize -= 1;
    nameContainer.style.fontSize = `${fontSize}px`;
  }
}

function adjustTextSize(cardElement) {
  const textContainer = cardElement.querySelector(".card-text");
  const maxHeight = textContainer.offsetHeight;
  let fontSize = parseFloat(window.getComputedStyle(textContainer).fontSize);

  // Ensure the text fits vertically within the container
  while (textContainer.scrollHeight > maxHeight && fontSize > 6) {
    fontSize -= 4.5;
    textContainer.style.fontSize = `${fontSize}px`;
  }
  console.log("Text container height:", textContainer.offsetHeight);
  console.log("Text scroll height:", textContainer.scrollHeight);

  // Ensure that the damage and life text are not resized
  const bottomBar = cardElement.querySelector(".bottom-bar");
  if (bottomBar) {
    bottomBar.querySelectorAll(".damage, .life").forEach(el => {
      el.style.fontSize = "1.6em";
    });
  } else {
    console.warn("No .bottom-bar found in cardElement:", cardElement);
  }
}

export function addTooltipListeners(container) {
    const keywords = container.querySelectorAll(".keyword");

    console.log("Total keywords found for tooltips:", keywords.length);

    const tooltip = document.getElementById("tooltip");

    keywords.forEach(keyword => {
        const description = keyword.dataset.description;

        if (description && description.trim() !== "") {
            console.log(`Assigning tooltip to keyword: ${keyword.textContent}, Description: ${description}`);

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
