import React from 'react';
import { FaLayerGroup, FaCubes, FaTools, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8 } },
};

const hoverVariants = { scale: 1.05, transition: { type: 'spring', stiffness: 300 } };

const services = [
  { icon: <FaLayerGroup size={40} className="text-teal" />, title: "تصاميم متنوعة", description: "مجموعة واسعة من تصاميم الرخام الفريدة والعصرية." },
  { icon: <FaCubes size={40} className="text-teal" />, title: "خامات عالية الجودة", description: "نستخدم أفضل أنواع الرخام الطبيعي والمستورد." },
  { icon: <FaTools size={40} className="text-teal" />, title: "تركيب احترافي", description: "خدمات تركيب متميزة بأيدي خبراء محترفين." },
  { icon: <FaHandshake size={40} className="text-teal" />, title: "خدمة العملاء", description: "نحن معك من الاستشارة حتى التنفيذ لضمان رضاك." },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-right bg-offwhite dark:bg-darkslate transition-colors duration-300" dir="rtl">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-teal dark:text-teal font-poppins">خدماتنا</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-offwhite dark:bg-darkslate py-6 px-8 rounded-lg text-charcoal dark:text-lightgray flex gap-4 flex-col items-center text-center shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={hoverVariants}
          >
            {service.icon}
            <h3 className="font-bold text-lg sm:text-xl text-teal dark:text-teal">{service.title}</h3>
            <p className="text-sm sm:text-base text-charcoal dark:text-lightgray">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;