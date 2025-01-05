import React from 'react';

const FaqHeader = () => {
  return (
    <div className="bg-gray-50/80">
      <section className="relative py-20">
        {/* Decorative line */}
        <div className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-gray-200"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-800">
              F.A.Q.
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-700">
              Je réponds à vos questions sur la psychologie
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Décider d'entreprendre une psychothérapie n'est pas une décision facile. Cette
              démarche soulève différentes questions auxquelles il peut être difficile de répondre.
            </p>

            {/* Button */}
            <div className="pt-6">
             <a href="/faq"><button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-700 bg-primary border-2 border-gray-200 rounded-lg hover:bg-primary transition-colors duration-300 shadow-sm hover:shadow-md">
                Retrouvez ici les questions les plus fréquentes
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-gray-400 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button></a> 
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute left-1/2 bottom-0 h-24 w-px -translate-x-1/2 bg-gray-200"></div>
      </section>
    </div>
  );
};

export default FaqHeader;