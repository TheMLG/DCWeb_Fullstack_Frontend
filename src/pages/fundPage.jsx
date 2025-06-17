import React, { Component } from "react";
import FundForm from "../components/forms/fundForm.jsx";
import "../style/fundpage.css";
import LangToggle from "../components/LangToggle.jsx";
import FundEng from "../components/BilangComponents/fundeng.jsx";
import FundGuj from "../components/BilangComponents/fundguj.jsx";
class FundPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQR: false,
    };
  }

  toggleQR = () => {
    this.setState((prevState) => ({
      showQR: !prevState.showQR,
    }));
  };

  render() {
    return (
      <>
        <div className="funddis">
          <LangToggle ComponentA={FundGuj} ComponentB={FundEng}/>
          <button className="donate-now-button" onClick={this.toggleQR}>
            {this.state.showQR ? "Hide QR" : "Donate Now"}
          </button>
        </div>
        {this.state.showQR && (
          <div className="qr-container">
            <img
              src="/assets/gallery/qr.png"
              alt="QR Code"
              className="qr-image"
            />
            <a href="/assets/gallery/qr.png" download="qr.png" className="download-button">
              Download
            </a>
          </div>
        )}
        <div className="fundheader">
          <h3>Your Information</h3>
        </div>
        <FundForm />
     
      </>
    );
  }
}

export default FundPage;
