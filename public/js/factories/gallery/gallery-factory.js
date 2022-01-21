import { mediasFactory } from "./medias/medias-factory.js";

export const galleryFactory = (dataMedias, dataPhotographers) => {
    let id = window.location.search.split('id=')[1];  
    let medias = !id ? dataMedias : dataMedias.filter(media => media.photographerId == id);

    const render = () => {
        return medias.map((media) => { 
            mediasFactory(media, dataPhotographers, id);
        });
    }

    return render();
}