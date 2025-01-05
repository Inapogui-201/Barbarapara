import React, { useState } from 'react';

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
          src="https://static.wixstatic.com/media/cdbeb3_ce6460f3b175481ab42b6c112aa28053~mv2.jpg/v1/fill/w_713,h_467,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/teaserbox_25767099.jpg"
          alt="Thérapie Comportementale et Cognitive"
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

export default TCCService;
