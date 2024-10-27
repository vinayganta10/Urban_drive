import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';
import "../../Styles/Support.css"

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="ud-support-container">
      <h1 className="ud-support-title">How Can We Help You?</h1>
      
      <div className="ud-contact-methods">
        <div className="ud-contact-card">
          <FaPhone className="ud-contact-icon" />
          <h3>Phone Support</h3>
          <p>+1 (555) 123-4567</p>
          <p>24/7 Available</p>
        </div>
        
        <div className="ud-contact-card">
          <FaEnvelope className="ud-contact-icon" />
          <h3>Email Support</h3>
          <p>support@urbandrive.com</p>
          <p>Response within 24h</p>
        </div>
        
        <div className="ud-contact-card">
          <FaComments className="ud-contact-icon" />
          <h3>Live Chat</h3>
          <p>Available 9AM - 6PM</p>
          <button className="ud-chat-button">Start Chat</button>
        </div>
      </div>

      <div className="ud-support-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="ud-form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="ud-form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="ud-form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="ud-form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="ud-submit-button">Send Message</button>
        </form>
      </div>

      <div className="ud-faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="ud-faq-grid">
          <div className="ud-faq-item">
            <h3>How do I make a reservation?</h3>
            <p>You can make a reservation through our website or mobile app by selecting your desired vehicle and dates.</p>
          </div>
          <div className="ud-faq-item">
            <h3>What's your cancellation policy?</h3>
            <p>Free cancellation up to 24 hours before your scheduled pickup time.</p>
          </div>
          <div className="ud-faq-item">
            <h3>Do you offer insurance?</h3>
            <p>Yes, we offer various insurance options to ensure your peace of mind during the rental period.</p>
          </div>
          <div className="ud-faq-item">
            <h3>What documents do I need?</h3>
            <p>You'll need a valid driver's license, credit card, and proof of insurance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
