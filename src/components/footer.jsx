import React from "react";
import "../style/footer.css";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaTelegram,
  FaGoogleDrive,
} from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="visitor-count">
          Visitors Count: <span id="visitorCount">0</span>
        </div>
        <div className="footer-links">
          <div className="social-links">
            <a
              href="https://chat.whatsapp.com/JetVbaUVzpFLD610lGk9hc"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FaWhatsapp className="fticon" /> Join our WhatsApp Group
            </a>
            <a
              href="https://t.me/dashnamcircular"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-link"
            >
              <FaTelegram className="fticon" /> Join our Telegram
            </a>
            <a
              href="https://drive.google.com/drive/folders/10J5PZTcLXgiiFdmi0rd4kHr1LAyrdJeV?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="googledrive-link"
            >
              <FaGoogleDrive className="fticon" /> Google Drive
            </a>
          </div>
          <div className="contact-info">
            <p>Contact us:</p>
            <p>
              <FaEnvelope className="fticon" /> : dashnamcircular@gmail.com
            </p>
            <p>
              <FaPhone className="fticon" /> : +91 9898550833
            </p>
            <p>
              <FaPhone className="fticon" /> : +91 9724410375
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
