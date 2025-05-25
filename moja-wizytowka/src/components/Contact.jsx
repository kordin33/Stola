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
    companyName: "BAUGREEN SP Z O O (w komunikacji handlowej: BAU GREEN)",
    address: "Raciborska 97, 47-480 Maków, Polska",
    nip: "PL6472603097",
    
    phone: "+48 609 320 236",
    email1: "sobocik1991@gmail.com",
    email2: "baugreen.pl@gmail.com",
    contactPerson: "Karol Sobocik"
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
          {t('contact_title_pl', "Skontaktuj Się z Nami")}
        </motion.h2>

        <div className="contact-grid"> {/* Wrapper for side-by-side layout */}
          {/* Contact Information (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Changed y to x for side animation
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-info-block" // New class for styling
          >
            <h3 className="contact-subtitle mb-6">{t('contact_info_subtitle_pl', "Dane Kontaktowe")}</h3>
            <div className="contact-info-item">
              <p><strong>{contactDetails.companyName}</strong></p>
            </div>
            <div className="contact-info-item">
              <LocationIcon className="contact-info-icon animate-icon-attention" /> <p>{contactDetails.address}</p>
            </div>
            <div className="contact-info-item">
              <p><strong>{t('contact_nip_label', 'NIP:')}</strong> {contactDetails.nip}</p>
            </div>
            <div className="contact-info-item">
              <p><strong>{t('contact_bank_account_label', 'Numer konta:')}</strong> {contactDetails.bankAccount}</p>
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
              <p><strong>{t('contact_person_label', 'Osoba kontaktowa:')}</strong> {contactDetails.contactPerson}</p>
            </div>
            {/* Social Media Links */}
            <div className="social-media-section mt-8">
                <h4 className="contact-socials-title mb-4">{t('contact_socials_cta_pl', "Połącz się z nami:")}</h4>
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

          {/* Contact Form (Right Side) */}
          <motion.form
            initial={{ opacity: 0, x: 50 }} // Changed y to x for side animation
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="contact-form-block" // New class for styling
            onSubmit={(e) => e.preventDefault()} // Prevent default form submission for now
          >
            <h3 className="contact-subtitle mb-6">{t('contact_form_subtitle_pl', "Napisz do Nas")}</h3>
            <div className="form-group mb-4">
              <label htmlFor="name" className="form-label">{t('contact_label_name_pl', "Imię")}</label>
              <input type="text" id="name" name="name" placeholder={formPlaceholders.name} className="form-input" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="form-label">{t('contact_label_email_pl', "Email")}</label>
              <input type="email" id="email" name="email" placeholder={formPlaceholders.email} className="form-input" />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="message" className="form-label">{t('contact_label_message_pl', "Wiadomość")}</label>
              <textarea id="message" name="message" rows="6" placeholder={formPlaceholders.message} className="form-textarea"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              {t('contact_submit_button_pl', "Wyślij Wiadomość")}
            </button>
          </motion.form>
        </div> {/* Closes contact-grid */}

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="map-container mt-12" // Added margin top
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156380.53998300223!2d20.92111203205764!3d52.233021920448005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f00ea32152fd2e!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1678886460000!5m2!1sen!2sus"
            width="100%" // Changed to 100% for responsiveness
            height="450"
            style={{ border:0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('google_maps_title_pl', "Mapa Google z lokalizacją Warszawa, Polska")} // Added title for accessibility
          ></iframe>
        </motion.div>

      </div> {/* Closes container contact-container */}
    </section>
  );
};

export default Contact;
