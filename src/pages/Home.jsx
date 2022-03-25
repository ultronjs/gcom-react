import React from 'react'
import Navbar from "../components/Nav";
import Footer from "../components/Footer"
import Banner  from '../components/Banner';
import FeaturedCategory from '../components/FeaturedCategory';
import GamesFromBrands from '../components/GamesFromBrands';
import PickYourAccessories from '../components/PickYourAccessories';

function Home() {
  return (
    <div className="main_container">
      <Navbar />
      <Banner />
      <FeaturedCategory />
      <PickYourAccessories />
      <GamesFromBrands />
      <Footer />
    </div>
  );
}

export default Home