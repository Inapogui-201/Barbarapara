import React, { useState } from 'react';
import { Phone, Mail, MapPin, Plus } from 'lucide-react';
import image from "../assets/image.png"
const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        newsletter: false
    });
    
    const handleInputChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData(prev => ({ ...prev, [e.target.name]: value }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-emerald-50">
            <div className="max-w-7xl mx-auto p-6 pt-32"> {/* Augmenté le padding-top ici */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Form Section */}
                    <div className="bg-white rounded-3xl shadow-xl p-8">
                        <h2 className="text-3xl font-light text-center mb-8 text-[#3a7ca5] ">Contactez-moi !</h2>
                        <p className="text-gray-600 text-center mb-8">
                            Pour toutes demandes de renseignements ou pour prendre rendez-vous, 
                            je me tiens à votre disposition grâce à ce formulaire, via Doctolib, 
                            par email et par téléphone.
                        </p>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input 
                                        type="text" 
                                        name="firstName" 
                                        placeholder="Votre prénom"
                                        required 
                                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-gray-400 bg-transparent"
                                        value={formData.firstName} 
                                        onChange={handleInputChange} 
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="text" 
                                        name="lastName" 
                                        placeholder="Votre nom"
                                        required 
                                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-gray-400 bg-transparent"
                                        value={formData.lastName} 
                                        onChange={handleInputChange} 
                                    />
                                </div>
                            </div>

                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Votre email (pour pouvoir vous répondre)"
                                required 
                                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-gray-400 bg-transparent"
                                value={formData.email} 
                                onChange={handleInputChange} 
                            />

                            <input 
                                type="tel" 
                                name="phone" 
                                placeholder="Téléphone (facultatif)"
                                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-gray-400 bg-transparent"
                                value={formData.phone} 
                                onChange={handleInputChange} 
                            />

                            <textarea 
                                name="message" 
                                required 
                                rows="4" 
                                placeholder="Votre commentaire..."
                                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-gray-400 bg-transparent"
                                value={formData.message} 
                                onChange={handleInputChange} 
                            />

                            <div className="flex items-center space-x-2">
                                <input 
                                    type="checkbox"
                                    id="newsletter"
                                    name="newsletter"
                                    className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
                                    checked={formData.newsletter}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="newsletter" className="text-sm text-gray-600">
                                    Je veux m'inscrire à la newsletter
                                </label>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-[#3a7ca5]  text-white px-6 py-3 rounded-lg  transition-all shadow-lg font-medium"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>

                    {/* Contact Card Section */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
                        <div className="space-y-6">
                            <div className="relative inline-block">
                                <img
                                    src={image}
                                    alt="Profile"
                                    className="rounded-full w-32 h-32 object-cover mx-auto"
                                />
                                <div className="absolute bottom-0 right-0 bg-[#3a7ca5]  text-white p-2 rounded-full">
                                    <Plus size={20} />
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-semibold">Barbara Para</h3>
                                <p className="text-gray-600">Psychologue et psychothérapeute clinicienne</p>
                            </div>

                            <div className="space-y-4 pt-4">
                                <a href="tel:0783346776" className="flex items-center justify-center space-x-3 text-gray-600 hover:text-[#3a7ca5]  transition-colors">
                                    <Phone size={20} />
                                    <span>07 83 34 67 76</span>
                                </a>
                                
                                <a href="mailto:barbarapara@example.fr" className="flex items-center justify-center space-x-3 text-gray-600 hover:text-[#3a7ca5]  transition-colors">
                                    <Mail size={20} />
                                    <span>barbarapara@example.fr</span>
                                </a>

                                <div className="flex items-center justify-center space-x-3 text-gray-600">
                                    <MapPin size={20} />
                                    <div>
                                        <p>Cabinet Saint Louis</p>
                                        <p>37, avenue Saint-Louis</p>
                                        <p>94210 Saint-Maur-des-Fossés</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;