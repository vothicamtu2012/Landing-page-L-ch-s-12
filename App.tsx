
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

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center text-center bg-red-earth">
    <div className="relative z-10 p-4">
      <h1 className="text-5xl md:text-7xl font-display font-black leading-tight md:leading-snug drop-shadow-md text-yellow-400">
        Khám phá Lịch sử –<br />Nuôi dưỡng lòng yêu nước
      </h1>
      <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-ivory leading-loose">
        Học liệu số môn Lịch sử 12 – Dành cho giáo viên &amp; học sinh THPT theo chương trình GDPT 2018.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-yellow-400 hover:bg-yellow-300 text-red-earth font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
          Khám phá ngay
        </button>
        <button className="border-2 border-ivory hover:bg-ivory hover:text-red-earth text-ivory font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
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
          <p className="leading-loose">Nội dung biên soạn theo GDPT 2018, có sẵn bài giảng điện tử, tiết kiệm thời gian chuẩn bị.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md border border-bronze-gold/30 hover:shadow-xl hover:border-bronze-gold transition-all duration-300 transform hover:-translate-y-2">
          <BookIcon className="w-12 h-12 mx-auto mb-4 text-brown-red" />
          <h3 className="text-2xl font-display mb-2">Học sinh hứng thú hơn</h3>
          <p className="leading-loose">Video, quiz, trò chơi, infographic sinh động giúp tiếp thu kiến thức một cách tự nhiên và hiệu quả.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md border border-bronze-gold/30 hover:shadow-xl hover:border-bronze-gold transition-all duration-300 transform hover:-translate-y-2">
          <LocalIcon className="w-12 h-12 mx-auto mb-4 text-brown-red" />
          <h3 className="text-2xl font-display mb-2">Lịch sử gắn liền thực tế</h3>
          <p className="leading-loose">Cập nhật nội dung liên hệ thực tiễn, kết nối lịch sử địa phương, bồi đắp tình yêu quê hương.</p>
        </div>
      </div>
    </div>
  </section>
);

