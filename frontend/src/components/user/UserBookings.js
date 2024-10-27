import React, { useState, useEffect } from "react";
import axios from "axios";
import { User } from "lucide-react";

const UserBookings = () => {
    const [bookings, setBookings] = useState([]);
    let token = localStorage.getItem('token');
    let email = localStorage.getItem('email');
    
    useEffect(() => {
        async function getBookings() {
            try {
                let response = await axios.get(`http://localhost:4000/bookings/${email}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setBookings(response.data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        }
        getBookings();
    }, [token, email]);

    return (
        <div style={{ padding: '20px' }}>
            <h2><User /> Your Bookings</h2>
            {bookings.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {bookings.map((booking) => (
                        <div key={booking.id} style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '16px',
                            margin: '10px',
                            width: '200px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}>
                            <h3>{booking.car_name}</h3>
                            <p><strong>Car ID:</strong> {booking.car_id}</p>
                            <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                            <p><strong>Status:</strong> {booking.status}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No bookings found.</p>
            )}
        </div>
    );
};

export default UserBookings;
