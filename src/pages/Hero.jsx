import React from "react";
import ReactPlayer from "react-player";
import "../css/hero.css";
import Vimeo from "@u-wave/react-vimeo";

function Hero() {
  return (
    <div className="hero">
      <div className="ust">
        {" "}
        <div className="left">
          <div className="title">
            Ders Kaçırma ve Zaman Sınırın Olmadan{" "}
            <span className="almanca">ALMANCA</span> ÖĞREN
          </div>
          <div className="description">
            Yoğun bir programın mı var? Almanca öğrenmek istiyorsun ama zaman
            bulmakta zorlanıyor musun? Artık ders kaçırma derdi olmadan, esnek
            saatlerle Almanca öğrenmeye başlayabilirsin!
            <br />
            <br />
            Almanca kurslarımız sayesinde istediğin zaman, istediğin yerde
            derslere katılabilir, kendi hızında öğrenme fırsatını
            yakalayabilirsin. Hem başlangıç seviyesindekiler hem de dilini
            ilerletmek isteyenler için ideal! Üstelik özel ders seçeneklerimizle
            birebir eğitim alabilir, eksiklerini hızla kapatabilirsin.
          </div>

          <div className="slogan">
            Neden Bizi Tercih Etmelisin?
            <ul>
              <li>
                Esnek Ders Saatleri: Dilediğin zaman dersi başlat, dilediğin
                kadar çalış!{" "}
              </li>

              <li>
                Özel Ders Seçenekleri: Birebir eğitimle dil becerilerini hızla
                geliştir.
              </li>
              <li>
                Online Erişim: Mobil, tablet veya bilgisayar üzerinden kolayca
                erişim.
              </li>
              <li>
                Uzman Eğitmenler: Deneyimli eğitmenlerimiz ile hedeflerine hızla
                ulaş.
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          {/* <ReactPlayer
          style={{ borderRadius: "50px" }}
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        /> */}

          {/* <video
            poster="./images/video-cover.png"
            className="tanitim-video"
            controls
          >
            <source src="./video/alfa-almanca.mp4" type="video/mp4" />
          </video> */}
          <Vimeo video={58479} width={640} height={480} autoplay />

          <div className="social-media-logo">
            <img className="social-icons" src="/instagram.png" alt="" />
            <img className="social-icons" src="/whatsapp.png" alt="" />
            <img className="social-icons" src="/google-maps.png" alt="" />
            <img className="social-icons eksi" src="/eksisozluk.jpeg" alt="" />
          </div>
        </div>
      </div>
      {/* <div className="alt"></div> */}
    </div>
  );
}

export default Hero;
