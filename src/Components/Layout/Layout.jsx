import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-offwhite dark:bg-darkslate transition-colors duration-300">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;