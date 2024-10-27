import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Calendar, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import "../Styles/AdminNavbar.css";

const AdminNavbar = () => {
  const name = localStorage.getItem("name") || "Admin";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="admin-navbar">
      <div className="container">
        <Link to="/admin" className="logo">
          <Car size={24} />
          UrbanDrive
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/admin/dashboard" className="nav-link">
              <Car size={20} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/bookings" className="nav-link">
              <Calendar size={20} />
              All Bookings
            </Link>
          </li>
          <li>
            <Link to="/admin/profile" className="nav-link">
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

export default AdminNavbar;