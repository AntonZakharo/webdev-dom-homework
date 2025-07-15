import { replaceDigits } from './replace.js';
import { fetchAndRenderComments } from './fetchAndRenderComments.js';

export async function addComment() {
    const name = document.querySelector('.add-form-name');
    const text = document.querySelector('.add-form-text');
    const form = document.querySelector('.add-form');
    const commentLoading = document.querySelector('.comment-loading');
    form.style.display = 'none';
    commentLoading.style.display = 'block';
    text.value = replaceDigits(text.value);
    const newComment = {
        author: { name: name.value },
        name: name.value,
        text: text.value,
    };
    await fetch(`https://wedev-api.sky.pro/api/v1/anton-zakharov/comments`, {
        method: 'POST',
        body: JSON.stringify(newComment),
    })
        .then(() => {
            return fetchAndRenderComments();
        })
        .then(() => {
            form.style.display = 'flex';
            commentLoading.style.display = 'none';
        });
}
