import React from "react";
import "../style/adpage.css";
import AdForm from "../components/forms/advertiseForm";
import LangToggle from "../components/LangToggle.jsx"
import AdEng from "../components/BilangComponents/adeng.jsx";
import AdGuj from "../components/BilangComponents/adguj.jsx";
class AdPage extends React.Component {
  render() {
    return (
      <>
       <div className="addis">
        <LangToggle ComponentA={AdGuj} ComponentB={AdEng}/>
       </div>
        <div className="add-fomrheader">
            <h3>Advertisement Form</h3>
        </div>
        <AdForm />
      </>
    );
  }
}

export default AdPage;