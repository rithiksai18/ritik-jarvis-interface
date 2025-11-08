import React from "react";
import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <motion.div
      className="min-h-screen bg-[#0a0f1a] text-cyan-400 flex flex-col items-center justify-center px-8 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl mb-6 text-cyan-300">Certifications & Achievements</h1>

      <div className="max-w-3xl text-left space-y-5 leading-relaxed">
        <p>
          🏅 <b>Electronic Arts – Software Engineering Job Simulation</b><br />
          Completed an industry simulation focused on modern software engineering
          practices including debugging, code review, and workflow management
          using Agile methodology. Strengthened collaboration and problem-solving
          techniques through real-world inspired tasks.
        </p>

        <p>
          ☁️ <b>AWS – Solutions Architecture Job Simulation</b><br />
          Acquired foundational knowledge of cloud-based architecture and
          infrastructure planning using Amazon Web Services. Learned to design
          scalable and fault-tolerant systems following AWS best practices.
        </p>

        <p>
          🎯 <b>Aarush – The Art Of Fortune (Tech Fest)</b><br />
          Participated in the national-level technical fest hosted by SRMIST and
          engaged in multiple workshops, events, and problem-solving competitions
          emphasizing innovation and creative engineering.
        </p>

        <p>
          🐍 <b>Introduction to Programming Using Python</b><br />
          Completed a certified course covering Python fundamentals, algorithmic
          problem solving, and object-oriented programming concepts with hands-on
          exercises.
        </p>

        <p>
          🔧 <b>Verilog HDL Fundamentals – Udemy</b><br />
          Gained a strong understanding of hardware description languages, focusing
          on Verilog syntax, simulation, and implementation for FPGA and ASIC design.
          Strengthened circuit-level logic design thinking and testing skills.
        </p>

        <p>
          💾 <b>MongoDB Basics – MongoDB University</b><br />
          Completed an introductory course on database design and CRUD operations
          using MongoDB. Learned about document structures, indexing, and database
          connectivity in web and backend systems.
        </p>

        <p>
          🚀 <b>Participation Certificates – Smart India Hackathon (SIH) 2025 & Technothon</b><br />
          Actively participated in SIH 2025 and Technothon Hackathon, contributing to
          team-based innovation projects such as <b>“Engineering Guidance”</b> — an ECE
          project mentorship web platform — and <b>“Women Safety SOS”</b> — an emergency
          alert system for personal safety. Worked on ideation, rapid prototyping, and
          presenting technical solutions to panel judges.
        </p>
      </div>
    </motion.div>
  );
}
