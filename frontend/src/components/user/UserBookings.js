import React, { useState, useEffect } from "react";
import axios from "axios";
import { Car, CircleDashed, Calendar, AlertCircle, Clock } from 'lucide-react';
import "../../Styles/UserBookings.css"

const UserBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    
    useEffect(() => {
        async function getBookings() {
            try {
                const response = await axios.get(`http://localhost:4000/bookings/${email}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                
                // Fetch car details for each booking
                const bookingsWithDetails = await Promise.all(
                    response.data.map(async (booking) => {
                        try {
                            const carResponse = await axios.get(`http://localhost:4000/cars/${booking.car_id}`, {
                                headers: { 'Authorization': `Bearer ${token}` }
                            });
                            return { ...booking, ...carResponse.data };
                        } catch (err) {
                            console.error(`Error fetching car details for booking ${booking._id}:`, err);
                            return booking;
                        }
                    })
                );
                
                setBookings(bookingsWithDetails);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching bookings:", error);
                setError("Failed to load your bookings. Please try again later.");
                setLoading(false);
            }
        }
        getBookings();
    }, [token, email]);

    if (loading) {
        return (
            <div className="ub-container">
                <div className="ub-loading-state">
                    <CircleDashed className="ub-loading-icon" />
                    <span>Loading your bookings...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="ub-container">
                <div className="ub-error-state">
                    <AlertCircle className="ub-error-icon" />
                    <span>{error}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="ub-container">
            <div className="ub-content">
                <div className="ub-header">
                    <h1>Your Bookings</h1>
                    <div className="ub-booking-count">
                        Total Bookings: {bookings.length}
                    </div>
                </div>

                <div className="ub-bookings-grid">
                    {bookings.map((booking) => (
                        <div key={booking._id} className="ub-booking-card">
                            <div className="ub-card-image">
                                {booking.car_image ? (
                                    <img
                                        src={booking.car_image}
                                        alt={booking.car_name}
                                    />
                                ) : (
                                    <div className="ub-image-placeholder">
                                        <Car />
                                    </div>
                                )}
                            </div>
                            
                            <div className="ub-card-content">
                                <div className="ub-card-header">
                                    <h2>{booking.car_name}</h2>
                                    <span className="ub-status-badge">
                                        Active
                                    </span>
                                </div>

                                <div className="ub-booking-details">
                                    <div className="ub-detail-item">
                                        <Calendar />
                                        <span>Booked for: {new Date().toLocaleDateString()}</span>
                                    </div>
                                    {booking.model && (
                                        <div className="ub-detail-item">
                                            <Car />
                                            <span>Model: {booking.model}</span>
                                        </div>
                                    )}
                                    
                                    <div className="ub-detail-item">
                                        <Clock />
                                        <span>Duration: 24 hours</span>
                                    </div>
                                </div>

                                <div className="ub-card-actions">
                                    <button className="ub-view-details-btn">
                                        View Details →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {bookings.length === 0 && (
                    <div className="ub-empty-state">
                        <Car />
                        <h3>No Bookings Found</h3>
                        <p>You haven't made any car bookings yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserBookings;