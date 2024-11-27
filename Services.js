import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-description">
        At our Company, we offer a comprehensive suite of digital marketing services designed to elevate your brand, increase your online presence, and drive measurable results. Here’s what we specialize in:
      </p>
      <div className="services-list">
        <div className="service-item">
          <h2>SEO Optimization</h2>
          <p>Enhance your website's visibility with our expert SEO strategies, ensuring your business ranks higher on search engines and attracts more organic traffic.</p>
        </div>
        <div className="service-item">
          <h2>Social Media Marketing</h2>
          <p>Leverage the power of social media to build a strong brand presence, engage with your audience, and boost your business’s growth on platforms like Facebook, Instagram, and LinkedIn.</p>
        </div>
        <div className="service-item">
          <h2>Content Creation</h2>
          <p>Create compelling content that resonates with your target audience, from blog posts and articles to videos and infographics, driving engagement and establishing your brand as an industry leader.</p>
        </div>
        <div className="service-item">
          <h2>Email Marketing</h2>
          <p>Reach your customers directly with personalized email campaigns that nurture leads, promote offers, and build lasting relationships.</p>
        </div>
        <div className="service-item">
          <h2>Pay-Per-Click (PPC) Advertising</h2>
          <p>Maximize your ROI with targeted PPC campaigns that deliver immediate traffic and conversions, optimizing your ad spend for the best results.</p>
        </div>
        <div className="service-item">
          <h2>Analytics & Reporting</h2>
          <p>Track the performance of your campaigns with our detailed analytics and reporting services, providing insights to fine-tune your strategies and achieve your marketing goals.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
