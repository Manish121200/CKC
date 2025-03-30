import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
import Landingpage from './components/home/Landingpage/Landingpage';
import Explore from './components/home/Explore/Explore';
import Lakshadweep from './components/home/Lakshadweep/Lakshadweep';
import Testimonial from './components/home/Testimonial/Testimonial';
import Footer from './components/home/Footer/Footer';
import OfferComponent from './components/home/OfferComponent/OfferComponent';
import City from "./pages/city/City";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";
import SignUp from "./pages/signup/SignUp";
import Hotel from "./pages/hotel/Hotel";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
// import Extra from "./Extra";
import Product from "./pages/products/Product";
import axios from "axios";
import ProductDetail from './pages/products/ProductDetail';
import { Typography } from '@mui/material';
import StateDetail from './StateDetail'; // Correct import statement
import AllCities from "./AllCities"; // Create this component
// import AllHotels from "./AllHotels"; // Create this component
import AllHotels from './AllHotels'
import States from './components/home/States/States'


function App() {


  

  return (
    <>
      <Header />
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Landingpage />
            <Explore />
            <Lakshadweep />
            <Testimonial />
            <OfferComponent />
            <Footer />
          </>
        } />
        <Route path='/state_page' element={<States />}/>
        <Route path="/popDestination" element={
          <>
            <City />
            <Testimonial />
            <OfferComponent />
            <Footer />
          </>
        } />
        <Route path="/profile" element={
          <>
            <Profile />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <About />
            <Testimonial />
            <OfferComponent />
            <Footer />
          </>
        } />
        <Route path="/hotel" element={
          <>
            <Hotel />
       
            <OfferComponent />
            <Footer />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Cart />
            <Testimonial />
            <OfferComponent />
            <Footer />
          </>
        } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/extra" element={<Extra />} /> */}
        <Route path="/state/:stateName" element={<StateDetail />} />


        <Route path="/statedetail/:stateName" element={<StateDetail />} />
        <Route path="/allcities/:stateName" element={<AllCities />} /> {/* New Route */}
        <Route path="/allhotels/:stateName" element={<AllHotels />} /> {/* New Route */}
        
    
       
        
      </Routes>
      
    </>
  );
}

export default App;
