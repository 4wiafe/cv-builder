import ToggleButon from "./ToggleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <ToggleButon
        isOn={isOpen}
        onToggle={onToggle}
        onIcon={<FontAwesomeIcon icon={faChevronUp} />}
        offIcon={<FontAwesomeIcon icon={faChevronDown} />}
        buttonClass="faq-toggle"
        ariaLabel="Toggle FAQ answer"
      >
        <div className="question">
          <h3>{question}</h3>
        </div>
      </ToggleButon>
      {
        isOpen && (
          <div className="faq-answer">
            <p>{answer}</p>
          </div>
        )
      }
    </div>
  );
}
