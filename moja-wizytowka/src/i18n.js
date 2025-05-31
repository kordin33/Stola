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

      // About Page Title & Main Content
      about_page_title: "Tworzymy, Montujemy,<br/> i <0>Realizujemy</0>.",
      about_intro: "Od 2023 roku BAU GREEN działa na rynku stolarki otworowej, łącząc niemieckie standardy jakości z polskim rzemiosłem. Specjalizujemy się w montażu okien i drzwi na najwyższym poziomie.",
      about_cta: "Skontaktuj się z nami",
      about_image_alt: "Karol Sobocik - właściciel BAU GREEN",
      about_quote: "Doświadczenie zdobywane w Niemczech nauczyło mnie, czym jest prawdziwa jakość w montażu stolarki otworowej. Te standardy wprowadzam teraz w Polsce.",
      about_authorName: "Karol Sobocik",
      about_authorTitle: "Założyciel & CEO BAU GREEN",

      // About Section Features
      about_features_quality_title: 'Najwyższa Jakość',
      about_features_quality_description: 'Montaż zgodny z niemieckimi standardami, z dbałością o każdy detal i precyzją wykonania.',
      about_features_experience_title: 'Doświadczenie',
      about_features_experience_description: 'Lata pracy na wymagającym rynku niemieckim przekładają się na usługi najwyższej jakości.',
      about_features_reliability_title: 'Rzetelność',
      about_features_reliability_description: 'Terminowość realizacji zleceń i precyzja wykonania to podstawa naszej współpracy.',
      about_features_service_title: 'Kompleksowa Obsługa',
      about_features_service_description: 'Od doradztwa, przez pomiar, aż po montaż i serwis - wszystko w jednym miejscu.',

      // Offer Header
      offer_header_title: "Nasza Oferta<br/> - <0>Kompleksowe rowziąznia stolarki obrotowej</0>.",
      offer_header_intro_text: "W firmie <0>BAU GREEN</0> stawiamy nie tylko na konkurencyjne ceny, ale przede wszystkim na <1>jakość, terminowość i profesjonalną obsługę</1>. Oferujemy naszym klientom szeroki wybór produktów oraz <2>kompleksową realizację projektów</2> – od dostawy po montaż. <3>Wszystko z jednego źródła</3>.",
      offer_image_alt: "Nowoczesna fasada szklano-stalowa",

      // Offer Section
      offer: {
        mainTitle: "Nasza Oferta – Kompleksowe Rozwiązania Stolarki Otworowej",
        intro: "W firmie BAU GREEN stawiamy nie tylko na konkurencyjne ceny, ale przede wszystkim na jakość, terminowość i profesjonalną obsługę. Oferujemy naszym klientom szeroki wybór produktów oraz kompleksową realizację projektów – od dostawy po montaż. Wszystko z jednego źródła.",
        windowsAndDoors: {
          title: "Okna i Drzwi",
          description: "Dostarczamy i montujemy okna oraz drzwi w systemach:",
          systems: {
            pvc: "PVC i PVC-Alu",
            pvcDetails: "nowoczesne rozwiązania łączące energooszczędność i estetykę",
            wood: "Drewno i drewno-aluminium",
            woodDetails: "klasyka w nowoczesnym wydaniu, idealne dla domów i obiektów premium",
            steel: "Stal",
            steelDetails: "dla obiektów wymagających wyjątkowej trwałości i bezpieczeństwa"
          },
          manufacturers: "Współpracujemy z renomowanymi producentami profili:"
        },
        aluminiumSystems: {
          title: "Systemy Aluminiowe",
          description: "Wykorzystujemy najwyższej klasy profile aluminiowe – idealne do fasad, drzwi wejściowych i przeszkleń wielkogabarytowych.",
          manufacturers: "Partnerzy technologiczni:"
        },
        outro: "Dzięki współpracy z wieloma producentami możemy dopasować produkt do każdego projektu – niezależnie od skali czy stopnia skomplikowania. Nasze systemy sprawdzają się zarówno w nowym budownictwie, jak i w modernizacjach."
      },

      // Contact Section
      contact_title: 'Skontaktuj Się z Nami',
      contact_info_subtitle: 'Dane Kontaktowe',
      contact_company_name: 'BAUGREEN SP Z.O.O (w komunikacji handlowej: BAU GREEN)',
      contact_commercial_name: 'BAU GREEN',
      contact_commercial_communication: 'w komunikacji handlowej:',
      contact_address: 'Raciborska 97, 47-480 Maków, Polska',
      contact_nip: 'PL6472603097',
      contact_phone: '+48 609 320 236',
      contact_email1: 'sobocik1991@gmail.com',
      contact_email2: 'baugreen.pl@gmail.com',
      contact_person_name: 'Karol Sobocik',
      contact_person_label: 'Osoba kontaktowa:',
      contact_address_label: 'Adres:',
      contact_phone_label: 'Telefon:',
      contact_email_label: 'Email główny:',
      contact_email_business_label: 'Email firmowy:',
      contact_socials_cta: 'Połącz się z nami:',
      contact_map_title: 'Nasza Lokalizacja',
      contact_location_description_part1: 'Nasza firma znajduje się w',
      contact_location_city: 'Makowie',
      contact_location_description_part2: ', w województwie śląskim. Jesteśmy',
      contact_location_accessible: 'łatwo dostępni',
      contact_location_description_part3: ' dla klientów z całego regionu i',
      contact_location_ready: 'gotowi na realizację projektów',
      contact_location_description_part4: ' na terenie całej Polski',
      facebook_aria_label: 'Facebook',
      twitter_aria_label: 'Twitter',
      instagram_aria_label: 'Instagram',
      google_maps_title: 'Mapa lokalizacji firmy BAU GREEN',

      // Form fields
      contact_name_placeholder: 'Twoje Imię',
      contact_email_placeholder: 'Twój Email',
      contact_message_placeholder: 'Twoja Wiadomość',
      contact_submit_button: 'Wyślij Wiadomość',
      contact_form_subtitle: 'Napisz do Nas',
      contact_label_name: 'Imię',
      contact_label_email: 'Email',
      contact_label_message: 'Wiadomość',

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

      // Footer
      footer_text: `© ${new Date().getFullYear()} BAU GREEN. Wszelkie prawa zastrzeżone.`,
      testimonials_title: 'Co Mówią Nasi Klienci',
      footer_company_description: 'Firma BAU GREEN działa na rynku od 2023 roku, specjalizując się w sprzedaży i montażu stolarki otworowej. Oferujemy wysokiej jakości okna, drzwi i rolety, działając zarówno w Polsce, jak i w Niemczech.',
    },
  },
  en: {
    translation: {
      // Hero Section
      hero_title: 'BauGreen',
      hero_subtitle: 'We create unique designs with passion.',
      hero_cta: 'Discover Our Offer',

      // Navbar
      site_title: 'BauGreen',
      nav_hero: 'Home',
      nav_about: 'About Us',
      nav_offer: 'Our Services',
      nav_portfolio: 'Portfolio',
      nav_contact: 'Contact',

      // About Page Title & Main Content
      about_page_title: "We Create, We Assemble,<br/> and <0>We Deliver</0>.",
      about_intro: "Since 2023, BAU GREEN has been operating in the window and door joinery market, combining German quality standards with Polish craftsmanship. We specialize in the highest level of window and door installation.",
      about_cta: "Contact us",
      about_image_alt: "Karol Sobocik - owner of BAU GREEN",
      about_quote: "Experience gained in Germany taught me what true quality means in window and door installation. I am now introducing these standards in Poland.",
      about_authorName: "Karol Sobocik",
      about_authorTitle: "Founder & CEO BAU GREEN",

      // About Section Features
      about_features_quality_title: 'Highest Quality',
      about_features_quality_description: 'Installation according to German standards, with attention to every detail and precision.',
      about_features_experience_title: 'Experience',
      about_features_experience_description: 'Years of work in the demanding German market translate into the highest quality services.',
      about_features_reliability_title: 'Reliability',
      about_features_reliability_description: 'Timely execution of orders and precision are the basis of our cooperation.',
      about_features_service_title: 'Comprehensive Service',
      about_features_service_description: 'From consulting, through measurement, to installation and service - all in one place.',

      // Offer Header
      offer_header_title: "Our Offer<br/> - <0>Comprehensive Joinery Solutions</0>.",
      offer_header_intro_text: "At <0>BAU GREEN</0> we focus not only on competitive prices, but above all on <1>quality, timeliness, and professional service</1>. We offer our clients a wide selection of products and <2>comprehensive project implementation</2> – from delivery to installation. <3>Everything from a single source</3>.",
      offer_image_alt: "Modern glass and steel facade",

      // Offer Section
      offer: {
        mainTitle: "Our Offer – Comprehensive Joinery Solutions",
        intro: "At BAU GREEN, we focus not only on competitive prices but above all on quality, timeliness, and professional service. We offer our clients a wide selection of products and comprehensive project implementation – from delivery to installation. Everything from a single source.",
        windowsAndDoors: {
          title: "Windows and Doors",
          description: "We supply and install windows and doors in the following systems:",
          systems: {
            pvc: "PVC and PVC-Alu",
            pvcDetails: "modern solutions combining energy efficiency and aesthetics",
            wood: "Wood and Wood-Aluminum",
            woodDetails: "classic in a modern edition, ideal for premium homes and buildings",
            steel: "Steel",
            steelDetails: "for buildings requiring exceptional durability and security"
          },
          manufacturers: "We cooperate with renowned profile manufacturers:"
        },
        aluminiumSystems: {
          title: "Aluminum Systems",
          description: "We use top-class aluminum profiles – ideal for facades, entrance doors, and large-scale glazing.",
          manufacturers: "Technology partners:"
        },
        outro: "Thanks to cooperation with many manufacturers, we can tailor the product to any project – regardless of scale and complexity. Our systems prove themselves in both new construction and modernizations."
      },

      // Contact Section
      contact_title: 'Contact Us',
      contact_info_subtitle: 'Contact Information',
      contact_company_name: 'BAUGREEN SP Z.O.O (commercial communication: BAU GREEN)',
      contact_commercial_name: 'BAU GREEN',
      contact_commercial_communication: 'commercial communication:',
      contact_address: 'Raciborska 97, 47-480 Maków, Poland',
      contact_nip: 'PL6472603097',
      contact_phone: '+48 609 320 236',
      contact_email1: 'sobocik1991@gmail.com',
      contact_email2: 'baugreen.pl@gmail.com',
      contact_person_name: 'Karol Sobocik',
      contact_person_label: 'Contact person:',
      contact_address_label: 'Address:',
      contact_phone_label: 'Phone:',
      contact_email_label: 'Main email:',
      contact_email_business_label: 'Business email:',
      contact_socials_cta: 'Connect with us:',
      contact_map_title: 'Our Location',
      contact_location_description_part1: 'Our company is located in',
      contact_location_city: 'Maków',
      contact_location_description_part2: ', in the Silesian Voivodeship. We are',
      contact_location_accessible: 'easily accessible',
      contact_location_description_part3: ' to clients from the entire region and',
      contact_location_ready: 'ready to implement projects',
      contact_location_description_part4: ' throughout Poland',
      facebook_aria_label: 'Facebook',
      twitter_aria_label: 'Twitter',
      instagram_aria_label: 'Instagram',
      google_maps_title: 'Location map of BAU GREEN company',

      // Form fields
      contact_name_placeholder: 'Your Name',
      contact_email_placeholder: 'Your Email',
      contact_message_placeholder: 'Your Message',
      contact_submit_button: 'Send Message',
      contact_form_subtitle: 'Write to Us',
      contact_label_name: 'Name',
      contact_label_email: 'Email',
      contact_label_message: 'Message',

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

      // Footer
      footer_text: `© ${new Date().getFullYear()} BAU GREEN. All rights reserved.`,
      testimonials_title: 'What Our Clients Say',
      footer_company_description: 'BAU GREEN has been operating since 2023, specializing in the sale and installation of joinery. We offer high-quality windows, doors, and blinds, operating in both Poland and Germany.',
    },
  },
  de: {
    translation: {
      // Hero Section
      hero_title: 'BauGreen',
      hero_subtitle: 'Wir schaffen einzigartige Designs mit Leidenschaft.',
      hero_cta: 'Entdecken Sie Unser Angebot',

      // Navbar
      site_title: 'BauGreen',
      nav_hero: 'Startseite',
      nav_about: 'Über Uns',
      nav_offer: 'Angebot',
      nav_portfolio: 'Projekte',
      nav_contact: 'Kontakt',

      // About Page Title & Main Content
      about_page_title: "Unser Angebot<br/> - <0>Umfassende Lösungen für den Fenster</0>.",
      about_intro: "Seit 2023 ist BAU GREEN auf dem Markt für Fenster- und Türelemente tätig und verbindet deutsche Qualitätsstandards mit polnischer Handwerkskunst. Wir sind spezialisiert auf die Montage von Fenstern und Türen auf höchstem Niveau.",
      about_cta: "Kontaktieren Sie uns",
      about_image_alt: "Karol Sobocik - Inhaber von BAU GREEN",
      about_quote: 'Die in Deutschland gesammelten Erfahrungen haben mich gelehrt, was wahre Qualität bei der Montage von Fenstern und Türen bedeutet. Diese Standards führe ich jetzt in Polen ein.',
      about_authorName: "Karol Sobocik",
      about_authorTitle: "Gründer & CEO BAU GREEN",

      // About Section Features
      about_features_quality_title: 'Höchste Qualität',
      about_features_quality_description: 'Montage nach deutschen Standards, mit Liebe zum Detail und Präzision.',
      about_features_experience_title: 'Erfahrung',
      about_features_experience_description: 'Jahrelange Arbeit auf dem anspruchsvollen deutschen Markt führt zu Dienstleistungen höchster Qualität.',
      about_features_reliability_title: 'Zuverlässigkeit',
      about_features_reliability_description: 'Termingerechte Ausführung von Aufträgen und Präzision sind die Grundlage unserer Zusammenarbeit.',
      about_features_service_title: 'Umfassender Service',
      about_features_service_description: 'Von der Beratung über das Aufmaß bis hin zur Montage und zum Service – alles aus einer Hand.',

      // Offer Header
      offer_header_title: "Wir Erstellen, Wir Montieren,<br/> und <0>Wir Liefern</0>.",
      offer_header_intro_text: "Bei <0>BAU GREEN</0> setzen wir nicht nur auf wettbewerbsfähige Preise, sondern vor allem auf <1>Qualität, Termintreue und professionellen Service</1>. Wir bieten unseren Kunden eine große Auswahl an Produkten und <2>eine umfassende Projektabwicklung</2> – von der Lieferung bis zur Montage. <3>Alles aus einer Hand</3>.",
      offer_image_alt: "Moderne Glas- und Stahlfassade",

      // Offer Section
      offer: {
        mainTitle: "Unser Angebot – Umfassende Bauelemente-Lösungen",
        intro: "Bei BAU GREEN setzen wir nicht nur auf wettbewerbsfähige Preise, sondern vor allem auf Qualität, Pünktlichkeit und professionellen Service. Wir bieten unseren Kunden eine große Auswahl an Produkten und eine umfassende Projektabwicklung – von der Lieferung bis zur Montage. Alles aus einer Hand.",
        windowsAndDoors: {
          title: "Fenster und Türen",
          description: "Wir liefern und montieren Fenster und Türen in folgenden Systemen:",
          systems: {
            pvc: "PVC und PVC-Alu",
            pvcDetails: "moderne Lösungen, die Energieeffizienz und Ästhetik verbinden",
            wood: "Holz und Holz-Aluminium",
            woodDetails: "Klassik in moderner Ausführung, ideal für Premiumhäuser und -objekte",
            steel: "Stahl",
            steelDetails: "für Objekte, die außergewöhnliche Haltbarkeit und Sicherheit erfordern"
          },
          manufacturers: "Wir arbeiten mit renommierten Profilherstellern zusammen:"
        },
        aluminiumSystems: {
          title: "Aluminiumsysteme",
          description: "Wir verwenden hochwertigste Aluminiumprofile – ideal für Fassaden, Eingangstüren und großflächige Verglasungen.",
          manufacturers: "Technologiepartner:"
        },
        outro: "Dank der Zusammenarbeit mit vielen Herstellern können wir das Produkt an jedes Projekt anpassen – unabhängig von Größe und Komplexität. Unsere Systeme bewähren sich sowohl im Neubau als auch bei Modernisierungen."
      },

      // Contact Section
      contact_title: 'Kontaktieren Sie Uns',
      contact_info_subtitle: 'Kontaktdaten',
      contact_company_name: 'BAUGREEN SP Z.O.O (Handelskommunikation: BAU GREEN)',
      contact_commercial_name: 'BAU GREEN',
      contact_commercial_communication: 'Handelskommunikation:',
      contact_address: 'Raciborska 97, 47-480 Maków, Polen',
      contact_nip: 'PL6472603097',
      contact_phone: '+48 609 320 236',
      contact_email1: 'sobocik1991@gmail.com',
      contact_email2: 'baugreen.pl@gmail.com',
      contact_person_name: 'Karol Sobocik',
      contact_person_label: 'Ansprechpartner:',
      contact_address_label: 'Adresse:',
      contact_phone_label: 'Telefon:',
      contact_email_label: 'Haupt-Email:',
      contact_email_business_label: 'Geschäfts-Email:',
      contact_socials_cta: 'Verbinden Sie sich mit uns:',
      contact_map_title: 'Unser Standort',
      contact_location_description_part1: 'Unser Unternehmen befindet sich in',
      contact_location_city: 'Maków',
      contact_location_description_part2: ', in der Woiwodschaft Schlesien. Wir sind',
      contact_location_accessible: 'leicht erreichbar',
      contact_location_description_part3: ' für Kunden aus der gesamten Region und',
      contact_location_ready: 'bereit zur Projektrealisierung',
      contact_location_description_part4: ' in ganz Polen',
      facebook_aria_label: 'Facebook',
      twitter_aria_label: 'Twitter',
      instagram_aria_label: 'Instagram',
      google_maps_title: 'Standortkarte der Firma BAU GREEN',

      // Form fields
      contact_name_placeholder: 'Ihr Name',
      contact_email_placeholder: 'Ihre E-Mail',
      contact_message_placeholder: 'Ihre Nachricht',
      contact_submit_button: 'Nachricht Senden',
      contact_form_subtitle: 'Schreiben Sie uns',
      contact_label_name: 'Name',
      contact_label_email: 'Email',
      contact_label_message: 'Nachricht',

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

      // Footer
      footer_text: `© ${new Date().getFullYear()} BAU GREEN. Alle Rechte vorbehalten.`,
      testimonials_title: 'Was unsere Kunden sagen',
      footer_company_description: 'BAU GREEN ist seit 2023 tätig und spezialisiert auf den Verkauf und die Montage von Bauelementen. Wir bieten hochwertige Fenster, Türen und Rollläden und sind sowohl in Polen als auch in Deutschland tätig.',
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