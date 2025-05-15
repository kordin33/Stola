import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Contact.css'; // Import component-specific CSS

// Import icons (using simple text placeholders for now, replace with actual SVG imports)
const LocationIcon = () => <span>📍</span>; // Placeholder for location icon
const PhoneIcon = () => <span>📞</span>; // Placeholder for phone icon
const EmailIcon = () => <span>✉️</span>; // Placeholder for email icon

const Contact = () => {
  const { t } = useTranslation();

  // Przykładowe dane kontaktowe
  const contactDetails = {
    address: "ul. Przykładowa 123, 00-000 Warszawa",
    phone: "+48 123 456 789",
    email: "kontakt@stolarznowoczesny.pl"
  };

  // Przykładowe dane dla placeholderów formularza (można je też przenieść do i18n)
  const formPlaceholders = {
    name: t('contact_name_placeholder_pl', "Twoje Imię"),
    email: t('contact_email_placeholder_pl', "Twój Email"),
    message: t('contact_message_placeholder_pl', "Twoja Wiadomość")
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
              <LocationIcon /> <p>{contactDetails.address}</p>
            </div>
            <div className="contact-info-item">
              <PhoneIcon /> <p><a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>{contactDetails.phone}</a></p>
            </div>
             <div className="contact-info-item">
              <EmailIcon /> <p><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></p>
            </div>
            {/* Social Media Links - Moved here */}
            <div className="social-links mt-8">
                <h4 className="contact-socials-title mb-4">{t('contact_socials_title_pl', "Znajdź nas na:")}</h4>
                {/* TODO: Replace with actual social icons/links */}
                <a href="#" className="social-icon">F</a> {/* Facebook placeholder */}
                <a href="#" className="social-icon">T</a> {/* Twitter placeholder */}
                <a href="#" className="social-icon">I</a> {/* Instagram placeholder */}
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
      </div> {/* Closes container contact-container */}
    </section>
  );
};

export default Contact;
