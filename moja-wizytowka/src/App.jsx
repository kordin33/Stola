import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Komponenty dla podstron
const HomePage = () => (
  <>
    <Hero />
    <Offer />
    <Contact />
  </>
);

const PortfolioPage = () => <Portfolio />;
const AboutPage = () => <About />;
const TestimonialsPage = () => <Testimonials />;

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    document.body.className = theme + '-mode';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <I18nextProvider i18n={i18n}>
      {showIntro ? (
        <IntroScreen onAnimationComplete={handleIntroComplete} />
      ) : (
        <div className={`theme-provider ${theme}-mode`}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/o-nas" element={<AboutPage />} />
            <Route path="/opinie" element={<TestimonialsPage />} />
          </Routes>
          <Footer />
        </div>
      )}
    </I18nextProvider>
  );
}

export default App;
