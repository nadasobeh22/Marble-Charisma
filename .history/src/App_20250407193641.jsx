import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import Services from '../../Components/Services/Services';
import Preloader from '../../Components/Preloader/Preloader';
import Slide from '../../Components/Slide/Slide';
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts';
import Testimonials from '../../Components/Testimonials/Testimonials';
import WhyUs from '../../Components/WhyUs/WhyUs';
import NationalMarblePage from '../NationalMarblePage/NationalMarblePage';

const Home = ({ cart, setCart, setIsCartOpen }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="overflow-hidden">
          <Layout>
            <Slide />
            <div className="-mt-4 sm:-mt-6 lg:-mt-8">
              <NationalMarblePage />
            </div>
            <FeaturedProducts />
            <Services />
            <Testimonials />
            <WhyUs />
          </Layout>
        </div>
      )}
    </>
  );
};

export default Home;