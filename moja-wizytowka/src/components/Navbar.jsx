import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Navbar.css'; // Import component-specific CSS

// Import SVG logo as URL
import siteLogoUrl from '../assets/Logo1.png';

const Navbar = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language);

  const Logo = () => (
    <img
      src={siteLogoUrl}
      alt="StolarzNowoczesny Logo"
      className="navbar-logo-image"
    />
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('nav_hero_pl'), id: 'hero' },
    { name: t('nav_about_pl'), id: 'about' },
    { name: t('nav_offer_pl'), id: 'offer' },
    { name: t('nav_portfolio_pl'), id: 'portfolio' },
    { name: t('nav_contact_pl'), id: 'contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-header">

          {/* Logo */}
          <div className="navbar-logo-container">
            <motion.div
              className="navbar-motion-logo"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ScrollLink
                to="hero"
                smooth
                duration={500}
                spy
                offset={-80} // Adjust for fixed navbar height
                className="logo-link"
              >
                <Logo />
              </ScrollLink>
            </motion.div>
          </div>

          {/* Desktop Links & Controls */}
          <div className="navbar-links-desktop">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                smooth
                duration={500}
                spy
                offset={-80}
                activeClass="active-link"
                className="navbar-link"
              >
                {link.name}
              </ScrollLink>
            ))}

            {/* Language Switcher */}
            <div className="language-switcher">
              {['pl', 'en', 'de'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`language-button ${language === lang ? 'active' : ''}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="theme-switcher"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            {/* Language (Mobile) */}
            <div className="language-switcher-mobile">
              {['pl', 'en', 'de'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`language-button ${language === lang ? 'active' : ''}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme (Mobile) */}
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="theme-switcher-mobile"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Hamburger Icon */}
            <button
              onClick={toggleMenu}
              className="hamburger-icon"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
          transition={{ duration: 0.3 }}
          className={`mobile-menu ${isOpen ? 'open' : ''}`}
        >
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                smooth
                duration={500}
                spy
                offset={-80}
                activeClass="active-link"
                className="navbar-link"
                onClick={() => setIsOpen(false)}
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
