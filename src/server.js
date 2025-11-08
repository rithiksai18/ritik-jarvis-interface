import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/jarvis", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: `You are Jarvis, an AI assistant for Rithik.\nUser: ${prompt}`,
    });

    res.json({ reply: response.output[0].content[0].text });
  } catch (err) {
    console.error("Jarvis server error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5000, () => console.log("✅ Jarvis backend online on port 5000"));
