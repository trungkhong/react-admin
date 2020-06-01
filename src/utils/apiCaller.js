import axios from "axios"
import config from 'config';
import { authHeaderJWT, logout } from '../helpers/auth-header';

export default function CallAPI(endpoint, method = 'GET', body = null, isJWT = true, appAPI = false) {
    if (isJWT) {
        var jwtToken = authHeaderJWT()
        console.log("jwtToken:", jwtToken)
    }
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': jwtToken
    };

    let apiURL = (appAPI) ? `${config.appAPI}` : `${config.apiUrl}`

    return axios({
        method: method,
        url: apiURL + endpoint,
        data: body,
        headers: headers
    }).then(res => {
        return res
    }).catch(err => {
        handleError(err);
    })
}

function handleError(error) {
    if (!error.response) {
        // network error
        var errorStatus = 'Error: Network Error';
        //return error 500
    } else {
        var errorStatus = error.response.data;
        if (error.response.status == 401) {
            logout();
            window.location.reload(true);
        }
    }
    console.log("err", errorStatus)
        // return response.text().then(text => {
        //     const data = text && JSON.parse(text);
        //     console.log("data: ", data);
        //     if (!response.ok) {
        //         if (response.status == 401) {
        //             logout();
        //             window.location.reload(true);
        //         }
        //         const error = (data && data.message) || response.statusText;
        //         return Promise.reject(error);
        //     }
        //     return data;
        // })
}