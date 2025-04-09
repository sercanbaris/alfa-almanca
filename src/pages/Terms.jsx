import React from "react";
import "../css/terms.css";

function Terms() {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>Terms of Service</h1>
        <div className="terms-section">
          <h2>1. General Provisions</h2>
          <p>
            By using the Alfa Almanca website, you agree to the following terms of service. 
            If you do not agree to these terms, please do not use our website.
          </p>
        </div>

        <div className="terms-section">
          <h2>2. Service Usage</h2>
          <p>
            When using our website, you agree to:
          </p>
          <ul>
            <li>Provide accurate and up-to-date information</li>
            <li>Maintain the security of your account</li>
            <li>Use our services for legal purposes only</li>
            <li>Respect the rights of other users</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>3. Intellectual Property</h2>
          <p>
            All content on our website is the intellectual property of Alfa Almanca. 
            Unauthorized use, copying, or distribution of the content is prohibited.
          </p>
        </div>

        <div className="terms-section">
          <h2>4. Data Protection</h2>
          <p>
            We are committed to protecting your personal information. Your data will not be shared with third parties 
            without your explicit consent, except as required by law. We implement appropriate security measures to 
            protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </p>
        </div>

        <div className="terms-section">
          <h2>5. Disclaimer</h2>
          <p>
            While we strive to ensure the accuracy and timeliness of information on our website, 
            we cannot be held responsible for any incomplete or incorrect information.
          </p>
        </div>

        <div className="terms-section">
          <h2>6. Changes</h2>
          <p>
            We reserve the right to modify these terms of service at any time. 
            Changes will take effect immediately upon publication on our website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms; 