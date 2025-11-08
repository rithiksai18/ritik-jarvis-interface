// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JarvisConsole from "./components/JarvisConsole";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

/*
  Simple router. Navigation will be triggered from JarvisConsole using
  window.location.href so we avoid context timing issues inside async callbacks.
*/

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JarvisConsole />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
