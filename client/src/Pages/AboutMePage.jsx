import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  BriefcaseBusiness, 
  GraduationCap, 
  HeartHandshake, 
  ScrollText, 
  Search, 
  Building,
  Calendar,
  ArrowRight
} from 'lucide-react';
import img from "../assets/barbarapara.png"
import { Link } from 'react-router-dom';

const AboutMePage = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const specialties = [
    {
      title: "TCC",
      description: "Thérapie Comportementale et Cognitive"
    },
    {
      title: "EMDR",
      description: "désensibilisation par les mouvements oculaires"
    },
    {
      title: "TERV",
      description: "Thérapie par Exposition en Réalité Virtuelle"
    }
  ];

  const experienceItems = [
    "Service hospitalo-universitaire de psychiatrie, équipe INSERM, Le Kremlin Bicêtre",
    "Unité de psychiatrie périnatale (hospitalisation mère-bébé), Le Kremlin Bicêtre",
    "Centre hospitalier spécialisé Paul Guiraud, Clamart",
    "Groupe hospitalier Paul Guiraud, Pôle Addictions, Villejuif",
    "Institut hospitalier de psychanalyse de l'hôpital Sainte-Anne, Paris 14"
  ];

  const competences = [
    "les addictions",
    "les maltraitances infantiles",
    "le trouble de stress post-traumatique et le deuil compliqué",
    "la crise suicidaire",
    "les violences conjugales : victimes et auteurs"
  ];

  const research = [
    {
      year: "En cours",
      title: "Recherche clinique sur le thème des dépressions du post-partum"
    },
    {
      year: "2017",
      title: "Présentation de mes travaux aux journées annuelles de la Société française d'alcoologie"
    },
    {
      year: "2017",
      title: "Présentation de mes travaux au colloque « Addictions et troubles psychiques »"
    },
    {
      year: "2016",
      title: "Cas clinique sur le thème de l'impact d'événements traumatiques comme les attentats terroristes"
    },
    {
      year: "2015",
      title: "Recherche en psychologie sociale sur le thème des transsexualités"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12  bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariant}
              className="text-left space-y-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-8">
                À Propos de Moi
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Psychologue clinicienne, psychothérapeute et chercheur, titulaire du diplôme de psychologie clinique 
                et psychothérapies de l'université Paris 8. Spécialisée en TCC par l'IFFORTHECC.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
              Mon approche est humaine, globale et personnalisée. Je prends en compte l'être humain dans sa globalité en m'appuyant sur des méthodes complémentaires qui permettent de travailler en profondeur sur les blocages, les souffrances ou les transitions de vie.
              </p>
              <div className="flex gap-4">
              <Link
                to={"/prise/de/rendez-vous"}
                className="bg-primary text-white px-6 py-3 rounded-full 
                flex items-center justify-center gap-2 font-semibold 
                 transition-colors duration-300 
                shadow-lg hover:shadow-xl"
              >
                <Calendar size={20} />
                Prenez Rendez-vous
                <ArrowRight size={20} />
              </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg relative mt-8">
                <img 
                  src={img}
                  alt="Portrait professionnel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Introduction */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariant}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-black text-lg leading-relaxed">
                Au fil des années, j'ai enrichi ma pratique et mes connaissances en me formant à différentes approches 
                thérapeutiques (TERV, EMDR, EFT, TIPI, ICV, psychologie positive…). Je suis également thérapeute de 
                couple, formée à l'Ecole de formation des praticiens en psychothérapie d'Aix en Provence.
              </p>
              <p className="text-black text-lg leading-relaxed">
                Je suis spécialisée sur les troubles anxieux (phobies, trouble panique, TOC…) et les dépressions, 
                dont la dépression du post-partum (DU sur les troubles en lien avec la périnatalité de l'université 
                Paris Sud, Hôpital Béclère).
              </p>
            </motion.div>

            {/* Specialties */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariant}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                Mes Spécialités
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {specialties.map((specialty, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-black">{specialty.title}</h3>
                    <p className="text-gray-600">{specialty.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Research */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariant}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Search className="w-8 h-8 text-primary" />
                Mes Recherches
              </h2>
              <div className="space-y-6">
                {research.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-primary pl-4 hover:border-primary transition-colors"
                  >
                    <div className="text-sm text-primary font-semibold">{item.year}</div>
                    <div className="text-gray-800">{item.title}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariant}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <BriefcaseBusiness className="w-8 h-8 text-primary" />
                Expérience
              </h2>
              <p className="text-gray-800 mb-6">
                J'exerce aujourd'hui en cabinet privé après un long parcours en recherche et dans différents 
                établissements de soins :
              </p>
              <ul className="space-y-4">
                {experienceItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 group"
                  >
                    <HeartHandshake className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:text-primary transition-colors" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Diplomas */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariant}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-primary" />
                Diplômes et Compétences
              </h2>
              <div className="bg-gray-50 p-8 rounded-xl space-y-6">
                <p className="text-gray-900 font-semibold">Je suis titulaire :</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-800">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    du diplôme de « psychologie clinique et psychothérapies » de l'université Paris 8 (niveau Master)
                  </li>
                  <li className="flex items-center gap-2 text-gray-800">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    du diplôme universitaire en psychisme et périnatalité de l'université Paris Sud, Hôpital Béclère
                  </li>
                </ul>
                
                <p className="text-gray-900 font-semibold mt-6">Compétences spécifiques :</p>
                <ul className="space-y-3">
                  {competences.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-800">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Registration Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariant}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-2xl space-y-4"
            >
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <ScrollText className="w-6 h-6 text-primary" />
                À Savoir
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Le numéro ADELI de psychologue et psychothérapeute vous garantie que le psychologue ou le 
                psychothérapeute auquel vous vous adressez est bien habilité à user de ce titre et est enregistré 
                auprès de l'ARS (Agence Régionale de Santé). Je suis répertoriée sur le fichier ADELI de l'ARS 
                du Val-de-Marne (94.93.2155.8) et veille au respect du code de déontologie des psychologues. 
                J'adhère à la charte européenne des psychologues et suis membre du syndicat national des psychologues.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariant}
              viewport={{ once: true }}
              className="text-center space-y-4 py-8"
            >
              <p className="text-xl text-gray-600 italic">
                "Mes valeurs premières sont la qualité de l'écoute, la confiance et l'adaptation."
              </p>
              <p className="text-2xl font-semibold text-gray-900">Barbara</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;