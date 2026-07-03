import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Link } from "react-router";
import logoWhite from "../../assets/LogoWhite.png";
import hero1 from "../../assets/Hero1.png";
import hero2 from "../../assets/Hero2.png";
import hero3 from "../../assets/Hero3.png";
import hero4 from "../../assets/Hero4.png";
import hero5 from "../../assets/Hero 5.png";
import hero6 from "../../assets/Hero6.png";
import "./AboutHero.css"


const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

export function AboutHero() {
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

      <div className="hero-others">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-bg ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}

        <div className="hero-overlay"></div>

        <div className="hero-header">

          <h1 className="hero-line">
            Four Decades of <span> Trusted Protection </span>
          </h1>

          <p className="hero-line">
            Since 1984, Peter Christie Insurance Brokers has been safeguarding South African businesses with expert insurance solutions. Our award-winning team combines deep industry knowledge with genuine care for every client we serve.
          </p>
        </div>
      </div>
    </>
  );
}