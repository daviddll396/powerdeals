import React from "react";
import "./navbar.css";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  return (
    <div className="section-container">
      <div className="navbar-container">
        {" "}
        <div className="nav-logo">
          <Fade delay={350}>
            <img src="/public/images/powerdeals-logo.png" alt="" />
          </Fade>
        </div>
        <div className="nav-links">
          <Fade delay={400}>
            {" "}
            <a href="#">Buy Electricity</a>
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
