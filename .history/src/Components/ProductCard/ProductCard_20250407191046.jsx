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
const productsData = [
  // ... المنتجات السابقة ...
  { id: 33, name: 'رخام بدروسي', description: 'رخام وطني متين بملمس أنيق وتصميم مميز.', image: thirty3, whatsappLink: 'https://wa.me/963967428420?text=مرحبًا، أنا مهتم بشراء رخام بدروسي' },
  { id: 34, name: 'رخام مصيافي فاتح', description: 'رخام وطني ناعم بتصميم كلاسيكي وطابع طبيعي.', image: thirty4, whatsappLink: 'https://wa.me/963967428420?text=مرحبًا، أنا مهتم بشراء رخام مصيافي فاتح' },
  { id: 35, name: 'رخام مصيافي غامق', description: 'رخام وطني قوي بملمس غني وتصميم أنيق.', image: thirty5, whatsappLink: 'https://wa.me/963967428420?text=مرحبًا، أنا مهتم بشراء رخام مصيافي غامق' },
  { id: 36, name: 'حجر تدمري', description: 'حجر وطني مميز بملمس خشن وطابع تقليدي.', image: thirty6, whatsappLink: 'https://wa.me/963967428420?text=مرحبًا، أنا مهتم بشراء حجر تدمري' },
  { id: 37, name: 'رخام كسبي', description: 'رخام وطني أنيق بنقوش طبيعية وتصميم متميز.', image: thirty7, whatsappLink: 'https://wa.me/963967428420?text=مرحبًا، أنا مهتم بشراء رخام كسبي' },
  { id: 38, name: 'ترافلتينو سوري', description: 'رخام وطني فريد بملمس طبيعي وتصميم أنيق.', image: thirty8, whatsappLink: 'https://wa.me/963967428420?text=مرحبًا، أنا مهتم بشراء ترافلتينو سوري' },
];
export default ProductCard;