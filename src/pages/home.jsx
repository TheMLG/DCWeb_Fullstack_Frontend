import React, { useState } from "react";
import "../style/homepage.css";
import IntroGuj from "../components/BilangComponents/introGuj.jsx";
import IntroEng from "../components/BilangComponents/introEng.jsx";
import Gallery from "../components/gallery.jsx";

function Home() {
  const [showIntroGuj, setShowIntroGuj] = useState(true);

  const handleLanguageChange = (lang) => {
    setShowIntroGuj(lang === "guj");
  };

  const Lang = () => {
    return (
      // From Uiverse.io by Shoh2008
      <div className="checkbox-wrapper-8">
        <input
          type="checkbox"
          id="cb3-8"
          className="tgl tgl-skewed"
          checked={showIntroGuj}
          onChange={() => handleLanguageChange(showIntroGuj ? "eng" : "guj")}
        />
        <label
          htmlFor="cb3-8"
          data-tg-on="ENG"
          data-tg-off="ગુજ"
          className="tgl-btn"
        ></label>
      </div>
    );
  };

  return (
    <>
      <div className="main">
        <section className="introduction">
          <div className="intro-header">
            <h2>Introduction</h2>
            <Lang />
          </div>
          {/* <div className="underline"></div> */}
          <div className="intro-content">
            {showIntroGuj ? <IntroGuj /> : <IntroEng />}
          </div>
        </section>
        <section className="updates">
          <h2>Latest Updates</h2>
          {/* <div className="underline"></div> */}
          <article>
            <p>
             <marquee className="updatestxt">will be issued on 1st day of next month</marquee>
            </p>
          </article>
        </section>
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

export default Home;
