import { fetchWrapper } from '../helpers/request-helpers.js';

let response = fetchWrapper.handleResponse;

export default class ApiFishEye {
    async getPhotographers() {
        const requestOptions = {
            method: 'GET'
        };
        return await fetch('public/json/photographers.json', requestOptions).then(response);
    }

    async getMedias() {
        const requestOptions = {
            method: 'GET'
        };
        return await fetch('public/json/medias.json', requestOptions).then(response);
    }
}