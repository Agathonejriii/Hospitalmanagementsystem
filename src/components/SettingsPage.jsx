import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/settings.css";

function Settings() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    hospitalName: 'CityCare General Hospital',
    email: 'admin@citycare.com',
    notifications: {
      emailAlerts: true,
      smsAlerts: false,
    },
    theme: 'light',
    workingHours: '08:00 - 18:00',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'emailAlerts' || name === 'smsAlerts') {
      setFormData((prev) => ({
        ...prev,
        notifications: {
          ...prev.notifications,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings saved!');
    console.log('Saved settings:', formData);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      
      <button onClick={() => navigate(-1)} className="btn-back">← Back</button>

      <form onSubmit={handleSubmit} className="settings-form">
        <label>
          Hospital Name:
          <input
            type="text"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Admin Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <fieldset>
          <legend>Notification Preferences</legend>
          <label>
            <input
              type="checkbox"
              name="emailAlerts"
              checked={formData.notifications.emailAlerts}
              onChange={handleChange}
            />
            Email Alerts
          </label>
          <label>
            <input
              type="checkbox"
              name="smsAlerts"
              checked={formData.notifications.smsAlerts}
              onChange={handleChange}
            />
            SMS Alerts
          </label>
        </fieldset>

        <label>
          Theme:
          <select name="theme" value={formData.theme} onChange={handleChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>

        <label>
          Working Hours:
          <input
            type="text"
            name="workingHours"
            value={formData.workingHours}
            onChange={handleChange}
            placeholder="e.g., 08:00 - 18:00"
          />
        </label>

        <button type="submit" className="btn-save">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;
