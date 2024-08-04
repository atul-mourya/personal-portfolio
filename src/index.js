import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { data } from './data/projects-list';
import initGallery from "./scripts/gallery";
import initProjects from './scripts/projects';
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

const startDate = new Date(2013, 0); // January 2015
const currentDate = new Date();
let years = currentDate.getFullYear() - startDate.getFullYear();
let months = currentDate.getMonth() - startDate.getMonth();
if (months < 0) {
years--;
months += 12;
}
const experienceDuration = `${years} years and ${months} months`;
document.getElementById('experience-duration').textContent = experienceDuration;

initProjects(data);
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initGallery(data);


