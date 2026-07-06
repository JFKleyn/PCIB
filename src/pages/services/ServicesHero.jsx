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


const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

export function ServicesHero() {
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
            Expert Insurance <span> Solutions for Every Need. </span>
          </h1>

          <p className="hero-line">
            From business and personal insurance to specialized industry coverage, we provide tailored protection that grows with you. Explore our comprehensive range of services designed to safeguard what matters most.
          </p>
        </div>
      </div>
    </>
  );
}