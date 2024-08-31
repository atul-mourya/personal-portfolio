import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const useScrollReveal = (animationProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      [animationProps.origin]: animationProps.distance,
      ...animationProps.hidden
    },
    visible: {
      opacity: 1,
      [animationProps.origin]: 0,
      ...animationProps.visible,
      transition: {
        duration: animationProps.duration / 1000,
        delay: animationProps.delay / 1000,
        ease: animationProps.ease || [0.5, 0, 0, 1],
        ...animationProps.transition
      },
    },
  };

  return { ref, controls, variants };
};
