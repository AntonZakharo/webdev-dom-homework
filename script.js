import { addComment } from './module/addComment.js';
import { fetchAndRenderComments } from './module/fetchAndRenderComments.js';

fetchAndRenderComments().then(() => {
    const loading = document.querySelector('.page-loading');
    loading.style.display = 'none';
});

const addButton = document.querySelector('.add-form-button');
addButton.addEventListener('click', () => {
    addComment();
});
