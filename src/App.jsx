import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Auth & Landing
import LoginPage from './components/LoginPage';

// Admin Pages
import AdminDashboard from './components/AdminDashboard';
import ManageUsers from './components/ManageUsers';
import DoctorPage from './components/DoctorPage';
import PatientPage from './components/PatientPage';
import EmployeePage from './components/EmployeePage';
import ReportsPage from './components/Reports';
import Settings from './components/SettingsPage';
import SupportPage from './components/SupportPage';

// Doctor Layout & Pages
import DoctorLayout from './components/DoctorLayout';
import DoctorDashboard from './components/DoctorDashboard';
import PatientsPage from './components/PatientsPage';
import AppointmentsPage from './components/AppointmentsPage';
import TestsPage from './components/TestsPage';
import BookAppointmentPage from './components/BookAppointmentPage';

// Receptionist Layout & Pages
import ReceptionistLayout from './components/ReceptionistLayout';
import ReceptionistDashboard from './components/ReceptionistDashboard';
import CheckInOutPage from './components/CheckInOutPage';
import StaffLogsPage from './components/StaffLogsPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-users/doctor" element={<DoctorPage />} />
        <Route path="/manage-users/patient" element={<PatientPage />} />
        <Route path="/manage-users/employee" element={<EmployeePage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<Settings />} />

        {/* ✅ Shared Standalone Support Page */}
        <Route path="/support" element={<SupportPage />} />

        {/* Doctor Routes */}
        <Route path="/doctor" element={<DoctorLayout />}>
          <Route index element={<DoctorDashboard />} />
          <Route path="dashboard" element={<DoctorDashboard />} />
          <Route path="patients" element={<PatientsPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="appointments/book-appointment" element={<BookAppointmentPage />} />
          <Route path="tests" element={<TestsPage />} />
        </Route>

        {/* Receptionist Routes */}
        <Route path="/receptionist" element={<ReceptionistLayout />}>
          <Route path="dashboard" element={<ReceptionistDashboard />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="appointments/book-appointment" element={<BookAppointmentPage />} />
          <Route path="checkins" element={<CheckInOutPage />} />
          <Route path="staff-logs" element={<StaffLogsPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* ❌ Removed ReceptionistSupportPage */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
