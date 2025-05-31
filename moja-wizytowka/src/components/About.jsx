import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import './About.css';
import aboutImage from '../assets/stolarz-1.jpeg';

// Ikony SVG dla funkcji
const QualityIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
  </svg>
);

const ExperienceIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C10.3 2 9 3.3 9 5C9 5.9 9.4 6.7 10 7.2V8C7.8 8 6 9.8 6 12V17H4V19H20V17H18V12C18 9.8 16.2 8 14 8V7.2C14.6 6.7 15 5.9 15 5C15 3.3 13.7 2 12 2M7 12C7 10.3 8.3 9 10 9V11H9V13H10V15H9V17H15V15H14V13H15V11H14V9C15.7 9 17 10.3 17 12V17H7V12Z"/>
  </svg>
);

const ReliabilityIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 1L9 9L1 9L7 14L5 22L12 17L19 22L17 14L23 9L15 9L12 1Z"/>
  </svg>
);

const ServiceIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 13C13.1 13 14 12.1 14 11C14 9.9 13.1 9 12 9C10.9 9 10 9.9 10 11C10 12.1 10.9 13 12 13M7 11C8.1 11 9 10.1 9 9C9 7.9 8.1 7 7 7C5.9 7 5 7.9 5 9C5 10.1 5.9 11 7 11M17 11C18.1 11 19 10.1 19 9C19 7.9 18.1 7 17 7C15.9 7 15 7.9 15 9C15 10.1 15.9 11 17 11M7 13C4.33 13 2 14.34 2 16V18H22V16C22 14.34 19.67 13 17 13H7Z"/>
  </svg>
);

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Lewa strona - treść tekstowa */}
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="about-title">
            <Trans 
              i18nKey="about_page_title"
              components={[<span style={{ color: '#3b82f6' }} />]}
            >
              Tworzymy, Montujemy,<br/> i <span style={{ color: '#3b82f6' }}>Realizujemy</span>.
            </Trans>
          </h2>
          
          <p className="about-subtitle">
            {t('about_intro', 'Od 2023 roku BAU GREEN działa na rynku stolarki otworowej, łącząc niemieckie standardy jakości z polskim rzemiosłem. Specjalizujemy się w montażu okien i drzwi na najwyższym poziomie.')}
          </p>
          
          <a href="#contact" className="about-cta">
            Skontaktuj się z nami
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"/>
            </svg>
          </a>
        </motion.div>

        {/* Prawa strona - obraz z informacjami */}
        <motion.div 
          className="about-image-section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={aboutImage}
            alt="Karol Sobocik - właściciel BAU GREEN"
            className="about-image"
          />
          
          <div className="about-info-box">
            <p className="about-quote">
              <Trans i18nKey="about_quote">
                Doświadczenie zdobywane w Niemczech nauczyło mnie, czym jest prawdziwa jakość w montażu stolarki otworowej. Te standardy wprowadzam teraz w Polsce.
              </Trans>
            </p>
            <div className="about-author">
              <span className="author-name">Karol Sobocik</span>
              <span className="author-title">Założyciel & CEO BAU GREEN</span>
            </div>
          </div>
        </motion.div>

        {/* Sekcja z cechami/zaletami */}
        <motion.div 
          className="about-features"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="feature-item">
            <div className="feature-icon">
              <QualityIcon />
            </div>
            <div className="feature-content">
              <h3>{t('about_features_quality_title', 'Najwyższa Jakość')}</h3>
              <p>{t('about_features_quality_description', 'Montaż zgodny z niemieckimi standardami, z dbałością o każdy detal i precyzją wykonania.')}</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <ExperienceIcon />
            </div>
            <div className="feature-content">
              <h3>{t('about_features_experience_title', 'Doświadczenie')}</h3>
              <p>{t('about_features_experience_description', 'Lata pracy na wymagającym rynku niemieckim przekładają się na usługi najwyższej jakości.')}</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <ReliabilityIcon />
            </div>
            <div className="feature-content">
              <h3>{t('about_features_reliability_title', 'Rzetelność')}</h3>
              <p>{t('about_features_reliability_description', 'Terminowość realizacji zleceń i precyzja wykonania to podstawa naszej współpracy.')}</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <ServiceIcon />
            </div>
            <div className="feature-content">
              <h3>{t('about_features_service_title', 'Kompleksowa Obsługa')}</h3>
              <p>{t('about_features_service_description', 'Od doradztwa, przez pomiar, aż po montaż i serwis - wszystko w jednym miejscu.')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;