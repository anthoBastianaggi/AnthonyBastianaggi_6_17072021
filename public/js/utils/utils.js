import { regex } from '../photographers/contact/constants/constants.js';

export const getTotalLikes = (data) =>{
    let total = 0;
    for(let i in data) { 
        total += data[i];
    }
    return total;
}

export const isString = (val) => {
    return typeof val === 'string' || ((!!val && typeof val === 'object') && Object.prototype.toString.call(val) === '[object String]');
}

export const isEmail = (email) => {
    if(isString(email)) return regex.regexEmail.test(email.toLowerCase());
}

export const producePrompt = (message, id, color) => {
    document.getElementById(id).innerHTML = message;
    document.getElementById(id).style.color = color;
    document.getElementById(id).style.display = "block";
}

export const invalidMessage = (element, message, errorClassName, color) => {
    element.classList.add('invalid');
    producePrompt(message, errorClassName , color)
}

export const removeInvalidMessage = (element, message, errorClassName, color) => {
    element.classList.remove('invalid');
    producePrompt(message, errorClassName, color)
}