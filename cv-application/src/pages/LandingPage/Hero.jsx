import CVImage from "../../assets/cv.jpg";
import "../../styles/Hero.css"

export default function Hero() {
  return (
    <div className="header-container">
      <header>
        <h1>Build a professional CV in minutes, not hours.</h1>
        <p>
          Create, customize, and download a clean, job-ready CV with ease. QuickCV helps you focus on your experience while we handle the design.
        </p>
        <a href="#" className="cta-btn">Create CV</a>
        <img src={CVImage} alt="CV template" loading="lazy" />
      </header>
    </div>
  );
}
