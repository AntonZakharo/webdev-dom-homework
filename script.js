import { addComment } from './module/addComment.js';
import { loadComments } from './module/loadComments.js';

loadComments();

const addButton = document.querySelector('.add-form-button');
addButton.addEventListener('click', () => {
    addComment();
});
