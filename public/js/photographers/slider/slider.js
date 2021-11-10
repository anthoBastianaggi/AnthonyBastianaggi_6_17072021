export default class Slider {
    renderSliderImg() {
        return `
        <figure class="slider__figure">
            <picture>
                <source media="(max-width: 640px)" srcset="">
                <source media="(max-width: 1080px)" srcset="">
                <source media="(max-width: 1438px)" srcset="">
                <source media="(min-width: 1439px)" srcset="">
                <img class="slider__image" src="" alt="" />
            </picture>
            <figcaption>
                <h2 class="slider__title"></h2>
            </figcaption>
        </figure>
        `
    }

    renderSliderVideo() {
        return `
        <figure class="slider__figure">
            <video class="slider__video" title="" preload="auto" controls>
                <source src="" type="video/mp4">
            </video>
            <figcaption> 
                <h2 class="slider__title"></h2>
            </figcaption>
        </figure> 
        `
    }
}

