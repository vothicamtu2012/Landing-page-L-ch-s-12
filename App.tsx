import React, { useState, useEffect } from 'react';
import { TeacherIcon, BookIcon, PuzzleIcon, MindmapIcon, LocalIcon, GameIcon, SoftwareIcon, GlobeAltIcon, PhoneIcon, BuildingLibraryIcon, CheckCircleIcon } from './components/Icons';

// --- DateTimeDisplay Component ---
const DateTimeDisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('vi-VN', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div className="bg-red-earth text-white py-1 px-4 text-xs md:text-sm font-medium flex justify-between items-center z-50 relative">
      <div className="hidden md:block">Học liệu số Lịch sử 12 - GDPT 2018</div>
      <div className="flex gap-4 w-full md:w-auto justify-between md:justify-end">
        <span>{formatTime(currentDate)}</span>
        <span>{formatDate(currentDate)}</span>
      </div>
    </div>
  );
};

// --- HeroSection Component ---
const HeroSection = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-end pb-12 md:pb-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://i.postimg.cc/63HDQSR1/og-image.jpg"
                    alt="Background" 
                    className="w-full h-full object-cover"
                />
                {/* Lớp phủ gradient nhẹ để làm nổi bật phần trên nhưng giữ phần dưới (màu đỏ) rực rỡ */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent"></div>
            </div>

            {/* Content - Grouped all together at the bottom */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center animate-fade-in-up">
                 <p className="text-white/95 text-lg md:text-xl italic font-serif mb-2 drop-shadow-md">
                    “Mỗi trang sử – Một bài học làm người.”
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-yellow-400 mb-0 whitespace-nowrap drop-shadow-lg">
                    Khám phá Lịch sử – Nuôi dưỡng lòng
                </h1>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-yellow-400 mb-3 uppercase tracking-wider drop-shadow-lg">
                    YÊU NƯỚC
                </h1>
                
                <p className="text-white text-base md:text-xl max-w-3xl mb-6 font-medium drop-shadow-md">
                    Học liệu số môn Lịch sử 12 – Dành cho giáo viên & học sinh THPT theo chương trình GDPT 2018.
                </p>

                <button 
                    onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold text-lg rounded-full shadow-xl transform transition hover:scale-105 border-2 border-white/20"
                >
                    KHÁM PHÁ NGAY
                </button>
            </div>
        </section>
    );
}

// --- AboutSection Component ---
const AboutSection = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/3 flex justify-center">
                     <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-bronze-gold shadow-xl">
                        {/* Placeholder for teacher avatar if not specific */}
                         <img 
                            src="https://via.placeholder.com/500x500?text=Thay+Dung" 
                            alt="Thầy Võ Văn Dũng" 
                            className="w-full h-full object-cover"
                        />
                     </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-display text-red-earth mb-6">Giới thiệu</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Chào mừng các em đến với trang học liệu số Lịch sử 12. Đây là nơi thầy Võ Văn Dũng tổng hợp các kiến thức, bài giảng và bài tập trắc nghiệm bám sát chương trình Giáo dục phổ thông 2018.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Với phương châm "Học mà chơi - Chơi mà học", thầy hy vọng website sẽ là người bạn đồng hành hữu ích giúp các em chinh phục môn Lịch sử và kỳ thi Tốt nghiệp THPT một cách nhẹ nhàng và hiệu quả nhất.
                    </p>
                </div>
            </div>
        </section>
    )
}

