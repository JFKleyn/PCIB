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
          Insurance Brokers Durban | Peter Christie Insurance Brokers
        </title>

        <meta
          name="description"
          content="Looking for insurance brokers in Durban? Peter Christie Insurance Brokers provides commercial, industrial, marine, construction, cyber and personal insurance across South Africa."
        />

        <link rel="canonical" href="https://www.peterchristieins.co.za/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            "@id": "https://www.peterchristieins.co.za/#insuranceagency",

            name: "Peter Christie Insurance Brokers",
            url: "https://www.peterchristieins.co.za/",

            description:
              "Peter Christie Insurance Brokers provides commercial, industrial, marine, construction, cyber and domestic insurance solutions.",

            telephone: "+27 31 266 8870",
            email: "james@peterchristieins.co.za",

            areaServed: [
              {
                "@type": "City",
                name: "Durban",
              },
              {
                "@type": "AdministrativeArea",
                name: "KwaZulu-Natal",
              },
              {
                "@type": "Country",
                name: "South Africa",
              },
            ],

            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "17:00",
              },
            ],
          })}
        </script>
      </Helmet>
      <HomeHero />
      <HomeServices />
      <WhyChooseUs />
      <Footer2 />
      <Footer />
    </>
  );
}
