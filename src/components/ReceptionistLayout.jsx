import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/13.jpg';
import '../assets/css/receptionistDashboard.css';

function ReceptionistLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="receptionist-dashboard">
      <header className="top-bar">
        <div className="top-bar-left">
          <img src={logo} alt="Hospital Logo" className="logo" />
          <button className="notifications-button" title="Notifications" aria-label="Notifications">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="notifications-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
        </div>

        <div className="top-bar-right">
          <span className="role-text">Receptionist</span>
          <img
            src="https://i.pravatar.cc/40?img=12"  // Dummy profile pic URL
            alt="Receptionist Profile"
            className="profile-pic"
          />
          <button onClick={handleLogout} className="logout-button" title="Logout" aria-label="Logout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="logout-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="dashboard-body">
        <aside className="sidebar">
          <ul className="nav-links">
            <li><Link to="/receptionist/dashboard" className="nav-button">Dashboard</Link></li>
            <li><Link to="/receptionist/appointments" className="nav-button">Appointments</Link></li>
            <li><Link to="/receptionist/checkins" className="nav-button">Check-In/Outs</Link></li>
            <li><Link to="/receptionist/staff-logs" className="nav-button">Staff Logs</Link></li>
          </ul>

          <ul className="support-link">
            <li><Link to="/support" className="nav-button">Support</Link></li>

          </ul>
        </aside>
        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ReceptionistLayout;
