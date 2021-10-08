import { fetchWrapper } from '../helpers/request-helpers.js';

export default class ApiFishEye {
    async getDataFishEye(url) {
        let response = fetchWrapper.handleResponse;
        const requestOptions = {
            method: 'GET'
        };
        return await fetch(url, requestOptions).then(response);
    }

    async getDataErrors(url) {
        let response = fetchWrapper.handleResponse;
        const requestOptions = {
            method: 'GET'
        };
        return await fetch(url, requestOptions).then(response);
    }
}