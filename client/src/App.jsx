import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AppointmentPage from './Pages/AppointmentPage';
import AdultTherapyPage from './Pages/AdultTherapyPage';
import AboutMePage from './Pages/AboutMePage';
import Layout from './layout/Layout';
import ContactPage from './Pages/ContactPage';
import TherapiesPage from './Pages/TherapiesPage';
import ChildTherapyPage from './Pages/EnfantsTherapyPage';
import AdolescentTherapyPage from './Pages/AdoTherapyPage';
import CoupleTherapyPage from './Pages/CoupleTherapyPage';
import ScrollToTop from './component/ScrollToTop';
import FAQPage from './Pages/FAQPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-red-500">
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/prise/de/rendez-vous" element={<AppointmentPage />} />
            <Route path="/a-propos-de-moi" element={<AboutMePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/thérapeutique/adultes" element={<AdultTherapyPage />} />
            <Route path="/services/thérapeutique/adolescents" element={<AdolescentTherapyPage />} />
            <Route path="/services/thérapeutique/couples" element={<CoupleTherapyPage/>} />
            <Route path="/services/thérapeutique/enfants" element={<ChildTherapyPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<HomePage />} />
            <Route path="/thérapie" element={<TherapiesPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}