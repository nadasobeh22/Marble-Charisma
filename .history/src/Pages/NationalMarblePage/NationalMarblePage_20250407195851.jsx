import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productsData from '../../Components/data/ProductsData';

const NationalMarblePage = () => {
  const nationalProducts = productsData.filter(product => 
    ['رخام بدروسي', 'رخام مصيافي فاتح', 'رخام مصيافي غامق', 'حجر تدمري', 'رخام كسبي', 'ترافلتينو سوري'].includes(product.name)
  );

  return (
    <section className="container mx-auto px-4 sm:px-6 pt-24 py-12 sm:py-16 bg-gradient-to-b from-offwhite to-gray-50 dark:from-darkslate dark:to-gray-800 transition-colors duration-500">
      
      {/* العنوان الرئيسي مع تأثير ذهبي */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-teal bg-gradient-to-r from-teal to-gold bg-clip-text text-transparent font-poppins animate-fade-in">
          <span className="relative inline-block">
            الرخام الوطني السوري
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-charcoal dark:text-lightgray max-w-4xl mx-auto leading-relaxed mt-4 font-cairo">
          بكافة السماكات والمقاييس والأشكال
        </p>
      </div>

      {/* شبكة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {nationalProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-transform transform hover:-translate-y-2 duration-300 animate-fade-in"
          >
            {/* خط ذهبي تزييني في الأعلى */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-gold rounded-t-xl"></div>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

    </section>
  );
};

// تأثير الظهور التدريجي
const animateFadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }
`;

export default NationalMarblePage;