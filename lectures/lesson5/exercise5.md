# Вправа 5: Основи роботи з DOM (DOM Basics)

Ласкаво просимо до п'ятої вправи курсу вивчення JavaScript! У цій вправі ви будете практикувати основи роботи з DOM, включаючи доступ до елементів, зміну вмісту, додавання та видалення елементів, а також обробку подій.

## Інструкції

1. **Доступ до елементів**:
   - Створіть HTML файл з елементами, до яких ви будете отримувати доступ.
   - Використовуйте методи `document.querySelector`, `document.querySelectorAll`, `getElementById`, `getElementsByClassName` та `getElementsByTagName` для доступу до елементів.
   - Виведіть вибрані елементи у консоль.

2. **Зміна вмісту**:
   - Використовуйте властивості `innerHTML` та `textContent` для зміни вмісту елементів.
   - Створіть функцію, яка змінює вміст елемента за допомогою `innerHTML`.
   - Створіть функцію, яка змінює текстовий вміст елемента за допомогою `textContent`.

3. **Додавання та видалення елементів**:
   - Використовуйте методи `createElement`, `appendChild` та `removeChild` для додавання та видалення елементів.
   - Створіть функцію, яка додає новий елемент до існуючого.
   - Створіть функцію, яка видаляє елемент зі сторінки.

4. **Обробка подій**:
   - Використовуйте метод `addEventListener` для додавання обробників подій до елементів.
   - Створіть кнопку, яка викликає функцію при натисканні.
   - Створіть обробник подій для зміни стилю елемента при наведенні миші.

## Приклад

Ось приклад того, як виконати вправу:

### HTML

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Основи роботи з DOM</title>
    <script src="exercise5.js" defer></script>
</head>
<body>
    <h1 id="header">Заголовок</h1>
    <p class="text">Це абзац.</p>
    <div id="container"></div>
    <button id="myButton">Натисніть мене</button>
</body>
</html>
```

### JavaScript

```javascript
// Доступ до елементів
const header = document.getElementById('header');
const paragraphs = document.getElementsByClassName('text');
const container = document.querySelector('#container');
const button = document.querySelectorAll('button');

console.log(header);
console.log(paragraphs);
console.log(container);
console.log(button);

// Зміна вмісту
function changeInnerHTML() {
    container.innerHTML = '<p>Новий вміст контейнера</p>';
}

function changeTextContent() {
    header.textContent = 'Новий заголовок';
}

// Додавання та видалення елементів
function addElement() {
    const newElement = document.createElement('div');
    newElement.textContent = 'Новий елемент';
    container.appendChild(newElement);
}

function removeElement() {
    const elementToRemove = container.querySelector('div');
    if (elementToRemove) {
        container.removeChild(elementToRemove);
    }
}

// Обробка подій
button[0].addEventListener('click', changeInnerHTML);
header.addEventListener('mouseover', function() {
    header.style.color = 'red';
});
header.addEventListener('mouseout', function() {
    header.style.color = 'black';
});
```

## Висновок

У цій вправі ви практикували основи роботи з DOM, включаючи доступ до елементів, зміну вмісту, додавання та видалення елементів, а також обробку подій. Ви дізналися, як використовувати ці концепції для створення динамічних та інтерактивних веб-сторінок.
