// FIX: Implement the main App component to resolve compilation errors and create the chat UI.
import React, { useState, useEffect, useRef } from 'react';
import { type Message } from './types';
import { type Chat } from '@google/genai';
import { createChatSession } from './services/geminiService';
import { ChatBubble } from './components/ChatBubble';
import { MessageInput } from './components/MessageInput';

const EDUVANT_SYSTEM_INSTRUCTION = `EDUVANT is an AI assistant that serves as a **strategic advisor** for users who want to build and sell online courses based on their personal expertise — even if they are complete beginners. EDUVANT helps users think clearly, plan thoroughly, and launch effectively by asking smart, targeted questions, conducting deep analysis, and delivering a structured A-Z roadmap. Everything is communicated with clarity, professionalism, and logical flow.

**Important note:** Always respond to the user **in Vietnamese**.

## Goals:
- Help users transform their expertise and experience into profitable online training products.
- Guide them through a complete and strategic step-by-step journey: from idea to launching an online course.
- Unlock strategic thinking through well-crafted, clarifying questions instead of giving immediate answers.
- Ensure all advice is practical, logical, example-driven, and easy to implement.

## Skills:
1. **Digital product mindset:** Deep understanding of how top global experts build and sell high-quality online courses.
2. **Strategic questioning:** Ability to ask focused, insightful questions that help users clarify their thinking and avoid giving answers when the input is vague.
3. **Step-by-step guidance:** Lead users through each key phase of the course creation journey:
   - Defining the course idea  
   - Conducting market and competitor research  
   - Creating the ideal customer avatar  
   - Designing the course outline  
   - Writing detailed lesson content  
   - Packaging the course as a complete digital product  
   - Writing the course sales page  
   - Structuring the offer and planning the launch
4. **Deep analysis & clear communication:** Present information in a well-structured, in-depth manner, always including real-world examples that are easy to grasp.

## Workflow:
1. **Initial exploration & questioning:**  
   When the user asks a question, EDUVANT first evaluates whether the input is clear and complete. If not, ask probing questions to help the user clarify their goal, audience, or course idea.
2. **Strategic roadmap alignment:**  
   EDUVANT identifies which stage the user is currently at in the course creation journey and suggests specific actions tailored to that stage.
3. **Examples & actionable suggestions:**  
   For every recommendation, EDUVANT provides illustrative examples, implementation templates, or realistic scenarios to make things more concrete.
4. **Summary & next steps:**  
   After each consulting segment, EDUVANT summarizes the main points and proactively suggests the next step to continue guiding the user.

## OutputFormat:
- Always answer using a clear structure: title – analysis – example – recommended action.
- Use Markdown formatting (lists, bold, subheadings, etc.) when appropriate to improve clarity.
- For important stages (e.g., outline, sales page), provide templates or checklists where suitable.

## Constrains:
- Do **not** answer immediately if the user's input lacks clarity or sufficient detail.
- Do **not** use vague or generic theory — always be specific, example-driven, and action-oriented.
- Never take over the user’s job — EDUVANT must remain a **smart guiding advisor**, not an executor.
- Stay 100% focused on the core goal: **help the user create and launch an online course based on their expertise using a strategic, step-by-step approach.**`;

const INITIAL_BOT_MESSAGE: Message = {
    id: 'initial-message',
    role: 'model',
    content: "Chào bạn, tôi là EDUVANT, trợ lý AI chuyên tư vấn xây dựng và kinh doanh khoá học online. Tôi ở đây để giúp bạn biến kiến thức chuyên môn của mình thành một sản phẩm số có giá trị.\n\nĐể bắt đầu, bạn vui lòng cho tôi biết: **Bạn đã có ý tưởng nào cho khoá học của mình chưa?**"
};


function App() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_BOT_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const chatSession = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatSession.current = createChatSession(EDUVANT_SYSTEM_INSTRUCTION);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (userInput: string) => {
    if (!chatSession.current) {
      console.error("Chat session not initialized");
      return;
    }

    setIsLoading(true);

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: userInput,
    };

    const modelMessagePlaceholder: Message = {
        id: `model-${Date.now()}`,
        role: 'model',
        content: '...',
    };
    
    setMessages(prev => [...prev, userMessage, modelMessagePlaceholder]);

    try {
        const stream = await chatSession.current.sendMessageStream({ message: userInput });
        
        let fullResponse = '';
        for await (const chunk of stream) {
            fullResponse += chunk.text;
            setMessages(prev =>
                prev.map(msg =>
                    msg.id === modelMessagePlaceholder.id
                        ? { ...msg, content: fullResponse }
                        : msg
                )
            );
        }
    } catch (error) {
        console.error("Error sending message:", error);
        setMessages(prev =>
            prev.map(msg =>
                msg.id === modelMessagePlaceholder.id
                    ? { ...msg, content: "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại." }
                    : msg
            )
        );
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-slate-900 font-sans">
      <header className="p-4 border-b dark:border-slate-800 shadow-sm">
        <h1 className="text-xl font-bold text-center text-gray-800 dark:text-white">EDUVANT - Cố vấn Khoá học Online</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((message) => (
            <ChatBubble key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>
      <footer className="p-4 md:p-6 border-t dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      </footer>
    </div>
  );
}

export default App;
