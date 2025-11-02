
import React from 'react';
import { type Message } from '../types';
import { BotIcon, UserIcon } from './Icons';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  const formattedContent = React.useMemo(() => {
    const blocks = content.split('\n\n');
    
    return blocks.map((block, blockIndex) => {
      const lines = block.split('\n');
      const listItems: string[] = [];
      const paragraphs: string[] = [];
      
      lines.forEach(line => {
        if (line.match(/^(\s*)(-|\🎯|\👤|\📄|\🖼️|\🎨|\🧩)\s/)) {
          listItems.push(line.replace(/^(\s*)(-|\🎯|\👤|\📄|\🖼️|\🎨|\🧩)\s/, ''));
        } else {
          paragraphs.push(line);
        }
      });
      
      const renderWithBold = (text: string) => {
        return text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
      };

      return (
        <div key={blockIndex}>
          {paragraphs.length > 0 && (
             <p className="mb-2" dangerouslySetInnerHTML={{ __html: renderWithBold(paragraphs.join('<br />')) }} />
          )}
          {listItems.length > 0 && (
            <ul className="list-inside space-y-1 mb-2">
              {listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                   <span className="mr-2 text-brand-DEFAULT">▸</span>
                   <span dangerouslySetInnerHTML={{ __html: renderWithBold(item) }} />
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    });
  }, [content]);

  return <div className="prose prose-sm dark:prose-invert max-w-none">{formattedContent}</div>;
};


interface ChatBubbleProps {
  message: Message;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isModel = message.role === 'model';

  return (
    <div className={`flex items-start gap-3 ${isModel ? 'justify-start' : 'justify-end'}`}>
      {isModel && (
        <div className="w-10 h-10 flex-shrink-0">
           <div className="p-2 bg-brand-light rounded-full">
             <BotIcon className="w-6 h-6 text-white" />
           </div>
        </div>
      )}

      <div
        className={`max-w-xl p-4 rounded-2xl shadow-sm break-words ${
          isModel
            ? 'bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-tl-none'
            : 'bg-brand-DEFAULT text-white rounded-br-none'
        }`}
      >
        <MarkdownContent content={message.content} />
      </div>

       {!isModel && (
         <div className="w-10 h-10 flex-shrink-0 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
            <UserIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
         </div>
       )}
    </div>
  );
};
