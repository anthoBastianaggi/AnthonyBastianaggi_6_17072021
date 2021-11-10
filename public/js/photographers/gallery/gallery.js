import Video from "./video/video.js";
import Image from "./image/image.js";
import Utils from "../../utils/utils.js";
import Slider from "../slider/slider.js";

export default class Gallery {
    galleryMedias(dataMedias, dataPhotographers) {
        let galleryMedias = document.getElementById('gallery-medias');
        let id = window.location.search.split('id=')[1];  
        let medias = !id ? dataMedias : dataMedias.filter(media => media.photographerId == id);
        let photographers = !id ? dataPhotographers : dataPhotographers.filter(photographer => photographer.id == id);
        let namePhotographer = photographers[0].name.toLowerCase().split(' ');

        medias.map((el) => {      
            if(el.image !== undefined) {   
                let urlImage = el.image.split('.');
                let fileNameImages = namePhotographer[0] + '-' + namePhotographer[1];
                new Utils().createElement(galleryMedias, 'articleMedias', 'gallery__card', el.id, new Image().templateImage(fileNameImages, urlImage[0], el.title, el.likes));
                
            } else if (el.video !== undefined) {
                let fileNameVideo = namePhotographer[0] + '-' + namePhotographer[1];
                new Utils().createElement(galleryMedias, 'articleMedias', 'gallery__card', el.id, new Video().templateVideo(fileNameVideo, el.video, el.title, el.likes));
            }
        })  
    }

    displaySlider() {
        let gallery = document.querySelectorAll(".gallery__card__content__medias");
        let sectionSlider = document.getElementById("section-slider");
        let previewBox = document.getElementById("slider-images");
        let prevBtn = document.querySelector(".slider__prev");
        let nextBtn = document.querySelector(".slider__next");
        let closeSlider = document.getElementById("close-slider");
        
        function openModal() {
            sectionSlider.style.display = "flex";
        }
        function closeModal() {
            sectionSlider.style.display = "none";
        }

        for (let n = 0; n < gallery.length; n++) {
            let index = n;
            
            gallery[n].onclick = () => {     
                function preview(){
                    let images = gallery[index].querySelector("img");
                    let videos = gallery[index].querySelector("video");

                    if(images !== null) {
                        let imageURL = images.src;
                        let articleSlide = document.querySelector('.slider__article');
                        articleSlide.innerHTML = new Slider().renderSliderImg();
                        let previewImg = previewBox.querySelector("img");
                        previewImg.src = imageURL;
                    } else {
                        let videoURL = videos.querySelector("source").src;
                        let articleSlide = document.querySelector('.slider__article');
                        articleSlide.innerHTML = new Slider().renderSliderVideo();
                        let previewVideo = previewBox.querySelector("video");
                        previewVideo.querySelector("source").src = videoURL;
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
            }
        }
    }
}