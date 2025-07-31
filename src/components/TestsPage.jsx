import React, { useState } from 'react';
import '../assets/css/TestsPage.css';
import { FaVial, FaEye } from 'react-icons/fa';

const sampleTests = [
  { patientName: 'John Doe', testType: 'Blood Test', date: '2025-07-15', result: 'Normal', status: 'Completed', details: 'Blood sugar: Normal, Hemoglobin: Normal' },
  { patientName: 'Jane Smith', testType: 'X-Ray', date: '2025-07-16', result: 'Fracture Detected', status: 'Reviewed', details: 'Fracture on left arm' },
  { patientName: 'Michael Brown', testType: 'MRI', date: '2025-07-17', result: 'Normal', status: 'Pending', details: 'No anomalies detected' },
  { patientName: 'Emily Johnson', testType: 'Blood Test', date: '2025-07-18', result: 'Low Hemoglobin', status: 'Completed', details: 'Hemoglobin at 9.5 g/dL' },
  { patientName: 'David Wilson', testType: 'X-Ray', date: '2025-07-19', result: 'Clear', status: 'Reviewed', details: 'All structures intact' },
  { patientName: 'Laura Garcia', testType: 'MRI', date: '2025-07-20', result: 'Tumor Detected', status: 'Pending', details: 'Small benign tumor in right lobe' },
  { patientName: 'Robert Martinez', testType: 'Blood Test', date: '2025-07-21', result: 'High Sugar', status: 'Completed', details: 'Fasting glucose at 150 mg/dL' },
  { patientName: 'Jessica Lee', testType: 'X-Ray', date: '2025-07-22', result: 'Normal', status: 'Reviewed', details: 'Chest X-ray normal' },
  { patientName: 'Daniel Harris', testType: 'MRI', date: '2025-07-23', result: 'Normal', status: 'Pending', details: 'No issues found' },
  { patientName: 'Sarah Clark', testType: 'Blood Test', date: '2025-07-24', result: 'Normal', status: 'Completed', details: 'CBC within range' },
];

const testTypes = ['All', 'Blood Test', 'X-Ray', 'MRI'];
const statuses = ['Pending', 'Completed', 'Reviewed'];

const TestsPage = () => {
  const [tests, setTests] = useState(sampleTests);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTestType, setFilterTestType] = useState('All');
  const [viewTest, setViewTest] = useState(null);

  const handleChange = (e, index, field) => {
    const updated = [...tests];
    updated[index][field] = e.target.value;
    setTests(updated);
  };

  const filteredTests = tests.filter(test =>
    test.patientName.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterTestType === 'All' || test.testType === filterTestType)
  );

  return (
    <div className="dashboard-content">
      <div className="header-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaVial style={{ color: '#00897b', fontSize: '24px' }} />
          <span style={{ color: 'blue', fontWeight: 'bold', fontSize: '18px' }}>
            TOTAL: {filteredTests.length}
          </span>
        </div>
        <div>
          <span className="current-date">{new Date().toLocaleDateString()}</span>
          <span className="current-time">{new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      <div className="form-container">
        <div className="form-group">
          <label>Search by Patient:</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search patient name"
          />
        </div>

        <div className="form-group">
          <label>Filter by Test Type:</label>
          <select value={filterTestType} onChange={(e) => setFilterTestType(e.target.value)}>
            {testTypes.map((type, i) => (
              <option key={i} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <button
          type="button"
          className="add-appointment-btn"
          onClick={() => alert('Add Test Result functionality here')}
        >
          Add Test Result +
        </button>
      </div>

      <div className="table-container scrollable-table">
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Test Type</th>
              <th>Date</th>
              <th>Result</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {filteredTests.length > 0 ? (
              filteredTests.map((test, index) => (
                <tr key={index}>
                  <td><input type="text" value={test.patientName} onChange={(e) => handleChange(e, index, 'patientName')} /></td>
                  <td>
                    <select value={test.testType} onChange={(e) => handleChange(e, index, 'testType')}>
                      {testTypes.filter(t => t !== 'All').map((type, i) => (
                        <option key={i} value={type}>{type}</option>
                      ))}
                    </select>
                  </td>
                  <td><input type="date" value={test.date} onChange={(e) => handleChange(e, index, 'date')} /></td>
                  <td><input type="text" value={test.result} onChange={(e) => handleChange(e, index, 'result')} /></td>
                  <td>
                    <select value={test.status} onChange={(e) => handleChange(e, index, 'status')}>
                      {statuses.map((status, i) => (
                        <option key={i} value={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button onClick={() => setViewTest(test)} className="view-btn">
                      <FaEye /> View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="6" style={{ textAlign: 'center' }}>No test results found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {viewTest && (
        <div className="modal-overlay" onClick={() => setViewTest(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{viewTest.testType} - {viewTest.patientName}</h3>
            <p><strong>Date:</strong> {viewTest.date}</p>
            <p><strong>Result:</strong> {viewTest.result}</p>
            <p><strong>Details:</strong> {viewTest.details}</p>
            <button className="close-btn" onClick={() => setViewTest(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestsPage;
