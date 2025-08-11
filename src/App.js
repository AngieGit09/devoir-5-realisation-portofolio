import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";

{
  /*import Realisations from "./pages/Realisations";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";*/
}

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions" element={<Mentions />} /> */}
      </Routes>

      <Footer />
    </>
  );
}
