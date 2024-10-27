import React from 'react';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <footer className="ud-footer">
      <div className="ud-footer-content">
        <div className="ud-footer-section">
          <h4>Contact Us</h4>
          <p><Phone size={16} /> +1 (555) 123-4567</p>
          <p><Mail size={16} /> info@urbandrive.com</p>
        </div>
        <div className="ud-footer-section">
          <h4>Follow Us</h4>
          <div className="ud-social-links">
            <Facebook size={20} />
            <Instagram size={20} />
            <Twitter size={20} />
          </div>
        </div>
      </div>
      <div className="ud-footer-bottom">
        <p>&copy; 2024 UrbanDrive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;