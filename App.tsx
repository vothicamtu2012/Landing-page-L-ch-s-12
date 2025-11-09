
import React from 'react';
import { BookIcon, TeacherIcon, PuzzleIcon, MindmapIcon, LocalIcon, GameIcon, SoftwareIcon } from './components/Icons';

const MarqueeBanner = () => (
  <div className="bg-red-earth text-ivory overflow-hidden whitespace-nowrap">
    <div className="inline-block animate-marquee py-2">
      <h2 className="text-3xl font-serif mx-8">Trường PT DTNT THPT Bình Phước tỉnh Đồng Nai - Tổ : TDQP - Sử - Địa - GDKTPL</h2>
    </div>
    <div className="inline-block animate-marquee py-2">
      <h2 className="text-3xl font-serif mx-8">Trường PT DTNT THPT Bình Phước tỉnh Đồng Nai - Tổ : TDQP - Sử - Địa - GDKTPL</h2>
    </div>
  </div>
);

const HeroSection = () => {
  const handleDiscoverClick = () => {
    document.getElementById('resources-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative h-screen flex items-end justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.postimg.cc/v8zbYnCT/hinh-nen-chinh.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 p-4 pb-20 md:pb-32 w-full text-center">
        <h1 className="text-4xl md:text-6xl font-display font-black leading-tight md:leading-snug drop-shadow-md text-yellow-400">
          Khám phá Lịch sử – Nuôi dưỡng lòng yêu nước
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-ivory leading-relaxed max-w-4xl mx-auto">
          Học liệu số môn Lịch sử 12 – Dành cho giáo viên &amp; học sinh THPT theo chương trình GDPT 2018.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button 
            onClick={handleDiscoverClick}
            className="bg-yellow-400 hover:bg-yellow-300 text-red-earth font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
            Khám phá ngay
          </button>
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => (
  <section className="py-16 px-4 bg-ivory">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-display text-red-earth mb-12">Tại sao nên chọn học liệu số Lịch sử 12?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md border border-bronze-gold/30 hover:shadow-xl hover:border-bronze-gold transition-all duration-300 transform hover:-translate-y-2">
          <TeacherIcon className="w-12 h-12 mx-auto mb-4 text-brown-red" />
          <h3 className="text-2xl font-display mb-2">Giáo viên dạy dễ hơn</h3>
          <p className="leading-relaxed">Nội dung biên soạn theo GDPT 2018, có sẵn bài giảng điện tử, tiết kiệm thời gian chuẩn bị.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md border border-bronze-gold/30 hover:shadow-xl hover:border-bronze-gold transition-all duration-300 transform hover:-translate-y-2">
          <BookIcon className="w-12 h-12 mx-auto mb-4 text-brown-red" />
          <h3 className="text-2xl font-display mb-2">Học sinh hứng thú hơn</h3>
          <p className="leading-relaxed">Video, quiz, trò chơi, infographic sinh động giúp tiếp thu kiến thức một cách tự nhiên và hiệu quả.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md border border-bronze-gold/30 hover:shadow-xl hover:border-bronze-gold transition-all duration-300 transform hover:-translate-y-2">
          <LocalIcon className="w-12 h-12 mx-auto mb-4 text-brown-red" />
          <h3 className="text-2xl font-display mb-2">Lịch sử gắn liền thực tế</h3>
          <p className="leading-relaxed">Cập nhật nội dung liên hệ thực tiễn, kết nối lịch sử địa phương, bồi đắp tình yêu quê hương.</p>
        </div>
      </div>
    </div>
  </section>
);

const SchoolVideoSection = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-display text-red-earth mb-4">Luyện sử online – Gắn kết tri thức thời đại số</h2>
      <p className="text-xl italic text-brown-red mb-8">Luyện sử mỗi ngày – Dựng xây tri thức Việt</p>
      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg shadow-lg overflow-hidden relative border-4 border-bronze-gold">
        <iframe
          src="https://www.youtube.com/embed/eKdvUZkeX5I"
          title="Luyện sử online – Gắn kết tri thức thời đại số"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  </section>
);

const ResourcesSection = ({ onResourceClick }) => {
    const resources = [
        { title: "Bài giảng điện tử", icon: <BookIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Bài tập lịch sử", icon: <PuzzleIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Sơ đồ tư duy Chủ đề", icon: <MindmapIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Luyện thi tốt nghiệp THPT", icon: <TeacherIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Trò chơi & Quiz", icon: <GameIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Hướng dẫn học các phần mềm", icon: <SoftwareIcon className="w-10 h-10 text-brown-red mb-3"/> },
    ];

    return (
        <section id="resources-section" className="py-16 px-4 bg-ivory">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-display text-red-earth mb-12">Kho học liệu: Tất cả tài nguyên bạn cần</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {resources.map((res, index) => {
                        const isInteractive = ["Bài giảng điện tử", "Bài tập lịch sử", "Sơ đồ tư duy Chủ đề", "Luyện thi tốt nghiệp THPT", "Hướng dẫn học các phần mềm"].includes(res.title);
                        return (
                            <div 
                                key={index} 
                                className={`flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 aspect-square ${isInteractive ? 'cursor-pointer hover:border-brown-red border-2 border-transparent' : 'cursor-not-allowed opacity-60'}`}
                                onClick={() => isInteractive && onResourceClick(res.title)}
                                role={isInteractive ? 'button' : undefined}
                                tabIndex={isInteractive ? 0 : -1}
                                onKeyDown={(e) => {
                                  if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
                                    e.preventDefault();
                                    onResourceClick(res.title);
                                  }
                                }}
                            >
                               {res.icon}
                               <h3 className="font-semibold text-center text-base">{res.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

const ExperienceSection = () => {
  const youtubeVideos = [
    { id: 'xudfEww9pVQ', title: 'Phim tư liệu Ngô Đình Diệm' },
    { id: 'BTE8r9kRjvs', title: 'Video 2' },
    { id: 'wEOdNVNQGRA', title: 'Video 3' },
    { id: 'KnWqkjZ64EA', title: 'Video 4' },
    { id: 'injdXI30g2M', title: 'Video 5' },
    { id: 'jy7Z3oYOp7w', title: 'Video 6' },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display text-red-earth mb-12 tracking-wide">Phim tư liệu: Lịch sử Việt Nam 1954-1975</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {youtubeVideos.map(video => (
            <div key={video.id} className="aspect-w-16 aspect-h-9 bg-black rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
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
          <div className="bg-ivory p-8 rounded-lg shadow-lg border-l-4 border-brown-red">
            <h3 className="text-2xl font-display mb-4 flex items-center gap-3"><TeacherIcon className="w-8 h-8"/>Dành cho giáo viên</h3>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>Giáo án mẫu, công cụ đánh giá năng lực học sinh.</li>
              <li>Hướng dẫn tích hợp công nghệ (Canva, Quizizz, Google Form...).</li>
              <li>Nguồn tư liệu tham khảo phong phú và đã được kiểm chứng.</li>
            </ul>
          </div>
          <div className="bg-ivory p-8 rounded-lg shadow-lg border-l-4 border-moss-green">
            <h3 className="text-2xl font-display mb-4 flex items-center gap-3"><BookIcon className="w-8 h-8"/>Dành cho học sinh</h3>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
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
  <section className="py-16 px-4 bg-ivory">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-display text-red-earth mb-4 leading-relaxed">“Dân ta phải biết sử ta, <br/>Cho tường gốc tích nước nhà Việt Nam.”</h2>
      <p className="mb-10 text-lg font-semibold">- Hồ Chí Minh -</p>
      <div className="max-w-xl mx-auto bg-white/50 p-8 rounded-lg shadow-inner border border-bronze-gold/30">
        <h3 className="text-2xl font-display text-brown-red mb-6">Góp ý & Liên hệ</h3>
        <form id="contact-form" className="space-y-4 text-left">
          <input type="text" name="ho_ten" placeholder="Tên của bạn" className="w-full p-3 rounded border border-bronze-gold/50 focus:outline-none focus:ring-2 focus:ring-brown-red" required />
          <input type="email" name="email" placeholder="Email" className="w-full p-3 rounded border border-bronze-gold/50 focus:outline-none focus:ring-2 focus:ring-brown-red" required />
          <select name="vai_tro" className="w-full p-3 rounded border border-bronze-gold/50 focus:outline-none focus:ring-2 focus:ring-brown-red bg-white">
            <option value="Giáo viên">Tôi là Giáo viên</option>
            <option value="Học sinh">Tôi là Học sinh</option>
          </select>
          <textarea name="noi_dung_gop_y" placeholder="Nội dung góp ý" rows={4} className="w-full p-3 rounded border border-bronze-gold/50 focus:outline-none focus:ring-2 focus:ring-brown-red"></textarea>
          <button type="submit" className="w-full bg-brown-red hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-wait">Gửi góp ý</button>
        </form>
      </div>
    </div>
  </section>
);

const TeacherSection = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-md mx-auto text-center bg-ivory p-10 rounded-lg shadow-xl border border-bronze-gold/50">
       <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 border-4 border-bronze-gold flex items-center justify-center">
        <img src="https://i.postimg.cc/k40wVpB0/avatar-giao-vien.png" alt="Ảnh đại diện Thầy Võ Văn Dũng" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-3xl font-display text-red-earth">Võ Văn Dũng</h3>
      <p className="text-lg mt-2 mb-4 leading-relaxed">25 năm kinh nghiệm giảng dạy Lịch sử THPT</p>
      <p className="text-gray-600 leading-relaxed">Trường PT DTNT THPT Bình Phước tỉnh Đồng Nai</p>
      <p className="text-gray-600 mt-1 leading-relaxed">ĐT/Zalo: 0907130900</p>
    </div>
  </section>
);

const PracticeRoomSection = () => {
    const schoolActivityImages = [
      'https://i.postimg.cc/PqYp5pYd/phong-thuc-hanh-1.jpg',
      'https://i.postimg.cc/tCN3zVzz/phong-thuc-hanh-2.jpg',
      'https://i.postimg.cc/W3t1H0pC/phong-thuc-hanh-3.jpg',
      'https://i.postimg.cc/d11m5b0V/phong-thuc-hanh-4.jpg',
      'https://i.postimg.cc/pX1g0ffp/phong-thuc-hanh-5.jpg',
      'https://i.postimg.cc/Y0xWzX4M/phong-thuc-hanh-6.jpg',
      'https://i.postimg.cc/L6T0NmwV/phong-thuc-hanh-7.jpg',
      'https://i.postimg.cc/3w9yFpB5/phong-thuc-hanh-8.jpg',
      'https://i.postimg.cc/rwM2tWzQ/phong-thuc-hanh-9.jpg',
      'https://i.postimg.cc/qvN1z7tT/phong-thuc-hanh-10.jpg',
    ];
  
    return (
      <section className="py-16 px-4 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
             <h2 className="text-4xl md:text-5xl font-display text-red-earth">Thư viện hình ảnh nhà trường</h2>
             <p className="mt-4 text-xl text-gray-700">Một số khoảnh khắc và hoạt động tiêu biểu</p>
          </div>
          
          <div className="relative group">
            <div className="flex overflow-x-auto scroll-snap-type-x-mandatory scroll-smooth scrollbar-thin rounded-lg">
              <div className="flex">
                {schoolActivityImages.map((src, index) => (
                  <div key={index} className="scroll-snap-align-center flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2">
                    <img
                      src={src}
                      alt={`Hình ảnh hoạt động của trường ${index + 1}`}
                      className="w-full h-80 object-cover rounded-lg shadow-lg border-4 border-white"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-gray-600 italic">Kéo chuột sang ngang để xem thêm ảnh</p>
        </div>
      </section>
    );
};

const SquareCarouselSection = () => {
    const memorableMomentsImages = [
        'https://i.postimg.cc/G2zMTbFw/khoanh-khac-1-jpg.png',
        'https://i.postimg.cc/x1JKVMt7/khoanh-khac-2-jpg-2.png',
        'https://i.postimg.cc/zXmLH6jB/khoanh-khac-3-jpg.png',
        'https://i.postimg.cc/Pq1VhB2Y/khoanh-khac-4-jpg.png',
        'https://i.postimg.cc/y8p3xdrJ/khoanh-khac-5-jpg.png',
        'https://i.postimg.cc/4xHsvxxx/khoanh-khac-6-jpg.png',
        'https://i.postimg.cc/jdsGdd7Z/khoanh-khac-7-jpg.png',
        'https://i.postimg.cc/6p2yL8Bq/khoanh-khac-8.jpg',
        'https://i.postimg.cc/YqrnLy0Z/khoanh-khac-9.jpg',
        'https://i.postimg.cc/tJ0X7cR2/khoanh-khac-10.jpg',
    ];
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? memorableMomentsImages.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === memorableMomentsImages.length - 1 ? 0 : prevIndex + 1));
    };

    const ArrowLeftIcon = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
    );

    const ArrowRightIcon = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    );

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display text-red-earth">Khoảnh khắc đáng nhớ</h2>
                    <p className="mt-4 text-xl text-gray-700">Những kỷ niệm được ghi lại</p>
                </div>

                <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
                    {memorableMomentsImages.map((src, index) => {
                        let offset = index - currentIndex;
                        // Handle wrap-around for seamless display
                        if (offset > memorableMomentsImages.length / 2) offset -= memorableMomentsImages.length;
                        if (offset < -memorableMomentsImages.length / 2) offset += memorableMomentsImages.length;

                        const isCenter = index === currentIndex;
                        
                        const transformStyle = {
                            transform: `translateX(${offset * 60}%) scale(${isCenter ? 1 : 0.7})`,
                            opacity: Math.max(1 - Math.abs(offset) * 0.4, 0),
                            zIndex: memorableMomentsImages.length - Math.abs(offset),
                        };

                        return (
                            <div
                                key={index}
                                className="absolute w-[60%] md:w-[40%] aspect-square transition-all duration-500 ease-out"
                                style={transformStyle}
                            >
                                <img
                                    src={src}
                                    alt={`Khoảnh khắc đáng nhớ ${index + 1}`}
                                    className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white"
                                    loading="lazy"
                                />
                            </div>
                        );
                    })}
                     <button 
                        onClick={goToPrevious}
                        className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 z-30 bg-white/60 rounded-full p-3 hover:bg-white transition-colors shadow-lg"
                        aria-label="Ảnh trước"
                    >
                        <ArrowLeftIcon className="w-6 h-6 text-brown-red"/>
                    </button>
                    <button 
                        onClick={goToNext}
                        className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 z-30 bg-white/60 rounded-full p-3 hover:bg-white transition-colors shadow-lg"
                        aria-label="Ảnh tiếp theo"
                    >
                        <ArrowRightIcon className="w-6 h-6 text-brown-red"/>
                    </button>
                </div>
                 <p className="text-center mt-12 text-gray-600 italic">Sử dụng nút bấm hai bên để xem thêm nhiều khoảnh khắc</p>
            </div>
        </section>
    );
};


const Footer = () => (
    <footer className="bg-red-earth text-ivory/80 py-10 px-4 text-center">
        <p className="text-lg font-display">“Khám phá lịch sử – Nuôi dưỡng lòng yêu nước”</p>
        <div className="flex justify-center gap-6 my-4">
            <a href="#" className="hover:text-white">Trang chủ</a>
            <a href="#" className="hover:text-white">Tải học liệu</a>
            <a href="#" className="hover:text-white">Liên hệ</a>
        </div>
        <p className="text-sm">Bản quyền © 2025 Trường PT DTNT THPT Bình Phước tỉnh Đồng Nai</p>
    </footer>
);

// --- Data ---
const topicsData = [
    { 
      title: "Chủ đề 1: Trật tự thế giới trong và sau chiến tranh lạnh",
      lessons: [
        { name: "Bài 1: Liên hợp quốc", url: "https://docs.google.com/presentation/d/1B-noDVJoRbOwuJwTFmUKyMFtboBhkOpK/edit?usp=sharing&ouid=107740259998793158800&rtpof=true&sd=true" },
        { name: "Bài 2: Trật tự thế giới trong Chiến tranh tranh lạnh", url: null },
        { name: "Bài 3: Trật tự thế giới sau Chiến tranh lạnh", url: null }
      ]
    },
    { title: "Chủ đề 2: Phong trào giải phóng dân tộc 1930-1945", lessons: [{ name: "Bài luyện tập: Chủ đề 2", url: "https://forms.gle/F13u5Avbnx8QcZVS9" }] },
    { title: "Chủ đề 3: Kháng chiến chống Pháp (1945-1954)", lessons: [] },
    { title: "Chủ đề 4: Xây dựng CNXH ở miền Bắc và đấu tranh thống nhất đất nước (1954-1975)", lessons: [] },
    { title: "Chủ đề 5: Cuộc kháng chiến chống Mỹ, cứu nước (1954-1975)", lessons: [] },
];

const exercisesData = [
    { name: "Bài tập trắc nghiệp theo chủ đề", url: null },
    { name: "Tự luận dạng Hỏi - Đáp", url: "https://drive.google.com/drive/folders/1af09hPRv30aMgbR374qPrrYIn3tU7HdH?usp=sharing" },
    { name: "Luyện đề thi tốt nghiệp THPT", url: "https://drive.google.com/drive/u/0/folders/1Z-9rU_HHBdlhm0y1bOr6BCaf_ZgNmHy0" }
];

const mindmapData = [
    { name: "Chủ đề 1", url: "https://drive.google.com/file/d/1V3FZaiBrYedHVGgJrAUGueDZCLc3PUGX/view?usp=sharing" },
    { name: "Chủ đề 2", url: "https://drive.google.com/file/d/1tGTFOd1-uOENIN7zRt8XfTaUzQ8QsOwh/view?usp=sharing" },
    { name: "Chủ đề 3", url: "https://drive.google.com/file/d/1RUDWqd8NaOV7EPykdBufq_8UkXsEoJBe/view?usp=sharing" },
    { name: "Chủ đề 4", url: "https://drive.google.com/file/d/1zf7LtC_QeXKeRUIFdudMaxbN-Xvy3iHy/view?usp=sharing" },
    { name: "Chủ đề 5", url: "https://drive.google.com/file/d/12LnWGs_CPQciYAjAsQ77rVs3WuqPrb85/view?usp=sharing" },
    { name: "Chủ đề 6", url: "https://drive.google.com/file/d/1Eco1u47C5UDOB-OQ3JIkUb9bPJwa21FC/view?usp=sharing" },
];

const softwareGuidesData = [
    { name: "Canva", url: "https://drive.google.com/drive/folders/1XWlHIJ49cz0DwOyf8cNLtUkMdhyez92e" },
    { name: "CapCut", url: "https://hoc.ductuenam.com/video/31989#678f910fe275cbc1908e2da6" },
    { name: "Google Form", url: null },
    { name: "Azota", url: null },
];

const graduationExamData = [
    { name: "Chủ đề 1", url: "https://forms.gle/r5wSkqF52boUZRy3A" },
    { name: "Chủ đề 2", url: "https://forms.gle/F13u5Avbnx8QcZVS9" },
    { name: "Chủ đề 3", url: "https://forms.gle/a7oDA6a6d4vHQebUA" },
    { name: "Chủ đề 4", url: null },
    { name: "Chủ đề 5", url: null },
    { name: "Chủ đề 6", url: null },
    { name: "Đề thi thử tốt nghiệp THPT", url: "https://drive.google.com/drive/u/0/folders/1Z-9rU_HHBdlhm0y1bOr6BCaf_ZgNmHy0" }
];

// --- Types ---
type Lesson = { name: string; url: string | null; };
type Exercise = { name: string; url: string | null; };
type Mindmap = { name: string; url: string | null; };
type SoftwareGuide = { name: string; url: string | null; };
  
// --- Modals ---
const LectureModal = ({ 
    isOpen, 
    onClose, 
    selectedTopic, 
    onTopicChange, 
    onViewContent,
    view,
    lessons,
    onBack,
    selectedLesson,
    onLessonSelect,
    onViewLessonContent,
}) => {
    if (!isOpen) return null;
  
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <div 
          className="bg-ivory p-8 rounded-lg shadow-xl w-full max-w-lg relative border-2 border-bronze-gold"
          onClick={e => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Đóng"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {view === 'selectTopic' && (
            <>
              <h3 id="modal-title" className="text-2xl font-display text-red-earth mb-6 text-center">Chọn chủ đề bài giảng</h3>
              <div className="space-y-6">
                <select 
                  value={selectedTopic}
                  onChange={e => onTopicChange(e.target.value)}
                  className="w-full p-3 rounded border border-bronze-gold/50 focus:outline-none focus:ring-2 focus:ring-brown-red bg-white text-lg"
                  aria-labelledby="modal-title"
                >
                  <option value="" disabled>-- Vui lòng chọn chủ đề --</option>
                  {topicsData.map(topic => <option key={topic.title} value={topic.title}>{topic.title}</option>)}
                </select>
                <button 
                  onClick={onViewContent}
                  disabled={!selectedTopic}
                  className="w-full bg-brown-red hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 text-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
                >
                  Xem danh sách bài học
                </button>
              </div>
            </>
          )}
  
          {view === 'viewLessons' && (
            <>
              <h3 id="modal-title" className="text-2xl font-display text-red-earth mb-6 text-center">{selectedTopic}</h3>
              <ul className="space-y-4 text-left text-lg text-gray-800 list-none p-0 max-h-60 overflow-y-auto">
                {lessons.map((lesson, index) => (
                   <li 
                    key={index} 
                    className={`p-3 rounded-md border-l-4 shadow-sm cursor-pointer transition-all duration-200 ${
                        selectedLesson?.name === lesson.name 
                        ? 'bg-brown-red/20 border-brown-red' 
                        : 'bg-white/50 border-transparent hover:bg-brown-red/10'
                    }`}
                    onClick={() => onLessonSelect(lesson)}
                    role="option"
                    aria-selected={selectedLesson?.name === lesson.name}
                  >
                    {lesson.name}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-4">
                 <button
                  onClick={onViewLessonContent}
                  disabled={!selectedLesson || !selectedLesson.url}
                  className="w-full bg-brown-red text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
                >
                  Xem nội dung bài đã chọn
                </button>
                <button
                    onClick={onBack}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-brown-red font-bold py-3 px-8 rounded-full transition-all"
                >
                    Quay lại chọn chủ đề
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
};

const ExerciseModal = ({ isOpen, onClose, selectedExercise, onExerciseChange, onViewContent }) => {
    if (!isOpen) return null;

    const selectedExerciseData = exercisesData.find(ex => ex.name === selectedExercise);
    const isContentAvailable = !!(selectedExerciseData && selectedExerciseData.url);

    let buttonText = "Xem nội dung";
    if (selectedExercise && !isContentAvailable) {
        buttonText = "Nội dung đang cập nhật";
    }

    return (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-ivory p-8 rounded-lg shadow-xl w-full max-w-lg relative border-2 border-bronze-gold"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Đóng"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
             <h3 id="exercise-modal-title" className="text-2xl font-display text-red-earth mb-6 text-center">Bạn chọn thể loại bài tập muốn xem</h3>
              <div className="space-y-6">
                <select 
                  value={selectedExercise}
                  onChange={e => onExerciseChange(e.target.value)}
                  className="w-full p-3 rounded border border-bronze-gold/50 focus:outline-none focus:ring-2 focus:ring-brown-red bg-white text-lg"
                  aria-labelledby="exercise-modal-title"
                >
                  <option value="" disabled>-- Vui lòng chọn loại bài tập --</option>
                  {exercisesData.map(ex => <option key={ex.name} value={ex.name}>{ex.name}</option>)}
                </select>
                <button 
                  onClick={onViewContent}
                  disabled={!selectedExercise || !isContentAvailable}
                  className="w-full bg-brown-red hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 text-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {buttonText}
                </button>
              </div>
          </div>
        </div>
    );
};

const MindmapModal = ({ isOpen, onClose, selectedMindmap, onMindmapChange, onViewContent }) => {
    if (!isOpen) return null;

    const selectedMindmapData = mindmapData.find(m => m.name === selectedMindmap);
    const isContentAvailable = !!(selectedMindmapData && selectedMindmapData.url);

    let buttonText = "Xem";
    if (selectedMindmap && !isContentAvailable) {
        buttonText = "Nội dung đang cập nhật";
    }

    return (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-ivory p-8 rounded-lg shadow-xl w-full max-w-lg relative border-2 border-bronze-gold"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Đóng"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
             <h3 id="mindmap-modal-title" className="text-2xl font-display text-red-earth mb-6 text-center">Bạn chọn chủ đề lịch sử 12 muốn xem</h3>
              <div className="space-y-6">
                <select 
                  value={selectedMindmap}
                  onChange={e => onMindmapChange(e.target.value)}
                  className="w-full p-3 rounded border border-bronze-gold/50 focus:outline-none focus:ring-2 focus:ring-brown-red bg-white text-lg"
                  aria-labelledby="mindmap-modal-title"
                >
                  <option value="" disabled>-- Vui lòng chọn chủ đề --</option>
                  {mindmapData.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
                </select>
                <button 
                  onClick={onViewContent}
                  disabled={!selectedMindmap || !isContentAvailable}
                  className="w-full bg-brown-red hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 text-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {buttonText}
                </button>
              </div>
          </div>
        </div>
    );
};

const SoftwareGuideModal = ({ isOpen, onClose, selectedSoftware, onSoftwareChange, onViewContent }) => {
    if (!isOpen) return null;

    const selectedSoftwareData = softwareGuidesData.find(s => s.name === selectedSoftware);
    const isContentAvailable = !!(selectedSoftwareData && selectedSoftwareData.url);

    let buttonText = "Xem";
    if (selectedSoftware && !isContentAvailable) {
        buttonText = "Nội dung đang cập nhật";
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="bg-ivory p-8 rounded-lg shadow-xl w-full max-w-lg relative border-2 border-bronze-gold"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                    aria-label="Đóng"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h3 id="software-modal-title" className="text-2xl font-display text-red-earth mb-6 text-center">Chọn phần mềm cần học</h3>
                <div className="space-y-6">
                    <select
                        value={selectedSoftware}
                        onChange={e => onSoftwareChange(e.target.value)}
                        className="w-full p-3 rounded border border-bronze-gold/50 focus:outline-none focus:ring-2 focus:ring-brown-red bg-white text-lg"
                        aria-labelledby="software-modal-title"
                    >
                        <option value="" disabled>-- Vui lòng chọn phần mềm --</option>
                        {softwareGuidesData.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                    </select>
                    <button
                        onClick={onViewContent}
                        disabled={!selectedSoftware || !isContentAvailable}
                        className="w-full bg-brown-red hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 text-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

const GraduationExamModal = ({ isOpen, onClose, selectedTopic, onTopicChange, onViewContent }) => {
    if (!isOpen) return null;

    const selectedData = graduationExamData.find(item => item.name === selectedTopic);
    const isContentAvailable = !!(selectedData && selectedData.url);

    let buttonText = "Bắt đầu";
    if (selectedTopic && !isContentAvailable) {
        buttonText = "Nội dung đang cập nhật";
    }

    return (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-ivory p-8 rounded-lg shadow-xl w-full max-w-lg relative border-2 border-bronze-gold"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Đóng"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
             <h3 id="grad-exam-modal-title" className="text-2xl font-display text-red-earth mb-6 text-center">Bạn chọn nội dung muốn luyện tập</h3>
              <div className="space-y-6">
                <select 
                  value={selectedTopic}
                  onChange={e => onTopicChange(e.target.value)}
                  className="w-full p-3 rounded border border-bronze-gold/50 focus:outline-none focus:ring-2 focus:ring-brown-red bg-white text-lg"
                  aria-labelledby="grad-exam-modal-title"
                >
                  <option value="" disabled>-- Vui lòng chọn nội dung --</option>
                  {graduationExamData.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
                </select>
                <button 
                  onClick={onViewContent}
                  disabled={!selectedTopic || !isContentAvailable}
                  className="w-full bg-brown-red hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 text-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {buttonText}
                </button>
              </div>
          </div>
        </div>
    );
};

// --- Main App ---
const App = () => {
    const [activeModal, setActiveModal] = React.useState<string | null>(null);

    // State for LectureModal
    const [lectureView, setLectureView] = React.useState('selectTopic');
    const [selectedTopic, setSelectedTopic] = React.useState('');
    const [selectedLesson, setSelectedLesson] = React.useState<Lesson | null>(null);
    const lessonsForTopic = topicsData.find(t => t.title === selectedTopic)?.lessons || [];

    // State for ExerciseModal
    const [selectedExercise, setSelectedExercise] = React.useState('');

    // State for MindmapModal
    const [selectedMindmap, setSelectedMindmap] = React.useState('');

    // State for SoftwareGuideModal
    const [selectedSoftware, setSelectedSoftware] = React.useState('');

    // State for GraduationExamModal
    const [selectedGraduationTopic, setSelectedGraduationTopic] = React.useState('');

    const handleResourceClick = (resourceTitle: string) => {
        switch (resourceTitle) {
            case "Bài giảng điện tử":
                setActiveModal("lecture");
                break;
            case "Bài tập lịch sử":
                setActiveModal("exercise");
                break;
            case "Sơ đồ tư duy Chủ đề":
                setActiveModal("mindmap");
                break;
            case "Hướng dẫn học các phần mềm":
                setActiveModal("software");
                break;
            case "Luyện thi tốt nghiệp THPT":
                setActiveModal("graduation");
                break;
            default:
                break;
        }
    };

    const closeModal = () => {
        setActiveModal(null);
        // Reset states
        setLectureView('selectTopic');
        setSelectedTopic('');
        setSelectedLesson(null);
        setSelectedExercise('');
        setSelectedMindmap('');
        setSelectedSoftware('');
        setSelectedGraduationTopic('');
    };

    const handleViewContent = () => {
        const topicData = topicsData.find(t => t.title === selectedTopic);
        if (topicData) {
            setLectureView('viewLessons');
        }
    };

    const handleViewLessonContent = () => {
        if (selectedLesson && selectedLesson.url) {
            window.open(selectedLesson.url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleViewExerciseContent = () => {
        const exercise = exercisesData.find(ex => ex.name === selectedExercise);
        if (exercise && exercise.url) {
            window.open(exercise.url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleViewMindmapContent = () => {
        const mindmap = mindmapData.find(m => m.name === selectedMindmap);
        if (mindmap && mindmap.url) {
            window.open(mindmap.url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleViewSoftwareGuideContent = () => {
        const software = softwareGuidesData.find(s => s.name === selectedSoftware);
        if (software && software.url) {
            window.open(software.url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleViewGraduationContent = () => {
        const item = graduationExamData.find(i => i.name === selectedGraduationTopic);
        if (item && item.url) {
            window.open(item.url, '_blank', 'noopener,noreferrer');
        }
    };
    
    React.useEffect(() => {
        const handleFormSubmit = (event) => {
            event.preventDefault();
            const form = event.target;
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Đang gửi...';

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            fetch("https://script.google.com/macros/s/AKfycby_3tGvT3GgR4E8UqT9vQ6p8jY7cR5Z3L2F-9x8rW0K/dev", {
                method: "POST",
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                alert('Cảm ơn bạn đã góp ý!');
                form.reset();
                submitButton.disabled = false;
                submitButton.textContent = 'Gửi góp ý';
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Đã có lỗi xảy ra. Vui lòng thử lại.');
                submitButton.disabled = false;
                submitButton.textContent = 'Gửi góp ý';
            });
        };

        const form = document.getElementById('contact-form');
        form.addEventListener('submit', handleFormSubmit);

        return () => {
            form.removeEventListener('submit', handleFormSubmit);
        };
    }, []);

    return (
        <div className="bg-ivory text-gray-800">
            <MarqueeBanner />
            <HeroSection />
            <WhyChooseSection />
            <SchoolVideoSection />
            <ResourcesSection onResourceClick={handleResourceClick} />
            <ExperienceSection />
            <ContactSection />
            <TeacherSection />
            <PracticeRoomSection />
            <SquareCarouselSection />
            <Footer />

            <LectureModal 
                isOpen={activeModal === 'lecture'}
                onClose={closeModal}
                selectedTopic={selectedTopic}
                onTopicChange={setSelectedTopic}
                onViewContent={handleViewContent}
                view={lectureView}
                lessons={lessonsForTopic}
                onBack={() => setLectureView('selectTopic')}
                selectedLesson={selectedLesson}
                onLessonSelect={setSelectedLesson}
                onViewLessonContent={handleViewLessonContent}
            />
            <ExerciseModal 
                isOpen={activeModal === 'exercise'}
                onClose={closeModal}
                selectedExercise={selectedExercise}
                onExerciseChange={setSelectedExercise}
                onViewContent={handleViewExerciseContent}
            />
            <MindmapModal
                isOpen={activeModal === 'mindmap'}
                onClose={closeModal}
                selectedMindmap={selectedMindmap}
                onMindmapChange={setSelectedMindmap}
                onViewContent={handleViewMindmapContent}
            />
            <SoftwareGuideModal
                isOpen={activeModal === 'software'}
                onClose={closeModal}
                selectedSoftware={selectedSoftware}
                onSoftwareChange={setSelectedSoftware}
                onViewContent={handleViewSoftwareGuideContent}
            />
            <GraduationExamModal
                isOpen={activeModal === 'graduation'}
                onClose={closeModal}
                selectedTopic={selectedGraduationTopic}
                onTopicChange={setSelectedGraduationTopic}
                onViewContent={handleViewGraduationContent}
            />
        </div>
    );
};

export default App;
