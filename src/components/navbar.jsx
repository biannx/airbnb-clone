import React from "react";

export default function Navbar() {
  return (
    <header>
      <div className="nav">
        <nav className="container">
          <img className="nav-logo" src="public\images\airbnb-logo.svg" alt="Airbnb Logo"></img>
        </nav>
      </div>
      <div className="container hero">
        <img className="hero-photo" src="public\images\photogrid.svg" alt="Photogrid" />
        <h1 className="text-capitalize pt-3 mt-5 mb-3 hero-title">online experiences</h1>
        <p className="fw-light lh-base fs-5 hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </header>
  );
}

