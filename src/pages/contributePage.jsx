import React, { Component } from "react";
import "../style/contributepage.css";
import ContributeForm from "../components/forms/contributeForm";
import LangToggle from "../components/LangToggle.jsx";
import ContEng from "../components/BilangComponents/conteng.jsx";
import ContGuj from "../components/BilangComponents/contguj.jsx";

class ContributePage extends Component {
  render() {
    return (
      <>
        <div className="condis">
          <LangToggle ComponentA={ContGuj} ComponentB={ContEng} />
        </div>

        <div className="contheader">
          <h3>Contribution Form</h3>
        </div>
        <div className="contform">
          <ContributeForm />
        </div>
      </>
    );
  }
}

export default ContributePage;
