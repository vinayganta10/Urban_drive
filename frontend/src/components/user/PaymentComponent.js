import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';

const PaymentComponent = () => {
  const { state } = useLocation();
  const amount = state?.totalAmount || 0;
  const [showQR, setShowQR] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const upiLink = `upi://pay?pa=shivasaisripada612@ibl&pn=UrbanDrive&am=${amount}&cu=INR`;

  useEffect(() => {
    let timer: any;

    if (showQR) {
      timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 180) {
            clearInterval(timer);
            return 180;
          }
          if (prev === 120) {
            setShowSuccess(true);
            addToOrders(); // Your order logic
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [showQR]);

  const addToOrders = () => {
    // Implement API call or order creation logic
    console.log("Order added successfully.");
  };

  const handlePay = () => {
    setShowQR(true);
  };

  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, sans-serif'
  };

  const cardStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    background: '#fff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)'
  };

  const headingStyle = {
    color: '#05aa6d',
    fontWeight: 'bold',
    marginBottom: '1rem'
  };

  const buttonStyle = {
    backgroundColor: '#05aa6d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontWeight: 'bold'
  };

  const progressStyle = {
    height: '20px',
    backgroundColor: '#d4edda',
    borderRadius: '5px',
    marginTop: '1rem',
    overflow: 'hidden'
  };

  const progressBarStyle = {
    height: '100%',
    width: `${(progress / 180) * 100}%`,
    backgroundColor: '#05aa6d',
    transition: 'width 1s linear'
  };

  const successAnimStyle = {
    color: '#05aa6d',
    fontSize: '1.5rem',
    marginTop: '1rem',
    fontWeight: 'bold',
    animation: 'fadeIn 1s ease-in'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>
          <i className="bi bi-shield-check me-2"></i>UrbanDrive Payment
        </h2>
        <p className="text-muted">Pay securely with UPI</p>

        <div className="mt-3 mb-3">
          <h5>Amount to Pay: ₹{amount}</h5>
          <button className="btn mt-3" style={buttonStyle} onClick={handlePay}>
            <i className="bi bi-credit-card me-2"></i>Pay Now
          </button>
        </div>

        {showQR && (
          <>
            <div className="mt-4 text-center">
              <h6>Scan to Pay</h6>
              <QRCode value={upiLink} size={180} />
            </div>

            <div style={progressStyle}>
              <div style={progressBarStyle}></div>
            </div>

            {showSuccess && (
              <div style={successAnimStyle}>
                <i className="bi bi-check-circle-fill me-2"></i>Payment Successful!
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentComponent;

