import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroQuotes } from "../Content";
import './Home.css';

// Import images
import heroImage from "../images/Hero_image.jpeg";
import softwareConsulting from "../images/Software_Consulting.png";
import cloudComputing from "../images/Cloud_Computing.png";
import designDevelopment from "../images/Design_and_Development.png";
import enterpriseSolutions from "../images/Enterprise_Solutions.png";
import aiSolutions from "../images/AI_Solutions.png";
import industriesImage from "../images/industries.png";
// import patternBg from "../images/pattern-bg.png"; // Add a subtle pattern image

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroQuotes.length);
    }, 3000);

    // Animation trigger
    setIsVisible(true);
    
    return () => clearInterval(interval);
  }, []);

  const services = [
    { img: softwareConsulting, title: "Software Consulting", link: "/services" },
    { img: cloudComputing, title: "Cloud Computing", link: "/services" },
    { img: designDevelopment, title: "Design & Development", link: "/services" },
    { img: enterpriseSolutions, title: "Enterprise Solutions", link: "/services" },
    { img: aiSolutions, title: "AI Solutions", link: "/services" }
  ];

  return (
    <div className={`home-page ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section with Parallax Effect */}
      <section className="hero-section-">
        <div className="hero-image-" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="hero-content-">
          <div className="quote-container">
            <h1 className="hero-heading-">{heroQuotes[currentIndex].heading}</h1>
            <h3 className="hero-subheading-">{heroQuotes[currentIndex].subheading}</h3>
          </div>
          
        </div>
      </section>

      {/* About Intro with Animated Background */}
      <section className="about-intro">
        <div className="pattern-overlay" ></div>
        <div className="content-wrapper">
          <h4 className="welcome-text">
            WELCOME TO<br/>
            <span className="company-name">EBLIZ SOLUTIONS LLC</span>
          </h4>
          <p className="intro-paragraph">
            Founded with a vision to redefine IT consulting, eBliz Solutions is committed to delivering 
            innovative, reliable, and scalable technology solutions. Our team combines deep expertise 
            with a client-first approach, ensuring businesses succeed in a fast-evolving digital world.
          </p>
          <Link to="/about" className="learn-more-btn">Learn More About Us</Link>
        </div>
      </section>

      {/* Services Gallery with Hover Effects */}
      <section className="services-section">
        <div className="section-header">
          <h2>Our Core Services</h2>
          <p>Solutions designed to transform your business</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <img src={service.img} alt={service.title} />
                </div>
                
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Industries Section with Interactive Map */}
      <section className="industries-section">
        <div className="section-header">
          <h2>Industries We Serve</h2>
          <p>Tailored solutions for your sector</p>
        </div>
        <div className="industries-content">
          <img src={industriesImage} alt="Industries we serve" className="industries-image" />
          <div className="industries-list">
            <ul>
              <li>Healthcare</li>
              <li>Finance & Banking</li>
              <li>Retail & E-commerce</li>
              <li>Manufacturing</li>
              <li>Education</li>
              <li>Logistics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Careers & Clients Section */}
      <div className="action-section">
  {/* Join Us Card */}
  <div className="action-card join-card">
    <div className="card-content">
      <div className="card-icon">
        <i className="fas fa-users"></i>
      </div>
      <h2>JOIN US</h2>
      <p className="card-subtitle">Be a part of our team!</p>
      <p className="card-text">Join Our Growing Team</p>
      <ul className="card-features">
        <li><i className="fas fa-check"></i> Competitive salaries</li>
        <li><i className="fas fa-check"></i> Flexible work options</li>
        <li><i className="fas fa-check"></i> Continuous learning</li>
      </ul>
      <Link to="/careers" className="action-btn">
        View Open Positions <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  </div>

  {/* Work With Us Card */}
  <div className="action-card work-card">
    <div className="card-content">
      <div className="card-icon">
        <i className="fas fa-handshake"></i>
      </div>
      <h2>WORK WITH US</h2>
      <p className="card-subtitle">Let's collaborate to achieve success together</p>
      <p className="card-text">Ready to Transform Your Business?</p>
      <ul className="card-features">
        <li><i className="fas fa-check"></i> Custom solutions</li>
        <li><i className="fas fa-check"></i> Industry expertise</li>
        <li><i className="fas fa-check"></i> Proven methodologies</li>
      </ul>
      <Link to="/contact" className="action-btn">
        Get In Touch <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  </div>
</div>

      {/* Testimonial Section */}
     
    </div>
  );
}

export default Home;