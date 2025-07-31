import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/BookAppointmentPage.css';

const patientsList = [
  'John Doe',
  'Jane Smith',
  'Michael Brown',
  'Emily Johnson',
  'David Wilson',
  'Laura Garcia',
  'Robert Martinez',
  'Jessica Lee',
  'Daniel Harris',
  'Sarah Clark',
  'Matthew Lewis'
];

const appointmentTypes = ['Consultation', 'Follow-up', 'Emergency', 'Routine Check-up'];
const locations = ['Room 101', 'Room 102', 'Emergency', 'Lobby'];
const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Brown', 'Dr. Lee'];
const statuses = ['Admitted', 'Discharged'];

const BookAppointmentPage = () => {
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const [idCard, setIdCard] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');
  const [preferredDoctor, setPreferredDoctor] = useState('');
  const [status, setStatus] = useState('Pending');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  // Card Payment Fields
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  // Mobile Money Fields
  const [mobileNumber, setMobileNumber] = useState('');
  const [transactionId, setTransactionId] = useState('');

 // Insurance Fields
  const [insuranceProvider, setInsuranceProvider] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');

  // Handlers for input fields
  const handlePatientChange = (e) => setPatientName(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleContactChange = (e) => setContact(e.target.value);
  const handleIdCardChange = (e) => setIdCard(e.target.value);
  const handleAppointmentTypeChange = (e) => setAppointmentType(e.target.value);
  const handleDateChange = (e) => setAppointmentDate(e.target.value);
  const handleTimeChange = (e) => setAppointmentTime(e.target.value);
  const handleLocationChange = (e) => setPreferredLocation(e.target.value);
  const handleDoctorChange = (e) => setPreferredDoctor(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);
  const handlePaymentMethodChange = (e) => {
  setPaymentMethod(e.target.value);
  // Reset all payment-specific fields when payment method changes
  setCardNumber('');
  setCvv('');
  setExpiryDate('');
  setMobileNumber('');
  setTransactionId('');
  setInsuranceProvider('');
  setPolicyNumber('');
};
  const handleAmountChange = (e) => setAmount(e.target.value);
  const handlePaymentStatusChange = (e) => setPaymentStatus(e.target.value);
  const handleClearForm = () => {
  setPatientName('');
  setAddress('');
  setGender('');
  setContact('');
  setIdCard('');
  setAppointmentType('');
  setAppointmentDate('');
  setAppointmentTime('');
  setPreferredLocation('');
  setPreferredDoctor('');
  setStatus('Pending');
  setPaymentMethod('');
  setAmount('');
  setPaymentStatus('');
  setCardNumber('');
  setCvv('');
  setExpiryDate('');
  setMobileNumber('');
  setTransactionId('');
  setInsuranceProvider('');
  setPolicyNumber('');
};

  const handleSubmit = (e) => {
  e.preventDefault();
  alert(`Appointment booked for ${patientName} on ${appointmentDate} at ${appointmentTime}.
Payment Method: ${paymentMethod}, Amount: ${amount}, Status: ${paymentStatus}`);
  navigate('/receptionist/appointments');
};


  return (
    <div className="book-appointment-container">
      <div className="form-header">
        <h2>Book Appointment Form</h2>
      </div>

      <form onSubmit={handleSubmit} className="appointment-form">
        {/* Personal Data Section */}
        <div className="section-header">
          <h3>..........PERSONAL DATA.............</h3>
        </div>
        <div className="form-group">
          <label>Patient Name:</label>
          <select
            value={patientName}
            onChange={handlePatientChange}
            required
          >
            <option value="">Select Patient</option>
            {patientsList.map((patient, index) => (
              <option key={index} value={patient}>
                {patient}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select
            value={gender}
            onChange={handleGenderChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Contact:</label>
          <input
            type="tel"
            value={contact}
            onChange={handleContactChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Identity Card Number:</label>
          <input
            type="text"
            value={idCard}
            onChange={handleIdCardChange}
            required
          />
        </div>

        {/* Appointment Details Section */}
        <div className="section-header">
          <h3>.............APPOINTMENT DETAILS.........</h3>
        </div>

        <div className="form-group">
          <label>Appointment Type:</label>
          <select
            value={appointmentType}
            onChange={handleAppointmentTypeChange}
            required
          >
            <option value="">Select Appointment Type</option>
            {appointmentTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Appointment Date:</label>
          <input
            type="date"
            value={appointmentDate}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Appointment Time:</label>
          <input
          type="time"
          value={appointmentTime}
          onChange={handleTimeChange}
          required
          /> 
       </div>
        <div className="form-group">
          <label>Preferred Location:</label>
          <select
            value={preferredLocation}
            onChange={handleLocationChange}
            required
          >
            <option value="">Select Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Preferred Doctor:</label>
          <select
            value={preferredDoctor}
            onChange={handleDoctorChange}
            required
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select
            value={status}
            onChange={handleStatusChange}
            required
          >
            {statuses.map((statusOption, index) => (
              <option key={index} value={statusOption}>
                {statusOption}
              </option>
            ))}
          </select>
        </div>
        
        {/* --------- PAYMENT DETAILS SECTION --------- */}
<div className="section-header">
  <h3>.............PAYMENT DETAILS.........</h3>
</div>

<div className="form-group">
  <label>Payment Method:</label>
  <select
    value={paymentMethod}
    onChange={handlePaymentMethodChange}
    required
  >
    <option value="">Select Payment Method</option>
    <option value="Card">Card</option>
    <option value="Mobile Money">Mobile Money</option>
    <option value="Insurance">Insurance</option>
    <option value="Cash">Cash</option>
  </select>
</div>

<div className="form-group">
  <label>Amount:</label>
  <input
    type="number"
    value={amount}
    onChange={handleAmountChange}
    required
  />
</div>

<div className="form-group">
  <label>Payment Status:</label>
  <select
    value={paymentStatus}
    onChange={handlePaymentStatusChange}
    required
  >
    <option value="">Select Status</option>
    <option value="Paid">Paid</option>
    <option value="Pending">Pending</option>
    <option value="Cancelled">Cancelled</option>
  </select>
</div>

{/* ---- Conditional Fields for Card Payment ---- */}
{paymentMethod === 'Card' && (
  <>
    <div className="form-group">
      <label>Card Number:</label>
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />
    </div>

    <div className="form-group">
      <label>CVV:</label>
      <input
        type="text"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        required
      />
    </div>

    <div className="form-group">
      <label>Expiry Date:</label>
      <input
        type="month"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        required
      />
    </div>
  </>
)}

{/* ---- Conditional Fields for Mobile Money ---- */}
{paymentMethod === 'Mobile Money' && (
  <>
    <div className="form-group">
      <label>Mobile Number:</label>
      <input
        type="tel"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        required
      />
    </div>

    <div className="form-group">
      <label>Transaction ID:</label>
      <input
        type="text"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
        required
      />
    </div>
  </>
)}

{/* ---- Conditional Fields for Insurance ---- */}
{paymentMethod === 'Insurance' && (
  <>
    <div className="form-group">
      <label>Insurance Provider:</label>
      <input
        type="text"
        value={insuranceProvider}
        onChange={(e) => setInsuranceProvider(e.target.value)}
        required
      />
    </div>

    <div className="form-group">
      <label>Policy Number:</label>
      <input
        type="text"
        value={policyNumber}
        onChange={(e) => setPolicyNumber(e.target.value)}
        required
      />
    </div>
  </>
)}

        <div className="form-actions">
  <span className="clear-form" onClick={handleClearForm}>
    Clear Form
  </span>
  <button type="submit" className="submit-btn">
    Book Appointment
  </button>
</div>


      </form>
      
    </div>
  );
};

export default BookAppointmentPage;
