import React from 'react';
import {
  TeacherIcon, StudentIcon, GlobeIcon, BookIcon, PuzzleIcon,
  MindmapIcon, LocalIcon, GameIcon, VideoIcon
} from './components/Icons';

const MarqueeBanner = () => (
  <div className="bg-red-earth text-ivory overflow-hidden whitespace-nowrap">
    <div className="inline-block animate-marquee py-2">
      <span className="font-serif text-3xl mx-16">
        Trường phổ thông DTNT THPT Bình Phước tỉnh Đồng Nai - Tổ : TDQP - Sử - Địa - GDKT&PL
      </span>
      <span className="font-serif text-3xl mx-16">
        Trường phổ thông DTNT THPT Bình Phước tỉnh Đồng Nai - Tổ : TDQP - Sử - Địa - GDKT&PL
      </span>
    </div>
  </div>
);


const App: React.FC = () => {
  const resources = [
    { title: 'Bài giảng điện tử', icon: <BookIcon className="w-12 h-12 text-brown-red mb-4" /> },
    { title: 'Bài tập lịch sử', icon: <PuzzleIcon className="w-12 h-12 text-brown-red mb-4" /> },
    { title: 'Bản đồ tư duy & Timeline', icon: <MindmapIcon className="w-12 h-12 text-brown-red mb-4" /> },
    { title: 'Tư liệu lịch sử địa phương', icon: <LocalIcon className="w-12 h-12 text-brown-red mb-4" /> },
    { title: 'Trò chơi & Quiz', icon: <GameIcon className="w-12 h-12 text-brown-red mb-4" /> },
    { title: 'Video bài giảng ngắn', icon: <VideoIcon className="w-12 h-12 text-brown-red mb-4" /> },
  ];

  return (
    <div className="bg-ivory">
      <MarqueeBanner />

      {/* Hero Section */}
      <header 
        className="relative min-h-screen flex items-center justify-center text-center text-white px-4"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/aistudio-hosting/history-app/dong-son-drum.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4 text-shadow-lg">
            Khám phá Lịch sử – Nuôi dưỡng lòng yêu nước
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
            Học liệu số môn Lịch sử 12 – Dành cho giáo viên & học sinh THPT theo chương trình GDPT 2018.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#resources" className="bg-brown-red hover:bg-red-earth text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
              Khám phá ngay
            </a>
            <a href="#resources" className="bg-ivory hover:bg-white text-brown-red font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
              Tải học liệu miễn phí
            </a>
          </div>
        </div>
      </header>
      
      <main>
        {/* Reasons Section */}
        <section className="py-16 md:py-24 bg-ivory">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brown-red mb-12">Tại sao nên chọn học liệu số Lịch sử 12?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white/50 rounded-lg shadow-md border border-bronze-gold/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center items-center mb-4"><TeacherIcon className="w-16 h-16 text-moss-green" /></div>
                <h3 className="text-xl font-bold mb-2">Giáo viên dạy dễ hơn</h3>
                <p>Nội dung biên soạn theo GDPT 2018, có bài giảng điện tử.</p>
              </div>
              <div className="p-8 bg-white/50 rounded-lg shadow-md border border-bronze-gold/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center items-center mb-4"><StudentIcon className="w-16 h-16 text-moss-green" /></div>
                <h3 className="text-xl font-bold mb-2">Học sinh hứng thú hơn</h3>
                <p>Video, quiz, trò chơi, infographic sinh động.</p>
              </div>
              <div className="p-8 bg-white/50 rounded-lg shadow-md border border-bronze-gold/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center items-center mb-4"><GlobeIcon className="w-16 h-16 text-moss-green" /></div>
                <h3 className="text-xl font-bold mb-2">Lịch sử gắn liền thực tế</h3>
                <p>Cập nhật nội dung liên hệ lịch sử địa phương.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-16 md:py-24 bg-moss-green/10">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brown-red mb-4">Kho học liệu</h2>
                <p className="text-xl text-gray-700 mb-12">Tất cả tài nguyên bạn cần</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {resources.map((resource) => (
                        <div key={resource.title} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-bronze-gold/30 hover:shadow-xl hover:scale-105 transition-transform duration-300 group">
                            {resource.icon}
                            <h3 className="text-lg font-semibold mb-4 text-center">{resource.title}</h3>
                            <a href="#" className="text-brown-red font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Xem chi tiết</a>
                        </div>
                    ))}
                </div>
                <div className="mt-16">
                     <a href="#" className="bg-red-earth hover:bg-brown-red text-white font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105 shadow-lg text-lg">
                        Tải trọn bộ học liệu (Miễn phí)
                    </a>
                </div>
            </div>
        </section>
        
        {/* Experience Section */}
        <section className="py-16 md:py-24 bg-ivory">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brown-red mb-12 text-center">Dạy – Học – Trải nghiệm cùng nhau</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-moss-green">
                <h3 className="text-2xl font-bold mb-4 flex items-center"><TeacherIcon className="w-8 h-8 mr-3 text-moss-green" /> Dành cho giáo viên</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Giáo án mẫu, công cụ đánh giá năng lực</li>
                  <li>Hướng dẫn sử dụng công nghệ (Canva, Quizizz, Google Form…)</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-bronze-gold">
                <h3 className="text-2xl font-bold mb-4 flex items-center"><StudentIcon className="w-8 h-8 mr-3 text-bronze-gold" /> Dành cho học sinh</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Video ngắn 5–10 phút</li>
                  <li>Bài luyện trắc nghiệm theo chuyên đề</li>
                  <li>Mục “Thử thách lịch sử” (gamification)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-moss-green/10">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <blockquote className="mb-12">
              <p className="text-2xl md:text-3xl font-serif italic text-gray-700">“Dân ta phải biết sử ta,<br/>Cho tường gốc tích nước nhà Việt Nam.”</p>
              <cite className="block text-right mt-4 font-semibold text-brown-red not-italic">— Hồ Chí Minh</cite>
            </blockquote>
            <div className="bg-white p-8 rounded-lg shadow-xl border border-bronze-gold/30">
                <h2 className="text-2xl font-display font-bold text-brown-red mb-6">Góp ý & Liên hệ</h2>
                <form className="space-y-4 text-left">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên</label>
                        <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brown-red focus:border-brown-red" />
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brown-red focus:border-brown-red" />
                    </div>
                     <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Vai trò</label>
                         <select id="role" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brown-red focus:border-brown-red">
                            <option>Giáo viên</option>
                            <option>Học sinh</option>
                         </select>
                    </div>
                    <div>
                         <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nội dung góp ý</label>
                         <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brown-red focus:border-brown-red"></textarea>
                    </div>
                    <div className="text-center pt-4">
                        <button type="submit" className="bg-brown-red hover:bg-red-earth text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                           Gửi góp ý
                        </button>
                    </div>
                </form>
            </div>
          </div>
        </section>
        
        {/* Teacher Section */}
        <section className="py-16 md:py-24 bg-ivory">
          <div className="container mx-auto px-4 max-w-lg text-center">
             <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-bronze-gold relative">
                 <h3 className="text-2xl font-bold font-display text-brown-red">Võ Văn Dũng</h3>
                 <p className="text-gray-600 mb-2">25 năm kinh nghiệm giảng dạy Lịch sử THPT</p>
                 <p className="font-semibold text-moss-green mb-4">Trường PT DTNT THPT Bình Phước, tỉnh Bình Phước</p>
                 <p className="text-lg font-bold">ĐT/Zalo: 0907130900</p>
             </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-red-earth text-ivory/80 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2 text-white">Khám phá lịch sử – Nuôi dưỡng lòng yêu nước</p>
          <div className="flex justify-center gap-6 my-4">
             <a href="#" className="hover:text-white">Trang chủ</a>
             <a href="#resources" className="hover:text-white">Tải học liệu</a>
             <a href="#" className="hover:text-white">Liên hệ</a>
          </div>
          <p className="text-sm">Bản quyền © 2025 Trường PT DTNT THPT Bình Phước</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
