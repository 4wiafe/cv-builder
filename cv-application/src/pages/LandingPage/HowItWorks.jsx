import HowItWorksCard from "../../components/HowItWorksCard";
import FormImage from "../../assets/form.jpg";
import "../../assets/cv.jpg";

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <HowItWorksCard
        step={1}
        title="Enter your details"
        description="Fill in your personal information, work experience, education, and skills using our simple, guided form. Everything is structured to help you present your strengths clearly and professionally."
        image={FormImage}
    />
    </section>
  );
}
