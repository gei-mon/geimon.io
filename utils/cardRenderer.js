import { keywords } from "../data/keywords.js";

export function renderCard(card, container) {
  const cardElement = document.createElement("div");
  cardElement.className = "card";

  if (card.type === "Champion") {
    cardElement.classList.add("champion");
    if (card.tag1 === "Cryptbound") {
      cardElement.classList.add("cryptbound");
    }
  }

  const tags = [card.tag1, card.tag2, card.tag3, card.tag4, card.tag5, card.tag6]
    .filter(tag => tag !== "")
    .join(" ");

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

    // Split by 'If ' for effect handling, retaining keywords
    const lines = abilityText.split(/(?=If )/);

const formattedLines = lines.map(line => {
  const isEffect = line.startsWith("If ");

  // Define key phrases to format
  const keyPhrases = ["If Sent to Tomb", "On Rally"];

  // Process key phrases for formatting
  keyPhrases.forEach(phrase => {
    const phraseRegex = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
    line = line.replace(
      phraseRegex,
      `<strong>${phrase}</strong>`
    );
  });

  // Process keywords and make them bold
  ability.keywords.forEach(keyword => {
    const keywordRegex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
    const keywordDescription = (keywords[keyword] || 'No description').replace(/<\/?[^>]+(>|$)/g, "");

    line = line.replace(
      keywordRegex,
      `<strong><span class='keyword' data-description='${keywordDescription}'>${keyword}</span></strong>`
    );
  });

  if (isEffect) {
    return `<li class="effect">${line}</li>`;
  }

  return `<div class="keyword">${line}</div>`;
}).join("");

    return formattedLines;  // Return the formatted lines directly (without a wrapping <ul>)
  }).join(" ");  // Use a single space to join the final abilities HTML string

  cardElement.innerHTML = `
    <div class="card-name">${card.name}</div>
    <div class="card-image"></div>
    <div class="card-tags">${tags}</div>
    <div class="card-text" style="padding: 0;">${abilitiesHTML}</div>
    <div class="bottom-bar">
      <div class="damage">${card.damage}</div>
      <div class="life">${card.life}</div>
    </div>
    `;

  container.appendChild(cardElement);
  adjustNameSize(cardElement);
  adjustTextSize(cardElement);
  const tooltip = document.getElementById("tooltip");

cardElement.querySelectorAll(".keyword").forEach(keyword => {
  keyword.addEventListener("mouseenter", (e) => {
    const description = e.target.dataset.description;

    if (description && description.trim() !== "") {
      tooltip.textContent = description;
      tooltip.style.display = "block";
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
    fontSize -= 6.5;
    textContainer.style.fontSize = `${fontSize}px`;
  }
  
  // Ensure that the damage and life text are not resized
  const bottomBar = cardElement.querySelector(".bottom-bar");
  bottomBar.querySelectorAll(".damage, .life").forEach(el => {
    el.style.fontSize = "1.6em";  // Keep damage and life text font size fixed
  });
}
