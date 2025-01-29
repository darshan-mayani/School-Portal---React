import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // For registration
    const [age, setAge] = useState(''); // Optional
    const [role, setRole] = useState('student'); // Default role
    const [isRegister, setIsRegister] = useState(false); // Toggle between login and register
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Deny registration if role is 'admin' during registration
        if (isRegister && role === 'admin') {
            setErrorMessage('Admin registration is not allowed.');
            return;
        }

        const endpoint = isRegister ? '/api/register' : '/api/login';
        const payload = isRegister
            ? { name, email, password, role, age }
            : { email, password, role };

        try {
            const response = await axios.post(`http://localhost:3000${endpoint}`, payload);

            // Successful response
            if (response.status === 200 || response.status === 201) {
                // If the role selected matches the user's role
                if (role === 'student') {
                    navigate('/dashboard'); // Redirect to student dashboard
                } else if (role === 'admin') {
                    navigate('/teacher-dashboard'); // Redirect to admin/teacher dashboard
                }
            }
        } catch (error) {
            console.error('Error during submit:', error);

            // Check the role validation before submitting
            if (role === 'student' && error.response?.data?.message === "Admin login denied for student") {
                setErrorMessage('You cannot login as Admin if you are a Student.');
            } else if (role === 'admin' && error.response?.data?.message === "Student login denied for admin") {
                setErrorMessage('You cannot login as Student if you are an Admin.');
            } else {
                setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>{isRegister ? 'Register' : 'Login'}</h2>
                <form onSubmit={handleSubmit}>
                    {isRegister && (
                        <>
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Age Field */}
                            <div>
                                <label htmlFor="age">Age:</label>
                                <input
                                    type="number"
                                    id="age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder="Enter your age"
                                />
                            </div>
                        </>
                    )}

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Role Selector */}
                    <div>
                        <label htmlFor="role">Role:</label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {/* Error Message */}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    {/* Submit Button */}
                    <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
                </form>

                {/* Toggle Link */}
                <p>
                    {isRegister ? (
                        <>
                            Already have an account?{' '}
                            <span
                                className="toggle-link"
                                onClick={() => {
                                    setIsRegister(false);
                                    setErrorMessage('');
                                }}
                            >
                                Login here
                            </span>
                        </>
                    ) : (
                        <>
                            Don't have an account?{' '}
                            <span
                                className="toggle-link"
                                onClick={() => {
                                    setIsRegister(true);
                                    setErrorMessage('');
                                }}
                            >
                                Register here
                            </span>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default Login;
