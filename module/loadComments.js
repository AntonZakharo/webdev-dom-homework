import { updateComments } from './commentsArray.js';
import { renderComments } from './renderComments.js';

export async function loadComments() {
    const response = await fetch(`https://wedev-api.sky.pro/api/v1/anton-zakharov/comments`);
    const data = await response.json();
    updateComments(data.comments);
    renderComments();
}
