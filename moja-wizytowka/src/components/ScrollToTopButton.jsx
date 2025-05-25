import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollToTopButton.css';

// Simple arrow icon (could be replaced with an SVG)
const ArrowUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5} // Thicker stroke
    stroke="currentColor"
    className="stt-icon"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5l7.5-7.5 7.5 7.5" /> 
    {/* Adjusted path for a more upward arrow appearance instead of chevron */}
  </svg>
);


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Show button after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top-button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
