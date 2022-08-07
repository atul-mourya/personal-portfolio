
export default function initProjects(data) {

    const targetProjects = document.querySelector('#projects .project-wrapper');

    const projects = data.filter(project => project.isExperiment === false);
    const experiments = data.filter(project => project.isExperiment === true);

    projects.forEach((element, i) => {

        const row = document.createElement('div');
        row.className = 'row';

        const overview = document.createElement('div');
        overview.className = 'col-lg-6 col-sm-12';
        row.append(overview);

        const projectWrapper = document.createElement('div');
        projectWrapper.className = 'project-wrapper__text load-hidden';
        overview.append(projectWrapper);

        const title = document.createElement('h3');
        title.className = 'project-wrapper__text-title';
        title.innerText = element.title;
        projectWrapper.append(title);

        const description = document.createElement('p');
        description.className = 'mb-4';
        description.innerText = element.description;
        projectWrapper.append(description);

        const demoLink = element.link || element.demo_video;

        const button = document.createElement('a');
        button.className = 'cta-btn cta-btn--hero';
        button.href = demoLink;
        button.innerText = demoLink ? element.link ? 'See Live' : 'Watch Demo' : 'No Demo :(';

        demoLink && button.setAttribute( 'rel', 'noreferrer' );
        demoLink && button.setAttribute( 'target', '_blank' );
        ! demoLink && ( button.style.pointerEvents = 'none' );

        projectWrapper.append(button);

        const preview = document.createElement('div');
        preview.className = 'col-lg-6 col-sm-12';
        row.append(preview);

        // const tilt =  document.createElement('div');
        // tilt.className = 'project-wrapper__image thumbnail rounded js-tilt';
        // tilt.setAttribute( 'data-tilt', '' );
        // tilt.setAttribute( 'data-tilt-max', '4' );
        // tilt.setAttribute( 'data-tilt-glare', 'true' );
        // tilt.setAttribute( 'data-tilt-max-glare', '0.5' );
        // preview.append(tilt);

        const gallery =  document.createElement('div');
        gallery.className = 'inline-gallery-container inline-gallery-container-projects project-wrapper__image thumbnail rounded';
        gallery.id = `inline-gallery-container-${i}`;
        preview.append(gallery);

        targetProjects.append(row);

    });

    const targetExperiments = document.querySelector('#experiments .project-wrapper');

    const row = document.createElement('div');
    row.className = 'row gx-5  gy-5 ';
    targetExperiments.append(row);

    experiments.forEach((element, i) => {

        const preview = document.createElement('div');
        preview.className = 'col-lg-3 col-sm-4';
        row.append(preview);

        const container = document.createElement('div');
        container.className = 'mx-auto gallery-container';
        preview.append(container);
        

        const gallery =  document.createElement('div');
        gallery.className = 'inline-gallery-container inline-gallery-container-experiments project-wrapper__image thumbnail rounded js-tilt';
        gallery.id = `inline-gallery-container-experiments-${i}`;
        gallery.setAttribute( 'data-tilt', '' );
        gallery.setAttribute( 'data-tilt-max', '4' );
        gallery.setAttribute( 'data-tilt-glare', 'true' );
        gallery.setAttribute( 'data-tilt-max-glare', '0.5' );
        container.append(gallery);

        const namePlate = document.createElement('div');
        namePlate.className = 'name-plate';
        namePlate.innerText = element.title;
        container.append(namePlate);


    });


}
