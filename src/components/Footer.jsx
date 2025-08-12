import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row text-center">
          {/*colonne 1 */}
          <div className="col-12 col-md-4 mb-3">
            <h3>John Doe</h3>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <a href="tel:john.doe@gmail.com" className="text-white">
              10 20 30 40 50
            </a>
            <br />
            <a href="mailto:john.doe@gmail.com" className="text-white">
              john.doe@gmail.com
            </a>
            <br />

            <div className="reseau">
              <a
                href="https://github.com"
                target="_blank"
                className="text-white p-1"
              >
                <i class="bi bi-github"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-white p-1"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-white p-1"
              >
                <i class="bi bi-twitter"></i>
              </a>
            </div>
          </div>

          {/*colonne 2*/}
          <div className="col-12 col-md-4 mb-3">
            <h3>Liens utiles</h3>
            <ul>
              <li>
                <Link to="/" className="text-light">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/Services" className="text-light">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/Realisations" className="text-light">
                  Realisations
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="text-light">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/Mentions" className="text-light">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
          {/*colonne 3*/}
          <div className="col-12 col-md-4 ">
            <h3>Mes dernières réalisations</h3>
            <ul>
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>
                <span>seo</span>
              </li>
              <li>Crétion d'une API</li>
              <li>Maquette d'un site</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
