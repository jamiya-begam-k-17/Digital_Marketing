import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to our Digital Marketing Hub</h1>
          <p className="hero-description">
            Elevate your brand's digital presence with our comprehensive marketing solutions tailored to drive growth and success in the online world.
          </p>
          <Link to="/login">
            <button className="cta-button">Get Started</button>
          </Link>        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Innovative Strategies</h3>
            <p>We provide cutting-edge marketing strategies that align with the latest trends to keep your brand ahead of the competition.</p>
          </div>
          <div className="feature-item">
            <h3>Data-Driven Insights</h3>
            <p>Our data-driven approach ensures that every decision is backed by analytics, maximizing your return on investment.</p>
          </div>
          <div className="feature-item">
            <h3>Full-Service Solutions</h3>
            <p>From SEO to social media marketing, we offer a complete range of services to cover all your digital marketing needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
