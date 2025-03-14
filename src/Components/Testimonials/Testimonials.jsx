import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'سارة محمد', text: 'جودة الرخام مذهلة وخدمة العملاء رائعة!' },
  { name: 'أحمد علي', text: 'أفضل متجر للرخام في سوريا، تصاميم فاخرة.' },
  { name: 'لينا خالد', text: 'التركيب كان احترافيًا وسريعًا، شكرًا!' },
];

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-offwhite dark:bg-darkslate transition-colors duration-300">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-teal dark:text-teal text-center mb-10 sm:mb-12 font-poppins drop-shadow-md">
        ماذا يقول عملاؤنا
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-offwhite dark:bg-darkslate p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-charcoal dark:text-lightgray text-sm sm:text-base mb-4">"{testimonial.text}"</p>
            <h3 className="text-teal dark:text-teal font-bold text-lg">{testimonial.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;