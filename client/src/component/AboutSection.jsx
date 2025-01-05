import React from 'react';
import { HeartPulse, Medal, Brain } from 'lucide-react';
import img from '../assets/barbarapara.png'

const AboutSection = () => {
  const keyPoints = [
    {
      icon: HeartPulse,
      text: `Psychologue clinicienne et thérapeute spécialisée, je conçois mon métier bien au-delà d'une simple écoute des maux de l'âme. Chaque rencontre, chaque expérience m'a profondément touchée et nourrie, orientant mes réflexions vers des techniques psychothérapeutiques précises et adaptées à chacun.`
    },
    {
      icon: Brain,
      text: `Mon approche est humaine, globale et personnalisée. Je prends en compte l'être humain dans sa globalité en m'appuyant sur des méthodes complémentaires qui permettent de travailler en profondeur sur les blocages, les souffrances ou les transitions de vie.`
    },
    {
      icon: Medal,
      text: `J'utilise diverses approches thérapeutiques telles que les Thérapies Comportementales et Cognitives (TCC), l'hypnose, l'EMDR et intègre des techniques de lâcher prise comme la sonothérapie, sophrologie, médiation guidée et la cohérence cardiaque.`
    }
  ];

  const expertise = [
    {
      icon: HeartPulse,
      title: "Approche Empathique",
      description: "Écoute attentive et sans jugement"
    },
    {
      icon: Brain,
      title: "Thérapies Modernes",
      description: "Techniques evidence-based"
    },
    {
      icon: Medal,
      title: "Expertise Professionnelle",
      description: "Plus de 10 ans d'expérience"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold  text-[#3a7ca5]">
              À Propos de Barbara Para
            </h2>

            {/* Points clés */}
            <div className="space-y-6">
              {keyPoints.map(({ icon: Icon, text }, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <Icon size={24} className=" text-[#3a7ca5] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>

            {/* Citation */}
            <blockquote className="bg-gray-50 border-l-4  text-[#3a7ca5] p-6 my-6">
              <p className="text-xl italic text-gray-800">
                "Rien n'est impossible, seules les limites de nos esprits définissent certaines choses comme inconcevables."
              </p>
              <footer className="text-gray-600 mt-2">- Marc Levy</footer>
            </blockquote>

            {/* Cartes d'expertise */}
            <div className="grid md:grid-cols-3 gap-4">
              {expertise.map(({ icon: Icon, title, description }, index) => (
                <div 
                  key={index} 
                  className="bg-blue-50 p-4 rounded-xl text-center hover:bg-blue-100 transition-colors duration-300"
                >
                  <Icon size={24} className="mx-auto mb-3  text-[#3a7ca5]" />
                  <h3 className="font-semibold  text-[#3a7ca5] mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <img 
              src={img} 
              alt="Barbara Para" 
              className="rounded-2xl shadow-lg object-cover w-full h-[700px] transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Image mobile */}
          <div className="md:hidden">
            <img 
              src={img} 
              alt="Barbara Para" 
              className="rounded-2xl shadow-lg object-cover w-full h-[300px] transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;