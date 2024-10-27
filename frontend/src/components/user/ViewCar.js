import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Users, Palette, Info, IndianRupee } from 'lucide-react';
import "../../Styles/ViewCar.css";

const ViewCar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car } = location.state || {};

  if (!car) {
    return (
      <div className="view-car">
        <div className="view-car__error">
          <h2>Car details not found</h2>
          <button onClick={() => navigate('/user')} className="view-car__back-btn">
            Back to Cars
          </button>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    navigate('/user/payment', { state: { car } });
  };

  return (
    <div className="view-car">
      <div className="view-car__container">
        <div className="view-car__image-section">
          <img src={car.car_image} alt={car.car_name} className="view-car__image" />
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
            <button onClick={() => navigate('/user')} className="view-car__back-btn">
              Back to Cars
            </button>
            <button onClick={handleBookNow} className="view-car__book-btn">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCar;