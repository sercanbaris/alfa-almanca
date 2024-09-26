import React from "react";
import "../css/about.css";

function About() {
  return (
    <div className="about-container">
      <div className="about">
        <div className="about-picture">
          <img className="about-pic" src="/biz-kimiz.png" alt="" />
        </div>
        <div className="about-text">
          <div className="about-question">BİZ KİMİZ?</div>
          <div className="about-title">Dijital Almanca Dil Okulu</div>
          <div className="about-description">
            <p>
              Alfa Almanca, Almanca öğrenmeye ve kültürünü keşfetmeye tutkulu
              bir ekibin ürünüdür. Misyonumuz, dil eğitimini daha erişilebilir,
              etkili ve eğlenceli hale getirerek herkesin Almanca’yı öğrenme
              şansına sahip olmasını sağlamaktır.
            </p>

            <p>
              Günümüz yoğun hayatında en kıymetli şey zaman. Eğitimlerimiz
              öğrencilerimizin zaman sınırı olmadan, tek rakibi kendileri
              olacağı şekilde, sertifika sınavlarını geçene kadar onlara Almanca
              öğretmek üzerine tasarlandı.
            </p>
            <p>
              Uzman öğretmenlerimiz, deneyimli yönetim ekibimiz ve her
              öğrencinin bireysel gereksinimlerine odaklanan öğrenme
              programlarımızla, Almanca dilini öğrenmek artık daha kolay ve
              keyifli.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
