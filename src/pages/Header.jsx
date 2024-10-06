import "../css/header.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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
        <FaInstagram className="social-icon" />
        <FaWhatsapp className="social-icon" />
      </div>
    </div>
  );
}

export default Header;
