const form = document.querySelector('#purchase-form') as HTMLFormElement;
const message = document.querySelector('#purchase-message') as HTMLDivElement;

const nameInput = document.querySelector('#name') as HTMLInputElement;
const ageInput = document.querySelector('#age') as HTMLInputElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name: string = nameInput.value.trim();
  const age: number = Number(ageInput.value);

  let canBuyAlcohol: boolean = age >= 18;

  message.textContent = canBuyAlcohol
    ? `Покупець ${name} може купувати алкоголь.`
    : `${name}, купівля алкоголю для вас неможлива.`;

  form.reset();
});

[nameInput, ageInput].forEach((input) => {
  input.addEventListener('focus', () => {
    message.textContent = '';
  });
});
