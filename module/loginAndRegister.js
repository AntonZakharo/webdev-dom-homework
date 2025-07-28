export function login(login, password) {
    fetch('https://wedev-api.sky.pro/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            login: login,
            password: password,
        }),
    })
        .then((response) => {
            if (response.status === 400) {
                throw new Error('Неправильный логин или пароль');
            } else {
                return response.json();
            }
        })
        .then((data) => {
            let token = data.user.token;
            const storage = window.localStorage;
            storage.setItem('token', token);
            storage.setItem('login', login);
            window.location.replace(`../`);
        })
        .catch((error) => {
            alert(error);
        });
}

export function register(login, password, name) {
    fetch('https://wedev-api.sky.pro/api/user', {
        method: 'POST',
        body: JSON.stringify({
            login: login,
            password: password,
            name: name,
        }),
    })
        .then((response) => {
            if (response.status === 201) {
                let token = response.user.token;
                const storage = window.localStorage;
                storage.setItem('token', token);
                storage.setItem('login', login);
                storage.setItem('password', password);
            } else {
                if (response.status === 400) {
                    throw new Error('Пользователь с таким логином уже сущетсвует');
                } else {
                    throw new Error('Что-то пошло не так');
                }
            }
        })
        .catch(() => {});
}

export let token = '';

export function updateToken(newToken) {
    token = newToken;
}
