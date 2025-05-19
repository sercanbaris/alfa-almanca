"use server";
import ReactPlayer from "react-player/youtube";
import "../css/hero.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero">
      <div className="ust">
        <div className="left">
          <a
            className="ucretsiz-gorusme yesil"
            target="blank"
            href="https://api.whatsapp.com/send/?phone=905059749000&text=Merhaba%2C+%C3%BCcretsiz+%C3%B6ng%C3%B6r%C3%BC%C5%9Fme+i%C3%A7in+randevu+alabilir+miyim%3F&type=phone_number&app_absent=0"
          >
            <FaWhatsapp className="whatsapp " />
            +90 505 974 90 00
          </a>

          <div className="title">
            DERS KAÇIRMA VE ZAMAN SINIRIN OLMADAN ALMANYA'DA GEÇERLİ BİR
            SERTİFİKA SINAVINI GEÇENE KADAR KISA SÜREDE ONLINE{" "}
            <span className="almanca">ALMANCA</span> ÖĞREN
          </div>

          <ReactPlayer
            width="900px"
            height="500px"
            className="video"
            url="https://www.youtube.com/watch?v=-TVXhTztmtY"
            controls={false}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1, // YouTube logosunu kapatır
                  showinfo: 0, // Video başlığını kapatır (eski API'lerde kullanılırdı, artık etkisiz)
                  rel: 0, // Önerilen videoları kapatır
                  disablekb: 1,
                },
              },
            }}
          />
          <div className="social-media-logo">
            {/* <img className="social-icons" src="/whatsapp.png" alt="" /> */}

           
            <a
              target="blank"
              href="https://www.google.com.tr/maps/place/ALFA+ALMANCA+Y%C3%96NET%C4%B0M+OF%C4%B0S%C4%B0+(KAYIT+OF%C4%B0S%C4%B0+DE%C4%9E%C4%B0LD%C4%B0R)/@38.449037,27.1826559,17z/data=!4m18!1m9!3m8!1s0x14b9636191362b7b:0x21f0df196b32c40e!2zQUxGQSBBTE1BTkNBIFnDlk5FVMSwTSBPRsSwU8SwIChLQVlJVCBPRsSwU8SwIERFxJ7EsExExLBSKQ!8m2!3d38.449037!4d27.1852308!9m1!1b1!16s%2Fg%2F11w3h1276w!3m7!1s0x14b9636191362b7b:0x21f0df196b32c40e!8m2!3d38.449037!4d27.1852308!9m1!1b1!16s%2Fg%2F11w3h1276w?hl=tr&entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D"
            >
              <img
                className="social-icons"
                src="/google-maps.png"
                alt="Alfa Almanca - Google Yorumları"
              />
            </a>
            <a
              target="blank"
              href="https://eksisozluk.com/alfa-almanca--7561051"
            >
              <img
                className="social-icons eksi"
                src="/eksisozluk.jpeg"
                alt="Alfa Almanca - Ekşi Sözlük"
              />
            </a>
          </div>
          <a
            className="ucretsiz-gorusme "
            target="blank"
            href="https://api.whatsapp.com/send/?phone=905059749000&text=Merhaba%2C+%C3%BCcretsiz+%C3%B6ng%C3%B6r%C3%BC%C5%9Fme+i%C3%A7in+randevu+alabilir+miyim%3F&type=phone_number&app_absent=0"
          >
            <FaWhatsapp className="whatsapp" />
            ÜCRETSİZ ÖN GÖRÜŞME İÇİN RANDEVU AL
          </a>

            <a
            style={{ marginTop: '5px' }}
            className="ucretsiz-gorusme gradientInstagram "
            target="blank"
             href="http://www.instagram.com/alican_dayan"
          >
            
            <FaInstagram className="whatsapp" />
            INSTAGRAM'DAN TAKİP ET
          </a>
    
          <div className="description">
            Kendimizi, Türkçe konuşan insanları başarılı bir şekilde hedeflerine
            ulaştıran Almanya'da kurulmuş ilk online Almanca kursu olarak
            görüyoruz.
          </div>

          <div className="slogan-container">
            <div className="slogan">
              <span className="slogan-title">ÖĞRENME GARANTİSİ</span>
              <ul>
                <li>
                  ✅ Zaman sınırın yok. (Kitap bitti diye kur bitmiyor, sen
                  gerçekten seviyeyi tamamlayana kadar ekstra ücret ödemeden
                  öğreniyorsun.)
                </li>

                <li>✅ Ders kaçırma problemin yok.</li>
                <li>
                  ✅ Bir sınıfın hızına değil, kendi hızına bağlı olarak Almanca
                  öğreniyorsun.
                </li>
                <li>
                  ✅ Hem GERÇEK ALMANCA hem de İSTEDİĞİN SINAVA YÖNELİK
                  Almanca'yı bir arada götürüyorsun.
                </li>
                <li>
                  ✅ Sadece bir öğretmen değil her kurda birden fazla
                  öğretmenden destek alabiliyorsun.
                </li>
                <li>
                  ✅ EĞİTİM PLATFORMU ve CANLI DERSLERDEN istediğin zaman
                  faydalanabiliyorsun.
                </li>
                <li>
                  ✅ SİSTEMATİK, BEYİN DOSTU, ALMAN EĞİTİM EKOLÜ İLE ÜRETİLMİŞ,
                  DİSİPLİN gerektiren bir sisteme sahip oluyorsun.
                </li>
              </ul>
            </div>
          </div>

          <div className="description">
            <strong className="bold-text">
              TÜM BUNLARIN YANINDA ÖĞRENCİLERİMİZLE SAMİMİ BİR İLİŞKİ
              İÇERİSİNDEYİZ, GÜCÜMÜZÜ ONLARDAN ALIYOR, BAŞARILARINI BAŞARIMIZ
              SAYIYOR, HEDEFLERİNE ULAŞANA KADAR ve SONRASINDA DA YANLARINDA
              OLUYORUZ.
            </strong>
            <br />
            <br />
            Her bir öğrencimiz ile kayıt olmadan önce görüntülü ücretsiz bir{" "}
            öngörüşmede tanışıyor, tüm sistemimizi detayları ile anlatıyoruz.
            <br />
            <br />
          </div>
        </div>
      </div>
      {/* <div className="alt"></div> */}
    </div>
  );
}

export default Hero;
