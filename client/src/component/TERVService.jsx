import React, { useState } from 'react';

const TERVService = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card bg-base-100 image-full w-90 shadow-xl transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure>
        <img
          src="https://static.wixstatic.com/media/98a643b781ec4fecb0aedc8376cbf4d2.jpg/v1/crop/x_0,y_93,w_7360,h_4742/fill/w_713,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dispositif%20de%20r%C3%A9alit%C3%A9%20virtuelle.jpg"
          alt="Thérapie par Exposition en Réalité Virtuelle"
          className="transition-opacity duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">L'Hypnose</h2>
        <p className="text-lg">Thérapie par Exposition en Réalité Virtuelle</p>

        {/* Texte et bouton qui apparaissent au survol */}
        {isHovered && (
          <div className="transition-opacity duration-300">
            <p>
              L’hypnose est une méthode de relaxation qui aide à modifier pensées et comportements négatifs. Utilisée pour traiter phobies, addictions, ou douleurs, elle place le patient en état de concentration tout en gardant son contrôle total.
            </p>
            <a
              href="/therapie"
              className="btn  bg-primary hover:bg-primary text-white mt-4"
            >
              En savoir plus
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TERVService;
