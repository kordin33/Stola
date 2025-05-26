import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pl: {
    translation: {
      // Hero Section
      hero_title: 'BauGreen',
      hero_subtitle: 'Tworzymy unikalne projekty z pasją.',
      hero_cta: 'Odkryj Naszą Ofertę',

      // Navbar
      site_title: 'BauGreen',
      nav_hero: 'Start',
      nav_about: 'O Firmie',
      nav_offer: 'Oferta',
      nav_portfolio: 'Realizacje',
      nav_contact: 'Kontakt',

      // About Section
      about_title: 'Poznaj Naszą Historię',
      about_image_alt: 'Nowoczesne wnętrze z drewnianymi elementami',
      opis_o_nas: `Firma BAU GREEN działa na rynku od 2023 roku, jednak jej obecna forma to efekt nowego podejścia i kierunku, który nadał jej Karol Sobocik po przejęciu działalności.
      
Karol zdobywał doświadczenie w Niemczech, gdzie nauczył się, czym jest prawdziwa jakość w montażu i sprzedaży stolarki otworowej. Pracując na wymagającym rynku niemieckim, poznał nowoczesne technologie i standardy montażu, które dziś stara się przenieść na polski grunt – oferując klientom usługi na europejskim poziomie.

Obecnie BAU GREEN prowadzi działalność zarówno w Polsce, jak i w Niemczech. Współpracujemy z wieloma partnerami z Niemiec, zapewniając kompleksową obsługę w zakresie sprzedaży i montażu okien, drzwi oraz rolet. Naszym priorytetem jest rzetelność, terminowość i dbałość o każdy detal wykonania – dokładnie tak, jak robi się to u naszych zachodnich sąsiadów.`,

      // Offer Section
      offer_title: 'Co Możemy Dla Ciebie Zrobić?',
      offer_item_1_title: 'Meble Kuchenne',
      offer_item_1_description: 'Projektowanie i montaż funkcjonalnych mebli kuchennych dopasowanych do Twoich potrzeb.',
      offer_item_2_title: 'Szafy i Garderoby',
      offer_item_2_description: 'Tworzymy przestronne szafy i garderoby, które maksymalnie wykorzystują dostępną przestrzeń.',
      offer_item_3_title: 'Zabudowy Nietypowe',
      offer_item_3_description: 'Realizujemy nietypowe zabudowy – schody, wnęki, antresole i inne, według indywidualnych projektów.',

      // Portfolio Section
      portfolio_title: 'Zobacz Nasze Projekty',
      portfolio_image_1_alt: 'Montaż Drzwi',
      portfolio_caption_1: 'Montaż Drzwi',
      portfolio_image_2_alt: 'Montaż Okien',
      portfolio_caption_2: 'Montaż Okien',
      portfolio_image_3_alt: 'Nowoczesna Zabudowa',
      portfolio_caption_3: 'Nowoczesna Zabudowa',
      portfolio_image_4_alt: 'Kolejny projekt portfolio',
      portfolio_caption_4: 'Charakterystyczna zabudowa szafek',

      // Contact Section
      contact_title: 'Skontaktuj Się z Nami',
      contact_info: 'Masz pytania? Chętnie na nie odpowiemy. Wypełnij formularz lub zadzwoń.',
      contact_name_placeholder: 'Twoje Imię',
      contact_email_placeholder: 'Twój Email',
      contact_message_placeholder: 'Twoja Wiadomość',
      contact_submit_button: 'Wyślij Wiadomość',
      contact_company_name: 'BAUGREEN SP Z.O.O (w komunikacji handlowej: BAU GREEN)',
      contact_address: 'Raciborska 97, 47-480 Maków, Polska',
      contact_nip: 'PL6472603097',
      contact_phone: '+48 609 320 236',
      contact_email1: 'sobocik1991@gmail.com',
      contact_email2: 'baugreen.pl@gmail.com',
      contact_person_name: 'Karol Sobocik',
      contact_person_label: 'Osoba kontaktowa:',
      contact_socials_cta: 'Połącz się z nami:',
      facebook_aria_label: 'Facebook',
      twitter_aria_label: 'Twitter',
      instagram_aria_label: 'Instagram',
      contact_map_title: 'Nasza Lokalizacja',
      google_maps_title: 'Mapa lokalizacji firmy BAU GREEN',
      contact_form_subtitle: 'Napisz do Nas',
      contact_label_name: 'Imię',
      contact_label_email: 'Email',
      contact_label_message: 'Wiadomość',

      // Footer
      footer_text: `© ${new Date().getFullYear()} StolarzNowoczesny. Wszelkie prawa zastrzeżone.`,
      testimonials_title: 'Co Mówią Nasi Klienci',
      footer_company_description: 'Firma BAU GREEN działa na rynku od 2023 roku, specjalizując się w sprzedaży i montażu stolarki otworowej. Oferujemy wysokiej jakości okna, drzwi i rolety, działając zarówno w Polsce, jak i w Niemczech.',
    },
  },
  en: {
    translation: {
      // Hero Section
      hero_title: 'BauGreen',
      hero_subtitle: 'We create unique designs with a passion for wood.',
      hero_cta: 'Discover Our Offer',

      // Navbar
      site_title: 'ModernCarpenter',
      nav_hero: 'Home',
      nav_about: 'About Us',
      nav_offer: 'Our Services',
      nav_portfolio: 'Portfolio',
      nav_contact: 'Contact',

      // About Section
      about_title: 'Discover Our Story',
      about_image_alt: 'Modern interior with wooden elements',
      opis_o_nas: `BAU GREEN has been operating since 2023 but achieved its current form under the direction of Karol Sobocik. Karol gained experience in Germany, where he learned what true quality means in the installation and sale of building joinery. Working in the demanding German market, he became familiar with modern technologies and installation standards, which he now brings to Poland — offering customers European-level service.

Today, BAU GREEN operates in both Poland and Germany. We collaborate with numerous German partners, providing comprehensive sales and installation services for windows, doors, and blinds. Our priorities are reliability, punctuality, and attention to every detail — just as done by our western neighbors.`,

      // Offer Section
      offer_title: 'What Can We Do For You?',
      offer_item_1_title: 'Kitchen Furniture',
      offer_item_1_description: 'Designing and installing functional kitchen furniture tailored to your needs.',
      offer_item_2_title: 'Wardrobes & Closets',
      offer_item_2_description: 'We craft spacious wardrobes and closets that maximize your available space.',
      offer_item_3_title: 'Custom Built-ins',
      offer_item_3_description: 'We deliver unique built-in solutions: staircases, niches, mezzanines and more, according to individual designs.',

      // Portfolio Section
      portfolio_title: 'See Our Projects',
      portfolio_image_1_alt: 'Door Installation',
      portfolio_caption_1: 'Door Installation',
      portfolio_image_2_alt: 'Window Installation',
      portfolio_caption_2: 'Window Installation',
      portfolio_image_3_alt: 'Modern Fittings',
      portfolio_caption_3: 'Modern Fittings',
      portfolio_image_4_alt: 'Fourth portfolio project',
      portfolio_caption_4: 'Distinctive cabinetry design',

      // Contact Section
      contact_title: 'Contact Us',
      contact_info: 'Have questions? We are happy to answer them. Fill out the form or call us.',
      contact_name_placeholder: 'Your Name',
      contact_email_placeholder: 'Your Email',
      contact_message_placeholder: 'Your Message',
      contact_submit_button: 'Send Message',
      contact_company_name: 'BAUGREEN SP Z.O.O (commercial communication: BAU GREEN)',
      contact_address: 'Raciborska 97, 47-480 Maków, Poland',
      contact_nip: 'PL6472603097',
      contact_phone: '+48 609 320 236',
      contact_email1: 'sobocik1991@gmail.com',
      contact_email2: 'baugreen.pl@gmail.com',
      contact_person_name: 'Karol Sobocik',
      contact_person_label: 'Contact person:',
      contact_socials_cta: 'Connect with us:',
      facebook_aria_label: 'Facebook',
      twitter_aria_label: 'Twitter',
      instagram_aria_label: 'Instagram',
      contact_map_title: 'Our Location',
      google_maps_title: 'Location map of BAU GREEN company',
      contact_form_subtitle: 'Write to Us',
      contact_label_name: 'Name',
      contact_label_email: 'Email',
      contact_label_message: 'Message',

      // Footer
      footer_text: `© ${new Date().getFullYear()} ModernCarpenter. All rights reserved.`,
      testimonials_title: 'What Our Clients Say',
      footer_company_description: 'BAU GREEN has been operating on the market since 2023, specializing in the sale and installation of windows, doors, and blinds. We offer high-quality products and operate in both Poland and Germany.',
    },
  },
  de: {
    translation: {
      // Hero Section
      hero_title: 'BauGreen',
      hero_subtitle: 'Wir schaffen einzigartige Designs mit Leidenschaft für Holz.',
      hero_cta: 'Entdecken Sie Unser Angebot',

      // Navbar
      site_title: 'ModernerTischler',
      nav_hero: 'Startseite',
      nav_about: 'Über Uns',
      nav_offer: 'Angebot',
      nav_portfolio: 'Projekte',
      nav_contact: 'Kontakt',

      // About Section
      about_title: 'Entdecken Sie Unsere Geschichte',
      about_image_alt: 'Modernes Interieur mit Holzelementen',
      opis_o_nas: `Die BAU GREEN ist seit 2023 auf dem Markt tätig und hat ihre heutige Form dank einer neuen Ausrichtung unter der Leitung von Karol Sobocik erlangt. Karol sammelte Erfahrungen in Deutschland, wo er lernte, was wahre Qualität bei Montage und Verkauf von Bauelementen bedeutet. 

Durch seine Tätigkeit auf dem anspruchsvollen deutschen Markt kennt er moderne Technologien und Montagestandards, die er nun in Polen einsetzt — und so seinen Kunden Leistungen auf europäischem Niveau bietet.

Heute ist BAU GREEN sowohl in Polen als auch in Deutschland aktiv. Wir arbeiten mit zahlreichen deutschen Partnern zusammen und bieten umfassende Dienstleistungen im Verkauf und Einbau von Fenstern, Türen und Rollläden. Unsere Prioritäten sind Zuverlässigkeit, Pünktlichkeit und Liebe zum Detail — genau wie bei unseren westlichen Nachbarn.`,

      // Offer Section
      offer_title: 'Was Können Wir Für Sie Tun?',
      offer_item_1_title: 'Küchenmöbel',
      offer_item_1_description: 'Wir planen und montieren funktionale Küchenmöbel, die perfekt auf Ihre Bedürfnisse abgestimmt sind.',
      offer_item_2_title: 'Schränke & Garderoben',
      offer_item_2_description: 'Wir fertigen geräumige Schränke und Garderoben, die den vorhandenen Platz optimal nutzen.',
      offer_item_3_title: 'Maßanfertigungen',
      offer_item_3_description: 'Wir realisieren individuelle Einbauten: Treppen, Nischen, Hochböden und mehr, ganz nach Ihren Wünschen.',

      // Portfolio Section
      portfolio_title: 'Sehen Sie Unsere Projekte',
      portfolio_image_1_alt: 'Türinstallation',
      portfolio_caption_1: 'Türinstallation',
      portfolio_image_2_alt: 'Fenstermontage',
      portfolio_caption_2: 'Fenstermontage',
      portfolio_image_3_alt: 'Moderne Einbauten',
      portfolio_caption_3: 'Moderne Einbauten',
      portfolio_image_4_alt: 'Viertes Portfolio-Projekt',
      portfolio_caption_4: 'Charakteristische Schranklösung',

      // Contact Section
      contact_title: 'Kontaktieren Sie Uns',
      contact_info: 'Haben Sie Fragen? Wir beantworten sie gerne. Füllen Sie das Formular aus oder rufen Sie uns an.',
      contact_name_placeholder: 'Ihr Name',
      contact_email_placeholder: 'Ihre E-Mail',
      contact_message_placeholder: 'Ihre Nachricht',
      contact_submit_button: 'Nachricht Senden',
      contact_company_name: 'BAUGREEN SP Z.O.O (Handelskommunikation: BAU GREEN)',
      contact_address: 'Raciborska 97, 47-480 Maków, Polen',
      contact_nip: 'PL6472603097',
      contact_phone: '+48 609 320 236',
      contact_email1: 'sobocik1991@gmail.com',
      contact_email2: 'baugreen.pl@gmail.com',
      contact_person_name: 'Karol Sobocik',
      contact_person_label: 'Ansprechpartner:',
      contact_socials_cta: 'Verbinden Sie sich mit uns:',
      facebook_aria_label: 'Facebook',
      twitter_aria_label: 'Twitter',
      instagram_aria_label: 'Instagram',
      contact_map_title: 'Unser Standort',
      google_maps_title: 'Standortkarte der Firma BAU GREEN',
      contact_form_subtitle: 'Schreiben Sie uns',
      contact_label_name: 'Name',
      contact_label_email: 'Email',
      contact_label_message: 'Nachricht',

      // Footer
      footer_text: `© ${new Date().getFullYear()} ModernerTischler. Alle Rechte vorbehalten.`,
      testimonials_title: 'Was unsere Kunden sagen',
      footer_company_description: 'Die Firma BAU GREEN ist seit 2023 auf dem Markt tätig und spezialisiert sich auf den Verkauf und die Montage von Fenstern, Türen und Rollläden. Wir bieten hochwertige Produkte an und sind sowohl in Polen als auch in Deutschland tätig.',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pl',
    fallbackLng: 'pl',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
