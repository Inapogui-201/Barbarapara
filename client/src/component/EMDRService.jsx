import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import IMAGE from "../assets/emrd2.jpg"
import { Link } from 'react-router-dom';

const EMDRService = () => {
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
          alt="Psychologue Clinicienne Barbarapara EMDR Therapy"
          className="transition-opacity duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">EMDR</h2>
        <p className="text-lg">
          Désensibilisation et retraitement par les mouvements oculaires
        </p>

        {/* Texte et bouton qui apparaissent au survol */}
        {isHovered && (
          <div className="transition-opacity duration-300">
            <p>
              L’EMDR est une thérapie pour traiter les traumatismes, le stress post-traumatique, les phobies et l’anxiété. Grâce à des mouvements oculaires guidés, elle aide le cerveau à désensibiliser et intégrer des souvenirs douloureux, réduisant leur impact émotionnel.
            </p>
            <div className="card-actions mt-4">
            <Link
              to={"/thérapie"}
              className="btn bg-primary border-none hover:bg-primary text-white mt-4"
            >
              En savoir plus
            </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EMDRService;
