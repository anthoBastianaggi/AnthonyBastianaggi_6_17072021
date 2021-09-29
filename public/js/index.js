import ApiFishEye from "./server/services/client.js";

function appDispatch() {
    new ApiFishEye().getPhotographers().then((data) => {
       console.log(data.photographers)
    }).catch(() => {
        console.error('Failed to load ApiFishEye');
    })

    new ApiFishEye().getMedias().then((data) => {
        console.log(data.media)
     }).catch(() => {
         console.error('Failed to load ApiFishEye');
     })
};

appDispatch();