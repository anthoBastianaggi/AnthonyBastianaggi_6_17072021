import Constants from '../constants/constants.js';
import RemoveMessages from "../removeMessage/removeMessage.js";
import Validate from "../validate/validate.js";

export default class Modal {
    eventBlurModal(data) {
        new Constants().constantsElements().firstname.addEventListener("blur", function() {
            new Validate().validateName(new Constants().constantsElements().firstname, 'first-error', 'red', new Constants().constantsElements().regex.regexName, data.firstNameValueMissing, 
            data.firstNameValueRegex, data.firstNameValueMinLength, data.firstNameValueMaxLength)
        }, true);

        new Constants().constantsElements().lastname.addEventListener("blur", function() { 
            new Validate().validateName(new Constants().constantsElements().lastname, 'last-error', 'red', new Constants().constantsElements().regex.regexName, data.lastNameValueMissing, 
            data.lastNameValueRegex, data.lastNameValueMinLength, data.lastNameValueMaxLength)
        }, true);

        new Constants().constantsElements().email.addEventListener("blur", function() {
            new Validate().validateEmail(new Constants().constantsElements().email, 'email-error', 'red', data.emailValueMissing, data.emailValueRegex)
        }, true);

        new Constants().constantsElements().message.addEventListener("blur", function() { 
            new Validate().validateMessage(new Constants().constantsElements().message, 'message-error', 'red', new Constants().constantsElements().regex.regexMessage, data.messageValueMissing, 
            data.messageValueRegex, data.messageValueMinLength, data.messageValueMaxLength)
        }, true);
    }

    eventFocusModal() {
        new Constants().constantsElements().firstname.addEventListener("focusout", function() {
            new RemoveMessages().removeInvalidMessageName(new Constants().constantsElements().firstname, new Constants().constantsElements().regex.regexName, 'first-error')
        }, true);
       
        new Constants().constantsElements().lastname.addEventListener("focusout", function() {
            new RemoveMessages().removeInvalidMessageName(new Constants().constantsElements().lastname, new Constants().constantsElements().regex.regexName, 'last-error')
        }, true);

        new Constants().constantsElements().email.addEventListener("focusout", function () {
            new RemoveMessages().removeInvalidMessageEmail(new Constants().constantsElements().email, 'email-error');
        }, true)

        new Constants().constantsElements().message.addEventListener("focusout", function() {
            new RemoveMessages().removeInvalidMessageTextarea(new Constants().constantsElements().message, new Constants().constantsElements().regex.regexMessage, 'message-error')
        }, true);
    }

    eventOnClickModal(data) {
        new Constants().constantsElements().openModal.onclick = function() {
            new Constants().constantsElements().sectionModal.style.display = 'flex';
        }

        new Constants().constantsElements().closeModal.onclick = function() {
            new Constants().constantsElements().sectionModal.style.display = 'none';
        }

        new Constants().constantsElements().btnSubmit.onclick = function() {
            if(new Validate().validate(data)) {
                console.log({
                    firstValue : new Constants().constantsElements().firstname.value,
                    lastValue: new Constants().constantsElements().lastname.value,
                    emailValue: new Constants().constantsElements().email.value,
                    messageValue: new Constants().constantsElements().message.value
                })
                
                new Constants().constantsElements().sectionModal.style.display = "none";
                new Constants().constantsElements().alertSuccess.style.display = 'block';
                setTimeout(() => {
                    const message = new Constants().constantsElements().alertSuccess;
            
                    // Change the message opacity
                    message.style.opacity = '0';
                    // Remove the message
                    setTimeout(() => {
                        document.querySelector('.alert__success').parentElement.removeChild(message)
                    }, 2000);
                }, 5000);
            }
        };

        window.onclick = function(event) {
            if (event.target == new Constants().constantsElements().modal) {
                new Constants().constantsElements().sectionModal.style.display = "none";
            }
        }
    }
}