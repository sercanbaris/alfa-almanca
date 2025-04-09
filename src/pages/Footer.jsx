import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-logo">
          <img
            className="footer-logo-svg"
            src="/Original.svg"
            alt="Alfa Almanca Logo"
          />
        </div>
        <div className="footer-links">
          <a className="footer-link" href="/privacy">
            Privacy Policy
          </a>
          <a className="footer-link" href="/terms">
            Terms of Service
          </a>
        </div>
        <div className="footer-sign">
          © 2024 All rights reserved by Alfa Almanca
        </div>
      </div>
    </div>
  );
}

export default Footer;
