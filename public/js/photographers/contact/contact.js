import { titleModal } from "./constants/constants.js";
import { eventBlurModal, eventFocusModal, eventOnClickModal } from "./modal/modal.js";

export const contact = (dataErrors, dataPhotographers) => {
    const render = () => {
        let id = window.location.search.split('id=')[1];  
        let photographers = !id ? dataPhotographers : dataPhotographers.filter(photographer => photographer.id == id);
        
        return (
            eventBlurModal(dataErrors),
            eventFocusModal(),
            eventOnClickModal(dataErrors),
            titleModal.innerHTML = `Contactez-moi <br> ${photographers[0].name}`
        )
    }

    return render();
}