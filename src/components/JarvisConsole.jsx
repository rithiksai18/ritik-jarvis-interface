import React, { useState, useRef, useEffect } from "react";
import { askJarvis } from "../jarvisAI";
import { getCommandResponse } from "./commands";


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export default function JarvisConsole() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("jarvis_logs");
    return saved ? JSON.parse(saved) : [];
  });
  const [listening, setListening] = useState(false);
  const [manualCommand, setManualCommand] = useState("");
  const recognitionRef = useRef(null);
  const wakeDetectedRef = useRef(false);
  const busyRef = useRef(false);
  const silenceTimer = useRef(null);
  const restartTimer = useRef(null);
  const commandBufferRef = useRef("");
  const consoleEndRef = useRef(null); // 👈 NEW REF for auto-scroll

  const appendMessage = (text) => {
    const id = Date.now();
    const newMsg = { id, text, visible: false };
    setMessages((prev) => {
      const updated = [...prev.slice(-49), newMsg];
      localStorage.setItem("jarvis_logs", JSON.stringify(updated));
      return updated;
    });
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === id ? { ...msg, visible: true } : msg
        )
      );
    }, 50);
  };

  // 👇 Auto-scroll whenever messages change
  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
}, [messages.length]);

  useEffect(() => {
    if (messages.length === 0) {
      const bootLines = [
        "Boot sequence initialized...",
        "Loading neural cores...",
        "Activating voice recognition modules...",
        "Jarvis system online.",
        "Awaiting activation command."
      ];
      let delay = 0;
      bootLines.forEach((line) => {
        setTimeout(() => appendMessage(line), delay);
        delay += 900;
      });
    }
  }, []);

  const speak = (text, cb) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 1;
    utter.pitch = 1;
    busyRef.current = true;
    utter.onend = () => {
      busyRef.current = false;
      cb && cb();
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  };

  const startRecognition = () => {
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    if (recognitionRef.current) {
      recognitionRef.current.abort();
      recognitionRef.current = null;
    }

    const rec = new SpeechRecognition();
    rec.lang = "en-US";
    rec.continuous = true;
    rec.interimResults = false;

    rec.onstart = () => appendMessage("Jarvis microphone active...");

    rec.onresult = async (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .trim()
        .toLowerCase();

      if (busyRef.current) return;

      commandBufferRef.current = (
        commandBufferRef.current + " " + transcript
      ).trim();

      if (
        commandBufferRef.current.includes("hey jarvis") ||
        commandBufferRef.current.includes("ok jarvis") ||
        commandBufferRef.current.includes("jarvis")
      ) {
        wakeDetectedRef.current = true;
        appendMessage(`Wake word detected: "${transcript}"`);
        speak("Yes Rithik?", () =>
          appendMessage("Listening for your command...")
        );
        resetSilenceTimer();
        commandBufferRef.current = "";
        return;
      }

      if (wakeDetectedRef.current) {
        clearTimeout(silenceTimer.current);
        appendMessage(`> Command: "${transcript}"`);
        wakeDetectedRef.current = false;
        commandBufferRef.current = "";
        await handleCommand(transcript);
      }
    };

    rec.onerror = (e) => {
      console.warn("Recognition error:", e.error);
      clearTimeout(restartTimer.current);
      restartTimer.current = setTimeout(() => {
        if (listening && e.error !== "aborted") startRecognition();
      }, 1200);
    };

    rec.onend = () => {
      clearTimeout(restartTimer.current);
      restartTimer.current = setTimeout(() => {
        if (listening) startRecognition();
      }, 1200);
    };

    recognitionRef.current = rec;
    rec.start();
  };

  const resetSilenceTimer = () => {
    clearTimeout(silenceTimer.current);
    silenceTimer.current = setTimeout(() => {
      if (wakeDetectedRef.current) appendMessage("Timeout — returning to wake mode...");
      wakeDetectedRef.current = false;
      commandBufferRef.current = "";
    }, 9000);
  };

  const handleCommand = async (cmd) => {
    const result = getCommandResponse(cmd);
    if (result) {
      appendMessage(`Jarvis: ${result.reply}`);
      speak(result.reply, () => {
        if (result.route) window.location.href = result.route;
      });
      return;
    }

    try {
      const { reply, route } = await askJarvis(cmd);
      appendMessage(`Jarvis: ${reply}`);
      speak(reply, () => {
        if (route) window.location.href = route;
      });
    } catch {
      appendMessage("Jarvis: Sorry, I encountered an error.");
      speak("Sorry Rithik, something went wrong.");
    }
  };

  const startSystem = () => {
    if (listening) return;
    appendMessage("Activating voice recognition...");
    setListening(true);
    wakeDetectedRef.current = false;
    startRecognition();
  };

  const stopSystem = () => {
    appendMessage("Deactivating voice recognition...");
    setListening(false);
    recognitionRef.current?.abort();
    window.speechSynthesis.cancel();
    wakeDetectedRef.current = false;
  };

  const handleManualSubmit = async (e) => {
    e.preventDefault();
    const cmd = manualCommand.trim();
    if (!cmd) return;
    appendMessage(`> Manual: "${cmd}"`);
    setManualCommand("");
    await handleCommand(cmd);
  };

  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
      clearTimeout(silenceTimer.current);
      clearTimeout(restartTimer.current);
    };
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.consoleWrapper}>
       <h2 className="ritik-title">
  R.<span>I</span>.<span>T</span>.<span>H</span>.<span>I</span>.<span>K</span> Personal Interface
