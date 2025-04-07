import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import slide1 from '../../assets/images/slide.jpg';

const Slide = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-offwhite dark:bg-darkslate transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center lg:text-right lg:w-1/2 mb-6 lg:mb-0">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-teal dark:text-teal mb-4 font-poppins"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              فخامة في كل <span className="text-gold">تفصيل</span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-charcoal dark:text-lightgray mb-6 font-poppins"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              اكتشفي مجموعتنا الفريدة من الرخام الطبيعي لإضفاء لمسة من الفخامة على مساحاتك.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                className="px-6 py-3 bg-teal dark:bg-teal hover:bg-gold text-white hover:text-charcoal font-semibold rounded-full shadow-md transition duration-300 text-sm sm:text-base font-poppins"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <Link to="/products">تصفح المجموعة</Link>
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-gold text-charcoal hover:bg-teal hover:text-white font-semibold rounded-full shadow-md transition duration-300 text-sm sm:text-base font-poppins"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 1 }}
              >
                <Link to="/contact">تواصل معنا</Link>
              </motion.button>
            </div>
          </div>
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <img
              src={slide1}
              alt="Luxurious Marble"
              className="w-full sm:w-3/4 lg:w-full h-auto rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide;