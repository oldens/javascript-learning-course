# Лекція 4: Масиви та Цикли в JavaScript

Ласкаво просимо на четверту лекцію курсу вивчення JavaScript! У цій лекції ми розглянемо масиви та цикли, включаючи вкладені масиви, доступ до даних масиву, зміну даних масиву, доступ до багатовимірних масивів та різні типи циклів.

## Зміст

1. Вкладені масиви
2. Доступ до даних масиву
3. Зміна даних масиву
4. Доступ до багатовимірних масивів
5. Основні методи
6. Ітераційні методи масивів
7. Цикли
8. Висновок

## 1. Вкладені масиви

Масиви можуть містити інші масиви як свої елементи, утворюючи багатовимірні структури. Це зручно для представлення таблиць, матриць або складних даних.

```javascript
let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(nestedArray[0][1]); // Виведе: 2
```

## 2. Доступ до даних масиву

Елементи масиву доступні за їх індексами, починаючи з нуля. Це дозволяє отримувати або використовувати значення, які зберігаються в масиві.

```javascript
let array = [10, 20, 30, 40, 50];
console.log(array[2]); // Виведе: 30
```

## 3. Зміна даних масиву

Елементи масиву можуть бути змінені шляхом присвоєння нового значення за індексом. Це дозволяє оновлювати інформацію без створення нового масиву.

```javascript
array[2] = 35;
console.log(array[2]); // Виведе: 35
```

## 4. Доступ до багатовимірних масивів

Для доступу до елементів вкладених масивів використовується кілька індексів. Перший індекс вказує на масив, а другий — на елемент у цьому вкладеному масиві.

```javascript
let multiDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(multiDimensionalArray[1][2]); // Виведе: 6
```

## 5. Основні методи

### push()

Метод `push()` додає один або кілька елементів до кінця масиву і повертає нову довжину масиву.

```javascript
let fruits = ["яблуко", "банан"];
fruits.push("апельсин");
console.log(fruits); // ["яблуко", "банан", "апельсин"]
```

### pop()

Метод `pop()` видаляє останній елемент з масиву і повертає його.

```javascript
let fruits = ["яблуко", "банан", "апельсин"];
let lastFruit = fruits.pop();
console.log(lastFruit); // "апельсин"
console.log(fruits); // ["яблуко", "банан"]
```

### shift()

Метод `shift()` видаляє перший елемент масиву, а решта елементів зсуваються на одну позицію вліво.

```javascript
let fruits = ["яблуко", "банан", "апельсин"];
let firstFruit = fruits.shift();
console.log(firstFruit); // "яблуко"
console.log(fruits); // ["банан", "апельсин"]
```

### unshift()

Метод `unshift()` додає один або кілька елементів на початок масиву, зсуваючи всі інші елементи вправо.

```javascript
let fruits = ["банан", "апельсин"];
fruits.unshift("яблуко");
console.log(fruits); // ["яблуко", "банан", "апельсин"]
```

## 6. Ітераційні методи масивів

### map()

Метод `map()` створює новий масив з результатами виклику заданої функції для кожного елемента масиву.

```javascript
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8]
```

### filter()

Метод `filter()` створює новий масив з усіма елементами, які пройшли перевірку, задану у функції.

```javascript
let numbers = [1, 2, 3, 4];
let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
```

### reduce()

