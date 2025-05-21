import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import './Hero.css'; // Import component-specific CSS

// Import actual assets
import heroBackground from '../assets/Stolarz_pracuje.jpg'; // Use the provided background image
// import siteLogo from '../assets/Logo.png'; // Old PNG logo
import siteLogoUrl from '../assets/Logo1.png'; // Import SVG as a URL

const Hero = () => {
  const { t } = useTranslation();

  // Using the provided background image
  const backgroundImage = heroBackground;

  // Using the SVG logo as an image
  const Logo = () => <img src={siteLogoUrl} alt="StolarzNowoczesny Logo" className="hero-logo-image" />;

  return (
    <motion.section // Animate the section itself
      id="hero"
      className="hero-section" // Use custom CSS class
      style={{ backgroundImage: `url("${backgroundImage}")` }}
      initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
      animate={{ opacity: 1, y: 0 }} // Animate to visible and correct position
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
    >
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Logo - Moved outside hero-content */}
      <motion.div
        layoutId="logo" // Optional layoutId for shared layout animation
        initial={{ opacity: 0, y: -50 }} // Keep logo animation
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-logo-container" // This container will be positioned absolutely
      >
        <Logo /> {/* Use the actual Logo component */}
      </motion.div>


      <div className="hero-content">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }} // Keep title animation
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title" // Use custom CSS class
        >
          {t('hero_title')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }} // Keep subtitle animation
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-subtitle" // Use custom CSS class
        >
          {t('hero_subtitle')}
        </motion.p>

        {/* CTA Button */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }} // Keep button animation
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ScrollLink
            to="testimonials" // Changed link to testimonials section
            smooth={true}
            duration={500}
            className="btn btn-primary" // Use custom CSS classes
          >
            {t('hero_cta', "Zobacz Opinie")} {/* Updated fallback text if needed */}
          </ScrollLink>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
