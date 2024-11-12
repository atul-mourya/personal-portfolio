import { ScrollReveal } from './ScrollReveal';
import { scrollRevealConfig } from '../assets/data/scrollRevealConfig';

const Hero = () => {

  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <ScrollReveal animationProps={scrollRevealConfig.titleAnimation} className="hero-title">
          <h1>
            Hi, my name is <span className="text-color-main">Atul Mourya</span>
            <br />
            I&apos;m the 3D Web Developer.
          </h1>
        </ScrollReveal>
        <ScrollReveal animationProps={scrollRevealConfig.ctaAnimation} className="hero-cta">
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