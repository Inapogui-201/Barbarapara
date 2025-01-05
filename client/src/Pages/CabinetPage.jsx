import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faCalendar, faCheck, faClock, faUsers, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const CabinetPage = () => {
  const therapies = [
    "Thérapie Comportementale et Cognitive (TCC)",
    "Thérapie par Intégration du Cycle de la Vie (ICV)",
    "Je ne pratique plus la thérapie par Exposition en Réalité Virtuelle (TERV)",
    "Désensibilisation et retraitement par les mouvements oculaires (EMDR)",
    "Thérapie pour adultes, hommes et femmes",
    "Thérapie pour adolescents",
    "Psychopathologie du travail"
  ];

  const ateliers = [
    "Ateliers d'écriture",
    "Ateliers de relaxation",
    "Yoga-thérapie",
    "Affirmation de soi",
    "Estime de soi",
    "Gestion du stress",
    "Gestion de la colère",
    "Stop tabac par TCC",
    "Maigrir par TCC"
  ];

  const specialists = [
    {
      name: "Barbara Para",
      title: "Psychologue clinicienne",
      subtitle: "Chercheur et consultante",
      photo: "https://static.wixstatic.com/media/cdbeb3_7a4dd5b62752459a896f1a1d4dfda2f9~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,enc_avif,quality_auto/ID_BP_fleurs_low_300.jpg",
      quote: "Psychologue clinicienne, psychothérapeute et chercheur, je pratique les psychothérapies dites brèves d'orientation cognitive et comportementale (TCC, MBCT). En complément, je pratique la thérapie par mouvements oculaires (EMDR) pour soigner le trouble du stress post-traumatique ainsi que la thérapie par intégration du cycle de la vie (ICV) pour retravailler le style d'attachement.",
      specialties: ["TCC", "ICV", "MBCT", "EMDR"],
      patients: "Adultes, couples, ados, enfants",
      price: "140 € (1h)",
      payment: "Chèque, espèces, CB",
      website: "www.barbarapara.fr"
    },
    {
      name: "Geoffrey Stuhrmann",
      title: "Psychologue clinicien",
      photo: "https://static.wixstatic.com/media/bc28ee_cee375bfc1214a45ad22c256a4fed410~mv2.png/v1/fill/w_300,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MG1_1876%20(Copier).png",
      quote: "Collaborateur et remplaçant de Barbara, je suis psychologue cognitiviste et psychothérapeute. Je vous propose de faire un travail en alliant thérapie courte de type cognitive et comportementale (TCC). Je pratique aussi, si besoin, des techniques de relaxation ou de type MBSR (méditation de pleine conscience).",
      specialties: ["TCC", "EMDR", "MBSR"],
      patients: "Adultes, ados, enfants",
      price: "90 € (1h)",
      payment: "Paiement CB sécurisé via Doctolib",
      website: "www.cabinet-saint-louis.fr"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section avec nouvelle image */}
      <section className="relative h-[80vh] bg-gray-900">
        <img 
          src="https://static.wixstatic.com/media/cdbeb3_b235fc250c394d52b64d9025a972434e~mv2_d_1800_1200_s_2.jpg/v1/fill/w_1800,h_342,al_c,q_85,enc_avif,quality_auto/cdbeb3_b235fc250c394d52b64d9025a972434e~mv2_d_1800_1200_s_2.jpg" 
          alt="Cabinet Saint Louis" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold mb-4 mt-20 text-[#3a7ca5]">CABINET SAINT LOUIS</h1>
              <p className="text-2xl font-light mb-8">SAINT-MAUR-DES-FOSSES</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                  <span>07 83 34 67 76</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                  <span>cabinet-saint-louis@acomplice.fr</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" />
                  <span>37, avenue Saint-Louis 94210 Saint-Maur-des-Fossés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services améliorés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3a7ca5] mb-4">Les prestations du cabinet Saint Louis</h2>
            <div className="w-24 h-1 bg-[#3a7ca5] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Thérapies */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-8 text-[#3a7ca5]">Les thérapies</h3>
              <ul className="space-y-4">
                {therapies.map((therapy, index) => (
                  <li key={index} className="flex items-start space-x-4 group">
                    <FontAwesomeIcon icon={faCheck} className="w-5 h-5 mt-1 text-[#3a7ca5] group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700">{therapy}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ateliers */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-8 text-[#3a7ca5]">Les ateliers</h3>
              <ul className="space-y-4">
                {ateliers.map((atelier, index) => (
                  <li key={index} className="flex items-start space-x-4 group">
                    <FontAwesomeIcon icon={faCalendar} className="w-5 h-5 mt-1 text-[#3a7ca5] group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700">{atelier}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-gray-600 italic">
                * A noter que certains ateliers peuvent s'organiser hors cabinet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe améliorée */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3a7ca5] mb-4">Les psychologues et spécialistes</h2>
            <div className="w-24 h-1 bg-[#3a7ca5] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {specialists.map((specialist, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Photo du spécialiste */}
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={specialist.photo} 
                    alt={specialist.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Informations */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{specialist.name}</h3>
                    <p className="text-[#3a7ca5] font-medium">{specialist.title}</p>
                    {specialist.subtitle && (
                      <p className="text-gray-600">{specialist.subtitle}</p>
                    )}
                  </div>

                  <p className="text-gray-700 italic mb-8">{specialist.quote}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {specialist.specialties.map((specialty, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#3a7ca5]/10 text-[#3a7ca5] rounded-full text-sm font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center space-x-3">
                      <FontAwesomeIcon icon={faUsers} className="w-5 h-5 text-[#3a7ca5]" />
                      <span>{specialist.patients}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-[#3a7ca5]" />
                      <span>{specialist.price}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FontAwesomeIcon icon={faCreditCard} className="w-5 h-5 text-[#3a7ca5]" />
                      <span>{specialist.payment}</span>
                    </div>
                  </div>

                  <a 
                    href={`https://${specialist.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-[#3a7ca5] hover:text-[#2c6088] font-medium transition-colors duration-300"
                  >
                    {specialist.website}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CabinetPage;