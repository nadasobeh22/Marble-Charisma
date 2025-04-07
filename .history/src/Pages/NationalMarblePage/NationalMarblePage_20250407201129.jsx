import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productsData from '../../Components/data/ProductsData';

const NationalMarblePage = () => {
  const nationalProducts = productsData.filter(product => 
    ['رخام بدروسي', 'رخام مصيافي فاتح', 'رخام مصيافي غامق', 'حجر تدمري', 'رخام كسبي', 'ترافلتينو سوري'].includes(product.name)
  );

  return (
    <section className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24 bg-offwhite dark:bg-darkslate">
      
      {/* العنوان الرئيسي مع تعديل المسافة */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-teal dark:text-lightgray mb-4 font-tajawal tracking-tight">
          <span className="relative inline-block pb-1">
            الرخام الوطني السوري
            <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal to-gold dark:to-lightgray rounded-full"></span>
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-charcoal dark:text-lightgray font-medium">
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