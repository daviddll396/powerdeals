import { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Footer } from "./components/index";
import { Home, Buy } from "./components/Pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
