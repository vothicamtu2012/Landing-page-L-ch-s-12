
import { GoogleGenAI, type Chat } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export function createChatSession(systemInstruction: string): Chat {
  const model = 'gemini-2.5-flash';
  
  const chat = ai.chats.create({
    model: model,
    config: {
      systemInstruction: systemInstruction,
    },
    // Start with an empty history, as the initial message is UI-only
    history: [], 
  });

  return chat;
}
