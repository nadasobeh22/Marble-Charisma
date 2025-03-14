import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../Components/Layout/Layout';
import productsData from '../../Components/data/ProductsData';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="pt-24 container mx-auto px-4 text-center text-teal dark:text-teal text-xl sm:text-2xl">المنتج غير موجود!</div>;
  }

  return (
    <Layout>
      <main className="pt-24 container mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 bg-offwhite dark:bg-darkslate transition-colors duration-300 min-h-screen">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md h-72 sm:h-96 object-cover rounded-xl shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              onError={(e) => (e.target.src = 'https://via.placeholder.com/400?text=Image+Not+Found')} // صورة احتياطية
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-teal dark:text-teal mb-4 sm:mb-6 font-poppins">{product.name}</h1>
            <p className="text-base sm:text-lg text-charcoal dark:text-lightgray mb-6 sm:mb-8">{product.description}</p>
            <a
              href={product.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs bg-teal text-white py-3 sm:py-4 rounded-xl hover:bg-gold hover:text-charcoal transition duration-300 text-sm sm:text-lg font-semibold font-poppins block text-center mx-auto"
            >
              التواصل على واتساب
            </a>
          </div>
        </motion.div>
      </main>
    </Layout>
  );
};

export default ProductDetails;