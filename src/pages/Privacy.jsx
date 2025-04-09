import React from "react";
import "../css/privacy.css";

function Privacy() {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <div className="privacy-section">
          <h2>1. Information Collection</h2>
          <p>
            At Alfa Almanca, we value your privacy. 
            The information collected when you use our website includes:
          </p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Contact information</li>
            <li>Usage statistics</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>2. Use of Information</h2>
          <p>
            The collected information is used for the following purposes:
          </p>
          <ul>
            <li>To provide and improve our services</li>
            <li>To communicate with our users</li>
            <li>To fulfill our legal obligations</li>
            <li>To ensure security</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>3. Information Security</h2>
          <p>
            The security of your personal data is important to us. 
            We take appropriate technical and organizational measures to protect your data.
          </p>
        </div>

        <div className="privacy-section">
          <h2>4. Third-Party Data Sharing</h2>
          <p>
            We do not share your personal information with third parties. Your data is kept strictly confidential 
            and is only used internally to provide you with our services. We do not sell, trade, or otherwise 
            transfer your personally identifiable information to outside parties.
          </p>
          <p>
            This does not include trusted third parties who assist us in operating our website, conducting our business, 
            or servicing you, so long as those parties agree to keep this information confidential and use it only for 
            the specific purposes we have authorized.
          </p>
        </div>

        <div className="privacy-section">
          <h2>5. Cookies</h2>
          <p>
            Our website uses cookies to enhance the user experience. 
            You can manage your cookie preferences through your browser settings.
          </p>
        </div>

        <div className="privacy-section">
          <h2>6. Contact</h2>
          <p>
            If you have any questions about our privacy policy, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy; 