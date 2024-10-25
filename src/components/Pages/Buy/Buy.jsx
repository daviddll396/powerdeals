import "./buy.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

function App() {
  const generateRef = () => {
    const randomNumbers = Math.floor(10000 + Math.random() * 90000).toString();
    return `PDY-${randomNumbers}`;
  };

  const [reference, setReference] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://checkout.itexpay.com/v1.0.0/itexpay-inline-staging-min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const paymentRef = generateRef();

  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const testPay = () => {
    const Pay = new window.ItexPayNS.ItexPay({
      api_key: import.meta.env.VITE_ITEX_API_KEY,
      first_name: "David",
      last_name: "Fagbenja",
      phone_number: phone,
      email: email,
      amount: amount,
      currency: "NGN",
      reference: paymentRef,
      onCompleted: (data) => {
        console.log("Payment completed:", data);
      },
      onError: (error) => {
        console.error("Payment error:", error);
      },
      onClose: () => {
        console.log("Payment widget closed.");
      },
    });

    Pay.init();
  };

  const handleButtonClick = () => {
    const newRef = generateRef();
    setReference(newRef);
  };

  return (
    <Fade delay={250}>
      {" "}
      <div>
        <div className="container">
          <h5 className="heading">
            <span className="icon">
              <svg
                width="21"
                height="35"
                viewBox="0 0 21 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4147 15.5016L5.46232 34.7965C5.41081 34.8617 5.34514 34.9143 5.27027 34.9503C5.19541 34.9863 5.11333 35.0048 5.03026 35.0043C4.94259 35.0065 4.85587 34.9858 4.77868 34.9442C4.66475 34.8856 4.57496 34.789 4.52499 34.6711C4.47502 34.5531 4.46802 34.4214 4.50523 34.2988L8.53593 20.9762H0.540155C0.439159 20.9759 0.34022 20.9476 0.254306 20.8945C0.168391 20.8414 0.0988557 20.7656 0.0534078 20.6754C0.0118821 20.5884 -0.00594109 20.4921 0.00174193 20.396C0.00942494 20.3 0.0423415 20.2077 0.0971603 20.1285L14.6011 0.226525C14.6728 0.127342 14.7757 0.0550704 14.8933 0.0212715C15.0109 -0.0125273 15.1365 -0.0058999 15.2499 0.0400934C15.3633 0.0860868 15.458 0.168788 15.5189 0.274967C15.5797 0.381146 15.6032 0.504666 15.5856 0.625767L13.6659 14.6211H19.9827C20.0852 14.6209 20.1857 14.6495 20.2727 14.7037C20.3597 14.7578 20.4298 14.8353 20.4749 14.9274C20.5194 15.0192 20.5374 15.1216 20.5268 15.2231C20.5162 15.3246 20.4773 15.4211 20.4147 15.5016Z"
                  fill="#DC6C36"
                ></path>
              </svg>
            </span>
            Buy Electricity
          </h5>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              testPay();
            }}
          >
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="meterNumber">
                  Meter Number <span className="required">*</span>
                </label>
                <input type="number" name="meterNumber" id="meterNumber" />
              </div>
              <div className="form-field">
                <label>
                  Disco Company<span className="required">*</span>
                </label>
                <select
                  label="select company"
                  type="button"
                  className="dropdown"
                >
                  <option value="IKEDC">IKEDC</option>
                  <option value="EKEDC">EKEDC</option>
                  <option value="IKEDC">IKEDC</option>
                  <option value="IKEDC">IKEDC</option>
                </select>
              </div>
              <div className="form-field">
                <label>
                  Meter Type<span className="required">*</span>
                </label>
                <select
                  label="select company"
                  type="button"
                  className="dropdown"
                >
                  <option value="IKEDC">Prepaid</option>
                  <option value="EKEDC">Postpaid</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="amount">
                  Amount <span className="required">*</span>
                </label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="submit-button"
              onClick={handleButtonClick}
            >
              Proceed
            </button>
          </form>
        </div>
        {/* <button onClick={() => testPay()}>Pay Now</button>{' '}
    <button onClick={() => checkPaymentStatus()}>Check Status</button> */}
      </div>
    </Fade>
  );
}

export default App;
