import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "../../components/FadeIn";
import "./Services.css";

const services = [
  {
    id: "business-office",
    title: "Business & Office",
    image: "src/assets/BAO.webp",
    content: [
      "Office insurance protects your business equipment such as computers and documents, and furniture whether you work in office premises or from your home office. Policies are available to protect your business from risks such as theft, fire and water damage, even if the contents are temporarily away from the workplace.",
    ],
  },
  {
    id: "Commercial-&-Industrial",
    title: "Commercial & Industrial",
    image: "src/assets/CAI.webp",
    content: [
      "Our solutions include the insurance management of Property Management Companies. In addition to providing comprehensive buildings insurance, cover can be extended to include loss of rent or alternative accommodation expenses, previous subsidence to the property, unoccupied properties, listed properties, landlords contents, contents of common parts, employers' liability insurance where required, property owners' liability, legal expenses and tenancy disputes cover, directors and officers' liability, equipment breakdown, and lift insurance and inspection.",
    ],
  },
  {
    id: "construction",
    title: "Construction",
    image: "src/assets/C.webp",
    content: [
      "Designed to cover the risks associated with a construction site, be it residential, commercial, civil or mechanical. It typically includes material damage and public liability (bodily injury and/or property damage to third parties). We can also offer Builders Warranty Insurance and Owner Builders Warranty.",
    ],
  },
  {
    id: "cyber",
    title: "Cyber and Commercial Crime",
    image: "src/assets/CY.webp",
    content: [
      "Unfortunately, it is an area of increasing risk with the number of incidents growing every year. There are a range of products available to protect against these exposures. However, no two policies are the same with considerable variances in policy cover. Our recommendation is to seek skilled advice in finding what is right for you.",
    ],
  },
  {
    id: "retail",
    title: "Retail",
    image: "src/assets/R.webp",
    content: [
      "PCIB provide a complete range of retail insurance solutions for shops of all sizes, from small corner shops to large multi-site retailers. In the fast-moving world of retail, it is vital that your insurance keeps pace with your needs and business growth.",
    ],
  },
  {
    id: "domestic",
    title: "Domestic",
    image: "src/assets/D.webp",
    content: [
      "Nowadays many insurers are only insuring the straightforward residential policies and are not covering those with contentious issues unless insurers specifically note your particular circumstances as an endorsement on the policy schedule, it will invariably mean that you are not fully protected. We can provide you with competitive insurance quotations from a panel of insurers offering the best product, taking into account your individual circumstances even if these are slightly unusual to give you peace of mind and great value.",
    ],
  },
  {
    id: "professional-indemnity",
    title: "Professional Indemnity",
    image: "src/assets/PI.webp",
    content: [
      "This is essential cover for companies involved in advisory roles. A form of liability insurance that helps protect professional advice and service providing individuals and companies against a claim of negligence by a client. Can also cover, partly or wholly, any damages that may be awarded in such a civil lawsuit. PCIB can arrange comprehensive and competitive packages to suit your needs.",
    ],
  },
  {
    id: "public-and-products",
    title: "Public & Products",
    image: "src/assets/PAP.webp",
    content: [
      "There are numerous types of policies with specific cover that may be appropriate to your occupation. This type of insurance is an essential part of any insurance portfolio as an injury to a third party could cost millions and have severe consequences for your business. PCIB understands the many aspects of Public and Product Liability cover and can evaluate your needs, advise and recommend appropriate solutions.",
    ],
  },
  {
    id: "specialist-industries",
    title: "Specialist Industries",
    image: "src/assets/SI.webp",
    content: [
      "Speak to us if you operate in a unique market or have unusual assets, we will design an insurance programme for your special needs.",
    ],
  },
  {
    id: "shipping-marine",
    title: "Shipping and Marine",
    image: "src/assets/SAM.webp",
    content: [
      "We are able to offer the complete range of services for your marine insurance needs, this includes: Full stock throughput policies, Annual declaration cargo policies, One-off specilist shipments, Hull and liability policies, Marina cover, Cover for yachts, motor boats, dinghy's and pleasure craft both individually and for yacht clubs.",
    ],
  },
  {
    id: "wholesale-and-distribution",
    title: "Wholesale & Distribution",
    image: "src/assets/WAD.webp",
    content: [
      "Insurance for wholesalers, importers, exporters, warehousing and distribution companies. PCIB strive to provide our clients with the highest quality of independent, expert advice and service to ensure that you get real value for money from your insurance arrangements.",
    ],
  },
  {
    id: "commercial-vehicle-and-fleet",
    title: "Commercial Vehicle and Fleet",
    image: "src/assets/CVAF.webp",
    content: [
      "From small to large fleets most people overlook the main area of fleet management which is the effective and speedy handling of the motor claims that enable your business to get on with your work should an incident occur. We pride ourselves on having a team that efficiently manage your claim to cause you the least disruption.",
    ],
  },
  {
    id: "vehicle-insurance-credit-shortfall",
    title: "Vehicle Insurance Credit Shortfall",
    image: "src/assets/VICS.webp",
    content: [
      "We offer credit shortfall cover through Vapsure. The credit shortfall product is directly linked to a vehicle which is comprehensively insured. This product covers the interest owed to the finance house up to a maximum indemnity of R200,000.00.",
    ],
  },
  {
    id: "home-and-roadside-assistance",
    title: "Home and Roadside Assistance",
    image: "src/assets/PCIBA.webp",
    content: [
      "These services are available 24 hours a day, 7 days a week, all year round. Should you wish to opt in for this cover, kindly contact our office on 031-266 8870 and speak to any of our underwriters to have this added to your existing policy.",
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
