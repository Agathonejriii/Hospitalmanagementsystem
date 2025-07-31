import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';

function EmployeePage() {
  const roles = ['Nurse', 'Pharmacist', 'Receptionist', 'Technician', 'Cleaner', 'Security', 'Administrator', 'Lab Technician', 'Accountant'];
  const departments = ['Administration', 'Finance', 'Nursing', 'Pharmacy', 'Security', 'Laboratory', 'Maintenance'];
  const statuses = ['Active', 'On Leave', 'Inactive'];

  const yearsOfExperience = Array.from({ length: 41 }, (_, i) => i);

  const [formData, setFormData] = useState({
    name: '',
    nationalId: '',
    address: '',
    contact: '',
    gender: '',
    role: '',
    department: '',
    status: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Employee Data:', formData);
    alert('Employee added successfully!');
  };

  const clearForm = () => {
    setFormData({
      name: '',
      nationalId: '',
      address: '',
      contact: '',
      gender: '',
      role: '',
      department: '',
      status: '',
      experience: '',
    });
  };

  return (
    <DashboardLayout activeMenu="manage-users">
      <section className="manage-users-main">
        <h2 className="page-title">Add New Employee Form</h2>
        <div className="card">
          <h3 className="form-card-title">....................... EMPLOYEE DATA .......................</h3>

          <form onSubmit={handleSubmit} className="doctor-form">
            <div className="form-grid">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              <input type="text" name="nationalId" placeholder="National ID Number" value={formData.nationalId} onChange={handleChange} required />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
              <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />

              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <select name="role" value={formData.role} onChange={handleChange} required>
                <option value="">Select Role</option>
                {roles.map(role => <option key={role} value={role}>{role}</option>)}
              </select>

              <select name="department" value={formData.department} onChange={handleChange} required>
                <option value="">Select Department</option>
                {departments.map(dep => <option key={dep} value={dep}>{dep}</option>)}
              </select>

              <select name="status" value={formData.status} onChange={handleChange} required>
                <option value="">Select Status</option>
                {statuses.map(stat => <option key={stat} value={stat}>{stat}</option>)}
              </select>

              <select name="experience" value={formData.experience} onChange={handleChange} required>
                <option value="">Years of Experience</option>
                {yearsOfExperience.map(year => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>

            <div className="form-actions">
              <span className="clear-form" onClick={clearForm}>Clear Form</span>
              <button type="submit" className="add-button">Add Employee</button>
            </div>
          </form>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default EmployeePage;