// --- ResourceSection Component ---
const ResourceSection = () => {
    const resources = [
        { title: "Bài giảng điện tử", icon: <BookIcon className="w-12 h-12" />, color: "bg-blue-50 text-blue-800 border-blue-200" },
        { title: "Sơ đồ tư duy", icon: <MindmapIcon className="w-12 h-12" />, color: "bg-green-50 text-green-800 border-green-200" },
        { title: "Trò chơi Lịch sử", icon: <GameIcon className="w-12 h-12" />, color: "bg-purple-50 text-purple-800 border-purple-200" },
        { title: "Luyện thi THPT", icon: <CheckCircleIcon className="w-12 h-12" />, color: "bg-red-50 text-red-800 border-red-200" },
    ];

    return (
        <section id="resources" className="py-20 px-4 bg-ivory">
             <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display text-red-earth mb-4">Kho học liệu</h2>
                    <div className="w-24 h-1 bg-bronze-gold mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((res, idx) => (
                        <div key={idx} className={`${res.color} border p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center text-center group`}>
                            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{res.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{res.title}</h3>
                            <span className="text-sm opacity-75">Bấm để xem chi tiết</span>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    )
}

// --- PracticeRoomSection Component ---
const PracticeRoomSection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const schoolActivityImages = [
      'https://i.postimg.cc/bY41tWNV/hoat-dong-truong-01.jpg',
      'https://i.postimg.cc/bY41tWNV/hoat-dong-truong-02.jpg',
      'https://i.postimg.cc/RFZCmwwF/truong-hoat-dong-03-jpg.png',
      'https://i.postimg.cc/Y0h4QqWw/hoat-dong-truong-04.jpg',
      'https://i.postimg.cc/BvSxr9zL/hoat-dong-truong-05.jpg',
      'https://i.postimg.cc/pdvHxkQ5/hoat-dong-truong-06.jpg',
      'https://i.postimg.cc/bY41tWNV/hoat-dong-truong-07.jpg',
      'https://i.postimg.cc/bY41tWNV/hoat-dong-truong-08.jpg', 
      'https://i.postimg.cc/Y2ZJfkn9/hoat-dong-truong-09.jpg',
      'https://i.postimg.cc/9Q7TRP49/hoat-dong-truong-10.jpg',
    ];
  
    return (
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-5xl font-display text-red-earth">Thư viện hình ảnh nhà trường</h2>
             <p className="mt-4 text-xl text-gray-700">Một số khoảnh khắc và hoạt động tiêu biểu</p>
             <p className="mt-2 text-sm text-gray-500 italic">(Bấm vào ảnh để xem chi tiết)</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
             {schoolActivityImages.map((src, index) => (
                <div 
                    key={index} 
                    className="aspect-square group overflow-hidden rounded-lg shadow-md border-2 border-bronze-gold/20 cursor-pointer relative"
                    onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Hình ảnh hoạt động của trường ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
            <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4 animate-fade-in-up"
                onClick={() => setSelectedImage(null)}
                role="dialog"
                aria-modal="true"
            >
                <button 
                    className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors focus:outline-none"
                    onClick={() => setSelectedImage(null)}
                    aria-label="Đóng"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <img 
                    src={selectedImage} 
                    alt="Phóng to" 
                    className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
                    onClick={(e) => e.stopPropagation()} 
                />
            </div>
        )}
      </section>
    );
};

// --- Footer Component ---
const Footer = () => {
    return (
        <footer className="bg-red-earth text-ivory py-10 px-4 border-t-4 border-bronze-gold">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold font-display mb-2">Thầy Võ Văn Dũng</h3>
                    <p className="opacity-90">Trường Phổ thông Dân tộc Nội trú THPT Bình Phước</p>
                </div>
                <div className="flex gap-6">
                     <a href="#" className="hover:text-yellow-400 transition-colors"><PhoneIcon className="w-6 h-6" /></a>
                     <a href="#" className="hover:text-yellow-400 transition-colors"><GlobeAltIcon className="w-6 h-6" /></a>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm opacity-75">
                © 2024 Học liệu số Lịch sử 12. All rights reserved.
            </div>
        </footer>
    )
}

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-gray-800 flex flex-col">
        <DateTimeDisplay />
        <HeroSection />
        <AboutSection />
        <ResourceSection />
        <PracticeRoomSection />
        <Footer />
    </div>
  );
}