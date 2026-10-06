import { Footer } from "../../components/Footer";
import { Footer2 } from "../home/Footer2";
import { AboutHero } from "./AboutHero";
import { OurStory } from "./OurStory";
// import { OurTeam } from "./OurTeam";
import { OurValues } from "./OurValues";
import { Helmet } from "react-helmet-async";

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          About Peter Christie Insurance Brokers | Durban Insurance Brokers
        </title>

        <meta
          name="description"
          content="Learn more about Peter Christie Insurance Brokers, an experienced Durban-based insurance brokerage providing tailored insurance solutions for businesses and individuals."
        />

        <link rel="canonical" href="https://www.peterchristieins.co.za/about" />
      </Helmet>
      <AboutHero />
      <OurStory />
      <OurValues />
      {/* <OurTeam /> */}
      <Footer2 />
      <Footer />
    </>
  );
}
