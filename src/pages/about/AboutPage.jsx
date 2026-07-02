import { Footer } from "../../components/Footer";
import { Footer2 } from "../home/Footer2";
import { AboutHero } from "./AboutHero";
import { OurStory } from "./OurStory";


export function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Footer2 />
      <Footer />
    </>
  );
}