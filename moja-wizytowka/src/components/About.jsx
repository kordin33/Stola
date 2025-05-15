import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './About.css'; // Import component-specific CSS

// Import actual assets
import aboutImage from '../assets/stolarz-1.png'; // Changed to stolarz-1.png

const About = () => {
  const { t } = useTranslation();
  // TODO: Add actual content for the About section (PL/EN/DE)

  return (
    <section id="about" className="about-section"> {/* Use custom CSS class */}
      <div className="container about-container"> {/* Use custom CSS class and global container */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-title" // Use custom CSS class
        >
          {t('about_title_pl')}
        </motion.h2>

        <div className="about-content-wrapper"> {/* Use custom CSS class */}
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-image-container" // Use custom CSS class
          >
            <img src={aboutImage} alt={t('about_image_alt_pl')} className="about-image" /> {/* Use actual image and custom CSS class */}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="about-text-container" // Use custom CSS class
          >
            <p className="about-description"> {/* Use custom CSS class */}
              {t('opis_o_nas')}
            </p>
            {/* TODO: Add more paragraphs or list if needed */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
