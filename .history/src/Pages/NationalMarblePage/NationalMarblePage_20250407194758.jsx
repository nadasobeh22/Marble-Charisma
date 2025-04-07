import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productsData from '../../Components/data/ProductsData';

const NationalMarblePage = () => {
  const nationalProducts = productsData.filter(product => 
    ['رخام بدروسي', 'رخام مصيافي فاتح', 'رخام مصيافي غامق', 'حجر تدمري', 'رخام كسبي', 'ترافلتينو سوري'].includes(product.name)
  );

  return (
    <section className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24 bg-offwhite dark:bg-darkslate">
      
      {/* العنوان الرئيسي مع الخط */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-charcoal dark:text-lightgray mb-4 font-tajawal relative pb-4">
          الرخام الوطني السوري
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal dark:bg-gold rounded-full"></span>
        </h1>
        <p className="text-lg sm:text-xl text-charcoal/80 dark:text-lightgray/80">
          بكافة السماكات والمقاييس والأشكال
        </p>
      </div>

      {/* شبكة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {nationalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
};

export default NationalMarblePage;