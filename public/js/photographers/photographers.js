import { banner } from "./banner/banner.js";
import { contact } from "./contact/contact.js";
import { galleryFactory } from "../factories/gallery/gallery-factory.js";
import { footer } from "./footer/footer.js";
import { apiFishEye } from "../server/services/client.js";

export const photographerProfil  = () => {
    const render = () => {
        apiFishEye('../public/json/api.json').then((data) => {
            let dataPhotographers = data.photographers;
            let dataMedias = data.media;
            
            apiFishEye('../public/json/errorMessages.json').then((dataErrors) => {
                const renderBanner = () => {
                    return banner(dataPhotographers);
                }

                const renderMedias = () => {
                    return galleryFactory(dataMedias, dataPhotographers);
                }
            
                const renderContact = () => {
                    return contact(dataErrors, dataPhotographers);
                }
            
                const renderFooter = () => {
                    return footer(dataPhotographers, dataMedias);
                }

                return (
                    renderBanner(), 
                    renderMedias(),
                    renderContact(),
                    renderFooter()
                )
            }).catch(() => {
                console.error('Failed to load ApiFishEye');
            })
        }).catch(() => {
            console.error('Failed to load ApiFishEye');
        })
    }

    return render()
}