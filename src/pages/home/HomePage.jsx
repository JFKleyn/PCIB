import { Footer } from "../../components/Footer";
import { HomeHero } from "./HomeHero";
import "./HomePage.css";
import { WhyChooseUs } from "./WhyChooseUs";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <WhyChooseUs />
      <Footer />
    </>
  );
}