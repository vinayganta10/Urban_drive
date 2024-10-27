import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { CreditCard, Shield } from 'lucide-react';
import "../../Styles/PaymentComponent.css"

const PaymentComponent = () => {
  const location = useLocation();
  const { car } = location.state || {};
  const [showQRCode, setShowQRCode] = useState(false);
  
  const upiLink = `upi://pay?pa=shivasaisripada612@ibl&pn=UrbanDrive&am=${car?.car_price || 0}&cu=INR`;

  const handlePayment = () => {
    setShowQRCode(true);
  };

  return (
    <div className="pc-container">
      <div className="pc-content">
        <div className="pc-header">
          <h1>UrbanDrive</h1>
          <p>Complete your payment here</p>
        </div>

        <div className="pc-payment-details">
          <div className="pc-amount-card">
            <h2>Payment Summary</h2>
            <div className="pc-amount-row">
              <span>Car Rental Fee</span>
              <span className="pc-amount">₹{car?.car_price || 0}</span>
            </div>
            <div className="pc-amount-row total">
              <span>Total Amount</span>
              <span className="pc-amount">₹{car?.car_price || 0}</span>
            </div>
          </div>

          <div className="pc-payment-method">
            <h2>Payment Method</h2>
            <button className="pc-pay-button" onClick={handlePayment}>
              <CreditCard className="pc-button-icon" />
              Pay Now
            </button>
          </div>

          {showQRCode && (
            <div className="pc-qr-section">
              <h3>Scan QR Code to Pay</h3>
              <div className="pc-qr-container">
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={upiLink}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <div className="pc-security-note">
                <Shield className="pc-shield-icon" />
                <p>Secure Payment Gateway</p>
              </div>
            </div>
          )}
        </div>

        <div className="pc-info-section">
          <div className="pc-info-card">
            <h3>Secure Payment</h3>
            <p>Your payment information is encrypted and secure</p>
          </div>
          <div className="pc-info-card">
            <h3>24/7 Support</h3>
            <p>Our support team is always available to help</p>
          </div>
          <div className="pc-info-card">
            <h3>Easy Refund</h3>
            <p>Hassle-free refund process if needed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;