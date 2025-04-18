const form = document.querySelector('#purchase-form');
const message = document.querySelector('#purchase-message');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    let canBuyAlcohol = age >= 18;
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
