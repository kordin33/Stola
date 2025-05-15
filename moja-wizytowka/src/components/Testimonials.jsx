import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';
import avatarKobieta1 from '../assets/Kobieta1.jpg';
import avatarFacet1 from '../assets/Facet1.jpg';
import avatarFacet2 from '../assets/Facet2.jpg';

// Przykładowe dane rekomendacji
const testimonialsData = [
  {
    id: 1,
    name: "Anna Kowalska",
    avatar: avatarKobieta1,
    testimonial_pl: "Profesjonalizm na najwyższym poziomie! Meble kuchenne wykonane z dbałością o każdy detal. Polecam!",
    testimonial_en: "Top-level professionalism! Kitchen furniture made with attention to every detail. I recommend!",
    testimonial_de: "Professionalität auf höchstem Niveau! Küchenmöbel mit Liebe zum Detail gefertigt. Ich empfehle!",
    company: "Firma X",
  },
  {
    id: 2,
    name: "Piotr Nowak",
    avatar: avatarFacet1,
    testimonial_pl: "Szafa do sypialni przerosła moje oczekiwania. Świetny kontakt i szybka realizacja. Na pewno skorzystam ponownie.",
    testimonial_en: "The bedroom wardrobe exceeded my expectations. Great contact and fast execution. I will definitely use their services again.",
    testimonial_de: "Der Kleiderschrank für das Schlafzimmer hat meine Erwartungen übertroffen. Super Kontakt und schnelle Ausführung. Werde sicher wieder nutzen.",
    company: "Firma Y",
  },
  {
    id: 3,
    name: "Marek Zając", // Changed name to match Facet2 if needed, or keep Magdalena
    avatar: avatarFacet2,
    testimonial_pl: "Nietypowa zabudowa w salonie wygląda fantastycznie. Panowie doradzili najlepsze rozwiązania. Jestem zachwycony!", // Adjusted for male if name changed
    testimonial_en: "The custom living room unit looks fantastic. The team advised on the best solutions. I am delighted!",
    testimonial_de: "Die maßgefertigte Wohnwand sieht fantastisch aus. Das Team hat die besten Lösungen empfohlen. Ich bin begeistert!",
    company: "Firma Z",
  },
];

const TestimonialCard = ({ name, avatar, testimonial, company, lang }) => {
  const currentTestimonial = testimonial[`testimonial_${lang}`] || testimonial['testimonial_pl'];
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img src={avatar} alt={name} className="testimonial-avatar" />
      <p className="testimonial-text">"{currentTestimonial}"</p>
      <p className="testimonial-author">- {name}, <span className="testimonial-company">{company}</span></p>
    </motion.div>
  );
};

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0]; // Get base language e.g. 'pl' from 'pl-PL'

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
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={{
                testimonial_pl: testimonial.testimonial_pl,
                testimonial_en: testimonial.testimonial_en,
                testimonial_de: testimonial.testimonial_de,
              }}
              company={testimonial.company}
              lang={currentLang}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
