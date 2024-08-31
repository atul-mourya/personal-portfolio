import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const Hero = () => {
  const titleAnimation = {
    delay: 500,
    duration: 1000,
    distance: '30px',
    origin: 'left',
    hidden: { scale: 0.8 },
    visible: { scale: 1 }
  };

  const ctaAnimation = {
    delay: 1000,
    duration: 1000,
    distance: '30px',
    origin: 'bottom',
    hidden: { rotate: -5 },
    visible: { rotate: 0 }
  };

  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <ScrollReveal animationProps={titleAnimation} className="hero-title">
          <h1>
            Hi, my name is <span className="text-color-main">Atul Mourya</span>
            <br />
            I'm the 3D Web Developer.
          </h1>
        </ScrollReveal>
        <ScrollReveal animationProps={ctaAnimation} className="hero-cta">
          <p>
            <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
              Know more
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;