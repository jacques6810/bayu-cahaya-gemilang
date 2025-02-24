import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Developer from "./Pages/Developer";
import Simulasi from "./Pages/Simulasi";
import Kontak from "./Pages/Kontak";
import NotFound from "./Pages/NotFound";
import BumiCiampeaAsih from "./Pages/Cluster/BumiCiampeaAsih";
import ScrollToTop from "./Components/ScrollToTop";
import AdminLogin from "./Pages/Admin/Login";
import AdminDashboard from "./Pages/Admin/Dashboard";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/developer" element={<Developer />} />
        <Route
          path="/developer/bumi-ciampea-asih"
          element={<BumiCiampeaAsih />}
        />
        <Route path="/simulasi-kpr" element={<Simulasi />} />
        <Route path="/kontak-kami" element={<Kontak />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
