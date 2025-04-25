import { useState } from 'react';
import './careers.css';

function Careers() {
  const [activeJob, setActiveJob] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    coverLetter: ''
  });

  const jobs = [
    {
      id: 1,
      title: "Software Engineer (Full Stack)",
      type: "Full-time",
      location: "Cumming,GA",
      description: "Build end-to-end solutions that power our clients' digital transformation.",
      responsibilities: [
        "Develop and maintain full-stack web applications",
        "Design RESTful APIs and integrate with frontend systems",
        "Implement responsive UIs with modern frameworks (React, Angular, or Vue)",
        "Optimize applications for maximum speed and scalability",
        "Collaborate with cross-functional teams to define, design, and ship new features"
      ],
      requirements: [
        "3+ years experience with JavaScript/TypeScript",
        "Proficiency with Node.js and at least one frontend framework",
        "Experience with databases (SQL and NoSQL)",
        "Knowledge of cloud platforms (AWS/Azure/GCP)",
        "Bachelor's in Computer Science or related field"
      ]
    },
    {
      id: 2,
      title: "Software Engineer (DevOps)",
      type: "Full-time",
      location: "Cumming,GA",
      description: "Architect and maintain our cloud infrastructure and CI/CD pipelines.",
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage cloud infrastructure (AWS preferred)",
        "Automate deployment, monitoring, and scaling processes",
        "Implement security best practices across environments",
        "Troubleshoot production issues and optimize performance"
      ],
      requirements: [
        "2+ years in DevOps or SRE roles",
        "Expertise with Docker, Kubernetes, and Terraform",
        "Strong scripting skills (Bash, Python)",
        "Experience with monitoring tools (Prometheus, Grafana)",
        "Knowledge of networking and security protocols"
      ]
    },
    {
      id: 3,
      title: "Software Engineer (Data)",
      type: "Full-time",
      location: "Cumming,GA",
      description: "Transform raw data into actionable insights that drive business decisions.",
      responsibilities: [
        "Design and implement data pipelines",
        "Develop ETL processes and data warehouses",
        "Create dashboards and reports for stakeholders",
        "Implement machine learning models for predictive analytics",
        "Ensure data quality and governance standards"
      ],
      requirements: [
        "Experience with SQL and NoSQL databases",
        "Proficiency in Python (Pandas, NumPy, PySpark)",
        "Knowledge of data visualization tools (Tableau, Power BI)",
        "Familiarity with big data technologies (Hadoop, Spark)",
        "Understanding of machine learning concepts"
      ]
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      resume: null,
      coverLetter: ''
    });
    setTimeout(() => {
      setIsSubmitted(false);
      setActiveJob(null);
    }, 3000);
  };

  return (
    <div className="careers-page">
      <div className="careers-hero">
        <h1>Join Our Team</h1>
        <p>Help shape the future of technology while growing your career at eBliz Solutions</p>
      </div>

      <div className="careers-container">
        <div className="job-listings">
          <h2>Current Openings</h2>
          <div className="jobs-grid">
            {jobs.map(job => (
              <div 
                key={job.id} 
                className={`job-card ${activeJob === job.id ? 'active' : ''}`}
                onClick={() => setActiveJob(job.id)}
              >
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span><i className="fas fa-briefcase"></i> {job.type}</span>
                  <span><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                </div>
                <p>{job.description}</p>
                <button 
                  className="view-details-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveJob(job.id);
                  }}
                >
                  {activeJob === job.id ? 'Hide Details' : 'View Details'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {activeJob && (
          <div className="job-details">
            <div className="details-container">
              <button 
                className="close-btn"
                onClick={() => setActiveJob(null)}
              >
                <i className="fas fa-times"></i>
              </button>

              <h2>{jobs.find(j => j.id === activeJob).title}</h2>
              <div className="job-meta">
                <span><i className="fas fa-briefcase"></i> {jobs.find(j => j.id === activeJob).type}</span>
                <span><i className="fas fa-map-marker-alt"></i> {jobs.find(j => j.id === activeJob).location}</span>
              </div>

              <div className="details-section">
                <h3>Responsibilities</h3>
                <ul>
                  {jobs.find(j => j.id === activeJob).responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="details-section">
                <h3>Requirements</h3>
                <ul>
                  {jobs.find(j => j.id === activeJob).requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="application-form">
                <h3>Apply for this Position</h3>
                {isSubmitted ? (
                  <div className="success-message">
                    <i className="fas fa-check-circle"></i>
                    <p>Application submitted! We'll review your materials and be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Full Name*</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Email*</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Position*</label>
                      <input 
                        type="text" 
                        name="position" 
                        value={jobs.find(j => j.id === activeJob).title}
                        onChange={handleChange}
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label>Resume/CV* (PDF only)</label>
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Cover Letter</label>
                      <textarea 
                        name="coverLetter" 
                        value={formData.coverLetter}
                        onChange={handleChange}
                        rows="4"
                      ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="culture-section">
        <h2>Why Join eBliz Solutions?</h2>
        <div className="culture-grid">
          <div className="culture-card">
            <div className="culture-icon aqua-bg">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Growth Opportunities</h3>
            <p>Continuous learning with training budgets and mentorship programs</p>
          </div>
          <div className="culture-card">
            <div className="culture-icon coral-bg">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Great Benefits</h3>
            <p>Health insurance, flexible PTO, and competitive compensation</p>
          </div>
          <div className="culture-card">
            <div className="culture-icon aqua-bg">
              <i className="fas fa-users"></i>
            </div>
            <h3>Collaborative Culture</h3>
            <p>Work with talented teams on meaningful projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;