import React from "react";
export default function Contact() {
  return (
    <main className="container-fluid py-5">
      <div className="text-center mb-4">
         {/*Bloc 1*/}
        <h1 className="mt-4">Contact</h1>
        <p className="text-muted mt-3">
          Pour me contacter en vue d’un entretien ou d’une future collaboration,
          merci de remplir le formulaire.
        </p>
        <div className="bg-primary" style={{ height: "4px" }}>
          <hr className="custom-hr" />
        </div>
      </div>

      {/*Bloc 2*/}
      <div className="row g-4 justify-content-center shadow m-5">
        {/* Formulaire */}
        <div className="col-12 col-md-4">
          <h2 className="h5 text-break">Formulaire de contact</h2>
          <div className="bg-primary" style={{ height: "4px" }}>
            <hr className="custom-hr" />
          </div>
          <form className="mt-3">
            <div className="mb-2">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom"
                className="form-control form-control-lg"
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre adresse email"
                className="form-control form-control-lg"
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Votre numéro de téléphone"
                className="form-control form-control-lg"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Sujet"
                className="form-control form-control-lg"
              />
            </div>
            <div className="mb-3">
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                className="form-control form-control-lg"
                rows="6"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary rounded-1 m-3 text-wrap text-break"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Coordonnées */}
        <div className="col-12 col-md-4">
          <h2 className="h5 text-break">Mes coordonnées</h2>
          <div className="bg-primary mb-3" style={{ height: "4px" }}>
            <hr className="custom-hr" />
          </div>
          <p className="mb-2">
            <strong>John Doe</strong>
            <br />
            40 rue Laure Diebold
            <br />
            69009 Lyon, France
          </p>
          <p className="mb-2">
            <a href="tel:1020304050">10 20 30 40 50</a>
            <br />
            <a href="mailto:john.doe@gmail.com" className="text-break">
              john.doe@gmail.com
            </a>
          </p>
          <div className="ratio ratio-4x3">
            <iframe
              title="Localisation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.253931508076!2d4.796403975777966!3d45.77866571240285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1754683083857!5m2!1sfr!2sfr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
