import config from 'config';
import { authHeader } from '../helpers';

export const userService = {
    login,
    logout,
    getUser,
    getAll,
    resetPassword
};

function login(username, password, recaptchaResponse) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, recaptchaResponse })
    };

    return fetch(`${config.apiUrl}users/login`, requestOptions)
        .then(handleResponse)
        .then(user => {

            if (user) {
                localStorage.setItem('user', JSON.stringify(user))
                return user;
            }
        })
}

function resetPassword(email, recaptchaResponse) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, recaptchaResponse })
    };

    return fetch(`${config.apiUrl}users/resetPassword`, requestOptions)
        .then(handleResponse)
        .then(result => {

            if (result) {
                console.log(result);
                return result;
            }
        })
}

function getUser(id) {
    var user = localStorage.getItem('user')
    if (!user) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };

        return fetch(`${config.apiUrl}users/${id}`, requestOptions)
            .then(handleResponse)
            .then(user => {
                if (user) {
                    return user;
                }
            })
    }
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    return fetch(`${config.apiUrl}users`, requestOptions).then(handleResponse)
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}


function handleResponse(response) {
    console.log("api request ...", response)
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status == 401) {
                logout();
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    })
}