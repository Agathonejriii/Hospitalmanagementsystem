import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import '../assets/css/manageUsers.css';

const roles = ['Doctor', 'Patient', 'Employee'];

function RoleDropdown({ selectedRole, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(open => !open);
  const handleSelect = (role) => {
    onSelect(role);
    setIsOpen(false);
  };

  return (
    <div className="add-role-dropdown">
      <button onClick={toggleDropdown} className="add-button">
        Add+ {selectedRole}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {roles.map(role => (
            <li key={role} onClick={() => handleSelect(role)} className="dropdown-item">
              {role}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ManageUsers() {
  const [selectedRole, setSelectedRole] = useState('Doctor');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [users, setUsers] = useState([
    { name: 'John Doe', gender: 'Male', address: 'Kampala', department: 'Cardiology', status: 'Active' },
    { name: 'Jane Smith', gender: 'Female', address: 'Entebbe', department: 'Neurology', status: 'Inactive' },
    { name: 'Robert K', gender: 'Male', address: 'Jinja', department: 'Pediatrics', status: 'Active' },
    { name: 'Emily N', gender: 'Female', address: 'Mbarara', department: 'Surgery', status: 'Inactive' },
    { name: 'Brian M', gender: 'Male', address: 'Gulu', department: 'Radiology', status: 'Active' },
    { name: 'Grace T', gender: 'Female', address: 'Mbale', department: 'Pharmacy', status: 'Active' },
    { name: 'Samuel P', gender: 'Male', address: 'Arua', department: 'Dermatology', status: 'Inactive' },
    { name: 'Linda W', gender: 'Female', address: 'Masaka', department: 'Oncology', status: 'Active' },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    switch (role.toLowerCase()) {
      case 'doctor':
        navigate('/manage-users/doctor');
        break;
      case 'patient':
        navigate('/manage-users/patient');
        break;
      case 'employee':
        navigate('/manage-users/employee');
        break;
      default:
        break;
    }
  };

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSortChange = (e) => setSortColumn(e.target.value);
  const toggleSortOrder = () => setSortOrder(order => (order === 'asc' ? 'desc' : 'asc'));

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditFormData({ ...users[index] });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = () => {
    const updatedUsers = [...users];
    updatedUsers[editingIndex] = { ...editFormData };
    setUsers(updatedUsers);
    setEditingIndex(null);
  };

  const handleCancelClick = () => setEditingIndex(null);

  const filteredUsers = users.filter(user =>
    Object.values(user).some(val => val.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const valA = (a[sortColumn] || '').toString().toLowerCase();
    const valB = (b[sortColumn] || '').toString().toLowerCase();
    if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
    if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <DashboardLayout activeMenu="manage-users">
      <section className="monthly-data-container">
        <div className="header-with-button">
          <RoleDropdown selectedRole={selectedRole} onSelect={handleRoleSelect} />
        </div>

        <div className="stats-cards" style={{ marginTop: '20px' }}>
          {/* Cards omitted for brevity */}

          <div className="table-controls">
            <input type="text" placeholder="Search users..." value={searchTerm} onChange={handleSearchChange} className="search-input" />
            <select value={sortColumn} onChange={handleSortChange} className="sort-select">
              <option value="name">Name</option>
              <option value="gender">Gender</option>
              <option value="address">Address</option>
              <option value="department">Department</option>
              <option value="status">Status</option>
            </select>
            <button onClick={toggleSortOrder} className="sort-order-button">{sortOrder === 'asc' ? '⬆️' : '⬇️'}</button>
          </div>

          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map((user, idx) => (
                <tr key={idx}>
                  <td>
                    {editingIndex === idx ? (
                      <input type="text" name="name" value={editFormData.name} onChange={handleEditChange} />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td>
                    {editingIndex === idx ? (
                      <select name="gender" value={editFormData.gender} onChange={handleEditChange}>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    ) : (
                      user.gender
                    )}
                  </td>
                  <td>
                    {editingIndex === idx ? (
                      <input type="text" name="address" value={editFormData.address} onChange={handleEditChange} />
                    ) : (
                      user.address
                    )}
                  </td>
                  <td>
                    {editingIndex === idx ? (
                      <input type="text" name="department" value={editFormData.department} onChange={handleEditChange} />
                    ) : (
                      user.department
                    )}
                  </td>
                  <td>
                    {editingIndex === idx ? (
                      <select name="status" value={editFormData.status} onChange={handleEditChange}>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    ) : (
                      user.status
                    )}
                  </td>
                  <td>
                    {editingIndex === idx ? (
                      <>
                        <button onClick={handleSaveClick} className="edit-button">💾</button>
                        <button onClick={handleCancelClick} className="edit-button">❌</button>
                      </>
                    ) : (
                      <button onClick={() => handleEditClick(idx)} className="edit-button">✏️</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default ManageUsers;
