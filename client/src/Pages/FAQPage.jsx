import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Send } from 'lucide-react';

const questions = [
  {
    question: "Quelle différence entre un psychologue, un psychiatre, un psychothérapeute et un psychanalyste ?",
    answer: "Le psychologue est un professionnel de la psychologie. Il a suivi une formation universitaire théorique et pratique de 5 années exclusivement réservée à la psychologie. Le titre de psychologue est délivré aux personnes ayant un master 2 en psychologie. Le psychiatre est un médecin titulaire d’un doctorat en médecine qui s’est spécialisé en santé mentale. Il diagnostique, traite et tente de prévenir les maladies mentales et les désordres émotionnels. Le psychiatre est habilité à prescrire des médicaments, tels que les antidépresseurs, les anxiolytiques, et les neuroleptiques. Si celui-ci possède le titre de psychothérapeute, il peut accompagner ses patients dans le cadre d’une psychothérapie, ou faire appel à d’autres professionnels lorsque cela est nécessaire (psychologue, hypnothérapeute, psychanalyste..). Seules les consultations chez un médecin psychiatre sont remboursées par la sécurité sociale. Le titre de psychothérapeute requiert une formation minimale. Il ne s’agit cependant pas d’un diplôme reconnu par l’état. Ce titre peut être utilisé par des psychiatres et des psychologues, mais aussi par toute autre personne (quelle que soit sa formation de base) s’étant formée à une thérapie définie. Un psychanalyste le devient après avoir suivi une psychanalyse durant plusieurs années. Le psychanalyste se forme à la pratique psychanalytique lors de séminaires et de cours privés et généralement, il fait partie d’une société savante psychanalytique. Un psychanalyste peut être un psychologue ou un psychiatre, mais ce n’est pas toujours le cas et ce n’est pas obligatoire. Le titre de psychanalyste n’est pas réglementé en France."
  },
  {
    question: "Qu'est-ce qu'un psychologue clinicien ?",
    answer: "La psychologie regroupe différentes discipline : la psychologie sociale, la psychologie du travail, la psychologie développementale, la psychologie clinique… Le psychologue clinicien est titulaire d’un Master 2 en psychologie clinique. C’est un expert dans son domaine : il étudie, analyse le comportement humain, la personnalité et les relations interpersonnelles et est capable d’identifier les pathologies mentales lorsque celui-ci est spécialisé en psychopathologie."
  },
  {
    question: "Que dit la loi sur l’exercice professionnel de la psychologie clinique ?",
    answer: "L’usage professionnel du titre de psychologue est réservé aux titulaires d’un Master 2, formation universitaire fondamentale et appliquée de haut niveau en psychologie préparant à la vie professionnelle [Loi n° 85-772 du 25 juillet 1985 Chapitre V Mesures relatives à la profession de psychologue Art.44 – Legifrance]. Le droit de pratiquer l’exercice de la psychologie exige l’inscription sur le fichier ADELI, fichier national, contrôlé et tenu à jour par les autorités de l’Agence Régionale de Santé (ARS), qui regroupe les professionnels de la santé [Loi n°2002-303 du 4 mars 2002 – Legifrance]."
  },
  {
    question: "Pourquoi consulter un psychologue clinicien ?",
    answer: "Il n’existe pas nécessairement de raison pouvant amener à consulter. Le psychologue peut vous aider à définir votre demande et vos difficultés avant d’entamer la démarche thérapeutique. En revanche, certains motifs reviennent souvent : un stress intense, un épuisement professionnel (burn-out), une dépression, des difficultés relationnelles, un deuil, une rupture, un échec professionnel, des troubles alimentaires, problème d’affirmation de soi, estime de soi, des difficultés dans la gestion des émotions, des obsessions… D’une manière générale, chaque fois que vous êtes confrontés à une problématique qui freine votre avancée dans la vie, qui vous pèse, vous préoccupe plus que de raison et à laquelle vos ressources personnelles et sociales (votre famille, vos amis) ne suffisent pas à apporter une réponse satisfaisante, vous pouvez vous dire qu’il peut être utile d’en parler à un psychologue clinicien, professionnel du psychisme, du rapport de soi à soi et plus largement des relations humaines."
  },
  {
    question: "Comment choisir son psychologue clinicien ?",
    answer: "Le premier critère pour le choix de votre thérapeute est le sérieux de la personne. La méthode la plus sure reste le bouche à oreille. Renseignez-vous dans votre entourage. Les psychologues cliniciens exerçant en cabinets libéraux sont généralement répertoriés sur les pages jaunes ou peuvent se trouver sur internet. Le deuxième critère est la manière dont le psychologue aborde le cadre (type d’intervention, tarif, fréquence et durée d’une séance…). Ce cadre est clairement annoncé à la première séance, même si avec le temps, il peut évoluer selon vos besoins et votre situation. Le troisième critère est majeur. Il concerne l’alliance thérapeutique, facteur essentiel dans la réussite d’une thérapie. Il est inutile de commencer une thérapie si vous ne vous sentez pas en confiance avec votre thérapeute."
  },
  {
    question: "Qu’est-ce qu’une psychothérapie ?",
    answer: "La psychothérapie vise à soulager un mal-être de nature psychologique. Cette démarche s’adresse à toute personne voulant entraîner un changement dans sa vie. Le thérapeute aide la personne à comprendre et mieux vivre, à faire des choix difficiles, à trouver des réponses à ses questions, à apprendre à gérer ses comportements, ses pensées et ses émotions dysfonctionnelles."
  },
  {
    question: "Ce que n’est pas une psychothérapie ?",
    answer: "Une psychothérapie n'est pas une conversation engagée pour le plaisir ou avec quelqu’un qui ne vous écoute pas. Les échanges entre le psychologue et la personne en thérapie sont orientés et visent des objectifs précis. L'écoute attentive du psychologue fait partie de la thérapie, mais le psychologue intervient également : il pose des questions et vous aide à exprimer des sentiments. Lors d’une psychothérapie, les échanges sont particuliers car il s’agit d’une conversation engagée où l'alliance thérapeutique a des objectifs précis à atteindre."
  },
  {
    question: "Comment se déroule une psychothérapie ?",
    answer: "La première étape de la psychothérapie passe par une évaluation de vos difficultés, permettant au professionnel de déterminer la nature du problème, les facteurs déclenchant et entretenant, vos objectifs concernant la psychothérapie, vos attentes et vos besoins. L’évaluation nécessite parfois plusieurs séances, le psychothérapeute peut s’aider d’échelles diagnostiques pouvant l’aider à établir un diagnostic si cela s’avère nécessaire. Cette première évaluation peut vous permettre de poser des questions au thérapeute (sa formation, sa méthode de travail, son orientation théorique, ses disponibilités...)."
  },
  {
    question: "Ce que n’est pas une psychothérapie ?",
    answer: "Une psychothérapie n'est pas une conversation engagée pour le plaisir ou avec quelqu’un qui ne vous écoute pas. Les échanges entre le psychologue et la personne en thérapie sont orientés et visent des objectifs précis. L'écoute attentive du psychologue fait partie de la thérapie, mais le psychologue intervient également : il pose des questions et vous aide à exprimer des sentiments. Lors d’une psychothérapie, les échanges sont particuliers car il s’agit d’une conversation engagée où l'alliance thérapeutique a des objectifs précis à atteindre."
  },
  {
    question: "Que se passe-t-il en cas d'annulation d’une consultation ?",
    answer: "Si vous souhaitez reporter ou annuler un rendez-vous, prévenir au minimum 24 heures à l’avance, jours ouvrés. Toute consultation non annulée dans ce délai sera due. En effet, un temps déterminé vous est totalement alloué pour chaque consultation. Pour pouvoir proposer les créneaux horaires qui se libèrent à des personnes qui en auraient besoin, il est indispensable que je sois prévenue suffisamment à l’avance."
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Adresse email invalide";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Ici, ajoutez votre logique d'envoi de formulaire
        console.log(formData);
        // Réinitialiser le formulaire
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        alert('Message envoyé avec succès !');
      } catch (error) {
        alert('Une erreur est survenue.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Votre prénom
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Votre nom
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Votre e-mail
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone (facultatif)
          </label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Votre question
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <Send className="w-5 h-5 mr-2" />
          Envoyer votre question
        </button>
      </div>
    </form>
  );
};

const FAQPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <motion.section 
        className="bg-[#c3dfef] text-white "
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-light text-gray-900 mt-20"
            >
              F.A.Q.
            </motion.h1>
            <motion.h2 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-light text-gray-700"
            >
              Je réponds à vos questions sur la psychologie
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Décider d'entreprendre une psychothérapie n'est pas une décision facile. 
              Cette démarche soulève différentes questions auxquelles il peut être difficile 
              de répondre. Vous trouverez ci-dessous les questions les plus fréquentes.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <AnimatePresence>
              {questions.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-200 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <button
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                    className="w-full py-6 px-4 flex justify-between items-center text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        activeQuestion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeQuestion === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-6 text-gray-600"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Vous n'avez pas trouvé réponse à vos questions ?
              </h3>
              <p className="text-gray-600">
                N'hésitez pas à me poser votre question, je vous répondrai dans les plus brefs délais.
              </p>
            </motion.div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;