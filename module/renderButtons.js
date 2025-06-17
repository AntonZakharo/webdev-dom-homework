import { commentsArray } from './commentsArray.js';
import { renderComments } from './renderComments.js';

export function renderButtons() {
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach((likeButton) => {
        likeButton.addEventListener('click', (event) => {
            event.stopPropagation();
            let likeStatus = commentsArray[likeButton.dataset.index].isLiked;
            if (likeStatus) {
                commentsArray[likeButton.dataset.index].likes -= 1;
            } else {
                commentsArray[likeButton.dataset.index].likes += 1;
            }
            commentsArray[likeButton.dataset.index].isLiked = !likeStatus;
            renderComments();
        });
    });
}
