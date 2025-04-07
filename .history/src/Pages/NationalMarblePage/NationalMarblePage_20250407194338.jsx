import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productsData from '../../Components/data/ProductsData';

const NationalMarblePage = () => {
  const nationalProducts = productsData.filter(product => 
    ['رخام بدروسي', 'رخام مصيافي فاتح', 'رخام مصيافي غامق', 'حجر تدمري', 'رخام كسبي', 'ترافلتينو سوري'].includes(product.name)
  );

  return (
    <section className="container mx-auto px-4 sm:px-6 pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16 bg-offwhite dark:bg-darkslate transition-colors duration-300">
      
      {/* العنوان الرئيسي */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-800 dark:text-teal-300 mb-2 font-tajawal">
          الرخام الوطني السوري
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
          بكافة السماكات والمقاييس والأشكال
        </p>
      </div>

      {/* شبكة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {nationalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
};

export default NationalMarblePage;