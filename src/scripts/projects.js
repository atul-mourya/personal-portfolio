
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

        const gallery =  document.createElement('div');
        gallery.className = 'inline-gallery-container inline-gallery-container-projects project-wrapper__image thumbnail rounded';
        gallery.id = `inline-gallery-container-${i}`;
        preview.append(gallery);

        targetProjects.append(row);

    });

    const targetExperiments = document.querySelector('#experiments .project-wrapper');

    const row = document.createElement('div');
    row.className = 'row gx-5';
    targetExperiments.append(row);

    experiments.forEach((element, i) => {

        const preview = document.createElement('div');
        preview.className = 'col-lg-3 col-sm-4 p-3';
        row.append(preview);

        const container = document.createElement('div');
        container.className = 'mx-auto gallery-container';
        preview.append(container);
        
        const namePlate = document.createElement('div');
        namePlate.className = 'name-plate';
        namePlate.innerText = element.title;
        container.append(namePlate);

        const gallery =  document.createElement('div');
        gallery.className = 'inline-gallery-container inline-gallery-container-experiments project-wrapper__image thumbnail rounded';
        gallery.id = `inline-gallery-container-experiments-${i}`;
        container.append(gallery);

        

        const play = document.createElement('div');
        play.className = 'info';
        container.append(play);

        const button = document.createElement('a');
        button.className = '';
        button.href = element.link;
        button.setAttribute( 'rel', 'noreferrer' );
        button.setAttribute( 'target', '_blank' );
        play.append(button);
        
        const infoIcon = document.createElement('i');
        infoIcon.className = 'fa fa-play fa-1x block';
        button.append(infoIcon);

    });


}
