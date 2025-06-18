import React, { useState, useEffect,useRef } from "react";
import "../style/footer.css";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaTelegram,
  FaGoogleDrive,
} from "react-icons/fa";

function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ref to prevent double fetch in Strict Mode
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return; // Prevent double fetch
    hasFetched.current = true;

    const fetchVisitorCount = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/visitor-count`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (err) {
        setError("Failed to fetch visitor count");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchVisitorCount();
  }, []);

  if (loading) {
    return console.log("Loading Visitors count");
  }
  if (error) {
    return console.error("Error in visitors count:", error);
  }

  return (
    <footer>
      <div className="visitor-count">
        Visitors Count: <span id="visitorCount">{visitorCount}</span>
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

export default Footer;
