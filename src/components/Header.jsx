import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Logo / Nom */}
        <Link to="/" className="navbar-brand fw-bold text-uppercase">
          JOHN DOE
        </Link>

        {/* Bouton burger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Ouvrir la navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto flex-lg-row">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "nav-link px-lg-3" + (isActive ? " active" : "")
                }
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Services"
                className={({ isActive }) =>
                  "nav-link px-lg-3" + (isActive ? " active" : "")
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Realisations"
                className={({ isActive }) =>
                  "nav-link px-lg-3" + (isActive ? " active" : "")
                }
              >
                Réalisations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  "nav-link px-lg-3" + (isActive ? " active" : "")
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Mentions"
                className={({ isActive }) =>
                  "nav-link px-lg-3" + (isActive ? " active" : "")
                }
              >
                Mentions légales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
