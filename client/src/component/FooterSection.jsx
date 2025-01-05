import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const FooterSection = () => {
  const navigationLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Ateliers', path: '/ateliers' },
    { name: 'Consultations', path: '/consultations' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' }
  ];

  const contactInfo = [
    { icon: faMapMarkerAlt, text: 'Saint-Maur-des-Fossés, France' },
    { icon: faPhone, text: '07 83 34 67 76' },
    { icon: faEnvelope, text: 'barbarapara@example.fr' }
  ];

  const socialLinks = [
    { icon: faFacebookF, label: 'Facebook', url: '#' },
    { icon: faTwitter, label: 'Twitter', url: '#' },
    { icon: faInstagram, label: 'Instagram', url: '#' },
    { icon: faLinkedinIn, label: 'LinkedIn', url: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#3a7ca5] to-[#2c6088] text-white">

      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Section Logo et Description */}
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center space-x-4 group">
              <img 
                src="https://res.cloudinary.com/do2qwucmp/image/upload/v1734479680/barbara/ut3ijl6usdnq2x18kzel.png" 
                alt="Barbara Para Logo" 
                className="w-20 h-20 object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Barbara Para
                </h2>
                <p className="text-white/90 font-light">Psychologue Clinicienne</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              Accompagnement psychologique personnalisé pour vous aider à retrouver bien-être et équilibre.
            </p>
            <Link to="/prise/de/rendez-vous" className="block">
              <button className="w-full bg-white text-[#3a7ca5] px-8 py-4 rounded-xl hover:bg-opacity-95 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0">
                Prendre Rendez-vous
              </button>
            </Link>
          </div>

          {/* Section Navigation */}
          <div className="md:col-span-4 md:col-start-5">
            <h3 className="text-xl font-semibold mb-8 text-white after:content-[''] after:block after:w-12 after:h-1 after:bg-white/30 after:mt-2">
              Navigation
            </h3>
            <div className="flex flex-wrap gap-6">
              {navigationLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path}
                  className="text-white/70 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-4"></span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Section Contact et Réseaux Sociaux */}
          <div className="md:col-span-4">
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-8 text-white after:content-[''] after:block after:w-12 after:h-1 after:bg-white/30 after:mt-2">
                Contact
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                    </div>
                    <p className="text-white/70 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8 text-white after:content-[''] after:block after:w-12 after:h-1 after:bg-white/30 after:mt-2">
                Suivez-moi
              </h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm font-light">
              &copy; {new Date().getFullYear()} Barbara Para. Tous droits réservés.
            </p>
            <p className="text-white/60 text-sm font-light mt-4 md:mt-0">
              designed by{' '}
              <Link 
                to="https://www.mrcode.ma" 
                className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white"
                target="_blank"
              >
                Mr.Code
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;