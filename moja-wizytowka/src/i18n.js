import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pl: {
    translation: {
      // Hero Section
      hero_title_pl: 'BAU GREEN', // Used in Hero.jsx, IntroScreen.jsx
      hero_subtitle_pl: 'Tworzymy unikalne projekty z pasją.', // Used in Hero.jsx, IntroScreen.jsx
      hero_cta_pl: 'Odkryj Naszą Ofertę', // Used in Hero.jsx
      hero_logo_alt: 'BauGreen Logo', // Used in Hero.jsx

      // Navbar
      nav_hero_pl: 'Start',
      nav_about_pl: 'O Firmie',
      nav_offer_pl: 'Oferta',
      nav_portfolio_pl: 'Realizacje',
      nav_contact_pl: 'Kontakt',
      navbar_logo_alt: 'BauGreen Logo firmowe - Nawigacja', // Used in Navbar.jsx

      // About Section
      about_title_pl: 'Poznaj Naszą Historię',
      about_image_alt_pl: 'Nowoczesne wnętrze z drewnianymi elementami', // TODO: Update alt based on actual image (stolarz-1.jpeg)
      opis_o_nas: "Firma BAU GREEN działa na rynku od 2023 roku, jednak jej obecna forma to efekt nowego podejścia i kierunku, który nadał jej Karol Sobocik po przejęciu działalności.\n\nKarol zdobywał doświadczenie w Niemczech, gdzie nauczył się, czym jest prawdziwa jakość w montażu i sprzedaży stolarki otworowej. Pracując na wymagającym rynku niemieckim, poznał nowoczesne technologie i standardy montażu, które dziś stara się przenieść na polski grunt – oferując klientom usługi na europejskim poziomie.\n\nObecnie BAU GREEN prowadzi działalność zarówno w Polsce, jak i w Niemczech. Współpracujemy z wieloma partnerami z Niemiec, zapewniając kompleksową obsługę w zakresie sprzedaży i montażu okien, drzwi oraz rolet. Naszym priorytetem jest rzetelność, terminowość i dbałość o każdy detal wykonania – dokładnie tak, jak robi się to u naszych zachodnich sąsiadów.",

      // Offer Section
      offer_title_pl: 'Co Możemy Dla Ciebie Zrobić?',
      offer_item_1_title_pl: 'Konstrukcje Stalowe',
      offer_item_1_description_pl: 'Projektujemy, wykonujemy i montujemy hale, magazyny, wiaty oraz inne konstrukcje stalowe na indywidualne zamówienie.',
      offer_item_2_title_pl: 'Konstrukcje Aluminiowe',
      offer_item_2_description_pl: 'Oferujemy lekkie i wytrzymałe konstrukcje aluminiowe, takie jak fasady, ogrody zimowe, zadaszenia i balustrady.',
      offer_item_3_title_pl: 'Usługi Spawalnicze',
      offer_item_3_description_pl: 'Świadczymy profesjonalne usługi spawalnicze metodami MIG, MAG, TIG dla stali czarnej, nierdzewnej i aluminium.',

      // Portfolio Section
      portfolio_title_pl: 'Zobacz Nasze Projekty',
      portfolio_image_1_alt_pl: 'Realizacja projektu hali stalowej',
      portfolio_caption_1_pl: 'Nowoczesna hala produkcyjna',
      portfolio_image_2_alt_pl: 'Realizacja fasady aluminiowej',
      portfolio_caption_2_pl: 'Elegancka fasada biurowca',
      portfolio_image_3_alt_pl: 'Precyzyjne spawanie konstrukcji',
      portfolio_caption_3_pl: 'Detal spawanej konstrukcji stalowej',

      // Contact Section
      contact_title_pl: 'Skontaktuj Się z Nami', // Used in Contact.jsx
      contact_info_subtitle_pl: "Dane Kontaktowe", // Used in Contact.jsx
      contact_form_subtitle_pl: "Napisz do Nas", // Used in Contact.jsx
      contact_name_placeholder: 'Twoje Imię', // Used in Contact.jsx
      contact_email_placeholder: 'Twój Email', // Used in Contact.jsx
      contact_message_placeholder: 'Twoja Wiadomość', // Used in Contact.jsx
      contact_submit_button_pl: 'Wyślij Wiadomość', // Used in Contact.jsx
      contact_nip_label: 'NIP:', // Used in Contact.jsx
      contact_bank_account_label: 'Numer konta:', // Used in Contact.jsx
      contact_person_label: 'Osoba kontaktowa:', // Used in Contact.jsx
      contact_socials_cta_pl: "Połącz się z nami:", // Used in Contact.jsx
      facebook_aria_label: 'Facebook', // Used in Contact.jsx
      twitter_aria_label: 'Twitter', // Used in Contact.jsx
      instagram_aria_label: 'Instagram', // Used in Contact.jsx
      google_maps_title_pl: "Mapa Google z lokalizacją Warszawa, Polska", // Used in Contact.jsx (default for map)
      contact_label_name_pl: "Imię", // Used in Contact.jsx
      contact_label_email_pl: "Email", // Used in Contact.jsx
      contact_label_message_pl: "Wiadomość", // Used in Contact.jsx


      // Testimonials Section
      testimonials_title: "Co Mówią Nasi Klienci", // Used in Testimonials.jsx
      testimonial_1_name: "Patryk Stanowski",
      testimonial_1_text: "Współpraca przebiegła sprawnie i bezproblemowo. Terminowość, profesjonalne podejście oraz doskonała komunikacja – to cechy, które wyróżniają tę firmę na tle innych. Zdecydowanie polecam każdemu, kto ceni sobie jakość i rzetelność.",
      testimonial_1_company: "Human Invest",
      testimonial_2_name: "Zespół BAU Service",
      testimonial_2_text: "Rzadko spotyka się tak solidnych wykonawców. Wszystko zostało zrealizowane zgodnie z ustaleniami, a efekt końcowy przerósł nasze oczekiwania. Jesteśmy bardzo zadowoleni i na pewno jeszcze nie raz skorzystamy z ich usług.",
      testimonial_2_company: "BAU Service",
      testimonial_3_name: "Fenubis Fenster",
      testimonial_3_text: "Bardzo niezawodny partner, na którym można polegać. Współpraca była nieskomplikowana i efektywna, wszystkie prace zostały wykonane punktualnie i w najlepszej jakości. Cieszymy się na kolejne wspólne projekty.",
      testimonial_3_company: "Fenubis Fenster",

      // Footer
      site_title: 'BauGreen - Konstrukcje Stalowe i Aluminiowe', // Used in Footer.jsx logo alt
      footer_company_description: 'BauGreen specjalizuje się w kompleksowej budowie i montażu konstrukcji stalowych oraz aluminiowych, oferując również profesjonalne usługi spawalnicze.', // Used in Footer.jsx
      footer_text: `© ${new Date().getFullYear()} BauGreen. Wszelkie prawa zastrzeżone.`, // Used in Footer.jsx (key was footer_text_pl)
    },
  },
  en: {
    translation: {
      // Hero Section
      hero_title_pl: 'BAU GREEN', // Key from component
      hero_subtitle_pl: '[TRANSLATE] Tworzymy unikalne projekty z pasją.', // Key from component
      hero_cta_pl: '[TRANSLATE] Odkryj Naszą Ofertę', // Key from component
      hero_logo_alt: '[TRANSLATE] BauGreen Logo',

      // Navbar
      nav_hero_pl: 'Home', // Key from component
      nav_about_pl: 'About Us', // Key from component
      nav_offer_pl: 'Offer', // Key from component
      nav_portfolio_pl: 'Portfolio', // Key from component
      nav_contact_pl: 'Contact', // Key from component
      navbar_logo_alt: '[TRANSLATE] BauGreen Company Logo - Navigation',

      // About Section
      about_title_pl: '[TRANSLATE] Poznaj Naszą Historię', // Key from component
      about_image_alt_pl: '[TRANSLATE] Modern interior with wooden elements', // Key from component
      opis_o_nas: "[TRANSLATE] Firma BAU GREEN działa na rynku od 2023 roku, jednak jej obecna forma to efekt nowego podejścia i kierunku, który nadał jej Karol Sobocik po przejęciu działalności.\n\nKarol zdobywał doświadczenie w Niemczech, gdzie nauczył się, czym jest prawdziwa jakość w montażu i sprzedaży stolarki otworowej. Pracując na wymagającym rynku niemieckim, poznał nowoczesne technologie i standardy montażu, które dziś stara się przenieść na polski grunt – oferując klientom usługi na europejskim poziomie.\n\nObecnie BAU GREEN prowadzi działalność zarówno w Polsce, jak i w Niemczech. Współpracujemy z wieloma partnerami z Niemiec, zapewniając kompleksową obsługę w zakresie sprzedaży i montażu okien, drzwi oraz rolet. Naszym priorytetem jest rzetelność, terminowość i dbałość o każdy detal wykonania – dokładnie tak, jak robi się to u naszych zachodnich sąsiadów.",

      // Offer Section
      offer_title_pl: '[TRANSLATE] Co Możemy Dla Ciebie Zrobić?', // Key from component
      offer_item_1_title_pl: '[TRANSLATE] Konstrukcje Stalowe', // Key from component
      offer_item_1_description_pl: '[TRANSLATE] Projektujemy, wykonujemy i montujemy hale, magazyny, wiaty oraz inne konstrukcje stalowe na indywidualne zamówienie.', // Key from component
      offer_item_2_title_pl: '[TRANSLATE] Konstrukcje Aluminiowe', // Key from component
      offer_item_2_description_pl: '[TRANSLATE] Oferujemy lekkie i wytrzymałe konstrukcje aluminiowe, takie jak fasady, ogrody zimowe, zadaszenia i balustrady.', // Key from component
      offer_item_3_title_pl: '[TRANSLATE] Usługi Spawalnicze', // Key from component
      offer_item_3_description_pl: '[TRANSLATE] Świadczymy profesjonalne usługi spawalnicze metodami MIG, MAG, TIG dla stali czarnej, nierdzewnej i aluminium.', // Key from component

      // Portfolio Section
      portfolio_title_pl: '[TRANSLATE] Zobacz Nasze Projekty', // Key from component
      portfolio_image_1_alt_pl: '[TRANSLATE] Realizacja projektu hali stalowej', // Key from component
      portfolio_caption_1_pl: '[TRANSLATE] Nowoczesna hala produkcyjna', // Key from component
      portfolio_image_2_alt_pl: '[TRANSLATE] Realizacja fasady aluminiowej', // Key from component
      portfolio_caption_2_pl: '[TRANSLATE] Elegancka fasada biurowca', // Key from component
      portfolio_image_3_alt_pl: '[TRANSLATE] Precyzyjne spawanie konstrukcji', // Key from component
      portfolio_caption_3_pl: '[TRANSLATE] Detal spawanej konstrukcji stalowej', // Key from component

      // Contact Section
      contact_title_pl: '[TRANSLATE] Skontaktuj Się z Nami', // Key from component
      contact_info_subtitle_pl: "[TRANSLATE] Dane Kontaktowe", // Key from component
      contact_form_subtitle_pl: "[TRANSLATE] Napisz do Nas", // Key from component
      contact_name_placeholder: '[TRANSLATE] Twoje Imię',
      contact_email_placeholder: '[TRANSLATE] Twój Email',
      contact_message_placeholder: '[TRANSLATE] Twoja Wiadomość',
      contact_submit_button_pl: '[TRANSLATE] Wyślij Wiadomość', // Key from component
      contact_nip_label: '[TRANSLATE] NIP:',
      contact_bank_account_label: '[TRANSLATE] Numer konta:',
      contact_person_label: '[TRANSLATE] Osoba kontaktowa:',
      contact_socials_cta_pl: "[TRANSLATE] Połącz się z nami:", // Key from component
      facebook_aria_label: 'Facebook', // Already international
      twitter_aria_label: 'Twitter', // Already international
      instagram_aria_label: 'Instagram', // Already international
      google_maps_title_pl: "[TRANSLATE] Mapa Google z lokalizacją Warszawa, Polska", // Key from component
      contact_label_name_pl: "[TRANSLATE] Imię", // Key from component
      contact_label_email_pl: "[TRANSLATE] Email", // Key from component
      contact_label_message_pl: "[TRANSLATE] Wiadomość", // Key from component

      // Testimonials Section
      testimonials_title: "[TRANSLATE] Co Mówią Nasi Klienci",
      testimonial_1_name: "[TRANSLATE] Patryk Stanowski",
      testimonial_1_text: "[TRANSLATE] Współpraca przebiegła sprawnie i bezproblemowo. Terminowość, profesjonalne podejście oraz doskonała komunikacja – to cechy, które wyróżniają tę firmę na tle innych. Zdecydowanie polecam każdemu, kto ceni sobie jakość i rzetelność.",
      testimonial_1_company: "[TRANSLATE] Human Invest",
      testimonial_2_name: "[TRANSLATE] Zespół BAU Service",
      testimonial_2_text: "[TRANSLATE] Rzadko spotyka się tak solidnych wykonawców. Wszystko zostało zrealizowane zgodnie z ustaleniami, a efekt końcowy przerósł nasze oczekiwania. Jesteśmy bardzo zadowoleni i na pewno jeszcze nie raz skorzystamy z ich usług.",
      testimonial_2_company: "[TRANSLATE] BAU Service",
      testimonial_3_name: "[TRANSLATE] Fenubis Fenster",
      testimonial_3_text: "[TRANSLATE] Bardzo niezawodny partner, na którym można polegać. Współpraca była nieskomplikowana i efektywna, wszystkie prace zostały wykonane punktualnie i w najlepszej jakości. Cieszymy się na kolejne wspólne projekty.",
      testimonial_3_company: "[TRANSLATE] Fenubis Fenster",

      // Footer
      site_title: '[TRANSLATE] BauGreen - Steel and Aluminum Structures',
      footer_company_description: '[TRANSLATE] BauGreen specializes in the comprehensive construction and assembly of steel and aluminum structures, also offering professional welding services.',
      footer_text: `© ${new Date().getFullYear()} BauGreen. All rights reserved.`,
    },
  },
  de: {
    translation: {
      // Hero Section
      hero_title_pl: 'BAU GREEN', // Key from component
      hero_subtitle_pl: '[TRANSLATE] Tworzymy unikalne projekty z pasją.', // Key from component
      hero_cta_pl: '[TRANSLATE] Odkryj Naszą Ofertę', // Key from component
      hero_logo_alt: '[TRANSLATE] BauGreen Logo',

      // Navbar
      nav_hero_pl: 'Startseite', // Key from component
      nav_about_pl: 'Über Uns', // Key from component
      nav_offer_pl: 'Angebot', // Key from component
      nav_portfolio_pl: 'Projekte', // Key from component
      nav_contact_pl: 'Kontakt', // Key from component
      navbar_logo_alt: '[TRANSLATE] BauGreen Firmenlogo - Navigation',

      // About Section
      about_title_pl: '[TRANSLATE] Poznaj Naszą Historię', // Key from component
      about_image_alt_pl: '[TRANSLATE] Modernes Interieur mit Holzelementen', // Key from component
      opis_o_nas: "[TRANSLATE] Firma BAU GREEN działa na rynku od 2023 roku, jednak jej obecna forma to efekt nowego podejścia i kierunku, który nadał jej Karol Sobocik po przejęciu działalności.\n\nKarol zdobywał doświadczenie w Niemczech, gdzie nauczył się, czym jest prawdziwa jakość w montażu i sprzedaży stolarki otworowej. Pracując na wymagającym rynku niemieckim, poznał nowoczesne technologie i standardy montażu, które dziś stara się przenieść na polski grunt – oferując klientom usługi na europejskim poziomie.\n\nObecnie BAU GREEN prowadzi działalność zarówno w Polsce, jak i w Niemczech. Współpracujemy z wieloma partnerami z Niemiec, zapewniając kompleksową obsługę w zakresie sprzedaży i montażu okien, drzwi oraz rolet. Naszym priorytetem jest rzetelność, terminowość i dbałość o każdy detal wykonania – dokładnie tak, jak robi się to u naszych zachodnich sąsiadów.",

      // Offer Section
      offer_title_pl: '[TRANSLATE] Co Możemy Dla Ciebie Zrobić?', // Key from component
      offer_item_1_title_pl: '[TRANSLATE] Konstrukcje Stalowe', // Key from component
      offer_item_1_description_pl: '[TRANSLATE] Projektujemy, wykonujemy i montujemy hale, magazyny, wiaty oraz inne konstrukcje stalowe na indywidualne zamówienie.', // Key from component
      offer_item_2_title_pl: '[TRANSLATE] Konstrukcje Aluminiowe', // Key from component
      offer_item_2_description_pl: '[TRANSLATE] Oferujemy lekkie i wytrzymałe konstrukcje aluminiowe, takie jak fasady, ogrody zimowe, zadaszenia i balustrady.', // Key from component
      offer_item_3_title_pl: '[TRANSLATE] Usługi Spawalnicze', // Key from component
      offer_item_3_description_pl: '[TRANSLATE] Świadczymy profesjonalne usługi spawalnicze metodami MIG, MAG, TIG dla stali czarnej, nierdzewnej i aluminium.', // Key from component

      // Portfolio Section
      portfolio_title_pl: '[TRANSLATE] Zobacz Nasze Projekty', // Key from component
      portfolio_image_1_alt_pl: '[TRANSLATE] Realizacja projektu hali stalowej', // Key from component
      portfolio_caption_1_pl: '[TRANSLATE] Nowoczesna hala produkcyjna', // Key from component
      portfolio_image_2_alt_pl: '[TRANSLATE] Realizacja fasady aluminiowej', // Key from component
      portfolio_caption_2_pl: '[TRANSLATE] Elegancka fasada biurowca', // Key from component
      portfolio_image_3_alt_pl: '[TRANSLATE] Precyzyjne spawanie konstrukcji', // Key from component
      portfolio_caption_3_pl: '[TRANSLATE] Detal spawanej konstrukcji stalowej', // Key from component

      // Contact Section
      contact_title_pl: '[TRANSLATE] Skontaktuj Się z Nami', // Key from component
      contact_info_subtitle_pl: "[TRANSLATE] Dane Kontaktowe", // Key from component
      contact_form_subtitle_pl: "[TRANSLATE] Napisz do Nas", // Key from component
      contact_name_placeholder: '[TRANSLATE] Ihr Name',
      contact_email_placeholder: '[TRANSLATE] Ihre E-Mail',
      contact_message_placeholder: '[TRANSLATE] Ihre Nachricht',
      contact_submit_button_pl: '[TRANSLATE] Nachricht Senden', // Key from component
      contact_nip_label: '[TRANSLATE] NIP:',
      contact_bank_account_label: '[TRANSLATE] Kontonummer:',
      contact_person_label: '[TRANSLATE] Ansprechpartner:',
      contact_socials_cta_pl: "[TRANSLATE] Połącz się z nami:", // Key from component
      facebook_aria_label: 'Facebook', // Already international
      twitter_aria_label: 'Twitter', // Already international
      instagram_aria_label: 'Instagram', // Already international
      google_maps_title_pl: "[TRANSLATE] Google Maps mit Standort Warschau, Polen", // Key from component
      contact_label_name_pl: "[TRANSLATE] Name", // Key from component
      contact_label_email_pl: "[TRANSLATE] Email", // Key from component
      contact_label_message_pl: "[TRANSLATE] Nachricht", // Key from component

      // Testimonials Section
      testimonials_title: "[TRANSLATE] Was unsere Kunden sagen",
      testimonial_1_name: "[TRANSLATE] Patryk Stanowski",
      testimonial_1_text: "[TRANSLATE] Współpraca przebiegła sprawnie i bezproblemowo. Terminowość, profesjonalne podejście oraz doskonała komunikacja – to cechy, które wyróżniają tę firmę na tle innych. Zdecydowanie polecam każdemu, kto ceni sobie jakość i rzetelność.",
      testimonial_1_company: "[TRANSLATE] Human Invest",
      testimonial_2_name: "[TRANSLATE] Zespół BAU Service",
      testimonial_2_text: "[TRANSLATE] Rzadko spotyka się tak solidnych wykonawców. Wszystko zostało zrealizowane zgodnie z ustaleniami, a efekt końcowy przerósł nasze oczekiwania. Jesteśmy bardzo zadowoleni i na pewno jeszcze nie raz skorzystamy z ich usług.",
      testimonial_2_company: "[TRANSLATE] BAU Service",
      testimonial_3_name: "[TRANSLATE] Fenubis Fenster",
      testimonial_3_text: "[TRANSLATE] Bardzo niezawodny partner, na którym można polegać. Współpraca była nieskomplikowana i efektywna, wszystkie prace zostały wykonane punktualnie i w najlepszej jakości. Cieszymy się na kolejne wspólne projekty.",
      testimonial_3_company: "[TRANSLATE] Fenubis Fenster",

      // Footer
      site_title: '[TRANSLATE] BauGreen - Stahl- und Aluminiumkonstruktionen',
      footer_company_description: '[TRANSLATE] BauGreen ist spezialisiert auf den umfassenden Bau und die Montage von Stahl- und Aluminiumkonstruktionen und bietet auch professionelle Schweißdienstleistungen an.',
      footer_text: `© ${new Date().getFullYear()} BauGreen. Alle Rechte vorbehalten.`,
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
    // debug: true, // Uncomment to see logs from i18next
  });

export default i18n;
