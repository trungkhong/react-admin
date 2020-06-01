import React from "react"
import { Route, Redirect } from "react-router-dom"
import { LoginPage } from '../modules/LoginPage/LoginPage';

export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    // TODO ===> change to user-token
    if (user && user.user_token) {
        return { 'USER-TOKEN': user.user_token }
    } else {
        return {};
    }
}

export function authHeaderJWT() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log("user:", user)
        // TODO ===> change to user-token
    if (user && user.code) {
        return user.code
    } else {
        return "";
    }
}

export function logout() {
    localStorage.removeItem('user');
    return <Route path="/login" component={LoginPage} />

}