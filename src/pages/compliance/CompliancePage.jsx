import { Footer } from "../../components/Footer";
import { Compliance } from "./Compliance";
import { ComplianceHero } from "./ComplianceHero";
import { Helmet } from "react-helmet-async";

export function CompliancePage() {
  return (
    <>
      <Helmet>
        <title>Compliance | Peter Christie Insurance Brokers</title>

        <meta
          name="description"
          content="View compliance information and regulatory documentation for Peter Christie Insurance Brokers, including policies, disclosures and client information."
        />

        <meta
          name="keywords"
          content="Peter Christie Insurance Brokers compliance, insurance compliance South Africa, insurance policies, regulatory documentation, insurance broker compliance"
        />

        <link
          rel="canonical"
          href="https://www.peterchristieins.co.za/compliance"
        />
      </Helmet>
      <ComplianceHero />
      <Compliance />
      <Footer />
    </>
  );
}
