import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const servicesDropdown = [
    {
      items: [
        { name: "Thérapie pour adulte", path: "/services/adultes" },
        { name: "Thérapie pour Adolescents", path: "/adolescents" },
      ]
    },
    {
      items: [
        { name: "Thérapie de Couple", path: "/couples" },
        { name: "Thérapie pour Enfants", path: "/enfants" },
      ]
    }
  ];

  const approachesDropdown = [
    {
      items: [
        { name: "Thérapies Comportementales et Cognitives", path: "/therapie" },
        { name: "Thérapie par Exposition en Réalité Virtuelle", path: "/therapie" },
      ]
    },
    {
      items: [
        { name: "Désensibilisation par les mouvements oculaires", path: "/therapie" },
      ]
    }
  ];

  const NavLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Mes Présentations', dropdown: servicesDropdown },
    { name: 'Mes Spécialités', dropdown: approachesDropdown },
    { name: 'Contact', path: '/contact' },
    { name: 'A propos de moi', path: '/about' }
  ];

  const handleMouseEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <Link to="/" className="flex items-center space-x-4">
          <img src="https://res.cloudinary.com/do2qwucmp/image/upload/v1734479680/barbara/ut3ijl6usdnq2x18kzel.png" alt="Logo" className="w-14"/>
          <div className="flex flex-col mr-12">
            <span className="text-[#3a7ca5] font-bold text-2xl leading-tight tracking-wider">Barbara Para</span>
            <span className="text-[#3a7ca5]/80 text-sm font-medium tracking-wide">Psychologue Clinicienne</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {NavLinks.map((link) => (
            <div key={link.name} className="relative group" onMouseEnter={() => handleMouseEnter(link.name)}>
              {link.path ? (
                <button 
                  onClick={() => handleNavigation(link.path)}
                  className="text-[#3a7ca5] hover:text-[#2c6088] transition-colors font-medium text-sm uppercase tracking-wider flex items-center"
                >
                  {link.name}
                </button>
              ) : (
                <button className="text-[#3a7ca5] hover:text-[#2c6088] transition-colors font-medium text-sm uppercase tracking-wider flex items-center">
                  {link.name}
                  {link.dropdown && <ChevronDown size={16} className="ml-1"/>}
                </button>
              )}

              {link.dropdown && activeDropdown === link.name && (
                <div 
                  className="absolute top-full left-0 mt-4 w-[600px] bg-white rounded-xl shadow-2xl transform origin-top-left transition-all duration-300 ease-out animate-dropdown-enter"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-2 p-6 gap-6">
                    {link.dropdown.map((section, index) => (
                      <div key={index} className="space-y-4">
                        {section.items.map((item) => (
                          <button
                            key={item.path}
                            onClick={() => handleNavigation(item.path)}
                            className="block w-full text-left text-gray-700 hover:text-[#3a7ca5] hover:bg-blue-50 px-3 py-2 rounded-md transition-colors duration-200"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-[#3a7ca5] focus:outline-none">
            <Menu size={24}/>
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-2 z-10">
              <ul className="flex flex-col space-y-2 p-4">
                {NavLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className="block w-full text-left text-gray-700 hover:text-[#3a7ca5] px-3 py-2 rounded-md transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                    {link.dropdown && (
                      <ul className="pl-4 mt-2 space-y-1">
                        {link.dropdown.map((section) => (
                          section.items.map((item) => (
                            <li key={item.path}>
                              <button
                                onClick={() => handleNavigation(item.path)}
                                className="block w-full text-left text-gray-600 hover:text-[#3a7ca5] px-2 py-1 rounded-md transition-colors duration-200"
                              >
                                {item.name}
                              </button>
                            </li>
                          ))
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="hidden md:flex items-center space-x-4">
         <a href="/about"> <button className="text-[#3a7ca5] border border-[#3a7ca5] px-4 py-2 rounded-full hover:bg-[#3a7ca5]/10 transition-colors text-sm font-medium tracking-wider">
            Mon Espace
          </button></a>
          <a href="/appointment"><button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-[#2c6088] transition-colors font-semibold text-sm shadow-md hover:shadow-lg">
            Réserver
          </button></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;