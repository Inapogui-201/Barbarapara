import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, MessageCircle } from 'lucide-react';
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

const AdolescentTherapyPage = () => {
  const approachPoints = [
    {
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      title: "Soutien et Accompagnement",
      description: "Une thérapie de soutien qui accompagne le processus adolescent, une période de profonds remaniements vers l'âge adulte."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Espace de Liberté",
      description: "Un cadre souple où l'adolescent peut s'exprimer librement, tout en respectant son besoin d'indépendance et de maîtrise."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
      title: "Approche Adaptative",
      description: "Des entretiens qui s'adaptent aux besoins : uniques ou réguliers, avec ou sans implication parentale selon le souhait de l'adolescent."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://static.wixstatic.com/media/cdbeb3_effb136ea9e342da96f6d55c450f114e~mv2.jpg/v1/fill/w_713,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Psychologue%20Adolescent%20Barbara%20Para.jpg')",
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
              className="text-5xl md:text-6xl font-bold text-white leading-tight"
            >
              Thérapie pour adolescents
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-200 leading-relaxed max-w-2xl"
            >
              Un accompagnement adapté pour soutenir les adolescents dans leur développement et leur quête d'identité.
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
                  La psychothérapie de l'adolescent est le plus souvent une thérapie de soutien et d'accompagnement 
                  du processus adolescent, période de profonds remaniements au cours duquel il lui faut se séparer 
                  de ses parents, s'individualiser, devenir adulte.
                </p>
                <p className="text-gray-700">
                  C'est à partir d'échanges autour d'anecdotes familiales, de bavardages qu'il entretient avec ses 
                  camarades, de disputes, de son activité sur les réseaux sociaux, que le thérapeute écoute l'adolescent 
                  dans sa complexité et ses revirements au jour le jour.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://static.wixstatic.com/media/cdbeb3_effb136ea9e342da96f6d55c450f114e~mv2.jpg/v1/fill/w_713,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Psychologue%20Adolescent%20Barbara%20Para.jpg" 
                alt="Thérapie Adolescent" 
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
                <h3 className="text-2xl font-bold text-gray-900">Démarche Personnalisée</h3>
                <p className="text-gray-700 leading-relaxed">
                  Certains adolescents peuvent soutenir une demande et venir de leur propre fait aux séances sans 
                  vouloir que leurs parents ne soient trop associés à cette démarche qu'il souhaite surtout individuelle. 
                  La psychothérapie permet de diminuer les angoisses, de soulager les blessures narcissiques voire de 
                  remettre en marche un processus qui se trouvait en panne.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-900">Cadre Adaptatif</h3>
                <p className="text-gray-700 leading-relaxed">
                  L'organisation des rencontres avec un adolescent demande de la souplesse car la volonté de maîtriser 
                  la relation et de garder son indépendance est toujours très présente. Des entretiens uniques ou 
                  renouvelés à la demande de l'adolescent peuvent avoir une valeur thérapeutique considérable.
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
              Une séance dure en moyenne 1 heure. Les entretiens préliminaires peuvent être l'occasion de comprendre 
              et de se réapproprier la démarche thérapeutique.
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

export default AdolescentTherapyPage;