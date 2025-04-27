# Практичне заняття: Шифрування повідомлень

## Мета

📌 Мета: навчити учнів основам шифрування та дешифрування повідомлень за допомогою простого алгоритму.

## Умова завдання

Уявіть, що ви хочете передати секретне повідомлення своєму другові. Для цього вам потрібно зашифрувати повідомлення за допомогою ключа, а потім дешифрувати його, щоб ваш друг міг прочитати.

## Вхідні дані

- Повідомлення, яке потрібно зашифрувати.
- Ключ для шифрування та дешифрування.

```javascript
const key = 'hello Its my key';
const msg = 'hello World';
```

## Вимоги до програми

✅ Написати функцію для шифрування повідомлення за допомогою ключа.

✅ Написати функцію для дешифрування повідомлення за допомогою ключа.

✅ Вивести зашифроване та дешифроване повідомлення у консоль.

## Приклад рішення

```javascript
function encryptMsg(msg, key) {
    const msgChars = msg.split('');
    const msgASCI = msgChars.map(item => item.charCodeAt(0));

    const keyASCI = key.split('').map(item => item.charCodeAt(0));
    const encryptedMsgASCI = msgASCI.map((value, index) => value + keyASCI[index]);
    const encryptedMsg = encryptedMsgASCI
      .map(value => String.fromCharCode(value))
      .join('');
    return encryptedMsg;
}

function decryptMsg(msg, key) {
    const msgChars = msg.split('');
    const msgASCI = msgChars.map(item => item.charCodeAt(0));

    const keyASCI = key.split('').map(item => item.charCodeAt(0));
    const decryptedMsgASCI = msgASCI.map((value, index) => value - keyASCI[index]);
    const decryptedMsg = decryptedMsgASCI
      .map(value => String.fromCharCode(value))
      .join('');

    return decryptedMsg;
}

const encryptedMsg = encryptMsg(msg, key);
const decryptedMsg = decryptMsg(encryptedMsg, key);
console.log(encryptedMsg);
console.log(decryptedMsg);
```

## Візуалізація на графіку

📍 Повідомлення "hello World" шифрується за допомогою ключа "hello Its my key".
🔐 Зашифроване повідомлення виводиться у консоль.
🔓 Дешифроване повідомлення виводиться у консоль.

## Додаткові ідеї

- Розширений варіант: використання більш складних алгоритмів шифрування, таких як AES або RSA.
- Ускладнений варіант: створення графічного інтерфейсу для шифрування та дешифрування повідомлень.

Такий підхід навчить дітей основам шифрування та дешифрування повідомлень, а також покаже, як можна застосувати ці знання у реальному житті! 🚀
