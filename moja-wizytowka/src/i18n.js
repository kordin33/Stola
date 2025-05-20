import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// TODO: Add actual translations for PL, EN, DE
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const resources = {
  pl: {
    translation: {
      // Hero Section
      hero_title_pl: 'BAU GREEN',
      hero_subtitle_pl: 'Tworzymy unikalne projekty z pasją.',
      hero_cta_pl: 'Odkryj Naszą Ofertę',

      // Navbar
      site_title_pl: 'StolarzNowoczesny', // Example site title
      nav_hero_pl: 'Start',
      nav_about_pl: 'O Firmie',
      nav_offer_pl: 'Oferta',
      nav_portfolio_pl: 'Realizacje',
      nav_contact_pl: 'Kontakt',

      // About Section
      about_title_pl: 'Poznaj Naszą Historię',
      about_image_alt_pl: 'Nowoczesne wnętrze z drewnianymi elementami',
      opis_o_nas: "Firma BAU GREEN działa na rynku od 2023 roku, jednak jej obecna forma to efekt nowego podejścia i kierunku, który nadał jej Karol Sobocik po przejęciu działalności.\n\nKarol zdobywał doświadczenie w Niemczech, gdzie nauczył się, czym jest prawdziwa jakość w montażu i sprzedaży stolarki otworowej. Pracując na wymagającym rynku niemieckim, poznał nowoczesne technologie i standardy montażu, które dziś stara się przenieść na polski grunt – oferując klientom usługi na europejskim poziomie.\n\nObecnie BAU GREEN prowadzi działalność zarówno w Polsce, jak i w Niemczech. Współpracujemy z wieloma partnerami z Niemiec, zapewniając kompleksową obsługę w zakresie sprzedaży i montażu okien, drzwi oraz rolet. Naszym priorytetem jest rzetelność, terminowość i dbałość o każdy detal wykonania – dokładnie tak, jak robi się to u naszych zachodnich sąsiadów.",

      // Offer Section
      offer_title_pl: 'Co Możemy Dla Ciebie Zrobić?',
      offer_item_1_title_pl: 'Meble Kuchenne',
      offer_item_1_description_pl: loremIpsum.substring(0, 100) + "...",
      offer_item_2_title_pl: 'Szafy i Garderoby',
      offer_item_2_description_pl: loremIpsum.substring(0, 120) + "...",
      offer_item_3_title_pl: 'Zabudowy Nietypowe',
      offer_item_3_description_pl: loremIpsum.substring(0, 110) + "...",

      // Portfolio Section
      portfolio_title_pl: 'Zobacz Nasze Projekty',
      portfolio_image_1_alt_pl: 'Realizacja projektu kuchni',
      portfolio_caption_1_pl: 'Nowoczesna kuchnia z wyspą',
      portfolio_image_2_alt_pl: 'Realizacja projektu szafy',
      portfolio_caption_2_pl: 'Elegancka szafa wnękowa',
      portfolio_image_3_alt_pl: 'Realizacja nietypowej zabudowy',
      portfolio_caption_3_pl: 'Kreatywna zabudowa pod schodami',

      // Contact Section
      contact_title_pl: 'Skontaktuj Się z Nami',
      contact_info_pl: 'Masz pytania? Chętnie na nie odpowiemy. Wypełnij formularz lub zadzwoń.',
      contact_name_placeholder_pl: 'Twoje Imię',
      contact_email_placeholder_pl: 'Twój Email',
      contact_message_placeholder_pl: 'Twoja Wiadomość',
      contact_submit_button_pl: 'Wyślij Wiadomość',

      // Footer
      footer_text_pl: `© ${new Date().getFullYear()} StolarzNowoczesny. Wszelkie prawa zastrzeżone.`,
    },
  },
  en: {
    translation: {
      // Hero Section
      hero_title_en: 'Modern Custom Furniture',
      hero_subtitle_en: 'We create unique designs with a passion for wood.',
      hero_cta_en: 'Discover Our Offer',

      // Navbar
      site_title_en: 'ModernCarpenter',
      nav_hero_en: 'Home',
      nav_about_en: 'About Us',
      nav_offer_en: 'Offer',
      nav_portfolio_en: 'Portfolio',
      nav_contact_en: 'Contact',

      // About Section
      about_title_en: 'Discover Our Story',
      about_image_alt_en: 'Modern interior with wooden elements',
      opis_o_nas: "Od lat tworzymy wysokiej jakości drewniane ramy okienne, łącząc tradycyjne rzemiosło z nowoczesną technologią. Specjalizujemy się w produkcji okien, które wyróżniają się trwałością, estetyką oraz doskonałą izolacją termiczną i akustyczną.Każde zlecenie traktujemy indywidualnie — od projektu, przez selekcję materiałów, aż po precyzyjne wykończenie. Pracujemy wyłącznie na sprawdzonym drewnie z certyfikowanych źródeł, dbając o środowisko i zadowolenie naszych klientów. Naszą misją jest tworzenie okien, które nie tylko chronią i izolują, ale też stanowią element stylu i charakteru każdego wnętrza.",

      // Offer Section
      offer_title_en: 'What Can We Do For You?',
      offer_item_1_title_en: 'Kitchen Furniture',
      offer_item_1_description_en: loremIpsum.substring(0, 100) + "...",
      offer_item_2_title_en: 'Wardrobes & Closets',
      offer_item_2_description_en: loremIpsum.substring(0, 120) + "...",
      offer_item_3_title_en: 'Custom Built-ins',
      offer_item_3_description_en: loremIpsum.substring(0, 110) + "...",

      // Portfolio Section
      portfolio_title_en: 'See Our Projects',
      portfolio_image_1_alt_en: 'Kitchen project realization',
      portfolio_caption_1_en: 'Modern kitchen with an island',
      portfolio_image_2_alt_en: 'Wardrobe project realization',
      portfolio_caption_2_en: 'Elegant built-in wardrobe',
      portfolio_image_3_alt_en: 'Custom built-in realization',
      portfolio_caption_3_en: 'Creative under-stairs storage',

      // Contact Section
      contact_title_en: 'Contact Us',
      contact_info_en: 'Have questions? We are happy to answer them. Fill out the form or call us.',
      contact_name_placeholder_en: 'Your Name',
      contact_email_placeholder_en: 'Your Email',
      contact_message_placeholder_en: 'Your Message',
      contact_submit_button_en: 'Send Message',

      // Footer
      footer_text_en: `© ${new Date().getFullYear()} ModernCarpenter. All rights reserved.`,
    },
  },
  de: {
    translation: {
      // Hero Section
      hero_title_de: 'Moderne Maßmöbel',
      hero_subtitle_de: 'Wir schaffen einzigartige Designs mit Leidenschaft für Holz.',
      hero_cta_de: 'Entdecken Sie Unser Angebot',

      // Navbar
      site_title_de: 'ModernerTischler',
      nav_hero_de: 'Startseite',
      nav_about_de: 'Über Uns',
      nav_offer_de: 'Angebot',
      nav_portfolio_de: 'Projekte',
      nav_contact_de: 'Kontakt',

      // About Section
      about_title_de: 'Entdecken Sie Unsere Geschichte',
      about_image_alt_de: 'Modernes Interieur mit Holzelementen',
      opis_o_nas: loremIpsum,

      // Footer Company Description (Placeholder)
      footer_company_description_de: 'Ein Unternehmen, das sich auf moderne Schreinerlösungen spezialisiert hat.',

      // Offer Section
      offer_title_de: 'Was Können Wir Für Sie Tun?',
      offer_item_1_title_de: 'Küchenmöbel',
      offer_item_1_description_de: loremIpsum.substring(0, 100) + "...",
      offer_item_2_title_de: 'Schränke & Garderoben',
      offer_item_2_description_de: loremIpsum.substring(0, 120) + "...",
      offer_item_3_title_de: 'Maßanfertigungen',
      offer_item_3_description_de: loremIpsum.substring(0, 110) + "...",

      // Portfolio Section
      portfolio_title_de: 'Sehen Sie Unsere Projekte',
      portfolio_image_1_alt_de: 'Realisierung Küchenprojekt',
      portfolio_caption_1_de: 'Moderne Küche mit Insel',
      portfolio_image_2_alt_de: 'Realisierung Schrankprojekt',
      portfolio_caption_2_de: 'Eleganter Einbauschrank',
      portfolio_image_3_alt_de: 'Realisierung Maßanfertigung',
      portfolio_caption_3_de: 'Kreativer Stauraum unter der Treppe',

      // Contact Section
      contact_title_de: 'Kontaktieren Sie Uns',
      contact_info_de: 'Haben Sie Fragen? Wir beantworten sie gerne. Füllen Sie das Formular aus oder rufen Sie uns an.',
      contact_name_placeholder_de: 'Ihr Name',
      contact_email_placeholder_de: 'Ihre E-Mail',
      contact_message_placeholder_de: 'Ihre Nachricht',
      contact_submit_button_de: 'Nachricht Senden',

      // Footer
      footer_company_description_de: 'Ein Unternehmen, das sich auf moderne Schreinerlösungen spezialisiert hat.',
      footer_contact_title_de: 'Kontakt',
      contact_address_de: 'Beispieladresse, 12-345 Stadt',
      contact_phone_de: '+48 123 456 789',
      contact_email_de: 'kontakt@moderner-tischler.de',
      footer_links_title_de: 'Nützliche Links',
      footer_link_downloads_de: 'Katalog Herunterladen',
      footer_link_faq_de: 'FAQ',
      footer_link_privacy_de: 'Datenschutzrichtlinie',
      footer_link_rodo_de: 'DSGVO',
      footer_services_title_de: 'Unsere Dienstleistungen', // This key is not used in Footer.jsx anymore, but keeping it in i18n for completeness
      footer_text_de: `© ${new Date().getFullYear()} ModernerTischler. Alle Rechte vorbehalten.`,
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n to react-i18next
  .init({
    resources,
    lng: 'pl', // default language
    fallbackLng: 'pl',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
