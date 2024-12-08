import React, { useState } from "react";
import sha256 from "crypto-js/sha256";
import { useNavigate } from "react-router-dom";
import "../login/Login.css";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }
    
        const storedEmail = localStorage.getItem("userEmail");
        const storedHashedPassword = localStorage.getItem("password");
    
        const hashedPassword = sha256(password).toString();
    
        if (email === storedEmail && hashedPassword === storedHashedPassword) {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/dashboard");
        } else {
            setError("Invalid email or password.");
        }
    };
    

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center">
            <div className="w-50">
                <h1 className="text-center mb-4">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="text-danger">{error}</p>}

                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>

                <div className="text-center mt-3">
                    <p>
                        Don't have an account?{" "}
                        <button
                            className="btn btn-link"
                            onClick={() => navigate("/register")}
                        >
                            Sign Up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
