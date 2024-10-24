import "./why.css";
import { HiOutlineHashtag } from "react-icons/hi";

const Why = () => {
  return (
    <div className="section-container">
      <div className="why-container">
        <div className="flex-top">
          <div className="why-header">Why PowerDeals?</div>
          <div className="why-box">
            <HiOutlineHashtag className="why-hash" />

            <div className="why-text">
              <div className="why-main">Virtual Accounts</div>
              <div className="why-sub">
                Effortlessly keep your lights on by transferring funds to your
                personalized virtual account. Sit back as we instantly convert
                your deposit into electricity tokens delivered straight to
                you—no extra steps, no hassle.
              </div>
            </div>
          </div>
        </div>
        <div className="flex-mid">
          <div className="why-box">
            <HiOutlineHashtag className="why-hash" />

            <div className="why-text">
              <div className="why-main">Pay with USSD</div>
              <div className="why-sub">
                Recharge electricity without internet. Dial the ussd code and
                you are good to go
              </div>
            </div>
          </div>
          <div className="why-box">
            <HiOutlineHashtag className="why-hash" />

            <div className="why-text">
              <div className="why-main">24/7 Customer Support</div>
              <div className="why-sub">
                We are available day and night to answer all your questions and
                resolve any issues you may have
              </div>
            </div>
          </div>
        </div>
        <div className="flex-bot">
          <div className="why-box">
            <HiOutlineHashtag className="why-hash" />

            <div className="why-text">
              <div className="why-main">Pay Less for More</div>
              <div className="why-sub">
                Save more on fees paid on your electricity units purchase
              </div>
            </div>
          </div>
          <div className="why-box">
            <HiOutlineHashtag className="why-hash" />

            <div className="why-text">
              <div className="why-main">Super Fast Purchase Process</div>
              <div className="why-sub">
                Top up your electricity in 3 simple steps
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
