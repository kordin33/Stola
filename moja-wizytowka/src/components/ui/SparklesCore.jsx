// SparklesCore.jsx
"use client";
import React, { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from 'tsparticles-slim';
import { useAnimation, motion } from 'framer-motion';

export const SparklesCore = ({
  id,
  background = 'transparent',
  minSize = 0.6,
  maxSize = 1.2,
  speed = 1,
  particleColor = '#ffffff',
  particleDensity = 200
}) => {
  const controls = useAnimation();
  const [engineLoaded, setEngineLoaded] = useState(false);

  useEffect(() => {
    loadSlim().then(engine => {
      setEngineLoaded(true);
    });
  }, []);

  const particlesLoaded = () => {
    controls.start({ opacity: 1, transition: { duration: 1 } });
  };

  if (!engineLoaded) return null;

  return (
    <motion.div animate={controls} initial={{ opacity: 0 }} className='sparkles-core'>
      <Particles
        id={id}
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
            move: { enable: true, speed: speed, outModes: { default: 'out' } }
          },
          detectRetina: true
        }}
        loaded={particlesLoaded}
      />
    </motion.div>
  );
};
