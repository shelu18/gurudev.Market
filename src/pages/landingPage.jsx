import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
// Import your images
import headerImage from '../assets/market_banner.png';
import area1 from '../assets/marketimg/area1.jpg';
import area2 from '../assets/marketimg/area2.jpg';
import area3 from '../assets/marketimg/area3.jpg';
import '../styles/landingpage.css';

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

const marketImages = [area1, area2, area3];

export default function LandingPage() {
  const { t, i18n } = useTranslation();
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const IMAGE_COUNT = marketImages.length;

  // Carousel Autoplay
  useEffect(() => {
    // Clear any previous timeouts
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % IMAGE_COUNT);
    }, 2000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, IMAGE_COUNT]);

  return (
    <div className="landing-container">
      <div style={{ textAlign: "right", margin: "0 0 6px 0" }}>
        <button
          className="lang-btn"
          onClick={() => i18n.changeLanguage('en')}
          disabled={i18n.language === 'en'}
        >ENGLISH</button>
        <button
          className="lang-btn"
          style={{marginLeft: 10}}
          onClick={() => i18n.changeLanguage('hi')}
          disabled={i18n.language === 'hi'}
        >हिंदी</button>
      </div>
      <header className="landing-header">
        <img src={headerImage} alt="Gurudev Market" className="market-banner" />
        <div className="overlay">
          <h1>{t("welcome")}</h1>
          <p className="tagline">Your Gateway to Growing Business on the Highway!</p>
          <a href="#contact" className="cta-btn">{t("book_shop")}</a>
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

      {/* Carousel Section */}
      <section className="market-gallery">
        <h2>{t("explore_market")}</h2>
        <div className="native-carousel-outer">
          <div className="native-carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
            {marketImages.map((img, idx) => (
              <div className="native-carousel-slide" key={idx}>
                <img src={img} alt={`Marketplace area ${idx + 1}`} />
              </div>
            ))}
          </div>
          <div className="native-carousel-dots">
            {marketImages.map((_, idx) =>
              <button
                key={idx}
                className={`dot${current === idx ? " active" : ""}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            )}
          </div>
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
        <a href="/contact" className="cta-btn">{t("contact_us")}</a>
      </section>

      <footer className="landing-footer">
        <div>🏢 &nbsp; Gurudev Market, Jalodiya Panth Betma Road, Depalpur</div>
        <div>📞 &nbsp; +91-9754265265 &nbsp; | &nbsp; © 2025 Gurudev Market</div>
      </footer>
    </div>
  );
}
