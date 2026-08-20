import { Footer } from "../../components/Footer";
import { Footer2 } from "./Footer2";
import { HomeHero } from "./HomeHero";
import { HomeServices } from "./HomeServices";
import { WhyChooseUs } from "./WhyChooseUs";
import { Helmet } from "react-helmet-async";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Peter Christie Insurance Brokers | Insurance Brokers Durban
        </title>

        <meta
          name="description"
          content="Peter Christie Insurance Brokers provides tailored commercial, industrial, marine, construction, cyber and domestic insurance solutions in Durban and across South Africa."
        />

        <meta
          name="keywords"
          content="insurance brokers Durban, insurance brokers South Africa, commercial insurance, industrial insurance, marine insurance, construction insurance, cyber insurance, domestic insurance, Peter Christie Insurance Brokers"
        />

        <link rel="canonical" href="https://www.peterchristieins.co.za/" />
      </Helmet>
      <HomeHero />
      <HomeServices />
      <WhyChooseUs />
      <Footer2 />
      <Footer />
    </>
  );
}
