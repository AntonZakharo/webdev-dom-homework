import { register } from './module/loginAndRegister.js';

const loginButton = document.querySelector('.form__button');

loginButton.addEventListener('click', async () => {
    const name = document.querySelectorAll('.form__input')[0].value;
    const loginName = document.querySelectorAll('.form__input')[1].value;
    const password = document.querySelectorAll('.form__input')[2].value;

    register(name, loginName, password);
});
