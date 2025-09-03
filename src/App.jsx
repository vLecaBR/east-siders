import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
