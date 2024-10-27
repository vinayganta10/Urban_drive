import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import Login from './components/auth/login.js';
import Signup from './components/auth/signup.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
          <Route path="/" exact index element={<HomeComponent/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
    </BrowserRouter>
);

