import React, { useState } from 'react';
import '../assets/css/receptionistDashboard.css';

const generateSampleData = (day) => {
  const departments = ['Pediatrics', 'Therapy', 'Dental', 'Orthopedics', 'Cardiology'];
  const statuses = ['Check-in', 'Check-out'];

  return Array.from({ length: 20 }, (_, i) => ({
    time: `${9 + Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}am`,
    patient: `Patient ${day}-${i + 1}`,
    department: departments[i % departments.length],
    status: statuses[i % statuses.length]
  }));
};

const mockData = {
  '07': generateSampleData('07'),
  '08': generateSampleData('08'),
  '09': generateSampleData('09'),
  '10': generateSampleData('10'),
  '11': generateSampleData('11'),
  '12': generateSampleData('12'),
  '13': generateSampleData('13'),
};

function CheckInOutPage() {
  const [selectedDay, setSelectedDay] = useState('07');
  const [data, setData] = useState(mockData);
  const [sortBy, setSortBy] = useState('time');
  const [searchQuery, setSearchQuery] = useState('');

  const handleStatusChange = (day, index, newStatus) => {
    const updatedDayData = data[day].map((entry, i) =>
      i === index ? { ...entry, status: newStatus } : entry
    );
    setData({ ...data, [day]: updatedDayData });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredAndSortedData = [...data[selectedDay]]
    .filter((entry) =>
      entry.patient.toLowerCase().includes(searchQuery)
    )
    .sort((a, b) => {
      if (sortBy === 'time') return a.time.localeCompare(b.time);
      if (sortBy === 'patient') return a.patient.localeCompare(b.patient);
      if (sortBy === 'department') return a.department.localeCompare(b.department);
      if (sortBy === 'status') return a.status.localeCompare(b.status);
      return 0;
    });

  return (
    <div className="dashboard-content">
      <div className="header-section">
        <div className="date-sort-container">
          <span><strong>DATE:</strong> 07/07/25</span>
          <span>Sort by:
            <select value={sortBy} onChange={handleSortChange}>
              <option value="time">Time</option>
              <option value="patient">Patient Name</option>
              <option value="department">Department</option>
              <option value="status">Status</option>
            </select>
          </span>
        </div>

        <div className="search-filter-container">
          <span><strong>Search :</strong></span>
          <input type="text" placeholder="Search by name..." onChange={handleSearchChange} />
        </div>

        <div className="day-buttons-container">
          {['07', '08', '09', '10', '11', '12', '13'].map((day, index) => (
            <button
              key={day}
              className={selectedDay === day ? 'active' : ''}
              onClick={() => setSelectedDay(day)}
            >
              {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'][index]}<br />{day}
            </button>
          ))}
          {/* Check-in/Check-out Button */}
          <button className="checkinout-btn" onClick={() => console.log("Button clicked!")}>Check-in/Check-out</button>
        </div>
      </div>

      {/* Table section */}
      <div className="table-section scrollable-table">
        <table className="checkinout-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Patient</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.length > 0 ? (
              filteredAndSortedData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.time}</td>
                  <td>{entry.patient}</td>
                  <td>{entry.department}</td>
                  <td>
                    <select
                      value={entry.status}
                      onChange={(e) => handleStatusChange(selectedDay, index, e.target.value)}
                    >
                      <option>Check-in</option>
                      <option>Check-out</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CheckInOutPage;
