import Constants from "./constants/constants.js";
import Modal from "./modal/modal.js";

export default class Contact {
    formContact(data, dataPhotographers) {
        let id = window.location.search.split('id=')[1];  
        let photographers = !id ? dataPhotographers : dataPhotographers.filter(photographer => photographer.id == id);
        
        new Modal().eventBlurModal(data);
        new Modal().eventFocusModal();
        new Modal().eventOnClickModal(data);
        new Constants().constantsElements().titleModal.innerHTML = `Contactez-moi <br> ${photographers[0].name}`
    }
}