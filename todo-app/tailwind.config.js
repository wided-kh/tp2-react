/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1e293b', // Couleur sombre de fond
        light: '#f1f5f9', // Couleur claire pour le texte
        primary: '#0ea5e9', // Couleur principale pour les boutons
        danger: '#f43f5e' // Couleur pour supprimer
      }
    },
  },
  darkMode: 'class', // Ajoute le mode sombre
  plugins: [],
}


