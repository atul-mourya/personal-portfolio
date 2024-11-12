import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PropTypes from 'prop-types';


export const ScrollReveal = ({ children, animationProps, className }) => {
  const { ref, controls, variants } = useScrollReveal(animationProps);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  animationProps: PropTypes.object.isRequired,
  className: PropTypes.string,
};
