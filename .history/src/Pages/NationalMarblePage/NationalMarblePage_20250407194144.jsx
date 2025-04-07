import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productsData from '../../Components/data/ProductsData';

const NationalMarblePage = () => {
  const nationalProducts = productsData.filter(product => 
    ['رخام بدروسي', 'رخام مصيافي فاتح', 'رخام مصيافي غامق', 'حجر تدمري', 'رخام كسبي', 'ترافلتينو سوري'].includes(product.name)
  );

  return (
    <section className="container mx-auto px-4 sm:px-6 pt-1 sm:pt-2 lg:pt-3 pb-2 sm:pb-3 lg:pb-4 bg-offwhite dark:bg-darkslate transition-colors duration-300">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-teal dark:text-teal text-center mb-2 sm:mb-3 lg:mb-4 font-poppins drop-shadow-md">
        الرخام الوطني السوري
      </h1>
      <p className="text-charcoal dark:text-lightgray text-center mb-4 sm:mb-6 lg:mb-8 text-lg sm:text-xl lg:text-2xl font-medium">
        تشكيلة مميزة من أجود أنواع الرخام الوطني <br /> 
        بكافة السماكات والمقاييس والأشكال
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {nationalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NationalMarblePage;