import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-offwhite dark:bg-darkslate text-charcoal dark:text-lightgray py-10 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-teal dark:text-teal font-poppins">كاريزما الرخام</h3>
          <p className="mt-3 text-sm sm:text-base">متجركم المفضل للرخام الفاخر في سوريا.</p>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-teal dark:text-teal mb-3">تواصلوا معنا</h2>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>رقم التواصل: <a href="tel:+963967428420" className="hover:text-gold">00963967428420</a></li>
            <li>الإيميل: <a href="mailto:info@charismamarble.com" className="hover:text-gold">charismamarble@gmail.com</a></li>
            <li>العنوان: سوريا، اللاذقية، شارع أوتستراد الثورة</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-teal dark:text-teal mb-3">روابط سريعة</h2>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><a href="/" className="hover:text-gold">الرئيسية</a></li>
            <li><a href="/products" className="hover:text-gold">المنتجات</a></li>
            <li><a href="/about" className="hover:text-gold">عن المتجر</a></li>
            <li><a href="/contact" className="hover:text-gold">اتصل بنا</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-teal dark:text-teal mb-3">تابعونا</h2>
          <div className="flex gap-4">
            <motion.a 
              href="https://www.facebook.com/share/15LYSxwt9U/" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2 }} 
              className="text-teal dark:text-teal hover:text-gold"
            >
              <FaFacebookF size={20} />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/marble_charisma?igsh=NHJncDltZjJ2c2N2" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2 }} 
              className="text-teal dark:text-teal hover:text-gold"
            >
              <FaInstagram size={20} />
            </motion.a>
            <motion.a 
              href="https://wa.me/963967428420" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2 }} 
              className="text-teal dark:text-teal hover:text-gold"
            >
              <FaWhatsapp size={20} />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>© 2025 كاريزما الرخام. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;