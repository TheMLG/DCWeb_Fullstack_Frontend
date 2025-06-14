import React from "react";
import "../style/adpage.css";
import AdForm from "../components/forms/advertiseForm";

class AdPage extends React.Component {
  render() {
    return (
      <>
        <section className="submission-form-section">
          <h2>Submit Your Advertisements</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            sed, ullam asperiores impedit nemo iure libero ad saepe assumenda
            fugiat.
          </p>
        </section>
        <div className="fomrheader">
            <h2>Advertisement Form</h2>
        </div>
        <AdForm />
      </>
    );
  }
}

export default AdPage;