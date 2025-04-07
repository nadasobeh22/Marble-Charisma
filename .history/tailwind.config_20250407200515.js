/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // تفعيل وضع الـ Dark Mode باستخدام class
  theme: {
    extend: {
      colors: {
        teal: '#0D9488',       // اللون الأساسي: تيل عميق
        gold: '#D4AF37',       // اللون الثانوي: ذهبي دافئ
        offwhite: '#F9FAFB',   // خلفية فاتحة
        darkslate: '#1E293B',  // خلفية داكنة
        charcoal: '#374151',   // نص غامق
        lightgray: '#D1D5DB',  // نص فاتح
      },
    },
  },
  plugins: [],
};