import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PencilRuler, Users, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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

const ChildTherapyPage = () => {
  const approachPoints = [
    {
      icon: <PencilRuler className="w-6 h-6 text-blue-600" />,
      title: "Expression Créative",
      description:
        "Le jeu, le dessin, le modelage et le conte font partie du langage naturel de l'enfant pour exprimer son monde interne.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Approche Familiale",
      description:
        "Les parents demeurent très présents dans ces consultations, c'est la famille qui vient se questionner autour d'une problématique.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
      title: "Communication Adaptée",
      description:
        "L'enfant a besoin que des mots soient mis sur ce qui le concerne car même si ce n'est pas énoncé, il ressent inconsciemment les choses.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/cdbeb3_55ad015a79e54b2d8b70a1f5088c92fb~mv2.jpg/v1/fill/w_713,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Psychologue%20Enfant%20Barbara%20Para.jpg')",
            backgroundAttachment: "fixed",
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
              Thérapie pour enfants
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-200 leading-relaxed max-w-2xl"
            >
              La prise en charge des enfants nécessite que l'on s'adapte à leur
              âge et à leur modalité d'expression.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to={"/contact"}
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
              <h2 className="text-4xl font-bold text-gray-900">
                Le Processus Thérapeutique
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  Au cours du premier entretien, les parents expliquent ce qui
                  les amène à consulter pour leur enfant, parle de lui, de la
                  famille voire des difficultés auxquelles ils sont eux-mêmes
                  confrontés.
                </p>
                <p className="text-gray-700">
                  Tout au long de la prise en charge, les parents demeurent très
                  présents dans ces consultations et c'est en fait la famille
                  qui vient se questionner autour d'une problématique. L'enfant
                  a besoin que des mots soient mis sur ce qui le concerne car
                  même si ce n'est pas énoncé, il ressent inconsciemment les
                  choses.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://static.wixstatic.com/media/cdbeb3_55ad015a79e54b2d8b70a1f5088c92fb~mv2.jpg/v1/fill/w_713,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Psychologue%20Enfant%20Barbara%20Para.jpg"
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
                <h3 className="text-2xl font-bold text-gray-900">
                  Séances Individuelles
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dans le cadre d'une psychothérapie, je peux recevoir l'enfant
                  seul, en général à un rythme mensuel. Au gré des séances, par
                  la parole mais aussi par les autres moyens mis à sa
                  disposition, l'enfant livre son quotidien, son monde
                  imaginaire, ses émotions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  Suivi avec les Parents
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Je rencontre régulièrement les parents pour les tenir informés
                  de l'avancement de la psychothérapie, des évolutions notables
                  et pour échanger avec eux autour du quotidien de l'enfant. Par
                  contre, je ne leur dévoile pas ce que l'enfant me confie à
                  moins que nous ayons décidé avec lui d'en parler à ses
                  parents.
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
              Une séance dure en moyenne 1 heure. Merci de me solliciter
              préalablement à toute prise de rendez-vous pour un enfant.
            </p>
            <div className="pt-8">
              <Link
                to="/prise/de/rendez-vous"
                className="inline-flex items-center gap-3 text-white bg-[#3a7ca5] hover:text-gray-900 px-8 py-4 rounded-full
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

export default ChildTherapyPage;
