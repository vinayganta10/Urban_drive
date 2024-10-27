import React, { useState } from 'react';
import { Menu, X, Car } from 'lucide-react';
import "../Styles/Header.css"
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
  return (
    <nav className="ud-navbar">
      <div className="ud-nav-brand">
        <Car size={28} className="ud-brand-icon" />
        <span>UrbanDrive</span>
      </div>
      
      <div className={`ud-nav-links ${isMenuOpen ? 'active' : ''}`}>
        <div className="ud-nav-menu">
          <a href="/" className="active">Home</a>
          <a href="/service">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="ud-auth-buttons">
          <button className="ud-login-btn" onClick={()=>navigate("/login")}>Login</button>
          <button className="ud-signup-btn" onClick={()=>navigate("/signup")}>Sign Up</button>
        </div>
      </div>

      <button className="ud-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

export default Header;