import { Footer } from "../../components/Footer";
import { Footer2 } from "./Footer2";
import { HomeHero } from "./HomeHero";
import { HomeServices } from "./HomeServices";
import { WhyChooseUs } from "./WhyChooseUs";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <WhyChooseUs />
      <Footer2 />
      <Footer />
    </>
  );
}