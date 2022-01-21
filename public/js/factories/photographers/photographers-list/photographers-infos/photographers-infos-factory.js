import { photographersImageFactory } from "../photographers-image/photographers-image-factory.js";

export const photographersInfosFactory = (data) => {
    const { id, name, city, country, portrait, price, tagline, tags } = data;
    
    let container = document.createElement('div');
    container.className = 'card__container';

    const renderHeader = () => {
        let header = document.createElement('header');
        let link = document.createElement('a');
        let figure = document.createElement('figure');
        let figcaption = document.createElement('figcaption');
        let h2 = document.createElement('h2');

        let urlImage = portrait.split('.');
        let image = photographersImageFactory(urlImage[0], name);

        header.className = 'card__header';
        link.className = 'card__header__link';
        figure.className = 'card__figure';
        figcaption.className = 'card__figcaption';
        h2.className = 'card__title';

        header.appendChild(link);
        link.appendChild(figure);
        figure.appendChild(image);
        figure.appendChild(figcaption);
        figcaption.appendChild(h2);

        link.setAttribute('href', `./views/photographers.html?id=${id}`);
        link.setAttribute('title', name);

        h2.innerHTML = name;
        
        return header;
    }

    const renderContent = () => {
        let content = document.createElement('div');
        let contentSubtitle = document.createElement('div');
        let locations = document.createElement('span');
        let contentDescription = document.createElement('div');
        let contentDescriptionPrice = document.createElement('div');
        let desc = document.createElement('span');
        let pricePhotographer = document.createElement('span');

        content.className = 'card__content';
        contentSubtitle.className = 'card__subtitle';
        locations.className = 'card__locations';
        contentDescription.className = 'card__description';
        contentDescriptionPrice.className = 'card__description';
        desc.className = 'card__desc';
        pricePhotographer.className = 'card__price';

        content.appendChild(contentSubtitle);
        contentSubtitle.appendChild(locations);
        content.appendChild(contentDescription);
        content.appendChild(contentDescriptionPrice);
        contentDescription.appendChild(desc);
        contentDescriptionPrice.appendChild(pricePhotographer);
        
        locations.innerHTML = `${city}, ${country}`;
        desc.innerHTML = tagline;
        pricePhotographer.innerHTML = `${price}€/jour`;

        return content;
    }

    const renderFooter = () => {
        let footer = document.createElement('footer');
        let list = document.createElement('ul');

        footer.className = 'card__footer';
        list.className = 'card__list';

        tags.map((tag) => {
            let items = document.createElement('li');
            let linkItems = document.createElement('a');
            
            items.className = 'card__items';
            linkItems.className = 'card__link__item';

            linkItems.setAttribute('href', "#");

            list.appendChild(items);
            items.appendChild(linkItems);

            linkItems.innerHTML = `#${tag}`;
        }).join(" ")

        footer.appendChild(list);

        return footer;
    }

    container.appendChild(renderHeader()),
    container.appendChild(renderContent()),
    container.appendChild(renderFooter())
   
    return container;
}