Метод `reduce()` застосовує функцію до кожного елемента масиву (зліва направо), щоб звести його до одного значення.

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(total, num) {
  return total + num;
}, 0);
console.log(sum); // 10
```

## 7. Цикли

Цикли у JavaScript використовуються для виконання повторюваних дій, таких як обхід масивів або виконання коду до досягнення певної умови.

### Цикл while

Виконує код доти, доки задана умова залишається істинною. Якщо умова стає хибною, виконання циклу припиняється.

```javascript
let i = 0;
while (i < 5) {
  console.log("Цикл while: " + i);
  i++;
}
```

### Цикл do...while

Виконує код хоча б один раз, незалежно від умови, і перевіряє її лише після виконання першої ітерації.

```javascript
let j = 0;
do {
  console.log("Цикл do...while: " + j);
  j++;
} while (j < 5);
```

### Цикл for

Цикл із визначеною кількістю ітерацій, що включає ініціалізацію, перевірку умови і оновлення змінних у кожній ітерації.

```javascript
for (let k = 0; k < 5; k++) {
  console.log("Цикл for: " + k);
}
```

### Цикл for...of

Використовується для ітерації по елементах масивів або інших ітеративних об’єктів, забезпечуючи зручний доступ до значень.

```javascript
let iterableArray = [10, 20, 30, 40, 50];
for (let value of iterableArray) {
  console.log("Цикл for...of: " + value);
}
```

### Цикл for...in

Ітерація по ключах об’єкта, що дозволяє працювати з усіма його властивостями.

```javascript
let object = {a: 1, b: 2, c: 3};
for (let key in object) {
  console.log("Цикл for...in: " + key + " = " + object[key]);
}
```

## 8. Висновок

У цій лекції ми розглянули масиви та цикли, включаючи вкладені масиви, доступ до даних масиву, зміну даних масиву, доступ до багатовимірних масивів та різні типи циклів. Ці основні концепції допоможуть вам розпочати програмування на JavaScript та підготують вас до більш складних тем у майбутніх лекціях.

## CSV Questions

Питання,Варіант 1 (вірний),Варіант 2,Варіант 3,Варіант 4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.map(num => num * 2).filter(num => num > 4); console.log(result);,[6, 8],[2, 4, 6, 8],[4, 6, 8],[8, 6]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.filter(num => num % 2 === 0); console.log(result);,[2, 4],[1, 3],[1, 2, 3, 4],[4, 2]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.reduce((acc, num) => acc + num, 0); console.log(result);,10,24,0,4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.find(num => num > 2); console.log(result);,3,1,2,4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.every(num => num > 0); console.log(result);,true,false,undefined,null
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.some(num => num > 3); console.log(result);,true,false,undefined,null
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.slice(1, 3); console.log(result);,[2, 3],[1, 2],[3, 4],[1, 3]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.splice(1, 2); console.log(result);,[2, 3],[1, 2],[3, 4],[1, 3]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.concat([5, 6]); console.log(result);,[1, 2, 3, 4, 5, 6],[5, 6],[1, 2, 3, 4],[6, 5, 4, 3, 2, 1]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.join('-'); console.log(result);,1-2-3-4,1,2,3,4,1234,1 2 3 4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.reverse(); console.log(result);,[4, 3, 2, 1],[1, 2, 3, 4],[2, 3, 4, 1],[4, 1, 2, 3]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.sort((a, b) => b - a); console.log(result);,[4, 3, 2, 1],[1, 2, 3, 4],[2, 3, 4, 1],[4, 1, 2, 3]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.findIndex(num => num > 2); console.log(result);,2,1,3,4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.indexOf(3); console.log(result);,2,1,3,4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.includes(2); console.log(result);,true,false,undefined,null
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.fill(0); console.log(result);,[0, 0, 0, 0],[1, 2, 3, 4],[0, 1, 2, 3],[1, 2, 3, 0]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.copyWithin(1, 0); console.log(result);,[1, 1, 2, 3],[1, 2, 3, 4],[2, 3, 4, 1],[1, 1, 3, 4]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flat(); console.log(result);,[1, 2, 3, 4],[1, 2],[2, 3],[1, 3]
What will be logged to the console? const numbers = [1, [2, 3], 4]; const result = numbers.flat(); console.log(result);,[1, 2, 3, 4],[1, [2, 3], 4],[2, 3, 4],[1, 3, 4]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.toString(); console.log(result);,1,2,3,4,1-2-3-4,1234,1 2 3 4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.valueOf(); console.log(result);,[1, 2, 3, 4],1,2,3,4,1234,1 2 3 4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.toLocaleString(); console.log(result);,1,2,3,4,1-2-3-4,1234,1 2 3 4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.toJSON(); console.log(result);,[1, 2, 3, 4],1,2,3,4,1234,1 2 3 4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = Array.from(numbers); console.log(result);,[1, 2, 3, 4],1,2,3,4,1234,1 2 3 4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = Array.of(5, 6, 7); console.log(result);,[5, 6, 7],[1, 2, 3, 4],[6, 7, 8],[7, 8, 9]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = Array.isArray(numbers); console.log(result);,true,false,undefined,null
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.push(5); console.log(result);,5,[1, 2, 3, 4, 5],4,[1, 2, 3, 4]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.pop(); console.log(result);,4,[1, 2, 3],3,[1, 2, 3, 4]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.shift(); console.log(result);,1,[2, 3, 4],2,[1, 2, 3, 4]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.unshift(0); console.log(result);,5,[0, 1, 2, 3, 4],4,[1, 2, 3, 4]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.map(num => num * 2); console.log(result);,[2, 4, 6, 8],[1, 2, 3, 4],[2, 3, 4, 5],[4, 6, 8, 10]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.filter(num => num > 2); console.log(result);,[3, 4],[1, 2],[2, 3, 4],[1, 3, 4]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.reduce((acc, num) => acc * num, 1); console.log(result);,24,10,1,4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.find(num => num < 3); console.log(result);,1,2,3,4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.every(num => num < 5); console.log(result);,true,false,undefined,null
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.some(num => num < 2); console.log(result);,true,false,undefined,null
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.slice(2); console.log(result);,[3, 4],[1, 2],[2, 3],[1, 3]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.splice(2, 1); console.log(result);,[3],[1, 2],[2, 3],[1, 3]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.concat([5, 6, 7]); console.log(result);,[1, 2, 3, 4, 5, 6, 7],[5, 6, 7],[1, 2, 3, 4],[6, 7, 8]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.join(' '); console.log(result);,1 2 3 4,1,2,3,4,1234,1-2-3-4
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.reverse(); console.log(result);,[4, 3, 2, 1],[1, 2, 3, 4],[2, 3, 4, 1],[4, 1, 2, 3]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.sort((a, b) => a - b); console.log(result);,[1, 2, 3, 4],[4, 3, 2, 1],[2, 3, 4, 1],[4, 1, 2, 3]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.findIndex(num => num < 2); console.log(result);,0,1,2,3
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.indexOf(4); console.log(result);,3,2,1,0
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.includes(5); console.log(result);,false,true,undefined,null
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.fill(1, 2); console.log(result);,[1, 2, 1, 1],[1, 2, 3, 4],[1, 1, 1, 1],[1, 2, 3, 1]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.copyWithin(2, 0); console.log(result);,[1, 2, 1, 2],[1, 2, 3, 4],[2, 3, 4, 1],[1, 2, 1, 2]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * 2]); console.log(result);,[1, 2, 2, 4, 3, 6, 4, 8],[1, 2, 3, 4],[2, 4, 6, 8],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num + 1]); console.log(result);,[1, 2, 2, 3, 3, 4, 4, 5],[1, 2, 3, 4],[2, 3, 4, 5],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num - 1]); console.log(result);,[1, 0, 2, 1, 3, 2, 4, 3],[1, 2, 3, 4],[0, 1, 2, 3],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * num]); console.log(result);,[1, 1, 2, 4, 3, 9, 4, 16],[1, 2, 3, 4],[1, 4, 9, 16],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num / 2]); console.log(result);,[1, 0.5, 2, 1, 3, 1.5, 4, 2],[1, 2, 3, 4],[0.5, 1, 1.5, 2],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num + 2]); console.log(result);,[1, 3, 2, 4, 3, 5, 4, 6],[1, 2, 3, 4],[3, 4, 5, 6],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num - 2]); console.log(result);,[1, -1, 2, 0, 3, 1, 4, 2],[1, 2, 3, 4],[-1, 0, 1, 2],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * 3]); console.log(result);,[1, 3, 2, 6, 3, 9, 4, 12],[1, 2, 3, 4],[3, 6, 9, 12],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num / 3]); console.log(result);,[1, 0.3333333333333333, 2, 0.6666666666666666, 3, 1, 4, 1.3333333333333333],[1, 2, 3, 4],[0.3333333333333333, 0.6666666666666666, 1, 1.3333333333333333],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num + 3]); console.log(result);,[1, 4, 2, 5, 3, 6, 4, 7],[1, 2, 3, 4],[4, 5, 6, 7],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num - 3]); console.log(result);,[1, -2, 2, -1, 3, 0, 4, 1],[1, 2, 3, 4],[-2, -1, 0, 1],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * 4]); console.log(result);,[1, 4, 2, 8, 3, 12, 4, 16],[1, 2, 3, 4],[4, 8, 12, 16],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num / 4]); console.log(result);,[1, 0.25, 2, 0.5, 3, 0.75, 4, 1],[1, 2, 3, 4],[0.25, 0.5, 0.75, 1],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num + 4]); console.log(result);,[1, 5, 2, 6, 3, 7, 4, 8],[1, 2, 3, 4],[5, 6, 7, 8],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num - 4]); console.log(result);,[1, -3, 2, -2, 3, -1, 4, 0],[1, 2, 3, 4],[-3, -2, -1, 0],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * 5]); console.log(result);,[1, 5, 2, 10, 3, 15, 4, 20],[1, 2, 3, 4],[5, 10, 15, 20],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num / 5]); console.log(result);,[1, 0.2, 2, 0.4, 3, 0.6, 4, 0.8],[1, 2, 3, 4],[0.2, 0.4, 0.6, 0.8],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num + 5]); console.log(result);,[1, 6, 2, 7, 3, 8, 4, 9],[1, 2, 3, 4],[6, 7, 8, 9],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num - 5]); console.log(result);,[1, -4, 2, -3, 3, -2, 4, -1],[1, 2, 3, 4],[-4, -3, -2, -1],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * 6]); console.log(result);,[1, 6, 2, 12, 3, 18, 4, 24],[1, 2, 3, 4],[6, 12, 18, 24],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num / 6]); console.log(result);,[1, 0.16666666666666666, 2, 0.3333333333333333, 3, 0.5, 4, 0.6666666666666666],[1, 2, 3, 4],[0.16666666666666666, 0.3333333333333333, 0.5, 0.6666666666666666],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num + 6]); console.log(result);,[1, 7, 2, 8, 3, 9, 4, 10],[1, 2, 3, 4],[7, 8, 9, 10],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num - 6]); console.log(result);,[1, -5, 2, -4, 3, -3, 4, -2],[1, 2, 3, 4],[-5, -4, -3, -2],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * 7]); console.log(result);,[1, 7, 2, 14, 3, 21, 4, 28],[1, 2, 3, 4],[7, 14, 21, 28],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num / 7]); console.log(result);,[1, 0.14285714285714285, 2, 0.2857142857142857, 3, 0.42857142857142855, 4, 0.5714285714285714],[1, 2, 3, 4],[0.14285714285714285, 0.2857142857142857, 0.42857142857142855, 0.5714285714285714],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num + 7]); console.log(result);,[1, 8, 2, 9, 3, 10, 4, 11],[1, 2, 3, 4],[8, 9, 10, 11],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num - 7]); console.log(result);,[1, -6, 2, -5, 3, -4, 4, -3],[1, 2, 3, 4],[-6, -5, -4, -3],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * 8]); console.log(result);,[1, 8, 2, 16, 3, 24, 4, 32],[1, 2, 3, 4],[8, 16, 24, 32],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num / 8]); console.log(result);,[1, 0.125, 2, 0.25, 3, 0.375, 4, 0.5],[1, 2, 3, 4],[0.125, 0.25, 0.375, 0.5],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num + 8]); console.log(result);,[1, 9, 2, 10, 3, 11, 4, 12],[1, 2, 3, 4],[9, 10, 11, 12],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num - 8]); console.log(result);,[1, -7, 2, -6, 3, -5, 4, -4],[1, 2, 3, 4],[-7, -6, -5, -4],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * 9]); console.log(result);,[1, 9, 2, 18, 3, 27, 4, 36],[1, 2, 3, 4],[9, 18, 27, 36],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num / 9]); console.log(result);,[1, 0.1111111111111111, 2, 0.2222222222222222, 3, 0.3333333333333333, 4, 0.4444444444444444],[1, 2, 3, 4],[0.1111111111111111, 0.2222222222222222, 0.3333333333333333, 0.4444444444444444],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num + 9]); console.log(result);,[1, 10, 2, 11, 3, 12, 4, 13],[1, 2, 3, 4],[10, 11, 12, 13],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num - 9]); console.log(result);,[1, -8, 2, -7, 3, -6, 4, -5],[1, 2, 3, 4],[-8, -7, -6, -5],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * 10]); console.log(result);,[1, 10, 2, 20, 3, 30, 4, 40],[1, 2, 3, 4],[10, 20, 30, 40],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num / 10]); console.log(result);,[1, 0.1, 2, 0.2, 3, 0.3, 4, 0.4],[1, 2, 3, 4],[0.1, 0.2, 0.3, 0.4],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num + 10]); console.log(result);,[1, 11, 2, 12, 3, 13, 4, 14],[1, 2, 3, 4],[11, 12, 13, 14],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num - 10]); console.log(result);,[1, -9, 2, -8, 3, -7, 4, -6],[1, 2, 3, 4],[-9, -8, -7, -6],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * 11]); console.log(result);,[1, 11, 2, 22, 3, 33, 4, 44],[1, 2, 3, 4],[11, 22, 33, 44],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num / 11]); console.log(result);,[1, 0.09090909090909091, 2, 0.18181818181818182, 3, 0.2727272727272727, 4, 0.36363636363636365],[1, 2, 3, 4],[0.09090909090909091, 0.18181818181818182, 0.2727272727272727, 0.36363636363636365],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num + 11]); console.log(result);,[1, 12, 2, 13, 3, 14, 4, 15],[1, 2, 3, 4],[12, 13, 14, 15],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num - 11]); console.log(result);,[1, -10, 2, -9, 3, -8, 4, -7],[1, 2, 3, 4],[-10, -9, -8, -7],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * 12]); console.log(result);,[1, 12, 2, 24, 3, 36, 4, 48],[1, 2, 3, 4],[12, 24, 36, 48],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num / 12]); console.log(result);,[1, 0.08333333333333333, 2, 0.16666666666666666, 3, 0.25, 4, 0.3333333333333333],[1, 2, 3, 4],[0.08333333333333333, 0.16666666666666666, 0.25, 0.3333333333333333],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num + 12]); console.log(result);,[1, 13, 2, 14, 3, 15, 4, 16],[1, 2, 3, 4],[13, 14, 15, 16],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num - 12]); console.log(result);,[1, -11, 2, -10, 3, -9, 4, -8],[1, 2, 3, 4],[-11, -10, -9, -8],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * 13]); console.log(result);,[1, 13, 2, 26, 3, 39, 4, 52],[1, 2, 3, 4],[13, 26, 39, 52],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num / 13]); console.log(result);,[1, 0.07692307692307693, 2, 0.15384615384615385, 3, 0.23076923076923078, 4, 0.3076923076923077],[1, 2, 3, 4],[0.07692307692307693, 0.15384615384615385, 0.23076923076923078, 0.3076923076923077],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num + 13]); console.log(result);,[1, 14, 2, 15, 3, 16, 4, 17],[1, 2, 3, 4],[14, 15, 16, 17],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num - 13]); console.log(result);,[1, -12, 2, -11, 3, -10, 4, -9],[1, 2, 3, 4],[-12, -11, -10, -9],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num * 14]); console.log(result);,[1, 14, 2, 28, 3, 42, 4, 56],[1, 2, 3, 4],[14, 28, 42, 56],[1, 3, 5, 7]
What will be logged to the console? const numbers = [1, 2, 3, 4]; const result = numbers.flatMap(num => [num, num / 14]); console.log(result);,[1, 0.07142857142857142, 2, 0.14285714285714285, 3, 0.21428571428571427, 4, 0.2857142857142857],[1, 2, 3, 4],[0.07142857142857142, 0.14285714285714285, 0.21428571428571427, 0.2857142857142857],[1, 3, 5, 7]
