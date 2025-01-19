# Вправа 2: Гра "Вгадати число"

Ласкаво просимо до другої вправи курсу вивчення JavaScript! У цій вправі ви будете створювати гру "Вгадати число", яка генерує випадкове число, приймає здогадки користувача і надає підказки.

## Інструкції

1. Створіть HTML файл з наступним вмістом:

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess the Number</title>
</head>
<body>
    <h1>Guess the Number</h1>
    <p>Try to guess the number I'm thinking of between 1 and 100!</p>

    <form id="guessForm">
        <label for="guess">Your Guess:</label>
        <input type="number" id="guess" name="guess" placeholder="Enter your guess" min="1" max="100" required>
        <button type="submit">Submit</button>
    </form>

    <div id="result" style="display: none;">
        <h2>Result</h2>
        <p id="resultText"></p>
    </div>

    <button id="resetGame" style="display: none;">Play Again</button>

    <script src="lecture2.js"></script>
</body>
</html>
```

2. Додайте JavaScript код у файл `lecture2.js` для обробки відправки форми, перевірки здогадок і відображення результату.

```javascript
// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; // To count the number of attempts

document.getElementById("guessForm").onsubmit = function (e) {
    e.preventDefault();

    // Get the user's guess
    const guess = parseInt(document.getElementById("guess").value);
    attempts++;

    // Validate the input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Check the guess and display the result
    let message = "";
    if (guess < randomNumber) {
        message = `Too low! Try again. Attempts: ${attempts}`;
    } else if (guess > randomNumber) {
        message = `Too high! Try again. Attempts: ${attempts}`;
    } else {
        message = `🎉 Congratulations! You guessed it in ${attempts} attempts!`;
        document.getElementById("resetGame").style.display = "inline";
    }

    // Update the result section
    document.getElementById("resultText").textContent = message;
    document.getElementById("result").style.display = "block";

    // Check for maximum attempts
    if (attempts >= 10 && guess !== randomNumber) {
        document.getElementById("resultText").textContent = "Game over! You've used all your attempts.";
        document.getElementById("result").style.display = "block";
        document.getElementById("guessForm").style.display = "none";
        document.getElementById("resetGame").style.display = "inline";
    }
};

document.getElementById("resetGame").onclick = function () {
    location.reload();
};
```

## Як це працює

1. Гра генерує випадкове число: Це число буде незмінним, поки учень не вгадає його.
2. Учень вводить свої здогадки у форму: Поле обмежене числом від 1 до 100.
3. Підказки та результат:
   - Якщо число занадто велике: “Too high!”
   - Якщо число занадто маленьке: “Too low!”
   - Якщо вгадали: “Congratulations! You guessed it in X attempts!”
4. Рахунок спроб: Учні бачать, скільки разів вони намагалися вгадати.
5. Обмеження за кількістю спроб: Учні мають максимум 10 спроб.
6. Кнопка “Почати заново”: Дозволяє перезапустити гру.

## Як завдання виконується на уроці

- Учні створюють форму та додають обробник подій.
- Вчаться працювати з умовними конструкціями (if-else).
- Використовують функцію для генерації випадкового числа.
- Відразу бачать результат у браузері.

## Приклад

### Вхід

Учень вводить здогадку: 50.

### Вихід

“Too low! Try again. Attempts: 1”

Ця вправа проста у виконанні, але включає інтерактивність і трохи азарту, що робить процес навчання цікавішим.
