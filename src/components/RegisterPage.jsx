import React, { useState } from 'react';
import '../assets/css/receptionistDashboard.css';

const RegisterPage = () => {
  const [role, setRole] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="dashboard-main">
      <div className="welcome-message">New Registration Form</div>

      <div className="form-group role-select">
        <label>Select Role:</label>
        <select value={role} onChange={handleRoleChange}>
          <option value="">--Select--</option>
          <option value="patient">Patient</option>
          <option value="employee">Employee</option>
        </select>
      </div>

      {role && (
        <form className="registration-form">
          {/* Common Fields */}
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <select required>
              <option value="">--Select--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>National ID / Passport:</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Contact Number:</label>
            <input type="tel" required />
          </div>

          <div className="form-group">
            <label>Email Address:</label>
            <input type="email" />
          </div>

          <div className="form-group">
            <label>Residential Address:</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Emergency Contact (Name & Phone):</label>
            <input type="text" required />
          </div>

          {/* Role-specific Fields */}
          {role === 'patient' && (
            <>
              <div className="form-group">
                <label>Insurance Provider:</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Policy/Insurance Number:</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Blood Group:</label>
                <select>
                  <option value="">--Select--</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>

              <div className="form-group">
                <label>Known Allergies / Conditions:</label>
                <textarea></textarea>
              </div>

              <div className="form-group">
                <label>Assigned Doctor (if any):</label>
                <input type="text" />
              </div>
            </>
          )}

          {role === 'employee' && (
            <>
              <div className="form-group">
                <label>Employee ID:</label>
                <input type="text" required />
              </div>

              <div className="form-group">
                <label>Job Title / Role:</label>
                <select required>
                  <option value="">--Select--</option>
                  <option value="doctor">Doctor</option>
                  <option value="nurse">Nurse</option>
                  <option value="receptionist">Receptionist</option>
                  <option value="lab_technician">Lab Technician</option>
                  <option value="pharmacist">Pharmacist</option>
                  <option value="support_staff">Support Staff</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="form-group">
                <label>Department:</label>
                <input type="text" required />
              </div>

              <div className="form-group">
                <label>Date of Hire:</label>
                <input type="date" required />
              </div>

              <div className="form-group">
                <label>Work Shift:</label>
                <select required>
                  <option value="">--Select--</option>
                  <option value="morning">Morning</option>
                  <option value="evening">Evening</option>
                  <option value="night">Night</option>
                  <option value="rotation">Rotation</option>
                </select>
              </div>

              <div className="form-group">
                <label>Professional License Number (if applicable):</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Years of Experience:</label>
                <input type="number" min="0" />
              </div>
            </>
          )}

          <div className="form-footer">
            <span className="clear-link" onClick={(e) => e.target.closest('form').reset()}>Clear Form</span>
            <button type="submit" className="register-btn">Register</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegisterPage;
