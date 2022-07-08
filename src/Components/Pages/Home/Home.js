import React from 'react'
import Banner from './Banner/Banner'
import HomeProduct from './HomeProduct/HomeProduct'
import Footer from "../../Shared/Footer";
import ProductOverview from "./ProductOverview/ProductOverview";

const Home = () => {
  return (
    <div>
        <Banner />
        <ProductOverview />
        <HomeProduct />
        <Footer/>
    </div>
  )
}

export default Home