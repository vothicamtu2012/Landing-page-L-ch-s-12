import React from 'react';
import { BookIcon, TeacherIcon, PuzzleIcon, MindmapIcon, LocalIcon, GameIcon, VideoIcon } from './components/Icons';


const MarqueeBanner = () => (
  <div className="bg-red-earth text-ivory overflow-hidden whitespace-nowrap">
    <div className="inline-block animate-marquee py-2">
      <h2 className="text-3xl font-serif mx-8">Trường PT DTNT THPT tỉnh Đồng Nai - Tổ : TDQP - Sử - Địa - GDKT&amp;PL</h2>
    </div>
    <div className="inline-block animate-marquee py-2">
      <h2 className="text-3xl font-serif mx-8">Trường PT DTNT THPT tỉnh Đồng Nai - Tổ : TDQP - Sử - Địa - GDKT&amp;PL</h2>
    </div>
  </div>
);


const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center text-center text-ivory bg-cover bg-center" style={{ backgroundImage: "url('/hero-background.png')" }}>
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 p-4">
      <h1 className="text-6xl md:text-8xl font-display font-black leading-tight drop-shadow-md">
        Khám phá Lịch sử –<br />Nuôi dưỡng lòng yêu nước
      </h1>
      <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">
        Học liệu số môn Lịch sử 12 – Dành cho giáo viên &amp; học sinh THPT theo chương trình GDPT 2018.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-brown-red hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
          Khám phá ngay
        </button>
        <button className="bg-ivory hover:bg-opacity-90 text-brown-red font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
          Tải học liệu miễn phí
        </button>
      </div>
    </div>
  </section>
);

const WhyChooseSection = () => (
  <section className="py-20 px-4 bg-ivory">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-display text-red-earth mb-12">Tại sao nên chọn học liệu số Lịch sử 12?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md border border-bronze-gold/30 hover:shadow-xl hover:border-bronze-gold transition-all duration-300 transform hover:-translate-y-2">
          <TeacherIcon className="w-12 h-12 mx-auto mb-4 text-brown-red" />
          <h3 className="text-2xl font-display mb-2">Giáo viên dạy dễ hơn</h3>
          <p>Nội dung biên soạn theo GDPT 2018, có sẵn bài giảng điện tử, tiết kiệm thời gian chuẩn bị.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md border border-bronze-gold/30 hover:shadow-xl hover:border-bronze-gold transition-all duration-300 transform hover:-translate-y-2">
          <BookIcon className="w-12 h-12 mx-auto mb-4 text-brown-red" />
          <h3 className="text-2xl font-display mb-2">Học sinh hứng thú hơn</h3>
          <p>Video, quiz, trò chơi, infographic sinh động giúp tiếp thu kiến thức một cách tự nhiên và hiệu quả.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md border border-bronze-gold/30 hover:shadow-xl hover:border-bronze-gold transition-all duration-300 transform hover:-translate-y-2">
          <LocalIcon className="w-12 h-12 mx-auto mb-4 text-brown-red" />
          <h3 className="text-2xl font-display mb-2">Lịch sử gắn liền thực tế</h3>
          <p>Cập nhật nội dung liên hệ thực tiễn, kết nối lịch sử địa phương, bồi đắp tình yêu quê hương.</p>
        </div>
      </div>
    </div>
  </section>
);

const ResourcesSection = () => {
    const resources = [
        { title: "Bài giảng điện tử", icon: <BookIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Bài tập lịch sử", icon: <PuzzleIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Bản đồ tư duy & Timeline", icon: <MindmapIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Tư liệu lịch sử địa phương", icon: <LocalIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Trò chơi & Quiz", icon: <GameIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Video bài giảng ngắn", icon: <VideoIcon className="w-10 h-10 text-brown-red mb-3"/> },
    ];

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-display text-red-earth mb-12">Kho học liệu "Tất cả tài nguyên bạn cần"</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {resources.map((res, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-6 bg-ivory rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 aspect-square">
                           {res.icon}
                           <h3 className="font-semibold text-center">{res.title}</h3>
                        </div>
                    ))}
                </div>
                 <div className="mt-12">
                   <button className="bg-red-earth hover:bg-opacity-90 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg">
                        video tư liệu lịch sử
                    </button>
                </div>
            </div>
        </section>
    );
};


