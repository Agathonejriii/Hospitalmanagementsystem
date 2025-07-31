import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import '../assets/css/AppointmentsPage.css';
import { FaCalendarAlt } from 'react-icons/fa';

const sampleAppointments = [
  { patientName: 'John Doe', date: '2025-07-16', time: '10:00', status: 'Pending' },
  { patientName: 'Jane Smith', date: '2025-07-16', time: '11:00', status: 'Confirmed' },
  { patientName: 'Michael Brown', date: '2025-07-17', time: '09:30', status: 'Cancelled' },
  { patientName: 'Emily Johnson', date: '2025-07-18', time: '14:00', status: 'Confirmed' },
  { patientName: 'David Wilson', date: '2025-07-20', time: '15:30', status: 'Pending' },
  { patientName: 'Laura Garcia', date: '2025-07-23', time: '13:00', status: 'Confirmed' },
  { patientName: 'Robert Martinez', date: '2025-07-25', time: '10:00', status: 'Pending' },
  { patientName: 'Jessica Lee', date: '2025-07-28', time: '09:00', status: 'Cancelled' },
  { patientName: 'Daniel Harris', date: '2025-07-29', time: '16:00', status: 'Confirmed' },
  { patientName: 'Sarah Clark', date: '2025-07-30', time: '11:30', status: 'Pending' },
  { patientName: 'Matthew Lewis', date: '2025-08-01', time: '14:00', status: 'Confirmed' },
];

const statuses = ['Pending', 'Confirmed', 'Cancelled'];
const sortOptions = ['All', 'Today', 'This Week', 'This Month'];

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState(sampleAppointments);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRange, setFilterRange] = useState('All');
  const [selectedRow, setSelectedRow] = useState(null);

  const handleChange = (e, index, field) => {
    const updated = [...appointments];
    updated[index][field] = e.target.value;
    setAppointments(updated);
  };

  const handleRowClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index); // Toggle selection
  };

  const isWithinRange = (dateStr) => {
    const today = new Date('2025-07-16'); // Fixed date for demo; adjust as needed
    const date = new Date(dateStr);
    if (filterRange === 'Today') {
      return date.toDateString() === today.toDateString();
    } else if (filterRange === 'This Week') {
      const dayOfWeek = today.getDay();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - dayOfWeek);
      startOfWeek.setHours(0, 0, 0, 0);
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      endOfWeek.setHours(23, 59, 59, 999);
      return date >= startOfWeek && date <= endOfWeek;
    } else if (filterRange === 'This Month') {
      return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    }
    return true;
  };

  const filteredAppointments = appointments.filter(a =>
    a.patientName.toLowerCase().includes(searchQuery.toLowerCase()) &&
    isWithinRange(a.date)
  );

  // Current date/time for display
  const now = new Date();
  const currentDate = now.toLocaleDateString();
  const currentTime = now.toLocaleTimeString();

  return (
    <div className="dashboard-content">
      <div className="header-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div className="header-left" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaCalendarAlt style={{ color: '#00897b', fontSize: '24px' }} />
          <span style={{ color: 'blue', fontWeight: 'bold', fontSize: '18px' }}>
            TOTAL: {filteredAppointments.length}
          </span>
        </div>
        <div className="header-right">
          <span className="current-date">{currentDate}</span>
          <span className="current-time">{currentTime}</span>
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
          <label>Filter By:</label>
          <select value={filterRange} onChange={(e) => setFilterRange(e.target.value)}>
            {sortOptions.map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <Link to="/receptionist/appointments/book-appointment">
          <button
            type="button"
            className="add-appointment-btn"
          >
            Add Appointment +
          </button>
        </Link>
      </div>

      <div className="table-container scrollable-table">
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appointment, index) => (
                <tr
                  key={index}
                  className={selectedRow === index ? 'selected' : ''}
                  onClick={() => handleRowClick(index)} // Add click handler
                >
                  <td>
                    <input
                      type="text"
                      value={appointment.patientName}
                      onChange={(e) => handleChange(e, index, 'patientName')}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={appointment.date}
                      onChange={(e) => handleChange(e, index, 'date')}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      value={appointment.time}
                      onChange={(e) => handleChange(e, index, 'time')}
                    />
                  </td>
                  <td>
                    <select
                      value={appointment.status}
                      onChange={(e) => handleChange(e, index, 'status')}
                    >
                      {statuses.map((status, i) => (
                        <option key={i} value={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>No appointments found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsPage;
