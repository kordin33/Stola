import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import { useTranslation } from 'react-i18next';
import './Navbar.css';

// Import SVG logo as URL
import siteLogoUrl from '../assets/Logo1.png';

const Navbar = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language);
  const [isVisible, setIsVisible] = useState(true); // State for Navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0);
  const timeoutRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) { // Scrolling down
      setIsVisible(false);
    } else { // Scrolling up or at the very top
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to hide after inactivity if not at the top
    if (window.scrollY > 100) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Hide after 3 seconds of inactivity
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [lastScrollY]); // Re-run effect when lastScrollY changes

  // Handle mouse movement to show navbar
  const handleMouseMove = () => {
    // If navbar is hidden and not at the very top, show it on mouse move
    if (!isVisible && window.scrollY > 100) {
      setIsVisible(true);
    }
    // Always reset the timeout on mouse move if scrolling down
    if (window.scrollY > 100) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Hide after 3 seconds of inactivity
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

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
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="navbar"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
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
              >
                {link.name}
              </Link>
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
    </motion.nav>
  )}
</AnimatePresence>
  );
};

export default Navbar;
