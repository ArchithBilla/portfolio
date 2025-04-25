import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.email = 'Valid email is required';
    }
    if (formData.phone && !formData.phone.match(/^[0-9]{10,15}$/)) {
      newErrors.phone = 'Enter valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'general'
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you! Reach out for inquiries, partnerships, or just to say hello.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="icon-circle aqua-bg">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email Us</h3>
            <p>info@eblizsolutions.com</p>
          </div>

          <div className="info-card">
            <div className="icon-circle coral-bg">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Call Us</h3>
            <p>+1 (248) 622-6887</p>
          </div>

          <div className="info-card">
            <div className="icon-circle aqua-bg">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Visit Us</h3>
            <p>1608 Old Atlanat Rd, Cumming, GA 30041</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          {isSubmitted ? (
            <div className="success-message coral-bg">
              <i className="fas fa-check-circle"></i>
              <p>Thank you! We've received your message and will contact you shortly.</p>
            </div>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="interest">What can we help you with?</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="careers">Careers</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message*</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-btn coral-bg">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;