import React from 'react';
import { Bell, LogOut, User } from 'lucide-react';
import '../assets/css/doctorDashboard.css';
import logo from '../assets/13.jpg';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';


function DoctorLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can clear any auth tokens here if needed
    navigate('/login');
  };

  return (
    <div className="doctor-dashboard">
      <header className="top-bar">
        <div className="top-bar-left">
          <img src={logo} alt="Logo" className="logo" />
          <Bell className="icon" />
        </div>

        <div className="top-bar-right">
          <span className="doctor-name">Dr. Jane Doe</span>
          <img
            className="profile-pic"
            src="https://i.pravatar.cc/40?img=3"  // Random profile picture from Pravatar
            alt="Profile"
            title="Doctor Profile"
          />
          <LogOut className="icon logout-icon" onClick={handleLogout} />
        </div>
      </header>

      <div className="dashboard-body">
        <aside className="sidebar">
          <ul className="menu-top">
            <li><NavLink to="/doctor/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/doctor/patients">Patients</NavLink></li>
            <li><NavLink to="/doctor/appointments">Appointments</NavLink></li>
            <li><NavLink to="/doctor/tests">Test Results</NavLink></li>
          </ul>
          <ul className="menu-bottom">
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

export default DoctorLayout;
