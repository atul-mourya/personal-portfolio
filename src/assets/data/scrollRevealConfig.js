const baseAnimation = {
  delay: 500,
  duration: 1000,
  distance: '30px',
  hidden: {},
  visible: {}
};

export const scrollRevealConfig = {
  titleAnimation: {
    ...baseAnimation,
    origin: 'left',
    hidden: { ...baseAnimation.hidden, scale: 0.8 },
    visible: { ...baseAnimation.visible, scale: 1 }
  },
  ctaAnimation: {
    ...baseAnimation,
    origin: 'bottom',
    hidden: { ...baseAnimation.hidden, rotate: -5 },
    visible: { ...baseAnimation.visible, rotate: 0 }
  },
  imageAnimation: {
    ...baseAnimation,
    delay: 600,
    origin: 'bottom',
    hidden: { ...baseAnimation.hidden, scale: 0.9, rotate: -5 },
    visible: { ...baseAnimation.visible, scale: 1, rotate: 0 }
  },
  infoAnimation: {
    delay: 100,
    duration: 500,
    distance: '30px',
    origin: 'right',
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { staggerChildren: 0.2 }
  },
  projectAnimation: {
    delay: 100,
    duration: 500,
    distance: '30px',
    origin: 'right',
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  experimentAnimation: {
    delay: 300,
    duration: 1000,
    distance: '30px',
    origin: 'bottom',
    opacity: 0,
    scale: 0.9,
  }
};
