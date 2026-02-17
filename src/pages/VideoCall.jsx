import "../css/videoCall.css";
import { FaWhatsapp } from "react-icons/fa";


function VideoCall({ whatsAppLink }) {
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
            className="ucretsiz-gorusme gradientWhatsapp"
            target="blank"
            href={whatsAppLink}
          >
            <FaWhatsapp className="whatsapp" />
            ÜCRETSİZ ÖN GÖRÜŞME İÇİN RANDEVU AL
          </a>
    </div>
  );
}

export default VideoCall;
