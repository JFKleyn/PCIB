import { Footer } from "../../components/Footer";
import { Footer2 } from "../home/Footer2";
import { ServicesHero } from "./ServicesHero";
import { Services } from "./Services";


export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services/>
      <Footer2 />
      <Footer />
    </>
  );
}