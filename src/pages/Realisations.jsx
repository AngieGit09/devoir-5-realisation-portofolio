import React, { useState } from "react";

function HoverButton({ children, className = "btn btn-primary", ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      {...rest}
      className={className}
      style={{
        transition: "filter .15s",
        filter: hover ? "brightness(1.1)" : "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
}

function ProjectCard({ img, title, text, link = "#", stack = [] }) {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    backgroundColor: hover ? "#efefef" : "var(--bs-body-bg)",
    boxShadow: hover ? "0 .5rem 1rem rgba(0,0,0,.15)" : "none",
    transition: "all .15s ease-in-out",
  };

  return (
    <div
      className="col"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card h-100 border rounded-3" style={cardStyle}>
        {img && (
          <img
            src={img}
            alt={title}
            className="card-img-top"
            style={{ height: 180, objectFit: "cover" }}
            loading="lazy"
          />
        )}

        <div className="card-body d-flex flex-column text-center">
          <h3 className="h5">{title}</h3>
          <p className="flex-grow-1">{text}</p>

          <HoverButton
            className="btn btn-primary btn-sm mt-auto w-auto mx-auto px-3"
            onClick={() => window.open(link, "_blank")}
          >
            Voir le site
          </HoverButton>
        </div>

        {stack.length > 0 && (
          <div className="card-footer bg-body-tertiary text-center">
            <span className="small text-dark">{stack.join(" · ")}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Realisations() {
  const projects = [
    {
      img: "/assets/images/fresh-food.jpg",
      title: "Fresh Food",
      text: "Site de vente de produits frais en ligne",
      link: "#",
      stack: ["PHP", "MySQL", "Bootstrap"],
    },
    {
      img: "/assets/images/restaurant-japonais.jpg",
      title: "Restaurant Akita",
      text: "Site vitrine pour un restaurant",
      link: "#",
      stack: ["WordPress"],
    },
    {
      img: "/assets/images/espace-bien-etre.jpg",
      title: "Espace bien-être",
      text: "Site de vente de produits en ligne",
      link: "#",
      stack: ["Laravel", "Blade"],
    },
    {
      img: "/assets/images/seo.jpg",
      title: "SEO",
      text: "Amélioration du référencement d'un site e-commerce",
      link: "#",
      stack: ["SEO", "Audit", "Optimisation"],
    },
    {
      img: "/assets/images/coder.jpg",
      title: "Création d'une API",
      text: "Création d'une API RESTful publique",
      link: "#",
      stack: ["Node.js", "Express", "REST"],
    },
    {
      img: "/assets/images/screens.jpg",
      title: "Maquette d'un site web",
      text: "Création du prototype d'un site",
      link: "#",
      stack: ["Figma", "Wireframes"],
    },
  ];

  return (
    <main>
      <section>
        <div className="container py-5">
          <div className="text-center mb-4">
            <h1>Portfolio</h1>
            <p className="mb-3">Voici quelques-unes de mes réalisations</p>
            <div className="row justify-content-center">
              <div className="col-4 col-md-3">
                <hr className="border border-primary border-2 opacity-100 m-0" />
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
