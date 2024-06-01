import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   // const validUsername = process.env.REACT_APP_USERNAME;
   // const validPassword = process.env.REACT_APP_PASSWORD;

    if (username === "admin" && password === "1234") {
        const token = "jwt-token";
        login(token);
        navigate("/TallerAPP/dashboard/RevisionVehiculo");
    } else {
      setError("Invalid credentials");
    }

    
  };

  return (
    <div className="cont">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type="text"
            className="user"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="pass"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
