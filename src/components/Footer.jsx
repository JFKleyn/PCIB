import { Link, NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/Logo.webp";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-content2">
            <img src={logo} alt="Logo2" className="logo" />
            <p>Protecting what matters most with trusted, tailored insurance solutions.</p>
          </div>
          <div className="footer-content">
            <h4>Quick Links</h4>
            <Link to={"/about"}>About</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/compliance"}>Compliance</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
          <div className="footer-content">
            <h4>Contact</h4>
            <div className="contact-item">
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <span>+27 31 266 8870</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <span>james@peterchristieins.co.za</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
              <span>10 Sookhai Pl, Westville, 8870</span>
            </div>
          </div>
        </div>
        <div className="copy">
          <div className="company">
            <small>
              © 2026 Peter Christie Insurance Brokers (Pty) Ltd | All right
              reserved
            </small>
          </div>
          <div className="companydocs">
            <small>
              Powered by <span> </span>
              <a
                href="https://venturetechnologies.co"
                target="_blank"
                rel="noreferrer"
              >
                Venture
              </a>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
