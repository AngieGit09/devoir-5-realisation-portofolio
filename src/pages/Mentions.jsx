import React from "react";
export default function Mentions() {
  return (
    <main className="container py-5">
      <header className="text-center mb-4">
        <h1 className="mt-4">Mentions légales</h1>
        <div className="title-underline mx-auto" />
        <div className="bg-primary" style={{ height: "4px" }}>
          <hr className="custom-hr" />
        </div>
      </header>

      {/* Accordéon Bootstrap */}
      <div className="accordion accordion-flush" id="ml-accordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEditor">
            <button
              className="accordion-button collapsed d-flex align-items-center gap-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEditor"
              aria-expanded="false"
              aria-controls="collapseEditor"
            >
              <span>Éditeur du site</span>
              <span className="ms-auto chevron" />
            </button>
          </h2>
          <div
            id="collapseEditor"
            className="accordion-collapse collapse"
            aria-labelledby="headingEditor"
            data-bs-parent="#ml-accordion"
          >
            <div className="accordion-body">
              <p className="mb-1 fw-semibold">John Doe</p>
              <p className="mb-1">40 rue Laure Diebold</p>
              <p className="mb-1">69009 Lyon, France</p>
              <p className="mb-1">10 20 30 40 50</p>
              <p className="mb-0">john.doe@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Hébergeur */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingHost">
            <button
              className="accordion-button collapsed d-flex align-items-center gap-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHost"
              aria-expanded="false"
              aria-controls="collapseHost"
            >
              <span>Hébergeur</span>
              <span className="ms-auto chevron" />
            </button>
          </h2>
          <div
            id="collapseHost"
            className="accordion-collapse collapse"
            aria-labelledby="headingHost"
            data-bs-parent="#ml-accordion"
          >
            <div className="accordion-body">
              <p className="mb-1 fw-semibold">alwaysdata</p>
              <p className="mb-1">
                91 Rue du Faubourg Saint-Honoré, 75008 Paris
              </p>
              <p className="mb-0">
                <a
                  href="https://www.alwaysdata.com"
                  rel="nofollow"
                  target="_self"
                >
                  www.alwaysdata.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Crédits */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCredits">
            <button
              className="accordion-button collapsed d-flex align-items-center gap-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCredits"
              aria-expanded="false"
              aria-controls="collapseCredits"
            >
              <span>Crédits</span>
              <span className="ms-auto chevron" />
            </button>
          </h2>
          <div
            id="collapseCredits"
            className="accordion-collapse collapse"
            aria-labelledby="headingCredits"
            data-bs-parent="#ml-accordion"
          >
            <div className="accordion-body">
              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a
                  href="https://www.centre-europeen-formation.fr/"
                  rel="nofollow"
                  target="_self"
                >
                  Centre Européen de Formation
                </a>
                .
              </p>
              <p>
                Les images utilisées sur ce site sont libres de droits et
                proviennent de{" "}
                <a href="https://pixabay.com/" rel="nofollow" target="_self">
                  Pixabay
                </a>
                .
              </p>
              <p className="mb-0">
                Le favicon a été fourni par{" "}
                <a
                  href="https://www.flaticon.com/free-icons/john-doe"
                  rel="nofollow"
                  target="_self"
                >
                  John doe Icons (Flaticon)
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
