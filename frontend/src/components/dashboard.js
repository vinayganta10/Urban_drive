import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import "../Styles/Dashboard.css"

const Dashboard = () => {
  const rentalData = [
    { month: 'Jan', rentals: 30 },
    { month: 'Feb', rentals: 45 },
    { month: 'Mar', rentals: 60 },
    { month: 'Apr', rentals: 80 },
    { month: 'May', rentals: 50 },
    { month: 'Jun', rentals: 70 },
  ];

  const availableCars = [
    { name: 'Sedan', value: 400 },
    { name: 'SUV', value: 300 },
    { name: 'Truck', value: 100 },
    { name: 'Convertible', value: 100 },
  ];

  const colors = ['#2E5266FF', '#6C5B7B', '#355C7D', '#F67280'];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Car Rental Dashboard</h1>

      <div className="chart-container">
        <div className="bar-chart">
          <h2>Monthly Rentals</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={rentalData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="rentals" fill="#2E5266FF" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="pie-chart">
          <h2>Available Cars</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={availableCars} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {availableCars.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="line-chart">
        <h2>Rental Revenue</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={rentalData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="rentals" stroke="#2E5266FF" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