const ResourcesSection = ({ onResourceClick }) => {
    const resources = [
        { title: "Bài giảng điện tử", icon: <BookIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Bài tập lịch sử", icon: <PuzzleIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Sơ đồ tư duy Chủ đề", icon: <MindmapIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Tư liệu lịch sử địa phương", icon: <LocalIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Trò chơi & Quiz", icon: <GameIcon className="w-10 h-10 text-brown-red mb-3"/> },
        { title: "Hướng dẫn học các phần mềm", icon: <SoftwareIcon className="w-10 h-10 text-brown-red mb-3"/> },
    ];

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-display text-red-earth mb-12">Kho học liệu: Tất cả tài nguyên bạn cần</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {resources.map((res, index) => {
                        const isInteractive = ["Bài giảng điện tử", "Bài tập lịch sử", "Sơ đồ tư duy Chủ đề", "Hướng dẫn học các phần mềm"].includes(res.title);
                        return (
                            <div 
                                key={index} 
                                className={`flex flex-col items-center justify-center p-6 bg-ivory rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 aspect-square ${isInteractive ? 'cursor-pointer hover:border-brown-red border-2 border-transparent' : 'cursor-not-allowed opacity-60'}`}
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
    <section className="py-20 px-4 bg-ivory">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display text-red-earth mb-12 tracking-wide">Phim tư liệu: Lịch sử Việt Nam 1954-1975</h2>
        
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
            <ul className="list-disc pl-5 space-y-2 leading-loose">
              <li>Giáo án mẫu, công cụ đánh giá năng lực học sinh.</li>
              <li>Hướng dẫn tích hợp công nghệ (Canva, Quizizz, Google Form...).</li>
              <li>Nguồn tư liệu tham khảo phong phú và đã được kiểm chứng.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-moss-green">
            <h3 className="text-2xl font-display mb-4 flex items-center gap-3"><BookIcon className="w-8 h-8"/>Dành cho học sinh</h3>
            <ul className="list-disc pl-5 space-y-2 leading-loose">
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
      <h2 className="text-3xl font-display text-red-earth mb-4 leading-relaxed">“Dân ta phải biết sử ta, <br/>Cho tường gốc tích nước nhà Việt Nam.”</h2>
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
      <p className="text-lg mt-2 mb-4 leading-loose">25 năm kinh nghiệm giảng dạy Lịch sử THPT</p>
      <p className="text-gray-600 leading-loose">Trường PT DTNT THPT Bình Phước tỉnh Đồng Nai</p>
      <p className="text-gray-600 mt-1 leading-loose">ĐT/Zalo: 0907130900</p>
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
    { title: "Chủ đề 2: Phong trào giải phóng dân tộc 1930-1945", lessons: [] },
    { title: "Chủ đề 3: Kháng chiến chống Pháp (1945-1954)", lessons: [] },
    { title: "Chủ đề 4: Xây dựng CNXH ở miền Bắc và đấu tranh thống nhất đất nước (1954-1975)", lessons: [] },
    { title: "Chủ đề 5: Cuộc kháng chiến chống Mỹ, cứu nước (1954-1975)", lessons: [] },
];

const exercisesData = [
    { name: "Bài tập trắc nghiệp theo chủ đề", url: null },
    { name: "Bài tập tự luận", url: null },
    { name: "Đề thi thử tốt nghiệp", url: "https://drive.google.com/drive/u/0/folders/1Z-9rU_HHBdlhm0y1bOr6BCaf_ZgNmHy0" }
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

// --- Main App Component ---
const App = () => {
    const [activeModal, setActiveModal] = React.useState<string | null>(null);

    // State for Lecture Modal
    const [selectedTopic, setSelectedTopic] = React.useState('');
    const [lectureModalView, setLectureModalView] = React.useState('selectTopic');
    const [currentLessons, setCurrentLessons] = React.useState<Lesson[]>([]);
    const [selectedLesson, setSelectedLesson] = React.useState<Lesson | null>(null);

    // State for Exercise Modal
    const [selectedExercise, setSelectedExercise] = React.useState('');

    // State for Mindmap Modal
    const [selectedMindmap, setSelectedMindmap] = React.useState('');

    // State for Software Guide Modal
    const [selectedSoftware, setSelectedSoftware] = React.useState('');
  
    const handleResourceClick = (resourceTitle: string) => {
      if (resourceTitle === "Bài giảng điện tử") {
        setSelectedTopic(topicsData[0]?.title || '');
        setLectureModalView('selectTopic');
        setCurrentLessons([]);
        setSelectedLesson(null);
        setActiveModal('lectures');
      } else if (resourceTitle === "Bài tập lịch sử") {
        setSelectedExercise('');
        setActiveModal('exercises');
      } else if (resourceTitle === "Sơ đồ tư duy Chủ đề") {
        setSelectedMindmap('');
        setActiveModal('mindmaps');
      } else if (resourceTitle === "Hướng dẫn học các phần mềm") {
        setSelectedSoftware('');
        setActiveModal('software');
      }
    };
  
    const handleCloseModal = () => {
      setActiveModal(null);
    };
  
    // --- Lecture Modal Handlers ---
    const handleViewLectureContent = () => {
      if (selectedTopic) {
        const topicData = topicsData.find(t => t.title === selectedTopic);
        if (topicData && topicData.lessons && topicData.lessons.length > 0) {
          setCurrentLessons(topicData.lessons);
          setSelectedLesson(null);
          setLectureModalView('viewLessons');
        } else {
          alert(`Nội dung cho chủ đề "${selectedTopic}" đang được cập nhật.`);
        }
      }
    };
  
    const handleBackToTopics = () => {
      setLectureModalView('selectTopic');
    };

    const handleViewLessonContent = () => {
        if (selectedLesson && selectedLesson.url) {
            window.open(selectedLesson.url, '_blank', 'noopener,noreferrer');
        }
    };

    // --- Exercise Modal Handlers ---
    const handleViewExerciseContent = () => {
        const exercise = exercisesData.find(ex => ex.name === selectedExercise);
        if (exercise && exercise.url) {
            window.open(exercise.url, '_blank', 'noopener,noreferrer');
        }
    };

    // --- Mindmap Modal Handlers ---
    const handleViewMindmapContent = () => {
        const mindmap = mindmapData.find(m => m.name === selectedMindmap);
        if (mindmap && mindmap.url) {
            window.open(mindmap.url, '_blank', 'noopener,noreferrer');
        }
    };

    // --- Software Guide Modal Handlers ---
    const handleViewSoftwareContent = () => {
        const software = softwareGuidesData.find(s => s.name === selectedSoftware);
        if (software && software.url) {
            window.open(software.url, '_blank', 'noopener,noreferrer');
        }
    };
    
    return (
      <div>
        <MarqueeBanner />
        <main>
          <HeroSection />
          <WhyChooseSection />
          <ResourcesSection onResourceClick={handleResourceClick} />
          <ExperienceSection />
          <ContactSection />
          <TeacherSection />
        </main>
        <Footer />
        <LectureModal 
          isOpen={activeModal === 'lectures'}
          onClose={handleCloseModal}
          selectedTopic={selectedTopic}
          onTopicChange={setSelectedTopic}
          onViewContent={handleViewLectureContent}
          view={lectureModalView}
          lessons={currentLessons}
          onBack={handleBackToTopics}
          selectedLesson={selectedLesson}
          onLessonSelect={setSelectedLesson}
          onViewLessonContent={handleViewLessonContent}
        />
        <ExerciseModal
            isOpen={activeModal === 'exercises'}
            onClose={handleCloseModal}
            selectedExercise={selectedExercise}
            onExerciseChange={setSelectedExercise}
            onViewContent={handleViewExerciseContent}
        />
        <MindmapModal
            isOpen={activeModal === 'mindmaps'}
            onClose={handleCloseModal}
            selectedMindmap={selectedMindmap}
            onMindmapChange={setSelectedMindmap}
            onViewContent={handleViewMindmapContent}
        />
        <SoftwareGuideModal
            isOpen={activeModal === 'software'}
            onClose={handleCloseModal}
            selectedSoftware={selectedSoftware}
            onSoftwareChange={setSelectedSoftware}
            onViewContent={handleViewSoftwareContent}
        />
      </div>
    );
};
  
export default App;
