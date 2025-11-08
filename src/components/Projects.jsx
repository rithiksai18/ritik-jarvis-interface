// src/components/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projectsData = [
  {
    id: "irrigation",
    title: "Smart Irrigation System (ESP32)",
    thumb: "/projects/irrigation.jpg",
    short: "Automates watering using ESP32 & sensors to save water and time.",
    description: `Designed and implemented a Smart Irrigation System using an ESP32 microcontroller. 
    The system monitors soil moisture and environmental variables (temperature & humidity) 
    and triggers irrigation automatically when moisture is below a threshold. 
    Data and logs are pushed to Firebase for remote monitoring and historical analysis. 
    Features include threshold-based scheduling, remote manual override via web dashboard, 
    and low-power sleep cycles to extend battery life.`,
    tech: ["ESP32", "C/C++", "DHT22", "Soil Moisture Sensor", "Firebase"],
    link: "#"
  },
  {
    id: "engineering-guidance",
    title: "Engineering Guidance Website",
    thumb: "/projects/engineering-guidance.jpg",
    short: "Personal site with tutorials, project breakdowns and career tips.",
    description: `Built a responsive website (engineeringguidance.vercel.app) to share project walkthroughs, 
    sample code, and career resources for engineering students. 
    Frontend implemented in React with Tailwind CSS, backend uses Firebase for content storage and contact messages. 
    Features include a projects gallery, step-by-step guides, and CV download. 
    Focused on accessibility and clear explanations so other students can reproduce projects fast.`,
    tech: ["React", "Tailwind CSS", "Firebase", "Vercel"],
    link: "https://engineeringguidance.vercel.app"
  },
  {
    id: "mindthera",
    title: "MindThera (Android App)",
    thumb: "/projects/mindthera.jpg",
    short: "Kotlin app for mental wellness: reminders, mood tracking & habits.",
    description: `MindThera is an Android application focused on mental wellness and habit building. 
    Built with Kotlin and Firebase (Auth + Realtime DB). 
    Features include daily motivational reminders, habit tracking with streaks, a mood journal, 
    and short guided exercises. Designed with a simple, calming UI and privacy-first local caching to work offline.`,
    tech: ["Kotlin", "Firebase", "Android"],
    link: "#"
  }
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ padding: 24, display: "flex", justifyContent: "center" }}>
      <div style={{ width: "92%", maxWidth: 1100 }}>
        <h2 style={{ textAlign: "center", color: "#7af", letterSpacing: 6 }}>
          Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            marginTop: 22
          }}
        >
          {projectsData.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
              style={{
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                background: "rgba(0,20,30,0.6)",
                border: "1px solid rgba(100,200,200,0.06)",
                cursor: "pointer"
              }}
              onClick={() => setActive(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") setActive(p); }}
              aria-label={`Open ${p.title} details`}
            >
              <div style={{ height: 160, overflow: "hidden" }}>
                <img
                  src={p.thumb}
                  alt={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  loading="lazy"
                />
              </div>

              <div style={{ padding: 14 }}>
                <h3 style={{ margin: 0, color: "#9ef" }}>{p.title}</h3>
                <p style={{ marginTop: 8, color: "#9ad" }}>{p.short}</p>
                <div style={{ marginTop: 12, color: "#7bf", fontSize: 13 }}>
                  {p.tech.join(" • ")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ProjectModal project={active} onClose={() => setActive(null)} />
      </div>
    </div>
  );
}
