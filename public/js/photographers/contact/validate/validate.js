import { invalidMessage, isString, isEmail, } from '../../../utils/utils.js';
import { firstname, lastname, email, message, regex } from '../constants/constants.js';

export const validateName = (element, errorClassName, color, regex, messageMissing, messageValue, messageMinLength, messageMaxLength) => {
    if (element.validity.valueMissing) {   
        invalidMessage(element, messageMissing, errorClassName, color)
        return false
    } else if (!isString(element.value) || !regex.test(element.value)) {
        invalidMessage(element, messageValue, errorClassName, color)
        return false
    } else if (element.value.length < 2) {
        invalidMessage(element, messageMinLength, errorClassName, color)
        return false
    } else if (element.value.length > 64) {   
        invalidMessage(element, messageMaxLength, errorClassName, color)
        return false
    }
    return true
}

export const validateEmail = (element, errorClassName, color, messageMissing, messageValue) => {
    if (element.validity.valueMissing) {
        invalidMessage(element, messageMissing, errorClassName, color)
        return false
    } else if (!isEmail(element.value)) {  
        invalidMessage(element, messageValue, errorClassName, color)
        return false
    }
    return true
}

export const validateMessage = (element, errorClassName, color, regex, messageMissing, messageValue, messageMinLength, messageMaxLength) => {
    if (element.validity.valueMissing) {   
        invalidMessage(element, messageMissing, errorClassName, color)
        return false
    } else if (!isString(element.value) || !regex.test(element.value)) {
        invalidMessage(element, messageValue, errorClassName, color)
        return false
    } else if (element.value.length < 2) {
        invalidMessage(element, messageMinLength, errorClassName, color)
        return false
    } else if (element.value.length > 64) {   
        invalidMessage(element, messageMaxLength, errorClassName, color)
        return false
    }
    return true
}

export const validate = (data) => {
    var fail = !validateName(firstname, 'first-error', 'red', regex.regexName, data.firstNameValueMissing, data.firstNameValueRegex, data.firstNameValueMinLength, data.firstNameValueMaxLength)
    fail += !validateName(lastname, 'last-error', 'red', regex.regexName, data.lastNameValueMissing, data.lastNameValueRegex, data.lastNameValueMinLength, data.lastNameValueMaxLength)
    fail += !validateEmail(email, 'email-error', 'red', data.emailValueMissing, data.emailValueRegex)
    fail += !validateMessage(message, 'message-error', 'red', regex.regexMessage, data.messageValueMissing, data.messageValueRegex, data.messageValueMinLength, data.messageValueMaxLength)
    
    if (fail == "") {
        return true;
    } else {
        return false;
    }  
}