import "./hero.css";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="section-container">
      <div className="hero-container">
        <Fade delay={100}>
          <div className="hero-maintext">
            Seamless <span className="orangetext">Electricity</span> at Your
            Fingertips.
          </div>
        </Fade>
        <Fade delay={250}>
          {" "}
          <div className="hero-subtext">
            PowerDeals allows you to effortlessly purchase and track your
            electricity payments and usage. Stay in control of your power
            consumption with real-time monitoring, all from the comfort of your
            home.
          </div>
        </Fade>
        <Fade delay={300}>
          <div className="input-cta-flex">
            {/* <div className="hero-input">
            <input type="text" placeholder="Enter your meter number" />
            <div className="arrow-box">
              <FaArrowRight className="input-icon" />
            </div>
          </div> */}

            <div className="hero-cta">
              <span>Get Started</span>
              <FaArrowRight className="cta-icon" />
            </div>
          </div>
        </Fade>{" "}
        <div className="hero-dash">
          <Fade delay={350}>
            <img src="/public/images/powerdeals-dash.png" alt="" />{" "}
          </Fade>
        </div>
        <div className="hero-providers-section">
          <div className="providers-header">Partners</div>
          <div className="providers-text">
            Because we promise you the best experience when purchasing
            electricity at all times. To serve you better, we have partnered
            with the most trusted and most efficient service providers.
          </div>

          <div className="hero-providers">
            <div className="provider-card">
              <img src="/public/images/aedc.png" alt="" />
            </div>
            <div className="provider-card">
              <img src="/public/images/eedc.png" alt="" />
            </div>
            <div className="provider-card">
              <img src="/public/images/ie.png" alt="" />
            </div>
            <div className="provider-card">
              <img src="/public/images/kedco.png" alt="" />
            </div>
            <div className="provider-card">
              <img src="/public/images/phedc.png" alt="" />
            </div>
            <div className="provider-card">
              <img src="/public/images/ekedc.png" alt="" />
            </div>
            <div className="provider-card">
              <img src="/public/images/ibedc.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
