import React from 'react';
import { Link } from 'react-router-dom';

const FaqHeader = () => {
  return (
    <div className="bg-[#c3dfef]">
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Title */}
            <h2 className="text-4xl font-bold text-[#3a7ca5] mb-8 text-center">
            F.A.Q.
            </h2>

            {/* Subtitle */}
            <h2 className="text-gray-700 text-lg mb-12 text-center max-w-3xl mx-auto px-4">
              Je réponds à vos questions sur la psychologie
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-lg mb-12 text-center max-w-3xl mx-auto px-4">
            Décider d'entreprendre une psychothérapie n'est pas une décision facile. Cette
              démarche soulève différentes questions auxquelles il peut être difficile de répondre.
            </p>

            {/* Button */}
            <div className="pt-6">
              <Link to={"/faq"}>
                <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-50 bg-primary border-none rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm">
                  Retrouvez ici les questions les plus fréquentes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqHeader;