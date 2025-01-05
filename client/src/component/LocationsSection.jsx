import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const LocationsSection = () => {
  const locations = [
    {
      id: 1,
      name: "Cabinet Saint Louis",
      address: "37, avenue Saint-Louis",
      city: "94210 Saint-Maur-des-Fossés",
      image: "https://static.wixstatic.com/media/cdbeb3_f5eb4e76d3994fb9b8719e8851d21c44~mv2.jpeg/v1/crop/x_203,y_0,w_394,h_491/fill/w_467,h_582,al_c,lg_1,q_80,enc_avif,quality_auto/version_800_barbara-para-psychologue-sai.jpeg",
      link: "/cabinets"
    },
    {
      id: 2,
      name: "Cabinet du Port",
      address: "12, rue du Port",
      city: "39600 Port-Lesney",
      image: "https://static.wixstatic.com/media/01b6f8e462fb48ee8fb31e15dc613d4c.jpg/v1/crop/x_573,y_0,w_1314,h_1639/fill/w_467,h_582,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/le%20bureau%20du%20docteur.jpg",
      link: "/cabinet-port"
    },
    {
      id: 3,
      name: "Consultation en ligne",
      address: "Consultations en visioconférence",
      city: "via Skype, Duo, Messenger...",
      image: "https://static.wixstatic.com/media/cdbeb3_e9f3128a956a48329078ed2a44cdbd87~mv2.jpg/v1/crop/x_0,y_49,w_350,h_437/fill/w_467,h_582,al_c,lg_1,q_80,enc_avif,quality_auto/telephone%20visio.jpg",
      link: "/weepsy"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3a7ca5] mb-8 text-center">
            Consultations et ateliers en région parisienne, dans le Jura ou en ligne
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Dans le cadre de consultations, je peux vous recevoir dans mon cabinet de Saint-Maur-des-Fossés en région parisienne 
            ainsi qu'au cabinet du Port dans la région de Dole - Besançon - Dijon. Il est également possible d'échanger par visioconférence. 
            En ce qui concerne les ateliers, ils peuvent avoir lieu au cabinet de Saint-Maur-des-Fossés, au cabinet de Port-Lesney 
            ainsi que dans Paris (quartiers Nation et Louvre).
          </p>
        </div>

        {/* Cartes des cabinets */}
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {location.name}
                </h3>
                <div className="flex items-start space-x-2 text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p>{location.address}</p>
                    <p>{location.city}</p>
                  </div>
                </div>
                <Link 
                  to={location.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Plus d'infos
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton de réservation */}
      </div>
    </section>
  );
};

export default LocationsSection;