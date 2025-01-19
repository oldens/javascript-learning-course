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
