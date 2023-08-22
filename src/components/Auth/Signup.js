import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api";
import { useAuth } from "../../Dashboard/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signupNavigate = useNavigate();
  const { signIn } = useAuth();

  const handleSignup = async () => {
    try {
      await signup(email, password);
      signIn();
      signupNavigate("/");
    } catch (error) {}
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Sign Up</div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter a fake email address"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password must be at least 8 characters long."
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="button"
                onClick={handleSignup}
                className="btn btn-primary"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
