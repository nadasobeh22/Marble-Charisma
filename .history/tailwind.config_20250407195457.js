/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: '#0D9488',         // تيل عميق (ثابت)
        gold: '#D4AF37',         // ذهبي دافئ (ثابت)
        offwhite: '#F9FAFB',     // خلفية فاتحة (ثابت)
        darkslate: '#1E293B',    // خلفية داكنة (ثابت)
        charcoal: '#2D3748',     // نص غامق أكثر نعومة
        lightgray: '#E5E7EB',    // نص فاتح أكثر إشراقًا
        warmgray: '#8B7E66',     // لون دافئ للنصوص الفرعية
        deepgold: '#B8860B',     // ذهبي غامق للعناوين
        softteal: '#4ECDC4',     // تيل ناعم للتدرجات
      },
    },
  },
  plugins: [],
};