export const videoFactory = ( data, urlFiles ) => {
    let { title, video } = data;
    
    let videoSrc = `../public/images/gallery/${urlFiles}/video/${video}`;

    const createElementVideo = () => {
        let video = document.createElement('video');
        let source = document.createElement('source');

        video.className = 'gallery__card__video';

        video.setAttribute('title', title);
        source.setAttribute('src', videoSrc);
        source.setAttribute('type', "video/mp4");

        video.appendChild(source);

        return video;
    }

    return createElementVideo();
}