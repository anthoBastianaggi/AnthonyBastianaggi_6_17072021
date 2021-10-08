export default class Banner {
    templateBanner(name, city, country, tagline, tags, url) {
        return `
        <div class="banner">
            <div class="banner__container">
                <div class="banner__row">
                    <div class="banner__column__left">
                        <header class="banner__header">
                            <h1 class="banner__title">${name}</h1>
                            <div class="banner__subtitle">
                                <span class="banner__locations">${city}, ${country}</span>
                            </div>
                            <div class="banner__description">
                                <span class="banner__desc">${tagline}</span>
                            </div>
                            <div class="banner__tags ${name === 'Mimi Keel' ? "banner__tags--mimi" : ""}">
                                <ul class="banner__tags__list">
                                ${tags.map(tag =>
                                    `<li class="banner__items">
                                        <a class="banner__link__item" href="#">#${tag}</a>
                                    </li>`
                                ).join(" ")}      
                                </ul>
                            </div>
                        </header>
                        <div class="banner__content">
                            <button class="banner__btn banner__btn--primary" id="btn-open-modal">Contactez-moi</button>
                        </div>           
                    </div>
                    <div class="banner__column__right">
                        <figure class="banner__figure">
                            <picture>
                                <source media="(max-width: 640px)" srcset="../public/images/photographers-id/mobile/${url}-mobile.jpg">
                                <source media="(max-width: 1080px)" srcset="../public/images/photographers-id/tablet/${url}-tablet.jpg">
                                <source media="(max-width: 1438px)" srcset="../public/images/photographers-id/laptop/${url}-laptop.jpg">
                                <source media="(min-width: 1439px)" srcset="../public/images/photographers-id/desktop/${url}-desktop.jpg">
                                <img class="banner__image" src="../public/images/photographers-id/desktop/${url}-desktop.jpg" alt="${name}" />     
                            </picture>   
                        </figure>   
                    </div>
                </div>
            </div>
        </div>
        `
    }
}