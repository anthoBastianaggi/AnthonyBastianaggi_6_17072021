import { photographersInfosFactory } from "./photographers-infos/photographers-infos-factory.js";

export const photographersListFactory = ( data ) => {
    const createElementArticle = () => {
        let section = document.getElementById('section-photographers');
        let article = document.createElement('article');

        article.className = 'card';
        article.id = `${data.id}`;
        
        article.appendChild(photographersInfosFactory(data));
        
        return section.appendChild(article);
    }

    return createElementArticle();
}
