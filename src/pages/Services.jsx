import React from "react";
import "../css/services.css";

function Services() {
  return (
    <div className="service-container">
      <h1 className="service-title">Services</h1>
      <div className="services">
        <div className="services-lane">
          <div className="level-container">
            <div className="level">A1</div>
          </div>
          <div className="level-container">
            <div className="level">A2</div>
          </div>
          <div className="level-container">
            <div className="level">B1</div>
          </div>
        </div>

        <div className="services-lane">
          <div className="level-container">
            <div className="level">B2</div>
          </div>
          <div className="level-container">
            <div className="level">C1</div>
          </div>
          <div className="level-container">
            <div className="level">C2</div>
          </div>
        </div>

        {/* <img
        src="https://cdn.prod.website-files.com/63eca4d199772038e357f01c/65d891a50b03373ebdae0c86_shake%2024.svg"
        alt="SVG"
      /> */}
      </div>
    </div>
  );
}

export default Services;
