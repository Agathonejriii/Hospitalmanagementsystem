import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/LoginPage.css";
import logoImg from '../assets/13.jpg';
import loginImg from '../assets/login.jpg';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('');
  const overlayRef = useRef();

  const servicesList = [
    'Outpatient Consultation',
    'Inpatient Admission',
    'Emergency Services',
    'Surgical Procedures',
    'Maternity Care',
    'Pediatric Services',
    'Laboratory Testing',
    'Radiology & Imaging',
    'Pharmacy Services',
    'Physiotherapy',
    'Dental Care',
    'Specialist Clinics',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = {
      admin: { password: 'admin123', role: 'admin' },
      doctor: { password: 'doctor123', role: 'doctor' },
      receptionist: { password: 'reception123', role: 'receptionist' },
    };
    const user = users[username];
    if (user && user.password === password) {
  if (user.role === 'admin') {
    navigate('/admin-dashboard');
  } else if (user.role === 'doctor') {
    navigate('/doctor/dashboard');
  } else if (user.role === 'receptionist') {
    navigate('/receptionist/dashboard');
  }
} else {
  alert('Invalid credentials');
}
  };

  const handleTabClick = (tab) => {
    setActiveTab((prev) => (prev === tab ? '' : tab));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setActiveTab('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <div className="logo-title">
            <img src={logoImg} alt="Logo" className="logo-img" />
            <h2>City Care General Hospital</h2>
          </div>
          <p>Your health, our priority ......</p>
          <h3>User Login</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
          </form>
          <p className="signup">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </div>

        {/* Right Panel */}
        <div className="login-illustration">
          <img
            src={loginImg}
            alt="Login Illustration"
            className="hospital-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="text-overlay" ref={overlayRef}>
            <div className="nav-links">
              <span onClick={() => handleTabClick('services')}>
                {activeTab === 'services' ? '▼' : '▶'} Services
              </span>{' '}
              |{' '}
              <span onClick={() => handleTabClick('about')}>
                {activeTab === 'about' ? '▼' : '▶'} About Us
              </span>{' '}
              |{' '}
              <span onClick={() => handleTabClick('contact')}>
                {activeTab === 'contact' ? '▼' : '▶'} Contact Us
              </span>
            </div>

            {activeTab === 'services' && (
              <div className="tab-content animated">
                <ul>
                  {servicesList.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="tab-content animated">
                <p>
                  City Care General Hospital offers advanced healthcare with professional staff and
                  modern facilities.
                </p>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="tab-content animated">
                <p>Phone: +256 123 456789</p>
                <p>Email: info@citycarehospital.com</p>
                <p>Location: Kampala Road, Uganda</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
