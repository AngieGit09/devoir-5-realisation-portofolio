import React, { useEffect } from "react";

export default function MonProfil({ onClose }) {
  useEffect(() => {
    document.body.classList.add("modal-open");
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop show";
    document.body.appendChild(backdrop);

    const onEsc = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.classList.remove("modal-open");
      backdrop.remove();
      window.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  return (
    <div className="modal show" style={{ display: "block" }} onClick={onClose}>
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content bg-dark text-light">
          <div className="modal-header border-secondary">
            <h5 className="modal-title">Mon profil GitHub</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            />
          </div>

          <div className="modal-body text-start">
            <p>
              <i class="bi bi-person-fill"></i> John Doe
            </p>
            <hr />
            <i class="bi bi-geo-alt"></i>
            <hr />
            <p>
              <i class="bi bi-card-text"></i> Aw we all know, John Doe's
              identify is unknown. I just wanted to contribute without being
              know.
            </p>
            <hr />
            <p>
              <i class="bi bi-box-fill"></i> Repositories: 1
            </p>
            <hr />
            <p>
              <i class="bi bi-people"></i> Followers: 16
            </p>
            <hr />
            <p>
              <i class="bi bi-people"></i> Following: 0
            </p>
          </div>

          <div className="modal-footer border-secondary">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
