import React from "react";
// impor pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

// import routes route * useLocation hook
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimRoutes = () => {
const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/reactpage" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
