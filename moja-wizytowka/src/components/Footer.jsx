import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

// Import actual assets
import siteLogo from '../assets/Logo1.png'; // Use the new logo

const Footer = () => {
  const { t } = useTranslation();

  // Assuming actual content will be provided via i18n keys
  // Placeholder service logos are removed, assuming actual images will be added later

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-content-wrapper">
          {/* Company Info */}
          <div className="footer-col company-info">
            <img src={siteLogo} alt={t('site_title')} className="footer-logo" /> {/* Use actual logo and translated alt text */}
            <p className="company-description">{t('footer_company_description', 'BauGreen specjalizuje się w kompleksowej budowie i montażu konstrukcji stalowych oraz aluminiowych, oferując również profesjonalne usługi spawalnicze.')}</p> {/* Use translated description */}
          </div>

         

          {/* Our Services - Placeholder removed, assuming actual logos/content will be added */}
          {/* <div className="footer-col our-services">
            <h4>{t('footer_services_title')}</h4>
            <div className="service-logos">
               Add actual service logos here
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
           <p className="footer-text-small">{t('footer_text')}</p> {/* Use translated copyright text */}
           {/* TODO: Add "Wykonane przez" text if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
