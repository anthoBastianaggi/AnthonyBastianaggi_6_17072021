import { firstname, lastname, email, message, openModal, sectionModal, closeModal, btnSubmit, alertSuccess, regex, modal } from '../constants/constants.js';
import { removeInvalidMessageName, removeInvalidMessageEmail, removeInvalidMessageTextarea } from "../removeMessage/removeMessage.js";
import { validateName, validateEmail, validateMessage, validate } from "../validate/validate.js";

export const eventBlurModal = (data) => {
    firstname.addEventListener("blur", function() {
        validateName(firstname, 'first-error', 'red', regex.regexName, data.firstNameValueMissing, 
        data.firstNameValueRegex, data.firstNameValueMinLength, data.firstNameValueMaxLength)
    }, true);

    lastname.addEventListener("blur", function() { 
        validateName(lastname, 'last-error', 'red', regex.regexName, data.lastNameValueMissing, 
        data.lastNameValueRegex, data.lastNameValueMinLength, data.lastNameValueMaxLength)
    }, true);

    email.addEventListener("blur", function() {
        validateEmail(email, 'email-error', 'red', data.emailValueMissing, data.emailValueRegex)
    }, true);

    message.addEventListener("blur", function() { 
        validateMessage(message, 'message-error', 'red', regex.regexMessage, data.messageValueMissing, 
        data.messageValueRegex, data.messageValueMinLength, data.messageValueMaxLength)
    }, true);
}

export const eventFocusModal = () => {
    firstname.addEventListener("focusout", function() {
        removeInvalidMessageName(firstname, regex.regexName, 'first-error')
    }, true);
    
    lastname.addEventListener("focusout", function() {
        removeInvalidMessageName(lastname, regex.regexName, 'last-error')
    }, true);

    email.addEventListener("focusout", function () {
        removeInvalidMessageEmail(email, 'email-error');
    }, true)

    message.addEventListener("focusout", function() {
        removeInvalidMessageTextarea(message, regex.regexMessage, 'message-error')
    }, true);
}

export const eventOnClickModal = (data) => {
    openModal.onclick = function() {
        sectionModal.style.display = 'flex';
    }

    closeModal.onclick = function() {
        sectionModal.style.display = 'none';
    }

    btnSubmit.onclick = function() {
        if(validate(data)) {
            console.log({
                firstname : firstname.value,
                lastname: lastname.value,
                email: email.value,
                message: message.value
            })
            
            sectionModal.style.display = "none";
            alertSuccess.style.display = 'block';
            setTimeout(() => {
                const message = alertSuccess;
        
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
        if (event.target == modal) {
            sectionModal.style.display = "none";
        }
    }
}
