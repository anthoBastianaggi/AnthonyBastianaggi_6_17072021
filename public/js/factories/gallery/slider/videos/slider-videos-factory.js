export const sliderVideoFactory = ( url, title ) => {
    const createElementVideoSlider = () => {
        let figure = document.createElement('figure'); 
        let video = document.createElement('video');
        let source = document.createElement('source');
        let figcaption = document.createElement('figcaption');
        let h2 = document.createElement('h2');

        figure.className = 'slider__figure';
        video.className = 'slider__video';
        h2.className = 'slider__title';

        video.setAttribute("controls", "controls")
        video.setAttribute('title', title);
        source.setAttribute('src', url);
        source.setAttribute('type', "video/mp4");

        figure.appendChild(video);
        video.appendChild(source);
        figure.appendChild(figcaption);
        figcaption.appendChild(h2);
        h2.innerHTML = title;     

        return figure;
    }

    return createElementVideoSlider();
}