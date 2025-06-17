import React from "react";

import "../style/homepage.css";
import IntroGuj from "../components/BilangComponents/introGuj.jsx";
import IntroEng from "../components/BilangComponents/introEng.jsx";
import LangToggle from "../components/LangToggle.jsx";

function Home() {
  

  return (
    <>
     <LangToggle ComponentA={IntroGuj} ComponentB={IntroEng}/>
    </>
  );
}

export default Home;
