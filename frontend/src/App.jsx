/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Auth from "./components/Auth";
import CattleDiagnosisChatbot from "./components/cattle";
import DiseaseInfoComponent from "./components/DiseaseInfo";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [loggedInUsername, setLoggedInUsername] = useState(null);
  const ProtectedRoute = ({ children }) => {
    return loggedInUsername ? children : <Navigate to="/auth" />;
  };

  return (
    <Router>
      <Navbar loggedInUsername={loggedInUsername} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route
          path="/cattle"
          element={
            <ProtectedRoute>
              <CattleDiagnosisChatbot />
            </ProtectedRoute>
          }
        />
        <Route
          path="/DiseaseInfo"
          element={
            <ProtectedRoute>
              <DiseaseInfoComponent />
            </ProtectedRoute>
          }
        />
        <Route path="/dash" element={<Dashboard />} />
        <Route
          path="/auth"
          element={<Auth setLoggedInUsername={setLoggedInUsername} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
