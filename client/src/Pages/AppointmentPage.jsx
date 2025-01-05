import React, { useState } from "react";
import axios from "axios";
import {
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomCalendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const weekDays = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const isDateDisabled = (year, month, day) => {
    const date = new Date(year, month, day);
    return date < today;
  };

  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = Array(firstDay)
      .fill(null)
      .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));
    return days;
  };

  const handleDateSelect = (day) => {
    if (day) {
      const newDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        day
      );
      if (
        !isDateDisabled(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          day
        )
      ) {
        setSelectedDate(newDate);
        onDateSelect(newDate); // Ensure this is a function
      }
    }
  };

  const handlePrevMonth = () => {
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1
    );
    if (newDate >= today) {
      setSelectedDate(newDate);
    }
  };

  const handleNextMonth = () => {
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1
    );
    if (newDate >= today) {
      setSelectedDate(newDate);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
                className="flex items-center gap-1 py-1 px-2 hover:bg-gray-100 rounded"
              >
                {months[selectedDate.getMonth()]}
                <ChevronDown className="w-4 h-4" />
              </button>
              {isMonthDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border rounded-lg shadow-lg z-10">
                  {months.map((month, index) => (
                    <button
                      key={month}
                      onClick={() => {
                        const newDate = new Date(
                          selectedDate.getFullYear(),
                          index
                        );
                        if (newDate >= today) {
                          setSelectedDate(newDate);
                          setIsMonthDropdownOpen(false);
                        }
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      disabled={
                        new Date(selectedDate.getFullYear(), index) < today
                      }
                    >
                      {month}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                className="flex items-center gap-1 py-1 px-2 hover:bg-gray-100 rounded"
              >
                {selectedDate.getFullYear()}
                <ChevronDown className="w-4 h-4" />
              </button>
              {isYearDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border rounded-lg shadow-lg z-10">
                  {Array.from(
                    { length: 5 },
                    (_, i) => today.getFullYear() + i
                  ).map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedDate(
                          new Date(year, selectedDate.getMonth())
                        );
                        setIsYearDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrevMonth}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextMonth}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-600 py-2"
            >
              {day}
            </div>
          ))}
          {generateCalendarDays().map((day, index) => {
            const isDisabled =
              day &&
              isDateDisabled(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                day
              );
            const isSelected = day === selectedDate.getDate() && !isDisabled;

            return (
              <div
                key={index}
                onClick={() => handleDateSelect(day)}
                className={`text-center py-2 ${day ? "cursor-pointer" : ""} ${
                  isDisabled
                    ? "text-gray-300 cursor-not-allowed"
                    : day
                    ? "hover:bg-gray-100"
                    : ""
                } ${isSelected ? "bg-blue-100 text-blue-600" : ""} rounded`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="text-center text-sm text-gray-500">
          {selectedDate.toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

const AppointmentScheduler = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetNumber: "",
    streetAddress: "",
    additionalAddress: "",
    city: "",
    region: "",
    postalCode: "",
    date: "",
    time: "",
    duration: "30",
    serviceType: "",
    previousVisit: "",
    notes: "",
  });

  const handleDateSelect = (date) => {
    setFormData((prev) => ({
      ...prev,
      date: date.toISOString().split("T")[0],
    }));
  };

  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const serviceTypes = [
    { value: "TCC", label: "Thérapie Comportementale et Cognitive" },
    { value: "TERV", label: "Thérapie par Exposition en Réalité Virtuelle" },
    {
      value: "EMDR",
      label: "Désensibilisation et retraitement par les mouvements oculaires",
    },
  ];

  const durations = [
    { value: "30", label: "30 minutes" },
    { value: "60", label: "1 heure" },
    { value: "90", label: "1 heure 30" },
    { value: "120", label: "2 heures" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/rdv/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l’ajout du contact");
      }
      const data = await response.json();
      toast.success(data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetNumber: "",
        streetAddress: "",
        additionalAddress: "",
        city: "",
        region: "",
        postalCode: "",
        date: "",
        time: "",
        duration: "30",
        serviceType: "",
        previousVisit: "",
        notes: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen py-12 bg-emerald-50">
      <ToastContainer />

      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6">
        <div className="bg-white shadow-2xl rounded-2xl border border-gray-100">
          <div className="border-b p-6 mt-20 bg-[#3a7ca5] rounded-t-2xl">
            <h2 className="text-2xl font-bold text-white">
              Prendre un Rendez-vous
            </h2>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column - Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Informations Personnelles
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition-all"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition-all"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition-all"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition-all"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-md font-medium text-gray-700">Adresse</h4>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      N° et rue
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ligne d'adresse additionnelle
                    </label>
                    <input
                      type="text"
                      name="additionalAddress"
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      value={formData.additionalAddress}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ville
                      </label>
                      <input
                        type="text"
                        name="city"
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        État/Région
                      </label>
                      <input
                        type="text"
                        name="region"
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition-all"
                        value={formData.region}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Code Postal
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition-all"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Nous avez-vous déjà rendu visite ?
                  </label>
                  <div className="space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="previousVisit"
                        value="oui"
                        checked={formData.previousVisit === "oui"}
                        onChange={handleInputChange}
                        className="form-radio text-gray-800"
                      />
                      <span className="ml-2">Oui</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="previousVisit"
                        value="non"
                        checked={formData.previousVisit === "non"}
                        onChange={handleInputChange}
                        className="form-radio text-gray-800"
                      />
                      <span className="ml-2">Non</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Column - Appointment Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Détails du Rendez-vous
                </h3>

                <div className="rounded-xl p-6 space-y-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type de Service*
                    </label>
                    <select
                      name="serviceType"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition-all"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                    >
                      <option value="">Sélectionnez un service</option>
                      {serviceTypes.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5 text-gray-800" />
                      <h3 className="text-lg font-medium text-gray-800">
                        Date du rendez-vous*
                      </h3>
                    </div>
                    {/* Pass handleDateSelect to CustomCalendar */}
                    <CustomCalendar onDateSelect={handleDateSelect} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-gray-800" />
                      <h3 className="text-lg font-medium text-gray-800">
                        Horaires disponibles*
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() =>
                            handleInputChange({
                              target: { name: "time", value: time },
                            })
                          }
                          className={`p-3 rounded-lg border transition-all ${
                            formData.time === time
                              ? "bg-gray-800 text-white border-gray-800 shadow-lg"
                              : "border-gray-300 hover:border-gray-800 hover:shadow-md bg-white"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Durée du rendez-vous*
                    </label>
                    <select
                      name="duration"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition-all"
                      value={formData.duration}
                      onChange={handleInputChange}
                    >
                      {durations.map((duration) => (
                        <option key={duration.value} value={duration.value}>
                          {duration.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notes (facultatif)
                    </label>
                    <textarea
                      name="notes"
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition-all"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Informations supplémentaires importantes..."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-8">
              <button
                type="submit"
                className="bg-[#3a7ca5]  text-white px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl hover:bg-gray-700"
              >
                Confirmer le rendez-vous
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppointmentScheduler;
