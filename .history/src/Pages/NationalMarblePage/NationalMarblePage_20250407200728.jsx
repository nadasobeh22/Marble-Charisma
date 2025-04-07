import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productsData from '../../Components/data/ProductsData';

const NationalMarblePage = () => {
  const nationalProducts = productsData.filter(product => 
    ['رخام بدروسي', 'رخام مصيافي فاتح', 'رخام مصيافي غامق', 'حجر تدمري', 'رخام كسبي', 'ترافلتينو سوري'].includes(product.name)
  );

  return (
    
    <section className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24 bg-offwhite dark:bg-darkslate transition-colors duration-500">

    {/* العنوان الرئيسي */}
    <div className="text-center mb-12 sm:mb-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-teal dark:text-lightgray mb-6 font-tajawal tracking-tight relative inline-block">
        <span className="relative z-10">الرخام الوطني السوري</span>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-11/12 h-2 bg-gradient-to-r from-teal to-gold dark:to-lightgray rounded-full opacity-60 blur-sm"></span>
      </h1>
      <p className="text-xl sm:text-2xl text-charcoal dark:text-lightgray font-medium">
        بكافة السماكات والمقاييس والأشكال
      </p>
    </div>
  
    {/* شبكة المنتجات */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
      {nationalProducts.map((product) => (
        <div className="hover:scale-[1.02] transition-transform duration-300">
          <ProductCard key={product.id} product={product} />
        </div>
      ))}
    </div>
  
  </section>
  
  );
};

export default NationalMarblePage;