import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css'; // Import component-specific CSS

// Import actual assets
import siteLogo from '../assets/Logo.png'; // Use the provided logo

const Footer = () => {
  const { t } = useTranslation();

  // TODO: Add actual footer content (e.g., links, address)
  // TODO: Replace placeholder service logos with actual ones if available

  return (
    <footer className="footer-section"> {/* Use custom CSS class */}
      <div className="container footer-container"> {/* Use custom CSS class and global container */}
        <div className="footer-content-wrapper"> {/* Use custom CSS class for layout */}
          {/* Company Info */}
          <div className="footer-col company-info"> {/* Use custom CSS class */}
            <img src={siteLogo} alt="StolarzNowoczesny Logo" className="footer-logo" /> {/* Use actual logo */}
            <p className="company-description">{t('footer_company_description_pl')}</p> {/* Placeholder for description */}
          </div>

          {/* Contact Info */}
          <div className="footer-col contact-info"> {/* Use custom CSS class */}
            <h4>{t('footer_contact_title_pl')}</h4> {/* Placeholder title */}
            <p>{t('contact_address_pl')}</p> {/* Placeholder address */}
            <p>{t('contact_phone_pl')}</p> {/* Placeholder phone */}
            <p>{t('contact_email_pl')}</p> {/* Placeholder email */}
          </div>

          {/* Links */}
          <div className="footer-col footer-links"> {/* Use custom CSS class */}
            <h4>{t('footer_links_title_pl')}</h4> {/* Placeholder title */}
            <ul>
              <li><a href="#">{t('footer_link_downloads_pl')}</a></li> {/* Placeholder link */}
              <li><a href="#">{t('footer_link_faq_pl')}</a></li> {/* Placeholder link */}
              <li><a href="#">{t('footer_link_privacy_pl')}</a></li> {/* Placeholder link */}
              <li><a href="#">{t('footer_link_rodo_pl')}</a></li> {/* Placeholder link */}
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-col our-services"> {/* Use custom CSS class */}
            <h4>{t('footer_services_title_pl')}</h4> {/* Placeholder title */}
            {/* TODO: Replace with actual service logos */}
            <div className="service-logos">
              <div className="service-logo-placeholder">Service 1 Logo</div>
              <div className="service-logo-placeholder">Service 2 Logo</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom"> {/* Use custom CSS class */}
           <p className="footer-text-small">{t('footer_text_pl')}</p> {/* Copyright text */}
           {/* TODO: Add "Wykonane przez" text if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
