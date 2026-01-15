import "./styles/App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { useState, useEffect } from "react";

const THEME_KEY = "theme";

function getSavedTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_KEY);
    
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return prefersDark ? "dark" : "light";

    } catch (error) {
      console.error("Theme detection failed", error);
      return "light";
  }
}

function App() {
  const [theme, setTheme] = useState(getSavedTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  }

  return (
    <>
      <LandingPage 
        themeMode={theme}
        handleThemeToggle={handleThemeToggle}
      />
    </>
  );
}

export default App
