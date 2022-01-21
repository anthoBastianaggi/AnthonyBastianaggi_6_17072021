export const sliderImageFactory = ( sources, urlImage, title ) => {
    const createElementImageSlider = () => {    
        let figure = document.createElement('figure'); 
        let picture = document.createElement('picture');
        let image = document.createElement('img');
        let figcaption = document.createElement('figcaption');
        let h2 = document.createElement('h2');

        for (let i = 0; i < sources.length; i++) {
            let source = document.createElement('source');
            source.media = sources[i].media;
            source.srcset = sources[i].srcset;
            picture.appendChild(source);
        }

        figure.className = 'slider__figure';
        image.className = 'slider__image';
        h2.className = 'slider__title';
        
        image.setAttribute("src", urlImage);
        image.setAttribute('alt', title);

        figure.appendChild(picture);
        figure.appendChild(figcaption);
        picture.appendChild(image);
        figcaption.appendChild(h2);
        h2.innerHTML = title;

        return figure;
    }

    return createElementImageSlider();
}