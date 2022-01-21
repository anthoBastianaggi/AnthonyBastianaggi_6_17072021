export const photographersImageFactory = (url, name) => {
    const render = () => {
        const array = [{
            media: "(max-width: 640px)",
            url: `./public/images/photographers-id/mobile/${url}-mobile.jpg`
        },{
            media: "(max-width: 1080px)",
            url: `./public/images/photographers-id/tablet/${url}-tablet.jpg`
        },{
            media: "(max-width: 1438px)",
            url: `./public/images/photographers-id/laptop/${url}-laptop.jpg`
        },{
            media: "(min-width: 1439px)",
            url: `./public/images/photographers-id/desktop/${url}-desktop.jpg`
        }]

        let picture = document.createElement('picture');
        let image = document.createElement('img');

        for (let i = 0; i < array.length; i++) {
            let source = document.createElement('source');
            source.media = array[i].media;
            source.srcset = array[i].url;
            picture.appendChild(source);
        }

        image.className = 'card__image';
        
        image.setAttribute("src", `./public/images/photographers-id/desktop/${url}-desktop.jpg`);
        image.setAttribute('alt', name);

        picture.appendChild(image);

        return picture;
    }
   
    return render();
}