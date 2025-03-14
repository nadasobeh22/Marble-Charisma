import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-offwhite dark:bg-darkslate rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-56 sm:h-64 object-cover" loading="lazy" />
      </Link>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-teal dark:text-teal">{product.name}</h3>
        <p className="text-charcoal dark:text-lightgray mt-2 text-sm sm:text-base flex-grow">{product.description}</p>
        <a
          href={product.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full bg-teal dark:bg-teal text-white py-2 sm:py-3 rounded-lg hover:bg-gold hover:text-charcoal transition duration-300 font-poppins block text-center text-sm sm:text-base"
        >
          التواصل على واتساب
        </a>
      </div>
    </div>
  );
};

export default ProductCard;