import React, { useState, useEffect } from 'react';
import '../assets/css/staffLogsPage.css';

const initialStaffLogs = {
  Sunday: [
    { name: 'John Doe', role: 'Receptionist', department: 'Front Desk', login: '09:00', logout: '17:00' },
    { name: 'Jane Smith', role: 'Nurse', department: 'Emergency', login: '08:30', logout: '16:30' },
    // more data...
  ],
  Monday: [
    { name: 'Michael Brown', role: 'Doctor', department: 'Surgery', login: '07:45', logout: '15:45' },
    { name: 'Diana Prince', role: 'Admin', department: 'HR', login: '09:00', logout: '17:00' },
    { name: 'Tony Stark', role: 'Engineer', department: 'Maintenance', login: '07:30', logout: '15:30' },
    { name: 'Steve Rogers', role: 'Security', department: 'Security', login: '06:45', logout: '14:45' },
    { name: 'Natasha Romanoff', role: 'Nurse', department: 'Emergency', login: '08:15', logout: '16:15' },
    { name: 'Barry Allen', role: 'Technician', department: 'Radiology', login: '07:15', logout: '15:15' },
  ],
  Tuesday: [ { name: 'Mark Twain', role: 'Doctor', department: 'Cardiology', login: '10:00', logout: '18:00' },
    { name: 'Nancy Drew', role: 'Receptionist', department: 'Front Desk', login: '09:30', logout: '17:30' },
    { name: 'Peter Parker', role: 'Technician', department: 'Radiology', login: '07:00', logout: '15:00' },
    { name: 'Bruce Wayne', role: 'Security', department: 'Security', login: '06:30', logout: '14:30' },
    { name: 'Clark Kent', role: 'Doctor', department: 'Neurology', login: '08:45', logout: '16:45' },
    { name: 'Diana Prince', role: 'Admin', department: 'HR', login: '09:00', logout: '17:00' },
    { name: 'Tony Stark', role: 'Engineer', department: 'Maintenance', login: '07:30', logout: '15:30' },
    { name: 'Steve Rogers', role: 'Security', department: 'Security', login: '06:45', logout: '14:45' },
    { name: 'Natasha Romanoff', role: 'Nurse', department: 'Emergency', login: '08:15', logout: '16:15' },
    { name: 'Barry Allen', role: 'Technician', department: 'Radiology', login: '07:15', logout: '15:15' }, ],
  Wednesday: [ { name: 'Mark Twain', role: 'Doctor', department: 'Cardiology', login: '10:00', logout: '18:00' },
    { name: 'Nancy Drew', role: 'Receptionist', department: 'Front Desk', login: '09:30', logout: '17:30' },
    { name: 'Peter Parker', role: 'Technician', department: 'Radiology', login: '07:00', logout: '15:00' },
    { name: 'Bruce Wayne', role: 'Security', department: 'Security', login: '06:30', logout: '14:30' },
    { name: 'Clark Kent', role: 'Doctor', department: 'Neurology', login: '08:45', logout: '16:45' },
    { name: 'Diana Prince', role: 'Admin', department: 'HR', login: '09:00', logout: '17:00' },
    { name: 'Tony Stark', role: 'Engineer', department: 'Maintenance', login: '07:30', logout: '15:30' },
    { name: 'Steve Rogers', role: 'Security', department: 'Security', login: '06:45', logout: '14:45' },
    { name: 'Natasha Romanoff', role: 'Nurse', department: 'Emergency', login: '08:15', logout: '16:15' },
    { name: 'Barry Allen', role: 'Technician', department: 'Radiology', login: '07:15', logout: '15:15' }, ],
  Thursday: [{ name: 'Mark Twain', role: 'Doctor', department: 'Cardiology', login: '10:00', logout: '18:00' },
    { name: 'Nancy Drew', role: 'Receptionist', department: 'Front Desk', login: '09:30', logout: '17:30' },
    { name: 'Peter Parker', role: 'Technician', department: 'Radiology', login: '07:00', logout: '15:00' },
    { name: 'Bruce Wayne', role: 'Security', department: 'Security', login: '06:30', logout: '14:30' },
    { name: 'Clark Kent', role: 'Doctor', department: 'Neurology', login: '08:45', logout: '16:45' },
    { name: 'Diana Prince', role: 'Admin', department: 'HR', login: '09:00', logout: '17:00' },
    { name: 'Tony Stark', role: 'Engineer', department: 'Maintenance', login: '07:30', logout: '15:30' },
    { name: 'Steve Rogers', role: 'Security', department: 'Security', login: '06:45', logout: '14:45' },
    { name: 'Natasha Romanoff', role: 'Nurse', department: 'Emergency', login: '08:15', logout: '16:15' },
    { name: 'Barry Allen', role: 'Technician', department: 'Radiology', login: '07:15', logout: '15:15' }, ],
  Friday: [{ name: 'Mark Twain', role: 'Doctor', department: 'Cardiology', login: '10:00', logout: '18:00' },
    { name: 'Nancy Drew', role: 'Receptionist', department: 'Front Desk', login: '09:30', logout: '17:30' },
    { name: 'Peter Parker', role: 'Technician', department: 'Radiology', login: '07:00', logout: '15:00' },
    { name: 'Bruce Wayne', role: 'Security', department: 'Security', login: '06:30', logout: '14:30' },
    { name: 'Clark Kent', role: 'Doctor', department: 'Neurology', login: '08:45', logout: '16:45' },
    { name: 'Diana Prince', role: 'Admin', department: 'HR', login: '09:00', logout: '17:00' },
    { name: 'Tony Stark', role: 'Engineer', department: 'Maintenance', login: '07:30', logout: '15:30' },
    { name: 'Steve Rogers', role: 'Security', department: 'Security', login: '06:45', logout: '14:45' },
    { name: 'Natasha Romanoff', role: 'Nurse', department: 'Emergency', login: '08:15', logout: '16:15' },
    { name: 'Barry Allen', role: 'Technician', department: 'Radiology', login: '07:15', logout: '15:15' }, ],
  Saturday: [ { name: 'Mark Twain', role: 'Doctor', department: 'Cardiology', login: '10:00', logout: '18:00' },
    { name: 'Nancy Drew', role: 'Receptionist', department: 'Front Desk', login: '09:30', logout: '17:30' },
    { name: 'Peter Parker', role: 'Technician', department: 'Radiology', login: '07:00', logout: '15:00' },
    { name: 'Bruce Wayne', role: 'Security', department: 'Security', login: '06:30', logout: '14:30' },
    { name: 'Clark Kent', role: 'Doctor', department: 'Neurology', login: '08:45', logout: '16:45' },
    ],
};


