# Проект 1: Створення простої JavaScript програми

Ласкаво просимо до першого проекту курсу вивчення JavaScript! У цьому проекті ви створите просту JavaScript програму, яка дозволяє користувачам виконувати базові арифметичні операції (додавання, віднімання, множення та ділення) над двома числами.

## Вимоги до проекту

1. Створіть HTML файл з формою, яка дозволяє користувачам вводити два числа та вибирати арифметичну операцію.
2. Створіть JavaScript файл, який обробляє відправку форми, виконує вибрану арифметичну операцію та відображає результат.
3. Використовуйте відповідні HTML елементи, такі як поля введення, кнопки та випадаючі списки, для створення форми.
4. Використовуйте JavaScript для перевірки введених користувачем даних та забезпечення того, що введені значення є дійсними числами.
5. Відображайте результат арифметичної операції на веб-сторінці.

## Приклад

Ось приклад того, як може виглядати HTML файл:

```html
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Проста арифметична програма</title>
  <script src="app.js" defer></script>
</head>
<body>
  <h1>Проста арифметична програма</h1>
  <form id="arithmetic-form">
    <label for="number1">Число 1:</label>
    <input type="number" id="number1" name="number1" required>
    <br>
    <label for="number2">Число 2:</label>
    <input type="number" id="number2" name="number2" required>
    <br>
    <label for="operation">Операція:</label>
    <select id="operation" name="operation" required>
      <option value="add">Додавання</option>
      <option value="subtract">Віднімання</option>
      <option value="multiply">Множення</option>
      <option value="divide">Ділення</option>
    </select>
    <br>
    <button type="submit">Обчислити</button>
  </form>
  <h2>Результат: <span id="result"></span></h2>
</body>
</html>
```

Ось приклад того, як може виглядати JavaScript файл:

```javascript
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("arithmetic-form");
  const resultSpan = document.getElementById("result");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;

    if (isNaN(number1) || isNaN(number2)) {
      resultSpan.textContent = "Будь ласка, введіть дійсні числа.";
      return;
    }

    let result;
    switch (operation) {
      case "add":
        result = number1 + number2;
        break;
      case "subtract":
        result = number1 - number2;
        break;
      case "multiply":
        result = number1 * number2;
        break;
      case "divide":
        if (number2 === 0) {
          resultSpan.textContent = "Не можна ділити на нуль.";
          return;
        }
        result = number1 / number2;
        break;
      default:
        resultSpan.textContent = "Невірна операція.";
        return;
    }

    resultSpan.textContent = result;
  });
});
```

## Висновок

У цьому проекті ви створили просту JavaScript програму, яка дозволяє користувачам виконувати базові арифметичні операції над двома числами. Ви дізналися, як створити HTML форму, обробляти відправку форми за допомогою JavaScript, перевіряти введені користувачем дані та відображати результат на веб-сторінці. Цей проект допоможе вам застосувати свої знання JavaScript та HTML для створення функціонального веб-додатку.
