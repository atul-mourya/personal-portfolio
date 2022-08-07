
import lightGallery from 'lightgallery';

export default function initGallery(props) {

    const projectContainer = `inline-gallery-container`;
    const experimentContainer = `inline-gallery-container-experiments`;

    const projectsData = props.filter(project => project.isExperiment === false);
    const experimentsData = props.filter(project => project.isExperiment === true);

    createGallery(projectContainer, projectsData);
    createGallery(experimentContainer, experimentsData, true);

    function createGallery(container, data, enableCaptions = false) {
        data.forEach((json, i) => {

            const lgContainer = document.getElementById(`${container}-${i}`);
            const images = json.images.map(img => {
                return {
                    src: img.image,
                    thumb: img.thumbnail
                };
            });
            // debugger;
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
                counter: false
            };
            const inlineGallery = lightGallery(lgContainer, params);
            inlineGallery.openGallery();
        }
        );
    }

}


