import { addComment } from './module/addComment.js';
import { fetchAndRenderComments } from './module/fetchAndRenderComments.js';

fetchAndRenderComments().then(() => {
    const loading = document.querySelector('.page-loading');
    loading.style.display = 'none';
});
if (window.localStorage.getItem('token')) {
    const enterButtons = document.querySelector('.enter-buttons');
    const addFormButton = document.querySelector('.add-form-button');
    const name = document.querySelector('.add-form-name');
    const text = document.querySelector('.add-form-text');
    enterButtons.style.display = 'none';
    name.disabled = false;
    text.disabled = false;
    addFormButton.disabled = false;
}

const addButton = document.querySelector('.add-form-button');
addButton.addEventListener('click', () => {
    addComment();
});

const loginButton = document.querySelectorAll('.enter-button')[0];
loginButton.addEventListener('click', () => {
    window.location.replace(`./login.html`);
});

const registerButton = document.querySelectorAll('.enter-button')[1];
registerButton.addEventListener('click', () => {
    window.location.replace(`./register.html`);
});
