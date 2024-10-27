import React, { useState, useEffect } from "react";
import axios from "axios";

const UserDashboard = () => {
  let [cars, setCars] = useState([]);
  let [view, setView] = useState(null);
  let token = localStorage.getItem("token");
  let email = localStorage.getItem("email");

  useEffect(() => {
    async function getCars() {
      let response = await axios.get("http://localhost:4000/cars", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCars(response.data);
    }
    getCars();
  }, [token]);

  let handleView = (car) => {
    setView(car);
  };

  let handleBook = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:4000/bookings",
      {
        email: email,
        car_id: view.car_id,
        car_name: view.car_name,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setView(null);
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cars.map((car) => (
          <div
            key={car.car_id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
              width: "200px",
            }}
          >
            <h3>{car.car_name}</h3>
            <p>{car.car_description}</p>
            <button onClick={() => handleView(car)}>View</button>
          </div>
        ))}
      </div>

      {view && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px",
            border: "1px solid #ccc",
          }}
        >
          <h2>{view.name}</h2>
          <p>{view.description}</p>
          <p>Price: ${view.price}</p>
          <button onClick={handleBook}>Book</button>
          <button onClick={() => setView(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
