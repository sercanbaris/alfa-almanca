import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <img className="logo" src="/Original.svg" alt="" />
      <div className="menu">
        <a className="link" href="#">
          Ana Sayfa
        </a>
        <a className="link" href="#">
          Hakkımızda
        </a>
        <a className="link" href="#">
          Yorumlar
        </a>

        <a className="link" href="#">
          İletişim
        </a>
      </div>
      <div className="social-media">
        <a
          target="blank"
          href="https://api.whatsapp.com/send/?phone=491782483080&text=Merhaba%2C+%C3%BCcretsiz+%C3%B6ng%C3%B6r%C3%BC%C5%9Fme+i%C3%A7in+randevu+alabilir+miyim%3F&type=phone_number&app_absent=0"
        >
          <button className="whatsappCall">+49 178 2483080</button>
        </a>
      </div>
    </div>
  );
}

export default Header;
