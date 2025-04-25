import { useState } from 'react';
import './Services.css';
import heroImage from '../images/Services_hero.png'; // Import your hero image
import { useNavigate } from 'react-router-dom'; // Add this import

function Services() {

  const [activeTab, setActiveTab] = useState('consulting');
  const navigate = useNavigate(); // Initialize navigate

  const services = {
    consulting: {
      title: "Software Consulting",
      icon: "fas fa-chess-queen",
      description: "Transform your technology strategy with our expert guidance",
      highlights: [
        "Technology roadmap development",
        "Digital transformation advisory",
        "Legacy system modernization",
        "Tech stack evaluation",
        "Process optimization"
      ],
      detail: "Our seasoned consultants become an extension of your team, helping you navigate complex technical decisions with confidence. We analyze your current systems, identify opportunities for improvement, and create actionable plans that align technology with business goals."
    },
    enterprise: {
      title: "Enterprise Solutions",
      icon: "fas fa-building",
      description: "Power your business with scalable, mission-critical systems",
      highlights: [
        "Custom ERP/CRM development",
        "Workflow automation",
        "System integration",
        "Data governance solutions",
        "Scalable architecture design"
      ],
      detail: "We build robust enterprise-grade applications that handle your most complex business processes. Our solutions are designed to grow with your organization, ensuring long-term value and adaptability in a changing market landscape."
    },
    cloud: {
      title: "Cloud Computing",
      icon: "fas fa-cloud",
      description: "Modernize your infrastructure with cloud-native excellence",
      highlights: [
        "Cloud migration strategy",
        "AWS/Azure/GCP architecture",
        "Serverless solutions",
        "Kubernetes orchestration",
        "Cost optimization"
      ],
      detail: "From lift-and-shift migrations to building cloud-native applications, we help you leverage the full potential of cloud computing. Our certified architects design secure, high-performance environments that reduce costs while increasing agility."
    },
    design: {
      title: "Design & Development",
      icon: "fas fa-code",
      description: "Beautiful, functional software crafted to perfection",
      highlights: [
        "UI/UX design systems",
        "Web & mobile development",
        "Progressive web apps",
        "Quality assurance",
        "DevOps integration"
      ],
      detail: "We combine elegant design with bulletproof engineering to create software that users love. Our full-cycle development process ensures pixel-perfect implementations that are as maintainable as they are visually stunning."
    },
    ai: {
      title: "AI Solutions",
      icon: "fas fa-brain",
      description: "Harness intelligent automation for competitive advantage",
      highlights: [
        "Machine learning models",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision",
        "AI integration strategy"
      ],
      detail: "Move beyond hype to practical AI implementations that deliver real business value. Our data scientists and engineers build tailored AI solutions that automate processes, uncover insights, and create smarter customer experiences."
    }
  };

  

const handleDiscussClick = () => {
  navigate('/contact'); // Navigate to contact page
};

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Technology Services That Deliver Results</h1>
            <p>
              We don't just build software—we solve business challenges with 
              <span className="aqua-text"> technical excellence</span> and 
              <span className="coral-text"> strategic vision</span>
            </p>
          </div>
          </div>
        </div>

      {/* Services Navigation */}
      <div className="services-nav">
        {Object.keys(services).map((key) => (
          <button
            key={key}
            className={`nav-item ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            <i className={services[key].icon}></i>
            <span>{services[key].title}</span>
          </button>
        ))}
      </div>

      {/* Active Service Display */}
      <div className="service-display">
        <div className="service-overview">
          <div className="service-header">
            <i className={services[activeTab].icon}></i>
            <h2>{services[activeTab].title}</h2>
            <p className="service-description">{services[activeTab].description}</p>
          </div>

          <div className="service-highlights">
            <h3>What We Deliver</h3>
            <ul>
              {services[activeTab].highlights.map((item, index) => (
                <li key={index}>
                  <i className="fas fa-check-circle coral-text"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="service-detail">
          <div className="detail-card">
            <h3>Our Approach</h3>
            <p>{services[activeTab].detail}</p>

            <div className="case-study">
              <div className="case-icon aqua-bg">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="case-content">
                <h4>Success Story</h4>
                <p>
                  {activeTab === 'consulting' && "Reduced operational costs by 40% for a retail chain through legacy system modernization"}
                  {activeTab === 'enterprise' && "Built a custom ERP system that streamlined operations for a 500-employee manufacturer"}
                  {activeTab === 'cloud' && "Migrated 150+ workloads to AWS with 60% cost savings for a financial services firm"}
                  {activeTab === 'design' && "Increased mobile app engagement by 300% through UX redesign for a healthcare startup"}
                  {activeTab === 'ai' && "Implemented predictive maintenance that reduced downtime by 75% for an industrial client"}
                </p>
              </div>
            </div>

            <button 
              className="cta-button coral-bg"
              onClick={handleDiscussClick} // Added click handler
            >
              Discuss Your Project <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Unified Value Proposition */}
      <div className="value-proposition">
        <h2>Why Clients Choose Our Services</h2>
        <div className="value-grid">
          <div className="value-card">
            <div className="value-icon aqua-bg">
              <i className="fas fa-medal"></i>
            </div>
            <h3>Proven Expertise</h3>
            <p>Certified specialists with deep technical knowledge across industries</p>
          </div>
          <div className="value-card">
            <div className="value-icon coral-bg">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Tailored Solutions</h3>
            <p>Custom approaches designed for your specific business context</p>
          </div>
          <div className="value-card">
            <div className="value-icon aqua-bg">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Partnership Model</h3>
            <p>We align with your goals for long-term success</p>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="tech-stack">
        <h2>Technologies We Master</h2>
        <div className="tech-grid">
          <div className="tech-category">
            <h3>Frontend</h3>
            <div className="tech-items">
              <span>React</span>
              <span>Angular</span>
              <span>Vue</span>
              <span>TypeScript</span>
            </div>
          </div>
          <div className="tech-category">
            <h3>Backend</h3>
            <div className="tech-items">
              <span>Node.js</span>
              <span>.NET</span>
              <span>Python</span>
              <span>Java</span>
            </div>
          </div>
          <div className="tech-category">
            <h3>Cloud</h3>
            <div className="tech-items">
              <span>AWS</span>
              <span>Azure</span>
              <span>GCP</span>
              <span>Kubernetes</span>
            </div>
          </div>
          <div className="tech-category">
            <h3>Data & AI</h3>
            <div className="tech-items">
              <span>TensorFlow</span>
              <span>PyTorch</span>
              <span>Snowflake</span>
              <span>Spark</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;