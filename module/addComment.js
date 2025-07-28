import { replaceDigits } from './replace.js';
import { fetchAndRenderComments } from './fetchAndRenderComments.js';

const name = document.querySelector('.add-form-name');
const text = document.querySelector('.add-form-text');
const form = document.querySelector('.add-form');
const commentLoading = document.querySelector('.comment-loading');

function postComment(newComment) {
    fetch(`https://wedev-api.sky.pro/api/v2/anton-zakharov/comments`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
        body: JSON.stringify(newComment),
    })
        .then((response) => {
            if (response.status == 201) {
                return response.json();
            } else {
                if (response.status == 400) {
                    throw new Error('Kомментарий не должен быть короче 3-х символов');
                } else if (response.status == 500) {
                    throw new Error('Сервер сломался, попробуй позже');
                } else {
                    throw new Error('Что-то сломалось');
                }
            }
        })
        .then(() => {
            name.value = '';
            text.value = '';
            return fetchAndRenderComments();
        })
        // обычный catch

        // .catch((error) => {
        //     alert(error);
        //     name.classList.add('animate');
        //     text.classList.add('animate');
        //     setTimeout(() => {
        //         name.classList.remove('animate');
        //         text.classList.remove('animate');
        //     }, 2000);
        // })

        // авто-запрос если ошибка 500
        .catch((error) => {
            if (error.message === 'Сервер сломался, попробуй позже') {
                postComment(newComment);
            } else {
                alert(error);
                name.classList.add('animate');
                text.classList.add('animate');
                setTimeout(() => {
                    name.classList.remove('animate');
                    text.classList.remove('animate');
                }, 2000);
            }
        })
        .finally(() => {
            form.style.display = 'flex';
            commentLoading.style.display = 'none';
        });
}

export async function addComment() {
    form.style.display = 'none';
    commentLoading.style.display = 'block';
    text.value = replaceDigits(text.value);

    const newComment = {
        text: text.value,
    };

    postComment(newComment);
}
