import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productsData from '../../Components/data/ProductsData';

const NationalMarblePage = () => {
  const nationalProducts = productsData.filter(product => 
    ['رخام بدروسي', 'رخام مصيافي فاتح', 'رخام مصيافي غامق', 'حجر تدمري', 'رخام كسبي', 'ترافلتينو سوري'].includes(product.name)
  );

  return (
    <section className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24 bg-stone-50 dark:bg-slate-900">
      
      {/* العنوان الرئيسي */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-stone-100 mb-6 font-tajawal">
          <span className="relative inline-block pb-2">
            الرخام الوطني السوري
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-rose-400 to-slate-600 dark:from-amber-400 dark:via-rose-300 dark:to-slate-400"></span>
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-600 dark:text-stone-300">
          بكافة السماكات والمقاييس والأشكال
        </p>
      </div>

      {/* شبكة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {nationalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* زخرفة نهائية */}
      <div className="mt-16 text-center">
        <p className="inline-block text-lg italic text-amber-600 dark:text-amber-300 border-b border-amber-200 dark:border-amber-400 pb-1">
          إبداع طبيعي يتجدد
        </p>
      </div>
    </section>
  );
};

export default NationalMarblePage;