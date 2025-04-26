/*
Задача 1.
Створити функцію для обчислення площі прямокутника.
Фукнція приймає 2 агрументи: ширина і довжина прямокутника.
*/

function calculateRectangleArea(length: number, width: number): string {
  return `Площа прямокутника: ${length * width} см2`;
}

// console.log(calculateRectangleArea(5, 3));
// console.log(calculateRectangleArea(10, 5));

/*
Задача 2.
Створити функцію для створення об'єкта користувача з вказаним ім'ям, віком та роллю.
*/

enum Role {
  Admin = 'Адміністратор',
  User = 'Користувач',
  Guest = 'Гість',
}

type User = {
  name: string;
  age: number;
  role: Role;
};

function createUser(name: string, age: number, role: Role = Role.Guest): User {
  return {
    name,
    age,
    role,
  };
}
// console.log(createUser('Олександр', 30, Role.Admin));
// console.log(createUser('Ірина', 25, Role.User));
// console.log(createUser('Кирило', 44));

/*
Задача 3.
Створити функцію для перевірки пароля на відповідність вимогам.
Переший аргумент - пароль.
Опціонально, додати другий аргумент - мінімальна довжина пароля.
Використати у вирішенні задачі саме опціональний аргумент.
*/

function validatePassword(password: string, minLength?: number): boolean {
  if (minLength === undefined) {
    minLength = 6;
  }

  return password.length >= minLength;
}

// console.log(validatePassword('abc'));
// console.log(validatePassword('strongpass', 12));
// console.log(validatePassword('superstrongpass', 5));

/*
Задача 4.
Написати функцію, яка приймає довільну кількість чисел і знаходить їх середнє аримфетичне.
Використуовувати rest оператор.
*/

function calculateAverage(...numbers: Array<number>): number {
  if (numbers.length === 0) {
    console.log('Список чисел порожній');
    return 0;
  }

  const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
  return sum / numbers.length;
}

console.log(calculateAverage(5, 10, 15, 20));
console.log(calculateAverage(2, 4, 6));
console.log(calculateAverage());

/*
Задача для самостійної практики.

Створити програму для обчислення вартості замовлення в інтернет-магазині.

Декомпозиція.

1. Створити тип даних для представлення товару з назвою та ціною.
2. Написати функцію для обчислення загальної вартості замовлення, яка приймає масив товарів як аргумент та повертає загальну суму.

Примітка. Перевірити, що масив товарів не порожній, а ціна кожного товару більше нуля.
*/
