import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Save, ArrowLeft, Car, Palette, DollarSign, MapPin, Users, FileText, Image, CheckCircle } from 'lucide-react';
import "../Styles/EditCar.css"

const EditCar = () => {
    const token = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    car_id: '',
    car_name: '',
    car_color: '',
    car_available: false,
    car_price: '',
    car_location: '',
    car_seater: '',
    car_description: '',
    car_image: ''
  });

  useEffect(() => {
    if (location.state && location.state.car) {
      setFormData(location.state.car);
    }
  }, [location]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch('http://localhost:4000/cars', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      navigate('/admin');
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  return (
    <div className="edit-car-container">
      <div className="edit-car-card">
        <div className="edit-car-header">
          <h2>Edit Car Details</h2>
          <p>Update information for {formData.car_name}</p>
        </div>

        <form onSubmit={handleSubmit} className="edit-car-form">
          <div className="form-grid">
            <div className="form-group">
              <label>
                <Car size={18} />
                Car ID
              </label>
              <input
                type="number"
                name="car_id"
                value={formData.car_id}
                onChange={handleChange}
                readOnly
                className="readonly"
              />
            </div>

            <div className="form-group">
              <label>
                <Car size={18} />
                Car Name
              </label>
              <input
                type="text"
                name="car_name"
                value={formData.car_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <Palette size={18} />
                Color
              </label>
              <input
                type="text"
                name="car_color"
                value={formData.car_color}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <DollarSign size={18} />
                Price per Day
              </label>
              <input
                type="tel"
                name="car_price"
                value={formData.car_price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <MapPin size={18} />
                Location
              </label>
              <input
                type="text"
                name="car_location"
                value={formData.car_location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <Users size={18} />
                Seating Capacity
              </label>
              <input
                type="number"
                name="car_seater"
                value={formData.car_seater}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full-width">
              <label>
                <Image size={18} />
                Image URL
              </label>
              <input
                type="url"
                name="car_image"
                value={formData.car_image}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full-width">
              <label>
                <FileText size={18} />
                Description
              </label>
              <textarea
                name="car_description"
                value={formData.car_description}
                onChange={handleChange}
                required
                rows="4"
              />
            </div>

            <div className="form-group availability-toggle">
            <label className="toggle-label">
            <CheckCircle size={18} />
                Available for Booking
            </label>
              <label className="switch">
                <input
                  type="checkbox"
                  name="car_available"
                  checked={formData.car_available}
                  onChange={handleChange}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate('/admin')}
              className="back-btn"
            >
              <ArrowLeft size={18} />
              Back
            </button>
            <button type="submit" className="save-btn">
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCar;