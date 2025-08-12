import React from "react";

{
  /*Bouton voir site*/
}
const Bouton = ({
  href = "#",
  texte = "Voir le site",
  couleur = "primary",
  taille = "btn-sm",
}) => (
  <a
    href={href}
    className={`btn btn-${couleur} ${taille} border-0 rounded-1 d-block mx-auto`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {texte}
  </a>
);

const Realisations = () => {
  return (
    <main>
      {/*Bloc 1*/}
      <img
        src="/assets/banner.jpg"
        alt="photo fond bleue"
        style={{ objectFit: "contain" }}
      />
      <section>
        <div className="container-fluid text-center">
          <h1 className="mt-4">Portofolio</h1>
          <p>Voir quelques unes de mes réalisations</p>

          <div className="row justify-content-center">
            <div className="col-4 col-md-5 mb-5">
              <div className="bg-primary" style={{ height: "4px" }}>
                <hr className="custom-hr" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Bloc 2*/}
      <section>
        <div className="container-fluid text-center">
          <div className="row g-4 justify-content-center">
            
            {/* Carte 1 */}
            <div className="col-11 col-md-3 border p-2 m-2">
              <img
                className="img-fluid w-100 mb-2"
                src="/assets/images/fresh-food.jpg"
                alt="Photos de légumes"
              />
              <h2 className="h5">Fresh food</h2>
              <p className="mb-3">Site de vente de produits frais en ligne</p>

              <Bouton
                href="https://exemple.com/fresh-food"
                texte="Voir le site"
                couleur="primary"
              />

              <hr className="my-3" />
              <p className="mb-0">
                Site statique avec <span>PHP</span> et MySQL
              </p>
            </div>

            {/* Carte 2 */}
            <div className="col-11 col-md-3 border p-2 m-2">
              <img
                className="img-fluid w-100 mb-2"
                src="/assets/images/restaurant-japonais.jpg"
                alt="Photos de sushis"
              />
              <h2 className="h5">Restaurant Akira</h2>
              <p className="mb-3">Site vitrine pour un restaurant</p>

              <Bouton
                href="https://exemple.com/akira"
                texte="Voir le site"
                couleur="primary"
              />

              <hr className="my-3" />
              <p className="mb-0">Site vitrine WordPress</p>
            </div>

            {/* Carte 3 */}
            <div className="col-11 col-md-3 border p-2 m-2">
              <img
                className="img-fluid w-100 mb-2"
                src="/assets/images/espace-bien-etre.jpg"
                alt="Couché de soleil, bouddha et pierres"
              />
              <h2 className="h5">Espace bien-être</h2>
              <p className="mb-3">Site de vente de produits en ligne</p>

              <Bouton
                href="https://exemple.com/bien-etre"
                texte="Voir le site"
                couleur="primary"
              />

              <hr className="my-3" />
              <p className="mb-0">
                Site statique avec <span>Laravel</span>
              </p>
            </div>

            {/* Carte 4 */}
            <div className="col-11 col-md-3 border p-2 m-2">
              <img
                className="img-fluid w-100 mb-2"
                src="/assets/images/seo.jpg"
                alt="Mot SEO répété"
              />
              <h2 className="h5">SEO</h2>
              <p className="mb-3">
                Amélioration du référencement d'un site e-commerce
              </p>

              <Bouton
                href="https://exemple.com/seo"
                texte="Voir le site"
                couleur="primary"
              />

              <hr className="my-3" />
              <p className="mb-0">Utilisation des outils SEO</p>
            </div>

            {/* Carte 5 */}
            <div className="col-11 col-md-3 border p-2 m-2">
              <img
                className="img-fluid w-100 mb-2"
                src="/assets/images/coder.jpg"
                alt="Photo de code informatique"
              />
              <h2 className="h5">
                Création d'une <span>API</span>
              </h2>
              <p className="mb-3">
                Création d'une <span>API RESTful</span> publique
              </p>

              <Bouton
                href="https://exemple.com/api"
                texte="Voir le site"
                couleur="primary"
              />

              <hr className="my-3" />
              <p className="mb-0">
                <span>PHP - Symfony</span>
              </p>
            </div>

            {/* Carte 6 */}
            <div className="col-11 col-md-3 border p-2 m-2">
              <img
                className="img-fluid w-100 mb-2"
                src="/assets/images/screens.jpg"
                alt="Photo de différents écrans"
              />
              <h2 className="h5">Maquette d'un site web</h2>
              <p className="mb-3">Maquette d'un site web</p>

              <Bouton
                href="https://exemple.com/maquette"
                texte="Voir le site"
                couleur="primary"
              />

              <hr className="my-3" />
              <p className="mb-0">Réalisation avec Figma</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Realisations;
