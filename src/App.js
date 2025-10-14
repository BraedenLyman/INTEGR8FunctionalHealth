import './App.css';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <a href="/">
              <img src="/assets/images/BriLogo.png" alt="Integr8 Functional Health Logo" className="logo" />
            </a>
          </div>

          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Integr8 Functional Health</h1>
          <p className="hero-subtitle">Comprehensive Massage Therapy & Wellness</p>
          <p className="hero-description">Experience personalized, mobile massage therapy that focuses on your whole body wellness</p>
          <a href="#contact" className="cta-button">Book Your Appointment</a>
        </div>
      </section>

      <main>
        <section className="about" id="about">
          <div className="section-container">
            <h2 className="section-title">About Briea</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Briea completed her Bachelors in Science in Kinesiology at Brock University before becoming a certified person trainer which led her to pursue a career in massage therapy.
                </p>
                <p>
                  Briea was first registered in 2016 and has been providing comprehensive care to each client ever since. She focuses on fascia which allows for deep release of adhesions that cause many different dysfunctions.
                </p>
                <p>
                  Briea is certified in:
                </p>
                <ul className="credentials-list">
                  <li>Fascial Stretch Therapy</li>
                  <li>Neurostim Scar Tissue Release</li>
                  <li>Deep Tissue Techniques</li>
                </ul>
                <p>
                  Briea sees every client through a wholistic lens which means their lifestyle, diet and physical activity are all important factors in their massage therapy treatments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-container">
            <h2 className="section-title">Services & Pricing</h2>
            <p className="services-note">All massages are mobile at this time</p>

            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Sports Massage</h3>
                <p className="service-description">Targeted therapy for athletic performance and recovery</p>
                <div className="price-options">
                  <div className="price-item">
                    <span className="duration">45 Min</span>
                    <span className="price">$95</span>
                  </div>
                  <div className="price-item">
                    <span className="duration">1 Hour</span>
                    <span className="price">$115</span>
                  </div>
                  <div className="price-item">
                    <span className="duration">90 Min</span>
                    <span className="price">$150</span>
                  </div>
                </div>
              </div>

              <div className="pricing-card">
                <h3>Fascial Stretch Therapy</h3>
                <p className="service-description">Advanced stretching technique for improved mobility</p>
                <div className="price-options">
                  <div className="price-item">
                    <span className="duration">45 Min</span>
                    <span className="price">$100</span>
                  </div>
                  <div className="price-item">
                    <span className="duration">1 Hour</span>
                    <span className="price">$120</span>
                  </div>
                </div>
              </div>

              <div className="pricing-card">
                <h3>Deep Tissue Massage</h3>
                <p className="service-description">Focused pressure for chronic tension and pain relief</p>
                <div className="price-options">
                  <div className="price-item">
                    <span className="duration">45 Min</span>
                    <span className="price">$95</span>
                  </div>
                  <div className="price-item">
                    <span className="duration">1 Hour</span>
                    <span className="price">$115</span>
                  </div>
                  <div className="price-item">
                    <span className="duration">90 Min</span>
                    <span className="price">$150</span>
                  </div>
                </div>
              </div>

              <div className="pricing-card">
                <h3>Relaxation Massage</h3>
                <p className="service-description">Gentle, soothing therapy for stress relief and wellness</p>
                <div className="price-options">
                  <div className="price-item">
                    <span className="duration">45 Min</span>
                    <span className="price">$95</span>
                  </div>
                  <div className="price-item">
                    <span className="duration">1 Hour</span>
                    <span className="price">$115</span>
                  </div>
                  <div className="price-item">
                    <span className="duration">90 Min</span>
                    <span className="price">$150</span>
                  </div>
                </div>
              </div>

              <div className="pricing-card">
                <h3>Prenatal Massage</h3>
                <p className="service-description">Safe, nurturing care for expecting mothers</p>
                <div className="price-options">
                  <div className="price-item">
                    <span className="duration">45 Min</span>
                    <span className="price">$95</span>
                  </div>
                  <div className="price-item">
                    <span className="duration">1 Hour</span>
                    <span className="price">$115</span>
                  </div>
                  <div className="price-item">
                    <span className="duration">90 Min</span>
                    <span className="price">$150</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="section-container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">Phone</span>
                  <a href="tel:2893778904" className="contact-value">289.377.8904</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href="mailto:integr8functionalhealth@gmail.com" className="contact-value">integr8functionalhealth@gmail.com</a>
                </div>
              </div>
              <p className="contact-cta">Ready to start your wellness journey? Contact us today to book your mobile massage appointment.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Integr8 Functional Health</h4>
              <p>Professional mobile massage therapy services</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>289.377.8904</p>
              <p>integr8functionalhealth@gmail.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Integr8 Functional Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