const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const sortOptions = [
  { label: 'Name', value: 'name' },
  { label: 'Role', value: 'role' },
  { label: 'Department', value: 'department' },
  { label: 'Log In', value: 'login' },
  { label: 'Log Out', value: 'logout' },
];

function StaffLogsPage() {
  const [selectedDay, setSelectedDay] = useState('Sunday');
  const [staffLogs, setStaffLogs] = useState(initialStaffLogs);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('name');
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update current date/time every second
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSearchQuery('');
    setSortField('name');
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSortChange = (e) => setSortField(e.target.value);

  const handleTimeChange = (e, index, field) => {
    const updatedDayLogs = [...(staffLogs[selectedDay] || [])];
    updatedDayLogs[index][field] = e.target.value;
    setStaffLogs(prev => ({
      ...prev,
      [selectedDay]: updatedDayLogs,
    }));
  };

  const handleLogInOutClick = () => {
    alert("Logging In/Out functionality here.");
  };

  const filteredLogs = (staffLogs[selectedDay] || [])
    .filter(log => log.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      const valA = a[sortField].toLowerCase();
      const valB = b[sortField].toLowerCase();
      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    });

  // Generate time options for dropdown (15-min intervals)
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let min = 0; min < 60; min += 15) {
        const h = hour.toString().padStart(2, '0');
        const m = min.toString().padStart(2, '0');
        times.push(`${h}:${m}`);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  return (
    <div className="dashboard-content">
      {/* Days Selector */}
      <div className="day-buttons-container">
        {daysOfWeek.map(day => (
          <button
            key={day}
            onClick={() => handleDayClick(day)}
            className={day === selectedDay ? 'active' : ''}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Centered Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Sort and Current Date/Time Row */}
      <div className="sort-date-container">
        <div className="sort-section">
          <label htmlFor="sort-select" style={{ marginRight: '8px', fontWeight: '600' }}>Sort:</label>
          <select
            id="sort-select"
            value={sortField}
            onChange={handleSortChange}
            className="sort-select"
          >
            {sortOptions.map(({ label, value }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div className="date-time-section">
          {currentDateTime.toLocaleDateString()} {currentDateTime.toLocaleTimeString()}
        </div>

        {/* Log In/Out Button */}
        <button 
          onClick={handleLogInOutClick} 
          className="log-in-out-btn"
        >
          Log In/Out
        </button>
      </div>

      {/* Staff Logs Table */}
      <div className="table-scroll-container">
        <table className="staff-logs-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Log In</th>
              <th>Log Out</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log, index) => (
                <tr key={index}>
                  <td>{log.name}</td>
                  <td>{log.role}</td>
                  <td>{log.department}</td>
                  <td>
                    <select
                      value={log.login}
                      onChange={(e) => handleTimeChange(e, index, 'login')}
                    >
                      {timeOptions.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <select
                      value={log.logout}
                      onChange={(e) => handleTimeChange(e, index, 'logout')}
                    >
                      {timeOptions.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>No records for {selectedDay}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffLogsPage;
