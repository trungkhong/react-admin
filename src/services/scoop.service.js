import config from 'config';
import apiCaller from './../utils/apiCaller';

export const scoopServices = {
    getAllScoopsOfUser,
};

function getAllScoopsOfUser(userId, type) {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY3OSwidXNlcm5hbWUiOiJ0cnVuZ2t4IiwiZXhwIjoxNTg1NTY2OTIzfQ.z1veWK7W-xmVuPWvAdf2UPBl5CigVPh0akWFbKkdZDM'
    };
    var data = apiCaller(`scoops?page=${page}&size=10&filterType=${type}`, 'GET', null, headers, true)
    return data
}