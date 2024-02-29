// import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Text from "../components/text";
import CategoryText from "../components/CategoryText";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <CategoryText/>
      <Categories />
      <Text/>
      
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
