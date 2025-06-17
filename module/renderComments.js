import { renderButtons } from "./renderButtons.js";
import { renderReply } from "./renderReply.js";
import { commentsArray } from "./commentsArray.js";

export function renderComments() {
  const comments = document.querySelector(".comments");
  let commentsHtml = commentsArray.map((comment, index) => {
    if (comment.isLiked) {
      let commentHtml = `<li data-index="${index}" class="comment">
            <div class="comment-header">
              <div>${comment.name}</div>
              <div>${comment.date}</div>
            </div>
            <div class="comment-body">  
              <div class="comment-text">
                ${comment.comment}
              </div>
            </div>
            <div class="comment-footer">
              <div class="likes">
                <span class="likes-counter">${comment.likes}</span>
                <button data-index="${index}" class="like-button -active-like"></button>
              </div>
            </div>
          </li>`;
      return commentHtml;
    } else {
      let commentHtml = `<li data-index="${index}" class="comment">
            <div class="comment-header">
              <div>${comment.name}</div>
              <div>${comment.date}</div>
            </div>
            <div class="comment-body">  
              <div class="comment-text">
                ${comment.comment}
              </div>
            </div>
            <div class="comment-footer">
              <div class="likes">
                <span class="likes-counter">${comment.likes}</span>
                <button data-index="${index}" class="like-button"></button>
              </div>
            </div>
          </li>`;
      return commentHtml;
    }
  });
  comments.innerHTML = commentsHtml.join("");
  renderReply();
  renderButtons();
}
