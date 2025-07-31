import React, { useState } from 'react';
import '../assets/css/SupportPage.css';
import { useNavigate } from 'react-router-dom';

function SupportPage() {
  const [isFAQOpen, setFAQOpen] = useState(false);
  const [contactFormVisible, setContactFormVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Toggle FAQ answer visibility
  const toggleFAQ = () => {
    setFAQOpen(!isFAQOpen);
  };

  // Toggle Contact Form visibility
  const toggleContactForm = () => {
    setContactFormVisible(!contactFormVisible);
  };

  const navigate = useNavigate();


  // Handle contact form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setToastMessage('Your support request has been sent. We will get back to you soon.');
    setContactFormVisible(false); // Close form after submission
  };

  return (
    <div className="support-container">
      {toastMessage && <div className="toast">{toastMessage}</div>}
      <button className="back-button" onClick={() => navigate(-1)}>
  ← Back
</button>

      <h1 className="support-header">Support & Help Center</h1>
      
      {/* Contact Information */}
      <div className="contact-info">
        <p><span role="img" aria-label="phone">📞</span> <strong>Contact:</strong> +256-123-456789</p>
        <p><span role="img" aria-label="email">📧</span> <strong>Email:</strong> support@citycarehospital.com</p>
      </div>

      {/* Helpful Links */}
      <div className="help-links">
        <h3>Helpful Links:</h3>
        <ul>
          <li><span role="img" aria-label="guide">📝</span> <a href="/user-guides" className="help-link">User Guides & Policies</a></li>
          <li><span role="img" aria-label="emergency">🩺</span> <a href="/emergency-contacts" className="help-link">Medical Emergency Contacts</a></li>
          <li><span role="img" aria-label="it-support">💻</span> <a href="/it-support" className="help-link">IT Helpdesk Support</a></li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h3 onClick={toggleFAQ} className="faq-title">🔍 Frequently Asked Questions</h3>
        {isFAQOpen && (
          <div className="faq-answer">
            <p><strong>Q: How do I reset my password?</strong></p>
            <p>A: You can reset your password by going to the login page and clicking on "Forgot Password".</p>
            <p><strong>Q: How do I contact the IT support team?</strong></p>
            <p>A: You can contact our IT support team via the "IT Helpdesk Support" link or by calling our support number.</p>
          </div>
        )}
      </div>

      {/* Quick Actions (Contact Support and Download User Guide) */}
      <div className="quick-action-buttons">
        <button className="contact-btn" onClick={toggleContactForm}>Contact Support</button>
        <button className="download-btn" onClick={() => alert('Downloading user guide...')}>Download User Guide</button>
      </div>

      {/* Contact Support Form */}
      {contactFormVisible && (
        <div className="contact-form">
          <h4>Contact Support</h4>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Name:</label>
              <input type="text" required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div>
              <label>Message:</label>
              <textarea required></textarea>
            </div>
            <button type="submit">Send Request</button>
          </form>
        </div>
      )}

      {/* Live Chat Button */}
      <div className="live-chat-btn">
        <button onClick={() => alert('Live Chat is now open!')} className="live-chat">🗨️ Live Chat</button>
      </div>

      {/* Hospital Location Map */}
      <div className="map-section">
        <h3>🏥 Hospital Location</h3>
        <iframe
          title="Hospital Location"
          src="https://www.google.com/maps/embed?pb=...your_google_maps_link..."
          width="100%"
          height="300"
          style={{ border: '0', borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default SupportPage;
