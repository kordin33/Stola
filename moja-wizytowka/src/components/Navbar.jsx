import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Navbar.css'; // Import component-specific CSS

// Import actual assets
// import siteLogo from '../assets/Logo.png'; // Old PNG logo
import siteLogoUrl from '../assets/logo.svg'; // Import SVG as a URL

const Navbar = ({ theme, toggleTheme }) => { // Accept theme and toggleTheme as props
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false); // Removed local dark mode state
  const [language, setLanguage] = useState(i18n.language); // Default language from i18n

  // Using the SVG logo as an image
  const Logo = () => <img src={siteLogoUrl} alt="StolarzNowoczesny Logo" className="navbar-logo-image" />;


  // useEffect(() => { // Removed useEffect for local theme management
  //   // Load theme from local storage
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme === 'dark') {
  //     setIsDarkMode(true);
  //     document.documentElement.classList.add('dark');
  //     document.body.classList.add('dark-mode'); // Add dark-mode class to body
  //   } else {
  //     setIsDarkMode(false);
  //     document.documentElement.classList.remove('dark');
  //     document.body.classList.remove('dark-mode'); // Remove dark-mode class from body
  //   }
  // }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const toggleTheme = () => { // Removed local toggleTheme function
  //   setIsDarkMode(!isDarkMode);
  //   if (!isDarkMode) {
  //     document.documentElement.classList.add('dark');
  //     document.body.classList.add('dark-mode'); // Add dark-mode class to body
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     document.body.classList.remove('dark-mode'); // Remove dark-mode class from body
  //     localStorage.setItem('theme', 'light');
  //   }
  // };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  const navLinks = [
    { name: t('nav_hero_pl'), id: 'hero' },
    { name: t('nav_about_pl'), id: 'about' },
    { name: t('nav_offer_pl'), id: 'offer' },
    { name: t('nav_portfolio_pl'), id: 'portfolio' },
    { name: t('nav_contact_pl'), id: 'contact' },
  ];

  return (
    <nav className="navbar"> {/* Use custom CSS class */}
      <div className="container navbar-container"> {/* Use custom CSS class and global container */}
        <div className="navbar-header"> {/* Use custom CSS class */}
          {/* Logo/Site Title */}
          <motion.div layoutId="logo"> {/* Optional layoutId for shared layout animation */}
             <Logo /> {/* Use the actual Logo component */}
          </motion.div>


          {/* Desktop Navigation */}
          <div className="navbar-links-desktop"> {/* Use custom CSS class */}
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                spy={true} // For scrollspy
                activeClass="active-link" // Use custom CSS class for active link
                className="navbar-link" // Use custom CSS class
              >
                {link.name}
              </ScrollLink>
            ))}

            {/* Language Switcher */}
            <div className="language-switcher"> {/* Use custom CSS class */}
              <button onClick={() => changeLanguage('pl')} className={`language-button ${language === 'pl' ? 'active' : ''}`} >PL</button>
              <button onClick={() => changeLanguage('en')} className={`language-button ${language === 'en' ? 'active' : ''}`} >EN</button>
              <button onClick={() => changeLanguage('de')} className={`language-button ${language === 'de' ? 'active' : ''}`} >DE</button>
            </div>

            {/* Theme Switcher */}
            <button onClick={toggleTheme} className="theme-switcher"> {/* Use custom CSS class */}
              {theme === 'dark' ? '☀️' : '🌙'} {/* Use theme prop */}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button"> {/* Use custom CSS class */}
            {/* Language Switcher (Mobile) */}
            <div className="language-switcher-mobile"> {/* Use custom CSS class */}
              <button onClick={() => changeLanguage('pl')} className={`language-button ${language === 'pl' ? 'active' : ''}`} >PL</button>
              <button onClick={() => changeLanguage('en')} className={`language-button ${language === 'en' ? 'active' : ''}`} >EN</button>
              <button onClick={() => changeLanguage('de')} className={`language-button ${language === 'de' ? 'active' : ''}`} >DE</button>
            </div>

            {/* Theme Switcher (Mobile) */}
            <button onClick={toggleTheme} className="theme-switcher-mobile"> {/* Use custom CSS class */}
              {theme === 'dark' ? '☀️' : '🌙'} {/* Use theme prop */}
            </button>

            <button onClick={toggleMenu} className="hamburger-icon"> {/* Use custom CSS class */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
          transition={{ duration: 0.3 }}
          className={`mobile-menu ${isOpen ? 'open' : ''}`} // Use custom CSS classes
        >
          <div className="mobile-menu-links"> {/* Use custom CSS class */}
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                spy={true} // For scrollspy
                activeClass="active-link" // Use custom CSS class for active link
                className="navbar-link" // Use custom CSS class
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
