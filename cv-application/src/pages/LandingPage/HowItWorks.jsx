import HowItWorksCard from "../../components/HowItWorksCard";
import FormImage from "../../assets/form.jpg";
import CVImage from "../../assets/cv.jpg";
import "../../styles/HowItWorks.css";

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="card-container">
        <HowItWorksCard
          step={1}
          title="Enter your details"
          description="Fill in your personal information, work experience, education, and skills using our simple, guided form. Everything is structured to help you present your strengths clearly and professionally."
          image={FormImage}
        />
        <HowItWorksCard
          step={2}
          title="Download your CV"
          description="Once you're satisfied, download your CV instantly. You can always come back later to edit or update it as your experience grows."
          image={CVImage}
        />
      </div>
    </section>
  );
}
