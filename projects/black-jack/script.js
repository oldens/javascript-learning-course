const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const ranks = [
    { name: "1", value: 11 }, // Ace
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
    { name: "11", value: 10 }, // Jack
    { name: "12", value: 10 }, // Queen
    { name: "13", value: 10 }, // King
];

const deck = [];
for (const suit of suits) {
    for (const rank of ranks) {
        deck.push({
            value: rank.value,
            name: `${rank.name} of ${suit}`,
            file: `${suit} ${rank.name}.png`,
        });
    }
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

const shuffledDeck = shuffleDeck(deck);

let playerScore = 0;
let dealerScore = 0;

function drawCard(deck) {
    return deck.pop();
}

function displayCard(card, player) {
    const cardImage = document.createElement("img");
    cardImage.src = `images/${card.file}`;
    cardImage.alt = card.name;
    document.getElementById(`${player}Cards`).appendChild(cardImage);
}

document.getElementById("hitButton").onclick = function () {
    const card = drawCard(shuffledDeck);
    playerScore += card.value;
    displayCard(card, "player");
    document.getElementById("playerScore").textContent = `Your Score: ${playerScore}`;

    if (playerScore > 21) {
        endGame("You busted! Dealer wins.");
    }
};

document.getElementById("standButton").onclick = function () {
    while (dealerScore < 17) {
        const card = drawCard(shuffledDeck);
        dealerScore += card.value;
        displayCard(card, "dealer");
    }

    document.getElementById("dealerScore").style.display = "block";
    document.getElementById("dealerScore").textContent = `Dealer's Score: ${dealerScore}`;

    if (dealerScore > 21 || playerScore > dealerScore) {
        endGame("You win!");
    } else if (playerScore < dealerScore) {
        endGame("Dealer wins!");
    } else {
        endGame("It's a tie!");
    }
};

function endGame(message) {
    document.getElementById("resultText").textContent = message;
    document.getElementById("result").style.display = "block";
    document.getElementById("hitButton").disabled = true;
    document.getElementById("standButton").disabled = true;
}

document.getElementById("restartButton").onclick = function () {
    location.reload();
};
