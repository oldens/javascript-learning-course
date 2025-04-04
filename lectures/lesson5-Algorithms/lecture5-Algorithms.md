# Лекція 5: Алгоритми

[PDF Презентація Лекції 5](./lecture5-Algorithms.pdf)

## Вступ

У цій лекції ми розглянемо основи алгоритмів, включаючи їх визначення, класифікацію та приклади. Алгоритми є основою програмування та допомагають вирішувати різноманітні задачі ефективно.

## Що таке алгоритм?

Алгоритм - це послідовність кроків або інструкцій, які виконуються для досягнення певної мети або вирішення задачі. Алгоритми можуть бути представлені у вигляді тексту, псевдокоду, блок-схем або програмного коду.

## Класифікація алгоритмів

Алгоритми можна класифікувати за різними критеріями, такими як:

1. За типом задачі:
   - Сортування
   - Пошук
   - Оптимізація
   - Графові алгоритми

2. За методом вирішення:
   - Жадібні алгоритми
   - Динамічне програмування
   - Розділяй і володарюй
   - Повернення назад

## Приклади алгоритмів

### Алгоритм сортування бульбашкою

Алгоритм сортування бульбашкою - це простий алгоритм сортування, який порівнює сусідні елементи масиву і обмінює їх місцями, якщо вони знаходяться в неправильному порядку. Цей процес повторюється до тих пір, поки масив не буде відсортований.

```javascript
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Відсортований масив: " + bubbleSort(array));
```

### Алгоритм пошуку бінарного дерева

Алгоритм пошуку бінарного дерева - це ефективний алгоритм пошуку, який працює на відсортованих масивах. Він розділяє масив на дві частини і порівнює середній елемент з шуканим значенням. Якщо середній елемент дорівнює шуканому значенню, алгоритм завершується. Якщо шукане значення менше середнього елемента, алгоритм повторюється для лівої половини масиву, інакше - для правої половини.

```javascript
function binarySearch(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

let sortedArray = [2, 3, 4, 10, 40];
let target = 10;
let result = binarySearch(sortedArray, target);
if (result === -1) {
  console.log("Елемент не знайдено");
} else {
  console.log("Елемент знайдено на індексі: " + result);
}
```

## Використання файлу `geojson.json` з geojson.io

### Як використовувати файл `geojson.json` з geojson.io

Файл `geojson.json` містить дані про кафе у Львові у форматі GeoJSON. Ви можете використовувати цей файл для візуалізації кафе на карті за допомогою сервісу geojson.io.

### Інструкції з візуалізації кафе у Львові за допомогою geojson.io

1. Відкрийте веб-сайт [geojson.io](http://geojson.io).
2. Натисніть на кнопку "Open" у верхньому меню.
3. Виберіть "File" і завантажте файл `geojson.json`.
4. Кафе у Львові будуть відображені на карті.

### Посилання на файл `geojson.json`

[Завантажити файл geojson.json](geojson/geojson.json)

## Summary of all materials in the lecture folder

- `lecture5-Algorithms.md`: Основний текст лекції з алгоритмів.
- `lecture5-Algorithms.pdf`: Презентація лекції у форматі PDF.
- `exercise5-Find-Nearest-Cafe.md`: Практичне заняття для знаходження найближчого кафе.
- `solution5-Find-Nearest-Cafe.js`: Рішення для практичного заняття з знаходження найближчого кафе.
- `geojson/geojson.json`: Дані про кафе у Львові у форматі GeoJSON.
