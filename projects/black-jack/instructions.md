# Інструкції до проекту гри Black Jack

## Вступ

Ласкаво просимо до проекту гри Black Jack! У цьому проекті ви створите гру Black Jack за допомогою JavaScript. Цей документ містить детальні інструкції щодо налаштування проекту, генерації колоди карт, перемішування колоди, відображення карт та обробки спеціальних карт.

## Генерація колоди

Для генерації колоди карт ми будемо використовувати наступні масті та ранги:

```javascript
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
```

Ми згенеруємо колоду, поєднуючи кожну масть з кожним рангом:

```javascript
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
```

## Перемішування колоди

Для перемішування колоди ми будемо використовувати алгоритм перемішування Фішера-Йетса:

```javascript
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

const shuffledDeck = shuffleDeck(deck);
console.log(shuffledDeck);
```

## Відображення карт

Для відображення карт ми створимо функції для витягування карти та її відображення:

```javascript
function drawCard(deck) {
    return deck.pop(); // Взяти верхню карту
}

function displayCard(card, player) {
    const cardImage = document.createElement("img");
    cardImage.src = `images/${card.file}`; // За потреби налаштуйте шлях
    cardImage.alt = card.name;
    document.getElementById(`${player}Cards`).appendChild(cardImage);
}

// Приклад використання
const card = drawCard(shuffledDeck);
displayCard(card, "player");
```

## Спеціальні карти

У вас є додаткові файли, такі як `_3D box`, `_Back`, `_Joker b`, `_Joker r`. Ви можете використовувати їх для:

- `_Back.png`: Зворотні сторони карт для прихованих карт (наприклад, друга карта дилера).
- Джокери: Додаткові карти для спеціальних правил.
- 3D Box: Візуальне представлення колоди.

Приклад для зворотних сторін карт:

```javascript
function displayCardBack(player) {
    const cardBack = document.createElement("img");
    cardBack.src = `images/_Back.png`;
    cardBack.alt = "Card Back";
    document.getElementById(`${player}Cards`).appendChild(cardBack);
}

// Приклад: Прихована карта дилера
displayCardBack("dealer");
```

## Повна інтеграція гри

З цим налаштуванням:

1. Ви маєте повну колоду, згенеровану з ваших імен файлів.
2. Карти відображаються з правильними зображеннями.
3. Додаткові ресурси (наприклад, `_Back.png`) покращують візуальний вигляд гри.

Дайте знати, якщо вам потрібна подальша налаштування! 😊

## HTML

Створіть основну структуру сторінки:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blackjack Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Blackjack Game</h1>
    <div id="game">
        <div id="playerArea">
            <h2>Your Cards</h2>
            <div id="playerCards"></div>
            <p id="playerScore">Your Score: 0</p>
        </div>
        <div id="dealerArea">
            <h2>Dealer's Cards</h2>
            <div id="dealerCards"></div>
            <p id="dealerScore" style="display: none;">Dealer's Score: 0</p>
        </div>
        <div id="controls">
            <button id="hitButton">Hit</button>
            <button id="standButton">Stand</button>
        </div>
    </div>
    <div id="result" style="display: none;">
        <h2>Result</h2>
        <p id="resultText"></p>
        <button id="restartButton">Restart</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## CSS

Додайте простий стиль для гри:

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
}

h1 {
    margin: 20px;
}

#game {
    margin: 20px;
}

#playerCards, #dealerCards {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
}

img {
    width: 80px;
    height: auto;
}

button {
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    cursor: pointer;
}
```

## JavaScript

Скрипт для реалізації гри:

```javascript
// 1. Генерація колоди
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

// 2. Перетасовка колоди
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

const shuffledDeck = shuffleDeck(deck);

// 3. Глобальні змінні
let playerScore = 0;
let dealerScore = 0;

// 4. Логіка гри
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
```

Результат:
- Гравець може грати у “Blackjack” із реалістичними картинками.
- Логіка гри та рахунок працюють.
- Простий, зрозумілий інтерфейс.
