import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Car, CircleDashed, Mail, AlertCircle } from 'lucide-react';
import "../Styles/AdminBookings.css";

function AdminBookings() {
    const token = localStorage.getItem("token");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data: bookingsData } = await axios.get('http://localhost:4000/bookings', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        
        const bookingsWithCars = await Promise.all(
          bookingsData.map(async (booking) => {
            try {
              const { data: carData } = await axios.get(`http://localhost:4000/cars/${booking.car_id}`, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
              return { ...booking, ...carData };
            } catch (err) {
              console.error(`Error fetching car details for booking ${booking._id}:`, err);
              return booking;
            }
          })
        );

        setBookings(bookingsWithCars);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch bookings. Please try again later.');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <div className="admin-container">
        <div className="loading-state">
          <CircleDashed className="loading-icon" />
          <span>Loading bookings...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-container">
        <div className="error-state">
          <AlertCircle className="error-icon" />
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-content">
        <div className="header">
          <h1>Admin Bookings</h1>
          <div className="booking-count">
            Total Bookings: {bookings.length}
          </div>
        </div>

        <div className="bookings-grid">
          {bookings.map((booking) => (
            <div key={booking._id} className="booking-card">
              <div className="card-image">
                {booking.car_image ? (
                  <img
                    src={booking.car_image}
                    alt={booking.car_name}
                  />
                ) : (
                  <div className="image-placeholder">
                    <Car />
                  </div>
                )}
              </div>
              
              <div className="card-content">
                <div className="card-header">
                  <h2>{booking.car_name}</h2>
                  {booking.price_per_day && (
                    <span className="price-badge">
                      ${booking.price_per_day}/day
                    </span>
                  )}
                </div>

                <div className="booking-details">
                  <div className="detail-item">
                    <Mail />
                    <span>{booking.email}</span>
                  </div>
                  
                  {booking.model && (
                    <div className="detail-item">
                      <Car />
                      <span>Model: {booking.model}</span>
                    </div>
                  )}
                </div>

                <div className="card-actions">
                  <button
                    className="view-details-btn"
                    onClick={() => {
                      console.log('View booking details:', booking._id);
                    }}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {bookings.length === 0 && (
          <div className="empty-state">
            <Car />
            <h3>No bookings found</h3>
            <p>No bookings have been made yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminBookings;