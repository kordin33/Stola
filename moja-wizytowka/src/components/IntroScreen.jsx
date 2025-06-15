// IntroScreen.jsx
"use client";
import React, { useEffect } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from 'tsparticles-slim';
import { motion } from 'framer-motion';
import './IntroScreen.css';

// Simplified SparklesCore using Particles init prop
const SparklesCore = ({
  id,
  background = 'transparent',
  minSize = 0.6,
  maxSize = 1.2,
  speed = 1,
  particleColor = '#ffffff',
  particleDensity = 200
}) => (
  <Particles
    id={id}
    init={loadSlim}
    options={{
      background: { color: { value: background } },
      fullScreen: { enable: false },
      fpsLimit: 120,
      interactivity: { events: { resize: true } },
      particles: {
        number: { value: particleDensity, density: { enable: true, area: 400 } },
        color: { value: particleColor },
        opacity: { value: { min: 0.1, max: 1 }, animation: { enable: true, speed, minimumValue: 0.1 } },
        size: { value: { min: minSize, max: maxSize } },
        move: { enable: true, speed, outModes: { default: 'out' } }
      },
      detectRetina: true
    }}
  />
);

// Main IntroScreen component
const IntroScreen = ({ onAnimationComplete }) => {
  // Auto unmount after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="intro-container">
      {/* Sparkles background */}
      <div className="intro-sparkles">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={200}
          particleColor="#ffffff" // white sparkles
          speed={1}
        />
      </div>

      {/* Logo and subtitle */}
      <div className="intro-content">
        <motion.div
          className="intro-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <span className="baugreen-text">BauGreen</span>
        </motion.div>

        <motion.p
          className="intro-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Tworzymy z Pasją
        </motion.p>
      </div>
    </div>
  );
};

export default IntroScreen;
