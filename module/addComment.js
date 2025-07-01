import { replaceDigits } from './replace.js';
import { renderComments } from './renderComments.js';
import { updateComments } from './commentsArray.js';

export async function addComment() {
    const name = document.querySelector('.add-form-name');
    const text = document.querySelector('.add-form-text');

    text.value = replaceDigits(text.value);
    const newComment = {
        author: { name: name.value },
        name: name.value,
        text: text.value,
    };
    await fetch(`https://wedev-api.sky.pro/api/v1/anton-zakharov/comments`, {
        method: 'POST',
        body: JSON.stringify(newComment),
    });
    const response = await fetch(`https://wedev-api.sky.pro/api/v1/anton-zakharov/comments`);
    const data = await response.json();
    updateComments(data.comments);
    renderComments();
}
