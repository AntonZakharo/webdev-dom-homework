import { commentsArray } from './commentsArray.js';
import { renderComments } from './renderComments.js';

function delay(interval = 300) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
}
export function renderButtons() {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach((likeButton) => {
        likeButton.addEventListener('click', async (event) => {
            event.stopPropagation();

            const comment = commentsArray.find((item) => item.id == likeButton.dataset.index);
            if (!comment) return;

            likeButton.classList.add('animate');
            likeButton.disabled = true;

            await delay(500).then(() => {
                comment.likes = comment.isLiked ? comment.likes - 1 : comment.likes + 1;
                comment.isLiked = !comment.isLiked;

                likeButton.classList.remove('animate');
                likeButton.disabled = false;

                renderComments();
            });
        });
    });
}
