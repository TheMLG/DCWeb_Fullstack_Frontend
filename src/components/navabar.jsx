import React from "react";
import "../style/navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="logo">
          <div className="logo"></div>
        </a>
        <a href="/" className="navbar-title">
          <div></div>
        </a>
          <input
            type="checkbox"
            id="navbar-toggle"
            className="navbar-toggle"
            aria-label="Toggle navigation"
          />
          <label htmlFor="navbar-toggle" className="navbar-toggle-label">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </label>
          {/* <div className="navtgl-btn">
        </div> */}

        <ul className="navbar-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/mag">Magazines</a>
          </li>
          <li>
            <a href="/contribute">Contribute</a>
          </li>
          <li>
            <a href="/add">Advertise</a>
          </li>
          <li>
            <a href="/fund">Support</a>
          </li>
          <li>
            <a href="/review">Review</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
