import React from "react";
import HoloPanel from "./components/HoloPanel";


function HoloPanel() {
  return (
    <div className="text-center mt-10 p-6 border border-cyan-400 rounded-xl text-cyan-300 bg-[#0a0f1c]/80 backdrop-blur-md shadow-lg font-mono tracking-widest">
      <h2 className="text-xl mb-2">SYSTEM ONLINE — JARVIS CORE ACTIVE</h2>
      <p>Awaiting command...</p>
    </div>
  );
}

export default HoloPanel;
