// src/components/Hero.js
import React from 'react';
import './Hero.css';
import stockMarketVideo from '../assets/stock-market-video.mp4';  // Ensure the path is correct

function Hero() {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src={stockMarketVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Welcome to Stock Market Insights</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search for stocks..." />
          <button type="button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
