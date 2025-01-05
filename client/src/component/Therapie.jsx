import React from 'react';
import { motion } from 'framer-motion';

const TherapyCard = ({ title, subtitle, description, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-xl"
    >
      <div className="relative h-[300px] overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-lg text-white/90">{subtitle}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Therapie = () => {
  const therapies = [
    {
      title: "L'Hypnose",
      subtitle: "Thérapie par Exposition en Réalité Virtuelle",
      description: "L'hypnose est une méthode de relaxation profonde qui permet d'accéder à l'inconscient du patient pour faciliter la modification de comportements ou de pensées négatives. Lors de la séance, le patient entre dans un état de concentration intense, tout en restant pleinement conscient et maître de ses actions. L'hypnose est utilisée pour traiter diverses problématiques telles que les phobies, les addictions, les troubles du sommeil ou la gestion de la douleur.",
      image: "/images/photo1.png"
    },
    {
      title: "TCC",
      subtitle: "Thérapie Comportementale et Cognitive",
      description: "Les TCC sont des thérapies brèves qui s'appuient sur l'interaction entre les pensées, les émotions et les comportements. Elles sont particulièrement efficaces pour traiter les troubles tels que l'anxiété, la dépression, les phobies, et les TOC. La méthode consiste à aider le patient à identifier et modifier les pensées négatives ou irrationnelles qui mènent à des comportements inadaptés.",
      image: "/images/photo2.jpg"
    },
    {
      title: "EMDR",
      subtitle: "Désensibilisation et retraitement par les mouvements oculaires",
      description: "L'EMDR est une approche thérapeutique spécifiquement conçue pour traiter les traumatismes et le stress post-traumatique. Le processus implique des mouvements oculaires guidés pendant que le patient revisite des souvenirs douloureux ou stressants. Ces mouvements oculaires aident à 'désensibiliser' ces souvenirs, permettant au cerveau de les traiter et de les intégrer plus efficacement.",
      image: "https://res.cloudinary.com/do2qwucmp/image/upload/v1734478924/barbara/c4n4enzbvakrqmjg93cg.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos Approches Thérapeutiques
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les différentes méthodes thérapeutiques que nous utilisons pour vous accompagner vers le bien-être.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapies.map((therapy, index) => (
            <TherapyCard key={index} {...therapy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Therapie;