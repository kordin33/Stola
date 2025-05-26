import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Portfolio.css'; // Import component-specific CSS

// Import actual assets
import portfolioImage1 from '../assets/Dzwi.png'; // Use provided image
import portfolioImage2 from '../assets/Window.jpg'; // Use provided image
import portfolioImage3 from '../assets/cezary_baryka.png'; // Use provided image


const Portfolio = () => {
  const { t } = useTranslation();
  // TODO: Add content for the Portfolio section (PL/EN/DE)
  // TODO: Add more gallery items as needed

  const portfolioItems = [
    {
      id: 1,
      image: portfolioImage1, // Use actual image
      alt: t('portfolio_image_1_alt'),
      caption: t('portfolio_caption_1'),
    },
    {
      id: 2,
      image: portfolioImage2, // Use actual image
      alt: t('portfolio_image_2_alt'),
      caption: t('portfolio_caption_2'),
    },
    {
      id: 3,
      image: portfolioImage3, // Use actual image
      alt: t('portfolio_image_3_alt'),
      caption: t('portfolio_caption_3'),
    },
    // TODO: Add more portfolio items as needed and replace placeholder images
  ];

  return (
    <section id="portfolio" className="portfolio-section"> {/* Use custom CSS class */}
      <div className="container portfolio-container"> {/* Use custom CSS class and global container */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="portfolio-title" // Use custom CSS class
        >
          {t('portfolio_title')}
        </motion.h2>

        <div className="portfolio-items-grid"> {/* Use custom CSS class */}
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="portfolio-item" // Use custom CSS class
            >
              <img src={item.image} alt={item.alt} className="portfolio-item-image" /> {/* Use actual image and custom CSS class */}
              <div className="portfolio-item-overlay"> {/* Use custom CSS class */}
                <p className="portfolio-item-caption">{item.caption}</p> {/* Use custom CSS class */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
