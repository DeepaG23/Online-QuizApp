// src/components/Login.jsx
import React, { useState } from 'react';


const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            setError(''); // Clear any previous error
            onLogin(username.trim());
        } else {
            setError('Username is required.'); // Set error if username is empty
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    aria-label="Username" // Accessibility improvement
                />
                {error && <p className="error-message">{error}</p>} {/* Display error message */}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;