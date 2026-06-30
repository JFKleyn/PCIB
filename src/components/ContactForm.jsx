import "./ContactForm.css";
import { FadeIn } from "./FadeIn";

export function ContactForm() {
  return (
    <FadeIn>
      <form className="contact-form">
        <div className="form-group">
          <label>FULL NAME</label>
          <input type="text" placeholder="John Doe" />
        </div>

        <div className="form-group">
          <label>EMAIL ADDRESS</label>
          <input type="email" placeholder="john@example.com" />
        </div>

        <div className="form-group">
          <label>PHONE NUMBER</label>
          <input type="tel" placeholder="+27 83 268 4232" />
        </div>

        <div className="form-group">
          <label>MESSAGE</label>
          <textarea placeholder="Tell us about your requirements..."></textarea>
        </div>

        <button className="submit" type="submit">
          SEND MESSAGE
        </button>
      </form>
    </FadeIn>
  );
}
