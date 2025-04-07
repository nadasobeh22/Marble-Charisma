import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productsData from '../../Components/data/ProductsData';

const NationalMarblePage = () => {
  const nationalProducts = productsData.filter(product => 
    ['رخام بدروسي', 'رخام مصيافي فاتح', 'رخام مصيافي غامق', 'حجر تدمري', 'رخام كسبي', 'ترافلتينو سوري'].includes(product.name)
  );

  return (
    <section className="container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-b from-offwhite/90 to-gray-100 dark:from-darkslate/95 dark:to-gray-900 transition-colors duration-300">
      
      {/* Header with Elegant Border */}
      <div className="text-center mb-10 sm:mb-14 lg:mb-20 relative">
        <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-teal/40 to-transparent dark:via-teal/60"></div>
        <h1 className="relative inline-block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-800 dark:from-teal-400 dark:to-emerald-300 px-4 sm:px-6 py-2 font-almarai tracking-tight">
          الرخام الوطني السوري
        </h1>
        <p className="mt-6 text-xl sm:text-2xl lg:text-3xl text-charcoal/90 dark:text-lightgray/90 font-light leading-relaxed max-w-3xl mx-auto">
          <span className="block mb-2">إبداعٌ من الطبيعة</span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-teal-700 dark:text-teal-300">بكافة المقاييس | سماكات متعددة | تشكيلات فريدة</span>
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
        {nationalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Decorative Element */}
      <div className="mt-16 text-center">
        <p className="text-lg sm:text-xl text-charcoal/80 dark:text-lightgray/80 italic font-almarai">
          "إرثٌ من الجمال الطبيعي يُخلّد في تصميمك"
        </p>
      </div>
    </section>
  );
};

export default NationalMarblePage;