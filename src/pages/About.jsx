import "../css/about.css";

function About() {
  return (
    <div className="about-container">
      <div className="about">
        <div className="about-picture">
          <img className="about-pic" src="/alican.jpg" alt="Alican Dayan" />
        </div>
        <div className="about-text">
          <div className="about-question">BİZ KİMİZ?</div>
          <div className="about-title">Dijital Almanca Dil Okulu</div>
          <div className="about-description">
            <p>Bir filiz ne ise ağaç ona dönüşür.</p>

            <p>
              ALFA ALMANCA, Almanya'nın Hamburg şehrinde Alican Dayan tarafından
              yanlış ve tamamen para odaklı eğitim sistemlerine KARŞI kurulmuş
              "ÖĞRENCİSİNİ SONUCA GÖTÜRME" odaklı bir sistemdir.
            </p>
            <p>
              ALFA ALMANCA'nın filizi budur ve bugüne kadar yeşeren bu ağaçta şu
              an 50 öğretmen ve 5bin öğrencimiz ile her geçen gün büyümeye devam
              ediyoruz.
            </p>
            <p>
              Bizleri en anlamlı yansıtan ise öğrencilerimizin başarılarıdır.
              Özgüvenimizi ve gururumuzu onlardan alıyoruz.
            </p>
            <p>
              Alican Dayan'ın Instagram hesabı üzerinden sayısız öğrenci
              yorumuna ve başarılarına erişebilirsin.
            </p>
            <a target="blank" href="https://www.instagram.com/alican_dayan/">
              <img
                className="alican-instagram"
                src="/alican-instagram.png"
                alt="Alfa Almanca - Alican Dayan Instagram"
                width={"100%"}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
