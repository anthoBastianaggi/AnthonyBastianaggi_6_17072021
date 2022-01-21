import { handleResponse } from '../helpers/request-helpers.js';

export const apiFishEye = (url) => {
    const getData = async () => {
        let response = handleResponse;
       
        return await fetch(url, { method: 'GET' }).then(response);
    }

    return getData();
}