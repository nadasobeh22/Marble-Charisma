import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productsData from '../../Components/data/ProductsData';

const NationalMarblePage = () => {
  const nationalProducts = productsData.filter(product => 
    ['رخام بدروسي', 'رخام مصيافي فاتح', 'رخام مصيافي غامق', 'حجر تدمري', 'رخام كسبي', 'ترافلتينو سوري'].includes(product.name)
  );

  return (
    <section className="container mx-auto px-4 sm:px-6 py-2 sm:py-3 lg:py-4 bg-offwhite dark:bg-darkslate transition-colors duration-300">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-teal dark:text-teal text-center mb-0.5 sm:mb-1 lg:mb-1.5 font-poppins drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-teal to-gold">
        الرخام الوطني
      </h2>
      <p className="text-charcoal dark:text-lightgray text-center mb-1 sm:mb-1.5 lg:mb-2 text-sm sm:text-base font-semibold">
        بكافة السماكات والمقاييس
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
        {nationalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NationalMarblePage;