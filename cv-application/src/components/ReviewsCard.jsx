import Card from "./Card";

export default function ReviewsCard({ name, review, ratings }) {
  return (
    <Card className="review-card">
      <h4 className="name">{name}</h4>
      <p className="review">{review}</p>
      <span className="stars">{ratings}</span>
    </Card>
  );
}
