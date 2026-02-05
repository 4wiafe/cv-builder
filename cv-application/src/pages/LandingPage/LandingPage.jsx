import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Reviews from "./Reviews";
import FAQSection from "./FAQSection";
import Footer from "../LandingPage/Footer";
import ToggleButton from "../../components/ToggleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars,  } from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

export default function LandingPage({themeMode, handleThemeToggle}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (isMenuOpen) {
       document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      <Navigation
        menuOpen={isMenuOpen}
        onLinkClick={closeMenu}
        menuButton=
          {
            <ToggleButton 
              isOn={isMenuOpen} 
              onToggle={handleMenuToggle}
              onIcon={<FontAwesomeIcon icon={faXmark} className="menu-icon" />}
              offIcon={<FontAwesomeIcon icon={faBars} className="menu-icon" />}
              buttonClass="menu-btn"
              ariaLabel="Menu button"
            />
          }
      
        themeButton={
          <ToggleButton
            isOn={themeMode === "dark"}
            onToggle={handleThemeToggle}
            onIcon={<FontAwesomeIcon icon={faSun} className="theme-icon" />}
            offIcon={<FontAwesomeIcon icon={faMoon} className="theme-icon" />}
            buttonClass="theme-btn"
            ariaLabel="Theme button"
          />
          }
      />
      <main>
        <Hero />
        <HowItWorks />
        <Reviews />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
