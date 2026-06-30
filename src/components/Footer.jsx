import { Link, NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            {/* <img src={Logo} alt="Logo2" className="logo" /> */}
            <p>KZN’s leading solution provider for precision manufacturing.</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/MylesCrosthwaiteServices" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="icon" icon={faFacebook} />
              </a>

              <a href="https://www.instagram.com/mcswdhearn/?hl=en" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </a>

              <a href="https://www.linkedin.com/in/myles-crosthwaite/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </a>

              <a
                href="https://wa.me/27832684232"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faWhatsapp} />
              </a>
            </div>
          </div>
          <div className="footer-content">
            <h4>NEW MACHINES</h4>
            <a href="https://www.wdhearn.co.za/product/cnc-controls">CNC Machines</a>
            <a href="https://www.wdhearn.co.za/products">Fabrication</a>
            <a href="https://www.wdhearn.co.za/product/conventional-toolroom-equipment">Conventional Machines</a>
            <a href="https://www.wdhearn.co.za/products">Specialized Machines</a>
            <a href="https://www.wdhearn.co.za/products">Measuring & Inspection</a>
            <a href="https://www.wdhearn.co.za/product/grinding">Grinding & Finishing</a>
          </div>
          <div className="footer-content">
            <h4>USED MACHINES</h4>
            <Link to={"/machine-listing"}>CNC Machines</Link>
            <Link to={"/machine-listing"}>Fabrication</Link>
            <Link to={"/machine-listing"}>Conventional Machines</Link>
            <Link to={"/machine-listing"}>Specialized Machines</Link>
          </div>
          <div className="footer-content">
            <h4>NICHE TOOLING</h4>
            <Link to={"/tools"}>Cutting & Machining</Link>
            <Link to={"/tools"}>Tool & Work Holding</Link>
            <Link to={"/tools"}>CNC Support</Link>
          </div>
          <div className="footer-content">
            <h4>CONTACT</h4>
            <div className="contact-item">
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <span>+27 83 268 4232</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <span>myles@usedmachinetools.co.za</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
              <span>4 Reed Place, Marlmead, Pinetown, 3610</span>
            </div>
          </div>
        </div>
        <div className="copy">
          <div className="company">
            <small>
              © 2026 Myles Crosthwaite Sales and Services CC | All right
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
