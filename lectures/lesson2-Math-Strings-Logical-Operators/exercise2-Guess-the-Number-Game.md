# Завдання: Гра "Вгадати число"

## Мета гри
Вгадати випадкове число від 1 до 100 за якомога меншу кількість спроб.

## Завдання

1. **HTML**:
   - Створіть форму для введення числа.
   - Додайте секцію для відображення результату.
   - Додайте кнопку для перезапуску гри.

2. **JavaScript**:
   - Згенеруйте випадкове число.
   - Реалізуйте логіку обробки введення користувача:
     - Виведіть підказки: "Занадто мало", "Занадто багато", або "Вгадали!".
     - Відображайте кількість спроб.
   - Додайте обмеження на кількість спроб (максимум 10).
   - У випадку невдачі виведіть повідомлення "Гру закінчено".

3. **Розширення**:
   - Реалізуйте кнопку "Почати заново" для перезапуску гри.
   - Додайте систему балів:
     - Нараховуйте більше балів за меншу кількість спроб.
   - Використовуйте стилізацію для результатів:
     - Зеленим кольором відображайте успіх.
     - Червоним кольором відображайте помилки.

## Навички
- Робота з формами.
- Обробка подій.
- Використання умовних конструкцій та циклів у JavaScript.

## Код прикладу

### HTML
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

    <script src="game.js"></script>
</body>
</html>

JavaScript

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("guessForm").onsubmit = function (e) {
    e.preventDefault();
    const guess = parseInt(document.getElementById("guess").value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    let message = "";
    if (guess < randomNumber) {
        message = `Too low! Try again. Attempts: ${attempts}`;
    } else if (guess > randomNumber) {
        message = `Too high! Try again. Attempts: ${attempts}`;
    } else {
        message = `🎉 Congratulations! You guessed it in ${attempts} attempts!`;
        document.getElementById("resetGame").style.display = "inline";
    }

    document.getElementById("resultText").textContent = message;
    document.getElementById("result").style.display = "block";

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

