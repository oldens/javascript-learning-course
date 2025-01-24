console.log("Лекція 5: Основи роботи з DOM (DOM Basics)");

// ДОСТУП ДО ЕЛЕМЕНТІВ

// document.querySelector: Вибирає перший елемент, який відповідає заданому селектору (клас, ідентифікатор, тег).
const elementByClass = document.querySelector('.my-class');
console.log(elementByClass);

// document.querySelectorAll: Вибирає всі елементи, які відповідають заданому селектору, і повертає NodeList.
const elementsByClass = document.querySelectorAll('.my-class');
console.log(elementsByClass);

// getElementById: Вибирає елемент за унікальним ідентифікатором.
const elementById = document.getElementById('my-id');
console.log(elementById);

// getElementsByClassName / getElementsByTagName: Вибирають елементи за класом або тегом.
const elementsByClassName = document.getElementsByClassName('my-class');
console.log(elementsByClassName);

const elementsByTagName = document.getElementsByTagName('div');
console.log(elementsByTagName);

// ЗМІНА ВМІСТУ

// innerHTML: Змінює весь HTML-вміст елемента.
const elementToChangeHTML = document.getElementById('my-id');
elementToChangeHTML.innerHTML = '<p>Новий вміст</p>';

// textContent: Змінює текстовий вміст елемента без форматування HTML.
const elementToChangeText = document.getElementById('my-id');
elementToChangeText.textContent = 'Новий текстовий вміст';

// ДОДАВАННЯ ТА ВИДАЛЕННЯ ЕЛЕМЕНТІВ

// createElement: Створює новий елемент.
const newElement = document.createElement('div');

// appendChild: Додає новий елемент як дочірній до існуючого.
const parentElement = document.getElementById('parent-id');
parentElement.appendChild(newElement);

// removeChild: Видаляє елемент зі сторінки.
const childElement = document.getElementById('child-id');
parentElement.removeChild(childElement);

// ПОДІЇ В DOM

// addEventListener: Додає слухача подій до елемента. Наприклад, реагування на кліки, наведення миші, зміну вмісту.
const button = document.getElementById('my-button');
button.addEventListener('click', function() {
  alert('Кнопка натиснута!');
});

// АТРИБУТИ ТА СТИЛІ

// getAttribute / setAttribute: Отримання або встановлення значення атрибута. removeAttribute: Видалення атрибута.
const elementWithAttribute = document.getElementById('my-id');
const attributeValue = elementWithAttribute.getAttribute('data-value');
elementWithAttribute.setAttribute('data-value', 'нове значення');
elementWithAttribute.removeAttribute('data-value');

// style: Зміна інлайн-стилів елемента. classList: Дозволяє додавати, видаляти або перемикати класи (add, remove, toggle).
const elementToStyle = document.getElementById('my-id');
elementToStyle.style.color = 'red';
elementToStyle.classList.add('new-class');
elementToStyle.classList.remove('old-class');
elementToStyle.classList.toggle('active');

// ВЗАЄМОДІЯ З ФОРМАМИ

// value: Отримання або зміна значення елементів форм (текстові поля, чекбокси тощо).
const inputElement = document.getElementById('my-input');
const inputValue = inputElement.value;
inputElement.value = 'нове значення';

// Події, такі як submit: Використовуються для обробки даних, введених у форми.
const formElement = document.getElementById('my-form');
formElement.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Форма відправлена!');
});

// НАВІГАЦІЯ DOM

// parentNode: Отримує батьківський елемент.
const childNode = document.getElementById('child-id');
const parentNode = childNode.parentNode;

// childNodes / children: Доступ до дочірніх вузлів.
const parentNodeWithChildren = document.getElementById('parent-id');
const childNodes = parentNodeWithChildren.childNodes;
const children = parentNodeWithChildren.children;

// nextSibling / previousSibling: Отримання сусідніх вузлів.
const currentNode = document.getElementById('my-id');
const nextSibling = currentNode.nextSibling;
const previousSibling = currentNode.previousSibling;
