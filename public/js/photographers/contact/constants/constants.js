export default class Constants {
    constantsElements() {
        const alertSuccess = document.getElementById('alert-success');
        const sectionModal = document.getElementById('section-modal-contact');
        const modal = document.getElementById('modal-contact');
        const openModal = document.getElementById('btn-open-modal');
        const closeModal = document.getElementById('btn-close-modal');
        const titleModal = document.getElementById('contact-title');
        const firstname = document.getElementById('firstname');
        const lastname = document.getElementById('lastname');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const regex = {
            regexName: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            regexEmail: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
            regexMessage: /^[\s\S]{5,1000}$/
        };
        const btnSubmit = document.getElementById('btn-submit');

        return {
            alertSuccess, sectionModal, modal, openModal, closeModal, titleModal, firstname, lastname, email, message, regex, btnSubmit
        }
    }
}