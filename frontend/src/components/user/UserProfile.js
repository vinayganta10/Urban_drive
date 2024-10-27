import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import "../../Styles/UserProfile.css"

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("token");
        if (email) {
          const response = await axios.get(`http://localhost:4000/users/${email}`,{
            headers :{
                Authorization : `Bearer ${token}`
            }
          });
          setUserData(response.data);
        } else {
          setError('Email not found in local storage');
        }
  
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, []);  

  if (loading) return <div className="up-loading">Loading...</div>;
  if (error) return <div className="up-error">{error}</div>;
  if (!userData) return <div className="up-error">No user data found</div>;

  return (
    <div className="up-profile-container">
      <div className="up-profile-header">
        <div className="up-avatar">
          <FaUser className="up-avatar-icon" />
        </div>
        <h1 className="up-username">{userData.username}</h1>
      </div>

      <div className="up-profile-content">
        <div className="up-info-card">
          <div className="up-info-item">
            <FaEnvelope className="up-info-icon" />
            <div className="up-info-text">
              <h3>Email</h3>
              <p>{userData.email}</p>
            </div>
          </div>

          <div className="up-info-item">
            <FaPhone className="up-info-icon" />
            <div className="up-info-text">
              <h3>Phone</h3>
              <p>{userData.phone}</p>
            </div>
          </div>
        </div>

        <div className="up-actions">
          <button className="up-edit-button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
