import React from 'react';
import { TeacherIcon, GlobeIcon, BookIcon, PuzzleIcon, MindmapIcon, LocalIcon, GameIcon, VideoIcon, StudentIcon } from './components/Icons';

// Component cho dải chữ chạy
const MarqueeBanner = () => (
  <div className="bg-red-earth text-ivory overflow-hidden whitespace-nowrap">
    <div className="inline-block animate-marquee py-2">
      <h2 className="text-3xl font-serif mx-8">Trường phổ thông DTNT THPT Bình Phước tỉnh Đồng Nai - Tổ : TDQP - Sử - Địa - GDKT&PL</h2>
    </div>
     <div className="inline-block animate-marquee py-2">
      <h2 className="text-3xl font-serif mx-8">Trường phổ thông DTNT THPT Bình Phước tỉnh Đồng Nai - Tổ : TDQP - Sử - Địa - GDKT&PL</h2>
    </div>
  </div>
);


// Phần 1: Hero Section
const HeroSection = () => (
  <section 
    className="relative min-h-screen flex items-center justify-center text-center text-white bg-cover bg-center" 
    style={{ backgroundImage: "url('/hero-background.png')" }}
  >
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 p-4">
      <h1 className="text-5xl md:text-7xl font-display font-bold text-ivory shadow-lg">
        Khám phá Lịch sử – Nuôi dưỡng lòng yêu nước
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-ivory/90">
        Học liệu số môn Lịch sử 12 – Dành cho giáo viên & học sinh THPT theo chương trình GDPT 2018.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#resources" className="px-8 py-3 bg-brown-red text-white font-bold rounded-full text-lg hover:bg-red-earth transition-colors duration-300 shadow-md">
          Khám phá ngay
        </a>
        <a href="#resources" className="px-8 py-3 bg-ivory text-brown-red font-bold rounded-full text-lg hover:bg-ivory/80 transition-colors duration-300 shadow-md">
          Tải học liệu miễn phí
        </a>
      </div>
    </div>
  </section>
);

