import { Footer } from "../../components/Footer";
import { Footer2 } from "../home/Footer2";
import { AboutHero } from "./AboutHero";
import { OurStory } from "./OurStory";
// import { OurTeam } from "./OurTeam";
import { OurValues } from "./OurValues";


export function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurValues/>
      {/* <OurTeam /> */}
      <Footer2 />
      <Footer />
    </>
  );
}