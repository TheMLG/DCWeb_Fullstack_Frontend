import React from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../../components/gallery.jsx";

function IntroEng() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <section className="introduction">
          <div className="intro-header">
            <h2>Introduction</h2>
          </div>
          <p>
            "Dashnam Circular," curated by LR Goswami, is a vibrant e-magazine
            dedicated to delivering insightful news and updates about the
            Dashnam Goswami Samaj. As a master in CorelDRAW and Photoshop, LR
            Goswami combines artistic flair with informative content, ensuring a
            visually engaging and enlightening experience for the community.
          </p>
        </section>

        <div className="magdiv">
          <h2>Latest Issue</h2>
          <p>
            <marquee>
              Discover this month’s updates, stories, and cultural insights.
            </marquee>
          </p>
          <button className="navbtn" onClick={() => navigate("/mag")}>
            Click here
          </button>
        </div>

        <div className="review">
          <h2>Feedback</h2>
          <p>
            Help us make our magazine even better with your valuable suggestions
            and thoughts. Please share your feedback.
          </p>
          <button className="navbtn" onClick={() => navigate("/review")}>
            Click here
          </button>
        </div>

        <section className="gallery">
          <h2>Gallery</h2>
          {/* <div className="underline"></div> */}
          <div className="gallery-section">
            <Gallery />
          </div>
        </section>
      </div>
    </>
  );
}

export default IntroEng;
