import { Footer } from "../../components/Footer";
import { HomeHero } from "./HomeHero";
import "./HomePage.css";
import { HomeServices } from "./HomeServices";
import { WhyChooseUs } from "./WhyChooseUs";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <WhyChooseUs />
      <HomeServices />
      <Footer />
    </>
  );
}