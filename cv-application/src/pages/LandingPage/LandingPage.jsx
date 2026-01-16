import { useState } from "react";
import Navigation from "./Navigation";
import ToggleButton from "../../components/ToggleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars,  } from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

export default function LandingPage({themeMode, handleThemeToggle}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <Navigation
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
          isOn={themeMode === "light"}
          onToggle={handleThemeToggle}
          onIcon={<FontAwesomeIcon icon={faMoon} className="theme-icon" />}
          offIcon={<FontAwesomeIcon icon={faSun} className="theme-icon" />}
          buttonClass="theme-btn"
          ariaLabel="Theme button"
        />
      }
    />
  );
}
