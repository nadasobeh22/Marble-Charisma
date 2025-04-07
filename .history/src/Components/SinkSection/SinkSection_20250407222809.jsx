import React from 'react';
import productsData from '../data/ProductsData';

const SinkSection = () => {
  const sinkProducts = productsData.filter(product =>
    product.name.startsWith('حوض مغسلة')
  );

  return (
    <section className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-8 bg-offwhite dark:bg-darkslate transition-colors duration-300">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-2 sm:mb-3 lg:mb-4 font-poppins drop-shadow-lg text-teal dark:text-teal animate-pulse">
        أحواض مغاسل منحوتة قطعة واحدة
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {sinkProducts.map((product) => (
          <div
            key={product.id}
            className="relative overflow-hidden rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 sm:h-56 lg:h-64 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SinkSection;