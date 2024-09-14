import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h5>Company Info</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Features</h5>
            <ul className="list-unstyled">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Get In Touch</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-phone"></i> (480) 555-0103
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> 4517 Washington Ave. Manchester, Kentucky 39495
              </li>
              <li>
                <i className="fas fa-envelope"></i> debra.holt@example.com
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-between align-items-center mt-4">
          <p>Developed By Rajat Nagar.  © 2024 All Rights Reserved</p>
          <div className="social-icons">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
