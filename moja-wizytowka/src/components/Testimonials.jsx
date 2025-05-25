import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';
import avatarKobieta1 from '../assets/BAUServ.png';
import avatarFacet1 from '../assets/Human.png';
import avatarFacet2 from '../assets/Fenubis.png';

// Updated Dane rekomendacji to use translation keys
const testimonialsDataConfig = [
  {
    id: 1,
    avatar: avatarFacet1,
    nameKey: "testimonial_1_name",
    testimonialKey: "testimonial_1_text",
    companyKey: "testimonial_1_company",
    defaultName: "Patryk Stanowski",
    defaultTestimonial: "Współpraca przebiegła sprawnie i bezproblemowo. Terminowość, profesjonalne podejście oraz doskonała komunikacja – to cechy, które wyróżniają tę firmę na tle innych. Zdecydowanie polecam każdemu, kto ceni sobie jakość i rzetelność.",
    defaultCompany: "Human Invest",
  },
  {
    id: 2,
    avatar: avatarKobieta1,
    nameKey: "testimonial_2_name",
    testimonialKey: "testimonial_2_text",
    companyKey: "testimonial_2_company",
    defaultName: "Zespół BAU Service",
    defaultTestimonial: "Rzadko spotyka się tak solidnych wykonawców. Wszystko zostało zrealizowane zgodnie z ustaleniami, a efekt końcowy przerósł nasze oczekiwania. Jesteśmy bardzo zadowoleni i na pewno jeszcze nie raz skorzystamy z ich usług.",
    defaultCompany: "BAU Service",
  },
  {
    id: 3,
    avatar: avatarFacet2,
    nameKey: "testimonial_3_name",
    testimonialKey: "testimonial_3_text",
    companyKey: "testimonial_3_company",
    defaultName: "Fenubis Fenster",
    defaultTestimonial: "Bardzo niezawodny partner, na którym można polegać. Współpraca była nieskomplikowana i efektywna, wszystkie prace zostały wykonane punktualnie i w najlepszej jakości. Cieszymy się na kolejne wspólne projekty.",
    defaultCompany: "Fenubis Fenster",
  },
];

const TestimonialCard = ({ avatar, nameKey, testimonialKey, companyKey, defaultName, defaultTestimonial, defaultCompany }) => {
  const { t } = useTranslation();
  const name = t(nameKey, defaultName);
  const testimonialText = t(testimonialKey, defaultTestimonial);
  const company = t(companyKey, defaultCompany);

  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img src={avatar} alt={name} className="testimonial-avatar" />
      <p className="testimonial-text">"{testimonialText}"</p>
      <p className="testimonial-author">- {name}, <span className="testimonial-company">{company}</span></p>
    </motion.div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation(); // i18n instance for currentLang is not needed here anymore

  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="testimonials-title text-center mb-12"
        >
          {t('testimonials_title', "Co Mówią Nasi Klienci")}
        </motion.h2>
        <div className="testimonials-grid">
          {testimonialsDataConfig.map((testimonialConfig) => (
            <TestimonialCard
              key={testimonialConfig.id}
              avatar={testimonialConfig.avatar}
              nameKey={testimonialConfig.nameKey}
              testimonialKey={testimonialConfig.testimonialKey}
              companyKey={testimonialConfig.companyKey}
              defaultName={testimonialConfig.defaultName}
              defaultTestimonial={testimonialConfig.defaultTestimonial}
              defaultCompany={testimonialConfig.defaultCompany}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
