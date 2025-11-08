import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      className="min-h-screen bg-[#0a0f1a] text-cyan-400 flex flex-col items-center justify-center px-8 py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl mb-6 text-cyan-300">Skills</h1>
      <div className="text-left space-y-3 max-w-2xl">
        <p>🔹 C Programming, Python, JavaScript</p>
        <p>🔹 Front-End Development (React, Tailwind CSS)</p>
        <p>🔹 Firebase, Node.js basics</p>
        <p>🔹 Embedded Systems & IoT with ESP32</p>
        <p>🔹 Machine Learning fundamentals</p>
      </div>
    </motion.div>
  );
}
