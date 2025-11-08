import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="min-h-screen bg-[#0a0f1a] text-cyan-400 flex flex-col items-center justify-center px-8 py-16"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl mb-6 text-cyan-300">About Me</h1>
      <p className="max-w-3xl text-center leading-relaxed">
        I’m <strong>Rithik Sai Kumar</strong>, a passionate pre-final-year
        Electronics and Communication Engineering student at SRM Institute of
        Science and Technology, Ramapuram Campus. I’m driven by curiosity about
        how technology integrates hardware and software. My focus areas include
        embedded systems, artificial intelligence, and full-stack development.
        I believe in learning by building — from IoT-driven smart systems to AI
        assistants like this one. My goal is to contribute to embedded and
        software innovation that solves real-world problems.
      </p>
    </motion.div>
  );
}
