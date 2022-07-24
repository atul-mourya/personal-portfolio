
export default function initProjects(data) {

    const target = document.querySelector('#projects .project-wrapper');

    data.forEach((element, i) => {

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

        const button = document.createElement('a');
        button.className = 'cta-btn cta-btn--hero';
        button.href = element.link;
        button.setAttribute( 'rel', 'noreferrer' );
        button.setAttribute( 'target', '_blank' );
        button.innerText = 'See Live';
        projectWrapper.append(button);

        const preview = document.createElement('div');
        preview.className = 'col-lg-6 col-sm-12';
        row.append(preview);

        const gallery =  document.createElement('div');
        gallery.className = 'inline-gallery-container project-wrapper__image thumbnail rounded js-tilt';
        gallery.id = `inline-gallery-container-${i}`;
        gallery.setAttribute( 'data-tilt', '' );
        gallery.setAttribute( 'data-tilt-max', '4' );
        gallery.setAttribute( 'data-tilt-glare', 'true' );
        gallery.setAttribute( 'data-tilt-max-glare', '0.5' );
        preview.append(gallery);

        target.append(row);

    });

}
