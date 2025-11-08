// src/components/ProjectModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(2,8,12,0.65)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999
        }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
        aria-labelledby="project-title"
      >
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -20, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "92%",
            maxWidth: 900,
            background: "#031a22",
            borderRadius: 12,
            boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
            overflow: "hidden",
            border: "1px solid rgba(0,200,200,0.08)"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ height: 340, overflow: "hidden" }}>
              <img
                src={project.thumb}
                alt={project.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            </div>

            <div style={{ padding: 20, color: "#bdf" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 20 }}>
                <div>
                  <h2 id="project-title" style={{ margin: 0 }}>{project.title}</h2>
                  <div style={{ color: "#9ad", marginTop: 6 }}>{project.tech.join(" • ")}</div>
                </div>

                <div>
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        background: "#0aa",
                        padding: "8px 12px",
                        borderRadius: 8,
                        color: "#012",
                        textDecoration: "none",
                        fontWeight: 700
                      }}
                    >
                      View Live
                    </a>
                  )}

                  <button
                    onClick={onClose}
                    style={{
                      marginLeft: 12,
                      background: "transparent",
                      color: "#9ef",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 15
                    }}
                    aria-label="Close project modal"
                  >
                    Close
                  </button>
                </div>
              </div>

              <p style={{ marginTop: 12, lineHeight: 1.6 }}>{project.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
