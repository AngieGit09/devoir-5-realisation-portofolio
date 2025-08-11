import React from "react";
const Services = () => {
  return (
    <section>
      <img
        src="/assets/banner.jpg"
        alt="photo fond bleue"
        style={{ objectFit: "contain" }}
      />
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

      <div className="container-fluid text-center">
        <div className="row justify-content-center">
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
          <div className="col-11 col-md-3 border p-3 m-3">
            <i class="bi bi-code-slash"></i>
            <h2>Développement web</h2>
            <p>
              Le développement de sites web consiste à créer des sites internet
              en utiliseant des languages de programmation (<span>html</span>,
              <span>css</span>, JavaScript, <span>php</span>, ect.) et des
              frameworks (Bootstrap, React, Angular, ect.) pour créer des sites
              web fonctionnels et interactifs.
            </p>
          </div>
          <div className="col-11 col-md-3 border p-3 m-3">
            <i class="bi bi-search"></i>
            <h2>Référencement</h2>
            <p>
              Le Référencement naturel (<span>seo</span>) est une technique qui
              consiste à optimiser un site web pour le faire remonter dans les
              résultats des moteurs de recherche (Google, Bing, Yahoo, ect.)
              L'objectif est d'attirer un maximum de visiteurs qualifiés sur le
              site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
