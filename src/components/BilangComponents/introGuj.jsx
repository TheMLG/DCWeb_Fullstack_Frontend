import React from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../../components/gallery.jsx";
function IntroGuj() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <section className="introduction">
          <div className="intro-header">
            <h2>પ્રસ્તાવના</h2>
          </div>
          <p>
            "દશનામ સરક્યુલર" લલિતપુરી ગોસ્વામી દ્વારા ક્યુરેટ કરવામાં આવેલું,
            દશનામ ગોસ્વામી સમાજ વિશે માહિતીસભર સમાચાર અને અપડેટ્સ આપવા માટે
            સમર્પિત એક વાઇબ્રન્ટ ઇ-મેગેઝિન છે. જે કલાત્મક ફ્લેરને માહિતીપ્રદ
            સામગ્રી સાથે જોડે છે.
          </p>
        </section>

        <div className="magdiv">
          <h2>લેટેસ્ટ અંક</h2>
          <p>
            <marquee>
              {/* સમાજનું વૈભવ, પરંપરા અને સમાચાર ને એકત્ર કરતી અમારી ઇ-મેગેઝિનની
              દરેક આવૃત્તિ શોધો. */}
              આ મહિનાના અંકમાં પ્રેરણાદાયી લેખો, સાંસ્કૃતિક વિશેષતાઓ અને સમાજ ઉપયોગી માહિતી ની ઝલક માટે...   
            </marquee>
          </p>
          <button className="navbtn" onClick={() => navigate("/mag")}>
            Click here
          </button>
        </div>

        <div className="review">
          <h2>અભિપ્રાય આપો</h2>
          <p>
            તમારા અભિપ્રાય અને સૂચનો અમારું માર્ગદર્શન કરે છે. કૃપા કરીને તમારું
            ફીડબેક આપો.
          </p>
          <button className="navbtn" onClick={() => navigate("/review")}>
            Click here
          </button>
        </div>

        <section className="gallery">
          <h2>ગેલેરી </h2>
          {/* <div className="underline"></div> */}
          <div className="gallery-section">
            <Gallery />
          </div>
        </section>
      </div>
    </>
  );
}

export default IntroGuj;
