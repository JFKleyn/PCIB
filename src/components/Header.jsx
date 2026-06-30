import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.webp";
import { useLocation } from "react-router";
import "./Header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newMachinesOpen, setNewMachinesOpen] = useState(false);

  function toggleNewMachines() {
    setNewMachinesOpen(!newMachinesOpen);
  }

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  const machinesActive = location.pathname.includes("machine");

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const [machinesOpen, setMachinesOpen] = useState(false);

  function toggleMachines() {
    setMachinesOpen(!machinesOpen);
    setNewMachinesOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
    setMachinesOpen(false);
    setNewMachinesOpen(false);
  }

  return (
    <>
      <div className={`header ${scrolled ? "scrolled" : ""}`}>
        <img src={Logo} alt="Logo" className="logo" />
        <div className="navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
          <div className="desktop-dropdown">
            <button
              className={`desktop-dropdown-title ${
                machinesActive ? "active-machine" : ""
              }`}
            >
              Machines▾
            </button>

            <div className="desktop-submenu">
              <div className="desktop-nested-dropdown">
                <button type="button" className="desktop-submenu-button">
                  New Machines ▸
                </button>

                <div className="desktop-nested-submenu">
                  <a href="https://www.wdhearn.co.za" target="_blank">
                    WD Hearn Machine Tools
                  </a>
                  <a href="https://leadmachinetools.co.za" target="_blank">
                    Lead Machine Tools
                  </a>
                </div>
              </div>

              <Link to="/machine-listing">Used Machines</Link>
            </div>
          </div>
          <NavLink
            to="/tools"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Niche Tooling
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="header-buttons">
          <Link to="/contact">
            <button>GET A QUOTE</button>
          </Link>
          <Link to="/login">
            <button className="admin-button">ADMIN LOGIN</button>
          </Link>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="FontawesomeIcon"
          id="bar"
          onClick={toggleMenu}
        />
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <FontAwesomeIcon icon={faXmark} onClick={closeMenu} id="xmark" />

        <Link
          to="/"
        >
          Home
        </Link>
        <Link
          to="/about"
        >
          About
        </Link>
        <div>
          <div className="mobile-dropdown-title" onClick={toggleMachines}>
            Machines▾
          </div>

          <div className={`mobile-submenu ${machinesOpen ? "open" : ""}`}>
            <div className="mobile-submenu-inner">
              <div className="mobile-new-machines">
                <button
                  type="button"
                  className="mobile-new-machines-title"
                  onClick={toggleNewMachines}
                >
                  New Machines▾
                </button>

                <div
                  className={`mobile-new-machines-submenu ${newMachinesOpen ? "open" : ""}`}
                >
                  <div className="mobile-new-machines-submenu-inner">
                    <a
                      href="https://www.wdhearn.co.za"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WD Hearn Machine Tools
                    </a>

                    <a
                      href="https://leadmachinetools.co.za"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lead Machine Tools
                    </a>
                  </div>
                </div>
              </div>

              <Link to="/machine-listing">Used Machines</Link>
            </div>
          </div>
        </div>
        <Link to="/tools">Niche Tooling</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Admin Login</Link>
      </div>
    </>
  );
}
