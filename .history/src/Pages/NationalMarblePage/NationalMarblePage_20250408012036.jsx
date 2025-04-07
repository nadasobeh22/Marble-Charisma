import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productsData from '../../Components/data/ProductsData';

const NationalMarblePage = () => {
  const nationalProducts = productsData.filter(product => 
    ['رخام بدروسي', 'رخام مصيافي فاتح', 'رخام مصيافي غامق', 'حجر تدمري', 'رخام كسبي', 'ترافلتينو سوري'].includes(product.name)
  );

  return (
    <section className="container mx-auto px-4 sm:px-6 pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8 bg-offwhite dark:bg-darkslate transition-colors duration-300">
      <div className="text-center mb-2 sm:mb-3 lg:mb-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center font-poppins drop-shadow-lg text-teal dark:text-teal animate-pulse">
        </h1>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {nationalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NationalMarblePage;