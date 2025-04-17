// const firstName: string = 'Petro';
// const lastName: string = 'Ivanov';

// const pi: number = 3.14;

// console.log(`${firstName} ${lastName}`);

// +Вивести 10 консоль.логів у консоль
// Вивести тільки парні

// for (let i = 0; i < 10; i++) {
//   console.log(`Число з циклу for - ${i}`);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`Парне число - ${i}`);
//   }
// }

// console.dir(document);

// Задача: створити невеличкий додаток, який може обчислити факторіал числа
const form = document.querySelector('#factorial-form') as HTMLFormElement;
const stepsList = document.querySelector(
  '#factorial-steps'
) as HTMLOListElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const numberInput = document.querySelector('#number') as HTMLInputElement;
  const number: number = Number(numberInput.value);

  let factorial: number = 1;
  stepsList.innerHTML = '';

  for (let i = 1; i <= number; i++) {
    factorial *= i;

    const listItem: HTMLLIElement = document.createElement('li');
    listItem.textContent = `${factorial}`;
    stepsList.appendChild(listItem);
  }
});
