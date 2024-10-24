import "./footer.css";
import { FaArrowRight } from "react-icons/fa";
import { LiaPhoneSolid } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="section-container">
        <div className="footer-inner">
          <div className="footer-top-flex">
            <div className="footer-text">
              <div className="footer-maintext">Keep the Lights On</div>
              <div className="footer-subtext">
                Power Deals is the simple way to get it done. Enter your meter
                number to get started.
              </div>
            </div>

            <div className="footer-input">
              <input type="text" placeholder="Enter your meter number" />
              <div className="arrow-box">
                <FaArrowRight className="input-icon" />
              </div>
            </div>
          </div>
          <div className="footer-logo">
            <img
              src="/public/images/powerdeals-logo.png"
              alt=""
              className="footer-logo-img"
            />
          </div>
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-header">Contact Us</div>
              <a href="#">
                {" "}
                <LiaPhoneSolid />
                <span>070022554839</span>
              </a>
              <a href="#">
                <AiOutlineMail />
                <span>customercare@iisysgroup.com</span>
              </a>
              <a href="#">
                <AiOutlineMail />
                <span>powerdeals@iisysgroup.com</span>
              </a>
            </div>
            <div className="footer-section">
              <div className="footer-header">Services</div>
              <a href="#">Buy Electricity</a>
              <div className="comingsoon">
                <span>Buy Airtime</span>
              </div>
              <div className="comingsoon">
                {" "}
                <span>Buy Data</span>
              </div>
              <div className="comingsoon">
                {" "}
                <span>Recharge TV</span>
              </div>
            </div>
            <div className="footer-section">
              <div className="footer-header">Legal</div>
              <a href="#">Terms and Conditions</a>
            </div>
            <div className="footer-section">
              <div className="footer-header">Socials</div>

              <a href="#">
                <FaXTwitter />
                <span>Twitter</span>
              </a>
              <a href="#">
                <FaInstagram /> <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          © 2024 PowerDeals. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
