import HomePage from "./home/home.js";
import PhotographerProfil from "./photographers/photographers.js";
import ApiFishEye from "./server/services/client.js";

function appDispatch() {
    if(window.location.pathname.includes("/photographers.html")) {
        new ApiFishEye().getDataFishEye('../public/json/api.json').then((data) => {
            let dataPhotographers = data.photographers;
            let dataMedias = data.media;
            new PhotographerProfil().displayBanner(dataPhotographers);
            new PhotographerProfil().displayMedias(dataMedias, dataPhotographers);
            new PhotographerProfil().displayFooter(dataPhotographers, dataMedias);
        }).catch(() => {
            console.error('Failed to load ApiFishEye');
        })
    } else {
        new ApiFishEye().getDataFishEye('public/json/api.json').then((data) => {
            let dataPhotographers = data.photographers;
            new HomePage().displayDataPhotographers(dataPhotographers);
        }).catch(() => {
            console.error('Failed to load ApiFishEye');
        })
    }
};

appDispatch();