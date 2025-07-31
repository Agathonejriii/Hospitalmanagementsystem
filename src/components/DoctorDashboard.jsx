import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import '../assets/css/doctorDashboard.css';

const chartData = [
  { day: 'Mon', Male: 12, Female: 15 },
  { day: 'Tue', Male: 18, Female: 20 },
  { day: 'Wed', Male: 10, Female: 22 },
  { day: 'Thu', Male: 14, Female: 18 },
  { day: 'Fri', Male: 20, Female: 16 },
  { day: 'Sat', Male: 8, Female: 12 },
  { day: 'Sun', Male: 6, Female: 10 },
];

const appointments = [
  { patient: 'John Doe', date: 'July 15', time: '10:30 AM', type: 'Consultation', status: 'Confirmed' },
  { patient: 'Mary Jane', date: 'July 15', time: '12:00 PM', type: 'Test', status: 'Pending' },
  { patient: 'Michael Smith', date: 'July 16', time: '9:00 AM', type: 'Consultation', status: 'Confirmed' },
  { patient: 'Anna Lee', date: 'July 16', time: '11:00 AM', type: 'Test', status: 'Pending' },
  { patient: 'Chris Johnson', date: 'July 17', time: '1:00 PM', type: 'Consultation', status: 'Confirmed' },
  { patient: 'Linda Davis', date: 'July 18', time: '2:30 PM', type: 'Test', status: 'Pending' },
  { patient: 'James Wilson', date: 'July 19', time: '10:00 AM', type: 'Consultation', status: 'Confirmed' },
  { patient: 'Patricia Brown', date: 'July 20', time: '3:00 PM', type: 'Test', status: 'Pending' },
];

function DoctorDashboard() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  return (
    <div className="dashboard-content">
      <section className="welcome-section">
        <h2>Welcome, Dr. Jane Doe</h2>
      </section>

      <div className="data-chart-container">
        <div className="monthly-data-card">
          <div className="card">
            <div className="card-title">Monthly Data</div>
            <div className="data-row">
              <div className="data-item">
                <span className="label">Prescriptions</span>
                <span className="value">56</span>
              </div>
              <div className="data-item">
                <span className="label">Patients</span>
                <span className="value">123</span>
              </div>
              <div className="data-item">
                <span className="label">Tests</span>
                <span className="value">46</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bar-chart-card">
          <div className="card">
            <div className="card-title">Weekly Gender Distribution</div>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={chartData}>
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: 10 }} />
                  <Bar dataKey="Male" fill="#0A84FF" />
                  <Bar dataKey="Female" fill="#38B2AC" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <section className="appointments-table">
        <h3>Upcoming Appointments</h3>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Time</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <tr key={index} onClick={() => setSelectedAppointment(appt)} className="clickable-row">
                <td>{appt.patient}</td>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
                <td>{appt.type}</td>
                <td>{appt.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {selectedAppointment && (
        <div className="appointment-modal-overlay" onClick={() => setSelectedAppointment(null)}>
          <div className="appointment-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedAppointment(null)}>×</button>
            <h3>Appointment Summary</h3>
            <p><strong>Patient:</strong> {selectedAppointment.patient}</p>
            <p><strong>Date:</strong> {selectedAppointment.date}</p>
            <p><strong>Time:</strong> {selectedAppointment.time}</p>
            <p><strong>Type:</strong> {selectedAppointment.type}</p>
            <p><strong>Status:</strong> {selectedAppointment.status}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DoctorDashboard;
