import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

// CSS imports
import './LandingPage.css';

// Hero imports
import heroBackground from '../assets/Hero1.jpg';
import siteLogoUrl from '../assets/Logo1.png';

// Offer imports
import SalamanderLogo from "../assets/Salalogo.png";
import KommerlingLogo from '../assets/kommerling-seeklogo.png';
import RehauLogo from '../assets/rehau-seeklogo.png';
import AluplastLogo from '../assets/Aluplast.png';
import GealanLogo from '../assets/gealan-seeklogo.png';
import InothermLogo from '../assets/Inotherm.png';
import ReynaersLogo from '../assets/reynaers-aluminium-seeklogo.png';

// Hero Images for parallax sections - zdjęcia nowoczesnej architektury
const HERO_IMAGES = [
  heroBackground,
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
];

// Hardcoded translations
const translations = {
  PL: {
    nav: {
      home: 'Start',
      about: 'O nas',
      offer: 'Oferta',
      contact: 'Kontakt'
    },
    hero: {
      subheadings: ['BAUGREEN', 'PRECYZJA'],
      headings: [
        'Unikalne projekty z pasją',
        'Nowoczesne rozwiązania'
      ],
      cta: 'Zobacz ofertę'
    },
    about: {
      title: 'Dlaczego BAU GREEN?',
      subtitle: 'Od 2023 roku łączymy niemieckie standardy jakości z polskim rzemiosłem',
      since: 'Od',
      features: [
        {
          title: 'Niemieckie Standardy',
          description: 'Montaż zgodny z niemieckimi normami jakości i precyzji wykonania.'
        },
        {
          title: 'Doświadczenie',
          description: 'Lata pracy na wymagającym rynku niemieckim przekładają się na najwyższą jakość.'
        },
        {
          title: 'Rzetelność',
          description: 'Terminowość realizacji i precyzja wykonania to podstawa naszej współpracy.'
        },
        {
          title: 'Kompleksowa Obsługa',
          description: 'Od doradztwa, przez pomiar, aż po montaż i serwis - wszystko w jednym miejscu.'
        }
      ]
    },
    offer: {
      title: 'Nasza Oferta',
      subtitle: 'Łączymy jakość, terminowość i profesjonalną obsługę',
      description: 'Pełne wsparcie od doradztwa po montaż',
      experience: 'Doświadczenie z niemieckiego rynku od 2023 roku',
      categories: [
        {
          title: 'Okna i Drzwi PVC',
          description: 'Nowoczesne systemy PVC i PVC-Alu łączące energooszczędność z estetyką.',
          details: 'Współpracujemy z renomowanymi producentami: Salamander, Kömmerling, REHAU, Aluplast, Gealan.'
        },
        {
          title: 'Drewno i Drewno-Aluminium',
          description: 'Klasyka w nowoczesnym wydaniu, idealne dla domów i obiektów premium.',
          details: 'Naturalne materiały o wysokiej izolacyjności i prestiżowym wyglądzie.'
        },
        {
          title: 'Systemy Aluminiowe',
          description: 'Profile aluminiowe najwyższej klasy dla fasad i przeszkleń wielkogabarytowych.',
          details: 'Partnerzy technologiczni: Inotherm, Reynaers, Aluprof, Beck+Heun, Gutmann.'
        }
      ]
    },
    contact: {
      title: 'Kontakt',
      company: 'BAUGREEN SP Z.O.O',
      commercialName: '(w komunikacji: BAU GREEN)',
      labels: {
        address: 'ADRES',
        phone: 'TELEFON',
        email: 'EMAIL'
      },
      address: 'Raciborska 97, 47-480 Maków, Polska',
      phone: '+48 609 320 236',
      email1: 'sobocik1991@gmail.com',
      email2: 'baugreen.pl@gmail.com',
      nip: 'NIP: PL6472603097',
      person: 'Karol Sobocik',
      position: 'Założyciel & CEO',
      mapLocation: 'Lokalizacja',
      mapCity: 'Maków, Polska'
    },
    cta: {
      title: 'Gotowy na współpracę?',
      subtitle: 'Skontaktuj się z nami i dowiedz się, jak możemy zrealizować Twój projekt zgodnie z niemieckimi standardami jakości.',
      button: 'Rozpocznij współpracę'
    },
    footer: {
      description: 'Stolarka otworowa najwyższej jakości',
      copyright: 'BAU GREEN. Wszelkie prawa zastrzeżone.'
    }
  },
  EN: {
    nav: {
      home: 'Home',
      about: 'About',
      offer: 'Services',
      contact: 'Contact'
    },
    hero: {
      subheadings: ['BAUGREEN', 'PRECISION'],
      headings: [
        'Unique projects with passion',
        'Modern solutions'
      ],
      cta: 'See our offer'
    },
    about: {
      title: 'Why BAU GREEN?',
      subtitle: 'Since 2023, we combine German quality standards with Polish craftsmanship',
      since: 'Since',
      features: [
        {
          title: 'German Standards',
          description: 'Installation according to German quality norms and precision standards.'
        },
        {
          title: 'Experience',
          description: 'Years of work in the demanding German market translate to highest quality.'
        },
        {
          title: 'Reliability',
          description: 'Timely delivery and precision are the foundation of our cooperation.'
        },
        {
          title: 'Complete Service',
          description: 'From consultation, through measurement, to installation and service - all in one place.'
        }
      ]
    },
    offer: {
      title: 'Our Services',
      subtitle: 'We combine quality, timeliness and professional service',
      description: 'Full support from consultation to installation',
      experience: 'German market experience since 2023',
      categories: [
        {
          title: 'PVC Windows & Doors',
          description: 'Modern PVC and PVC-Alu systems combining energy efficiency with aesthetics.',
          details: 'We work with renowned manufacturers: Salamander, Kömmerling, REHAU, Aluplast, Gealan.'
        },
        {
          title: 'Wood & Wood-Aluminum',
          description: 'Classic in modern design, ideal for premium homes and buildings.',
          details: 'Natural materials with high insulation and prestigious appearance.'
        },
        {
          title: 'Aluminum Systems',
          description: 'Top-class aluminum profiles for facades and large-scale glazing.',
          details: 'Technology partners: Inotherm, Reynaers, Aluprof, Beck+Heun, Gutmann.'
        }
      ]
    },
    contact: {
      title: 'Contact',
      company: 'BAUGREEN SP Z.O.O',
      commercialName: '(commercial name: BAU GREEN)',
      labels: {
        address: 'ADDRESS',
        phone: 'PHONE',
        email: 'EMAIL'
      },
      address: 'Raciborska 97, 47-480 Maków, Poland',
      phone: '+48 609 320 236',
      email1: 'sobocik1991@gmail.com',
      email2: 'baugreen.pl@gmail.com',
      nip: 'VAT: PL6472603097',
      person: 'Karol Sobocik',
      position: 'Founder & CEO',
      mapLocation: 'Location',
      mapCity: 'Maków, Poland'
    },
    cta: {
      title: 'Ready to collaborate?',
      subtitle: 'Contact us and find out how we can realize your project according to German quality standards.',
      button: 'Start collaboration'
    },
    footer: {
      description: 'Highest quality joinery',
      copyright: 'BAU GREEN. All rights reserved.'
    }
  },
  DE: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      offer: 'Angebot',
      contact: 'Kontakt'
    },
    hero: {
      subheadings: ['BAUGREEN', 'PRÄZISION'],
      headings: [
        'Einzigartige Projekte mit Leidenschaft',
        'Moderne Lösungen'
      ],
      cta: 'Unser Angebot ansehen'
    },
    about: {
      title: 'Warum BAU GREEN?',
      subtitle: 'Seit 2023 verbinden wir deutsche Qualitätsstandards mit polnischer Handwerkskunst',
      since: 'Seit',
      features: [
        {
          title: 'Deutsche Standards',
          description: 'Montage nach deutschen Qualitätsnormen und Präzisionsstandards.'
        },
        {
          title: 'Erfahrung',
          description: 'Jahrelange Arbeit auf dem anspruchsvollen deutschen Markt garantiert höchste Qualität.'
        },
        {
          title: 'Zuverlässigkeit',
          description: 'Termingerechte Lieferung und Präzision sind die Grundlage unserer Zusammenarbeit.'
        },
        {
          title: 'Komplettservice',
          description: 'Von der Beratung über die Vermessung bis zur Montage und Service - alles aus einer Hand.'
        }
      ]
    },
    offer: {
      title: 'Unser Angebot',
      subtitle: 'Wir verbinden Qualität, Pünktlichkeit und professionellen Service',
      description: 'Vollumfängliche Unterstützung von der Beratung bis zur Montage',
      experience: 'Deutsche Markterfahrung seit 2023',
      categories: [
        {
          title: 'PVC Fenster & Türen',
          description: 'Moderne PVC und PVC-Alu Systeme, die Energieeffizienz mit Ästhetik verbinden.',
          details: 'Wir arbeiten mit renommierten Herstellern: Salamander, Kömmerling, REHAU, Aluplast, Gealan.'
        },
        {
          title: 'Holz & Holz-Aluminium',
          description: 'Klassik im modernen Design, ideal für Premium-Häuser und Gebäude.',
          details: 'Natürliche Materialien mit hoher Isolierung und prestigeträchtiger Optik.'
        },
        {
          title: 'Aluminiumsysteme',
          description: 'Erstklassige Aluminiumprofile für Fassaden und großflächige Verglasungen.',
          details: 'Technologiepartner: Inotherm, Reynaers, Aluprof, Beck+Heun, Gutmann.'
        }
      ]
    },
    contact: {
      title: 'Kontakt',
      company: 'BAUGREEN SP Z.O.O',
      commercialName: '(Handelsname: BAU GREEN)',
      labels: {
        address: 'ADRESSE',
        phone: 'TELEFON',
        email: 'EMAIL'
      },
      address: 'Raciborska 97, 47-480 Maków, Polen',
      phone: '+48 609 320 236',
      email1: 'sobocik1991@gmail.com',
      email2: 'baugreen.pl@gmail.com',
      nip: 'USt-ID: PL6472603097',
      person: 'Karol Sobocik',
      position: 'Gründer & CEO',
      mapLocation: 'Standort',
      mapCity: 'Maków, Polen'
    },
    cta: {
      title: 'Bereit zur Zusammenarbeit?',
      subtitle: 'Kontaktieren Sie uns und erfahren Sie, wie wir Ihr Projekt nach deutschen Qualitätsstandards realisieren können.',
      button: 'Zusammenarbeit beginnen'
    },
    footer: {
      description: 'Hochwertige Bauelemente',
      copyright: 'BAU GREEN. Alle Rechte vorbehalten.'
    }
  }
};

