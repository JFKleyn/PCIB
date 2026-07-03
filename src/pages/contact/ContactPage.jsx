import { ContactForm } from "../../components/ContactForm";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PhoneIcon, EmailIcon, ClockIcon2 } from "../../components/SVGIcons";
import { FadeIn } from "../../components/FadeIn";
import { Helmet } from "react-helmet-async";
import "./ContactPage.css";

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact MCSS | Machine Tool Solutions in KwaZulu-Natal</title>

        <meta
          name="description"
          content="Contact MCSS for machine tools, CNC machinery, used machines, tooling, servicing, training and turnkey engineering solutions throughout KwaZulu-Natal and South Africa."
        />

        <meta
          name="keywords"
          content="contact MCSS, machine tools KZN, CNC machines South Africa, used machine tools, machine tooling, machine servicing, engineering support KwaZulu-Natal"
        />

        <meta
          property="og:title"
          content="Contact MCSS | Machine Tool Solutions"
        />

        <meta
          property="og:description"
          content="Get in touch with MCSS for machine tools, CNC machinery, tooling, servicing and engineering support across South Africa."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.yourdomain.co.za/contact"
        />
      </Helmet>
      <Header />
      <div className="contact-section contact-page">
        <div className="section-header">
          <p>CONTACT US</p>
          <h1>GET IN TOUCH</h1>
          <div className="header-line"></div>
        </div>
        <div className="contact-bodyy">
          <ContactForm />
          <FadeIn>
            <div className="contact-details">
              <div className="contact-details-text">
                <div className="contact-details-item">
                  <div className="contact-svg">
                    <PhoneIcon />
                  </div>
                  <div className="contact-details-items">
                    <p className="notbold">PHONE</p>
                    <p className="bold">+27 82 877 7042</p>
                  </div>
                </div>
                <div className="contact-details-item">
                  <div className="contact-svg">
                    <EmailIcon />
                  </div>
                  <div className="contact-details-items">
                    <p className="notbold">EMAIL</p>
                    <p className="bold">james@peterchristieins.co.za</p>
                  </div>
                </div>
                <div className="contact-details-item">
                  <div className="contact-svg">
                    <ClockIcon2 />
                  </div>
                  <div className="contact-details-items">
                    <p className="notbold">BUSINESS HOURS</p>
                    <p className="bold">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="map-card">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.1947463690867!2d30.9541121!3d-29.8298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef700ee167debb7%3A0xabafbc52eff66d0c!2sPeter%20Christie%20Insurance%20Brokers!5e0!3m2!1sen!2sza!4v1783073316296!5m2!1sen!2sza"></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <Footer />
    </>
  );
}
