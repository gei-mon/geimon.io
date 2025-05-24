import { totems } from '../data/totems.js';

document.addEventListener("DOMContentLoaded", async () => {
    const playerDeckSelect = document.getElementById("playerDeck");
    const opponentDeckSelect = document.getElementById("opponentDeck");
    const totemSelect = document.getElementById("totem");
    const turnOrderSelect = document.getElementById("turnOrder");
    const startBtn = document.getElementById("startGameBtn");
    const deckWarning = document.getElementById("deckWarning");

    let deckData = [];

    try {
        const res = await fetch('https://geimon-app-833627ba44e0.herokuapp.com/getUserDecks', {
            credentials: "include"
        });
        const result = await res.json();

        if (result.success) {
            deckData = result.decks;

            const playerOptions = ["Random"].concat(deckData.map(deck => deck.deck_name));
            const opponentOptions = ["Random"].concat(deckData.map(deck => deck.deck_name));

            populateDropdown(playerDeckSelect, playerOptions);
            populateDropdown(opponentDeckSelect, opponentOptions);
        } else {
            console.error("Failed to fetch decks.");
        }
    } catch (err) {
        console.error("Error fetching decks:", err);
    }

    // Populate totems
    const totemNames = ["Random"].concat(totems.flatMap(obj => Object.keys(obj)));
    populateDropdown(totemSelect, totemNames);
    turnOrderSelect.value = "coinflip";

    // Validation handler
    playerDeckSelect.addEventListener("change", () => {
        const selectedDeckName = playerDeckSelect.value;
        const deck = deckData.find(d => d.deck_name === selectedDeckName);
        if (selectedDeckName !== "Random" && deck && !deck.legal) {
            deckWarning.textContent = "Selected deck is not legal. It must be of legal size.";
            deckWarning.style.color = "red";
            startBtn.disabled = true;
        } else {
            deckWarning.textContent = "";
            startBtn.disabled = false;
        }
    });
});

function populateDropdown(dropdown, options) {
    dropdown.innerHTML = "";
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        dropdown.appendChild(opt);
    });
}

function startGame() {
    const playerDeck = document.getElementById("playerDeck").value;
    const opponentDeck = document.getElementById("opponentDeck").value;
    const gameType = document.getElementById("gameType").value;
    const turnOrder = document.getElementById("turnOrder").value;
    const totemSelect = document.getElementById("totem");

    let selectedTotem = totemSelect.value;
    let selectedTotemText = "";

    // Fix random selection logic
    if (selectedTotem === "Random") {
        // Flatten all totems into a single object for easy lookup
        const allTotems = Object.assign({}, ...totems);

        // Get all totem names (excluding "Random")
        const totemNames = Object.keys(allTotems);
        if (totemNames.length > 0) {
            // Randomly pick one
            const randomIndex = Math.floor(Math.random() * totemNames.length);
            selectedTotem = totemNames[randomIndex];

            // Get its description
            selectedTotemText = allTotems[selectedTotem] || "Unknown Totem";
        }
    } else {
        // Directly fetch totem description
        const allTotems = Object.assign({}, ...totems);
        selectedTotemText = allTotems[selectedTotem] || "Unknown Totem";
    }
    // Use the selected values
    const settings = {
        playerDeck,
        opponentDeck,
        gameType,
        totem: selectedTotem,
        totemText: selectedTotemText,
        turnOrder
    };
    const params = new URLSearchParams(settings).toString();
    window.location.href = `game.html?${params}`;
}

window.startGame = startGame;
