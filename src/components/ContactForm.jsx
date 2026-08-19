import { useState } from "react";
import "./ContactForm.css";
import { FadeIn } from "./FadeIn";

export function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("Message sent successfully.");
      e.target.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <FadeIn>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>FULL NAME</label>
          <input name="fullName" type="text" placeholder="John Doe" required />
        </div>

        <div className="form-group">
          <label>EMAIL ADDRESS</label>
          <input name="email" type="email" placeholder="john@example.com" required />
        </div>

        <div className="form-group">
          <label>PHONE NUMBER</label>
          <input name="phone" type="tel" placeholder="+27 83 268 4232" />
        </div>

        <div className="form-group">
          <label>MESSAGE</label>
          <textarea
            name="message"
            placeholder="Tell us about your requirements..."
            required
          ></textarea>
        </div>

        <button className="submit" type="submit">
          SEND MESSAGE
        </button>

        {status && <p>{status}</p>}
      </form>
    </FadeIn>
  );
}