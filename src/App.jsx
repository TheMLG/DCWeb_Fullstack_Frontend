import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navabar.jsx";
import Footer from "./components/footer.jsx";
import HomePage from "./pages/home.jsx";
import Dashboard from "./adminpage/dashboard.jsx";
import Login from "./adminpage/login.jsx";
import ReviewPage from "./pages/reviewPage.jsx";
import ContributePage from "./pages/contributePage.jsx";
import FundPage from "./pages/fundPage.jsx";
import AdPage from "./pages/adPage.jsx";
import MagPage from "./pages/magazine.jsx";
import AboutusPage from "./pages/aboutus.jsx";

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

          <Route path="/review" element={<ReviewPage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/fund" element={<FundPage />} />
          <Route path="/add" element={<AdPage />} />
          <Route path="/mag" element={<MagPage />} />
          <Route path="/aboutus" element={<AboutusPage />} />
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
