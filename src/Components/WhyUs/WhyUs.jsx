import React from 'react';
import { FaGem, FaTools, FaHeadset } from 'react-icons/fa';

const whyUsData = [
  { icon: <FaGem size={40} className="text-teal" />, title: 'جودة فائقة', description: 'رخام طبيعي بأعلى المعايير.' },
  { icon: <FaTools size={40} className="text-teal" />, title: 'تركيب سريع', description: 'تركيب احترافي وسريع بأيدي خبراء.' },
  { icon: <FaHeadset size={40} className="text-teal" />, title: 'دعم مستمر', description: 'فريق دعم متاح لمساعدتك دائمًا.' },
];

const WhyUs = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-offwhite dark:bg-darkslate transition-colors duration-300">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-teal dark:text-teal text-center mb-10 sm:mb-12 font-poppins drop-shadow-md">
        لماذا تختار كاريزما الرخام؟
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {whyUsData.map((item, index) => (
          <div
            key={index}
            className="bg-offwhite dark:bg-darkslate p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-center"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-teal dark:text-teal font-bold text-lg sm:text-xl mb-2">{item.title}</h3>
            <p className="text-charcoal dark:text-lightgray text-sm sm:text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;