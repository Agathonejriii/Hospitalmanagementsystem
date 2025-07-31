import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/13.jpg';
import '../assets/css/adminDashboard.css';

function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="admin-dashboard">
      <header className="top-bar">
        <div className="top-bar-left">
          <img src={logo} alt="CityCare General Hospital" className="logo" />
          <button className="notifications-button" title="Notifications">
            {/* SVG Icon */}
          </button>
        </div>

        <div className="top-bar-right">
          <span className="admin-text">Admin</span>
          <img className="profile-pic" src="https://i.pravatar.cc/40" alt="Profile" />
          <button className="logout-button" onClick={handleLogout} title="Logout">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="logout-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
  </svg>
</button>
        </div>
      </header>

      <div className="dashboard-body">
        <aside className="sidebar">
          <ul className="menu-top">
            <li>
              <NavLink to="/admin-dashboard" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/manage-users" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
                Manage Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/reports" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
                Reports
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
                Settings
              </NavLink>
            </li>
          </ul>

          <ul className="menu-bottom">
            <li>
              <NavLink to="/support" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
                Support
              </NavLink>
            </li>
          </ul>
        </aside>

        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
