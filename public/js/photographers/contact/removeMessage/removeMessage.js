import Utils from "../../../utils/utils.js";

export default class RemoveMessages {
    removeInvalidMessageName(element, regex, errorClassName) {
        if(!element.validity.valueMissing && new Utils().isString(element.value) && regex.test(element.value) && element.value.length >= 2 && element.value.length <= 64) {
            new Utils().removeInvalidMessage(element, '', errorClassName, 'red')
        }  
    }

    removeInvalidMessageEmail(element, errorClassName) {
        if(!element.validity.valueMissing && new Utils().isEmail(element.value)) {
            new Utils().removeInvalidMessage(element, '', errorClassName, 'red');
        }  
    }

    removeInvalidMessageTextarea(element, regex, errorClassName) {
        if(!element.validity.valueMissing && new Utils().isString(element.value) && regex.test(element.value) && element.value.length >= 5 && element.value.length <= 1000) {
            new Utils().removeInvalidMessage(element, '', errorClassName, 'red')
        }  
    }
}