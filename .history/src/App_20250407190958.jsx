import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';


function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar onCartClick={() => setIsCartOpen(true)} cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} setIsCartOpen={setIsCartOpen} />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} setIsCartOpen={setIsCartOpen} />} />
          <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} setIsCartOpen={setIsCartOpen} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/national-marble" element={<NationalMarblePage />} />
        </Routes>
        {isCartOpen && <Cart cart={cart} setCart={setCart} onClose={() => setIsCartOpen(false)} />}
      </div>
    </Router>
  );
}

export default App;