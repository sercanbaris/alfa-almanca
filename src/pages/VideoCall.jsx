import "../css/videoCall.css";
import { FaWhatsapp } from "react-icons/fa";

function VideoCall() {
  return (
    <div className="videoCall">
      <div className="v-title">
        ALMANCA ÖĞENME İSTEĞİN <br /> İÇİNE TESADÜFEN DOĞMADI
      </div>
      <div className="v-parag">
        <p>
          Bugüne kadar kaç hayalini erteledin? Hayat koşturmacasında hangi güzel
          anları kaçırdın? Bugün kendin için her gün yaptıkların dışında ne
          yaptın?
        </p>
        <p>
          Almanca sadece senin için Almanya'nın kapısını açan bir ANAHTAR olarak
          kalmayacak.
        </p>
        <p>
          İlber Ortaylı'nın da dediği gibi "ALMANCA BİLMEYEN HİÇBİR ŞEY BİLMEZ".
        </p>
        <p>
          Yeni bir dil öğrenmenin farklı kültürlere, ufuklara, dünyalara açılan
          bir kapı olduğunu, zihnimizi dinç tutan bir nimet olduğunu ancak bu
          serüvende olanlar bilir.
        </p>
        <p>
          Almanca bilimin ve felsefenin dilidir. Öğreneceğin her kelimenin seni
          günlük rutininden çıkarması ve kendin için bir şeyler yapmış olmanın
          mutluluğunu vermesi dileğimizle.
        </p>
        <p></p>
      </div>
      <a
        className="ucretsiz-gorusme "
        target="blank"
        href="https://api.whatsapp.com/send/?phone=905054178000&text=Merhaba%2C+%C3%BCcretsiz+%C3%B6ng%C3%B6r%C3%BC%C5%9Fme+i%C3%A7in+randevu+alabilir+miyim%3F&type=phone_number&app_absent=0"
      >
        <FaWhatsapp className="whatsapp" />
        ÜCRETSİZ ÖN GÖRÜŞME İÇİN RANDEVU AL
      </a>
      <p style={{ color: "whitesmoke" }}>
        "Talep yoğunluğu nedeniyle WhatsApp hattımız çökmüştür. Sorun giderilene
        kadar aşağıdaki numaradan ulaşabilirsiniz.""
      </p>
      <a
        className="ucretsiz-gorusme sari"
        target="blank"
        href="https://api.whatsapp.com/send/?phone=905059749000&text=Merhaba%2C+%C3%BCcretsiz+%C3%B6ng%C3%B6r%C3%BC%C5%9Fme+i%C3%A7in+randevu+alabilir+miyim%3F&type=phone_number&app_absent=0"
      >
        <FaWhatsapp className="whatsapp " />
        +90 505 974 90 00
      </a>
    </div>
  );
}

export default VideoCall;
