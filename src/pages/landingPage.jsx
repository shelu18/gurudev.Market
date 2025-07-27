import React from 'react';
import '../styles/landingpage.css'; // Import CSS from styles folder

import headerImage from '../assets/market_banner.png';
import area1 from '../assets/marketimg/area1.jpg';
import area2 from '../assets/marketimg/area2.jpg';
import area3 from '../assets/marketimg/area3.jpg';

const features = [
  {
    icon: "🏪",
    title: "Available Shops",
    desc: "Modern shop spaces on highway for rent. Reserve your place in a growing marketplace."
  },
  {
    icon: "🚻",
    title: "Clean Facilities",
    desc: "Well-maintained washrooms and 24/7 clean drinking water for all tenants and customers."
  },
  {
    icon: "📍",
    title: "Prime Location",
    desc: "On the main highway near Depalpur, connecting rural commerce to major cities."
  }
];

export default function LandingPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <img src={headerImage} alt="Gurudev Market" className="market-banner" />
        <div className="overlay">
          <h1>Gurudev Market</h1>
          <p className="tagline">Your Gateway to Growing Business on the Highway!</p>
          <a href="#contact" className="cta-btn">Book Your Shop</a>
        </div>
      </header>

      <section className="features-section">
        <h2>Why Choose Gurudev Market?</h2>
        <div className="features-list">
          {features.map((feat, idx) => (
            <div className="feature-card" key={idx}>
              <div className="feature-icon">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="market-gallery">
        <h2>Explore Our Marketplace</h2>
        <div className="gallery-row">
          <img src={area1} alt="Marketplace area 1" />
          <img src={area2} alt="Marketplace area 2" />
          <img src={area3} alt="Marketplace area 3" />
        </div>
      </section>

      <section className="about-market">
        <h2>About Gurudev Market</h2>
        <p>
          Gurudev Market is a new commercial destination on the highway near Depalpur. We offer flexible shop spaces for entrepreneurs, with high visibility and a range of facilities. Join a vibrant community of businesses and customers!
        </p>
      </section>

      <section className="cta-section" id="contact">
        <h2>Interested in Booking a Shop?</h2>
        <p>Contact us today or fill out our booking form below to secure your space.</p>
        <a href="/contact" className="cta-btn">Contact Us</a>
      </section>

      <footer className="landing-footer">
        <div>🏢 &nbsp; Gurudev Market, Highway near Depalpur</div>
        <div>📞 &nbsp; +91-XXXXXXXXXX &nbsp; | &nbsp; © 2025 Gurudev Market</div>
      </footer>
    </div>
  );
}
