import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [role, setRole] = useState("student");
  const [credentials, setCredentials] = useState({ id: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate successful login and navigate to the appropriate dashboard
    if (role === "student") {
      navigate("/student-dashboard"); // Replace this with actual routing once backend is added
    } else {
      navigate("/teacher-dashboard");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="role-selection">
          <button
            onClick={() => setRole("student")}
            className={role === "student" ? "active" : ""}
          >
            Student
          </button>
          <button
            onClick={() => setRole("teacher")}
            className={role === "teacher" ? "active" : ""}
          >
            Teacher
          </button>
        </div>
        <form onSubmit={handleLogin} className="login-form">
          <h2>{role === "student" ? "Student Login" : "Teacher Login"}</h2>
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            name="id"
            value={credentials.id}
            onChange={(e) => setCredentials({ ...credentials, id: e.target.value })}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
