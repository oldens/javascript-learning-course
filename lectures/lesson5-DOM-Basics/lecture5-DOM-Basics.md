# Лекція 5: Основи роботи з DOM (DOM Basics)

Ласкаво просимо на п'яту лекцію курсу вивчення JavaScript! У цій лекції ми розглянемо основи роботи з DOM (Document Object Model), включаючи доступ до елементів, зміну вмісту, додавання та видалення елементів, події, атрибути, стилі, форми та навігацію.

## Зміст

1. Вступ до DOM
2. Доступ до елементів
3. Зміна вмісту
4. Додавання та видалення елементів
5. Події в DOM
6. Атрибути та стилі
7. Взаємодія з формами
8. Навігація DOM
9. Висновок

## 1. Вступ до DOM

DOM (Document Object Model) — це програмна інтерфейсна модель для HTML-документів, яка представляє структуру веб-сторінки як дерево об’єктів. JavaScript може використовувати DOM для маніпуляцій елементами сторінки, їх створення, зміни або видалення в реальному часі. DOM — це спосіб представлення HTML-документа у вигляді дерева, де кожен елемент сторінки є вузлом (node). Через DOM JavaScript отримує доступ до HTML і дозволяє змінювати як структуру сторінки, так і її стилі або вміст.

## 2. Доступ до елементів

### document.querySelector

Метод `document.querySelector` вибирає перший елемент, який відповідає заданому селектору (клас, ідентифікатор, тег).

```javascript
const element = document.querySelector('.my-class');
```

### document.querySelectorAll

Метод `document.querySelectorAll` вибирає всі елементи, які відповідають заданому селектору, і повертає NodeList.

```javascript
const elements = document.querySelectorAll('.my-class');
```

### getElementById

Метод `getElementById` вибирає елемент за унікальним ідентифікатором.

```javascript
const element = document.getElementById('my-id');
```

### getElementsByClassName / getElementsByTagName

Методи `getElementsByClassName` та `getElementsByTagName` вибирають елементи за класом або тегом.

```javascript
const elementsByClass = document.getElementsByClassName('my-class');
const elementsByTag = document.getElementsByTagName('div');
```

## 3. Зміна вмісту

### innerHTML

Властивість `innerHTML` змінює весь HTML-вміст елемента.

```javascript
const element = document.getElementById('my-id');
element.innerHTML = '<p>Новий вміст</p>';
```

### textContent

Властивість `textContent` змінює текстовий вміст елемента без форматування HTML.

```javascript
const element = document.getElementById('my-id');
element.textContent = 'Новий текстовий вміст';
```

## 4. Додавання та видалення елементів

### createElement

Метод `createElement` створює новий елемент.

```javascript
const newElement = document.createElement('div');
```

### appendChild

Метод `appendChild` додає новий елемент як дочірній до існуючого.

```javascript
const parentElement = document.getElementById('parent-id');
const newElement = document.createElement('div');
parentElement.appendChild(newElement);
```

### removeChild

Метод `removeChild` видаляє елемент зі сторінки.

```javascript
const parentElement = document.getElementById('parent-id');
const childElement = document.getElementById('child-id');
parentElement.removeChild(childElement);
```

## 5. Події в DOM

Події дозволяють реагувати на дії користувачів (наприклад, кліки, введення тексту) або на системні події.

### Додавання обробників подій

Метод `addEventListener` додає слухача подій до елемента. Наприклад, реагування на кліки, наведення миші, зміну вмісту.

```javascript
const button = document.getElementById('my-button');
button.addEventListener('click', function() {
  alert('Кнопка натиснута!');
});
```

### Типові події

- `click` — Натискання на елемент.
- `mouseover` — Наведення курсора миші на елемент.
- `keydown` — Натискання клавіші на клавіатурі.
- `input` — Зміна текстового вмісту у формі.

## 6. Атрибути та стилі

### Робота з атрибутами

Методи `getAttribute` та `setAttribute` використовуються для отримання або встановлення значення атрибута. Метод `removeAttribute` видаляє атрибут.

```javascript
const element = document.getElementById('my-id');
const value = element.getAttribute('data-value');
element.setAttribute('data-value', 'нове значення');
element.removeAttribute('data-value');
```

### Зміна стилів

Властивість `style` використовується для зміни інлайн-стилів елемента. Властивість `classList` дозволяє додавати, видаляти або перемикати класи (add, remove, toggle).

```javascript
const element = document.getElementById('my-id');
element.style.color = 'red';
element.classList.add('new-class');
element.classList.remove('old-class');
element.classList.toggle('active');
```

## 7. Взаємодія з формами

### value

Властивість `value` використовується для отримання або зміни значення елементів форм (текстові поля, чекбокси тощо).

```javascript
const input = document.getElementById('my-input');
const value = input.value;
input.value = 'нове значення';
```

### Події, такі як submit

Подія `submit` використовується для обробки даних, введених у форми.

```javascript
const form = document.getElementById('my-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Форма відправлена!');
});
```

## 8. Навігація DOM

DOM дозволяє переміщатися між вузлами сторінки.

### parentNode

Властивість `parentNode` отримує батьківський елемент.

```javascript
const childElement = document.getElementById('child-id');
const parentElement = childElement.parentNode;
```

### childNodes / children

Властивості `childNodes` та `children` надають доступ до дочірніх вузлів.

```javascript
const parentElement = document.getElementById('parent-id');
const childNodes = parentElement.childNodes;
const children = parentElement.children;
```

### nextSibling / previousSibling

Властивості `nextSibling` та `previousSibling` отримують сусідні вузли.

```javascript
const element = document.getElementById('my-id');
const nextSibling = element.nextSibling;
const previousSibling = element.previousSibling;
```

## 9. Висновок

Робота з DOM — основа створення динамічних і інтерактивних веб-додатків. DOM надає інструменти для вибору елементів, управління подіями та зміни структури сторінки, роблячи веб-додатки інтерактивними та гнучкими.
