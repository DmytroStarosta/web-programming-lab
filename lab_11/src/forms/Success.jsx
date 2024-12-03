import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="success-container">
      <div className="success-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15l-4-4 1.414-1.414L11 13.586l5.586-5.586L18 9l-7 7z" />
        </svg>
      </div>
      <h1 className="success-title">Order Submitted Successfully!</h1>
      <p className="success-message">Thank you for your order. We will process it shortly.</p>
      <Link to="/catalog" className="success-button">Go Back to Catalog</Link>
    </div>
  );
};

export default SuccessPage;
