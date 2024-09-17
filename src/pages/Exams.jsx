import React from "react";
import "../css/exams.css";

function Exams() {
  return (
    <div className="exams-container">
      <div className="exams">
        <div className="exams-title">Almanya'da Tanınan Dil Sınavları</div>
        <div className="exams-desc">
          Uzmanlığımız, öğrencilerimize Almanca’yı en yeni öğretim yöntemleriyle
          zaman problemi olmadan ve sonuç odaklı bir şekilde öğretmek ve onları
          Almanya’da tanınan dil sınavlarına hazırlamaktır.
        </div>
        <div className="brands">
          <div className="brand">
            <img className="brand-pic" src="/telc.png" alt="" />
          </div>
          <div className="brand">
            <img className="brand-pic" src="/goethe.png" alt="" />
          </div>
          <div className="brand">
            <img className="brand-pic" src="/TestDaF.png" alt="" />
          </div>
          <div className="brand">
            <img className="brand-pic" src="/DSH.png" alt="" />
          </div>
          <div className="brand">
            <img className="brand-pic" src="/OSD.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exams;
