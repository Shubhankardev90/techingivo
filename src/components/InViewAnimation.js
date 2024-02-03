import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InViewAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default InViewAnimation;
