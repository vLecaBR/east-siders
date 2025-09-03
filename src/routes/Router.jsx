import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Gallery from "../pages/Gallery/Gallery";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
}
