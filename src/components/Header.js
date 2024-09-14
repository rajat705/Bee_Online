import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Brandname</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-success me-2" type="submit">Login</button>
            <button className="btn btn-success" type="submit">Join Us</button>
          </form>
        </div>
      </div>
    </nav>

      {/* <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Best Learning Opportunities</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link btn btn-success text-white me-3" href="#">Join Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-outline-success" href="#">Learn More</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <div className="hero-section container text-center">
        <h1>Best Learning Opportunities</h1>
        <p>Our goal is to make online education work for everyone</p>
        <div>
          <button className="btn btn-success me-2">Join Us</button>
          <button className="btn btn-outline-success">Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
