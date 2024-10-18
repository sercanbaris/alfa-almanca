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
          Gelişmek yenilik demek. <br />
          Online kurs sana zaman ve mekan özgürlüğü veriyor. <br />
          Eğitimlere ve öğretmenlere her yerden erişebilirsin. <br /> Doğru
          öğretmenler ve kurs için kıymetli zamanından günde iki saat yolda
          harcamana gerek yok. <br /> Belki bulunduğun konumda DOĞRU kurs ve
          eğitmen de yoktur.
        </div>
      </div>
      <div className="item item2">
        <div className="f-icon">
          <IoIosTimer />
        </div>
        <div className="f-title">Zaman Sınırı Yok</div>
        <div className="f-parag">
          HAYIR. Sen gerçekten o seviyede olunca kur atlıyorsun. İster 1 ay,
          ister 3 ay, ister 1 yıl, ister 10 yıl sürsün. Sen Almanya'da geçerli
          bir sertifika sınavını istediğin seviyede geçene kadar ekstra ödeme
          almadan yanındayız. <br /> <br /> SONUCA ÖDEME YAPIYORSUN. Senin
          zamanın senin programın kıymetli. Bir sınıfın hızına bağlı olarak,
          ders kaçırarak ve kitap bitince kur bitti diyerek verilen eğitimlere
          KARŞIYIZ.
        </div>
      </div>
      {/* <div className="item item3">
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
      </div> */}
      <div className="item item4">
        <div className="f-icon">
          <AiOutlineSafetyCertificate />
        </div>
        <div className="f-title">Sertifika</div>
        <div className="f-parag">
          TELC, GOETHE, TestDaF, ÖSD, DSH, TestAS, DSD, ... <br /> Bizimle
          beraber istediğin sınavı istediğin seviyede geçene kadar zaman sınırın
          olmadan GERÇEK ALMANCA ve SINAVA YÖNELİK ALMANCA öğrenebilirsin.
          <br /> <br /> Sınava girdin geçemedin? Ekstra ücret almıyor, seni
          sınava açıklarını da kapatarak tekrar hazırlıyoruz. <br /> <br />{" "}
          Vermiş olduğumuz vaatlerin dayanağı bugüne kadar beraber başarıya
          ulaştığımız öğrencilerimizdir. Öğrenci yorumlarımızı Instagram, Google
          Haritalar, YouTube ve Ekşi Sözlük gibi mecralardan inceleyebilirsin.
        </div>
      </div>
    </div>
  );
}

export default Feature;