const ExperienceSection = () => {
  const youtubeVideos = [
    { id: 'xudfEww9pVQ', title: 'Phim tư liệu Ngô Đình Diệm' },
    { id: 'BTE8r9kRjvs', title: 'Video 2' },
    { id: 'id3', title: 'Video 3' },
    { id: 'id4', title: 'Video 4' },
    { id: 'id5', title: 'Video 5' },
    { id: 'id6', title: 'Video 6' },
  ];

  return (
    <section className="py-20 px-4 bg-ivory">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display text-red-earth mb-12">Dạy – Học – Trải nghiệm cùng nhau</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {youtubeVideos.map(video => (
            <div key={video.id} className="aspect-w-1 aspect-h-1 bg-black rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brown-red">
            <h3 className="text-2xl font-display mb-4 flex items-center gap-3"><TeacherIcon className="w-8 h-8"/>Dành cho giáo viên</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Giáo án mẫu, công cụ đánh giá năng lực học sinh.</li>
              <li>Hướng dẫn tích hợp công nghệ (Canva, Quizizz, Google Form...).</li>
              <li>Nguồn tư liệu tham khảo phong phú và đã được kiểm chứng.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-moss-green">
            <h3 className="text-2xl font-display mb-4 flex items-center gap-3"><BookIcon className="w-8 h-8"/>Dành cho học sinh</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Video bài giảng ngắn gọn, dễ hiểu (5–10 phút).</li>
              <li>Hệ thống bài luyện trắc nghiệm theo từng chuyên đề.</li>
              <li>Mục “Thử thách lịch sử” với các trò chơi tương tác (gamification).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-display text-red-earth mb-4">“Dân ta phải biết sử ta, <br/>Cho tường gốc tích nước nhà Việt Nam.”</h2>
      <p className="mb-10 text-lg font-semibold">- Hồ Chí Minh -</p>
      <div className="max-w-xl mx-auto bg-ivory/50 p-8 rounded-lg shadow-inner border border-bronze-gold/30">
        <h3 className="text-2xl font-display text-brown-red mb-6">Góp ý & Liên hệ</h3>
        <form className="space-y-4 text-left">
          <input type="text" placeholder="Tên của bạn" className="w-full p-3 rounded border border-bronze-gold/50 focus:outline-none focus:ring-2 focus:ring-brown-red" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded border border-bronze-gold/50 focus:outline-none focus:ring-2 focus:ring-brown-red" />
          <select className="w-full p-3 rounded border border-bronze-gold/50 focus:outline-none focus:ring-2 focus:ring-brown-red bg-white">
            <option>Tôi là Giáo viên</option>
            <option>Tôi là Học sinh</option>
          </select>
          <textarea placeholder="Nội dung góp ý" rows={4} className="w-full p-3 rounded border border-bronze-gold/50 focus:outline-none focus:ring-2 focus:ring-brown-red"></textarea>
          <button type="submit" className="w-full bg-brown-red hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">Gửi góp ý</button>
        </form>
      </div>
    </div>
  </section>
);

const TeacherSection = () => (
  <section className="py-20 px-4 bg-ivory">
    <div className="max-w-md mx-auto text-center bg-white p-10 rounded-lg shadow-xl border border-bronze-gold/50">
       <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 border-4 border-bronze-gold flex items-center justify-center">
        <img src="/avatar-vo-van-dung.png" alt="Ảnh đại diện Thầy Võ Văn Dũng" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-3xl font-display text-red-earth">Võ Văn Dũng</h3>
      <p className="text-lg mt-2 mb-4">25 năm kinh nghiệm giảng dạy Lịch sử THPT</p>
      <p className="text-gray-600">Trường PT DTNT THPT tỉnh Đồng Nai</p>
      <p className="text-gray-600 mt-1">ĐT/Zalo: 0907130900</p>
    </div>
  </section>
);

const Footer = () => (
    <footer className="bg-red-earth text-ivory/80 py-10 px-4 text-center">
        <p className="text-lg font-display">“Khám phá lịch sử – Nuôi dưỡng lòng yêu nước”</p>
        <div className="flex justify-center gap-6 my-4">
            <a href="#" className="hover:text-white">Trang chủ</a>
            <a href="#" className="hover:text-white">Tải học liệu</a>
            <a href="#" className="hover:text-white">Liên hệ</a>
        </div>
        <p className="text-sm">Bản quyền © 2025 Trường PT DTNT THPT tỉnh Đồng Nai</p>
    </footer>
);


const App = () => {
  return (
    <div>
      <MarqueeBanner />
      <main>
        <HeroSection />
        <WhyChooseSection />
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