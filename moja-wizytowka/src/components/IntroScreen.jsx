import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './IntroScreen.css'; // Import component-specific CSS
import CompanyLogo from '../assets/logo.svg'; // Import the SVG logo

const IntroScreen = ({ onAnimationComplete }) => {
  const { t } = useTranslation();
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Animation for the logo and subtitle
      await controls.start("visible");

      // Wait for a moment after logo/subtitle animation
      await new Promise(resolve => setTimeout(resolve, 1000)); // Hold duration: 1 second

      // Start exit animation for the whole screen
      await controls.start("exit");
      
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    };

    sequence();
  }, [controls, onAnimationComplete]);

  const screenVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.8, ease: "anticipate", delay: 0.5 } }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1, // Increased duration for a smoother scale-up
        delay: 0.2,
      },
    },
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.8, // Delay subtitle to appear after logo
      },
    },
  };

  return (
    <motion.div
      className="intro-screen" // CSS will handle theme-based background
      initial="hidden"
      animate={controls}
      variants={screenVariants}
    >
      <motion.img
        src={CompanyLogo}
        alt={t('hero_logo_alt', 'BauGreen Logo')} // Using existing alt key
        className="intro-logo-svg"
        variants={logoVariants}
      />
      <motion.p
        className="intro-subtitle-text"
        variants={subtitleVariants}
      >
        {t('hero_subtitle_pl')} 
      </motion.p>
    </motion.div>
  );
};

export default IntroScreen;
