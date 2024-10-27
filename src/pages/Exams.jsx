import "../css/exams.css";
import { AiFillSafetyCertificate } from "react-icons/ai";

function Exams() {
  return (
    <div className="exams-container">
      <div className="exams">
        <div className="exams-title">
          <AiFillSafetyCertificate />
          Almanya&apos;da Tanınan Dil Sınavları
        </div>
        <div className="exams-desc">
          Uzmanlığımız, öğrencilerimize Almanca’yı en yeni öğretim yöntemleriyle
          zaman problemi olmadan ve sonuç odaklı bir şekilde öğretmek ve onları
          Almanya’da tanınan dil sınavlarına hazırlamaktır.
          <br />
          <br />
          Almanya'da tanınan dil sınavları, özellikle Almanca dil yeterliliğini
          ölçmek için birçok seçenek sunar. İşte en bilinen ve yaygın olarak
          kabul edilen dil sınavları:
          <ol>
            <li>
              <strong>telc (The European Language Certificates): </strong>
              telc, farklı seviyelerde dil yeterliliğini ölçen uluslararası bir
              sınavdır. Genel Almanca ve mesleki Almanca gibi farklı alanlarda
              sertifikalar sunarak, çeşitli kariyer hedeflerine ulaşmak
              isteyenlere yardımcı olur.
              <br /> <br />
            </li>
            <li>
              <strong>Goethe-Zertifikat:</strong> Goethe Enstitüsü tarafından
              düzenlenen Goethe-Zertifikat, A1 seviyesinden C2 seviyesine kadar
              dil yeterliliğini ölçer. Bu sınav, genel dil bilgisi ve akademik
              dil becerileri için geçerlidir. Almanya'da yüksek öğrenim görmek
              veya iş bulmak isteyenler için yaygın olarak tercih edilmektedir.
              <br /> <br />
            </li>
            <li>
              <strong>TestDaF:</strong> TestDaF, uluslararası öğrencilerin
              Almanya'da üniversite eğitimi alabilmesi için gerekli dil
              yeterliliğini ölçen bir sınavdır. Bu sınav, özellikle akademik
              ortamlarda başarılı olmak için gereken Almanca dil bilgisine
              odaklanır ve birçok üniversite tarafından kabul edilmektedir.
              <br /> <br />
            </li>
            <li>
              <strong>
                DSH (Deutsche Sprachprüfung für den Hochschulzugang):
              </strong>{" "}
              DSH, Almanya'daki üniversitelere giriş için gerekli olan bir dil
              sınavıdır. Genellikle üniversitelerin kendileri tarafından
              düzenlenen bu sınav, yüksek öğrenim için gereken dil yeterliliğini
              ölçmektedir.
              <br /> <br />
            </li>

            <li>
              <strong>ÖSD (Österreichisches Sprachdiplom Deutsch):</strong>{" "}
              Avusturya merkezli olan ÖSD sınavı, Almanya'da da kabul
              edilmektedir. A1'den C2'ye kadar farklı seviyelerde dil
              yeterliliğini ölçen bu sınav, uluslararası geçerliliği ile öne
              çıkmaktadır.
              <br /> <br />
            </li>
          </ol>
        </div>
        <div className="brands">
          <div className="brand">
            <img className="brand-pic" src="/telc.png" alt="" />
            <span className="brand-name">
              The European Language Certificates
            </span>
          </div>

          <div className="brand">
            <img
              className="brand-pic"
              src="/goethe.png"
              alt="Goethe Institut"
            />
            <span className="brand-name">Goethe Institut</span>
          </div>
          <div className="brand">
            <img
              className="brand-pic"
              src="/TestDaF.png"
              alt="Test Deutsch als Fremdsprache"
            />
            <span className="brand-name">Test Deutsch als Fremdsprache</span>
          </div>
          <div className="brand">
            <img
              className="brand-pic"
              src="/DSH.png"
              alt="Deutsche Sprachprüfung für den Hochschulzugang"
            />
            <span className="brand-name">
              Deutsche Sprachprüfung für den Hochschulzugang
            </span>
          </div>
          <div className="brand">
            <img
              className="brand-pic"
              src="/OSD.png"
              alt="Österreichisches Sprachdiplom Deutsch"
            />
            <span className="brand-name">
              Österreichisches Sprachdiplom Deutsch
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exams;