// Phần 2: Lý do chọn
const ReasonsSection = () => {
    const reasons = [
        { icon: <TeacherIcon className="w-12 h-12 text-brown-red" />, title: "Giáo viên dạy dễ hơn", description: "Nội dung biên soạn theo GDPT 2018, có sẵn bài giảng điện tử, giáo án mẫu." },
        { icon: <StudentIcon className="w-12 h-12 text-brown-red" />, title: "Học sinh hứng thú hơn", description: "Video, quiz, trò chơi, infographic sinh động giúp việc học không còn nhàm chán." },
        { icon: <GlobeIcon className="w-12 h-12 text-brown-red" />, title: "Lịch sử gắn liền thực tế", description: "Cập nhật nội dung liên hệ lịch sử địa phương, giúp học sinh hiểu sâu sắc hơn." },
    ];

    return (
        <section className="py-20 bg-ivory/50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-display font-bold text-brown-red mb-12">Tại sao nên chọn học liệu số Lịch sử 12?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {reasons.map(reason => (
                        <div key={reason.title} className="bg-white p-8 rounded-lg shadow-lg border border-bronze-gold/20 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex justify-center mb-4">{reason.icon}</div>
                            <h3 className="text-2xl font-display font-bold text-red-earth mb-2">{reason.title}</h3>
                            <p className="text-gray-600">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// Phần 3: Kho học liệu
const ResourcesSection = () => {
    const resources = [
      { icon: <BookIcon className="w-8 h-8 mx-auto mb-2 text-moss-green" />, name: "Bài giảng điện tử" },
      { icon: <PuzzleIcon className="w-8 h-8 mx-auto mb-2 text-moss-green" />, name: "Bài tập lịch sử" },
      { icon: <MindmapIcon className="w-8 h-8 mx-auto mb-2 text-moss-green" />, name: "Bản đồ tư duy & Timeline" },
      { icon: <LocalIcon className="w-8 h-8 mx-auto mb-2 text-moss-green" />, name: "Tư liệu lịch sử địa phương" },
      { icon: <GameIcon className="w-8 h-8 mx-auto mb-2 text-moss-green" />, name: "Trò chơi & Quiz" },
      { icon: <VideoIcon className="w-8 h-8 mx-auto mb-2 text-moss-green" />, name: "Video bài giảng ngắn" },
    ];
  
    return (
      <section id="resources" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-brown-red mb-4">Kho học liệu "Tất cả tài nguyên bạn cần"</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Mọi tài nguyên được thiết kế chuyên nghiệp, bám sát chương trình và sẵn sàng để bạn sử dụng ngay.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {resources.map(resource => (
              <div key={resource.name} className="bg-ivory/60 p-6 rounded-lg shadow-md hover:bg-bronze-gold/20 transition-colors duration-300 cursor-pointer">
                {resource.icon}
                <h4 className="font-semibold text-gray-700">{resource.name}</h4>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a href="#" className="px-10 py-4 bg-red-earth text-white font-bold rounded-full text-xl hover:bg-brown-red transition-colors duration-300 shadow-lg transform hover:scale-105">
              video tư liệu lịch sử
            </a>
          </div>
        </div>
      </section>
    );
};

// Phần 4: Dạy - Học - Trải nghiệm
const ExperienceSection = () => (
    <section className="py-20 bg-ivory/50">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-display font-bold text-brown-red mb-12 text-center">Dạy – Học – Trải nghiệm cùng nhau</h2>
            
            <div className="mb-12 aspect-video">
                <iframe 
                    className="w-full h-full rounded-lg shadow-2xl" 
                    src="https://www.youtube.com/embed/xudfEww9pVQ" 
                    title="Phim tư liệu Ngô Đình Diệm" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Dành cho giáo viên */}
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brown-red">
                    <h3 className="text-3xl font-display font-bold text-red-earth mb-4 flex items-center">
                        <TeacherIcon className="w-8 h-8 mr-3"/> Dành cho giáo viên
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Giáo án mẫu, công cụ đánh giá năng lực học sinh.</li>
                        <li>Hướng dẫn tích hợp công nghệ (Canva, Quizizz, Google Form...).</li>
                        <li>Nguồn tư liệu tham khảo phong phú và đã được kiểm chứng.</li>
                    </ul>
                </div>
                {/* Dành cho học sinh */}
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-moss-green">
                    <h3 className="text-3xl font-display font-bold text-moss-green mb-4 flex items-center">
                       <StudentIcon className="w-8 h-8 mr-3"/> Dành cho học sinh
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Video bài giảng ngắn gọn, dễ hiểu (5–10 phút).</li>
                        <li>Hệ thống bài luyện trắc nghiệm theo từng chuyên đề.</li>
                        <li>Mục “Thử thách lịch sử” với các trò chơi tương tác (gamification).</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// Phần 5: Góp ý & Liên hệ
const ContactSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <blockquote className="text-2xl italic text-gray-700 mb-8">
                “Dân ta phải biết sử ta,<br/>Cho tường gốc tích nước nhà Việt Nam.”
                <cite className="block not-italic mt-4 font-semibold text-brown-red">— Hồ Chí Minh —</cite>
            </blockquote>
            <div className="bg-ivory/60 p-8 rounded-lg shadow-lg border border-bronze-gold/30">
                <h3 className="text-3xl font-display font-bold text-brown-red mb-6">Góp ý & Liên hệ</h3>
                <form className="text-left max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Tên</label>
                        <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bronze-gold"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bronze-gold"/>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">Vai trò</label>
                      <select id="role" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bronze-gold bg-white">
                        <option>Giáo viên</option>
                        <option>Học sinh</option>
                        <option>Khác</option>
                      </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Nội dung góp ý</label>
                        <textarea id="message" rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bronze-gold"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="px-8 py-3 bg-brown-red text-white font-bold rounded-full text-lg hover:bg-red-earth transition-colors duration-300 shadow-md">Gửi góp ý</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
);

// Phần 6: Giới thiệu giảng viên
const TeacherSection = () => (
    <section className="py-20 bg-ivory/50">
        <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-white p-8 rounded-lg shadow-xl border border-bronze-gold/40 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-ivory border-4 border-bronze-gold flex items-center justify-center overflow-hidden">
                   <img src="/avatar-vo-van-dung.png" alt="Võ Văn Dũng" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl font-display font-bold text-red-earth">Võ Văn Dũng</h3>
                <p className="text-lg text-gray-600 mt-1">25 năm kinh nghiệm giảng dạy Lịch sử THPT</p>
                <p className="text-md text-gray-500 mt-2">Trường PT DTNT THPT Bình Phước, tỉnh Bình Phước</p>
                <p className="text-md text-gray-500 mt-1">📞 ĐT/Zalo: 0907130900</p>
            </div>
        </div>
    </section>
);

// Phần cuối: Footer
const Footer = () => (
    <footer className="bg-brown-red text-ivory/80 py-8">
        <div className="container mx-auto px-4 text-center">
            <p className="font-display text-xl mb-2">“Khám phá lịch sử – Nuôi dưỡng lòng yêu nước”</p>
            <div className="flex justify-center gap-6 my-4">
                <a href="#" className="hover:text-white">Trang chủ</a>
                <a href="#resources" className="hover:text-white">Tải học liệu</a>
                <a href="#" className="hover:text-white">Liên hệ</a>
            </div>
            <p className="text-sm">Bản quyền © 2025 Trường PT DTNT THPT Bình Phước. All rights reserved.</p>
        </div>
    </footer>
);


// Component App chính
const App: React.FC = () => {
  return (
    <div>
      <MarqueeBanner />
      <HeroSection />
      <main>
        <ReasonsSection />
        <ResourcesSection />
        <ExperienceSection />
        <ContactSection />
        <TeacherSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
