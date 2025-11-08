// src/jarvisAI.js
export async function askJarvis(command) {
  console.log("[askJarvis] called with:", command);

  if (!command || typeof command !== "string") {
    return { reply: "I didn't catch that, Rithik.", route: null };
  }

  const lower = command.toLowerCase();

  // quick responses for testing
  if (lower.includes("time")) {
    const t = new Date().toLocaleTimeString();
    return { reply: `It is ${t}`, route: null };
  }

  if (lower.includes("open about")) {
    return { reply: "Opening About section.", route: "/about" };
  }

  if (lower.includes("joke")) {
    return { reply: "Why did the function return early? Because it had a base case!", route: null };
  }

  return { reply: `Command not recognized: ${command}`, route: null };
}
