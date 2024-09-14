import React from 'react';
import './Packages.css';

const Packages = () => {
  return (
    <section className="packages-section container my-5">
      <h2 className="fw-bold text-center">Approbable Packages</h2>
      <p className="text-center">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>
      
      <div className="row mt-4 justify-content-center">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Certified Teacher</h5>
              <p className="card-text">The gradual accumulation of information about.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Expert Instruction</h5>
              <p className="card-text">The gradual accumulation of information about.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
