import React, { useState } from 'react';
import '../assets/css/PatientsPage.css'; // Your CSS import

const sections = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics'];
const conditions = ['Flu', 'Cold', 'Fever', 'Covid-19', 'Asthma'];
const statuses = ['Admitted', 'Discharged'];

const samplePatients = [
  { name: 'John Doe', gender: 'Male', address: '123 Main St', section: 'Cardiology', condition: 'Flu', status: 'Admitted' },
  { name: 'Jane Smith', gender: 'Female', address: '456 Oak Ave', section: 'Neurology', condition: 'Cold', status: 'Discharged' },
  { name: 'Michael Brown', gender: 'Male', address: '789 Pine Rd', section: 'Orthopedics', condition: 'Fever', status: 'Admitted' },
  { name: 'Emily Johnson', gender: 'Female', address: '321 Elm St', section: 'Pediatrics', condition: 'Asthma', status: 'Admitted' },
  { name: 'David Wilson', gender: 'Male', address: '654 Maple Dr', section: 'Cardiology', condition: 'Covid-19', status: 'Discharged' },
  { name: 'Laura Garcia', gender: 'Female', address: '987 Birch Ln', section: 'Neurology', condition: 'Flu', status: 'Admitted' },
  { name: 'Robert Martinez', gender: 'Male', address: '246 Cedar St', section: 'Orthopedics', condition: 'Cold', status: 'Discharged' },
  { name: 'Jessica Lee', gender: 'Female', address: '135 Spruce Ct', section: 'Pediatrics', condition: 'Fever', status: 'Admitted' },
  { name: 'Daniel Harris', gender: 'Male', address: '864 Walnut Ave', section: 'Cardiology', condition: 'Asthma', status: 'Discharged' },
  { name: 'Sarah Clark', gender: 'Female', address: '753 Chestnut Blvd', section: 'Neurology', condition: 'Covid-19', status: 'Admitted' },
  { name: 'Matthew Lewis', gender: 'Male', address: '159 Poplar St', section: 'Orthopedics', condition: 'Flu', status: 'Admitted' },
  { name: 'Amanda Young', gender: 'Female', address: '357 Fir Dr', section: 'Pediatrics', condition: 'Cold', status: 'Discharged' },
  { name: 'Joshua King', gender: 'Male', address: '951 Ash Ln', section: 'Cardiology', condition: 'Fever', status: 'Admitted' },
  { name: 'Megan Scott', gender: 'Female', address: '258 Redwood Rd', section: 'Neurology', condition: 'Asthma', status: 'Discharged' },
  { name: 'Andrew Green', gender: 'Male', address: '753 Willow St', section: 'Orthopedics', condition: 'Covid-19', status: 'Admitted' },
  { name: 'Rachel Adams', gender: 'Female', address: '159 Cypress Ct', section: 'Pediatrics', condition: 'Flu', status: 'Admitted' },
  { name: 'Brian Baker', gender: 'Male', address: '456 Magnolia Ave', section: 'Cardiology', condition: 'Cold', status: 'Discharged' },
  { name: 'Olivia Nelson', gender: 'Female', address: '789 Dogwood Ln', section: 'Neurology', condition: 'Fever', status: 'Admitted' },
  { name: 'Kevin Carter', gender: 'Male', address: '123 Hickory Blvd', section: 'Orthopedics', condition: 'Asthma', status: 'Discharged' },
  { name: 'Samantha Mitchell', gender: 'Female', address: '654 Sycamore St', section: 'Pediatrics', condition: 'Covid-19', status: 'Admitted' },
  { name: 'Ethan Moore', gender: 'Male', address: '852 Pineapple Rd', section: 'Cardiology', condition: 'Fever', status: 'Admitted' },
  { name: 'Isabella Parker', gender: 'Female', address: '369 Palm St', section: 'Neurology', condition: 'Flu', status: 'Discharged' },
  { name: 'Jack Wilson', gender: 'Male', address: '147 Oakwood Ln', section: 'Orthopedics', condition: 'Cold', status: 'Admitted' },
  { name: 'Grace Lee', gender: 'Female', address: '258 Maple Dr', section: 'Pediatrics', condition: 'Asthma', status: 'Admitted' },
  { name: 'Lucas Walker', gender: 'Male', address: '963 Spruce Ct', section: 'Cardiology', condition: 'Covid-19', status: 'Discharged' },
  { name: 'Chloe Evans', gender: 'Female', address: '741 Elm St', section: 'Neurology', condition: 'Fever', status: 'Admitted' },
  { name: 'Henry Thompson', gender: 'Male', address: '369 Chestnut Blvd', section: 'Orthopedics', condition: 'Flu', status: 'Admitted' },
  { name: 'Mia Rivera', gender: 'Female', address: '159 Pine Rd', section: 'Pediatrics', condition: 'Cold', status: 'Discharged' },
  { name: 'Oliver Martin', gender: 'Male', address: '753 Birch Ln', section: 'Cardiology', condition: 'Asthma', status: 'Admitted' },
  { name: 'Ella Davis', gender: 'Female', address: '852 Cedar St', section: 'Neurology', condition: 'Covid-19', status: 'Admitted' },
  { name: 'Noah Brown', gender: 'Male', address: '456 Spruce Ct', section: 'Orthopedics', condition: 'Fever', status: 'Discharged' },
  { name: 'Lily Garcia', gender: 'Female', address: '987 Walnut Ave', section: 'Pediatrics', condition: 'Flu', status: 'Admitted' },
  { name: 'James Hernandez', gender: 'Male', address: '246 Aspen Rd', section: 'Cardiology', condition: 'Cold', status: 'Discharged' },
  { name: 'Zoe Young', gender: 'Female', address: '135 Willow St', section: 'Neurology', condition: 'Fever', status: 'Admitted' },
  { name: 'Alexander Scott', gender: 'Male', address: '753 Magnolia Ave', section: 'Orthopedics', condition: 'Asthma', status: 'Admitted' },
  { name: 'Sofia King', gender: 'Female', address: '159 Redwood Rd', section: 'Pediatrics', condition: 'Covid-19', status: 'Discharged' },
  { name: 'Benjamin Lewis', gender: 'Male', address: '951 Cypress Ct', section: 'Cardiology', condition: 'Fever', status: 'Admitted' },
  { name: 'Madison Allen', gender: 'Female', address: '258 Fir Dr', section: 'Neurology', condition: 'Cold', status: 'Admitted' },
  { name: 'Logan Nelson', gender: 'Male', address: '654 Ash Ln', section: 'Orthopedics', condition: 'Flu', status: 'Discharged' },
  { name: 'Avery Carter', gender: 'Female', address: '123 Dogwood Ln', section: 'Pediatrics', condition: 'Asthma', status: 'Admitted' },
];

