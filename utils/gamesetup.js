import { totems } from '../data/totems.js';
import { cards } from '../data/cards.js';

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

            const sortedDecks = deckData.map(deck => deck.deck_name).sort();
            const playerOptions = ["Random"].concat(sortedDecks);
            const opponentOptions = ["Random"].concat(sortedDecks);

            populateDropdown(playerDeckSelect, playerOptions);
            populateDropdown(opponentDeckSelect, opponentOptions);
        } else {
            console.error("Failed to fetch decks.");
        }
    } catch (err) {
        console.error("Error fetching decks:", err);
    }

    // Populate totems
    const sortedTotemNames = totems.flatMap(obj => Object.keys(obj)).sort();
    const totemNames = ["Random"].concat(sortedTotemNames);
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
    const playerDeckName = document.getElementById("playerDeck").value;
    const opponentDeckName = document.getElementById("opponentDeck").value;
    const gameType = document.getElementById("gameType").value;
    const turnOrder = document.getElementById("turnOrder").value;
    const totemSelect = document.getElementById("totem");

    let selectedTotem = totemSelect.value;
    let selectedTotemText = "";

    const allTotems = Object.assign({}, ...totems);
    if (selectedTotem === "Random") {
        const totemNames = Object.keys(allTotems);
        if (totemNames.length > 0) {
            const randomIndex = Math.floor(Math.random() * totemNames.length);
            selectedTotem = totemNames[randomIndex];
        }
    }
    selectedTotemText = allTotems[selectedTotem] || "Unknown Totem";

    const playerDeck = playerDeckName;
    const opponentDeck = opponentDeckName;

    const gameId = Math.random().toString(36).substr(2, 9);
    localStorage.setItem("gameId", gameId); // overwrite old game ID

    const settings = {
        playerDeck,
        opponentDeck,
        gameType,
        totem: selectedTotem,
        totemText: selectedTotemText,
        turnOrder,
        gameId // pass it to game.html via URL
    };

    console.log("playerDeck final value:", playerDeck);
    console.log("URL params being sent:", new URLSearchParams(settings).toString());
    const params = new URLSearchParams(settings).toString();
    window.location.href = `game.html?${params}`;
}

window.startGame = startGame;

