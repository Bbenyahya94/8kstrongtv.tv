/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { ink: '#070a12', panel: '#0d1220', mint: '#5eead4' }, boxShadow: { glow: '0 0 42px rgba(94,234,212,.18)' } } },
  plugins: []
};
