import { getTotalLikes } from "../../utils/utils.js";

export const footer = (dataPhotographers, dataMedias) => {
    let id = window.location.search.split('id=')[1];     
    let photographers = !id ? dataPhotographers : dataPhotographers.filter(photographer => photographer.id == id);
    let medias = !id ? dataMedias : dataMedias.filter(media => media.photographerId == id);

    const render = () => {
        let like = document.getElementById('like');
        let price = document.getElementById('price');
        let totalLikes = getTotalLikes(medias.map(({ likes }) => likes));
       
        return (
            like.innerHTML = totalLikes,
            price.innerHTML = `${photographers[0].price}€ / jour`
        )
    };

    return render();
}