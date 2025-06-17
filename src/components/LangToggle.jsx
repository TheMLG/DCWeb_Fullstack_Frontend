import React, { useState } from "react";
import '../style/langtoggle.css'

function LangToggle({ ComponentA, ComponentB }) {
  const [showComponentA, setShowComponentA] = useState(true);

  const handleToggle = () => {
    setShowComponentA(!showComponentA);
  };

  return (
    <div>
      <div className="checkbox-wrapper-8">
        <input
          type="checkbox"
          id="cb3-8"
          className="tgl tgl-skewed"
          checked={showComponentA}
          onChange={handleToggle}
        />
        <label
          htmlFor="cb3-8"
          data-tg-on="ENG"
          data-tg-off="ગુજ"
          className="tgl-btn"
        ></label>
      </div>
      <div className="lang-content">
        {showComponentA ? <ComponentA /> : <ComponentB />}
      </div>
    </div>
  );
}

export default LangToggle;
