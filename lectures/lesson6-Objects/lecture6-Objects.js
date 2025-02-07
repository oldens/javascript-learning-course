console.log("Лекція 6: Об’єкти в JavaScript");

// Що таке об’єкти?
// Об’єкти — це структура даних, яка представляє значення у вигляді пар “ключ-значення”.
// Вони використовуються для моделювання реальних об’єктів, зберігання даних та їхньої логіки.

const person = {
  name: "Олександр",
  age: 30,
  isEmployed: true
};

// Створення об’єктів

// Літерал об’єкта
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2021
};

// Використання конструктора Object
const book = new Object();
book.title = "1984";
book.author = "George Orwell";

// Доступ до властивостей об’єкта

// Крапкова нотація (Dot Notation)
console.log(car.brand); // "Toyota"

// Квадратні дужки (Bracket Notation)
console.log(car["model"]); // "Corolla"

const key = "year";
console.log(car[key]); // 2021

// Використання змінних як ключів
const property = "age";
console.log(person[property]); // 30

// Оновлення властивостей об’єкта
person.age = 31;
console.log(person.age); // 31

// Додавання нових властивостей до об’єкта
person.city = "Львів";
console.log(person.city); // "Львів"

// Видалення властивостей з об’єкта
delete person.isEmployed;
console.log(person.isEmployed); // undefined

// Об’єкти для пошуку (Objects for Lookups)
const colors = {
  red: "червоний",
  green: "зелений",
  blue: "синій"
};

console.log(colors.red); // "червоний"

// Перевірка властивостей об’єкта

// Метод hasOwnProperty()
console.log(person.hasOwnProperty("age")); // true
console.log(person.hasOwnProperty("salary")); // false

// Оператор in
console.log("name" in person); // true
console.log("salary" in person); // false

// Маніпуляція складними об’єктами
const student = {
  name: "Анна",
  grades: [90, 85, 88],
  contact: {
    email: "anna@example.com",
    phone: "+380123456789"
  }
};

// Доступ до масиву
console.log(student.grades[1]); // 85

// Доступ до вкладених об'єктів
console.log(student.contact.email); // "anna@example.com"

// Вкладені об’єкти
const company = {
  name: "Tech Corp",
  departments: {
    it: {
      employees: 50,
      manager: "Олег"
    },
    hr: {
      employees: 10,
      manager: "Наталя"
    }
  }
};

console.log(company.departments.it.manager); // "Олег"

// Практичне використання об’єктів

// Словник значень
function getDayName(dayNumber) {
  const days = {
    1: "Понеділок",
    2: "Вівторок",
    3: "Середа",
    4: "Четвер",
    5: "П'ятниця",
    6: "Субота",
    7: "Неділя"
  };

  return days[dayNumber] ?? "Невідомий день";
}

console.log(getDayName(3)); // "Середа"

// Конфігурації
const config = {
  theme: "dark",
  language: "uk",
  notifications: true
};

console.log(config.theme); // "dark"
