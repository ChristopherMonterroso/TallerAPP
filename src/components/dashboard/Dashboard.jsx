// Dashboard.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Check from "../../pages/Page1";
import Opcion2 from "../../pages/Page2";
import Opcion3 from "../../pages/Page3";
import ProtectedRoute from "../ProtectedRoute";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="RevisionVehiculo" element={<Check />} />
        <Route path="opcion2" element={<Opcion2 />} />
        <Route path="opcion3" element={<Opcion3 />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
