import React from "react";
import AuGuj from "../components/BilangComponents/auGuj";
import AuEng from "../components/BilangComponents/auEng";
import LangToggle from "../components/LangToggle";
const AboutusPage = () => {
  return (
    <>
      <div>
        <LangToggle ComponentA={AuGuj} ComponentB={AuEng} />
      </div>
    </>
  );
};

export default AboutusPage;
