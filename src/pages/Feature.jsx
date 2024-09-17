import React from "react";
import "../css/feature.css";
import { RiPresentationLine } from "react-icons/ri";
import { IoIosTimer } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

function Feature() {
  return (
    <div className="feature">
      <div className="item item1">
        <div className="f-icon">
          <RiPresentationLine />
        </div>
        <div className="f-title">Online Kurs</div>
        <div className="f-parag">
          Çevrimiçi kurslarımız, konforlu bir ortamda öğrenmeyi mümkün kılar.
          Uzman eğitmenlerimizle interaktif derslerimize hemen katılın ve yeni
          beceriler kazanın.
        </div>
      </div>
      <div className="item item2">
        <div className="f-icon">
          <IoIosTimer />
        </div>
        <div className="f-title">Zaman Problemi Yok</div>
        <div className="f-parag">
          Almanca öğrenmek artık zaman kısıtlamalarıyla sınırlı olmak zorunda
          değil. "Alfa Almanca Dil Kursu" ile kurslarınıza kendi hızınızda ve
          istediğiniz zaman erişebilirsiniz. Zamanın size engel olmasına izin
          vermeyin.
        </div>
      </div>
      <div className="item item3">
        <div className="f-icon">
          <IoLocationOutline />
        </div>
        <div className="f-title">Konum Problemi Yok</div>
        <div className="f-parag">
          Alfa Almanca Dil Kursu ile coğrafi konumunuz artık bir sorun değil.
          Derslerimizi çevrimiçi olarak sunuyoruz, bu da öğrenmeye nerede
          olursanız olun devam edebileceğiniz anlamına geliyor. Özgürlüğün
          tadını çıkarın ve her yerden Almanca öğrenmeye başlayın.
        </div>
      </div>
      <div className="item item4">
        <div className="f-icon">
          <AiOutlineSafetyCertificate />
        </div>
        <div className="f-title">Sertifikasyon</div>
        <div className="f-parag">
          Almanya'da geçerli bir sertifika sınavını (örneğin, telc, TestDaF,
          ÖSD, DSH, Goethe, vb.) istediğiniz seviyede geçmek için Almanca
          öğrenmeye başlayın. "Alfa Almanca Dil Kursu" ile, sertifikasyon
          hedefinizi gerçekleştirmenize yardımcı oluyoruz.
        </div>
      </div>
    </div>
  );
}

export default Feature;
