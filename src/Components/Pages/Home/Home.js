import React from 'react'
import Banner from './Banner/Banner'
import HomeProduct from './HomeProduct/HomeProduct'
import Footer from "../../Shared/Footer";

const Home = () => {
  return (
    <div>
        <Banner />
        <HomeProduct />
        <Footer/>
    </div>
  )
}

export default Home