import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import your i18n configuration

import IntroScreen from './components/IntroScreen'; // Import IntroScreen
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials'; // Import Testimonials component
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import Footer component

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [theme, setTheme] = useState(() => {
    // Check local storage for saved theme or default to 'light'
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
        <div className={`theme-provider ${theme}-mode`}> {/* Apply theme class to a wrapper */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero />
          <About />
          <Portfolio />
          <Offer />
          <Testimonials /> {/* Add Testimonials component here */}
          <Contact />
          <Footer />
        </div>
      )}
    </I18nextProvider>
  );
}

export default App;
