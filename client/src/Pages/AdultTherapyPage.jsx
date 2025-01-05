import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const HomePage = () => {
  const features = [
    {
      icon: Heart,
      title: "Approche Bienveillante",
      description: "Un espace sécurisant où vous pouvez vous exprimer librement, sans jugement."
    },
    {
      icon: MessageCircle,
      title: "Écoute Attentive",
      description: "Une attention particulière portée à vos besoins et à votre histoire personnelle."
    },
    {
      icon: Clock,
      title: "Flexibilité",
      description: "Des séances adaptées à votre rythme et à vos objectifs thérapeutiques."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section Améliorée */}
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://static.wixstatic.com/media/cdbeb3_7ebe5de24f034f668d763b3393002dfb~mv2.jpg/v1/fill/w_713,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Psychologue%20Adulte%20Barbara%20Para.jpg')",
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
              Thérapie pour Adultes
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-200 leading-relaxed max-w-2xl"
            >
              Un espace d'écoute bienveillante pour votre épanouissement personnel et votre bien-être mental.
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
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
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
              <h2 className="text-4xl font-bold text-gray-900">Notre Approche Thérapeutique</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  La psychothérapie individuelle est une forme classique de thérapie. Pour le praticien, 
                  cette pratique est basée sur une écoute attentive, bienveillante et sans jugement. 
                  Il s'agit de favoriser le déploiement d'une parole libre et d'un échange authentique 
                  qui permettent aux conflits, aux doutes, aux fantasmes, aux affects douloureux de 
                  trouver une modalité d'expression.
                </p>
                <p className="text-gray-700">
                  Mon rôle en tant que psychothérapeute est d'aider à l'exploration de soi, au repérage 
                  de ses mouvements inconscients afin de se libérer de ce qui gêne, entrave ou empêche 
                  de cheminer dans la vie.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://static.wixstatic.com/media/cdbeb3_7ebe5de24f034f668d763b3393002dfb~mv2.jpg/v1/fill/w_713,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Psychologue%20Adulte%20Barbara%20Para.jpg" 
                alt="Thérapie" 
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
                <h3 className="text-2xl font-bold text-gray-900">Première Séance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lors de la première séance, nous prenons le temps de faire connaissance de manière 
                  à préciser votre demande, votre problématique et/ou votre besoin. Ensemble, nous 
                  mettons en lumière les événements importants de votre vie afin de saisir le contexte 
                  dans lequel s'inscrit votre demande.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-900">Suivi Thérapeutique</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pour les séances suivantes, nous nous inscrivons dans un échange verbal au cours 
                  duquel nous revenons d'abord sur votre humeur du moment pour nous diriger 
                  progressivement vers votre problématique, vos questionnements et éventuels 
                  conflits internes.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-24  text-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl font-bold">Commencez Votre Parcours</h2>
            <p className="text-xl text-gray-800 leading-relaxed">
              Une séance dure en moyenne 1 heure. Au besoin, les séances peuvent être accompagnées 
              d'exercices simples que vous pourrez parfois avoir à faire entre deux séances.
            </p>
            <div className="pt-8">
              <Link 
                to="/appointment" 
                className="inline-flex items-center gap-3 bg-[#3a7ca5] text-gray-900 px-8 py-4 rounded-full
                hover:bg-gray-100 transition-all duration-300 text-lg"
              >
                Prendre Rendez-vous <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;