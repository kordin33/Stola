import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Contact.css'; // Import component-specific CSS

// Import icons
import LocationIcon from '../assets/icons/LocationIcon';
import PhoneIcon from '../assets/icons/PhoneIcon';
import EmailIcon from '../assets/icons/EmailIcon';
import FacebookIcon from '../assets/icons/FacebookIcon';
import TwitterIcon from '../assets/icons/TwitterIcon';
import InstagramIcon from '../assets/icons/InstagramIcon';

const Contact = () => {
  const { t } = useTranslation();

  // Dane kontaktowe
  const contactDetails = {
    companyName: t('contact_company_name', "BAUGREEN SP Z O O (w komunikacji handlowej: BAU GREEN)"),
    address: t('contact_address', "Raciborska 97, 47-480 Maków, Polska"),
    nip: t('contact_nip', "PL6472603097"),
    
    phone: t('contact_phone', "+48 609 320 236"),
    email1: t('contact_email1', "sobocik1991@gmail.com"),
    email2: t('contact_email2', "baugreen.pl@gmail.com"),
    contactPerson: t('contact_person_name', "Karol Sobocik")
  };

  // Przykładowe dane dla placeholderów formularza (można je też przenieść do i18n)
  const formPlaceholders = {
    name: t('contact_name_placeholder', "Twoje Imię"),
    email: t('contact_email_placeholder', "Twój Email"),
    message: t('contact_message_placeholder', "Twoja Wiadomość")
  };


  return (
    <section id="contact" className="contact-section section-padding"> {/* Added section-padding */}
      <div className="container contact-container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-title text-center mb-12" // Added text-center and margin
        >
          {t('contact_title', "Skontaktuj Się z Nami")}
        </motion.h2>

        <div className="contact-grid"> {/* Wrapper for layout - will adjust for map */}
          {/* Contact Information (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Changed y to x for side animation
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-info-block"
          >
            <h3 className="contact-subtitle mb-6">{t('contact_info_subtitle', "Dane Kontaktowe")}</h3>
            <div className="contact-info-item">
              <p><strong>{contactDetails.companyName}</strong></p>
              
            </div>
           
            <div className="contact-info-item">
              <LocationIcon className="contact-info-icon animate-icon-attention" /> <p>{contactDetails.address}</p>
            </div>
           
            
            <div className="contact-info-item">
              <PhoneIcon className="contact-info-icon animate-icon-attention" /> <p><a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>{contactDetails.phone}</a></p>
            </div>
             <div className="contact-info-item">
              <EmailIcon className="contact-info-icon animate-icon-attention" /> <p><a href={`mailto:${contactDetails.email1}`}>{contactDetails.email1}</a></p>
            </div>
             <div className="contact-info-item">
              <EmailIcon className="contact-info-icon animate-icon-attention" /> <p><a href={`mailto:${contactDetails.email2}`}>{contactDetails.email2}</a></p>
            </div>
            <div className="contact-info-item">
              <p><strong>{t('contact_person_label', "Osoba kontaktowa:")}</strong> {contactDetails.contactPerson}</p>
            </div>
            {/* Social Media Links */}
            <div className="social-media-section mt-8">
                <h4 className="contact-socials-title mb-4">{t('contact_socials_cta', "Połącz się z nami:")}</h4>
                <div className="social-links-container">
                    <a href="#" aria-label={t('facebook_aria_label', 'Facebook')} className="social-icon-link">
                        <FacebookIcon className="social-icon-svg" />
                    </a>
                    <a href="#" aria-label={t('twitter_aria_label', 'Twitter')} className="social-icon-link">
                        <TwitterIcon className="social-icon-svg" />
                    </a>
                    <a href="#" aria-label={t('instagram_aria_label', 'Instagram')} className="social-icon-link">
                        <InstagramIcon className="social-icon-svg" />
                    </a>
                </div>
            </div>
          </motion.div>

          {/* Wrapper for Map and Form */}
          <div className="contact-main-content-wrapper">
            {/* Google Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }} // Adjusted delay
            className="contact-map-block"
          >
            <h3 className="contact-subtitle mb-6">{t('contact_map_title', "Nasza Lokalizacja")}</h3>
            <div className="map-responsive-container">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(contactDetails.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="400" // Adjust height as needed
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('google_maps_title', 'Mapa lokalizacji firmy BAU GREEN')}
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form (Right Side) */}
          <motion.form
            initial={{ opacity: 0, x: 50 }} // Changed y to x for side animation
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="contact-form-block" // New class for styling
            onSubmit={(e) => e.preventDefault()} // Prevent default form submission for now
          >
            <h3 className="contact-subtitle mb-6">{t('contact_form_subtitle', "Napisz do Nas")}</h3>
            <div className="form-group mb-4">
              <label htmlFor="name" className="form-label">{t('contact_label_name', "Imię")}</label>
              <input type="text" id="name" name="name" placeholder={formPlaceholders.name} className="form-input" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="form-label">{t('contact_label_email', "Email")}</label>
              <input type="email" id="email" name="email" placeholder={formPlaceholders.email} className="form-input" />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="message" className="form-label">{t('contact_label_message', "Wiadomość")}</label>
              <textarea id="message" name="message" rows="6" placeholder={formPlaceholders.message} className="form-textarea"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              {t('contact_submit_button', "Wyślij Wiadomość")}
            </button>
          </motion.form>
        </div> {/* Closes contact-main-content-wrapper */}
      </div> {/* Closes contact-grid */}
      </div> {/* Closes container contact-container */}
    </section>
  );
};

export default Contact;
