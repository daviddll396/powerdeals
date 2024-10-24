import "./buy.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const generateRef = () => {
    const randomNumbers = Math.floor(10000 + Math.random() * 90000).toString();
    return `PDY-${randomNumbers}`;
  };

  const publicKey =
    "ITXPUB_STAGING_N9OSLGOKR2WT6KNKMRPHI0TNDZF3FEMCFDUO2PFN-6011000252-04GPRVVTV0CPUVD";

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

  const checkPaymentStatus = async () => {
    const paymentId = "ITX662182491729634251752";

    console.log("payin");
    const url = `https://staging.itexpay.com/api/v1/transaction/charge/status?publickey="${publicKey}"&paymentid=${paymentId}`;

    try {
      const response = await axios.get(url);
      console.log("Payment status response:", response.data);
    } catch (error) {
      console.error("Error fetching payment status:", error);
    }
  };

  const paymentRef = generateRef();

  const testPay = () => {
    const Pay = new window.ItexPayNS.ItexPay({
      api_key:
        "ITXPUB_STAGING_N9OSLGOKR2WT6KNKMRPHI0TNDZF3FEMCFDUO2PFN-6011000252-04GPRVVTV0CPUVD",
      first_name: "David",
      last_name: "Fagbenja",
      phone_number: "2347064758014",
      email: "daviddll396@gmail.com",
      amount: 10,
      // redirecturl: "http://yourredirecturl.com",
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

  return (
    <div>
      <h1>Payment Gateway Integration</h1>
      <button onClick={() => testPay()}>Pay Now</button>{" "}
      <button onClick={() => checkPaymentStatus()}>Check Status</button>
    </div>
  );
}

export default App;
