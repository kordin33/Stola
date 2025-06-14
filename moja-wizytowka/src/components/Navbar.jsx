import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Zmieniono import
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
    { name: t('nav_hero'), path: '/' },
    { name: t('nav_about'), path: '/o-nas' },
    { name: t('nav_portfolio'), path: '/portfolio' },
    { name: t('nav_testimonials'), path: '/opinie' },
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
              <Link
                to="/"
                className="logo-link"
              >
                <Logo />
              </Link>
            </motion.div>
          </div>

          {/* Desktop Links & Controls */}
          <div className="navbar-links-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path} // Użyj path jako klucza
                to={link.path}
                className="navbar-link"
                // activeClassName="active-link" // react-router-dom v6+ używa NavLink dla activeClassName
              >
                {link.name}
              </Link>
            ))}Pokaż całość

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
              <Link
                key={link.path} // Użyj path jako klucza
                to={link.path}
                className="navbar-link"
                onClick={() => setIsOpen(false)}
                // activeClassName="active-link" // react-router-dom v6+ używa NavLink dla activeClassName
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
