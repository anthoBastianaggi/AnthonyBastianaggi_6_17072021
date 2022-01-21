export const imageFactory = ( data, urlFiles, url ) => {
    let { title } = data;

    const createElementImage = () => {    
        const array = [{
            media: "(max-width: 640px)",
            url: `../public/images/gallery/${urlFiles}/mobile/${url}-mobile.jpg`
        },{
            media: "(max-width: 1080px)",
            url: `../public/images/gallery/${urlFiles}/tablet/${url}-tablet.jpg`
        },{
            media: "(max-width: 1438px)",
            url: `../public/images/gallery/${urlFiles}/laptop/${url}-laptop.jpg`
        },{
            media: "(min-width: 1439px)",
            url: `../public/images/gallery/${urlFiles}/desktop/${url}-desktop.jpg`
        }]

        let picture = document.createElement('picture');
        let image = document.createElement('img');

        for (let i = 0; i < array.length; i++) {
            let source = document.createElement('source');
            source.media = array[i].media;
            source.srcset = array[i].url;
            picture.appendChild(source);
        }

        image.className = 'gallery__card__image';
        
        image.setAttribute("src", `../public/images/gallery/${urlFiles}/desktop/${url}-desktop.jpg`);
        image.setAttribute('alt', title);

        picture.appendChild(image);

        return picture;
    }

    return createElementImage();
}