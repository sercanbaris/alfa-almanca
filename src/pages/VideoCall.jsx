import "../css/videoCall.css";

function VideoCall() {
  return (
    <div className="videoCall">
      <div className="v-title">
        Öğrenme Yolculuğunuza Bugün Başlayın! Şimdi Çevrimiçi Dil Kursumuza
        Kaydolun
      </div>
      <div className="v-parag">
        <p>
          Yeni bir dil öğrenmek için doğru zaman şimdi!{" "}
          <strong>Çevrimiçi dil kursumuza</strong>
          kaydolarak, dil öğrenme yolculuğunuzu hızlandırabilir ve hedeflerinize
          daha hızlı ulaşabilirsiniz. <strong>5B Metodumuz</strong> sayesinde,
          dil becerilerinizi kapsamlı bir şekilde geliştirme fırsatı
          bulacaksınız: <strong>konuşma, okuma, dinleme, yazma </strong>ve
          ayrıntılı dilbilgisi eğitimi ile donatılan programımız, sınavlara
          hazırlıkta da en büyük yardımcınız olacak.
        </p>
        <p>
          Günlük ve düzenli etkileşim ile dil öğrenmede kalıcı başarı elde edin.
          Esnek ve kişiselleştirilmiş eğitim programlarımızla, zamanınızı en iyi
          şekilde değerlendirerek yeni bir dilde akıcılık kazanabilirsiniz.
          Hemen kaydolun ve başarıya giden yolda ilk adımı atın!
        </p>
      </div>
      <a
        target="blank"
        href="https://api.whatsapp.com/send/?phone=491782483080&text=Merhaba%2C+%C3%BCcretsiz+%C3%B6ng%C3%B6r%C3%BC%C5%9Fme+i%C3%A7in+randevu+alabilir+miyim%3F&type=phone_number&app_absent=0"
        className="v-buton"
      >
        ÜCRETSİZ ÖNGÖRÜŞME İÇİN BAŞVUR
      </a>
    </div>
  );
}

export default VideoCall;
