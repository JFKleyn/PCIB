import { ShieldIcon2, TickIcon, HandshakeIcon } from "../../components/SVGIcons";

export function OurValues() {
  return (
    <>
      <section>
        <div className="section-header">
          <h2>Our Values</h2>
          <div className="header-line"></div>
        </div>
        <div className="why-choose-us-content">
          <div className="why-choose-us-item">
            <div className="svg-container">
              <ShieldIcon2 />
            </div>
            <h3>Client-First Approach </h3>
            <p>Your success is our mission. We prioritize your needs above all else, ensuring every recommendation serves your long-term interests.</p>
          </div>
          <div className="why-choose-us-item">
            <div className="svg-container">
              <TickIcon />
            </div>
            <h3>Specialist Expertise</h3>
            <p>Four decades of experience across every sector. Our team brings deep industry knowledge to craft solutions that truly protect.</p>
          </div>
          <div className="why-choose-us-item">
            <div className="svg-container">
              <HandshakeIcon />
            </div>
            <h3>Integrity & Trust</h3>
            <p>We build relationships that last. Transparency, honesty, and ethical practice guide everything we do.</p>
          </div>
        </div>
      </section>
    </>
  );
}