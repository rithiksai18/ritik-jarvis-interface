// commands.js

export const routes = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "projects", path: "/projects" },
  { key: "contact", path: "/contact" },
  { key: "experience", path: "/experience" },
  { key: "skills", path: "/skills" },
  { key: "certificates", path: "/certificates" },
  { key: "resume", path: "/resume" },
];

export const jokes = [
  "Why did the developer go broke? Because he used up all his cache.",
  "I would tell you a UDP joke, but you might not get it.",
  "I told my computer I needed a break, and it froze.",
  "Why did the AI go to therapy? Too many unresolved loops.",
  "Java developers never die, they just get garbage collected."
];

export function getCommandResponse(cmd) {
  cmd = cmd.toLowerCase();

  if (cmd.includes("time")) {
    const now = new Date().toLocaleTimeString();
    return { reply: `The time is ${now}` };
  }

  for (const r of routes) {
    if (cmd.includes(`open ${r.key}`)) {
      return { reply: `Opening ${r.key} section...`, route: r.path };
    }
  }

  if (cmd.includes("joke")) {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    return { reply: joke };
  }

  return null;
}