// Language Selector Component
function LanguageSelector({ currentLang, setLang }) {
  return (
    <div className="language-selector">
      <select
        value={currentLang}
        onChange={(e) => setLang(e.target.value)}
        className="language-select"
      >
        <option value="PL">PL</option>
        <option value="EN">EN</option>
        <option value="DE">DE</option>
      </select>
    </div>
  );
}

// Navigation Component
function Navigation({ lang, setLang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="nav-logo-bau">BAU</span>
          <span className="nav-logo-green">GREEN</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="nav-menu desktop-menu">
          <a href="#hero" className="nav-link">{t.nav.home}</a>
          <a href="#about" className="nav-link">{t.nav.about}</a>
          <a href="#offer" className="nav-link">{t.nav.offer}</a>
          <a href="#contact" className="nav-link">{t.nav.contact}</a>
          <div className="nav-divider"></div>
          <LanguageSelector currentLang={lang} setLang={setLang} />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#hero" className="nav-link" onClick={handleLinkClick}>{t.nav.home}</a>
          <a href="#about" className="nav-link" onClick={handleLinkClick}>{t.nav.about}</a>
          <a href="#offer" className="nav-link" onClick={handleLinkClick}>{t.nav.offer}</a>
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>{t.nav.contact}</a>
          <div className="mobile-divider"></div>
          <LanguageSelector currentLang={lang} setLang={setLang} />
        </div>
      )}
    </nav>
  );
}

