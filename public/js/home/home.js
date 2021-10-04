import Utils from "../utils/utils.js";
import PhotographersList from "./photographers-list/photographersList.js";

export default class HomePage {
    displayDataPhotographers(data) {
        let sectionPhotographers = document.getElementById('section-photographers');

        data.map(({ id, name, city, country, portrait, price, tagline, tags }) => {    
            let urlImage = portrait.split('.');
            new Utils().createElement(sectionPhotographers, 'articlePhotographers', 'card', id, new PhotographersList().templatePhotographers(
                id, name, urlImage[0], city, country, tagline, price, tags
            ));
        });
    }
}