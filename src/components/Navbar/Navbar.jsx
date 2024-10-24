import React from "react";
import "./navbar.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="section-container">
      <div className="navbar-container">
        {" "}
        <div className="nav-logo">
          <Fade delay={350}>
            <Link to="/">
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
      </div>
    </div>
  );
};

export default Navbar;
