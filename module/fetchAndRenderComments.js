import { renderComments } from './renderComments.js';
import { updateComments } from './commentsArray.js';

export function fetchAndRenderComments() {
    return fetch(`https://wedev-api.sky.pro/api/v1/anton-zakharov/comments`)
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            } else {
                if (response.status == 404) {
                    throw new Error('Сервер сломался, попробуй позже');
                }
                throw new Error('Что-то сломалось');
            }
        })
        .then((data) => {
            updateComments(data.comments);
            renderComments();
        })
        .catch((error) => {
            alert(error);
        });
}
