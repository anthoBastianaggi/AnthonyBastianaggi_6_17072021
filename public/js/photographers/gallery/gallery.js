import Video from "./video/video.js";
import Image from "./image/image.js";
import Utils from "../../utils/utils.js";

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
}