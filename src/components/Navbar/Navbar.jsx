import { useState } from "react";
import "./navbar.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("no-scroll", !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="section-container">
      <div className="navbar-container">
        {" "}
        <div className="nav-logo">
          <Fade delay={350}>
            <Link to="/" onClick={closeMenu}>
              <img src="/images/powerdeals-logo.png" alt="" />
            </Link>
          </Fade>
        </div>
        <div className="nav-links">
          <Fade delay={400}>
            {" "}
            <Link to="/buy">Buy Electricity</Link>
          </Fade>
          <Fade delay={450}>
            {" "}
            <a href="#">My History</a>
          </Fade>
          <Fade delay={500}>
            {" "}
            <a href="#">Create Account</a>
          </Fade>
          <Fade delay={550}>
            <a href="#">Refer and Earn</a>
          </Fade>
          <Fade delay={600}>
            {" "}
            <button>Sign In</button>
          </Fade>
        </div>
        <div className="navmobile">
          <div
            className={`menu-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={`nav-links ${isOpen ? "active" : ""}`}>
            <ul>
              <li>
                {" "}
                <Link to="/buy" onClick={closeMenu}>
                  Buy Electricity
                </Link>
              </li>
              <li>
                {" "}
                <a href="#" onClick={closeMenu}>
                  My History
                </a>
              </li>
              <li>
                {" "}
                <a href="#" onClick={closeMenu}>
                  Create Account
                </a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>
                  Refer and Earn
                </a>
              </li>
              <li>
                {" "}
                <button onClick={closeMenu}>Sign In</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
