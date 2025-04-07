import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-offwhite dark:bg-darkslate rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 sm:h-56 object-cover"
          loading="lazy"
        />
      </Link>
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-bold text-teal dark:text-teal mb-1 sm:mb-2">
          {product.name}
        </h3>
        <p className="text-charcoal dark:text-lightgray text-xs sm:text-sm flex-grow mb-2 sm:mb-3">
          {product.description}
        </p>
        <a
          href={product.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-teal dark:bg-teal text-white py-2 sm:py-2.5 rounded-lg hover:bg-gold hover:text-charcoal transition duration-300 font-poppins text-center text-xs sm:text-sm"
        >
          التواصل على واتساب
        </a>
      </div>
    </div>
  );
};

export default ProductCard;