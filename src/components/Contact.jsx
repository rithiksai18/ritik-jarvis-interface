import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-[#0a0f1a] text-cyan-400 px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl mb-8 text-cyan-300 tracking-widest">
        Contact Information
      </h1>

      <div className="text-center max-w-2xl mb-10">
        <p className="text-cyan-400 leading-relaxed">
          Let’s collaborate or discuss exciting tech ideas! You can reach out to
          me for internships, project collaborations, or software development
          opportunities. I’m always open to innovation and teamwork.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-3 text-center mb-10">
        <p>
          📍 <b>Location:</b> Chennai, Tamil Nadu, India
        </p>
        <p>
          📞 <b>Phone:</b>{" "}
          <a href="tel:6309340891" className="text-cyan-300 hover:underline">
            6309340891
          </a>
        </p>
        <p>
          📧 <b>Email:</b>{" "}
          <a
            href="mailto:konarithiksai@gmail.com"
            className="text-cyan-300 hover:underline"
          >
            konarithiksai@gmail.com
          </a>
        </p>
        <p>
          🔗 <b>LinkedIn:</b>{" "}
          <a
            href="https://www.linkedin.com/in/kona-rithik-sai-kumar-147432292"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline"
          >
            linkedin.com/in/kona-rithik-sai-kumar-147432292
          </a>
        </p>
        <p>
          🌐 <b>Portfolio:</b>{" "}
          <a
            href="https://engineeringguidance.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline"
          >
            engineeringguidance.vercel.app
          </a>
        </p>
      </div>

      {/* Contact Form (non-functional mock-up for UI) */}
      <motion.form
        className="w-full max-w-md border border-cyan-600 rounded-2xl p-6 bg-[#06121f]/60 hover:bg-[#0b1d2b]/70 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h2 className="text-lg text-cyan-300 mb-4">Send me a message 🚀</h2>
        <div className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-cyan-600 rounded-xl px-4 py-2 text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-cyan-600 rounded-xl px-4 py-2 text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            placeholder="Your Message..."
            rows="4"
            className="bg-transparent border border-cyan-600 rounded-xl px-4 py-2 text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="button"
            onClick={() => alert("This is a demo contact form — email me directly!")}
            className="mt-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 rounded-xl transition-all"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}
