import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';

// Hero imports
import './Hero.css';
import heroBackground from '../assets/Hero1.jpg';
import siteLogoUrl from '../assets/Logo1.png';

// Offer imports
import './Offer.css';
import SalamanderLogo from "../assets/Salalogo.png";
import KommerlingLogo from '../assets/kommerling-seeklogo.png';
import RehauLogo from '../assets/rehau-seeklogo.png';
import AluplastLogo from '../assets/Aluplast.png';
import GealanLogo from '../assets/gealan-seeklogo.png';
import InothermLogo from '../assets/Inotherm.png';
import ReynaersLogo from '../assets/reynaers-aluminium-seeklogo.png';
import HeroImage from '../assets/Hero2.jpg';

// Contact imports
import './Contact.css';
const LocationIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const EmailIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919-4.919-1.266-.058-1.644-.07-4.85-.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);


const LandingPage = () => {
  const { t } = useTranslation();

  // Hero Section Data
  const heroBackgroundImage = heroBackground;
  const HeroLogo = () => <img src={siteLogoUrl} alt="StolarzNowoczesny Logo" className="hero-logo-image" />;

  // Offer Section Data
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

  // Contact Section Data
  const contactDetails = {
    companyName: t('contact_company_name', "BAUGREEN SP Z O O"),
    commercialName: t('contact_commercial_name', "BAU GREEN"),
    address: t('contact_address', "Raciborska 97, 47-480 Maków, Polska"),
    nip: t('contact_nip', "PL6472603097"),
    phone: t('contact_phone', "+48 609 320 236"),
    email1: t('contact_email1', "sobocik1991@gmail.com"),
    email2: t('contact_email2', "baugreen.pl@gmail.com"),
    contactPerson: t('contact_person_name', "Karol Sobocik")
  };

  // Animations for Offer section
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
    <>
      {/* Hero Section */}
      <motion.section
        id="hero"
        className="hero-section"
        style={{ backgroundImage: `url("${heroBackgroundImage}")` }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="hero-overlay"></div>
        <motion.div
          layoutId="logo"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-logo-container"
        >
          <HeroLogo />
        </motion.div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            {t('hero_title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            {t('hero_subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={500}
              className="btn btn-primary"
            >
              {t('hero_cta', "Zobacz Opinie")}
            </ScrollLink>
          </motion.div>
        </div>
      </motion.section>

      {/* Offer Section */}
      <section id="offer" className="offer-section">
        <div className="offer-container">
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
                <h3 className="offer-category-title">{category.title}</h3>
                <div className="offer-category-description">{category.description}</div>
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
                {((category.logos && category.logos.length > 0) || (category.companyNames && category.companyNames.length > 0)) && (
                  <motion.div 
                    className="offer-logos-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.4 }}
                  >
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="offer-outro-under-card"
            >
              {offerData.outro}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-title"
          >
            {t('contact_title', 'Skontaktuj Się z Nami')}
          </motion.h2>
          <div className="contact-grid">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="contact-info-block"
            >
              <h3 className="contact-subtitle">
                Dane <span className="highlight">Kontaktowe</span>
              </h3>
              <div className="company-info">
                <div className="company-name">
                  <strong>{contactDetails.companyName}</strong>
                </div>
                <div className="company-details">
                  {t('contact_commercial_communication', 'w komunikacji handlowej:')} <span className="highlight">{contactDetails.commercialName}</span>
                  <br />
                  <strong>NIP:</strong> {contactDetails.nip}
                </div>
              </div>
              <div className="contact-info-item" style={{'--delay': 1}}>
                <LocationIcon className="contact-info-icon" />
                <div>
                  <strong>{t('contact_address_label', 'Adres:')}</strong><br />
                  {contactDetails.address}
                </div>
              </div>
              <div className="contact-info-item" style={{'--delay': 2}}>
                <PhoneIcon className="contact-info-icon" />
                <div>
                  <strong>{t('contact_phone_label', 'Telefon:')}</strong><br />
                  <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>
                    {contactDetails.phone}
                  </a>
                </div>
              </div>
              <div className="contact-info-item" style={{'--delay': 3}}>
                <EmailIcon className="contact-info-icon" />
                <div>
                  <strong>{t('contact_email_label', 'Email główny:')}</strong><br />
                  <a href={`mailto:${contactDetails.email1}`}>
                    {contactDetails.email1}
                  </a>
                </div>
              </div>
              <div className="contact-info-item" style={{'--delay': 4}}>
                <EmailIcon className="contact-info-icon" />
                <div>
                  <strong>{t('contact_email_business_label', 'Email firmowy:')}</strong><br />
                  <a href={`mailto:${contactDetails.email2}`}>
                    {contactDetails.email2}
                  </a>
                </div>
              </div>
              <div className="contact-info-item" style={{'--delay': 5}}>
                <div>
                  <strong>{t('contact_person_label', 'Osoba kontaktowa:')}</strong><br />
                  <span className="highlight">{contactDetails.contactPerson}</span>
                </div>
              </div>
              <motion.div 
                className="social-media-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4 className="contact-socials-title">
                  {t('contact_socials_cta', 'Połącz się z nami:')}
                </h4>
                <div className="social-links-container">
                  <a 
                    href="#" 
                    aria-label={t('facebook_aria_label', 'Facebook')} 
                    className="social-icon-link"
                  >
                    <FacebookIcon className="social-icon-svg" />
                  </a>
                  <a 
                    href="#" 
                    aria-label={t('twitter_aria_label', 'Twitter')} 
                    className="social-icon-link"
                  >
                    <TwitterIcon className="social-icon-svg" />
                  </a>
                  <a 
                    href="#" 
                    aria-label={t('instagram_aria_label', 'Instagram')} 
                    className="social-icon-link"
                  >
                    <InstagramIcon className="social-icon-svg" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="contact-map-block"
            >
              <div className="map-content-wrapper">
                <h3 className="contact-subtitle">
                  {t('contact_map_title_part1', 'Nasza')} <span className="highlight">{t('contact_map_title_part2', 'Lokalizacja')}</span>
                </h3>
                <div className="map-responsive-container">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(contactDetails.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('google_maps_title', 'Mapa lokalizacji firmy BAU GREEN')}
                  ></iframe>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                style={{ 
                  marginTop: '1.5rem', 
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(29, 78, 216, 0.02))',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                  boxShadow: '0 4px 16px rgba(59, 130, 246, 0.05)'
                }}
              >
                <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.6' }}>
                  {t('contact_location_description_part1', 'Nasza firma znajduje się w')} <strong>{t('contact_location_city', 'Makowie')}</strong>, 
                  {t('contact_location_description_part2', ' w województwie śląskim. Jesteśmy')} 
                  <span className="highlight"> {t('contact_location_accessible', 'łatwo dostępni')}</span> 
                  {t('contact_location_description_part3', ' dla klientów z całego regionu i')} 
                  <strong> {t('contact_location_ready', 'gotowi na realizację projektów')}</strong> 
                  {t('contact_location_description_part4', ' na terenie całej Polski')}.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
