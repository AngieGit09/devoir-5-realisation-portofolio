import React, { useState } from "react";

import MonProfil from "../components/MonProfil";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main>
      {/*Bloc 1*/}
      <section className="image-bg">
        <div className="container-fluid text-center">
          <div className="row col-12 col-mb-8">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-danger my-3 col-4 col-mb-3 col-ms-1 btn btn-danger border-0 rounded my-3"
                onClick={() => setShowModal(true)}
              >
                En savoir plus
              </button>
              {showModal && <MonProfil onClose={() => setShowModal(false)} />}
            </div>
          </div>
        </div>
         {/*Bloc 2*/}
      </section>
      <div className="container shadow my-5">
        <div className="row g-4 justify-content-center align-items-start">
           {/*colonne 1 gauche*/}
          <section className="col-11 col-md-6 p-4 ">
            <h2>A propos</h2>
            <div className="bg-primary" style={{ height: "4px" }}>
              <hr className="custom-hr" />
            </div>
            <img
              src="/assets/john-doe-about.jpg"
              alt="John Doe"
              className="img-fluid rounded shadow-sm mb-3"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercice ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercice ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercice ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
            </p>
          </section>

          {/* Colonne 2 Compétences*/}
          <section className="col-11 col-md-6 p-4 ">
            <h2 className="section-title text-uppercase mb-3">
              Mes compétences
              <div className="bg-primary" style={{ height: "4px" }}>
                <hr className="custom-hr" />
              </div>
            </h2>
            <div className="title-underline mb-4"></div>

            {/* HTML5 */}
            <div className="mb-3">
              <div className="d-flex justify-content-between small mb-1">
                <span>HTML5</span>
                <span>90%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="HTML5"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            {/* CSS3 */}
            <div className="mb-3">
              <div className="d-flex justify-content-between small mb-1">
                <span>CSS3</span>
                <span>80%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="CSS3"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-info"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            {/* JavaScript */}
            <div className="mb-3">
              <div className="d-flex justify-content-between small mb-1">
                <span>JavaScript</span>
                <span>70%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="JavaScript"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            {/* PHP */}
            <div className="mb-3">
              <div className="d-flex justify-content-between small mb-1">
                <span>PHP</span>
                <span>60%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="PHP"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            {/* React */}
            <div className="mb-1">
              <div className="d-flex justify-content-between small mb-1">
                <span>React</span>
                <span>50%</span>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="React"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
