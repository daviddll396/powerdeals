import { useState, useEffect } from "react";
import "./App.css";
import {
  Navbar,
  Hero,
  Convenience,
  Why,
  Faqs,
  Footer,
} from "./components/index";

import Preloader from "./components/reusables/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {" "}
          <Navbar />
          <Hero />
          <Convenience />
          <Why />
          <Faqs />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
