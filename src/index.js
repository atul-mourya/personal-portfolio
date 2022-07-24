import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { data } from './data/projects-list';
import initGallery from "./scripts/gallery";
import initProjects from './scripts/projects';
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initProjects(data);
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initGallery(data);
