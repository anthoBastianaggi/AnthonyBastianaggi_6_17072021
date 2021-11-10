export default class Image {
    templateImage(fileImages, url, title, likes) {
        return `
        <figure class="gallery__card__figure">
            <div class="gallery__card__content__medias">
                <picture>
                    <source media="(max-width: 640px)" srcset="../public/images/gallery/${fileImages}/mobile/${url}-mobile.jpg">
                    <source media="(max-width: 1080px)" srcset="../public/images/gallery/${fileImages}/tablet/${url}-tablet.jpg">
                    <source media="(max-width: 1438px)" srcset="../public/images/gallery/${fileImages}/laptop/${url}-laptop.jpg">
                    <source media="(min-width: 1439px)" srcset="../public/images/gallery/${fileImages}/desktop/${url}-desktop.jpg">
                    <img class="gallery__card__image" src="../public/images/gallery/${fileImages}/desktop/${url}-desktop.jpg" alt="${title}" />
                </picture>
            </div>
            <figcaption class="gallery__card__figcaption">
                <h2 class="gallery__card__title">${title}</h2>
                <div class="gallery__card__likes">
                    <span class="gallery__likes" aria-label="likes">${likes}</span>
                    <i class="fa-2x fa-heart far gallery__icon__heart"></i>
                </div>
            </figcaption>
        </figure>
        `
    }
}