import React from 'react';
import { TeacherIcon, StudentIcon, GlobeIcon, BookIcon, PuzzleIcon, MindmapIcon, LocalIcon, GameIcon, VideoIcon } from './components/Icons';

// Component cho dòng chữ chạy
const MarqueeBanner = () => {
  return (
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
};

// Component cho các card tài nguyên
const ResourceCard = ({ icon, title, buttonText }: { icon: React.ReactNode, title: string, buttonText: string }) => (
  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-md border border-bronze-gold/30 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="text-brown-red mb-4">{icon}</div>
    <h3 className="font-display text-xl font-bold text-brown-red mb-4">{title}</h3>
    <a href="#" className="mt-auto bg-transparent border-2 border-brown-red text-brown-red font-semibold py-2 px-6 rounded-full hover:bg-brown-red hover:text-white transition-colors duration-300">
      {buttonText}
    </a>
  </div>
);

function App() {
  return (
    <div className="bg-ivory font-sans text-gray-800">
      <MarqueeBanner />

      {/* Phần 1: Hero Section */}
      <header 
        className="relative min-h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.imgur.com/Gk5gS3B.jpeg')"}}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10 p-4">
          <h1 className="font-display text-5xl md:text-7xl font-black mb-4 animate-fade-in-down" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
            Khám phá Lịch sử – Nuôi dưỡng lòng yêu nước
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 animate-fade-in-up" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
            Học liệu số môn Lịch sử 12 – Dành cho giáo viên & học sinh THPT theo chương trình GDPT 2018.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <a href="#resources" className="bg-brown-red hover:bg-red-earth text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg">
              Khám phá ngay
            </a>
            <a href="#download" className="bg-ivory text-red-earth font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg">
              Tải học liệu miễn phí
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 md:py-24 space-y-20">
        {/* Phần 2: Lý do */}
        <section className="text-center">
          <h2 className="font-display text-4xl font-bold mb-12 text-brown-red">Tại sao nên chọn học liệu số Lịch sử 12?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-bronze-gold/40 rounded-lg shadow-sm hover:shadow-xl hover:border-bronze-gold transition-all duration-300">
              <TeacherIcon className="w-16 h-16 mx-auto mb-4 text-moss-green" />
              <h3 className="font-display text-2xl font-bold mb-2 text-red-earth">Giáo viên dạy dễ hơn</h3>
              <p>Nội dung biên soạn theo GDPT 2018, tích hợp bài giảng điện tử và công cụ đa dạng.</p>
            </div>
            <div className="p-8 border border-bronze-gold/40 rounded-lg shadow-sm hover:shadow-xl hover:border-bronze-gold transition-all duration-300">
              <StudentIcon className="w-16 h-16 mx-auto mb-4 text-moss-green" />
              <h3 className="font-display text-2xl font-bold mb-2 text-red-earth">Học sinh hứng thú hơn</h3>
              <p>Video, quiz, trò chơi, infographic sinh động giúp giờ học không còn nhàm chán.</p>
            </div>
            <div className="p-8 border border-bronze-gold/40 rounded-lg shadow-sm hover:shadow-xl hover:border-bronze-gold transition-all duration-300">
              <GlobeIcon className="w-16 h-16 mx-auto mb-4 text-moss-green" />
              <h3 className="font-display text-2xl font-bold mb-2 text-red-earth">Lịch sử gắn liền thực tế</h3>
              <p>Cập nhật nội dung liên hệ lịch sử địa phương, giúp học sinh hiểu sâu sắc cội nguồn.</p>
            </div>
          </div>
        </section>

        {/* Phần 3: Kho học liệu */}
        <section id="resources" className="text-center">
          <h2 className="font-display text-4xl font-bold mb-4 text-brown-red">Kho học liệu</h2>
          <p className="text-xl mb-12 text-gray-700">Tất cả tài nguyên bạn cần cho một năm học Lịch sử hiệu quả.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard icon={<BookIcon className="w-12 h-12"/>} title="Bài giảng điện tử" buttonText="Xem chi tiết" />
            <ResourceCard icon={<PuzzleIcon className="w-12 h-12"/>} title="Bài tập lịch sử" buttonText="Xem chi tiết" />
            <ResourceCard icon={<MindmapIcon className="w-12 h-12"/>} title="Bản đồ tư duy & Timeline" buttonText="Xem chi tiết" />
            <ResourceCard icon={<LocalIcon className="w-12 h-12"/>} title="Tư liệu lịch sử địa phương" buttonText="Xem chi tiết" />
            <ResourceCard icon={<GameIcon className="w-12 h-12"/>} title="Trò chơi & Quiz" buttonText="Xem chi tiết" />
            <ResourceCard icon={<VideoIcon className="w-12 h-12"/>} title="Video bài giảng ngắn" buttonText="Xem chi tiết" />
          </div>
           <a href="#" id="download" className="mt-12 inline-block bg-red-earth hover:bg-brown-red text-white font-bold py-3 px-10 rounded-full text-xl transition-transform transform hover:scale-105 shadow-lg">
             Tải trọn bộ học liệu (Miễn phí)
           </a>
        </section>

        {/* Phần 4: Dạy - Học */}
        <section>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-moss-green">
              <h3 className="font-display text-3xl font-bold mb-4 text-moss-green flex items-center"><TeacherIcon className="w-8 h-8 mr-3"/>Dành cho giáo viên</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Giáo án mẫu, công cụ đánh giá năng lực học sinh.</li>
                <li>Hướng dẫn sử dụng công nghệ (Canva, Quizizz...).</li>
                <li>Nguồn tư liệu tham khảo phong phú và đáng tin cậy.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-bronze-gold">
              <h3 className="font-display text-3xl font-bold mb-4 text-bronze-gold flex items-center"><StudentIcon className="w-8 h-8 mr-3"/>Dành cho học sinh</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Video bài giảng ngắn gọn, dễ hiểu (5–10 phút).</li>
                  <li>Bài luyện trắc nghiệm theo từng chuyên đề, bám sát đề thi.</li>
                  <li>Mục “Thử thách lịch sử” để vừa học vừa chơi.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Phần 5: Liên hệ */}
        <section className="bg-moss-green text-ivory rounded-xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <h2 className="font-display text-3xl font-bold mb-4">Góp ý & Liên hệ</h2>
              <blockquote className="border-l-4 border-bronze-gold pl-4 italic text-xl">
                <p>"Dân ta phải biết sử ta,</p>
                <p>Cho tường gốc tích nước nhà Việt Nam.”</p>
                <cite className="not-italic font-semibold block mt-2">— Hồ Chí Minh</cite>
              </blockquote>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Tên của bạn" className="w-full p-3 rounded bg-ivory/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-bronze-gold"/>
              <input type="email" placeholder="Email" className="w-full p-3 rounded bg-ivory/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-bronze-gold"/>
              <select className="w-full p-3 rounded bg-ivory/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-bronze-gold">
                <option>Bạn là Giáo viên</option>
                <option>Bạn là Học sinh</option>
                <option>Vai trò khác</option>
              </select>
              <textarea placeholder="Nội dung góp ý" rows={4} className="w-full p-3 rounded bg-ivory/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-bronze-gold"></textarea>
              <button type="submit" className="w-full bg-brown-red hover:bg-red-earth text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300">Gửi góp ý</button>
            </form>
          </div>
        </section>

        {/* Phần 6: Giảng viên */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-xl border border-bronze-gold/50">
            <h3 className="font-display text-3xl font-bold mb-4 text-red-earth">Giảng viên biên soạn</h3>
            <p className="text-2xl font-semibold text-gray-800">Võ Văn Dũng</p>
            <p className="text-lg text-gray-600">25 năm kinh nghiệm giảng dạy Lịch sử THPT</p>
            <p className="text-md text-gray-500 mt-2">Trường PT DTNT THPT Bình Phước, tỉnh Bình Phước</p>
            <p className="text-md text-gray-600 font-semibold mt-4">ĐT/Zalo: 0907 130 900</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brown-red text-ivory/80 text-center p-8">
        <p className="font-display text-xl font-bold mb-2">“Khám phá lịch sử – Nuôi dưỡng lòng yêu nước”</p>
        <div className="flex justify-center gap-6 my-4">
          <a href="#" className="hover:text-white">Trang chủ</a>
          <a href="#resources" className="hover:text-white">Tải học liệu</a>
          <a href="#" className="hover:text-white">Liên hệ</a>
        </div>
        <p className="text-sm">Bản quyền © 2025 Trường PT DTNT THPT Bình Phước</p>
      </footer>
    </div>
  );
}

export default App;
