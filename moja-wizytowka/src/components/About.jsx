import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './About.css';

import aboutImage from '../assets/stolarz-1.jpeg';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-title"
        >
          {t('about_title_pl')}
        </motion.h2>

        <div className="about-content-wrapper">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-image-container"
          >
            <img
              src={aboutImage}
              alt={t('about_image_alt_pl')}
              className="about-image"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="about-text-container"
          >
            <p className="about-description">
              {t('opis_o_nas')}
            </p>
            {/* + dodatkowe akapity lub listy wedle potrzeb */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
