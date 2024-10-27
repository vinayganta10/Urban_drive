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
        </Routes>
    </BrowserRouter>
);

