
import React, { useState } from 'react';
import { SendIcon } from './Icons';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập câu trả lời của bạn ở đây..."
        disabled={isLoading}
        className="flex-1 px-4 py-3 bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-DEFAULT transition-shadow duration-200 text-gray-800 dark:text-gray-200"
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="p-3 bg-brand-DEFAULT text-white rounded-full hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-light disabled:bg-gray-300 dark:disabled:bg-slate-600 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95"
      >
        <SendIcon className="w-6 h-6" />
      </button>
    </form>
  );
};
