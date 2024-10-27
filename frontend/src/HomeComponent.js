import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Calendar, MapPin, ChevronRight, Smartphone, CreditCard, CarFront, Star, Shield, Clock, DollarSign } from 'lucide-react';
import './HomeComponent.css';

const HomeComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const locations = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Ahmedabad',
    'Chennai',
    'Kolkata',
    'Pune',
    'Jaipur',
    'Surat',
    'Lucknow',
    'Kanpur',
    'Nagpur',
    'Indore',
    'Thane',
    'Bhopal',
    'Visakhapatnam',
    'Patna',
    'Vadodara',
    'Ghaziabad',
    'Ludhiana',
    'Agra',
    'Nashik',
    'Faridabad',
    'Meerut',
    'Rajkot',
    'Kalyan-Dombivli',
    'Vasai-Virar',
    'Varanasi',
    'Srinagar',
    'Aurangabad',
    'Dhanbad',
    'Amritsar',
    'Navi Mumbai',
    'Allahabad',
    'Ranchi',
    'Howrah',
    'Coimbatore',
    'Jabalpur',
    'Gwalior',
    'Vijayawada',
    'Jodhpur',
    'Madurai',
    'Raipur',
    'Kota',
    'Chandigarh',
    'Guwahati',
    'Solapur',
    'Hubli-Dharwad',
    'Tiruchirappalli',
    'Bareilly',
    'Mysore',
    'Tiruppur',
    'Gurgaon',
    'Aligarh',
    'Jalandhar',
    'Bhubaneswar',
    'Salem',
    'Mira-Bhayandar',
    'Warangal',
    'Guntur',
    'Bhiwandi',
    'Saharanpur',
    'Gorakhpur',
    'Bikaner',
    'Amravati',
    'Noida',
    'Jamshedpur',
    'Bhilai',
    'Cuttack',
    'Firozabad',
    'Kochi',
    'Bhavnagar',
    'Dehradun',
    'Durgapur',
    'Asansol',
    'Nanded',
    'Kolhapur',
    'Ajmer',
    'Akola',
    'Gulbarga',
    'Jamnagar'
  ];
  

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
    <div className="ud-home-container">
      <Header />

      {/* Hero Section */}
      <section className="ud-hero">
        <div className="ud-hero-content">
          <h1 className="ud-animate-slide-up">Your Journey Begins with UrbanDrive</h1>
          <p className="ud-animate-fade-in">Experience premium car rentals with exceptional service and unbeatable prices</p>
          
          <div className="ud-hero-stats">
            <div className="ud-stat-item">
              <span className="ud-stat-number">1000+</span>
              <span className="ud-stat-label">Cars</span>
            </div>
            <div className="ud-stat-item">
              <span className="ud-stat-number">50+</span>
              <span className="ud-stat-label">Locations</span>
            </div>
            <div className="ud-stat-item">
              <span className="ud-stat-number">24/7</span>
              <span className="ud-stat-label">Support</span>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="ud-booking-form ud-animate-slide-up">
          <div className="ud-form-group">
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

          <div className="ud-form-group">
            <Calendar size={20} />
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              placeholder="Pickup Date"
            />
          </div>

          <div className="ud-form-group">
            <Calendar size={20} />
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              placeholder="Return Date"
            />
          </div>

          <button className="ud-search-btn">
            Search Cars <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Popular Cars Section */}
      <section className="ud-popular-cars">
        <h2>Popular Cars</h2>
        <div className="ud-cars-grid">
          {popularCars.map((car, index) => (
            <div key={index} className="ud-car-card">
              <div className="ud-car-image" style={{ backgroundImage: `url(${car.image})` }}>
                <span className="ud-car-category">{car.category}</span>
              </div>
              <div className="ud-car-details">
                <h3>{car.name}</h3>
                <div className="ud-car-price">
                  <span className="ud-price">${car.price}</span>
                  <span className="ud-period">/day</span>
                </div>
                <button className="ud-book-now-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="ud-why-choose-us">
        <h2>Why Choose UrbanDrive?</h2>
        <div className="ud-benefits-grid">
          <div className="ud-benefit-card">
            <Shield className="ud-benefit-icon" />
            <h3>Fully Insured</h3>
            <p>All our vehicles come with comprehensive insurance coverage</p>
          </div>
          <div className="ud-benefit-card">
            <Clock className="ud-benefit-icon" />
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer support for your peace of mind</p>
          </div>
          <div className="ud-benefit-card">
            <DollarSign className="ud-benefit-icon" />
            <h3>Best Rates</h3>
            <p>Competitive pricing with no hidden fees</p>
          </div>
          <div className="ud-benefit-card">
            <Star className="ud-benefit-icon" />
            <h3>Quality Service</h3>
            <p>Exceptional service quality with 5-star ratings</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="ud-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="ud-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="ud-testimonial-card">
              <div className="ud-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="ud-star-icon" />
                ))}
              </div>
              <p className="ud-comment">{testimonial.comment}</p>
              <div className="ud-user-info">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Steps Section */}
      <section className="ud-booking-steps">
        <h2>How to Book Your Car?</h2>
        <div className="ud-steps-container">
          <div className="ud-step-card">
            <div className="ud-step-icon">
              <Smartphone size={32} />
            </div>
            <h3>1. Open App</h3>
            <p>Log into UrbanDrive app or website</p>
          </div>
          <div className="ud-step-card">
            <div className="ud-step-icon">
              <Calendar size={32} />
            </div>
            <h3>2. Select Details</h3>
            <p>Choose city, date and time</p>
          </div>
          <div className="ud-step-card">
            <div className="ud-step-icon">
              <CarFront size={32} />
            </div>
            <h3>3. Pick Car</h3>
            <p>Select from our premium fleet</p>
          </div>
          <div className="ud-step-card">
            <div className="ud-step-icon">
              <CreditCard size={32} />
            </div>
            <h3>4. Drive Away</h3>
            <p>Complete booking and enjoy your ride</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="ud-features">
        <div className="ud-feature-card">
          <div className="ud-feature-icon">🚗</div>
          <h3>Wide Selection</h3>
          <p>Choose from our diverse fleet of vehicles</p>
        </div>
        <div className="ud-feature-card">
          <div className="ud-feature-icon">💰</div>
          <h3>Best Prices</h3>
          <p>Competitive rates and special offers</p>
        </div>
        <div className="ud-feature-card">
          <div className="ud-feature-icon">🔒</div>
          <h3>Safe & Secure</h3>
          <p>Fully insured and maintained vehicles</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeComponent;