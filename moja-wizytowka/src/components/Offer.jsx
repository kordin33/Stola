import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Offer.css';

// Import logos
import SalamanderLogo from "../assets/Salalogo.png";
import KommerlingLogo from '../assets/kommerling-seeklogo.png';
import RehauLogo from '../assets/rehau-seeklogo.png';
import AluplastLogo from '../assets/Aluplast.png';
import GealanLogo from '../assets/gealan-seeklogo.png';
import InothermLogo from '../assets/Inotherm.png';
// import AluprofLogo from '../assets/rehau-seeklogo.png';
import ReynaersLogo from '../assets/reynaers-aluminium-seeklogo.png';
// import RomaLogo from '../assets/rehau-seeklogo.png';
import AlukonLogo from '../assets/Alukon.png';
// import BeckHeunLogo from '../assets/rehau-seeklogo.png';
//import ExteLogo from '../assets/Exte.png';
//import AbelSystemLogo from '../assets/Abel-System.png';
//import BugLogo from '../assets/BUG.png';
//import GutmannLogo from '../assets/Gutmann.png';

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
          { name: t('offer.windowsAndDoors.systems.pvc'), text: t('offer.windowsAndDoors.systems.pvcDetails') },
          { name: t('offer.windowsAndDoors.systems.wood'), text: t('offer.windowsAndDoors.systems.woodDetails') },
          { name: t('offer.windowsAndDoors.systems.steel'), text: t('offer.windowsAndDoors.systems.steelDetails') },
        ],
        manufacturersIntro: t('offer.windowsAndDoors.manufacturers'),
        logos: [SalamanderLogo, KommerlingLogo, RehauLogo, AluplastLogo, GealanLogo],
      },
      {
        title: t('offer.aluminiumSystems.title'),
        description: t('offer.aluminiumSystems.description'),
        logos: [InothermLogo, /* AluprofLogo, */ ReynaersLogo],
      },
     
    
     
    
    ],
    outro: t('offer.outro'),
  };

  return (
    <section id="offer" className="offer-section">
      <div className="container offer-container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="offer-main-title"
        >
          {offerData.mainTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="offer-intro"
        >
          {offerData.intro}
        </motion.p>

        <div className="offer-categories-grid">
          {offerData.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="offer-category-card"
            >
              <h3 className="offer-category-title">{category.title}</h3>
              <p className="offer-category-description">{category.description}</p>
              {category.details && (
                <ul className="offer-category-details">
                  {category.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <strong>{detail.name}</strong> – {detail.text}
                    </li>
                  ))}
                </ul>
              )}
              {category.manufacturersIntro && <p className="offer-manufacturers-intro">{category.manufacturersIntro}</p>}
              {category.logos && category.logos.length > 0 && (
                <div className="offer-logos-container">
                  {category.logos.map((logo, logoIndex) => (
                    <img key={logoIndex} src={logo} alt={`${category.title} logo ${logoIndex + 1}`} className="offer-logo" />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="offer-outro"
        >
          {offerData.outro}
        </motion.p>
      </div>
    </section>
  );
};

export default Offer;
