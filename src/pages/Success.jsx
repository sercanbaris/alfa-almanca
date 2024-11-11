import "../css/success.css";
import { FaWhatsapp } from "react-icons/fa";

function Success() {
  return (
    <div className="success">
      <div className="success-title">
        Dil Öğrenmenin Anahtarı: <br />
        <strong>5B Metodumuzla</strong>
        Başarıya Ulaşın
      </div>
      <div className="success-content">
        <p>
          Dil öğrenmede başarının sırrı, günlük ve düzenli olarak dil ile
          etkileşim kurmaktan geçer. <strong>5B Metodumuz,</strong> dil
          sınavlarına güvenle hazırlanmanızı sağlamak için size bireysel olarak
          yaklaşır. Bu yöntem, dil becerilerinizi geliştiren 5 temel boyutu
          içerir: konuşma, okuma, dinleme, yazma ve her modülde kombinasyon
          halinde işlenen, sınavları geçmek veya bir dili akıcı şekilde öğrenmek
          için gerekli olan detaylı dilbilgisi.
        </p>
        <p>
          Bu benzersiz yaklaşım sayesinde, sadece dil sınavlarını başarıyla
          geçmekle kalmaz, aynı zamanda dil öğrenme sürecini de keyifli ve
          etkili hale getirirsiniz. <strong>5B Metodumuz,</strong> kapsamlı bir
          dil eğitimi sunarak uzun vadede başarıya ulaşmanıza yardımcı olur.
        </p>
      </div>
      <a
        className="ucretsiz-gorusme yesil"
        target="blank"
        href="https://api.whatsapp.com/send/?phone=905054178000&text=Merhaba%2C+%C3%BCcretsiz+%C3%B6ng%C3%B6r%C3%BC%C5%9Fme+i%C3%A7in+randevu+alabilir+miyim%3F&type=phone_number&app_absent=0"
      >
        <FaWhatsapp className="whatsapp" />
        ÜCRETSİZ ÖN GÖRÜŞME İÇİN RANDEVU AL
      </a>
    </div>
  );
}

export default Success;
