import Utils from '../../../utils/utils.js';
import Constants from '../constants/constants.js';

export default class Validate {
    validateName(element, errorClassName, color, regex, messageMissing, messageValue, messageMinLength, messageMaxLength) {
        if (element.validity.valueMissing) {   
            new Utils().invalidMessage(element, messageMissing, errorClassName, color)
            return false
        } else if (!new Utils().isString(element.value) || !regex.test(element.value)) {
            new Utils().invalidMessage(element, messageValue, errorClassName, color)
            return false
        } else if (element.value.length < 2) {
            new Utils().invalidMessage(element, messageMinLength, errorClassName, color)
            return false
        } else if (element.value.length > 64) {   
            new Utils().invalidMessage(element, messageMaxLength, errorClassName, color)
            return false
        }
        return true
    }

    validateEmail(element, errorClassName, color, messageMissing, messageValue) {
        if (element.validity.valueMissing) {
            new Utils().invalidMessage(element, messageMissing, errorClassName, color)
            return false
        } else if (!new Utils().isEmail(element.value)) {  
            new Utils().invalidMessage(element, messageValue, errorClassName, color)
            return false
        }
        return true
    }

    validateMessage(element, errorClassName, color, regex, messageMissing, messageValue, messageMinLength, messageMaxLength) {
        if (element.validity.valueMissing) {   
            new Utils().invalidMessage(element, messageMissing, errorClassName, color)
            return false
        } else if (!new Utils().isString(element.value) || !regex.test(element.value)) {
            new Utils().invalidMessage(element, messageValue, errorClassName, color)
            return false
        } else if (element.value.length < 2) {
            new Utils().invalidMessage(element, messageMinLength, errorClassName, color)
            return false
        } else if (element.value.length > 64) {   
            new Utils().invalidMessage(element, messageMaxLength, errorClassName, color)
            return false
        }
        return true
    }

    validate(data) {
        var fail = !this.validateName(new Constants().constantsElements().firstname, 'first-error', 'red', new Constants().constantsElements().regex.regexName, data.firstNameValueMissing, data.firstNameValueRegex, data.firstNameValueMinLength, data.firstNameValueMaxLength)
        fail += !this.validateName(new Constants().constantsElements().lastname, 'last-error', 'red', new Constants().constantsElements().regex.regexName, data.lastNameValueMissing, data.lastNameValueRegex, data.lastNameValueMinLength, data.lastNameValueMaxLength)
        fail += !this.validateEmail(new Constants().constantsElements().email, 'email-error', 'red', data.emailValueMissing, data.emailValueRegex)
        fail += !this.validateMessage(new Constants().constantsElements().message, 'message-error', 'red', new Constants().constantsElements().regex.regexMessage, data.messageValueMissing, data.messageValueRegex, data.messageValueMinLength, data.messageValueMaxLength)
        
        if (fail == "") {
            return true;
        } else {
            return false;
        }  
    }
}