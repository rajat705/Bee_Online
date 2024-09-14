import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="left-content">
      <div className="red-bar"></div>
        <div className="title-wrapper">
          <h1>Approdable Packages</h1>
        </div>
        <p className="subtitle">
          Problems trying to resolve the conflict between <br></br> the two major realms of Classical physics: <br></br> Newtonian mechanics
        </p>
        <a href="#" className="learn-more">
          Learn More <span className="arrow">&rarr;</span>
        </a>
      </div>

      <div className="right-content">
        <div className="package-card">
          <img src={require('./images/image2.png')} alt="Certified Teacher" />
          <h2>Certified Teacher</h2>
          <div className="red-bar card-bar"></div>
          <p>The gradual accumulation of information about</p>
        </div>
        <div className="package-card">
          <img src={require('./images/image3.png')} alt="Expert Instruction" />
          <h2>Expert instruction</h2>
          <div className="red-bar card-bar"></div>
          <p>The gradual accumulation of information about</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
