import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Car } from "lucide-react";
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Signup.css";

const Signup = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    role:"user"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidEmail = emailRegex.test(formData.email);
    if(formData.password.length>6 && isValidEmail){
        try {
            const response = await axios.post(
              "http://localhost:4000/signup",
              formData,
              {
                headers: { "Content-Type": "application/json" },
              }
            );
      
            if (response.status === 200) {
              toast.success("Account created successfully!,Please login",{autoClose:3000});
              setTimeout(()=>navigate("/login"),2000);
            }
          } catch (error) {
            console.error("Signup failed:", error);
          }
    }
    else if(!isValidEmail){
      toast.warning("Please enter a valid email",{autoClose:3000});
    }
    else{
        toast.warning("Password need to be alteast 8 characters",{autoClose:3000});
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="brand">
          <Car className="brand-icon" />
          <h1>UrbanDrive</h1>
        </div>
        <p className="subtitle">Join us and start your journey</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        <p className="switch-auth">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Signup;
