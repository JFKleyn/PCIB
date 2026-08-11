import { ShieldIcon2, TickIcon, HandshakeIcon } from "../../components/SVGIcons";
import { FadeIn } from "../../components/FadeIn";
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
          <FadeIn>
          <div className="why-choose-us-item">
            <div className="svg-container">
              {/* Long-Term Partenerships
              Long standing industry experience
              Professional claims management
              proactive policy reviews
               */}
              <ShieldIcon2 />
            </div>
            <h3>Long-Term Partnerships</h3>
            <p>We build lasting relationships based on trust, reliability and a commitment to supporting your business as it grows.</p>
          </div>
          </FadeIn>
          <FadeIn>
          <div className="why-choose-us-item">
            <div className="svg-container">
              <TickIcon />
            </div>
            <h3>Long-Standing Industry Experience</h3>
            <p>Our extensive industry experience gives us the knowledge to understand complex risks and provide dependable insurance guidance.</p>
          </div>
          </FadeIn>
          <FadeIn>
          <div className="why-choose-us-item">
            <div className="svg-container">
              <HandshakeIcon />
            </div>
            <h3>Professional Claims Management</h3>
            <p>We manage your claims from start to finish, providing expert support and keeping the process as smooth as possible.</p>
          </div>
          </FadeIn>
          <FadeIn>
          <div className="why-choose-us-item">
            <div className="svg-container">
              <HandshakeIcon />
            </div>
            <h3>Proactive Policy Reviews</h3>
            <p>We regularly review your cover to ensure your policies remain relevant as your business, risks and insurance needs evolve.</p>
          </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}