import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import './Offer.css';

// Import logos
import SalamanderLogo from "../assets/Salalogo.png";
import KommerlingLogo from '../assets/kommerling-seeklogo.png';
import RehauLogo from '../assets/rehau-seeklogo.png';
import AluplastLogo from '../assets/Aluplast.png';
import GealanLogo from '../assets/gealan-seeklogo.png';
import InothermLogo from '../assets/Inotherm.png';
import ReynaersLogo from '../assets/reynaers-aluminium-seeklogo.png';
import HeroImage from '../assets/Hero2.jpg';

const Offer = () => {
  const { t } = useTranslation();

  const offerData = {
    mainTitle: t('offer.mainTitle'),
    intro: t('offer.intro'),
    categories: [
      {
        title: t('offer.windowsAndDoors.title'),
        description: t('offer.windowsAndDoors.description'),
        details: [
          { 
            name: t('offer.windowsAndDoors.systems.pvc'), 
            text: t('offer.windowsAndDoors.systems.pvcDetails')
          },
          { 
            name: t('offer.windowsAndDoors.systems.wood'), 
            text: t('offer.windowsAndDoors.systems.woodDetails')
          },
          { 
            name: t('offer.windowsAndDoors.systems.steel'), 
            text: t('offer.windowsAndDoors.systems.steelDetails')
          },
        ],
        manufacturersIntro: t('offer.windowsAndDoors.manufacturers'),
        logos: [SalamanderLogo, KommerlingLogo, RehauLogo, AluplastLogo, GealanLogo],
      },
      {
        title: t('offer.aluminiumSystems.title'),
        description: t('offer.aluminiumSystems.description'),
        manufacturersIntro: t('offer.aluminiumSystems.manufacturers'),
        logos: [InothermLogo, ReynaersLogo],
        companyNames: ['Aluprof®', 'Beck+Heun®', 'Gutmann®']
      },
    ],
    outro: t('offer.outro'),
  };

  // Animacje dla kategorii
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    })
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="offer" className="offer-section">
      <div className="offer-container">
        {/* Sekcja nagłówka z obrazem - pełna szerokość */}
        <motion.div
          className="offer-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="offer-header-content">
            <div className="offer-text-section">
              <h2 className="offer-main-title">
                <Trans i18nKey="offer_header_title" components={[<span className="highlight" />]} />
              </h2>
              
              <p className="offer-intro">
                <Trans 
                  i18nKey="offer_header_intro_text" 
                  components={[
                    <strong />, 
                    <span className="highlight" />, 
                    <strong />, 
                    <span className="highlight" />
                  ]} 
                />
              </p>
            </div>
            
            <div className="offer-image-section">
              <img 
                src={HeroImage} 
                alt={t('offer_image_alt')}
                className="offer-hero-image"
                onError={(e) => {
                  console.error('Error loading hero image:', e);
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Grid kategorii */}
        <div className="offer-categories-grid">
          {offerData.categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              custom={categoryIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="offer-category-card"
            >
              {/* Tytuł kategorii */}
              <h3 className="offer-category-title">{category.title}</h3>
              
              {/* Opis kategorii */}
              <div className="offer-category-description">{category.description}</div>
              
              {/* Szczegóły (jeśli istnieją) */}
              {category.details && (
                <ul className="offer-category-details">
                  {category.details.map((detail, detailIndex) => (
                    <motion.li 
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + detailIndex * 0.1 }}
                    >
                      <strong>{detail.name}</strong> – {detail.text}
                    </motion.li>
                  ))}
                </ul>
              )}
              
              {/* Wprowadzenie do producentów */}
              {category.manufacturersIntro && (
                <motion.p 
                  className="offer-manufacturers-intro"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
                >
                  {category.manufacturersIntro}
                </motion.p>
              )}
              
              {/* Loga producentów i nazwy firm */}
              {((category.logos && category.logos.length > 0) || (category.companyNames && category.companyNames.length > 0)) && (
                <motion.div 
                  className="offer-logos-container"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.4 }}
                >
                  {/* Renderowanie logo */}
                  {category.logos && category.logos.map((logo, logoIndex) => (
                    <motion.img 
                      key={logoIndex}
                      custom={logoIndex}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={logoVariants}
                      src={logo} 
                      alt={`${category.title} logo ${logoIndex + 1}`} 
                      className="offer-logo"
                      onError={(e) => {
                        console.error(`Error loading logo ${logoIndex}:`, e);
                        e.target.style.display = 'none';
                      }}
                    />
                  ))}
                  
                  {/* Renderowanie nazw firm bez logo */}
                  {category.companyNames && category.companyNames.map((companyName, nameIndex) => (
                    <motion.span
                      key={`name-${nameIndex}`}
                      custom={nameIndex + (category.logos ? category.logos.length : 0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={logoVariants}
                      className="company-name"
                    >
                      {companyName}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="offer-outro"
        >
          {offerData.outro}
        </motion.p>
      </div>
    </section>
  );
};

export default Offer;