import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.jpg';

const Navbar = ({ onCartClick, cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-offwhite dark:bg-darkslate text-charcoal dark:text-lightgray shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="كاريزما الرخام" className="h-12 sm:h-16 lg:h-20 rounded-full shadow-sm" />
          <span className="text-xl sm:text-2xl font-extrabold text-teal dark:text-teal font-poppins">كاريزما الرخام</span>
        </Link>
        <button onClick={toggleMenu} className="lg:hidden text-2xl text-teal dark:text-teal">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-offwhite dark:bg-darkslate lg:bg-transparent p-6 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300`}>
          <nav className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 text-base sm:text-lg font-medium font-poppins">
            <Link to="/" className="text-teal dark:text-teal hover:text-gold transition">الرئيسية</Link>
            <Link to="/products" className="text-teal dark:text-teal hover:text-gold transition">المنتجات</Link>
            <Link to="/about" className="text-teal dark:text-teal hover:text-gold transition">عن المتجر</Link>
            <Link to="/contact" className="text-teal dark:text-teal hover:text-gold transition">اتصل بنا</Link>
          </nav>
          
          <button onClick={toggleDarkMode} className="text-teal dark:text-teal hover:text-gold transition">
            {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;