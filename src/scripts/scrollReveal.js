export default function initScrollReveal(targetElements, defaultProps) {
  if (!targetElements.length) return;

  ScrollReveal({ 
    reset: false,
    delay: 0,
    duration: 300,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
  });

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
  });
}
