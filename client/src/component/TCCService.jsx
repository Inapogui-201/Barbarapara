import React, { useState } from 'react';
import IMAGE from "../assets/tcc.avif"
import { Link } from 'react-router-dom';

const TCCService = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card bg-base-100 image-full w-90 h-auto max-h-[800px] overflow-hidden shadow-xl transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure>
        <img
          src={IMAGE}
          alt="Psychologue Clinicienne Barbarapara Thérapie Comportementale et Cognitive"
          className="transition-opacity duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">TCC</h2>
        <p className="text-lg font-semibold">Thérapie Comportementale et Cognitive</p>

        {/* Texte et bouton qui apparaissent au survol */}
        {isHovered && (
          <div className="transition-opacity duration-300">
            <p>
              Les TCC sont des thérapies brèves qui agissent sur les pensées, émotions et comportements. Elles traitent efficacement l’anxiété, la dépression et les phobies, en aidant à remplacer les pensées négatives par des pensées adaptées pour un changement durable.
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

export default TCCService;
