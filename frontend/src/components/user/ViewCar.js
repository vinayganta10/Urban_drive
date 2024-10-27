import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Users, Palette, Info, IndianRupee } from "lucide-react";
import "../../Styles/ViewCar.css";
import axios from "axios";

const ViewCar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car } = location.state || {};
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  let handleBook = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:4000/bookings",
      {
        email: email,
        car_id: car.car_id,
        car_name: car.car_name,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    await axios.patch(`http://localhost:4000/cars`, 
      {
        car_id: car.car_id,
        car_available: !car.car_available
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    navigate("/user/payment", { state: { car } });
  };

  if (!car) {
    return (
      <div className="view-car">
        <div className="view-car__error">
          <h2>Car details not found</h2>
          <button
            onClick={() => navigate("/user")}
            className="view-car__back-btn"
          >
            Back to Cars
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="view-car">
      <div className="view-car__container">
        <div className="view-car__image-section">
          <img
            src={car.car_image}
            alt={car.car_name}
            className="view-car__image"
          />
        </div>

        <div className="view-car__content">
          <div className="view-car__header">
            <h1 className="view-car__title">{car.car_name}</h1>
            <div className="view-car__price">
              <IndianRupee size={20} />
              <span>{car.car_price}</span>
              <span className="view-car__price-period">/day</span>
            </div>
          </div>

          <div className="view-car__details">
            <div className="view-car__detail-item">
              <MapPin size={20} />
              <div>
                <h3>Location</h3>
                <p>{car.car_location}</p>
              </div>
            </div>

            <div className="view-car__detail-item">
              <Users size={20} />
              <div>
                <h3>Capacity</h3>
                <p>{car.car_seater} Seater</p>
              </div>
            </div>

            <div className="view-car__detail-item">
              <Palette size={20} />
              <div>
                <h3>Color</h3>
                <p>{car.car_color}</p>
              </div>
            </div>
          </div>

          <div className="view-car__description">
            <div className="view-car__description-header">
              <Info size={20} />
              <h3>Description</h3>
            </div>
            <p>{car.car_description}</p>
          </div>

          <div className="view-car__actions">
            <button
              onClick={() => navigate("/user")}
              className="view-car__back-btn"
            >
              Back to Cars
            </button>
            <button onClick={handleBook} className="view-car__book-btn">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCar;
