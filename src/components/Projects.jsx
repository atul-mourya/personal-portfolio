import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { data } from '../assets/data/projects-list';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { scrollRevealConfig } from '../assets/data/scrollRevealConfig';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Default card view component
const CardImageCarousel = ({ images }) => {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper card-view"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="image-container">
            <img 
              src={img.image} 
              alt={`Project image ${index + 1}`} 
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

CardImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
};

// Fullscreen view component
const FullscreenCarousel = ({ images, onClose }) => {
  return (
    <div className="fullscreen-overlay">
      <div className="fullscreen-close" onClick={onClose}>×</div>
      <div className="fullscreen-content">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          // slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          // modules={[Navigation, Pagination]}
          className="mySwiper fullscreen"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="image-container">
                <img 
                  src={img.image} 
                  alt={`Project image ${index + 1}`} 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

FullscreenCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

const Projects = () => {
  const [fullscreenProject, setFullscreenProject] = useState(null);

  const renderProject = (project, index) => (
    <ScrollReveal key={index} animationProps={scrollRevealConfig.projectAnimation}>
      <div className="row project-item">
        <div className="col-lg-6 col-sm-12">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">{project.title}</h3>
            <div>
              <p className="mb-4">{project.description}</p>
            </div>
            {project.link && (
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn cta-btn--hero"
                href={project.link}
              >
                See Live
              </a>
            )}
            {project.demo_video && (
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn cta-btn--hero"
                href={project.demo_video}
              >
                Watch Demo
              </a>
            )}
            <a
              href="#"
              className="cta-btn cta-btn--hero"
              onClick={(e) => {
                e.preventDefault();
                setFullscreenProject(project);
              }}
            >
              Preview
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="project-wrapper__image">
            <CardImageCarousel images={project.images} />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );

  const projects = data.filter(item => !item.isExperiment);

  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          {projects.map(renderProject)}
        </div>
      </div>
      {fullscreenProject && (
        <FullscreenCarousel
          images={fullscreenProject.images}
          onClose={() => setFullscreenProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;