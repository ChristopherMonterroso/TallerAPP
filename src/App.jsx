import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./pages/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/TallerAPP/" element={<Login />} />
          <Route path="/TallerAPP/login" element={<Login />} />
          <Route
            path="/TallerAPP/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
