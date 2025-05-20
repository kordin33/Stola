import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';
import avatarKobieta1 from '../assets/BauServ.png';
import avatarFacet1 from '../assets/Human.png';
import avatarFacet2 from '../assets/Fenubis.png';

// Dane rekomendacji
const testimonialsData = [
  {
    id: 1,
    name: "Patryk Stanowski",
    avatar: avatarFacet1, // Assuming Facet1 can be used for Patryk Stanowski
    testimonial_pl: "Współpraca przebiegła sprawnie i bezproblemowo. Terminowość, profesjonalne podejście oraz doskonała komunikacja – to cechy, które wyróżniają tę firmę na tle innych. Zdecydowanie polecam każdemu, kto ceni sobie jakość i rzetelność.",
    testimonial_en: "The cooperation went smoothly and without problems. Punctuality, professional approach and excellent communication - these are the features that distinguish this company from others. I definitely recommend it to anyone who values quality and reliability.",
    testimonial_de: "Die Zusammenarbeit verlief reibungslos und problemlos. Termintreue, professionelles Vorgehen und exzellente Kommunikation – das sind die Eigenschaften, die dieses Unternehmen von anderen abheben. Ich empfehle es auf jeden Fall jedem, der Wert auf Qualität und Zuverlässigkeit legt.",
    company: "Human Invest",
  },
  {
    id: 2,
    name: "Zespół BAU Service",
    avatar: avatarKobieta1, // Assuming Kobieta1 can be used for BAU Service team
    testimonial_pl: "Rzadko spotyka się tak solidnych wykonawców. Wszystko zostało zrealizowane zgodnie z ustaleniami, a efekt końcowy przerósł nasze oczekiwania. Jesteśmy bardzo zadowoleni i na pewno jeszcze nie raz skorzystamy z ich usług.",
    testimonial_en: "It is rare to find such reliable contractors. Everything was done according to the arrangements, and the final result exceeded our expectations. We are very satisfied and will definitely use their services again.",
    testimonial_de: "Es ist selten, so zuverlässige Auftragnehmer zu finden. Alles wurde gemäß den Vereinbarungen ausgeführt, und das Endergebnis übertraf unsere Erwartungen. Wir sind sehr zufrieden und werden ihre Dienste sicherlich noch oft in Anspruch nehmen.",
    company: "BAU Service",
  },
  {
    id: 3,
    name: "Fenubis Fenster",
    avatar: avatarFacet2, // Assuming Facet2 can be used for Fenubis Fenster
    testimonial_pl: "Bardzo niezawodny partner, na którym można polegać. Współpraca była nieskomplikowana i efektywna, wszystkie prace zostały wykonane punktualnie i w najlepszej jakości. Cieszymy się na kolejne wspólne projekty.",
    testimonial_en: "Very reliable partner you can count on. The cooperation was uncomplicated and efficient, all work was carried out on time and in the best quality. We look forward to further joint projects.",
    testimonial_de: "Sehr zuverlässiger Partner, auf den man sich verlassen kann. Die Zusammenarbeit war unkompliziert und effizient, alle Arbeiten wurden pünktlich und in bester Qualität ausgeführt. Wir freuen uns auf weitere gemeinsame Projekte.",
    company: "Fenubis Fenster",
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
