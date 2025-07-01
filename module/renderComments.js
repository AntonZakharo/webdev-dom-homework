import { renderButtons } from './renderButtons.js';
import { renderReply } from './renderReply.js';
import { commentsArray } from './commentsArray.js';

export function renderComments() {
    const comments = document.querySelector('.comments');

    let commentsHtml = commentsArray.map((comment) => {
        const dateAndTime = comment.date.split('T');
        let date = dateAndTime[0].split('-').reverse().join('.');
        let time = dateAndTime[1].split('.')[0];
        return `<li data-index="${comment.id}" class="comment">
            <div class="comment-header">
              <div>${comment.author.name}</div>
              <div>${date} ${time}</div>
            </div>
            <div class="comment-body">  
              <div class="comment-text">
                ${comment.text}
              </div>
            </div>
            <div class="comment-footer">
              <div class="likes">
                <span class="likes-counter">${comment.likes}</span>
                <button data-index="${comment.id}" class="like-button ${comment.isLiked ? '-active-like' : ''}"></button>
              </div>
            </div>
          </li>`;
    });
    comments.innerHTML = commentsHtml.join('');
    renderReply();
    renderButtons();
}
