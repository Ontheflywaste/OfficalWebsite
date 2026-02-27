import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
  distance?: number;
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '',
  distance = 50,
  duration = 0.3
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });
  const controls = useAnimation();

  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -distance, opacity: 0 };
      case 'right':
        return { x: distance, opacity: 0 };
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      default:
        return { y: 0, opacity: 0 };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start({ 
        x: 0, 
        y: 0, 
        opacity: 1,
        transition: {
          type: "spring",
          duration: duration,
          delay: delay,
          bounce: 0.1
        }
      });
    }
  }, [isInView, controls, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;