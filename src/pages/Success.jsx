import React from "react";
import "../css/success.css";
import { FaWhatsapp } from "react-icons/fa";

function Success() {
  return (
    <div className="success">
      <div className="success-title">Başarı Formülümüz: 5 B</div>
      <div className="success-content">
        Dil öğrenmenin anahtarı, günlük ve düzenli olarak bir dille etkileşim
        kurmaktır. ​ Dil sınavına güvenle ve iyi bir duygu ile girebilmen için
        sana bireysel olarak yaklaşıyoruz. 5B metodumuz bunu mümkün kılıyor ve
        bu 5 boyutu içeriyor: konuşma, okuma, dinleme, yazma ve ayrıca her
        modülde kombinasyon halinde işlenen ve nihayetinde bir sınavı başarıyla
        geçmeyi veya bir yabancı dil öğrenmeyi oluşturan ayrıntılı dilbilgisi
        öğretimi.
      </div>
      <div className="success-buton">ÜCRETSİZ ÖNGÖRÜŞME İÇİN BAŞVUR</div>
    </div>
  );
}

export default Success;
