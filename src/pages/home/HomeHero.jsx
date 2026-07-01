import { Header } from "../../components/Header";
import { Link, NavLink } from "react-router";
import logoWhite from "../../assets/LogoWhite.png";
import './HomeHero.css'

export function HomeHero(){
  return(
    <>
    <Header />
    <div className="hero">
      <div className="hero-header">
        <img src={logoWhite} alt="Logo" className="logoWhite hero-line" />
        <h1 className="hero-line">
          EXPERT INSURANCE <br /><span> GUIDANCE SIMPLIFIED
          </span>
        </h1>
        <p className="hero-line">
          At Peter Christie Insurance Brokers, we act as the vital bridge between you and the complex world of insurance. We handle the paperwork, the negotiations, and the fine print so you can focus on what matters most.
        </p>
        <div className="hero-buttons">
            <Link to="/contact">
              <button><p>Business Insurance</p></button>
            </Link>
            <Link to="/machine-listing">
              <button className="product-button"><p>Personal Insurance</p></button>
            </Link>
        </div>
      </div>
    </div>
    </>
  )
}