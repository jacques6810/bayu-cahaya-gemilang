import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Developer from "./Pages/Developer";
import Simulasi from "./Pages/Simulasi";
import Kontak from "./Pages/Kontak";
import NotFound from "./Pages/NotFound";
import Cluster from "./Pages/Cluster/Cluster";
import ScrollToTop from "./Components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/developer/cluster/:id" element={<Cluster />} />
        <Route path="/simulasi-kpr" element={<Simulasi />} />
        <Route path="/kontak-kami" element={<Kontak />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
    // <div className="min-h-screen bg-blue-500 flex items-center justify-center text-white text-xl">
    //   Tailwind Berhasil!
    // </div>
  );
}

export default App;
