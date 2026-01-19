import Card from "./Card";
import "../styles/HowItWorksCard.css";

export default function HowItWorksCard({ step, title, description, image }) {
  return (
    <Card className="how-it-works">
      <span className="card-number" aria-label="Card number">{step}</span>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <img src={image} alt="Filled form" loading="lazy" />
    </Card>
  );
}
