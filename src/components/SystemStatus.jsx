import React from "react";

function SystemStatus() {
  const now = new Date().toLocaleString();

  return (
    <div className="text-center mb-6">
      <p className="text-cyan-300">Welcome, Rithik.</p>
      <p className="text-cyan-300">{now}</p>
    </div>
  );
}

export default SystemStatus;
