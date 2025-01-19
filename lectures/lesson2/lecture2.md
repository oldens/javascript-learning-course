# Лекція 2: Гра "Вгадати число"

Ласкаво просимо на другу лекцію курсу вивчення JavaScript! У цій лекції ми розглянемо створення гри "Вгадати число", яка генерує випадкове число, приймає здогадки користувача і надає підказки.

## Зміст

1. Вступ
2. HTML структура гри
3. JavaScript логіка гри
4. Розширення гри
5. Висновок

## 1. Вступ

Гра "Вгадати число" - це проста, але цікава гра, яка допомагає вивчати основи JavaScript, включаючи роботу з формами, обробку подій, умовні конструкції та цикли. Мета гри - вгадати випадкове число, згенероване комп'ютером, за якомога меншу кількість спроб.

## 2. HTML структура гри

HTML структура гри включає форму для введення здогадок, секцію для відображення результату та кнопку для перезапуску гри.

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

## 3. JavaScript логіка гри

JavaScript код для гри "Вгадати число" включає генерацію випадкового числа, обробку введення користувача, перевірку здогадок і відображення результату.

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

## 4. Розширення гри

### Додавання кнопки "Почати заново"

Кнопка "Почати заново" дозволяє перезапустити гру без перезавантаження сторінки.

```html
<button id="resetGame" style="display: none;">Play Again</button>
```

```javascript
document.getElementById("resetGame").onclick = function () {
    location.reload();
};
```

### Обмеження за кількістю спроб

Можна додати обмеження за кількістю спроб, наприклад, максимум 10 спроб.

```javascript
if (attempts >= 10 && guess !== randomNumber) {
    document.getElementById("resultText").textContent = "Game over! You've used all your attempts.";
    document.getElementById("result").style.display = "block";
    document.getElementById("guessForm").style.display = "none";
    document.getElementById("resetGame").style.display = "inline";
}
```

### Система балів

Учні отримують більше балів за меншу кількість спроб. Наприклад:

```javascript
const score = Math.max(0, 100 - attempts * 10);
message = `🎉 Congratulations! You guessed it in ${attempts} attempts! Your score: ${score}`;
```

### Стилізація результатів

Використовуйте кольори для підказок: зелений (успіх), червоний (невдача).

## 5. Висновок

У цій лекції ми розглянули створення гри "Вгадати число", яка генерує випадкове число, приймає здогадки користувача і надає підказки. Ми також розглянули можливі розширення гри, такі як додавання кнопки "Почати заново", обмеження за кількістю спроб, система балів та стилізація результатів. Ця гра допоможе вам вивчити основи JavaScript та підготувати вас до більш складних тем у майбутніх лекціях.
