import "./Home.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import software_consulting from "../images/Software_Consulting.png"
import cloud_computing from "../images/Cloud_Computing.png"
import design_development from "../images/Design_and_Development.png"
import enterprise_solutions from "../images/Enterprise_Solutions.png"
import ai_solutions from "../images/AI_Solutions.png"
import industries from "../images/industries.png"
import careers from "../images/careers.png"
import clients from "../images/clients.png"



import { heroQuotes } from "../Content"; // Assuming content.js is lowercase (best practice)

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroQuotes.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>{heroQuotes[currentIndex].heading}</h1>
          <h3 className="subheading">{heroQuotes[currentIndex].subheading}</h3>
        </div>
      </section>

      <section className="about-intro">
      <h4 className="welcome-text">WELCOME TO<br/><span className="company-name">EBLIZ SOLUTIONS LLC</span></h4>
      <span className="intro-paragraph">
        Founded with a vision to redefine IT consulting, eBliz Solutions is committed to delivering innovative, reliable, and scalable technology solutions. 
        Our team combines deep expertise with a client-first approach, ensuring businesses succeed in a fast-evolving digital world.
      </span>
    </section>
    <section>
    <div className="icon-gallery">
      <Link to="/services">
        <img src={software_consulting} alt="Software Consulting" className="icon-item" />
      </Link>
      <Link to="/services">
        <img src={cloud_computing} alt="Enterprise Solutions" className="icon-item" />
      </Link>
      <Link to="/services">
        <img src={design_development} alt="Design and Development" className="icon-item" />
      </Link>
      <Link to="/services">
        <img src={enterprise_solutions} alt="Cloud Computing" className="icon-item" />
      </Link>
      <Link to="/services">
        <img src={ai_solutions} alt="AI Solutions" className="icon-item" />
      </Link>
    </div>
    </section>
    <section className="industries_section">
      <img src={industries} alt="Industries we serve"  />
    </section>
    <section className="careers-clients-section">
  <div className="careers-clients-item">
    <img src={careers} alt="Explore our careers" />
    <Link to="/careers" className="careers-clients-btn">Join Our Team</Link>
  </div>
  <div className="careers-clients-item">
    <img src={clients} alt="Work with Us" />
    <Link to="/contact" className="careers-clients-btn">Contact Us</Link>
  </div>
</section>
    </div>
  );
}

export default Home;
