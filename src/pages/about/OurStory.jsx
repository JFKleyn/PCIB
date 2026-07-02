
import office from "../../assets/PCIBOffice.png"
import "./OurStory.css";

export function OurStory() {
  return (
    <>
      <section>
        <div className="section-header">
          <h2>Our Story</h2>
          <div className="header-line"></div>
        </div>

        <div className="our-story-container">
          <div className="our-story-text">
            <p>Founded in 1984, Peter Christie Insurance Brokers began with a simple vision: to provide businesses with insurance solutions that truly protect what matters most. What started as a small brokerage has grown into an award-winning firm serving clients from small businesses to large corporations across South Africa. <br /><br /> Our success is built on a foundation of specialist expertise and unwavering commitment to our clients' best interests. We don't just sell policies, we build lasting partnerships, taking the time to understand your unique risks and crafting insurance solutions that grow with your business. <br /><br />Today, we're proud to be recognized as industry leaders, but we've never forgotten our roots. Every client, regardless of size, receives the same dedicated service and expert guidance that built our reputation over four decades.</p>
          </div>
          <img src={office} alt="Office Photo" className="our-story-image" />
        </div>
      </section>
    </>
  );
}