import React from "react";
import ReactPlayer from "react-player";
import "../css/hero.css";

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
            Zaman kaybetmeden ve net bir hedef göz önünde bulundurarak
            Almanya'da geçerli bir sertifika sınavını istediğin seviyede geçene
            kadar beyin dostu bir sistemle Almanca öğren. <br /> <br />
            Kendimizi, Türkçe konuşan insanları başarılı bir şekilde hedeflerine
            ulaştıran Almanya'daki ilk tamamen dijital dil okulu olarak
            görüyoruz.
          </div>
          <div className="slogan">
            #ONLINE ALMANCA KURSU Eğitimlere her yerden erişebilirsiniz
          </div>
        </div>
        <div className="right">
          {/* <ReactPlayer
          style={{ borderRadius: "50px" }}
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        /> */}
          <video
            poster="./images/video-cover.png"
            className="tanitim-video"
            controls
          >
            <source src="./video/alfa-almanca.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      {/* <div className="alt">
        <div className="social-media-logo">
          <img className="social-icons" src="/instagram.png" alt="" />
          <img className="social-icons" src="/whatsapp.png" alt="" />
          <img className="social-icons" src="/google-maps.png" alt="" />
          <img className="social-icons" src="/eksisozluk.jpg" alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
