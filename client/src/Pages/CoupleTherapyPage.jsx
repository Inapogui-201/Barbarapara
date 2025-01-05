import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Scale, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const CoupleTherapyPage = () => {
  const approachPoints = [
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
      title: "Espace de Dialogue",
      description: "Un espace neutre où les deux partenaires peuvent s'exprimer librement en présence d'un tiers, permettant de relancer le dialogue lorsqu'il est compliqué."
    },
    {
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      title: "Neutralité Absolue",
      description: "Une approche impartiale où le thérapeute ne prend parti pour aucun des conjoints, favorisant un environnement équitable et constructif."
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      title: "Reconstruction des Liens",
      description: "Un accompagnement pour retisser des liens sur le plan affectif, sexuel, et retrouver dialogue et complicité au sein du couple."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://static.wixstatic.com/media/cdbeb3_70009ed38ed34744a46e2fe9995b36ac~mv2.jpg/v1/fill/w_713,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Psychologue%20Couple%20Barbara%20Para.jpg')",
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 container mx-auto px-6 h-screen flex items-center"
        >
          <div className="max-w-3xl space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm"
            >
              Votre espace thérapeutique
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              Thérapie de couple
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-200 leading-relaxed max-w-2xl"
            >
              Un espace sécurisé pour reconstruire votre relation et retrouver l'harmonie au sein de votre couple.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/contact" 
                className="bg-primary text-white px-6 py-3 rounded-full 
                flex items-center justify-center gap-2 font-semibold 
                 transition-colors duration-300 
                shadow-lg hover:shadow-xl"
              >
                Nous Contacter <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section Features */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {approachPoints.map((point, index) => (
              <FeatureCard key={index} {...point} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Approche */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-24"
          >
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Le Processus Thérapeutique</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  La thérapie de couple s'inscrit dans une volonté de sortir d'une situation de conflit, de difficultés 
                  structurelles au sein du couple, entraînant une certaine souffrance, tout en portant la volonté de 
                  rester ensemble et de retisser des liens.
                </p>
                <p className="text-gray-700">
                  Rencontrer un psychologue en couple peut permettre de sortir de l'impasse en essayant d'en repérer 
                  l'origine. C'est un lieu privilégié pour parler de ses désirs, de ses besoins ou de ses souffrances.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://static.wixstatic.com/media/cdbeb3_70009ed38ed34744a46e2fe9995b36ac~mv2.jpg/v1/fill/w_713,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Psychologue%20Couple%20Barbara%20Para.jpg" 
                alt="Thérapie de Couple" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-900">Engagement Mutuel</h3>
                <p className="text-gray-700 leading-relaxed">
                  Une thérapie de couple ne peut avoir lieu sans la participation et l'implication des deux partenaires. 
                  Les séances peuvent être accompagnées d'exercices simples à réaliser entre les rendez-vous pour 
                  approfondir le travail thérapeutique.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-900">Cadre Bienveillant</h3>
                <p className="text-gray-700 leading-relaxed">
                  Le psychologue est soumis à la neutralité et ne prend pas parti pour l'un ou l'autre conjoint. 
                  C'est un espace sécurisé où chacun peut s'exprimer librement, sans jugement, pour découvrir ou 
                  redécouvrir l'autre.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-24 text-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl font-bold">Commencez le Parcours</h2>
            <p className="text-xl text-gray-800 leading-relaxed">
              Une séance dure en moyenne 1 heure. Merci de me solliciter préalablement à toute prise de rendez-vous 
              de couple.
            </p>
            <div className="pt-8">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-[#3a7ca5] text-white px-8 py-4 rounded-full
                hover:bg-[#2c5f7c] transition-all duration-300 text-lg"
              >
                Nous Contacter <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoupleTherapyPage;