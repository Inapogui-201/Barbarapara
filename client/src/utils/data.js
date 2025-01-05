export const servicesDropdown = [
  {
    items: [
      { name: "Thérapie pour adulte", path: "/services/thérapeutique/adultes" },
      { name: "Thérapie pour Adolescents", path: "/services/thérapeutique/adolescents" },
    ],
  },
  {
    items: [
      { name: "Thérapie de Couple", path: "/services/thérapeutique/couples" },
      { name: "Thérapie pour Enfants", path: "/services/thérapeutique/enfants" },
    ],
  },
];

export const approachesDropdown = [
  {
    items: [
      { name: "Thérapies Comportementales et Cognitives", path: "/thérapie" },
      {
        name: "Thérapie par Exposition en Réalité Virtuelle",
        path: "/thérapie",
      },
    ],
  },
  {
    items: [
      {
        name: "Désensibilisation par les mouvements oculaires",
        path: "/thérapie",
      },
    ],
  },
];

export const NavLinks = [
  { name: "Accueil", path: "/" },
  { name: "Mes Présentations", dropdown: servicesDropdown },
  { name: "Mes Spécialités", dropdown: approachesDropdown },
  { name: "Contact", path: "/contact" },
  // { name: 'A propos de moi', path: '/about' }
];
