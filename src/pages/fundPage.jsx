import React from "react";
import FundForm from "../components/forms/fundForm.jsx";
import "../style/fundpage.css";
class FundPage extends React.Component {
  render() {
    return (
      <>
        <div className="fundheader">
          <h2>Fund us</h2>
        </div>
        <div className="fundcontent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            nostrum ad, magni odit provident sint inventore eveniet neque nam
            obcaecati voluptatibus saepe distinctio minima laboriosam et aliquid
            nulla perspiciatis quo alias explicabo mollitia aspernatur tempora.
          </p>
        </div>
        <div className="qr-container">
          <img
            src="/assets/gallery/qr.png"
            alt="QR Code"
            className="qr-image"
          />
          <a
            href="/assets/gallery/qr.png"
            download="qr.png"
            className="download-button"
          >
            Download
          </a>
        </div>
        <div className="fundingform">
          <FundForm />
        </div>
      </>
    );
  }
}

export default FundPage;
