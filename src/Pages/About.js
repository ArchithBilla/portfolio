import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section with Image */}
      <div className="about-hero">
        
      </div>

      {/* Content Section */}
      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Founded on the principles of innovation and excellence, eBliz Solutions has grown from 
            a visionary startup to a trusted partner for businesses navigating digital transformation. 
            Our team of seasoned technologists and business strategists brings together decades 
            of combined experience across industries, united by a common goal: to make technology 
            work harder for your business.
          </p>
          <p>
            What sets us apart is our unique blend of technical prowess and business acumen. 
            We don't just implement solutions—we understand how they impact your bottom line, 
            your team, and your customers.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Philosophy</h2>
          <ul className="about-features">
            <li>
              <strong>Technology with Purpose:</strong> Every solution we recommend serves a clear 
              business objective, never just technical novelty
            </li>
            <li>
              <strong>Partnership Over Transactions:</strong> We build lasting relationships that 
              evolve with your business needs
            </li>
            <li>
              <strong>Future-Ready Thinking:</strong> Our solutions are designed to scale and adapt 
              as your business grows
            </li>
            <li>
              <strong>Transparency First:</strong> Clear communication and honest assessments form 
              the foundation of all our engagements
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Difference</h2>
          <div className="difference-grid">
            <div className="difference-card">
              <h3>Industry-Specific Expertise</h3>
              <p>
                We don't believe in one-size-fits-all solutions. Our consultants specialize in 
                vertical markets, bringing relevant experience that translates to actionable insights 
                for your specific challenges.
              </p>
            </div>
            <div className="difference-card">
              <h3>The Right Talent for Every Challenge</h3>
              <p>
                Our rigorous selection process ensures we match your needs with professionals who 
                possess not just technical skills, but the right cultural fit and problem-solving 
                mindset for your organization.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section mission-section">
          <h2>Why Choose eBliz</h2>
          <p>
            In a crowded marketplace of IT providers, we stand out through our unwavering commitment 
            to measurable results. We've helped organizations of all sizes turn technological 
            challenges into competitive advantages—not through hype, but through carefully 
            crafted strategies and flawless execution.
          </p>
          <p>
            Our track record speaks for itself: client relationships measured in years, solutions 
            that deliver lasting value, and a team that genuinely cares about your success. When 
            you partner with eBliz Solutions, you're not just getting a vendor—you're gaining 
            a strategic ally in your digital journey.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;