// Parallax Hero component
function ParallaxHero({ imgUrl, subheading, heading, isFirst = false, lang }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const shade = useTransform(scrollYProgress, [0, 1], [0.4, 0.6]);

  return (
    <div className="hero-parallax-section" id={isFirst ? "hero" : undefined}>
      <motion.div
        ref={ref}
        className="hero-parallax-bg"
        style={{ backgroundImage: `url(${imgUrl})`, scale }}
      >
        <motion.div className="hero-parallax-overlay" style={{ opacity: shade }} />
      </motion.div>
      <HeroOverlay subheading={subheading} heading={heading} isFirst={isFirst} lang={lang} />
    </div>
  );
}

// Hero Overlay component
function HeroOverlay({ subheading, heading, isFirst, lang }) {
  const t = translations[lang];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  
  // Enhanced parallax effects for text
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
  
  return (
    <motion.div
      ref={ref}
      className="hero-overlay-content"
      style={{ 
        y: textY, 
        opacity: textOpacity,
        scale: textScale
      }}
    >
      {isFirst && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hero-logo-container"
        >
          <img src={siteLogoUrl} alt="BAU GREEN Logo" className="hero-logo" />
        </motion.div>
      )}
      <div className="hero-text-content">
        <motion.div 
          className="hero-subheading-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="hero-subheading">{subheading}</p>
        </motion.div>
        <motion.h1 
          className="hero-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {heading}
        </motion.h1>
        {isFirst && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-cta-container"
          >
            <ScrollLink
              to="offer"
              smooth={true}
              duration={500}
              className="hero-cta-button"
            >
              {t.hero.cta}
            </ScrollLink>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// About component
function About({ lang }) {
  const t = translations[lang];
  
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        {/* Header */}
        <div className="about-header">
          <div className="about-header-grid">
            <div className="about-header-content">
              <h2 className="section-title">{t.about.title}</h2>
              <div className="section-accent-line"></div>
              <p className="section-subtitle">{t.about.subtitle}</p>
            </div>
            <div className="about-header-badge">
              <div className="year-badge">
                <span className="year-badge-label">{t.about.since}</span>
                <div className="year-badge-number">2023</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="about-features">
          <div className="features-grid">
            {t.about.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="feature-item"
              >
                <div className="feature-content">
                  <div className="feature-number">
                    <div className="feature-number-box">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
                {index < t.about.features.length - 1 && <div className="feature-connector"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Offer component
function Offer({ lang }) {
  const t = translations[lang];

  const categoryLogos = [
    [SalamanderLogo, KommerlingLogo, RehauLogo, AluplastLogo, GealanLogo],
    [],
    [InothermLogo, ReynaersLogo]
  ];

  const companyNames = [
    [],
    [],
    ['Aluprof®', 'Beck+Heun®', 'Gutmann®']
  ];

  return (
    <section id="offer" className="offer-section">
      <div className="section-container">
        {/* Header */}
        <div className="offer-header">
          <h2 className="section-title">{t.offer.title}</h2>
          <div className="section-accent-line"></div>
          <p className="offer-main-subtitle">{t.offer.subtitle}</p>
          <p className="offer-description">{t.offer.description}</p>
        </div>
        
        {/* Services */}
        <div className="offer-services">
          <div className="services-list">
            {t.offer.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="service-item"
              >
                <div className="service-accent"></div>
                <div className="service-content-grid">
                  <div className="service-number">
                    <div className="service-number-display">{String(index + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="service-details">
                    <div className="service-info">
                      <div className="service-title-section">
                        <h3 className="service-title">{category.title}</h3>
                      </div>
                      <div className="service-description-section">
                        <p className="service-description">{category.description}</p>
                        <p className="service-details-text">{category.details}</p>
                        
                        {/* Logos */}
                        {categoryLogos[index].length > 0 && (
                          <div className="service-logos">
                            {categoryLogos[index].map((logo, logoIndex) => (
                              <img 
                                key={logoIndex}
                                src={logo} 
                                alt={`Logo ${logoIndex + 1}`} 
                                className="service-logo"
                                onError={(e) => e.target.style.display = 'none'}
                              />
                            ))}
                          </div>
                        )}
                        
                        {/* Company names */}
                        {companyNames[index].length > 0 && (
                          <div className="service-companies">
                            {companyNames[index].map((companyName, nameIndex) => (
                              <span key={nameIndex} className="company-name">
                                {companyName}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Experience */}
          <div className="offer-experience">
            <div className="experience-badge">
              <p className="experience-text">{t.offer.experience}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact component
function Contact({ lang }) {
  const t = translations[lang];

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="section-accent-line"></div>
        </div>
        
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-company">
              <h3 className="contact-company-name">{t.contact.company}</h3>
              <p className="contact-commercial-name">{t.contact.commercialName}</p>
              
              <div className="contact-details">
                <div className="contact-detail-item address-item">
                  <p className="contact-detail-label">{t.contact.labels.address}</p>
                  <p className="contact-detail-value">{t.contact.address}</p>
                </div>
                
                <div className="contact-detail-item">
                  <p className="contact-detail-label">{t.contact.labels.phone}</p>
                  <a href={`tel:${t.contact.phone}`} className="contact-detail-link">
                    {t.contact.phone}
                  </a>
                </div>
                
                <div className="contact-detail-item">
                  <p className="contact-detail-label">{t.contact.labels.email}</p>
                  <a href={`mailto:${t.contact.email1}`} className="contact-detail-link">
                    {t.contact.email1}
                  </a>
                  <a href={`mailto:${t.contact.email2}`} className="contact-detail-link">
                    {t.contact.email2}
                  </a>
                </div>
                
                <div className="contact-person-info">
                  <p className="contact-nip">{t.contact.nip}</p>
                  <div className="contact-person">
                    <p className="contact-person-name">{t.contact.person}</p>
                    <p className="contact-person-position">{t.contact.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="contact-map">
            <div className="map-container">
              <iframe
                title="Mapa BauGreen"
                className="map-iframe"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(t.contact.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
              <div className="map-overlay">
                <p className="map-overlay-label">{t.contact.mapLocation}</p>
                <p className="map-overlay-location">{t.contact.mapCity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA component
function CTA({ lang }) {
  const t = translations[lang];
  
  return (
    <section className="cta-section">
      <div className="cta-background-accent"></div>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="cta-content"
        >
          <h2 className="cta-title">{t.cta.title}</h2>
          <div className="cta-accent-line"></div>
          <p className="cta-subtitle">
            {t.cta.subtitle}
          </p>
          <a href="#contact" className="cta-button">
            {t.cta.button}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Footer component
function Footer({ lang }) {
  const t = translations[lang];
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-section">
      <div className="section-container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="footer-logo-text">
              <span className="footer-logo-bau">BAU</span>
              <span className="footer-logo-green">GREEN</span>
            </div>
            <div className="footer-accent-line"></div>
            <p className="footer-description">
              {t.footer.description}
            </p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} {t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main LandingPage component
const LandingPage = () => {
  const [lang, setLang] = useState('PL');
  const t = translations[lang];

  // Zredukowane hero sections - tylko 2 zamiast 3
  const heroSections = [
    {
      image: HERO_IMAGES[0],
      subheading: t.hero.subheadings[0],
      heading: t.hero.headings[0],
      isFirst: true,
      content: <About lang={lang} />
    },
    {
      image: HERO_IMAGES[1],
      subheading: t.hero.subheadings[1],
      heading: t.hero.headings[1],
      isFirst: false,
      content: <Offer lang={lang} />
    }
  ];

  return (
    <div className="landing-page">
      <Navigation lang={lang} setLang={setLang} />
      
      {/* Hero Sections */}
      {heroSections.map((section, i) => (
        <React.Fragment key={i}>
          <ParallaxHero
            imgUrl={section.image}
            subheading={section.subheading}
            heading={section.heading}
            isFirst={section.isFirst}
            lang={lang}
          />
          {section.content}
        </React.Fragment>
      ))}
      
      <Contact lang={lang} />
      <CTA lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default LandingPage;