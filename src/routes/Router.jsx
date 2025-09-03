import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Works from "../pages/Works";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/trabalhos" element={<Works />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
}
