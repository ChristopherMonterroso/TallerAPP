// Navbar.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../buttons/Logout";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Auto servicios Monterroso</div>
      <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
        <div className="navbar-item" onClick={() => navigateTo("/dashboard/RevisionVehiculo")}>
          Revisión de vehículo
        </div>
        <div className="navbar-item" onClick={() => navigateTo("/dashboard/opcion2")}>
          Opción 2
        </div>
        <div className="navbar-item" onClick={() => navigateTo("/dashboard/opcion3")}>
          Opción 3
        </div>
        <Logout />
      </div>
      <div className="navbar-burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
