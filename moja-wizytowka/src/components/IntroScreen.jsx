import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './IntroScreen.css'; // Import component-specific CSS

const IntroScreen = ({ onAnimationComplete }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  const mainScreenControls = useAnimation(); // Controls for the main screen animation (fade/slide out)

  useEffect(() => {
    const sequence = async () => {
      // Start glare effect after a short delay
      await controls.start({
        x: ["-100%", "200%"],
        opacity: [0, 0.3, 0.5, 0.3, 0], // More subtle glare
        transition: {
          duration: 2, // Slower, smoother glare
          ease: "circInOut", // Smoother ease
          times: [0, 0.3, 0.5, 0.7, 1],
          delay: 0.8, // Delay glare start
        }
      });

      // After internal animations (glare, logo, subtitle) are somewhat complete
      // Wait a bit more, e.g. total 3 seconds from start of component mount
      // Then start the exit animation for the whole screen
      setTimeout(async () => {
        await mainScreenControls.start({
          opacity: 0,
          // y: "-20vh", // Optional: slight slide up effect with fade
          transition: { duration: 0.8, ease: "anticipate" } // Smoother fade out, 'anticipate' gives a nice feel
        });
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }, 3000); // Start exit animation after 3s (adjust based on internal anims)
    };

    sequence();

    // Cleanup function for timeout if component unmounts early
    // return () => clearTimeout(timer); // The timer is inside setTimeout now
  }, [controls, onAnimationComplete, mainScreenControls]);


  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1 }} // Start fully visible
      animate={mainScreenControls} // Controlled by mainScreenControls for exit
      // onAnimationComplete is handled by the sequence now
    >
      {/* Background subtle animation - Apple style: very slow movement or gradient shift */}
      <motion.div
        className="intro-background-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }} // More subtle overlay
        transition={{ duration: 2.5, ease: "easeInOut" }} // Slower fade in for bg
      >
        {/* Inner div for continuous slow movement (example: slow pan) */}
        <motion.div
          className="intro-background-mover" // Style this in CSS with a large gradient or image
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"], // Example: diagonal pan
            // Or scale: [1, 1.05, 1], // Example: very slow zoom in and out
          }}
          transition={{
            duration: 20, // Very long duration for subtle movement
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </motion.div>


      <div className="intro-content-centered">
        {/* Logo */}
        <div className="intro-logo-wrapper">
          <motion.div
            layoutId="logo"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)", y: 20 }} // Start slightly lower
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              y: 0,
              letterSpacing: ["0em", "0.05em"]
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1], // Smoother ease (Quintic Out)
              delay: 0.2, // Start logo animation a bit earlier
              letterSpacing: { delay: 0.5, duration: 0.8 }
            }}
            className="intro-logo-text"
          >
            STOLARZNOWOCZESNY
          </motion.div>

          {/* Glare effect - will be styled in CSS */}
          <motion.div
            className="intro-glare-effect"
            animate={controls} // Already defined to start after delay
            initial={{ x: "-100%", opacity: 0 }}
          />

          {/* Glass reflection - will be styled in CSS */}
          <motion.div
            className="intro-glass-reflection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }} // More subtle reflection
            transition={{ duration: 1.2, delay: 0.7, ease: "circOut" }}
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 0.7, y: 0, filter: "blur(0px)" }} // Slightly more subtle opacity
          transition={{
            duration: 1,
            delay: 1, // Delay subtitle more
            ease: [0.25, 1, 0.5, 1] // Ease Out Quad
          }}
          className="intro-subtitle-text"
        >
          {t('hero_subtitle_pl')}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
