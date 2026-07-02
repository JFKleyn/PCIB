import { Link } from "react-router-dom";
import "./Footer2.css";

export function Footer2() {
  return (
    <div className="footer2-section">
      <h2>Ready to get started?</h2>
      <p>
        Let us help you find the right cover with expert advice you can trust.
      </p>
      <div className="footer2-buttons">
        <Link to={"/contact"}>
          <button className="footer2-btn1">
            <h5>Book a Consultation</h5>
          </button>
        </Link>
      </div>
    </div>
  );
}
