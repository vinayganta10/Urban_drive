import React, { useState } from 'react';
import { Car, ArrowLeft, Upload } from 'lucide-react';
import axios from 'axios';
import "../Styles/AddCar.css"
import { useNavigate } from 'react-router-dom';
const AddCar = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    car_id: '',
    car_name: '',
    car_color: '',
    car_available: true,
    car_price: '',
    car_location: '',
    car_seater: '',
    car_description: '',
    car_image: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/cars', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 201) {
        alert('Car added successfully!');
        setFormData({
          car_id: '',
          car_name: '',
          car_color: '',
          car_available: true,
          car_price: '',
          car_location: '',
          car_seater: '',
          car_description: '',
          car_image: ''
        });
        navigate('/admin');
      }
    } catch (error) {
      alert('Failed to add car. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-car-container">
      <div className="form-wrapper">
        <div className="form-card">
          {/* Header */}
          <div className="form-header">
            <div className="header-content">
              <Car className="header-icon" />
              <h1 className="header-title">Add New Car - UrbanDrive</h1>
            </div>
            <button 
              onClick={() => window.history.back()}
              className="back-button"
            >
              <ArrowLeft className="back-icon" />
              Back
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="car-form">
            <div className="form-grid">
              {/* Left Column */}
              <div className="form-column">
                <div className="form-group">
                  <label>Car ID</label>
                  <input
                    type="number"
                    name="car_id"
                    value={formData.car_id}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Car Name</label>
                  <input
                    type="text"
                    name="car_name"
                    value={formData.car_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Color</label>
                  <input
                    type="text"
                    name="car_color"
                    value={formData.car_color}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Price per Day (₹)</label>
                  <input
                    type="number"
                    name="car_price"
                    value={formData.car_price}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="form-column">
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="car_location"
                    value={formData.car_location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Seating Capacity</label>
                  <input
                    type="number"
                    name="car_seater"
                    value={formData.car_seater}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Image URL</label>
                  <input
                    type="url"
                    name="car_image"
                    value={formData.car_image}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="car_available"
                      checked={formData.car_available}
                      onChange={handleChange}
                    />
                    <span>Available for Rent</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Full Width Fields */}
            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                name="car_description"
                value={formData.car_description}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button type="submit" className="submit-button">
                <Upload className="submit-icon" />
                Add Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;