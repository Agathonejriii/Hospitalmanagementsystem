import React, { useState } from 'react';
import '../assets/css/receptionistDashboard.css';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';


function ReceptionistDashboard() {
  const todayAppointments = 46;
  const appointmentChange = 12;

  const checkData = [
    { name: 'Check-Ins', value: 30 },
    { name: 'Check-Outs', value: 20 },
  ];

  const COLORS = ['#0A84FF', '#38B2AC'];
  const waitingQueue = 14;

  const registrationStats = {
    today: { total: 18, change: 8 },
    weekly: { total: 120, change: 5 },
    monthly: { total: 480, change: -3 },
    yearly: { total: 5600, change: 12 },
  };

  const [regPeriod, setRegPeriod] = useState('today');
  const { total: newRegistrations, change: registrationChange } = registrationStats[regPeriod];

  const getComparisonLabel = () => {
    switch (regPeriod) {
      case 'today': return 'than yesterday';
      case 'weekly': return 'than last week';
      case 'monthly': return 'than last month';
      case 'yearly': return 'than last year';
      default: return '';
    }
  };
  const navigate = useNavigate();

  return (
    <div className="dashboard-main">
      <div className="welcome-message">
        WELCOME, How may I help you today ??
      </div>

      <section className="stats-cards">
        {/* Appointments */}
        <div className="card">
          <div className="card-title">Today's Appointments</div>
          <div className="card-number">{todayAppointments}</div>
          <div className={`card-change ${appointmentChange >= 0 ? 'increase' : 'decrease'}`}>
            {appointmentChange >= 0 ? '+' : ''}{appointmentChange}%
            <span className="change-text"> than yesterday</span>
          </div>
        </div>

        {/* Check-In / Out */}
        <div className="card checkin-card">
          <div className="card-title small-title">PATIENT CHECK-IN and OUTS</div>
          <div className="pie-chart-container">
            <ResponsiveContainer width={150} height={150}>
              <PieChart>
                <Pie
                  data={checkData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {checkData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="checkin-legend">
              {checkData.map((entry, index) => (
                <div key={`legend-${index}`} className="legend-item">
                  <span
                    className="legend-color"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="legend-label">{entry.name}: </span>
                  <span className="legend-value">{entry.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Waiting Queue */}
        <div className="card">
          <div className="card-title">Waiting Queue - TOTAL</div>
          <div className="card-number">
            {waitingQueue}
            <span className="card-subtext">Patients</span>
          </div>
        </div>

        {/* New Registrations */}
        <div className="card">
          <div className="card-title card-title-with-dropdown">
            NEW REGISTRATIONS 
            <select
              className="period-dropdown"
              value={regPeriod}
              onChange={e => setRegPeriod(e.target.value)}
            >
              <option value="today">Today</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <div className="card-inline">
            <div className="card-number">{newRegistrations}</div>
            <div className={`card-change ${registrationChange >= 0 ? 'increase' : 'decrease'}`}>
              {registrationChange >= 0 ? '+' : ''}
              {registrationChange}% <span className="change-text">{getComparisonLabel()}</span>
            </div>
          </div>
        </div>
      </section>
      <div className="register-section-wrapper">
        <button className="register-btn" onClick={() => navigate('/receptionist/register')}>
  Register Now
</button>

      </div>
    </div>
  );
}

export default ReceptionistDashboard;
