import React from 'react';
import './App.css';
import Header from './components/Header';
// import Packages from './components/Packages';
import Footer from './components/Footer';
import CustomCarousel from './components/Carousel';
import Home from './components/Home';

function App() {
  return (
    <div>
    
      <Header />
      {/* <Packages /> */}
      <Home />
      <CustomCarousel />
      <Footer />
    </div>
  );
}

export default App;
