import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API Routes
  app.post("/api/chat", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Thiếu cấu hình GEMINI_API_KEY trên server." });
      }

      const ai = new GoogleGenAI({ apiKey });
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Vui lòng nhập tin nhắn." });
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: message,
        config: {
          systemInstruction: "Bạn là một giáo viên chuyên hỗ trợ học sinh ôn tập môn Lịch sử 12. Hãy trả lời chính xác, bám sát chương trình, dễ hiểu và truyền cảm hứng."
        }
      });

      res.status(200).json({ text: response.text });
    } catch (error) {
      console.error("Lỗi khi gọi Gemini API:", error);
      res.status(500).json({ error: "Đã xảy ra lỗi khi gọi Gemini API. Vui lòng thử lại sau." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
