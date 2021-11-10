import Banner from "./banner/banner.js";
import Gallery from "./gallery/gallery.js";
import Footer from "./footer/footer.js"
import Utils from "../utils/utils.js";
import Contact from "./contact/contact.js";

export default class PhotographerProfil {
    displayBanner(data) {
        let sectionBannerPhotographer = document.getElementById('section-banner-photographer');
        let id = window.location.search.split('id=')[1];     
        let photographers = !id ? data : data.filter(photographer => photographer.id == id);
        let urlImage = photographers[0].portrait.split('.');

        sectionBannerPhotographer.innerHTML = new Banner().templateBanner(
            photographers[0].name, 
            photographers[0].city, 
            photographers[0].country, 
            photographers[0].tagline, 
            photographers[0].tags, 
            urlImage[0]
        );
    }

    displayMedias(dataMedias, dataPhotographers) {
        new Gallery().galleryMedias(dataMedias, dataPhotographers);
        new Gallery().displaySlider();
    }

    displayContact(dataErrors, dataPhotographers) {
        new Contact().formContact(dataErrors, dataPhotographers);
    }

    displayFooter(dataPhotographers, dataMedias) {
        let footer = document.getElementById('footer-photographers');
        let id = window.location.search.split('id=')[1];     
        let photographers = !id ? dataPhotographers : dataPhotographers.filter(photographer => photographer.id == id);
        let medias = !id ? dataMedias : dataMedias.filter(media => media.photographerId == id);
        let totalLikes = new Utils().getTotalLikes(medias.map(({ likes }) => likes));
        footer.innerHTML = new Footer().templateFooter(totalLikes, photographers[0].price)
    }
}