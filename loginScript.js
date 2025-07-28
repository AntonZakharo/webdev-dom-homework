import { login } from './module/loginAndRegister.js';

const loginButton = document.querySelector('.form__button');

loginButton.addEventListener('click', async () => {
    const loginName = document.querySelectorAll('.form__input')[0].value;
    const password = document.querySelectorAll('.form__input')[1].value;

    login(loginName, password);
});
