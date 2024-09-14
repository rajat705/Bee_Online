import React, { useState } from 'react';
import './Header.css'; // Importing the CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);

  const handleLoginClick = () => setShowLoginModal(true);
  const handleJoinClick = () => setShowJoinModal(true);
  const handlePricingClick = () => setShowPricingModal(true);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">Brandname</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handlePricingClick} href="#">Pricing</a> {/* Added onClick handler */}
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleJoinClick} href="#">Contact</a>
              </li>
            </ul>
            <div className="auth-buttons">
              <button onClick={handleLoginClick} className="btn btn-link">Login</button>
              <button onClick={handleJoinClick} className="btn btn-success">JOIN US</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container header-content">
        <div className="row align-items-center">
          <div className="col-lg-6 text-section">
            <h6 className="welcome-text">Welcome</h6>
            <h1 className="main-heading">Best Learning Opportunities</h1>
            <p className="sub-heading">Our goal is to make online education work for everyone</p>
            <div className="btn-group">
              <button onClick={handleJoinClick} className="btn btn-success">Join Us</button>
              <a href="#learnmore" className="btn btn-outline-success">Learn More</a>
            </div>
          </div>
          <div className="col-lg-6 image-section">
            <img src={require('./images/image.png')} alt="Student with books" className="header-image" />
          </div>
        </div>
      </div>
      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                <button type="button" className="btn-close" onClick={() => setShowLoginModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                    <input type="text" className="form-control" id="contactNumber" placeholder="Enter your contact number" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowLoginModal(false)}>Close</button>
                <button type="button" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Join Us Modal */}
      {showJoinModal && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Join Us</h5>
                <button type="button" className="btn-close" onClick={() => setShowJoinModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Email: joinus@example.com</p>
                <p>Contact Number: +1234567890</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowJoinModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Pricing Modal */}
      {showPricingModal && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Pricing List</h5>
                <button type="button" className="btn-close" onClick={() => setShowPricingModal(false)}></button>
              </div>
              <div className="modal-body">
                <ul>
                  <li><strong>Monthly Package:</strong>  $49 Excluding taxes </li>
                  <li><strong>Half Yearly Package:</strong>  $199 Excluding taxes</li>
                  <li><strong>Annual Package:</strong> $350 Excluding taxes</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowPricingModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
