import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Edit2, Trash2, MapPin, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../Styles/AdminBody.css";

const AdminBody = () => {
    const token = localStorage.getItem("token");
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:4000/cars', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
      toast.error('Failed to load cars');
    }
  };

  const handleEdit = (car) => {
    navigate('/admin/edit', { state: { car } });
  };

  const handleDelete = async (car) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${car.car_name}?`);
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:4000/cars/${car.car_id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Car deleted successfully');
        fetchCars();
      } catch (error) {
        console.error('Error deleting car:', error);
        toast.error('Failed to delete car');
      }
    }
  };

  const toggleAvailability = async (car) => {
    try {
      await axios.patch(`http://localhost:4000/cars`, 
        {
          car_id: car.car_id,
          car_available: !car.car_available
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      
      // Update local state
      setCars(cars.map(c => 
        c.car_id === car.car_id 
          ? { ...c, car_available: !c.car_available }
          : c
      ));
      
      toast.success(`Car marked as ${!car.car_available ? 'available' : 'unavailable'}`);
    } catch (error) {
      console.error('Error updating car availability:', error);
      toast.error('Failed to update car availability');
    }
  };

  return (
    <div className="admin-body">
      <div className="header">
        <h1>Car Fleet Management</h1>
        <button className="add-car-btn" onClick={() => navigate('/admin/add')}>
          Add New Car
        </button>
      </div>

      <div className="car-grid">
        {cars.map((car) => (
          <div key={car.car_id} className="car-card">
            <div className="car-image">
              <img src={car.car_image} alt={car.car_name} />
              <div className="status-container">
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={car.car_available}
                    onChange={() => toggleAvailability(car)}
                  />
                  <span className="slider"></span>
                </label>
                <span className={`status ${car.car_available ? 'available' : 'unavailable'}`}>
                  {car.car_available ? 'Available' : 'Booked'}
                </span>
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
                <button className="edit-btn" onClick={() => handleEdit(car)}>
                  <Edit2 size={16} />
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(car)}>
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBody;