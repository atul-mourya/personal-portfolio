// components/Experiments.jsx
import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { data } from '../assets/data/projects-list';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

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

const Experiments = () => {
  const [fullscreenExperiment, setFullscreenExperiment] = useState(null);

  const experimentAnimation = {
    delay: 300,
    duration: 1000,
    distance: '30px',
    origin: 'bottom',
    opacity: 0,
    scale: 0.9,
  };

  const handleSeeLiveClick = (e, link) => {
    e.preventDefault();
    const warningMessage = "Note: This project is an experiment. Some features dont work. Happy to see you try :)";
    if (window.confirm(warningMessage)) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const renderExperiment = (experiment, index) => (
    <ScrollReveal key={index} animationProps={experimentAnimation}>
      <div className="row project-item">
        <div className="col-lg-6 col-sm-12">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">{experiment.title}</h3>
            <div>
              <p className="mb-4">{experiment.description}</p>
            </div>
            {experiment.link && (
              <a
                onClick={(e) => handleSeeLiveClick(e, experiment.link)}
                className="cta-btn cta-btn--hero"
                href={experiment.link}
              >
                See Live
              </a>
            )}
            {experiment.demo_video && (
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn cta-btn--hero"
                href={experiment.demo_video}
              >
                Watch Demo
              </a>
            )}
            <a
              href="#"
              className="cta-btn cta-btn--hero"
              onClick={(e) => {
                e.preventDefault();
                setFullscreenExperiment(experiment);
              }}
            >
              Preview
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="project-wrapper__image">
            <CardImageCarousel images={experiment.images} />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );

  const experiments = data.filter(item => item.isExperiment);

  return (
    <section id="experiments">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Experiments</h2>
          {experiments.map(renderExperiment)}
        </div>
      </div>
      {fullscreenExperiment && (
        <FullscreenCarousel
          images={fullscreenExperiment.images}
          onClose={() => setFullscreenExperiment(null)}
        />
      )}
    </section>
  );
};

export default Experiments;