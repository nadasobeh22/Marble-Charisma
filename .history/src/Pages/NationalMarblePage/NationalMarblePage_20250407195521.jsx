import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productsData from '../../Components/data/ProductsData';

const NationalMarblePage = () => {
  const nationalProducts = productsData.filter(product => 
    ['رخام بدروسي', 'رخام مصيافي فاتح', 'رخام مصيافي غامق', 'حجر تدمري', 'رخام كسبي', 'ترافلتينو سوري'].includes(product.name)
  );

  return (
    <section className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24 bg-offwhite dark:bg-darkslate">
      
      {/* العنوان الرئيسي مع خطوط متدرجة */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-deepgold dark:text-lightgray mb-6 font-tajawal tracking-tight">
          <span className="relative inline-block">
            <span className="relative z-10">الرخام الوطني السوري</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-softteal via-gold to-deepgold dark:from-teal dark:to-lightgray transform translate-y-1 rounded-full"></span>
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-warmgray dark:text-lightgray/90 font-medium">
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