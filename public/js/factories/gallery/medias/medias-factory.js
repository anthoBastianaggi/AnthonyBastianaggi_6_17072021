import { sliderImageFactory } from "../slider/images/slider-images-factory.js";
import { sliderVideoFactory } from "../slider/videos/slider-videos-factory.js";
import { imageFactory } from "./images/image-factory.js";
import { videoFactory } from "./videos/video-factory.js";

export const mediasFactory = ( dataMedias, dataPhotographers, id ) => {
    let photographers = !id ? dataPhotographers : dataPhotographers.filter(photographer => photographer.id == id);
    let namePhotographer = photographers[0].name.toLowerCase().split(' ');
    let urlFiles = namePhotographer[0] + '-' + namePhotographer[1];

    return (
        createElementArticleGallery(dataMedias, urlFiles),
        createElementArticleSlider()
    );
}

export const createElementArticleGallery = ( dataMedias, urlFiles ) => {
    let galleryMedias = document.getElementById('gallery-medias');
    let article = document.createElement('article');
    let figure = document.createElement('figure');
    let content = document.createElement('div');
    let figcaption = document.createElement('figcaption');
    let h2 = document.createElement('h2')
    let contentLike = document.createElement('div')
    let like = document.createElement('span')
    let icone = document.createElement('i')

    article.className = 'gallery__card';
    figure.className = 'gallery__card__figure';
    content.className = 'gallery__card__content__medias';
    figcaption.className = 'gallery__card__figcaption';
    h2.className = 'gallery__card__title';
    contentLike.className = 'gallery__card__likes';
    like.className = 'gallery__likes';
    icone.className = 'fa-2x fa-heart far gallery__icon__heart';

    like.setAttribute('aria-label', "likes");

    h2.innerHTML = dataMedias.title;
    like.innerHTML = dataMedias.likes;

    if(dataMedias.hasOwnProperty('image')) {
        let urlImage = dataMedias.image.split('.');
        let image = imageFactory(dataMedias, urlFiles, urlImage[0]);
        content.appendChild(image); 
    } else if(dataMedias.hasOwnProperty('video')) {
        let video = videoFactory(dataMedias, urlFiles);
        content.appendChild(video); 
    }

    article.appendChild(figure);
    figure.appendChild(content);
    figure.appendChild(figcaption);
    figcaption.appendChild(h2);
    figcaption.appendChild(contentLike);
    contentLike.appendChild(like);
    contentLike.appendChild(icone);

    return galleryMedias.appendChild(article);
}

export const createElementArticleSlider = () => {
    let gallery = document.querySelectorAll(".gallery__card__content__medias");
    let sectionSlider = document.getElementById("section-slider");
    let article = document.querySelector('.slider__article');
    let prevBtn = document.querySelector(".slider__prev");
    let nextBtn = document.querySelector(".slider__next");
    let closeSlider = document.getElementById("close-slider");

    const openModal = () => {
        sectionSlider.style.display = "flex";
    }

    const closeModal = () => {
        sectionSlider.style.display = "none";
    }

    for (let n = 0; n < gallery.length; n++) {
        let index = n;
        
        gallery[n].onclick = () => {  
            const preview = () => {
                let imagesGallery = gallery[index].querySelector("img");
                let videosGallery = gallery[index].querySelector("video");

                if(imagesGallery !== null) {
                    let pictureImagesGallery = gallery[index].querySelector("picture");
                    let sourcesImages = pictureImagesGallery.querySelectorAll("source");
                    let imageURL = imagesGallery.src;
                    let titleImage = imagesGallery.alt;
                    let image = sliderImageFactory(sourcesImages, imageURL, titleImage);

                    return article.innerHTML = image.outerHTML;
                } else {
                    let titleVideo = videosGallery.title;
                    let videoURL = videosGallery.querySelector("source").src;
                    let video = sliderVideoFactory(videoURL, titleVideo);
                    
                    return article.innerHTML = video.outerHTML;
                }      
            }

            preview();          
    
            openModal();

            prevBtn.onclick = () => {
                index--;
    
                if(index < 0) {
                    index = gallery.length - 1;
                    preview()
                } else {
                    preview()
                }
            };
            
            nextBtn.onclick = () => {
                index++;
   
                if(index > gallery.length - 1){
                    index = 0;
                    preview()
                } else {
                    preview()
                }
            };
    
            closeSlider.onclick = () => {
                closeModal();
                index = n;
            }

            window.onclick = function(event) {
                if (event.target == sectionSlider) {
                    sectionSlider.style.display = "none";
                    index = n;
                }
            }
        }
    }
}
