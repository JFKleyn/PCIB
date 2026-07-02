import { Footer } from "../../components/Footer";
import { HomeHero } from "./HomeHero";
import "./HomePage.css";
import { HomeQuestions } from "./HomeQuestions";
import { HomeServices } from "./HomeServices";
import { WhyChooseUs } from "./WhyChooseUs";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <WhyChooseUs />
      <HomeServices />
      <HomeQuestions />
      <Footer />
    </>
  );
}