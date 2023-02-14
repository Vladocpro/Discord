import React from "react";
import {Navigate,
   Route,Routes
} from "react-router-dom";
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";
import AlertNotification from "./shared/components/AlertNotification";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/" element={<Navigate to="/dashboard" replace />}/>
      </Routes>
      <AlertNotification />
    </>
  );
}

export default App;
