class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.generateDeck();
        this.shuffleDeck();
    }

    generateDeck() {
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

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(suit, rank.name, rank.value));
            }
        }
    }

    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    drawCard() {
        return this.cards.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }

    drawCard(deck) {
        const card = deck.drawCard();
        this.hand.push(card);
        this.calculateScore();
        return card;
    }

    calculateScore() {
        this.score = this.hand.reduce((acc, card) => acc + card.value, 0);
    }
}

const deck = new Deck();
const player = new Player("Player");
const dealer = new Player("Dealer");

function displayCard(card, player) {
    const cardImage = document.createElement("img");
    cardImage.src = `images/${card.suit} ${card.rank}.png`;
    cardImage.alt = `${card.rank} of ${card.suit}`;
    document.getElementById(`${player}Cards`).appendChild(cardImage);
}

document.getElementById("hitButton").onclick = function () {
    const card = player.drawCard(deck);
    displayCard(card, "player");
    document.getElementById("playerScore").textContent = `Your Score: ${player.score}`;

    if (player.score > 21) {
        endGame("You busted! Dealer wins.");
    }
};

document.getElementById("standButton").onclick = function () {
    while (dealer.score < 17) {
        const card = dealer.drawCard(deck);
        displayCard(card, "dealer");
    }

    document.getElementById("dealerScore").style.display = "block";
    document.getElementById("dealerScore").textContent = `Dealer's Score: ${dealer.score}`;

    if (dealer.score > 21 || player.score > dealer.score) {
        endGame("You win!");
    } else if (player.score < dealer.score) {
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
