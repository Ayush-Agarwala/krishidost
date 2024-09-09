import React, { useEffect, useState } from 'react';
import './dash.css';

const Dashboard = () => {
  const [cattleId, setCattleId] = useState('');
  const [areaInAcre, setAreaInAcre] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/get_user_data', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          credentials: 'include',  // Ensure cookies (for sessions) are included in requests
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setUserData(data);
        } else {
          console.error('Error fetching user data:', data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Send session cookies with the request
      });

      const result = await response.json();

      if (response.ok) {
        alert('Logged out successfully!');
        // Optionally, redirect to login page or clear user data
        setUserData(null);
        window.location.href = '/'; // Redirect to login page after logout
      } else {
        alert(result.error || 'Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      alert('An error occurred during logout. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ensure userData is available
    if (!userData) {
      console.error('User data is not loaded yet.');
      return;
    }

    const updatedData = {
      cattle_id: cattleId,
      area_in_acre: areaInAcre,
    };

    try {
      const response = await fetch(`http://localhost:5000/add_user_data/${userData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Cattle ID and Area added successfully!');
      } else {
        alert(result.error || 'Failed to add. Please try again.');
      }
    } catch (error) {
      console.error('Error adding data:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="header">
          <h1>User Dashboard</h1>
        </div>
        <form onSubmit={handleSubmit}>
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

          {/* Cattle ID and Area input fields */}
          {/* {!userData?.cattle_id && (
            <div className="form-group">
              <label>Cattle ID:</label>
              <input
                type="text"
                name="cattleId"
                value={cattleId}
                onChange={(e) => setCattleId(e.target.value)}
              />
            </div>
          )}
          {!userData?.area_in_acre && (
            <div className="form-group">
              <label>Area in Acre:</label>
              <input
                type="number"
                name="areaInAcre"
                value={areaInAcre}
                onChange={(e) => setAreaInAcre(e.target.value)}
              />
            </div>
          )}

          <button type="submit">Add</button> */}
        </form>

        {/* Logout button */}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
