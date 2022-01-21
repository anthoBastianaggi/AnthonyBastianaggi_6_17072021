import { isString, isEmail, removeInvalidMessage, } from "../../../utils/utils.js";

export const removeInvalidMessageName = (element, regex, errorClassName) => {
    if(!element.validity.valueMissing && isString(element.value) && regex.test(element.value) && element.value.length >= 2 && element.value.length <= 64) {
        removeInvalidMessage(element, '', errorClassName, 'red')
    }  
}

export const removeInvalidMessageEmail = (element, errorClassName) => {
    if(!element.validity.valueMissing && isEmail(element.value)) {
        removeInvalidMessage(element, '', errorClassName, 'red');
    }  
}

export const removeInvalidMessageTextarea =(element, regex, errorClassName) => {
    if(!element.validity.valueMissing && isString(element.value) && regex.test(element.value) && element.value.length >= 5 && element.value.length <= 1000) {
        removeInvalidMessage(element, '', errorClassName, 'red')
    }  
}