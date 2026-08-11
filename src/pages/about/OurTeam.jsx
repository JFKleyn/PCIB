
import "./OurTeam.css";
import placeholder from "../../assets/Placeholder.webp"
import { FadeIn } from "../../components/FadeIn";

export function OurTeam() {
  return (
    <>
      <section>
        <FadeIn>
        <div className="section-header">
          <h2>Our Team</h2>
          <div className="header-line"></div>
          <p>Meet the dedicated professionals who bring expertise, integrity, and personalized service to every client relationship.</p>
        </div>
        </FadeIn>

        <div className="team-profile-container">
        
        <FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={placeholder} alt="" />
            </div>
            <div className="profile-text">
              <p>With over 40 years in the insurance industry, Peter founded the brokerage with a vision to revolutionize client service in South Africa.</p>
            </div>
          </div>
          </FadeIn>

<FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={placeholder} alt="" />
            </div>
            <div className="profile-text">
              <p>With over 40 years in the insurance industry, Peter founded the brokerage with a vision to revolutionize client service in South Africa.</p>
            </div>
          </div>
          </FadeIn>
          <FadeIn>

          <div className="team-profile">
            <div className="profile-photo">
              <img src={placeholder} alt="" />
            </div>
            <div className="profile-text">
              <p>With over 40 years in the insurance industry, Peter founded the brokerage with a vision to revolutionize client service in South Africa.</p>
            </div>
          </div>
          </FadeIn>
          <FadeIn>

          <div className="team-profile">
            <div className="profile-photo">
              <img src={placeholder} alt="" />
            </div>
            <div className="profile-text">
              <p>With over 40 years in the insurance industry, Peter founded the brokerage with a vision to revolutionize client service in South Africa.</p>
            </div>
          </div>
          </FadeIn>
          <FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={placeholder} alt="" />
            </div>
            <div className="profile-text">
              <p>With over 40 years in the insurance industry, Peter founded the brokerage with a vision to revolutionize client service in South Africa.</p>
            </div>
          </div>
          </FadeIn>
          <FadeIn>
          <div className="team-profile">
            <div className="profile-photo">
              <img src={placeholder} alt="" />
            </div>
            <div className="profile-text">
              <p>With over 40 years in the insurance industry, Peter founded the brokerage with a vision to revolutionize client service in South Africa.</p>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}