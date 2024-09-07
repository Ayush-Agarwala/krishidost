import React, { useEffect } from 'react';
import './dash.css';

const Dashboard = ({ userData }) => {
  useEffect(() => {
    // Log the user data for debugging
    console.log('User data:', userData);
  }, [userData]);

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="header">
          <h1>User Dashboard</h1>
        </div>
        <form>
          <div className="form-group">
            <label>User Name:</label>
            <input
              type="text"
              name="username"
              value={userData?.username || ''}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>User ID:</label>
            <input
              type="text"
              name="userId"
              value={userData?.id || ''}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={userData?.email || ''}
              readOnly
            />
          </div>
          <button type="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
