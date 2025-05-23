import React from 'react';
import Navbar from './Navbar'; // Adjust the path if your Navbar file is in a different location
import Home from './HomePage'
import SecondPagr from './SecondPagr';
import ThirdPage from './ThirdPage';
import Footer from './Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <SecondPagr />
      <ThirdPage />
      <Footer/>
    </>
  );
};

export default App; 
