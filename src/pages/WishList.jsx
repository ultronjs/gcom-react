import React from 'react'
import WishListContainer from '../components/WishListContainer';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useAuth } from '../context';
import { useNavigate } from 'react-router';

function WishList() {
  return  (
    <>
      <Nav />
      <WishListContainer />
      <Footer />
    </>
  );
}

export default WishList