import React from 'react';
import AdminBody from './AdminBody';
import AdminNavbar from './AdminNavbar';
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <AdminBody />
    </div>
  );
};
export default AdminDashboard;