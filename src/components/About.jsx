import { useEffect, useState } from 'react';
import ProfileImage from "../assets/profile2.jpeg";
import { ScrollReveal } from './ScrollReveal';
import ResumePDF from "../assets/Resume - Computer Graphics.pdf";
import { scrollRevealConfig } from '../assets/data/scrollRevealConfig';


const About = () => {

  const [experienceDuration, setExperienceDuration] = useState('');

  useEffect(() => {
    const startDate = new Date(2013, 0);
    const currentDate = new Date();
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    setExperienceDuration(`${years} years and ${months} months`);
  }, []);

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <div className="row about-wrapper">
          <ScrollReveal animationProps={scrollRevealConfig.imageAnimation} className="col-md-6 col-sm-12">
            <div className="about-wrapper__image">
              <img
                alt="Profile Image"
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={ProfileImage}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal animationProps={scrollRevealConfig.infoAnimation} className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text">
                Software Engineer with over <span id="experience-duration">{experienceDuration}</span> of experience specializing in 3D Computer Graphics.
                <br/>
                Highly effective in creating scalable, high performance 3D web applications. 
                <br/>
                <br/>
                Having worked on various Frontend interactive projects like, 3D Visualizers, Customizers, 
                3D Editors, Data visualization, Open world 3D game, Image Processing web app, 
                I find myself open to accept new challenges and exciting new experiences.
                <br/>
                <br/>
              </p>
              <p className="about-wrapper__info-text">
                I like playing Open World Games and I am also a fan of Cricket.
              </p>
              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href={ResumePDF}
                >
                  View Resume
                </a>
              </span>
            </div>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;