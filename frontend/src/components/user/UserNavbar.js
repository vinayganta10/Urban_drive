import React from 'react';
import { Link } from 'react-router-dom';
import { Car, PhoneCall, User, LogOut, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import "../../Styles/UserNavbar.css"

const UserNavbar = () => {
  const name = localStorage.getItem("name") || "User";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="user-navbar">
      <div className="container">
        <Link to="/user" className="logo">
          <Car size={24} />
          UrbanDrive
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/user/bookings" className="nav-link">
              <Calendar size={20} />
              My Bookings
            </Link>
          </li>
          <li>
            <Link to="/user/support" className="nav-link">
              <PhoneCall size={20} />
              Support
            </Link>
          </li>
          <li>
            <Link to="/user/profile" className="nav-link">
              <User size={20} />
              Profile
            </Link>
          </li>
          <li>
            <button className="nav-link logout-btn" onClick={handleLogout}>
              <LogOut size={20} />
              Logout
            </button>
          </li>
        </ul>
        <div className="welcome-message">
          Welcome, {name}
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;