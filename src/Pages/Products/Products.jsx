import React from 'react';
import Layout from '../../Components/Layout/Layout';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productsData from '../../Components/data/ProductsData';

const Products = () => {
  return (
    <Layout>
      <main className="pt-28 sm:pt-32 container mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-offwhite dark:bg-darkslate transition-colors duration-300 min-h-screen">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-teal dark:text-teal text-center mb-10 sm:mb-12 font-poppins drop-shadow-md">
          منتجات كاريزما الرخام
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Products;