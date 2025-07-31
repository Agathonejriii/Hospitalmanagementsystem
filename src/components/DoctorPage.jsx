import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';


function DoctorPage() {
  const departments = ['Cardiology', 'Neurology', 'Pediatrics', 'Surgery', 'Radiology', 'Pharmacy', 'Dermatology', 'Oncology'];
  const specializations = ['General', 'Pediatrician', 'Surgeon', 'Radiologist', 'Cardiologist', 'Dermatologist'];
  const statuses = ['Active', 'On Leave', 'Inactive'];
  const wards = ['Ward A', 'Ward B', 'Ward C', 'ICU', 'Emergency'];
  const yearsOfExperience = Array.from({ length: 41 }, (_, i) => i); // 0 - 40

  const [formData, setFormData] = useState({
    name: '',
    nationalId: '',
    address: '',
    contact: '',
    gender: '',
    licenseNumber: '',
    department: '',
    specialization: '',
    status: '',
    experience: '',
    ward: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Doctor Data:', formData);
    alert('Doctor added successfully!');
  };

  const handleClearForm = () => {
    setFormData({
      name: '',
      nationalId: '',
      address: '',
      contact: '',
      gender: '',
      licenseNumber: '',
      department: '',
      specialization: '',
      status: '',
      experience: '',
      ward: '',
    });
  };

  return (
    <DashboardLayout activeMenu="manage-users">
      <section className="manage-users-main">
        <h2 className="page-title">Add New Doctor Form</h2>
        <div className="card">
          <h3 className="form-card-title">....................... DOCTOR'S DATA .......................</h3>

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

              <input type="text" name="licenseNumber" placeholder="License Number" value={formData.licenseNumber} onChange={handleChange} required />

              <select name="department" value={formData.department} onChange={handleChange} required>
                <option value="">Select Department</option>
                {departments.map(dep => <option key={dep} value={dep}>{dep}</option>)}
              </select>

              <select name="specialization" value={formData.specialization} onChange={handleChange} required>
                <option value="">Select Specialization</option>
                {specializations.map(spec => <option key={spec} value={spec}>{spec}</option>)}
              </select>

              <select name="status" value={formData.status} onChange={handleChange} required>
                <option value="">Select Status</option>
                {statuses.map(stat => <option key={stat} value={stat}>{stat}</option>)}
              </select>

              <select name="experience" value={formData.experience} onChange={handleChange} required>
                <option value="">Years of Experience</option>
                {yearsOfExperience.map(year => <option key={year} value={year}>{year}</option>)}
              </select>

              <select name="ward" value={formData.ward} onChange={handleChange} required>
                <option value="">Assigned Ward</option>
                {wards.map(ward => <option key={ward} value={ward}>{ward}</option>)}
              </select>
            </div>

           <div className="form-actions">
              <button type="button" className="clear-form" onClick={handleClearForm}>
             Clear Form
             </button>
              <button type="submit" className="add-button">
                Add Doctor
             </button>
            </div>


          </form>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default DoctorPage;
