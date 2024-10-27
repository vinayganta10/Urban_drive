import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import Login from './components/auth/login.js'; 
import Signup from './components/auth/signup.js';
import Service from './components/Service.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import AdminDashboard from './components/AdminDashboard.js';
import AddCar from './components/AddCar.js';
import EditCar from './components/EditCar.js';
import Dashboard from './components/Dashboard.js';
import AdminProfile from './components/AdminProfile.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
          <Route path="/" exact index element={<HomeComponent/>} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/service" element = {<Service/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          <Route path = "/admin" element = {<AdminDashboard/>}/>
          <Route path = "/admin/edit" element = {<EditCar/>}/>
          <Route path = "/admin/add" element = {<AddCar/>}/>
          <Route path = "/admin/dashboard" element = {<Dashboard/>}/>
          <Route path = "/admin/profile" element = {<AdminProfile/>}/>
        </Routes>
    </BrowserRouter>
    
);

