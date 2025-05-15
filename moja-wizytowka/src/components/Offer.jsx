import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Offer.css'; // Import component-specific CSS

// Import icons (using simple text placeholders for now, replace with actual SVG imports)
const HammerIcon = () => <span>🔨</span>; // Placeholder for hammer icon
const SawIcon = () => <span>锯</span>; // Placeholder for saw icon
const RulerIcon = () => <span>📏</span>; // Placeholder for ruler icon


const Offer = () => {
  const { t } = useTranslation();
  // TODO: Add content for the Offer section (PL/EN/DE)
  // TODO: Structure the offer items (e.g., cards, list)
  // TODO: Replace placeholder icons with actual SVG icons or images

  const offerItems = [
    {
      id: 1,
      title: t('offer_item_1_title_pl'),
      description: t('offer_item_1_description_pl'),
      icon: <HammerIcon />, // Use HammerIcon component
    },
    {
      id: 2,
      title: t('offer_item_2_title_pl'),
      description: t('offer_item_2_description_pl'),
      icon: <SawIcon />, // Use SawIcon component
    },
    {
      id: 3,
      title: t('offer_item_3_title_pl'),
      description: t('offer_item_3_description_pl'),
      icon: <RulerIcon />, // Use RulerIcon component
    },
    // TODO: Add more offer items as needed and replace placeholder icons
  ];

  return (
    <section id="offer" className="offer-section"> {/* Use custom CSS class */}
      <div className="container offer-container"> {/* Use custom CSS class and global container */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="offer-title" // Use custom CSS class
        >
          {t('offer_title_pl')}
        </motion.h2>

        <div className="offer-items-grid"> {/* Use custom CSS class */}
          {offerItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="offer-item-card" // Use custom CSS class
            >
              {/* Icon/Image */}
              <div className="offer-item-icon">{item.icon}</div> {/* Use custom CSS class */}
              <h3 className="offer-item-title">{item.title}</h3> {/* Use custom CSS class */}
              <p className="offer-item-description">{item.description}</p> {/* Use custom CSS class */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
