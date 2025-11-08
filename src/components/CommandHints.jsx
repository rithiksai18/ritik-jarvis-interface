// src/components/CommandHints.jsx
import React from "react";

export default function CommandHints() {
  const hints = [
    "open about",
    "open projects",
    "open experience",
    "open certificates",
    "open contact",
    "tell a joke",
    "what's the time",
  ];

  return (
    <div
      style={{
        marginTop: 10,
        color: "#6af",
        fontSize: 13,
        fontFamily: "monospace",
        textAlign: "center",
      }}
    >
      <span>Try saying:&nbsp;</span>
      {hints.map((h, i) => (
        <span key={h} style={{ color: "#9ef", marginRight: 6 }}>
          {h}
          {i < hints.length - 1 ? "," : ""}
        </span>
      ))}
    </div>
  );
}
