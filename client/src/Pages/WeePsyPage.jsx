import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faVideo, 
  faClock, 
  faCreditCard, 
  faInfoCircle, 
  faCheck 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGoogle,
  faFacebookMessenger, 
  faWhatsapp, 
  faSkype 
} from '@fortawesome/free-brands-svg-icons';

const WeePsyPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const therapies = [
    "Thérapie Comportementale et Cognitive (TCC)",
    "Thérapie pour adultes, hommes et femmes",
    "Thérapie pour adolescents",
    "Psychopathologie du travail"
  ];

  const videoApps = [
    { name: "Google Duo", icon: faGoogle },
    { name: "Facetime", icon: faVideo },
    { name: "Messenger", icon: faFacebookMessenger },
    { name: "WhatsApp", icon: faWhatsapp },
    { name: "Skype", icon: faSkype }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900 ">
        <img 
          src="https://static.wixstatic.com/media/cdbeb3_248d2b27c6d34801a7839fc64195c384~mv2.jpg/v1/fill/w_1280,h_243,al_c,q_80,enc_avif,quality_auto/cdbeb3_248d2b27c6d34801a7839fc64195c384~mv2.jpg"
          alt="WeePsy Online Consultations" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 mt-20">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-6xl font-bold mb-4 tracking-tight">WEEPSY</h1>
              <p className="text-3xl font-light mb-8">Votre cabinet de psychologie en ligne</p>
              <div className="flex items-center space-x-4  backdrop-blur-sm p-4 rounded-lg inline-block">
                <FontAwesomeIcon icon={faVideo} className="w-6 h-6" />
                <span className="text-xl">Consultations en visioconférence ou par téléphone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-xl leading-relaxed">
              Les consultations à distance se font par téléconférence ou par visioconférence, 
              en fonction des possibilités du patient, du lundi au samedi sur rendez-vous. 
              Les modalités sont définies en amont. Des consultations téléphoniques d'urgence 
              peuvent être proposées en cas de besoin.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3a7ca5] mb-4">Les prestations en ligne</h2>
            <div className="w-24 h-1 bg-[#3a7ca5] mx-auto"></div>
          </div>
          
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <ul className="space-y-6">
              {therapies.map((therapy, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <FontAwesomeIcon icon={faCheck} className="w-5 h-5 mt-1 text-[#3a7ca5] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 text-lg">{therapy}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3a7ca5] mb-4">Les tarifs</h2>
            <div className="w-24 h-1 bg-[#3a7ca5] mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faClock} className="w-8 h-8 text-[#3a7ca5]" />
                  <span className="text-2xl font-medium">Téléconsultation de suivi</span>
                </div>
                <span className="text-3xl font-bold text-[#3a7ca5]">140€ / 1h</span>
              </div>
            </div>

            <div className="space-y-8 text-gray-700">
              <div className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faCreditCard} className="w-6 h-6 mt-1 text-[#3a7ca5]" />
                <p className="text-lg">Le paiement s'effectue par carte bancaire en fin de consultation.</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faInfoCircle} className="w-6 h-6 mt-1 text-[#3a7ca5]" />
                <p className="text-lg">Pour pouvoir proposer les créneaux horaires qui se libèrent à des personnes qui en auraient besoin, 
                il est indispensable que je sois prévenue suffisamment à l'avance. En cas d'empêchement, je vous 
                demande de me prévenir au moins 24 heures avant la consultation prévue, jours ouvrés. Toute 
                consultation non annulée dans ce délai est due.</p>
              </div>

              <div className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faInfoCircle} className="w-6 h-6 mt-1 text-[#3a7ca5]" />
                <p className="text-lg">En France, les consultations auprès d'un psychologue de ville ne sont pas remboursées par 
                la sécurité sociale. Cependant, certaines mutuelles ont pris conscience du gain pour la santé 
                que constituent ces consultations et procèdent à des remboursements partiels. Je délivre des 
                factures à cet effet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outils */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3a7ca5] mb-4">Les outils pour la consultation en ligne</h2>
            <div className="w-24 h-1 bg-[#3a7ca5] mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-xl text-center mb-12">
              Pour les consultations, j'utilise les principales applications de visio-conférence du marché 
              dont vous pouvez trouver les liens de téléchargement ci-dessous.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {videoApps.map((app, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 group">
                  <FontAwesomeIcon 
                    icon={app.icon} 
                    className="w-8 h-8 mb-3 text-[#3a7ca5] group-hover:scale-110 transition-transform duration-300" 
                  />
                  <span className="block text-[#3a7ca5] font-medium">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-[#a6cfed]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Demande d'information</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-white text-lg">Pour toute demande d'information, n'hésitez pas à remplir ce formulaire, 
            nous vous répondrons dans les plus brefs délais.</p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 bg-white border-0 rounded-lg focus:ring-2 focus:ring-[#3a7ca5] shadow-lg"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 bg-white border-0 rounded-lg focus:ring-2 focus:ring-[#3a7ca5] shadow-lg"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-4 bg-white border-0 rounded-lg focus:ring-2 focus:ring-[#3a7ca5] shadow-lg"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-[#3a7ca5] font-medium py-4 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default WeePsyPage;