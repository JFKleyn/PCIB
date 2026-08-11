import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Link } from "react-router";
import logoWhite from "../../assets/LogoWhite.webp";

import hero1 from "../../assets/Hero1.webp";
import hero2 from "../../assets/Hero2.webp";
import hero3 from "../../assets/Hero3.webp";
import hero4 from "../../assets/Hero4.webp";
import hero5 from "../../assets/Hero 5.webp";
import hero6 from "../../assets/Hero6.webp";

import "./HomeHero.css";

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

export function HomeHero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <div className="hero">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-bg ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}

        <div className="hero-overlay"></div>

        <div className="hero-header">
          <img src={logoWhite} alt="Logo" className="logoWhite hero-line" />

          <h1 className="hero-line">
            TRUSTED ADVICE <br />
            <span>LASTING PROTECTION</span>
          </h1>

          <p className="hero-line">
            At Peter Christie Insurance Brokers, we act as the vital bridge
            between you and the complex world of insurance. We handle the
            paperwork, the negotiations, and the fine print so you can focus on
            what matters most.
          </p>

          <div className="hero-buttons">
            <Link to="/contact">
              <button>
                <p>Book a Consultation</p>
              </button>
            </Link>

            <Link to="/services">
              <button className="product-button">
                <p>Our Services</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}