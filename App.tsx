import React from 'react';
import { TeacherIcon, StudentIcon, GlobeIcon, BookIcon, PuzzleIcon, MindmapIcon, LocalIcon, GameIcon, VideoIcon } from './components/Icons';

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center text-center bg-ivory overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-photo/old-map-vietnam_93675-96109.jpg')] bg-cover bg-center opacity-10"></div>
    <div className="relative z-10 p-8 animate-fade-in">
      <h1 className="font-display text-5xl md:text-7xl font-bold text-brown-red drop-shadow-md">
        Khám phá Lịch sử – Nuôi dưỡng lòng yêu nước
      </h1>
      <p className="mt-4 text-lg md:text-xl text-moss-green max-w-3xl mx-auto">
        Học liệu số môn Lịch sử 12 – Dành cho giáo viên & học sinh THPT theo chương trình GDPT 2018.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#resources" className="px-8 py-4 bg-brown-red text-white font-bold rounded-lg shadow-lg hover:bg-red-earth transition-all duration-300 transform hover:scale-105">
          Khám phá ngay
        </a>
        <a href="#download" className="px-8 py-4 bg-moss-green text-white font-bold rounded-lg shadow-lg hover:bg-bronze-gold transition-all duration-300 transform hover:scale-105">
          Tải học liệu miễn phí
        </a>
      </div>
    </div>
  </section>
);

const WhyChooseUsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="font-display text-4xl font-bold text-brown-red mb-12">Tại sao nên chọn học liệu số Lịch sử 12?</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="p-8 border border-bronze-gold/20 rounded-lg shadow-md hover:shadow-xl hover:border-bronze-gold transition-all duration-300 transform hover:-translate-y-2">
          <TeacherIcon className="w-16 h-16 mx-auto mb-4 text-brown-red" />
          <h3 className="text-xl font-bold text-moss-green mb-2">Giáo viên dạy dễ hơn</h3>
          <p>Nội dung biên soạn theo GDPT 2018, có sẵn bài giảng điện tử, dễ dàng tích hợp.</p>
        </div>
        <div className="p-8 border border-bronze-gold/20 rounded-lg shadow-md hover:shadow-xl hover:border-bronze-gold transition-all duration-300 transform hover:-translate-y-2">
          <StudentIcon className="w-16 h-16 mx-auto mb-4 text-brown-red" />
          <h3 className="text-xl font-bold text-moss-green mb-2">Học sinh hứng thú hơn</h3>
          <p>Video, quiz, trò chơi, và infographic sinh động, biến giờ học Lịch sử thành trải nghiệm.</p>
        </div>
        <div className="p-8 border border-bronze-gold/20 rounded-lg shadow-md hover:shadow-xl hover:border-bronze-gold transition-all duration-300 transform hover:-translate-y-2">
          <GlobeIcon className="w-16 h-16 mx-auto mb-4 text-brown-red" />
          <h3 className="text-xl font-bold text-moss-green mb-2">Lịch sử gắn liền thực tế</h3>
          <p>Cập nhật nội dung liên hệ lịch sử địa phương, giúp học sinh hiểu sâu hơn về cội nguồn.</p>
        </div>
      </div>
    </div>
  </section>
);

const resources = [
  { icon: BookIcon, title: "Bài giảng điện tử" },
  { icon: PuzzleIcon, title: "Bài tập lịch sử" },
  { icon: MindmapIcon, title: "Bản đồ tư duy & Timeline" },
  { icon: LocalIcon, title: "Tư liệu lịch sử địa phương" },
  { icon: GameIcon, title: "Trò chơi & Quiz" },
  { icon: VideoIcon, title: "Video bài giảng ngắn" },
];

const ResourcesSection = () => (
  <section id="resources" className="py-20 bg-ivory">
    <div className="container mx-auto px-6 text-center">
      <h2 className="font-display text-4xl font-bold text-brown-red mb-4">Kho học liệu</h2>
      <p className="text-xl text-moss-green mb-12">Tất cả tài nguyên bạn cần</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 group">
            <item.icon className="w-12 h-12 mx-auto mb-4 text-bronze-gold" />
            <h3 className="text-lg font-bold text-moss-green mb-4">{item.title}</h3>
            <a href="#" className="text-brown-red font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Xem chi tiết &rarr;</a>
          </div>
        ))}
      </div>
      <div id="download" className="mt-16">
        <a href="#" className="px-10 py-4 bg-red-earth text-white text-lg font-bold rounded-lg shadow-lg hover:bg-brown-red transition-all duration-300 transform hover:scale-105">
          Tải trọn bộ học liệu (Miễn phí)
        </a>
      </div>
    </div>
  </section>
);

const ForTeachersStudentsSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="font-display text-4xl font-bold text-brown-red mb-12 text-center">Dạy – Học – Trải nghiệm cùng nhau</h2>
            <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="bg-ivory p-8 rounded-lg border-l-4 border-brown-red">
                    <h3 className="text-2xl font-bold text-moss-green mb-4">👩‍🏫 Dành cho giáo viên</h3>
                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                        <li>Giáo án mẫu, công cụ đánh giá năng lực học sinh.</li>
                        <li>Hướng dẫn tích hợp công nghệ (Canva, Quizizz, Google Forms...).</li>
                        <li>Nguồn tư liệu phong phú, đã được kiểm duyệt.</li>
                    </ul>
                </div>
                <div className="bg-ivory p-8 rounded-lg border-l-4 border-moss-green">
                    <h3 className="text-2xl font-bold text-moss-green mb-4">👨‍🎓 Dành cho học sinh</h3>
                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                        <li>Video bài giảng ngắn gọn, dễ hiểu (5-10 phút).</li>
                        <li>Bài luyện trắc nghiệm theo từng chuyên đề, có giải thích.</li>
                        <li>Mục "Thử thách lịch sử" với các trò chơi tương tác (gamification).</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

const ContactSection = () => (
  <section id="contact" className="py-20 bg-ivory">
    <div className="container mx-auto px-6 max-w-4xl text-center">
        <blockquote className="mb-12">
            <p className="font-display text-3xl italic text-brown-red">“Dân ta phải biết sử ta,<br/>Cho tường gốc tích nước nhà Việt Nam.”</p>
            <cite className="block mt-4 font-bold text-moss-green">— Hồ Chí Minh —</cite>
        </blockquote>
        <div className="bg-white p-8 rounded-lg shadow-lg text-left max-w-lg mx-auto border border-bronze-gold/20">
            <h3 className="text-2xl font-bold text-brown-red mb-6 text-center">Góp ý & Liên hệ</h3>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-moss-green font-semibold mb-2">Tên</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-bronze-gold/30 rounded-lg focus:ring-bronze-gold focus:border-bronze-gold" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-moss-green font-semibold mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-bronze-gold/30 rounded-lg focus:ring-bronze-gold focus:border-bronze-gold" />
                </div>
                 <div className="mb-4">
                    <label htmlFor="role" className="block text-moss-green font-semibold mb-2">Vai trò</label>
                    <select id="role" className="w-full px-4 py-2 border border-bronze-gold/30 rounded-lg focus:ring-bronze-gold focus:border-bronze-gold bg-white">
                        <option>Giáo viên</option>
                        <option>Học sinh</option>
                        <option>Khác</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-moss-green font-semibold mb-2">Nội dung góp ý</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-bronze-gold/30 rounded-lg focus:ring-bronze-gold focus:border-bronze-gold"></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-brown-red text-white font-bold rounded-lg hover:bg-red-earth transition-colors">Gửi góp ý</button>
            </form>
        </div>
    </div>
  </section>
);

const LecturerSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-2xl text-center">
             <div className="bg-ivory p-8 rounded-lg shadow-xl border border-bronze-gold/40">
                <h3 className="text-2xl font-bold text-brown-red">Võ Văn Dũng</h3>
                <p className="text-moss-green mt-2">25 năm kinh nghiệm giảng dạy Lịch sử THPT</p>
                <p className="text-gray-600 mt-2">Trường PT DTNT THPT Bình Phước, tỉnh Bình Phước</p>
                <p className="mt-4 font-semibold text-brown-red">📞 ĐT/Zalo: 0907130900</p>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-10 bg-moss-green text-ivory/80">
        <div className="container mx-auto px-6 text-center">
            <p className="font-display text-xl font-bold text-white mb-4">“Khám phá lịch sử – Nuôi dưỡng lòng yêu nước”</p>
            <div className="flex justify-center gap-6 my-4">
                <a href="#root" className="hover:text-white">Trang chủ</a>
                <a href="#download" className="hover:text-white">Tải học liệu</a>
                <a href="#contact" className="hover:text-white">Liên hệ</a>
            </div>
            <p className="text-sm mt-4">Bản quyền © 2025 Trường PT DTNT THPT Bình Phước</p>
        </div>
    </footer>
);


export default function App() {
  return (
    <div className="antialiased">
      <HeroSection />
      <WhyChooseUsSection />
      <ResourcesSection />
      <ForTeachersStudentsSection />
      <ContactSection />
      <LecturerSection />
      <Footer />
    </div>
  );
}