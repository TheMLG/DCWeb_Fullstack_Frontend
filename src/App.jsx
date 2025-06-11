import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navabar.jsx";
import Footer from "./components/footer.jsx";
import HomePage from "./pages/home.jsx";
import Dashboard from "./adminpage/dashboard.jsx";
import Login from "./adminpage/login.jsx";
import ReviewPage from "./pages/reviewPage.jsx";
// import Magazine from "./pages/mag";
// import Fund from "./pages/fund";
// import Addvertisemnt from "./pages/add";
// import Aboutus from "./pages/aboutus";
// import Contribute from "./pages/contribute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/admin"
            element={
              <>
                {!isLoggedIn ? (
                  <Login onLoginSuccess={handleLoginSuccess} />
                ) : (
                  <Dashboard />
                )}
              </>
            }
          />
          <Route path="/review" element={<ReviewPage />} />
          {/* <Route path="/" element={<Home />} />
                 <Route path="/mag" element={<Magazine />} />
                 <Route path="/fund" element={<Fund />} />
                 <Route path="/add" element={<Addvertisemnt />} />
                 <Route path="/review" element={<Review />} />
                 <Route path="/aboutus" element={<Aboutus />} />
                 <Route path="/contribute" element={<Contribute />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
