import React from 'react';
import { Car, Users, Trophy, Building } from 'lucide-react';
import "../Styles/About.css"
import Header from './Header';
import Footer from './Footer';

const About = () => {


  const stats = [
    { icon: <Car size={32} />, number: "1000+", label: "Vehicles" },
    { icon: <Users size={32} />, number: "50000+", label: "Happy Customers" },
    { icon: <Trophy size={32} />, number: "15+", label: "Years Experience" },
    { icon: <Building size={32} />, number: "30+", label: "Locations" }
  ];

  const team = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=774",
      name: "John Anderson",
      position: "CEO"
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=776",
      name: "Sarah Mitchell",
      position: "Operations Director"
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=774",
      name: "Michael Chen",
      position: "Fleet Manager"
    }
  ];

  return (
    <div className="about-container">
        <Header/>

      {/* Main Content */}
      <main className="about-main">
        <section className="about-hero">
          <h1>About UrbanDrive</h1>
          <p>Driving innovation in car rentals since 2009</p>
        </section>

        <section className="about-story">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>Founded in 2009, UrbanDrive has revolutionized the car rental industry with our commitment to exceptional service and cutting-edge technology. We started with a simple mission: to make car rentals hassle-free and enjoyable for everyone.</p>
            <p>Today, we're proud to serve thousands of customers across the country, providing them with premium vehicles and unmatched customer service.</p>
          </div>
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" alt="UrbanDrive office" />
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="team-section">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image" style={{ backgroundImage: `url(${member.image})` }}></div>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    <Footer/>
    </div>
  );
};

export default About;