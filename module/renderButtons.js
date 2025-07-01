import { commentsArray } from './commentsArray.js';
import { renderComments } from './renderComments.js';

export function renderButtons() {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach((likeButton) => {
        likeButton.addEventListener('click', (event) => {
            event.stopPropagation();

            const comment = commentsArray.find((item) => item.id == likeButton.dataset.index);
            if (!comment) return;

            if (comment.isLiked) {
                comment.likes -= 1;
            } else {
                comment.likes += 1;
            }
            comment.isLiked = !comment.isLiked;

            renderComments();
        });
    });
}
