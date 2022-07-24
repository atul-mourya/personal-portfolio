
import lightGallery from 'lightgallery';

export default function initGallery(props) {

    props.forEach((data, i) => {

        const lgContainer = document.getElementById(`inline-gallery-container-${i}`);
        const images = data.images.map(img => {
            return {
                src: img.image,
                thumb: img.thumbnail
            };
        });

        const params = {
            container: lgContainer,
            dynamic: true,
            hash: false,
            closable: false,
            showMaximizeIcon: true,
            slideDelay: 400,
            download: false,
            dynamicEl: images,
            thumbWidth: 40,
            thumbHeight: "20px",
            thumbMargin: 4,
        };
        const inlineGallery = lightGallery(lgContainer, params);
        inlineGallery.openGallery();

    });

}


