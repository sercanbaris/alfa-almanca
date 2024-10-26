import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../css/hero.css";
import { FaWhatsapp } from "react-icons/fa";

function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoReady = () => {
    setIsLoading(false);
  };

  return (
    <div className="hero">
      <div className="ust">
        <div className="left">
          <a
            className="ucretsiz-gorusme yesil"
            target="blank"
            href="https://api.whatsapp.com/send/?phone=491782483080&text=Merhaba%2C+%C3%BCcretsiz+%C3%B6ng%C3%B6r%C3%BC%C5%9Fme+i%C3%A7in+randevu+alabilir+miyim%3F&type=phone_number&app_absent=0"
          >
            <FaWhatsapp className="whatsapp " />
            +49 178 2483080
          </a>

          <div className="title">
            DERS KAÇIRMA VE ZAMAN SINIRIN OLMADAN ALMANYA'DA GEÇERLİ BİR
            SERTİFİKA SINAVINI GEÇENE KADAR KISA SÜREDE ONLINE{" "}
            <span className="almanca">ALMANCA</span> ÖĞREN
          </div>

          {isLoading && <div className="loading-spinner">Yükleniyor...</div>}

          <ReactPlayer
            width={"100%"}
            height={"500px"}
            className="video"
            url="https://vimeo.com/1004895881"
            controls={true}
            onReady={handleVideoReady}
          />

          <div className="social-media-logo">
            <a target="blank" href="http://www.instagram.com/alican_dayan">
              <img className="social-icons" src="/instagram.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
