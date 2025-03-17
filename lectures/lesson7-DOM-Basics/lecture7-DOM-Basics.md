# Основи роботи з DOM (DOM Basics)

## Що таке DOM?

DOM (Document Object Model) — це програмна інтерфейсна модель для HTML-документів, яка представляє структуру веб-сторінки як дерево об’єктів. JavaScript може використовувати DOM для маніпуляцій елементами сторінки, їх створення, зміни або видалення в реальному часі. DOM — це спосіб представлення HTML-документа у вигляді дерева, де кожен елемент сторінки є вузлом (node). Через DOM JavaScript отримує доступ до HTML і дозволяє змінювати як структуру сторінки, так і її стилі або вміст.

## Доступ до елементів

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

### getElementsByClassName

Метод `getElementsByClassName` вибирає елементи за класом.

```javascript
const elements = document.getElementsByClassName('my-class');
```

### getElementsByTagName

Метод `getElementsByTagName` вибирає елементи за тегом.

```javascript
const elements = document.getElementsByTagName('div');
```

## Зміна вмісту

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

## Додавання та видалення елементів

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

## Обробка подій

### addEventListener

Метод `addEventListener` додає слухача подій до елемента. Наприклад, реагування на кліки, наведення миші, зміну вмісту.

```javascript
const button = document.getElementById('my-button');
button.addEventListener('click', function() {
  alert('Кнопка натиснута!');
});
```

## Атрибути та стилі

### Робота з атрибутами

Методи `getAttribute` та `setAttribute` використовуються для отримання або встановлення значення атрибута.

```javascript
const element = document.getElementById('my-id');
const value = element.getAttribute('data-value');
element.setAttribute('data-value', 'нове значення');
```

Метод `removeAttribute` видаляє атрибут.

```javascript
const element = document.getElementById('my-id');
element.removeAttribute('data-value');
```

### Зміна стилів

Властивість `style` змінює інлайн-стилі елемента.

```javascript
const element = document.getElementById('my-id');
element.style.color = 'red';
```

Властивість `classList` дозволяє додавати, видаляти або перемикати класи.

```javascript
const element = document.getElementById('my-id');
element.classList.add('new-class');
element.classList.remove('old-class');
element.classList.toggle('active');
```

## Взаємодія з формами

### value

Властивість `value` використовується для отримання або зміни значення елементів форм (текстові поля, чекбокси тощо).

```javascript
const input = document.getElementById('my-input');
const value = input.value;
input.value = 'нове значення';
```

### Події форм

Подія `submit` використовується для обробки даних, введених у форми.

```javascript
const form = document.getElementById('my-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Форма відправлена!');
});
```

## Навігація DOM

DOM дозволяє переміщатися між вузлами сторінки.

### parentNode

Властивість `parentNode` отримує батьківський елемент.

```javascript
const childElement = document.getElementById('child-id');
const parentElement = childElement.parentNode;
```

### childNodes

Властивість `childNodes` надає доступ до дочірніх вузлів.

```javascript
const parentElement = document.getElementById('parent-id');
const childNodes = parentElement.childNodes;
```

### nextSibling

Властивість `nextSibling` отримує наступний сусідній вузол.

```javascript
const element = document.getElementById('my-id');
const nextSibling = element.nextSibling;
```

### previousSibling

Властивість `previousSibling` отримує попередній сусідній вузол.

```javascript
const element = document.getElementById('my-id');
const previousSibling = element.previousSibling;
```
