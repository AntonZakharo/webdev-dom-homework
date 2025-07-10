import { renderComments } from './renderComments.js';
import { updateComments } from './commentsArray.js';

export function fetchAndRenderComments() {
    return fetch(`https://wedev-api.sky.pro/api/v1/anton-zakharov/comments`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            updateComments(data.comments);
            renderComments();
        });
}
