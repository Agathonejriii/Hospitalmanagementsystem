import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import '../assets/css/Reports.css';

const allReports = [
  { id: 1, title: "Admissions Summary", department: "General", date: "2025-07-10", type: "Patient", valid: true },
  { id: 2, title: "Discharges Summary", department: "General", date: "2025-07-09", type: "Patient", valid: true },
  { id: 3, title: "Staff Report", department: "HR", date: "2025-07-08", type: "Employee", valid: false },
  { id: 4, title: "Radiology Report", department: "Radiology", date: "2025-07-07", type: "Department", valid: true },
  { id: 5, title: "Lab Report", department: "Lab", date: "2025-07-06", type: "Department", valid: false },
];

const sortOptions = [
  { value: 'all', label: 'All Reports' },
  { value: 'patient', label: 'Patient Reports' },
  { value: 'employee', label: 'Employee Reports' },
  { value: 'department', label: 'Department Reports' },
];

function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('all');
  const [selectedReport, setSelectedReport] = useState(null);

  const filteredReports = allReports.filter(report => {
    const matchesType = sortType === 'all' || report.type.toLowerCase() === sortType;
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.date.includes(searchTerm);
    return matchesType && matchesSearch;
  });

  const invalidReports = filteredReports.filter(report => !report.valid);

  const sampleReportContent = (report) => {
    switch (report.type.toLowerCase()) {
      case 'patient':
        return (
          <>
            <h3>{report.title}</h3>
            <p><strong>Department:</strong> {report.department}</p>
            <p><strong>Date:</strong> {report.date}</p>
            <p><strong>Summary:</strong></p>
            <ul>
              <li>Total Admissions: 120</li>
              <li>Common Diagnoses: Malaria, Typhoid, Pneumonia</li>
              <li>Bed Utilization Rate: 85%</li>
              <li>Average Length of Stay: 3.4 days</li>
            </ul>
          </>
        );
      case 'employee':
        return (
          <>
            <h3>{report.title}</h3>
            <p><strong>Department:</strong> {report.department}</p>
            <p><strong>Date:</strong> {report.date}</p>
            <p><strong>Summary:</strong></p>
            <ul>
              <li>Total Staff: 55</li>
              <li>Attendance Compliance: 92%</li>
              <li>Performance Rating: Satisfactory</li>
              <li>Pending Trainings: 3</li>
            </ul>
          </>
        );
      case 'department':
        return (
          <>
            <h3>{report.title}</h3>
            <p><strong>Department:</strong> {report.department}</p>
            <p><strong>Date:</strong> {report.date}</p>
            <p><strong>Summary:</strong></p>
            <ul>
              <li>Services Rendered: 150 cases handled</li>
              <li>Equipment Usage: 78%</li>
              <li>Pending Maintenance Requests: 2</li>
              <li>Departmental Notes: Smooth operation with minor delays in results delivery</li>
            </ul>
          </>
        );
      default:
        return <p>No report data available.</p>;
    }
  };

  return (
    <DashboardLayout activeMenu="reports">
      <section className="reports-main">
        <div className="reports-controls">
          <input
            type="text"
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="sort-select"
            aria-label="Filter report type"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="card report-table-card">
          <h3 className="form-card-title">Reports</h3>
          <table className="reports-table">
            <thead>
              <tr>
                <th>Report Title</th>
                <th>Department</th>
                <th>Date</th>
                <th>Type</th>
                <th>Validity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.length > 0 ? (
                filteredReports.map(report => (
                  <tr key={report.id}>
                    <td>{report.title}</td>
                    <td>{report.department}</td>
                    <td>{report.date}</td>
                    <td>{report.type}</td>
                    <td>{report.valid ? 'Valid' : 'Invalid'}</td>
                    <td>
                      <button onClick={() => setSelectedReport(report)} className="view-button">View</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="6" style={{ textAlign: 'center' }}>No reports found.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="card invalid-reports-card">
          <h3 className="form-card-title">
            Invalid Reports ({invalidReports.length})
          </h3>
          <div className="invalid-reports-list">
            {invalidReports.length > 0 ? (
              <ul>
                {invalidReports.map(report => (
                  <li key={report.id}>
                    {report.title} - {report.department} ({report.date})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No invalid reports found.</p>
            )}
          </div>
        </div>

        {selectedReport && (
          <div className="report-modal-overlay" onClick={() => setSelectedReport(null)}>
            <div className="report-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setSelectedReport(null)}>×</button>
              {sampleReportContent(selectedReport)}
            </div>
          </div>
        )}
      </section>
    </DashboardLayout>
  );
}

export default ReportsPage;
