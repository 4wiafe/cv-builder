import ReviewsCard from "../../components/ReviewsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Reviews() {
  return (
    <section id="reviews-section">
      <h2 className="reviews-title">Reviews</h2>
      <div className="ratings-count">
        <span className="rating-overview">4 / 5</span>
        <span className="stars">
          {<FontAwesomeIcon icon={faStar} className="star-icon" />}
          {<FontAwesomeIcon icon={faStar} className="star-icon" />}
          {<FontAwesomeIcon icon={faStar} className="star-icon" />}
          {<FontAwesomeIcon icon={faStar} className="star-icon" />}
          {<FontAwesomeIcon icon={faStar} className="star-icon-nofill" />}
        </span>
        <p className="rating-summary">
          Based on 5,954 reviews
        </p>
      </div>
      <ReviewsCard
        name="Richmond Wiafe"
        review="I created a modern, polished resume in under 30 minutes. The templates are clean, easy to use, and far better than my old resume. Highly recommended."
        ratings={
          <>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </>
        }
      />
      <ReviewsCard
        name="Richmond Wiafe"
        review="This tool made presenting my work experience incredibly clear. Exporting to PDF was seamless, and the formatting stayed clean and professional. A must-have for job seekers."
        ratings={
          <>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </>
        }
      />
      <ReviewsCard
        name="Nana Kwame"
        review="Beautiful layouts and a well-structured flow. I started receiving compliments on my resume almost immediately. The app delivers exactly what it promises."
        ratings={
          <>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </>
        }
      />
      <ReviewsCard
        name="Richmond Wiafe"
        review="I needed a professional resume fast for a last-minute application, and this platform delivered. The process was intuitive, and the final result exceeded my expectations."
        ratings={
          <>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </>
        }
      />
    </section>
  );
}
