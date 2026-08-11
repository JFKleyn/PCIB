import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import hero1 from "../../assets/Hero1.webp";
import hero2 from "../../assets/Hero2.webp";
import hero3 from "../../assets/Hero3.webp";
import hero4 from "../../assets/Hero4.webp";
import hero5 from "../../assets/Hero 5.webp";
import hero6 from "../../assets/Hero6.webp";


const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

export function ComplianceHero() {
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
            Compliance & <span> Regulatory Information</span>
          </h1>

          <p className="hero-line">
            Our commitment to transparency, fair treatment, and regulatory compliance. Access our policies, frameworks, and legal documentation.
          </p>
        </div>
      </div>
    </>
  );
}