</h2>

        <div style={styles.panel} id="jarvis-console">
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                ...styles.line,
                opacity: msg.visible ? 1 : 0,
                transform: msg.visible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              {msg.text}
            </div>
          ))}
          {/* 👇 Auto-scroll anchor */}
          <div ref={consoleEndRef}></div>
        </div>

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button
            onClick={listening ? stopSystem : startSystem}
            style={listening ? styles.stopBtn : styles.startBtn}
          >
            {listening ? "Deactivate Voice" : "Activate Voice"}
          </button>

          <div style={styles.status}>
            {listening ? "🎙️ Active — say 'Hey Jarvis'" : "Voice recognition inactive"}
          </div>

          <form onSubmit={handleManualSubmit} style={{ marginTop: 20 }}>
            <input
              type="text"
              placeholder="Type your command..."
              value={manualCommand}
              onChange={(e) => setManualCommand(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.sendBtn}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 40,
    minHeight: "100vh",
    background: "radial-gradient(circle at 30% 30%, #000b18, #010617)",
  },
  consoleWrapper: {
    width: "80%",
    maxWidth: 900,
    color: "#b5eaff",
    fontFamily: "monospace",
  },
  title: {
    textAlign: "center",
    color: "#57baff",
    letterSpacing: 6,
    marginBottom: 20,
  },
  panel: {
    background: "rgba(0, 20, 40, 0.45)",
    border: "1px solid rgba(0,255,255,0.3)",
    borderRadius: 12,
    padding: 20,
    minHeight: 280,
    overflowY: "auto",
    boxShadow: "0 0 25px rgba(0,255,255,0.1)",
    backdropFilter: "blur(8px)",
  },
  line: {
    padding: "4px 0",
    color: "#aef",
    fontSize: "15px",
  },
  startBtn: {
    background: "#13a4b8",
    color: "#fff",
    border: "none",
    padding: "10px 28px",
    borderRadius: 24,
    fontWeight: 600,
    cursor: "pointer",
  },
  stopBtn: {
    background: "#e43",
    color: "#fff",
    border: "none",
    padding: "10px 28px",
    borderRadius: 24,
    fontWeight: 600,
    cursor: "pointer",
  },
  status: { marginTop: 10, color: "#9cf" },
  input: {
    padding: "10px 15px",
    borderRadius: 20,
    border: "1px solid #09f",
    background: "rgba(0,0,20,0.6)",
    color: "#bdf",
    width: "60%",
    fontFamily: "monospace",
  },
  sendBtn: {
    marginLeft: 10,
    padding: "10px 20px",
    borderRadius: 20,
    background: "#13a4b8",
    color: "#fff",
    border: "none",
    fontWeight: 600,
    cursor: "pointer",
  },
};
// Add this at the very end of JarvisConsole.jsx

const styleSheet = `
@keyframes glowPulse {
  0% { text-shadow: 0 0 5px #00eaff, 0 0 10px #00eaff; }
  50% { text-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff; }
  100% { text-shadow: 0 0 5px #00eaff, 0 0 10px #00eaff; }
}

.ritik-title {
  text-align: center;
  color: #57c6ff;
  letter-spacing: 6px;
  font-weight: 700;
  font-size: 1.9rem;
  margin-bottom: 20px;
  font-family: "Orbitron", monospace;
  animation: glowPulse 3s ease-in-out infinite;
}

.ritik-title span {
  color: #8ffcff;
  font-weight: 800;
  display: inline-block;
  animation: flicker 2s infinite alternate;
}

@keyframes flicker {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
}
`;

if (typeof document !== "undefined" && !document.getElementById("ritik-style")) {
  const styleEl = document.createElement("style");
  styleEl.id = "ritik-style";
  styleEl.textContent = styleSheet;
  document.head.appendChild(styleEl);
}

