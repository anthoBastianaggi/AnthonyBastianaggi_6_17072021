export const alertSuccess = document.getElementById('alert-success');
export const sectionModal = document.getElementById('section-modal-contact');
export const modal = document.getElementById('modal-contact');
export const openModal = document.getElementById('btn-open-modal');
export const closeModal = document.getElementById('btn-close-modal');
export const titleModal = document.getElementById('contact-title');
export const firstname = document.getElementById('firstname');
export const lastname = document.getElementById('lastname');
export const email = document.getElementById('email');
export const message = document.getElementById('message');
export const regex = {
    regexName: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    regexEmail: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    regexMessage: /^[\s\S]{5,1000}$/
};
export const btnSubmit = document.getElementById('btn-submit');
