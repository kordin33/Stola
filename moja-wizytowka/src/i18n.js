import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// TODO: Add actual translations for PL, EN, DE
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const resources = {
  pl: {
    translation: {
      // Hero Section
      hero_title: 'BAU GREEN',
      hero_subtitle: 'Tworzymy unikalne projekty z pasją.',
      hero_cta: 'Odkryj Naszą Ofertę',

      // Navbar
      site_title: 'StolarzNowoczesny', // Example site title
      nav_hero: 'Start',
      nav_about: 'O Firmie',
      nav_offer: 'Oferta',
      nav_portfolio: 'Realizacje',
      nav_contact: 'Kontakt',

      // About Section
      about_title: 'Poznaj Naszą Historię',
      about_image_alt: 'Nowoczesne wnętrze z drewnianymi elementami',
      opis_o_nas: "Firma BAU GREEN działa na rynku od 2023 roku, jednak jej obecna forma to efekt nowego podejścia i kierunku, który nadał jej Karol Sobocik po przejęciu działalności.\n\nKarol zdobywał doświadczenie w Niemczech, gdzie nauczył się, czym jest prawdziwa jakość w montażu i sprzedaży stolarki otworowej. Pracując na wymagającym rynku niemieckim, poznał nowoczesne technologie i standardy montażu, które dziś stara się przenieść na polski grunt – oferując klientom usługi na europejskim poziomie.\n\nObecnie BAU GREEN prowadzi działalność zarówno w Polsce, jak i w Niemczech. Współpracujemy z wieloma partnerami z Niemiec, zapewniając kompleksową obsługę w zakresie sprzedaży i montażu okien, drzwi oraz rolet. Naszym priorytetem jest rzetelność, terminowość i dbałość o każdy detal wykonania – dokładnie tak, jak robi się to u naszych zachodnich sąsiadów.",

      // Offer Section
      offer_title: 'Co Możemy Dla Ciebie Zrobić?',
      offer_item_1_title: 'Meble Kuchenne',
      offer_item_1_description: loremIpsum.substring(0, 100) + "...",
      offer_item_2_title: 'Szafy i Garderoby',
      offer_item_2_description: loremIpsum.substring(0, 120) + "...",
      offer_item_3_title: 'Zabudowy Nietypowe',
      offer_item_3_description: loremIpsum.substring(0, 110) + "...",

      // Portfolio Section
      portfolio_title: 'Zobacz Nasze Projekty',
      portfolio_image_1_alt: 'Realizacja projektu kuchni',
      portfolio_caption_1: 'Nowoczesna kuchnia z wyspą',
      portfolio_image_2_alt: 'Realizacja projektu szafy',
      portfolio_caption_2: 'Elegancka szafa wnękowa',
      portfolio_image_3_alt: 'Realizacja nietypowej zabudowy',
      portfolio_caption_3: 'Kreatywna zabudowa pod schodami',
      portfolio_image_4_alt: 'Czwarty projekt portfolio',
      portfolio_caption_4: 'Opis czwartego projektu portfolio',

      // Contact Section
      contact_title: 'Skontaktuj Się z Nami',
      contact_info: 'Masz pytania? Chętnie na nie odpowiemy. Wypełnij formularz lub zadzwoń.',
      contact_name_placeholder: 'Twoje Imię',
      contact_email_placeholder: 'Twój Email',
      contact_message_placeholder: 'Twoja Wiadomość',
      contact_submit_button: 'Wyślij Wiadomość',
      contact_company_name: "BAUGREEN SP Z O O (w komunikacji handlowej: BAU GREEN)",
      contact_address: "Raciborska 97, 47-480 Maków, Polska",
      contact_nip: "PL6472603097",
      contact_phone: "+48 609 320 236",
      contact_email1: "sobocik1991@gmail.com",
      contact_email2: "baugreen.pl@gmail.com",
      contact_person_name: "Karol Sobocik",
      contact_person_label: "Osoba kontaktowa:",
      contact_socials_cta: "Połącz się z nami:",
      facebook_aria_label: "Facebook",
      twitter_aria_label: "Twitter",
      instagram_aria_label: "Instagram",
      contact_map_title: "Nasza Lokalizacja",
      google_maps_title: "Mapa lokalizacji firmy BAU GREEN",
      contact_form_subtitle: "Napisz do Nas",
      contact_label_name: "Imię",
      contact_label_email: "Email",
      contact_label_message: "Wiadomość",

      // Footer
      footer_text: `© ${new Date().getFullYear()} StolarzNowoczesny. Wszelkie prawa zastrzeżone.`,
      testimonials_title: "Co Mówią Nasi Klienci",
      footer_company_description: "Firma BAU GREEN działa na rynku od 2023 roku, specjalizując się w sprzedaży i montażu stolarki otworowej. Oferujemy wysokiej jakości okna, drzwi i rolety, działając zarówno w Polsce, jak i w Niemczech.",
    },
  },
  en: {
    translation: {
      // Hero Section
      hero_title: 'Modern Custom Furniture',
      hero_subtitle: 'We create unique designs with a passion for wood.',
      hero_cta: 'Discover Our Offer',

      // Navbar
      site_title: 'ModernCarpenter',
      nav_hero: 'Home',
      nav_about: 'About Us',
      nav_offer: 'Offer',
      nav_portfolio: 'Portfolio',
      nav_contact: 'Contact',

      // About Section
      about_title: 'Discover Our Story',
      about_image_alt: 'Modern interior with wooden elements',
      opis_o_nas: "Od lat tworzymy wysokiej jakości drewniane ramy okienne, łącząc tradycyjne rzemiosło z nowoczesną technologią. Specjalizujemy się w produkcji okien, które wyróżniają się trwałością, estetyką oraz doskonałą izolacją termiczną i akustyczną.Każde zlecenie traktujemy indywidualnie — od projektu, przez selekcję materiałów, aż po precyzyjne wykończenie. Pracujemy wyłącznie na sprawdzonym drewnie z certyfikowanych źródeł, dbając o środowisko i zadowolenie naszych klientów. Naszą misją jest tworzenie okien, które nie tylko chronią i izolują, ale też stanowią element stylu i charakteru każdego wnętrza.",

      // Offer Section
      offer_title: 'What Can We Do For You?',
      offer_item_1_title: 'Kitchen Furniture',
      offer_item_1_description: loremIpsum.substring(0, 100) + "...",
      offer_item_2_title: 'Wardrobes & Closets',
      offer_item_2_description: loremIpsum.substring(0, 120) + "...",
      offer_item_3_title: 'Custom Built-ins',
      offer_item_3_description: loremIpsum.substring(0, 110) + "...",

      // Portfolio Section
      portfolio_title: 'See Our Projects',
      portfolio_image_1_alt: 'Kitchen project realization',
      portfolio_caption_1: 'Modern kitchen with an island',
      portfolio_image_2_alt: 'Wardrobe project realization',
      portfolio_caption_2: 'Elegant built-in wardrobe',
      portfolio_image_3_alt: 'Custom built-in realization',
      portfolio_caption_3: 'Creative under-stairs storage',
      portfolio_image_4_alt: 'Fourth portfolio project',
      portfolio_caption_4: 'Description of the fourth portfolio project',

      // Contact Section
      contact_title: 'Contact Us',
      contact_info: 'Have questions? We are happy to answer them. Fill out the form or call us.',
      contact_name_placeholder: 'Your Name',
      contact_email_placeholder: 'Your Email',
      contact_message_placeholder: 'Your Message',
      contact_submit_button: 'Send Message',
      contact_company_name: "BAUGREEN SP Z O O (commercial communication: BAU GREEN)",
      contact_address: "Raciborska 97, 47-480 Maków, Poland",
      contact_nip: "PL6472603097",
      contact_phone: "+48 609 320 236",
      contact_email1: "sobocik1991@gmail.com",
      contact_email2: "baugreen.pl@gmail.com",
      contact_person_name: "Karol Sobocik",
      contact_person_label: "Contact person:",
      contact_socials_cta: "Connect with us:",
      facebook_aria_label: "Facebook",
      twitter_aria_label: "Twitter",
      instagram_aria_label: "Instagram",
      contact_map_title: "Our Location",
      google_maps_title: "Location map of BAU GREEN company",
      contact_form_subtitle: "Write to Us",
      contact_label_name: "Name",
      contact_label_email: "Email",
      contact_label_message: "Message",

      // Footer
      footer_text: `© ${new Date().getFullYear()} ModernCarpenter. All rights reserved.`,
      testimonials_title: "What Our Clients Say",
      footer_company_description: "BAU GREEN has been operating on the market since 2023, specializing in the sale and installation of windows, doors, and blinds. We offer high-quality products and operate in both Poland and Germany.",
    },
  },
  de: {
    translation: {
      // Hero Section
      hero_title: 'Moderne Maßmöbel',
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
      opis_o_nas: loremIpsum,

      // Footer Company Description (Placeholder)
      footer_company_description: 'Die Firma BAU GREEN ist seit 2023 auf dem Markt tätig und spezialisiert sich auf den Verkauf und die Montage von Fenstern, Türen und Rollläden. Wir bieten hochwertige Produkte an und sind sowohl in Polen als auch in Deutschland tätig.',

      // Offer Section
      offer_title: 'Was Können Wir Für Sie Tun?',
      offer_item_1_title: 'Küchenmöbel',
      offer_item_1_description: loremIpsum.substring(0, 100) + "...",
      offer_item_2_title: 'Schränke & Garderoben',
      offer_item_2_description: loremIpsum.substring(0, 120) + "...",
      offer_item_3_title: 'Maßanfertigungen',
      offer_item_3_description: loremIpsum.substring(0, 110) + "...",

      // Portfolio Section
      portfolio_title: 'Sehen Sie Unsere Projekte',
      portfolio_image_1_alt: 'Realisierung Küchenprojekt',
      portfolio_caption_1: 'Moderne Küche mit Insel',
      portfolio_image_2_alt: 'Realisierung Schrankprojekt',
      portfolio_caption_2: 'Eleganter Einbauschrank',
      portfolio_image_3_alt: 'Realisierung Maßanfertigung',
      portfolio_caption_3: 'Kreativer Stauraum unter der Treppe',
      portfolio_image_4_alt: 'Viertes Portfolio-Projekt',
      portfolio_caption_4: 'Beschreibung des vierten Portfolio-Projekts',

      // Contact Section
      contact_title: 'Kontaktieren Sie Uns',
      contact_info: 'Haben Sie Fragen? Wir beantworten sie gerne. Füllen Sie das Formular aus oder rufen Sie uns an.',
      contact_name_placeholder: 'Ihr Name',
      contact_email_placeholder: 'Ihre E-Mail',
      contact_message_placeholder: 'Ihre Nachricht',
      contact_submit_button: 'Nachricht Senden',
      contact_company_name: "BAUGREEN SP Z O O (Handelskommunikation: BAU GREEN)",
      contact_address: "Raciborska 97, 47-480 Maków, Polen",
      contact_nip: "PL6472603097",
      contact_phone: "+48 609 320 236",
      contact_email1: "sobocik1991@gmail.com",
      contact_email2: "baugreen.pl@gmail.com",
      contact_person_name: "Karol Sobocik",
      contact_person_label: "Ansprechpartner:",
      contact_socials_cta: "Verbinden Sie sich mit uns:",
      facebook_aria_label: "Facebook",
      twitter_aria_label: "Twitter",
      instagram_aria_label: "Instagram",
      contact_map_title: "Unser Standort",
      google_maps_title: "Standortkarte der Firma BAU GREEN",
      contact_form_subtitle: "Schreiben Sie uns",
      contact_label_name: "Name",
      contact_label_email: "Email",
      contact_label_message: "Nachricht",

      // Footer
      footer_contact_title: 'Kontakt',
      contact_address_de: 'Beispieladresse, 12-345 Stadt', // This is different from the main contact_address, keeping it specific for DE footer if intended
      contact_phone_de: '+48 123 456 789', // This is different from the main contact_phone, keeping it specific for DE footer if intended
      contact_email_de: 'kontakt@moderner-tischler.de', // This is different from the main contact_email1/2, keeping it specific for DE footer if intended
      footer_links_title: 'Nützliche Links',
      footer_link_downloads: 'Katalog Herunterladen',
      footer_link_faq: 'FAQ',
      footer_link_privacy: 'Datenschutzrichtlinie',
      footer_link_rodo: 'DSGVO',
      footer_services_title: 'Unsere Dienstleistungen', // This key is not used in Footer.jsx anymore, but keeping it in i18n for completeness
      footer_text: `© ${new Date().getFullYear()} ModernerTischler. Alle Rechte vorbehalten.`,
      testimonials_title: "Was unsere Kunden sagen",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n to react-i18next
  .init({
    resources,
    lng: 'pl', // default language
    fallbackLng: 'pl',
    debug: true,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
