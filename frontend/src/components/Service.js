import React from 'react';
import { Car, Shield, Clock, Award, MapPin, DollarSign } from 'lucide-react';
import "../Styles/Service.css"
import Header from './Header';
import Footer from './Footer';

const Services = () => {

  const services = [
    {
      icon: <Car size={40} />,
      title: "Premium Fleet",
      description: "Access to a wide range of luxury and economy vehicles"
    },
    {
      icon: <Shield size={40} />,
      title: "Safe & Secure",
      description: "Fully insured vehicles with 24/7 roadside assistance"
    },
    {
      icon: <Clock size={40} />,
      title: "Flexible Rentals",
      description: "Hourly, daily, weekly, and monthly rental options"
    },
    {
      icon: <Award size={40} />,
      title: "Quality Assured",
      description: "Regularly maintained and sanitized vehicles"
    },
    {
      icon: <MapPin size={40} />,
      title: "Multiple Locations",
      description: "Convenient pickup and drop-off points citywide"
    },
    {
      icon: <DollarSign size={40} />,
      title: "Best Rates",
      description: "Competitive pricing with no hidden fees"
    }
  ];

  const fleetCategories = [
    {
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2070",
      category: "Luxury",
      price: "From $199/day"
    },
    {
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=2070",
      category: "SUVs",
      price: "From $149/day"
    },
    {
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=2070",
      category: "Economy",
      price: "From $89/day"
    }
  ];

  return (
    <div className="services-container">
        <Header/>
      {/* Main Content */}
      <main className="services-main">
        <section className="services-hero">
          <h1>Our Services</h1>
          <p>Experience premium car rental services tailored to your needs</p>
        </section>

        <section className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </section>

        <section className="fleet-section">
          <h2>Our Fleet Categories</h2>
          <div className="fleet-grid">
            {fleetCategories.map((fleet, index) => (
              <div key={index} className="fleet-card">
                <div className="fleet-image" style={{ backgroundImage: `url(${fleet.image})` }}></div>
                <div className="fleet-info">
                  <h3>{fleet.category}</h3>
                  <p>{fleet.price}</p>
                  <button className="book-btn">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
        <Footer/>
    </div>
  );
};

export default Services;