export const banner = (data) => {
    let id = window.location.search.split('id=')[1];     
    let photographers = !id ? data : data.filter(photographer => photographer.id == id);

    let { name, city, country, tagline, tags, portrait } = photographers[0];
    
    const renderInfo = () => {
        let banner = document.getElementById('header-banner');
        let divTags = document.createElement('div');
        let tagsList = document.createElement('ul');
        let title = document.getElementById('name');
        let location = document.getElementById('location');
        let taglineBanner = document.getElementById('tagline');

        divTags.className = `banner__tags ${name === 'Mimi Keel' ? "banner__tags--mimi" : ""}`;
        tagsList.className = "banner__tags__list";

        title.innerHTML = name;
        location.innerHTML = `${city}, ${country}`;
        taglineBanner.innerHTML = tagline;
       
        tags.map((tag) => {
            let items = document.createElement('li');
            let linkItems = document.createElement('a');
            
            items.className = "banner__items";
            linkItems.className = "banner__link__item";

            linkItems.setAttribute('href', "#");

            tagsList.appendChild(items);
            items.appendChild(linkItems);

            linkItems.innerHTML = `#${tag}`;
        }).join(" ")
                                                
        banner.appendChild(divTags);
        divTags.appendChild(tagsList);

        return banner;
    }

    const renderImage = () => {
        let figure = document.getElementById('figure-image-banner')
        let picture = document.createElement('picture');
        let image = document.createElement('img');
        let urlImage = portrait.split('.');

        const arrayBanner = [{
            media: "(max-width: 640px)",
            url: `../public/images/photographers-id/mobile/${urlImage[0]}-mobile.jpg`
        },{
            media: "(max-width: 1080px)",
            url: `../public/images/photographers-id/tablet/${urlImage[0]}-tablet.jpg`
        },{
            media: "(max-width: 1438px)",
            url: `../public/images/photographers-id/laptop/${urlImage[0]}-laptop.jpg`
        },{
            media: "(min-width: 1439px)",
            url: `../public/images/photographers-id/desktop/${urlImage[0]}-desktop.jpg`
        }]

        figure.appendChild(picture);

        for (let i = 0; i < arrayBanner.length; i++) {
            let source = document.createElement('source');
            source.media = arrayBanner[i].media;
            source.srcset = arrayBanner[i].url;
            picture.appendChild(source);
        }

        image.className = 'banner__image';
        
        image.setAttribute("src", `../public/images/photographers-id/desktop/${urlImage[0]}-desktop.jpg`);
        image.setAttribute('alt', name);

        picture.appendChild(image);

        return figure;
    }

    return (
        renderInfo(), 
        renderImage()
    );
}