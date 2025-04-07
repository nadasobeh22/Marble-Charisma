import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productsData from '../../Components/data/ProductsData';

const NationalMarblePage = () => {
  const nationalProducts = productsData.filter(product => 
    ['رخام بدروسي', 'رخام مصيافي فاتح', 'رخام مصيافي غامق', 'حجر تدمري', 'رخام كسبي', 'ترافلتينو سوري'].includes(product.name)
  );

  return (
    <section className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24 bg-offwhite dark:bg-darkslate relative overflow-hidden">
      
      {/* تأثيرات زخرفية */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* العنوان الرئيسي */}
      <div className="relative text-center mb-12 sm:mb-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal dark:text-lightgray mb-4 font-tajawal leading-tight">
          الرخام الوطني السوري
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-teal to-gold mx-auto my-6 rounded-full"></div>
        <p className="text-xl sm:text-2xl text-charcoal/80 dark:text-lightgray/80 font-medium">
          <span className="text-teal dark:text-gold">بكافة السماكات</span> •  
          <span className="mx-2">والمقاييس</span> • 
          <span className="text-teal dark:text-gold">والأشكال</span>
        </p>
      </div>

      {/* شبكة المنتجات */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {nationalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* زخرفة نهائية */}
      <div className="mt-16 text-center">
        <p className="inline-block px-6 py-3 bg-gradient-to-r from-teal/10 to-gold/10 dark:from-teal/20 dark:to-gold/20 rounded-full text-gold dark:text-gold-300 font-tajawal text-lg border border-gold/20">
          إبداعٌ لا ينتهي من الطبيعة
        </p>
      </div>
    </section>
  );
};

export default NationalMarblePage;