import React from 'react';
import { motion } from 'framer-motion';
import Img from "../assets/therapie.jpg"
import FaqHeader from '../component/FaqHeader';

const Hero = () => (
  <section className="relative h-screen overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={Img}
        alt="Espace thérapeutique"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
    </div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-full container mx-auto px-4 md:px-6 flex items-center"
    >
      <div className="max-w-2xl text-white">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-200 text-sm mb-6 mt-32"
        >
          Votre bien-être est notre priorité
        </motion.span>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Bienvenue dans votre espace thérapeutique
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed"
        >
          Découvrez nos approches thérapeutiques personnalisées pour vous accompagner vers le mieux-être et retrouver votre équilibre intérieur.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
        </motion.div>
      </div>
    </motion.div>

  </section>
);

const TherapyCard = ({ title, subtitle, description, image, reverse }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl overflow-hidden shadow-xl"
  >
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0"
          >
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <motion.div
          initial={{ x: reverse ? 50 : -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm">
            {subtitle}
          </span>
          <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
          <div className="prose prose-lg text-gray-600">
            <p className="leading-relaxed">{description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const TherapiesPage = () => {
  const therapies = [
    {
      title: "Les Thérapies Comportementales et Cognitives (TCC)",
      subtitle: "Une approche scientifiquement prouvée",
      description: "Les TCC sont des thérapies brèves qui s'appuient sur l'interaction entre les pensées, les émotions et les comportements. Elles sont particulièrement efficaces pour traiter les troubles tels que l'anxiété, la dépression, les phobies, et les TOC. La méthode consiste à aider le patient à identifier et modifier les pensées négatives ou irrationnelles qui mènent à des comportements inadaptés. En collaborant avec le thérapeute, la personne établit des objectifs concrets pour atteindre un changement durable. Ce processus permet de remplacer les schémas de pensées négatifs par des pensées plus adaptées et réalistes, contribuant ainsi à une gestion plus saine des émotions et des comportements.",
      image: "https://static.wixstatic.com/media/cdbeb3_ce6460f3b175481ab42b6c112aa28053~mv2.jpg/v1/fill/w_713,h_467,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/teaserbox_25767099.jpg"
    },
    {
      title: "L'EMDR",
      subtitle: "Thérapie par Mouvements Oculaires",
      description: "L'EMDR est une approche thérapeutique spécifiquement conçue pour traiter les traumatismes et le stress post-traumatique. Le processus implique des mouvements oculaires guidés pendant que le patient revisite des souvenirs douloureux ou stressants. Ces mouvements oculaires aident à \"désensibiliser\" ces souvenirs, permettant au cerveau de les traiter et de les intégrer plus efficacement. L'EMDR est également utile pour les phobies, l'anxiété, et même les troubles du sommeil. Contrairement aux idées reçues, l'EMDR n'est pas un état de transe, mais plutôt un processus structuré qui permet de réduire l'impact émotionnel de certains souvenirs.",
      image: "https://static.wixstatic.com/media/cdbeb3_c2d4119998ee409eb79654ad18f677a9~mv2.jpg/v1/crop/x_0,y_11,w_1000,h_644/fill/w_713,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Th%C3%A9rapie%20EMDR%20psychologue.jpg"
    },
    {
      title: "L'Hypnose",
      subtitle: "Une approche douce et naturelle",
      description: "L'hypnose est une méthode de relaxation profonde qui permet d'accéder à l'inconscient du patient pour faciliter la modification de comportements ou de pensées négatives. Lors de la séance, le patient entre dans un état de concentration intense, tout en restant pleinement conscient et maître de ses actions. L'hypnose est utilisée pour traiter diverses problématiques telles que les phobies, les addictions, les troubles du sommeil ou la gestion de la douleur. Une idée reçue fréquente est de penser que l'hypnose implique une perte de contrôle, mais en réalité, le patient reste entièrement actif et en contrôle tout au long de la séance.",
      image: "https://static.wixstatic.com/media/98a643b781ec4fecb0aedc8376cbf4d2.jpg/v1/crop/x_0,y_93,w_7360,h_4742/fill/w_713,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dispositif%20de%20r%C3%A9alit%C3%A9%20virtuelle.jpg"
    }
  ];

  return (
    <div className="bg-gray-50">
      <Hero />
      <div className="container mx-auto px-4 py-16 space-y-16">
        {therapies.map((therapy, index) => (
          <TherapyCard 
            key={index}
            {...therapy}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
      <FaqHeader />
    </div>
  );
};

export default TherapiesPage;