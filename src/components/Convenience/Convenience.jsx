import { useEffect, useState } from "react";

import { Fade } from "react-reveal";
import "./convenience.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Convenience = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [multimeter, setMultimeter] = useState(true);
  const [payforme, setPayforme] = useState(false);
  const [smartrecharge, setSmartrecharge] = useState(false);

  useEffect(() => {
    const Interval = setInterval(() => {
      if (multimeter) {
        payformeActive();
      }

      if (payforme) {
        smartrechargeActive();
      }
      if (smartrecharge) {
        multimeterActive();
      }
    }, 3000);
    return () => {
      clearInterval(Interval);
    };
  }, [multimeter, payforme, smartrecharge]);

  const multimeterActive = () => {
    setMultimeter(true);
    setPayforme(false);
    setSmartrecharge(false);
  };

  const payformeActive = () => {
    setMultimeter(false);
    setPayforme(true);
    setSmartrecharge(false);
  };

  const smartrechargeActive = () => {
    setMultimeter(false);
    setPayforme(false);
    setSmartrecharge(true);
  };

  return (
    <div className="section-container">
      <div className="features-mainText">
        Conveniently pay for electricity from the comfort of your home or office
      </div>

      <div className="features">
        <div className="features-selectors">
          <div className="multimeter-container noSelect">
            <div
              className="multimeter-line"
              style={{
                backgroundColor: multimeter ? "var(--primary)" : "transparent",
              }}
            ></div>
            <div className="multimeter" onClick={multimeterActive}>
              <div
                className="multimeter-mainText"
                style={{
                  color: multimeter ? "var(--primary)" : "var(--default-links",
                }}
              >
                Multi-Meter Management
              </div>
              <div
                className="multimeter-subText"
                style={{ color: multimeter ? "#121212" : "#c4c4c4" }}
              >
                Take control of all your electricity needs from one intuitive
                dashboard. Whether it's your home, office, or any other
                property, seamlessly manage multiple meters with ease and stay
                on top of your energy consumption everywhere.
              </div>
            </div>
          </div>

          <div className="payforme-container noSelect">
            <div
              className="payforme-line"
              style={{
                backgroundColor: payforme ? "var(--primary)" : "transparent",
              }}
            ></div>
            <div className="payforme" onClick={payformeActive}>
              <div
                className="payforme-mainText"
                style={{
                  color: payforme ? "var(--primary)" : "var(--default-links",
                }}
              >
                Pay For me
              </div>
              <div
                className="payforme-subText"
                style={{ color: payforme ? "#121212" : "#c4c4c4" }}
              >
                Need a little help keeping the energy flowing? With our "Power
                Booster" feature, you can securely invite friends or family to
                top up your electricity. Share a unique link and let your
                support network keep you powered up whenever you need it.
              </div>
            </div>
          </div>

          <div className="smartrecharge-container noSelect">
            <div
              className="smartrecharge-line"
              style={{
                backgroundColor: smartrecharge
                  ? "var(--primary)"
                  : "transparent",
              }}
            ></div>

            <div className="smartrecharge" onClick={smartrechargeActive}>
              <div
                className="smartrecharge-mainText"
                style={{
                  color: smartrecharge
                    ? "var(--primary)"
                    : "var(--default-links",
                }}
              >
                Smart Recharge Reminders
              </div>
              <div
                className="smartrecharge-subText"
                style={{ color: smartrecharge ? "#121212" : "#c4c4c4" }}
              >
                Never experience unexpected blackouts again. Our intelligent
                reminder system notifies you ahead of time when it's time to
                recharge, ensuring you always stay connected and powered
                throughout your day.
              </div>
            </div>
          </div>
        </div>
        <div className="features-showing">
          {multimeter && (
            <div className="virtualAccountsimg">
              <Fade duration={300}>
                <img src="/images/multi-meter.svg" />
              </Fade>
            </div>
          )}
          {payforme && (
            <div className="organisationimg">
              <Fade duration={300}>
                <img src="/images/payforme.svg" />
              </Fade>
            </div>
          )}

          {smartrecharge && (
            <div className="payoutsimg">
              <Fade duration={300}>
                <img src="/images/recharge.svg" />
              </Fade>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Convenience;
