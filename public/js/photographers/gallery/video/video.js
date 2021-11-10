export default class Video {
    templateVideo(fileVideos, url, title, likes) {
        return `
        <figure class="gallery__card__figure">
            <div class="gallery__card__content__medias">
                <video class="gallery__card__video" title="Wild Horses in the Mountains">
                    <source src="../public/images/gallery/${fileVideos}/video/${url}" type="video/mp4">
                </video>
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