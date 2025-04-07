import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import Services from '../../Components/Services/Services';
import Preloader from '../../Components/Preloader/Preloader';
import Slide from '../../Components/Slide/Slide';
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts';
import Testimonials from '../../Components/Testimonials/Testimonials';
import WhyUs from '../../Components/WhyUs/WhyUs';
import NationalMarblePage from '../NationalMarblePage/NationalMarblePage';
import SinkSection from '../../Components/SinkSection/SinkSection';

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
          <div className="-mt-4 sm:-mt-6 lg:-mt-8">
          </div>
            <Slide />
            <div className="-mt-4 sm:-mt-6 lg:-mt-8">
              <NationalMarblePage />
            </div>
            <div className="-mt-4 sm:-mt-6 lg:-mt-8">
              <SinkSection />
            </div>
            <div className="-mt-4 sm:-mt-6 lg:-mt-8">
              <FeaturedProducts />
            </div>
            <div className="-mt-4 sm:-mt-6 lg:-mt-8">
              <Services />
            </div>
            <div className="-mt-4 sm:-mt-6 lg:-mt-8">
              <Testimonials />
            </div>
            <div className="-mt-4 sm:-mt-6 lg:-mt-8">
              <WhyUs />
            </div>
          </Layout>
        </div>
      )}
    </>
  );
};

export default Home;