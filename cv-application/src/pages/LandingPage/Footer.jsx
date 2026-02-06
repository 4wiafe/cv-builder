import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="resources-container">
        <h3 className="support">Support</h3>
        <a href="#faq">FAQ</a>
        <a href="#">Contact Us</a>
        <a href="#">General terms and conditions</a>
        <a href="#">Privacy policy</a>
      </div>

      <div className="qcv-container">
        <h3 className="qcv">Quick CV</h3>
        <a href="#">About us</a>
        <a href="#">Reviews</a>
      </div>

      <div className="socials-container">
        <span><FontAwesomeIcon icon={faFacebook} /></span>
        <span><FontAwesomeIcon icon={faLinkedin} /></span>
        <span><FontAwesomeIcon icon={faXTwitter} /></span>
        <span><FontAwesomeIcon icon={faTiktok} /></span>
      </div>
    </footer>
  );
}
