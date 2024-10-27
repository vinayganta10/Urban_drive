import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPin, Users, Eye } from 'lucide-react';
import { Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../../Styles/UserBody.css";


const UserBody = () => {
  const token = localStorage.getItem("token");
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAvailableCars();
  }, []);

  const fetchAvailableCars = async () => {
    try {
      const response = await axios.get('http://localhost:4000/cars', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Filter only available cars
      const availableCars = response.data.filter(car => car.car_available);
      setCars(availableCars);
    } catch (error) {
      console.error('Error fetching cars:', error);
      toast.error('Failed to load available cars');
    }
  };

  const handleViewDetails = (car) => {
    navigate('/user/view', { state: { car } });
  };

  return (
    <div className="user-body">
      <div className="header">
        <h1>Available Cars</h1>
        <div className="search-filters">
          {/* Add search and filter components here if needed */}
        </div>
      </div>

      <div className="car-grid">
        {cars.map((car) => (
          <div key={car.car_id} className="car-card">
            <div className="car-image">
              <img src={car.car_image} alt={car.car_name} />
              <div className="status-badge">
                Available Now
              </div>
            </div>
            
            <div className="car-details">
              <h3>{car.car_name}</h3>
              <p className="car-color">Color: {car.car_color}</p>
              
              <div className="car-info">
                <p>
                  <MapPin size={16} />
                  {car.car_location}
                </p>
                <p>
                  <Users size={16} />
                  {car.car_seater} Seater
                </p>
              </div>
              
              <p className="car-price">₹{car.car_price}/day</p>
              
              <div className="car-actions">
                <button 
                  className="view-details-btn" 
                  onClick={() => handleViewDetails(car)}
                >
                  <Eye size={16} />
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cars.length === 0 && (
        <div className="empty-state">
          <Car size={48} />
          <h3>No Cars Available</h3>
          <p>Check back later for available cars.</p>
        </div>
      )}
    </div>
  );
};

export default UserBody;