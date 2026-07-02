import { Link } from "react-router-dom";
import commercial from "../../assets/Commercial.png";
import cyber from "../../assets/Cyber.png";
import construction from "../../assets/Construction.png";
import marine from "../../assets/Marine.png";
import domestic from "../../assets/Domestic.png";
import "./HomeServices.css";
import { ArrowIcon } from "../../components/SVGIcons";

export function HomeServices() {
  return (
    <>
      <section className="alt">
        <div className="section-header2">
          <h2>Our Services</h2>
          <div className="services-sub">
            <p>
            Expertly curated coverage for every sector of modern industry and
            personal life.
            </p>
            <Link>View All Services <ArrowIcon/></Link>
          </div>
        </div>
        <div className="home-services-container">
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
            <Link>
              <button>Learn More</button>
            </Link>
            </div>
          </div>
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
            <h4>Cyber Risk</h4>
            <p>
              Advanced digital asset protection against breaches and business
              interruption.
            </p>
            <Link>
              <button>Learn More</button>
            </Link>
            </div>
          </div>
        </div>

        <div className="home-services-container2">
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
            <h4>Construction</h4>
            <p>
              Foundational coverage for builders, developers, and specialized
              tradesmen.
            </p>
            <Link>
              <button>Learn More</button>
            </Link>
          </div>
          </div>
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
            <h4>Marine & Shipping</h4>
            <p>
              Global transit and cargo solutions for international freight and
              logistics.
            </p>
            <Link>
              <button>Learn More</button>
            </Link>
          </div>
          </div>
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
            
            <h4>Domestic & Retail</h4>
            <p>
              Global transit and cargo solutions for international freight and
              logistics.
            </p>
            <Link>
              <button>Learn More</button>
            </Link>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
