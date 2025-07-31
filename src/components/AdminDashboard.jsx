import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const weeklyData = [
  { day: 'Mon', doctors: 15, patients: 45 },
  { day: 'Tue', doctors: 18, patients: 52 },
  { day: 'Wed', doctors: 14, patients: 40 },
  { day: 'Thu', doctors: 20, patients: 60 },
  { day: 'Fri', doctors: 17, patients: 50 },
  { day: 'Sat', doctors: 10, patients: 35 },
  { day: 'Sun', doctors: 8, patients: 28 },
];

const thisWeekReports = 320;
const lastWeekReports = 295;
const reportChange = thisWeekReports - lastWeekReports;
const reportPercentage = Math.abs((reportChange / lastWeekReports) * 100).toFixed(1);
const isPositive = reportChange >= 0;

const outOfStockMedicines = ['Paracetamol', 'Amoxicillin', 'Ibuprofen'];
const newStockMedicines = ['Azithromycin', 'Metformin', 'Lisinopril'];

function AdminDashboard() {
  const [showOutOfStock, setShowOutOfStock] = useState(false);
  const [showNewStock, setShowNewStock] = useState(false);

  return (
    <DashboardLayout activeMenu="dashboard">
      <section className="monthly-data-container">
        <h2>Monthly Data</h2>
        <div className="stats-cards">
          <div className="card">
            New Admissions: <span className="blue-figure">123</span>
          </div>
          <div className="card">
            Recently Discharged: <span className="blue-figure">25</span>
          </div>
          <div className="card">Attending Doctors: <span>56</span></div>
          <div className="card">
            Total Employees: <span className="blue-figure">234</span>
          </div>
          <div className="card">
            Total Beds: <span className="blue-figure">54</span>
          </div>
          <div className="card">
            Total Income: <span className="blue-figure">UGX 23,000,000</span>
          </div>

          <div className="card chart-card">
            <h3>Outpatient Visits</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={weeklyData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                barGap={6}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="doctors" fill="#0A84FF" name="Doctors" />
                <Bar dataKey="patients" fill="#38B2AC" name="Patients" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="card report-summary-card">
            <div className="card-header">
              <h3>WEEKLY - Total Reports</h3>
            </div>
            <div className="card-body">
              <p className="report-total">{thisWeekReports}</p>
              <p className={`report-change ${isPositive ? 'positive' : 'negative'}`}>
                {isPositive ? '▲' : '▼'} {reportPercentage}% {isPositive ? 'more' : 'less'} than last
                week
              </p>
            </div>
          </div>

          <div className="card department-scale-card">
            <h3>Weekly Department Comparison</h3>
            <div className="scale-legend">
              <div>
                <span className="legend-box doctor-color" /> Doctors
              </div>
              <div>
                <span className="legend-box patient-color" /> Patients
              </div>
            </div>

            <div className="department-bar">
              <div className="dept-label">Cardiology</div>
              <div className="scale-bar">
                <span className="doctors" style={{ width: '30%' }}></span>
                <span className="patients" style={{ width: '70%' }}></span>
              </div>
              <div className="scale-numbers">Doctors: 3 &nbsp;&nbsp; Patients: 7</div>
            </div>

            <div className="department-bar">
              <div className="dept-label">Pediatrics</div>
              <div className="scale-bar">
                <span className="doctors" style={{ width: '40%' }}></span>
                <span className="patients" style={{ width: '60%' }}></span>
              </div>
              <div className="scale-numbers">Doctors: 4 &nbsp;&nbsp; Patients: 6</div>
            </div>

            <div className="department-bar">
              <div className="dept-label">Neurology</div>
              <div className="scale-bar">
                <span className="doctors" style={{ width: '25%' }}></span>
                <span className="patients" style={{ width: '75%' }}></span>
              </div>
              <div className="scale-numbers">Doctors: 2.5 &nbsp;&nbsp; Patients: 7.5</div>
            </div>
          </div>

          <div className="card pharmacy-details-card">
            Pharmacists: 12 | Shifts: 3 |{' '}
            <span
              className="dropdown-toggle"
              onClick={() => setShowOutOfStock(!showOutOfStock)}
            >
              Out of Stock: {outOfStockMedicines.length} {showOutOfStock ? '▲' : '▼'}
            </span>{' '}
            |{' '}
            <span
              className="dropdown-toggle"
              onClick={() => setShowNewStock(!showNewStock)}
            >
              New Stock: {newStockMedicines.length} {showNewStock ? '▲' : '▼'}
            </span>

            {showOutOfStock && (
              <ul className="dropdown-list">
                {outOfStockMedicines.map((med, idx) => (
                  <li key={idx}>{med}</li>
                ))}
              </ul>
            )}

            {showNewStock && (
              <ul className="dropdown-list">
                {newStockMedicines.map((med, idx) => (
                  <li key={idx}>{med}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default AdminDashboard;
