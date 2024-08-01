import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './components/topproducts/TopProducts';
import Banner from './components/banner/Banner';
import Subscribe from './components/subscribe/Subscribe';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';
import Popup from './components/popup/Popup';

const App = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    }

React.useEffect(() => {
      AOS.init(
        {
          offset:100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        })
        AOS.refresh();
        },[]);

  return (
  <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
       <Navbar handleOrderPopup={handleOrderPopup} />
       <Hero handleOrderPopup={handleOrderPopup} />
       <Products/>
       <TopProducts handleOrderPopup={handleOrderPopup} />
       <Banner />
       <Subscribe />
       <Products/>
       <Testimonial />
       <Footer />
       <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
  </div>

  )
  
}

export default App;