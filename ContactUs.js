import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1 className="contact-title">Get in Touch with Us</h1>
        <p className="contact-description">
          Whether you're looking to boost your brand's online presence, engage with your target audience, or optimize your digital marketing strategies, we're here to help. Fill out the form below, and let's start the conversation!
        </p>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" placeholder="Write your message here"></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
