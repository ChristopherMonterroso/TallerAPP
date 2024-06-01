import React from 'react';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Logout = () => {

    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        // Aquí iría tu lógica para cerrar sesión
        console.log('Cerrar sesión');
        logout();
        navigate('/TallerAPP/dashboard/login');

    };

    return (
        <button className="navbar-item logout" onClick={handleLogout}>Cerrar Sesión</button>
    );
};

export default Logout;
