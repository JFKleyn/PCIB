import { Link } from "react-router-dom";
import commercial from "../../assets/Commercial.webp";
import cyber from "../../assets/Cyber.webp";
import construction from "../../assets/Construction.webp";
import marine from "../../assets/Marine.webp";
import domestic from "../../assets/Domestic.webp";
import "./HomeServices.css";
import { ArrowIcon } from "../../components/SVGIcons";
import { FadeIn } from "../../components/FadeIn";

export function HomeServices() {
  return (
    <>
      <section className="alt">
        <FadeIn>
          <div className="section-header2">
            <h2>Our Services</h2>
            <div className="services-sub">
              <p>
                Expertly curated coverage for every sector of modern industry
                and personal life.
              </p>
              <Link to={"/services"}>
                View All Services <ArrowIcon />
              </Link>
            </div>
          </div>
        </FadeIn>
        <div className="home-services-container">
          <FadeIn>
            <div
              className="home-service"
              style={{
                backgroundImage: `url(${commercial})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="home-service-content">
                <h4>Commercial & Industrial</h4>
                <p>
                  Comprehensive liability and asset protection for large-scale
                  operations and manufacturing facilities.
                </p>
                <Link to={"/services"}>
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div
              className="home-service"
              style={{
                backgroundImage: `url(${cyber})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="home-service-content">
                <h4>Cyber Risk & Commercial Crime</h4>
                <p>
                  Protection against cyber threats , fraud, and commercial
                  crime.
                </p>
                <Link to={"/services"}>
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="home-services-container2">
          <FadeIn>
            <div
              className="home-service"
              style={{
                backgroundImage: `url(${construction})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="home-service-content">
                <h4>Engineering</h4>
                <p>
                  Foundational coverage for builders, developers, and
                  specialized tradesmen.
                </p>
                <Link to={"/services"}>
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div
              className="home-service"
              style={{
                backgroundImage: `url(${marine})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="home-service-content">
                <h4>Marine & Goods in Transit</h4>
                <p>
                  Global transit and cargo solutions for international and local
                  freight and logistics.
                </p>
                <Link to={"/services"}>
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div
              className="home-service"
              style={{
                backgroundImage: `url(${domestic})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="home-service-content">
                <h4>Domestic</h4>
                <p>
                  Protecting your home, belongings, and valuables with tailored
                  insurance solutions.
                </p>
                <Link to={"/services"}>
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
