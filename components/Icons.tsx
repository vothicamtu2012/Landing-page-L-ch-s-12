import React from 'react';

export const TeacherIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v5.5a2.5 2.5 0 005 0V14" />
    </svg>
);

export const StudentIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-1.07-1.07m1.07 1.07l1.07 1.07m-1.07-1.07v-1.07m1.07 1.07h-1.07" />
    </svg>
);

export const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
);

export const BookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

export const PuzzleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.66.539-1.192 1.2-1.192h.013c.661 0 1.192.532 1.192 1.192v.013c0 .661-.532 1.192-1.192 1.192h-.013c-.66 0-1.192-.532-1.192-1.192v-.013zM4.5 15.75c0-.66.539-1.192 1.2-1.192h.013c.661 0 1.192.532 1.192 1.192v.013c0 .661-.532 1.192-1.192 1.192h-.013c-.66 0-1.192-.532-1.192-1.192v-.013zM8.25 9.75c0-.66.539-1.192 1.2-1.192h.013c.661 0 1.192.532 1.192 1.192v.013c0 .661-.532 1.192-1.192 1.192h-.013c-.66 0-1.192-.532-1.192-1.192v-.013z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h1.875c1.295 0 2.502.25 3.638.708a4.91 4.91 0 013.482 3.482c.458 1.136.708 2.343.708 3.638v1.875M3 3v1.875c0 1.295.25 2.502.708 3.638a4.91 4.91 0 003.482 3.482c1.136.458 2.343.708 3.638.708h1.875m0 0v1.875c0 1.295-.25 2.502-.708 3.638a4.91 4.91 0 01-3.482 3.482c-1.136.458-2.343.708-3.638.708h-1.875m0 0h-1.875c-1.295 0-2.502-.25-3.638-.708a4.91 4.91 0 01-3.482-3.482c-.458-1.136-.708-2.343-.708-3.638V9.75m0 0V8.25c0-1.295.25-2.502.708-3.638a4.91 4.91 0 013.482-3.482c1.136-.458 2.343.708 3.638.708h1.875m-1.875 9.75h1.875c1.295 0 2.502.25 3.638.708a4.91 4.91 0 003.482 3.482c1.136.458 2.343.708 3.638.708v1.875m0 0v-1.875c0-1.295-.25-2.502-.708-3.638a4.91 4.91 0 00-3.482-3.482c-1.136-.458-2.343-.708-3.638.708h-1.875M21 9.75v1.875c0 1.295-.25 2.502-.708 3.638a4.91 4.91 0 01-3.482 3.482c-1.136.458-2.343.708-3.638.708h-1.875" />
    </svg>
);

export const MindmapIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 10.5h.008v.008H6v-.008zm0 0c.346 0 .68.025 1.006.073L10.5 6m-4.5 4.5l-2.25 2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5c-.326-.048-.66-.073-1.006-.073m0 0H6m4.5 0l2.25-2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 10.5h.008v.008H18v-.008zm0 0c.346 0 .68.025 1.006.073L20.25 6m-2.25 4.5l-2.25 2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 13.5c.326-.048.66-.073 1.006-.073m0 0H18m-4.5 0l2.25 2.25" />
    </svg>
);

export const LocalIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.5-10.5h-7a.5.5 0 00-.5.5v12.5a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V6.25a.5.5 0 00-.5-.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5" />
    </svg>
);

export const GameIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12l.007.007L6 12zm4.5 0l.007.007L10.5 12zm4.5 0l.007.007L15 12zm4.5 0l.007.007L19.5 12zM6.75 6.75h10.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V9a2.25 2.25 0 012.25-2.25z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H7.5a2.25 2.25 0 00-2.25 2.25v1.5M16.5 3.75H15a2.25 2.25 0 00-2.25 2.25v1.5" />
    </svg>
);

export const VideoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75l-4.5 4.5 4.5 4.5m-3-9l-4.5 4.5 4.5 4.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// Fix: Add missing icon components required by ChatBubble and MessageInput.
export const BotIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.75h.008v.008H9V9.75zm6 0h.008v.008H15V9.75z" />
  </svg>
);

export const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);
