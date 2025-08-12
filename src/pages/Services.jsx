import React, { useState } from "react";

function ServiceCard({ icon, title, children }) {
  const [hover, setHover] = useState(false);

  const style = {
    backgroundColor: hover ? "#efefef" : "var(--bs-body-bg)",
    boxShadow: hover ? "0 .5rem 1rem rgba(0,0,0,.15)" : "none",
    transition: "all .15s ease-in-out",
    cursor: "default",
  };

  return (
    <div
      className="col"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card h-100 border rounded-3" style={style}>
        <div className="card-body text-center">
          <i
            className={`bi ${icon} fs-1 text-primary d-block mb-3`}
            aria-hidden="true"
          ></i>
          <h3 className="h5">{title}</h3>
          <p className="mb-0">{children}</p>
        </div>
      </div>
    </div>
  );
}

const Services = () => {
  return (
    <main>
      <section>
        {/*Bloc 1 */}
        <img
          src="/assets/banner.jpg"
          alt="photo fond bleue"
          style={{ objectFit: "contain" }}
        />

        {/*Bloc 2*/}
        <div className="text-center">
          <h1 className="mt-4">Mon offre de services</h1>
          <p>Voici les prestations sur lesquelles je peux intervenir</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-4 col-md-4">
            <div className="bg-primary" style={{ height: "4px" }}>
              <hr className="custom-hr" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-11 col-md-4 border p-3 m-3">
              <i class="bi bi-pen"></i>
              <h2>
                <span>ux</span> Design
              </h2>

              <p>
                L'<span>ux</span> Design est une discipline qui consiste à
                concevoir des produits (sites web, applications mobiles,
                logiciels, object connecté, ect.) en plaçant l'utilisateur au
                centre de ses préocuppations. L'objectif est de rendre
                l'expérience utilisateur la plus fluide et agréable possible.
              </p>
            </div>

            {/*number 2*/}
            <div className="col-11 col-md-3 border p-3 m-3">
              <i class="bi bi-code-slash"></i>
              <h2>Développement web</h2>
              <p>
                Le développement de sites web consiste à créer des sites
                internet en utiliseant des languages de programmation (
                <span>html</span>,<span>css</span>, JavaScript, <span>php</span>
                , ect.) et des frameworks (Bootstrap, React, Angular, ect.) pour
                créer des sites web fonctionnels et interactifs.
              </p>
            </div>

            {/*Number 3*/}
            <div className="col-11 col-md-3 border p-3 m-3">
              <i class="bi bi-search"></i>
              <h2>Référencement</h2>
              <p>
                Le Référencement naturel (<span>seo</span>) est une technique
                qui consiste à optimiser un site web pour le faire remonter dans
                les résultats des moteurs de recherche (Google, Bing, Yahoo,
                ect.) L'objectif est d'attirer un maximum de visiteurs qualifiés
                sur le site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
