# Вправа 6: Створення та маніпуляція об’єктами в JavaScript

Ласкаво просимо до шостої вправи курсу вивчення JavaScript! У цій вправі ви будете практикувати створення та маніпуляцію об’єктами, включаючи створення об’єктів, доступ до властивостей, оновлення значень та роботу з вкладеними об’єктами.

## Інструкції

1. Створіть об’єкт `person` з властивостями `name`, `age` та `city`. Виведіть значення властивості `name` у консоль.
2. Оновіть значення властивості `age` об’єкта `person` на 35. Виведіть нове значення у консоль.
3. Додайте нову властивість `isEmployed` до об’єкта `person` зі значенням `true`. Виведіть значення нової властивості у консоль.
4. Видаліть властивість `city` з об’єкта `person`. Спробуйте вивести значення видаленої властивості у консоль.
5. Створіть вкладений об’єкт `student` з властивостями `name`, `grades` (масив чисел) та `contact` (об’єкт з властивостями `email` та `phone`). Виведіть значення властивості `email` у консоль.

## Приклад

Ось приклад того, як виконати вправу:

```javascript
// Крок 1
const person = {
  name: "Олександр",
  age: 30,
  city: "Львів"
};

console.log(person.name); // Виведе: Олександр

// Крок 2
person.age = 35;
console.log(person.age); // Виведе: 35

// Крок 3
person.isEmployed = true;
console.log(person.isEmployed); // Виведе: true

// Крок 4
delete person.city;
console.log(person.city); // Виведе: undefined

// Крок 5
const student = {
  name: "Анна",
  grades: [90, 85, 88],
  contact: {
    email: "anna@example.com",
    phone: "+380123456789"
  }
};

console.log(student.contact.email); // Виведе: anna@example.com
```

## Висновок

У цій вправі ви практикували створення та маніпуляцію об’єктами, включаючи створення об’єктів, доступ до властивостей, оновлення значень та роботу з вкладеними об’єктами. Ви дізналися, як використовувати ці концепції для роботи з об’єктами у JavaScript.
