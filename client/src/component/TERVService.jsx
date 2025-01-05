import React, { useState } from 'react';
import IMAGE from "../assets/terv.avif"
import { Link } from 'react-router-dom';
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
          src={IMAGE}
          alt="Psychologue Clinicienne Barbarapara Thérapie par Exposition en Réalité Virtuelle"
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
            <Link
              to={"/thérapie"}
              className="btn  bg-primary border-none hover:bg-primary text-white mt-4"
            >
              En savoir plus
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TERVService;
