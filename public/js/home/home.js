export default class HomePage {
    displayDataPhotographers(data) {
        let sectionPhotographers = document.getElementById('section-photographers');
        
        data.map(({ id, name, city, country, portrait, price, tagline, tags }) => {    
            let articlePhotographers = document.createElement('article'); 
            let urlImage = portrait.split('.');
            let templatePhotographer = `
            <div class="card__container">
                <header class="card__header">
                    <a href="photographers.html?id=${id}" class="card__header__link" title="${name}">
                        <figure class="card__figure">
                            <picture>
                                <source media="(max-width: 640px)" srcset="./public/images/photographers-id/mobile/${urlImage[0]}-mobile.jpg">
                                <source media="(max-width: 1080px)" srcset="./public/images/photographers-id/tablet/${urlImage[0]}-tablet.jpg">
                                <source media="(max-width: 1438px)" srcset="./public/images/photographers-id/laptop/${urlImage[0]}-laptop.jpg">
                                <source media="(min-width: 1439px)" srcset="./public/images/photographers-id/desktop/${urlImage[0]}-desktop.jpg">
                                <img class="card__image" src="./public/images/photographers-id/desktop/${urlImage[0]}-desktop.jpg" alt="Mimi Keel" />     
                            </picture>   
                            <figcaption>
                                <h2 class="card__title">${name}</h2>
                            </figcaption>
                        </figure>   
                    </a>
                </header>
                <div class="card__content">
                    <div class="card__subtitle">
                        <span class="card__locations">${city}, ${country}</span>
                    </div>
                    <div class="card__description">
                        <span class="card__desc">${tagline}</span>
                    </div>
                    <div class="card__description">
                        <span class="card__price">${price}€/jour</span>
                    </div>
                </div>
                <footer class="card__footer">
                    <ul class="card__list">
                        ${tags.map(tag =>
                            `<li class="card__items">
                                <a class="card__link__item" href="#">#${tag}</a>
                            </li>`
                        ).join(" ")}
                    </ul>
                </footer>
            </div>    
            `
            sectionPhotographers.appendChild(articlePhotographers);
            articlePhotographers.className = 'card';
            articlePhotographers.id = `${id}`;
            articlePhotographers.innerHTML = templatePhotographer;
        });
    }
}