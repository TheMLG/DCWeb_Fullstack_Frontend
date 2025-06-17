import React from "react";
import '../style/navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <nav className="navbar">
        <div className="logo"></div>
        <div className="navbar-title"></div>
        <button
          className="navbar-toggle"
          aria-label="Toggle navigation"
          onClick={this.toggleMenu}
        >
          &#9776;
        </button>
        <ul className={`navbar-menu${isOpen ? " active" : ""}`}>
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
