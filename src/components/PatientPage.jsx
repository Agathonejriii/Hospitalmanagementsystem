import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import '../assets/css/PatientsPage.css';

function PatientPage() {
  const [formPage, setFormPage] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    address: '',
    contact: '',
    nationalId: '',
    nextOfKin: '',
    nextOfKinContact: '',
    bloodGroup: '',
    assignedDoctor: '',
    allergies: '',
    currentCondition: '',
    currentMedications: '',
    status: '',
    insuranceProvider: '',
    policyNumber: '',
    emergencyContact: '',
    relationship: '',
    documents: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/patients', { state: { newPatient: formData } });
  };

  const clearForm = () => {
    setFormData({
      name: '',
      gender: '',
      dob: '',
      address: '',
      contact: '',
      nationalId: '',
      nextOfKin: '',
      nextOfKinContact: '',
      bloodGroup: '',
      assignedDoctor: '',
      allergies: '',
      currentCondition: '',
      currentMedications: '',
      status: '',
      insuranceProvider: '',
      policyNumber: '',
      emergencyContact: '',
      relationship: '',
      documents: null,
    });
  };

  return (
    <DashboardLayout activeMenu="manage-users">
      <section className="manage-users-main">
        <h2 className="page-title">Add New Patient Form</h2>
        <div className="card">
          {formPage === 1 && (
            <>
              <h3 className="form-card-title">PERSONAL DATA</h3>
              <form>
                <div className="form-grid">
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                  <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                  <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                  <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
                  <input type="text" name="nationalId" placeholder="National ID" value={formData.nationalId} onChange={handleChange} required />
                  <input type="text" name="nextOfKin" placeholder="Next of Kin" value={formData.nextOfKin} onChange={handleChange} required />
                  <input type="text" name="nextOfKinContact" placeholder="Next of Kin Contact" value={formData.nextOfKinContact} onChange={handleChange} required />
                </div>
                <div className="form-actions">
                  <span className="clear-form" onClick={clearForm}>Clear Form</span>
                  <button type="button" onClick={() => setFormPage(2)}>Next ➡️</button>
                </div>
              </form>
            </>
          )}

          {formPage === 2 && (
            <>
              <h3 className="form-card-title">MEDICAL DETAILS</h3>
              <form>
                <div className="form-grid">
                  <input type="text" name="bloodGroup" placeholder="Blood Group" value={formData.bloodGroup} onChange={handleChange} required />
                  <input type="text" name="assignedDoctor" placeholder="Assigned Doctor(s)" value={formData.assignedDoctor} onChange={handleChange} required />
                  <input type="text" name="allergies" placeholder="Allergies" value={formData.allergies} onChange={handleChange} required />
                  <input type="text" name="currentCondition" placeholder="Current Condition" value={formData.currentCondition} onChange={handleChange} required />
                  <input type="text" name="currentMedications" placeholder="Current Medications" value={formData.currentMedications} onChange={handleChange} required />
                  <select name="status" value={formData.status} onChange={handleChange} required>
                    <option value="">Select Status</option>
                    <option value="Admitted">Admitted</option>
                    <option value="Discharged">Discharged</option>
                  </select>
                </div>
                <div className="form-actions">
                  <button type="button" onClick={() => setFormPage(1)}>⬅️ Back</button>
                  <button type="button" onClick={() => setFormPage(3)}>Next ➡️</button>
                </div>
              </form>
            </>
          )}

          {formPage === 3 && (
            <>
              <h3 className="form-card-title">INSURANCE INFORMATION</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <input type="text" name="insuranceProvider" placeholder="Insurance Provider Name" value={formData.insuranceProvider} onChange={handleChange} required />
                  <input type="text" name="policyNumber" placeholder="Policy Number" value={formData.policyNumber} onChange={handleChange} required />
                  <input type="text" name="emergencyContact" placeholder="Emergency Contact" value={formData.emergencyContact} onChange={handleChange} required />
                  <input type="text" name="relationship" placeholder="Relationship" value={formData.relationship} onChange={handleChange} required />
                  <input type="file" name="documents" onChange={handleChange} required />
                </div>
                <div className="form-actions">
                  <button type="button" onClick={() => setFormPage(2)}>⬅️ Back</button>
                  <span className="clear-form" onClick={clearForm}>Clear Form</span>
                  <button type="submit">Save Patient</button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default PatientPage;
