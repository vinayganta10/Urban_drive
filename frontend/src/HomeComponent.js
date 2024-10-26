import React, { useState } from 'react';
import { Menu, X, Car, Calendar, MapPin, ChevronRight, Phone, Mail, Facebook, Instagram, Twitter, Smartphone, CreditCard, CarFront, Star, Shield, Clock, DollarSign } from 'lucide-react';
import './HomeComponent.css';

const HomeComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const locations = ['New York', 'Los Angeles', 'Chicago', 'Miami', 'San Francisco'];

  const testimonials = [
    {
      name: "John Smith",
      role: "Business Traveler",
      comment: "Best car rental experience ever! The service was impeccable.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Tourist",
      comment: "Seamless booking process and great vehicle selection.",
      rating: 5
    },
    {
      name: "Mike Brown",
      role: "Local Resident",
      comment: "Excellent customer service and competitive prices.",
      rating: 5
    }
  ];

  const popularCars = [
    {
      name: "Tesla Model 3",
      category: "Electric",
      price: "1899",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "BMW X5",
      category: "SUV",
      price: "1999",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Mercedes C-Class",
      category: "Luxury",
      price: "2099",
      image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">
          <Car size={28} className="brand-icon" />
          <span>UrbanDrive</span>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-menu">
            <a href="#home" className="active">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>

        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="animate-slide-up">Your Journey Begins with UrbanDrive</h1>
          <p className="animate-fade-in">Experience premium car rentals with exceptional service and unbeatable prices</p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Cars</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Locations</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="booking-form animate-slide-up">
          <div className="form-group">
            <MapPin size={20} />
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <Calendar size={20} />
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              placeholder="Pickup Date"
            />
          </div>

          <div className="form-group">
            <Calendar size={20} />
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              placeholder="Return Date"
            />
          </div>

          <button className="search-btn">
            Search Cars <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Popular Cars Section */}
      <section className="popular-cars">
        <h2>Popular Cars</h2>
        <div className="cars-grid">
          {popularCars.map((car, index) => (
            <div key={index} className="car-card">
              <div className="car-image" style={{ backgroundImage: `url(${car.image})` }}>
                <span className="car-category">{car.category}</span>
              </div>
              <div className="car-details">
                <h3>{car.name}</h3>
                <div className="car-price">
                  <span className="price">₹{car.price}</span>
                  <span className="period">/day</span>
                </div>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose UrbanDrive?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <Shield className="benefit-icon" />
            <h3>Fully Insured</h3>
            <p>All our vehicles come with comprehensive insurance coverage</p>
          </div>
          <div className="benefit-card">
            <Clock className="benefit-icon" />
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer support for your peace of mind</p>
          </div>
          <div className="benefit-card">
            <DollarSign className="benefit-icon" />
            <h3>Best Rates</h3>
            <p>Competitive pricing with no hidden fees</p>
          </div>
          <div className="benefit-card">
            <Star className="benefit-icon" />
            <h3>Quality Service</h3>
            <p>Exceptional service quality with 5-star ratings</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="star-icon" />
                ))}
              </div>
              <p className="comment">{testimonial.comment}</p>
              <div className="user-info">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Steps Section */}
      <section className="booking-steps">
        <h2>How to Book Your Car?</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon">
              <Smartphone size={32} />
            </div>
            <h3>1. Open App</h3>
            <p>Log into UrbanDrive app or website</p>
          </div>
          <div className="step-card">
            <div className="step-icon">
              <Calendar size={32} />
            </div>
            <h3>2. Select Details</h3>
            <p>Choose city, date and time</p>
          </div>
          <div className="step-card">
            <div className="step-icon">
              <CarFront size={32} />
            </div>
            <h3>3. Pick Car</h3>
            <p>Select from our premium fleet</p>
          </div>
          <div className="step-card">
            <div className="step-icon">
              <CreditCard size={32} />
            </div>
            <h3>4. Drive Away</h3>
            <p>Complete booking and enjoy your ride</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🚗</div>
          <h3>Wide Selection</h3>
          <p>Choose from our diverse fleet of vehicles</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Best Prices</h3>
          <p>Competitive rates and special offers</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Safe & Secure</h3>
          <p>Fully insured and maintained vehicles</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p><Phone size={16} /> +1 (555) 123-4567</p>
            <p><Mail size={16} /> info@urbandrive.com</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <Facebook size={20} />
              <Instagram size={20} />
              <Twitter size={20} />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 UrbanDrive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeComponent;