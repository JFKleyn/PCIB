import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./NotFoundPage.css";

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Peter Christie Insurance Brokers</title>

        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <main className="not-found-page">
        <div className="not-found-content">
          <p className="not-found-code">404</p>

          <h1>PAGE NOT FOUND</h1>

          <div className="not-found-line"></div>

          <p className="not-found-description">
            The page you're looking for may have been moved, deleted,
            or no longer exists.
          </p>

          <div className="not-found-buttons">
            <Link to="/" className="not-found-primary">
              BACK TO HOME
            </Link>

            <Link to="/services" className="not-found-secondary">
              VIEW OUR SERVICES
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}