const PatientsPage = () => {
  const [patients, setPatients] = useState(samplePatients);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('name');
  const [doctorNote, setDoctorNote] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleChange = (e, index, field) => {
    const updatedPatients = [...patients];
    updatedPatients[index][field] = e.target.value;
    setPatients(updatedPatients);
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.gender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedPatients = [...filteredPatients].sort((a, b) => {
    if (sortOrder === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === 'gender') {
      return a.gender.localeCompare(b.gender);
    } else if (sortOrder === 'condition') {
      return a.condition.localeCompare(b.condition);
    } else if (sortOrder === 'status') {
      return a.status.localeCompare(b.status);
    }
    return 0;
  });

  return (
    <div className="dashboard-content">
      {/* Status Summary */}
      <div className="status-summary-card">
        <div className="summary-item">
          <span className="summary-title">Status Summary:</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Discharged:</span>
          <span className="summary-value">{patients.filter(p => p.status === 'Discharged').length}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Admitted:</span>
          <span className="summary-value">{patients.filter(p => p.status === 'Admitted').length}</span>
        </div>
        <div className="summary-item">
          <span className="summary-date">{new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Search and Sorting */}
      <div className="form-container">
        <div className="form-group" style={{ marginRight: '20px' }}>
          <label>Search:</label>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by name, gender, or address"
          />
        </div>

        <div className="form-group" style={{ marginRight: 'auto' }}>
          <label>Sort By:</label>
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="gender">Gender</option>
            <option value="condition">Condition</option>
            <option value="status">Status</option>
          </select>
        </div>

        <button
          type="button"
          onClick={() => alert('Add Patient functionality here')}
          className="add-patient-btn"
        >
          Add Patient +
        </button>
      </div>

      {/* Patients Table */}
      <div className="table-container">
        <div className="table-wrapper table-scroll">
          <table className="patients-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Section</th>
                <th>Condition</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedPatients.map((patient, index) => (
                <tr key={index}>
                  <td><input type="text" value={patient.name} onChange={(e) => handleChange(e, index, 'name')} /></td>
                  <td>
                    <select value={patient.gender} onChange={(e) => handleChange(e, index, 'gender')}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </td>
                  <td><input type="text" value={patient.address} onChange={(e) => handleChange(e, index, 'address')} /></td>
                  <td>
                    <select value={patient.section} onChange={(e) => handleChange(e, index, 'section')}>
                      {sections.map((section, i) => (
                        <option key={i} value={section}>{section}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <select value={patient.condition} onChange={(e) => handleChange(e, index, 'condition')}>
                      {conditions.map((condition, i) => (
                        <option key={i} value={condition}>{condition}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <select value={patient.status} onChange={(e) => handleChange(e, index, 'status')}>
                      {statuses.map((status, i) => (
                        <option key={i} value={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Doctor's Notes */}
      <div className="doctor-note-card">
        <label htmlFor="doctorNote">Doctor's Notes / Reminders:</label>
        <textarea
          id="doctorNote"
          value={doctorNote}
          onChange={(e) => setDoctorNote(e.target.value)}
          placeholder="Write your notes or reminders here..."
        />
      </div>
    </div>
  );
};

export default PatientsPage;