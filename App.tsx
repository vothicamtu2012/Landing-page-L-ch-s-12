
import React from 'react';
import { TeacherIcon, BookIcon, PuzzleIcon, MindmapIcon, LocalIcon, GameIcon, SoftwareIcon, GlobeAltIcon, PhoneIcon, BuildingLibraryIcon, CheckCircleIcon } from './components/Icons';

// --- DateTimeDisplay Component ---
const DateTimeDisplay = () => {
    const [currentTime, setCurrentTime] = React.useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-ivory text-red-900 px-6 py-3 text-lg md:text-2xl font-bold flex justify-center md:justify-end items-center border-b-2 border-bronze-gold/50 shadow-sm">
            <span className="tracking-wider drop-shadow-sm capitalize">
                {currentTime.toLocaleTimeString('vi-VN')} - {currentTime.toLocaleDateString('vi-VN', { weekday: 'long' })}, {currentTime.toLocaleDateString('vi-VN')}
            </span>
        </div>
    );
}

// --- MarqueeSection Component ---
const MarqueeSection = () => {
    return (
        <div className="bg-red-900 text-ivory py-2 overflow-hidden border-b-2 border-bronze-gold relative z-50 shadow-md">
            <div className="animate-marquee whitespace-nowrap inline-block font-bold text-sm md:text-base uppercase tracking-wider">
                Trường phổ thông DTNT THPT Bình Phước tỉnh Đồng Nai  - Tổ : TDQP - Sử - Địa - GDKTPL
            </div>
        </div>
    );
}

// --- HeroSection Component ---
const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-end text-center overflow-hidden pb-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://i.postimg.cc/63HDQSR1/og-image.jpg"
                    alt="Background" 
                    className="w-full h-full object-cover"
                />
                {/* Standard Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Solid Gradient Mask - Blue Theme */}
                <div className="absolute bottom-0 left-0 w-full h-[100%] bg-gradient-to-t from-blue-950 via-blue-900 to-transparent opacity-100"></div>
            </div>

            {/* Content - Pushed to bottom (justify-end) inside the colored area */}
            <div className="relative z-10 px-4 max-w-5xl mx-auto flex flex-col items-center animate-fade-in-up">
                
                {/* Typography Design */}
                <div className="flex flex-col items-center mb-8">
                    <span className="text-2xl md:text-4xl font-serif font-bold text-white mb-2 drop-shadow-md">
                        Khám phá Lịch sử
                    </span>
                    {/* Divider */}
                    <div className="w-20 h-1 bg-yellow-500 rounded-full my-3"></div>
                    <span className="text-4xl md:text-6xl font-sans font-black text-yellow-400 uppercase tracking-wider drop-shadow-xl">
                        Nuôi dưỡng lòng yêu nước
                    </span>
                </div>
                
                <p className="text-white/90 text-base md:text-lg max-w-3xl mb-10 font-medium drop-shadow-md leading-relaxed">
                    Học liệu số môn Lịch sử 12 – Dành cho giáo viên & học sinh THPT theo chương trình GDPT 2018.
                </p>

                <button 
                    onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold text-lg rounded-full shadow-2xl transform transition hover:scale-105 border-2 border-yellow-300 tracking-wide"
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
                         <img 
                            src="https://i.postimg.cc/nrvjdGk3/avatar_vo_van_dung.png" 
                            alt="Thầy Võ Văn Dũng" 
                            className="w-full h-full object-cover"
                        />
                     </div>
                </div>
                <div className="w-full md:w-2/3">
                    <h2 className="text-3xl md:text-4xl font-display text-red-earth mb-6 text-center md:text-left">Giới thiệu</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                        Chào mừng các em đến với trang học liệu số Lịch sử 12. Đây là nơi thầy Võ Văn Dũng tổng hợp các kiến thức, bài giảng và bài tập trắc nghiệm bám sát chương trình Giáo dục phổ thông 2018.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
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
    // Danh sách ảnh đã được bạn cập nhật link
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
             <h2 className="text-3xl md:text-4xl font-display text-red-earth">Thư viện hình ảnh nhà trường</h2>
             <p className="mt-4 text-lg text-gray-700">Một số khoảnh khắc và hoạt động tiêu biểu</p>
          </div>
          
          {/* Horizontal Scroll (Carousel) */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x scroll-smooth scrollbar-thin">
             {schoolActivityImages.map((src, index) => (
                <div 
                    key={index} 
                    className="flex-none w-80 md:w-96 aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-200 snap-center"
                >
                  <img
                    src={src}
                    alt={`Hình ảnh hoạt động của trường ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    );
};

// --- Footer Component ---
const Footer = () => {
    return (
        <footer className="bg-red-earth text-ivory py-12 px-4 border-t-4 border-bronze-gold">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Thông tin giáo viên và mục tiêu */}
                <div className="text-center md:text-left md:w-2/3">
                    <h3 className="text-xl md:text-2xl font-bold font-display mb-2 text-yellow-400">
                        Võ Văn Dũng – GV Lịch sử
                    </h3>
                    <p className="font-bold mb-3 text-lg">Trường PT DTNT THPT Bình Phước (Đồng Nai)</p>
                    <p className="opacity-90 leading-relaxed text-sm md:text-base border-t border-white/20 pt-3">
                        Xây dựng học liệu số Lịch sử 12 theo chương trình GDPT 2018, hướng đến học tập dễ hiểu – trực quan – hiệu quả.
                    </p>
                </div>
                
                {/* Thông tin liên hệ */}
                <div className="flex flex-col items-center md:items-end gap-3 md:w-1/3">
                     <span className="font-bold text-yellow-400 text-lg">📩 Liên hệ:</span>
                     <div className="flex gap-4">
                         <a href="#" className="hover:text-yellow-400 transition-colors p-2 bg-white/10 rounded-full" title="Số điện thoại">
                            <PhoneIcon className="w-6 h-6" />
                         </a>
                         <a href="#" className="hover:text-yellow-400 transition-colors p-2 bg-white/10 rounded-full" title="Website">
                            <GlobeAltIcon className="w-6 h-6" />
                         </a>
                    </div>
                    <p className="text-sm opacity-75 italic">[Email / Số điện thoại liên hệ]</p>
                </div>
            </div>
            
            {/* Bản quyền */}
            <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm opacity-80">
                © 2024. Tất cả nội dung được biên soạn phục vụ dạy – học, vui lòng trích dẫn khi sử dụng.
            </div>
        </footer>
    )
}

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-gray-800 flex flex-col">
        <DateTimeDisplay />
        <MarqueeSection />
        <HeroSection />
        <AboutSection />
        <ResourceSection />
        <PracticeRoomSection />
        <Footer />
    </div>
  );
}
