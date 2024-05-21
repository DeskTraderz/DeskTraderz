// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="search-bar">
          <input type="text" placeholder="Search for stocks..." />
          <button type="button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
