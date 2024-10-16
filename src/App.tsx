import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer, Articles } from "./components/index.ts";
import {Home, Team , Events } from "./pages/index.ts"
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./App.css";

import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FeedbackForm } from "./components/suggestions.tsx";

function App() {
  const location = useLocation();
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  })

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/event" element={<Events />} />
        </Routes>
      </AnimatePresence>
      <FeedbackForm />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
