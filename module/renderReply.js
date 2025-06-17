import { commentsArray } from './commentsArray.js';

export function renderReply() {
    const text = document.querySelector('.add-form-text');
    const allComments = document.querySelectorAll('.comment');
    allComments.forEach((com) => {
        com.addEventListener('click', () => {
            const commentObj = commentsArray[com.dataset.index];
            text.value = `Ответ:\n${commentObj.name}:\n${commentObj.comment}\n >  `;
        });
    });
}
