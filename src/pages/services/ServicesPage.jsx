import { Footer } from "../../components/Footer";
import { Footer2 } from "../home/Footer2";
import { ServicesHero } from "./ServicesHero";
import { Services } from "./Services";
import { Helmet } from "react-helmet-async";

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Insurance Services | Peter Christie Insurance Brokers</title>

        <meta
          name="description"
          content="Explore insurance solutions from Peter Christie Insurance Brokers, including commercial, industrial, cyber, construction, marine and domestic insurance."
        />

        <meta
          name="keywords"
          content="insurance services Durban, commercial insurance, industrial insurance, cyber insurance, construction insurance, marine insurance, domestic insurance, business insurance South Africa"
        />

        <link
          rel="canonical"
          href="https://www.peterchristieins.co.za/services"
        />
      </Helmet>
      <ServicesHero />
      <Services />
      <Footer2 />
      <Footer />
    </>
  );
}
