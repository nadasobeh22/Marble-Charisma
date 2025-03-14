import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import productsData from '../data/ProductsData';

const FeaturedProducts = () => {
  const featured = productsData.slice(0, 4); // اختيار أول 4 منتجات كمميزة

  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-offwhite dark:bg-darkslate transition-colors duration-300">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-teal dark:text-teal text-center mb-10 sm:mb-12 font-poppins drop-shadow-md">
        منتجاتنا المميزة
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/products"
          className="inline-block bg-teal text-white py-3 px-6 rounded-lg hover:bg-gold hover:text-charcoal transition duration-300 font-poppins text-sm sm:text-base"
        >
          تصفح جميع المنتجات
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;