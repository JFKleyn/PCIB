import { ShieldIcon2, TickIcon, HandshakeIcon } from "../../components/SVGIcons";
import "./WhyChooseUs.css";

export function WhyChooseUs() {
  return (
    <>
      <section>
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <div className="header-line"></div>
        </div>
        <div className="why-choose-us-content">
          <div className="why-choose-us-item">
            <div className="svg-container">
              {/* Long-Term Partenerships
              Long standing industry experience
              Professional claims management
              proactive policy reviews
               */}
              <ShieldIcon2 />
            </div>
            <h3>Hassle-Free Claims </h3>
            <p>We manage the entire claims process from start to finish. Our team ensures fast resolutions while you continue your business operations undisturbed.</p>
          </div>
          <div className="why-choose-us-item">
            <div className="svg-container">
              <TickIcon />
            </div>
            <h3>Tailored Risk Management </h3>
            <p>No two businesses are alike. We conduct deep analysis to curate a custom insurance portfolio that matches your unique risk profile perfectly.</p>
          </div>
          <div className="why-choose-us-item">
            <div className="svg-container">
              <HandshakeIcon />
            </div>
            <h3>Personal Relationship </h3>
            <p>You aren't a policy number to us. Enjoy dedicated advisors who know your name and understand your long-term goals and aspirations.</p>
          </div>
        </div>
      </section>
    </>
  );
}