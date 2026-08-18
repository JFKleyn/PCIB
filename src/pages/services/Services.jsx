import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "../../components/FadeIn";
import "./Services.css";

import BAO from "../../assets/BAO.webp";
import CAI from "../../assets/CAI.webp";
import C from "../../assets/C.webp";
import CY from "../../assets/CY.webp";
import R from "../../assets/R.webp";
import D from "../../assets/D.webp";
import PI from "../../assets/PI.webp";
import PAP from "../../assets/PAP.webp";
import SI from "../../assets/SI.webp";
import SAM from "../../assets/SAM.webp";
import WAD from "../../assets/WAD.webp";
import CVAF from "../../assets/CVAF.webp";
import VICS from "../../assets/VICS.webp";
import PCIBA from "../../assets/PCIBA.webp";

const services = [
  {
    id: "business-office",
    title: "Business & Office",
    image: BAO,
    content: [
      "Protecting your business means protecting the people, property, equipment and operations that keep it running. Our Business & Office Insurance solutions are designed to provide comprehensive cover against a range of risks, including damage to property, loss or theft of business assets, liability claims and other unexpected events. We work with you to tailor cover to your specific business needs, helping you operate with greater confidence and financial security.",
    ],
  },
  {
    id: "Commercial-&-Industrial",
    title: "Commercial & Industrial",
    image: CAI,
    content: [
      "Commercial and industrial operations face a wide range of complex risks that can impact assets, employees, production and business continuity. Our Commercial & Industrial Insurance solutions are designed to provide tailored protection for your premises, equipment, stock, vehicles, liability exposures and other key business assets. We work closely with you to understand your operations and risk profile, providing appropriate cover to help safeguard your business against unforeseen events and minimise potential financial disruption.",
    ],
  },
  {
    id: "construction",
    title: "Construction",
    image: C,
    content: [
      "Tailored insurance solutions that safeguard construction projects, contractors, developers, and property owners against unforeseen risks, damage, delays, and liabilities—providing confidence and financial protection from project commencement through to completion.",
    ],
  },
  {
    id: "cyber",
    title: "Cyber and Commercial Crime",
    image: CY,
    content: [
      "Specialised insurance solutions designed to protect businesses against cyber threats, data breaches, fraud, theft, and other forms of commercial crime, helping to mitigate financial losses and safeguard business continuity.",
    ],
  },
  {
    id: "retail",
    title: "Retail Business",
    image: R,
    content: [
      "Comprehensive insurance solutions tailored to protect retail businesses against property damage, theft, liability, business interruption, and other unforeseen risks—helping safeguard your assets, operations, and long-term business continuity.",
    ],
  },
  {
    id: "domestic",
    title: "Domestic Business",
    image: D,
    content: [
      "Comprehensive insurance solutions designed to protect your home, private residence, and personal belongings against unforeseen events such as fire, theft, accidental damage, and other insured risks. Tailored to your individual needs, our cover provides peace of mind and financial protection for the property, possessions, and valuable assets that matter most.",
    ],
  },
  {
    id: "professional-indemnity",
    title: "Professional Indemnity",
    image: PI,
    content: [
      "Specialised insurance designed to protect professionals and their businesses against claims arising from errors, omissions, negligence, or failure to deliver professional services as expected. It provides financial protection against legal costs, damages, and associated liabilities, helping safeguard your reputation and business continuity.",
    ],
  },
  {
    id: "public-and-products",
    title: "Public & Products Liability & Employers Liability",
    image: PAP,
    content: [
      "Protect your business, your customers and your employees with comprehensive liability cover. Public and Products Liability protects your business against claims for third-party injury or property damage arising from your operations or products, while Employers Liability provides protection against claims relating to injuries or illness suffered by employees in the course of their work. Together, these covers provide essential protection against the unexpected costs of liability claims, helping you operate your business with greater confidence.",
    ],
  },
  {
    id: "specialist-industries",
    title: "Specialist Industries",
    image: SI,
    content: [
      "Speak to us if you operate in a unique market or have unusual assets, we will design an insurance programme for your special needs.",
    ],
  },
  {
    id: "shipping-marine",
    title: "Marine & Goods in Transit",
    image: SAM,
    content: [
      "Protect your cargo throughout its journey with tailored Marine and Goods in Transit Insurance. Whether goods are transported locally or internationally by road, sea, air or rail, this cover helps protect your business against loss or damage while goods are in transit. Designed for businesses that import, export, distribute or transport goods, our solutions provide reliable protection against the risks associated with moving valuable cargo from origin to destination.",
    ],
  },
  {
    id: "commercial-vehicle-and-fleet",
    title: "Commercial & Private Vehicle Fleets",
    image: CVAF,
    content: [
      "Managing multiple vehicles requires more than a standard approach. Our Commercial & Private Vehicle Fleet solutions are designed to provide comprehensive, flexible and professionally structured protection for businesses, individuals and families with multiple vehicles. Whether you operate a commercial fleet or have a number of private vehicles, we take the time to understand your requirements and ensure that your vehicles are appropriately covered. From day-to-day business operations to personal vehicles, our approach is focused on providing reliable protection, streamlined administration and peace of mind. With a tailored fleet solution, you can benefit from simplified management, consistent service and cover designed around your specific vehicle requirements — giving you confidence that your fleet is in capable hands.",
    ],
  },
  {
    id: "vehicle-insurance-credit-shortfall",
    title: "Vehicle Credit Shortfall",
    image: VICS,
    content: [
      "Our Vehicle Credit Shortfall solution helps customers bridge the gap when the amount still owed on their existing vehicle finance exceeds the vehicle’s current value. It provides a practical way to manage the outstanding balance while moving into a new vehicle, helping make the transition more affordable and straightforward.",
    ],
  },
  {
    id: "home-and-roadside-assistance",
    title: "Home and Road Assistance",
    image: PCIBA,
    content: [
      "Our Home & Roadside Assist solution provides customers with added protection and practical support when unexpected problems arise. From assistance with common household emergencies to roadside breakdown support, it helps give customers greater peace of mind and access to help when they need it most.",
    ],
  },
];

export function Services() {
  const [activeService, setActiveService] = useState(services[0].id);
  const [navFixed, setNavFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const navTrigger = document.querySelector(".services-nav-trigger");

      if (navTrigger) {
        const triggerTop = navTrigger.getBoundingClientRect().top;
        setNavFixed(triggerTop <= 80);
      }

      services.forEach((service) => {
        const section = document.getElementById(service.id);

        if (section) {
          const sectionTop = section.getBoundingClientRect().top;

          if (sectionTop <= 180 && sectionTop >= -section.offsetHeight + 180) {
            setActiveService(service.id);
          }
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToService(id) {
    const section = document.getElementById(id);

    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 160;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }

  return (
    <section className="services-page">
      <div className="services-nav-trigger"></div>

      <div className="services-nav-space">
        <div className={`services-nav-wrapper ${navFixed ? "fixed" : ""}`}>
          <div className="services-nav">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToService(service.id)}
                className={activeService === service.id ? "active" : ""}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="services-content">
        {services.map((service) => (
          <div key={service.id} id={service.id} className="service-section">
            <FadeIn>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
            </FadeIn>

            <div className="service-text">
              <FadeIn>
                <h2>{service.title}</h2>
              </FadeIn>
              <FadeIn>
                {service.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </FadeIn>
              <FadeIn>
                <Link to={"/contact"} className="service-text-button">
                  Get a Quote
                </Link>
              </FadeIn>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
