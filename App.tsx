import React from 'react';
import { 
    TeacherIcon, 
    StudentIcon, 
    GlobeIcon,
    BookIcon,
    PuzzleIcon,
    MindmapIcon,
    LocalIcon,
    GameIcon,
    VideoIcon
} from './components/Icons';

// Component cho dải chữ chạy
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

// Phần 1: Hero Section
const HeroSection = () => (
    <section className="relative h-screen flex items-center justify-center text-center text-ivory bg-cover bg-center" style={{backgroundImage: "url('/hero-background.png')"}}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-lg">
                Khám phá Lịch sử – Nuôi dưỡng lòng yêu nước
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                Học liệu số môn Lịch sử 12 – Dành cho giáo viên & học sinh THPT theo chương trình GDPT 2018.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#resources" className="px-8 py-3 bg-brown-red text-white font-bold rounded-full text-lg hover:bg-red-earth transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Khám phá ngay
                </a>
                <a href="#download" className="px-8 py-3 bg-ivory text-brown-red font-bold rounded-full text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Tải học liệu miễn phí
                </a>
            </div>
        </div>
    </section>
);

// Phần 2: Lý do chọn
const WhyChooseSection = () => {
    const reasons = [
        { icon: <TeacherIcon className="w-12 h-12 text-brown-red"/>, title: "Giáo viên dạy dễ hơn", description: "Nội dung biên soạn theo GDPT 2018, có bài giảng điện tử." },
        { icon: <StudentIcon className="w-12 h-12 text-brown-red"/>, title: "Học sinh hứng thú hơn", description: "Video, quiz, trò chơi, infographic sinh động." },
        { icon: <GlobeIcon className="w-12 h-12 text-brown-red"/>, title: "Lịch sử gắn liền thực tế", description: "Cập nhật nội dung liên hệ lịch sử địa phương." }
    ];
    return (
        <section className="py-20 bg-ivory">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-display text-center font-bold text-red-earth mb-12">Tại sao nên chọn học liệu số Lịch sử 12?</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {reasons.map(reason => (
                        <div key={reason.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-bronze-gold">
                            <div className="flex justify-center mb-4">{reason.icon}</div>
                            <h3 className="text-2xl font-display font-semibold text-brown-red mb-2">{reason.title}</h3>
                            <p>{reason.description}</p>
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
        { icon: <BookIcon className="w-8 h-8"/>, name: "Bài giảng điện tử" },
        { icon: <PuzzleIcon className="w-8 h-8"/>, name: "Bài tập lịch sử" },
        { icon: <MindmapIcon className="w-8 h-8"/>, name: "Bản đồ tư duy & Timeline" },
        { icon: <LocalIcon className="w-8 h-8"/>, name: "Tư liệu lịch sử địa phương" },
        { icon: <GameIcon className="w-8 h-8"/>, name: "Trò chơi & Quiz" },
        { icon: <VideoIcon className="w-8 h-8"/>, name: "Video bài giảng ngắn" },
    ];
    return (
        <section id="resources" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-display font-bold text-red-earth mb-4">Kho học liệu</h2>
                <p className="text-xl text-gray-600 mb-12">Tất cả tài nguyên bạn cần cho một năm học Lịch sử hiệu quả</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {resources.map(resource => (
                        <div key={resource.name} className="group bg-ivory p-6 rounded-lg shadow-sm hover:shadow-lg hover:bg-bronze-gold transition-all duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <div className="text-brown-red group-hover:text-white transition-colors duration-300 mb-3">{resource.icon}</div>
                            <h3 className="text-lg font-semibold text-brown-red group-hover:text-white transition-colors duration-300">{resource.name}</h3>
                            <a href="#" className="mt-4 text-sm font-bold text-brown-red group-hover:text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">Xem chi tiết</a>
                        </div>
                    ))}
                </div>
                <div id="download" className="mt-16">
                    <a href="#" className="px-10 py-4 bg-red-earth text-white font-bold rounded-full text-xl hover:bg-brown-red transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Tải trọn bộ học liệu (Miễn phí)
                    </a>
                </div>
            </div>
        </section>
    );
};

// Phần 4: Trải nghiệm
const ExperienceSection = () => (
    <section className="py-20 bg-ivory">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-display text-center font-bold text-red-earth mb-12">Dạy – Học – Trải nghiệm cùng nhau</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-moss-green">
                    <h3 className="text-3xl font-display font-semibold text-moss-green mb-4">👩‍🏫 Dành cho giáo viên</h3>
                    <ul className="space-y-3 list-disc list-inside text-gray-700">
                        <li>Giáo án mẫu, công cụ đánh giá năng lực</li>
                        <li>Hướng dẫn sử dụng công nghệ (Canva, Quizizz, Google Form…)</li>
                        <li>Kho tư liệu tham khảo phong phú và đáng tin cậy</li>
                    </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-bronze-gold">
                    <h3 className="text-3xl font-display font-semibold text-bronze-gold mb-4">👨‍🎓 Dành cho học sinh</h3>
                    <ul className="space-y-3 list-disc list-inside text-gray-700">
                        <li>Video ngắn 5–10 phút dễ hiểu, dễ nhớ</li>
                        <li>Bài luyện trắc nghiệm theo chuyên đề</li>
                        <li>Mục “Thử thách lịch sử” để học mà chơi, chơi mà học</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// Phần 5: Liên hệ
const ContactSection = () => (
    <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-12 p-6 border-2 border-bronze-gold rounded-lg shadow-inner bg-ivory">
                <p className="text-2xl italic text-brown-red font-serif">
                    “Dân ta phải biết sử ta,<br/>
                    Cho tường gốc tích nước nhà Việt Nam.”
                </p>
                <p className="mt-2 font-semibold text-gray-600">— Hồ Chí Minh —</p>
            </div>
            <h2 className="text-3xl font-display font-bold text-red-earth mb-8">Góp ý & Liên hệ</h2>
            <form className="grid grid-cols-1 gap-6 max-w-lg mx-auto text-left">
                <input type="text" placeholder="Tên của bạn" className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-bronze-gold outline-none" />
                <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-bronze-gold outline-none" />
                <select className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-bronze-gold outline-none bg-white">
                    <option>Vai trò của bạn?</option>
                    <option>Giáo viên</option>
                    <option>Học sinh</option>
                </select>
                <textarea placeholder="Nội dung góp ý" rows={5} className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-bronze-gold outline-none"></textarea>
                <button type="submit" className="px-8 py-3 bg-brown-red text-white font-bold rounded-full text-lg hover:bg-red-earth transition-all duration-300 shadow-md">
                    Gửi góp ý
                </button>
            </form>
        </div>
    </section>
);


// Phần 6: Giảng viên
const TeacherSection = () => (
    <section className="py-20 bg-ivory">
        <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-bronze-gold">
                <img 
                    src="/avatar-vo-van-dung.png" 
                    alt="Ảnh đại diện thầy Võ Văn Dũng" 
                    className="w-32 h-32 mx-auto mb-6 rounded-full object-cover border-4 border-bronze-gold shadow-md"
                />
                <h3 className="text-3xl font-display font-bold text-red-earth">Võ Văn Dũng</h3>
                <p className="mt-2 text-lg text-gray-600">25 năm kinh nghiệm giảng dạy Lịch sử THPT</p>
                <p className="mt-1 text-gray-500">Trường PT DTNT THPT Bình Phước, tỉnh Bình Phước</p>
                <p className="mt-4 font-semibold text-brown-red">📞 ĐT/Zalo: 0907130900</p>
            </div>
        </div>
    </section>
);

// Phần cuối: Footer
const Footer = () => (
    <footer className="bg-red-earth text-ivory py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="font-display text-2xl font-bold">Khám phá lịch sử – Nuôi dưỡng lòng yêu nước</h3>
            <div className="flex justify-center gap-6 my-4">
                <a href="#" className="hover:text-bronze-gold transition-colors">Trang chủ</a>
                <a href="#download" className="hover:text-bronze-gold transition-colors">Tải học liệu</a>
                <a href="#contact" className="hover:text-bronze-gold transition-colors">Liên hệ</a>
            </div>
            <p className="text-sm opacity-80">Bản quyền © 2025 Trường PT DTNT THPT Bình Phước</p>
        </div>
    </footer>
);


function App() {
  return (
    <div className="bg-ivory">
        <MarqueeBanner />
        <HeroSection />
        <WhyChooseSection />
        <ResourcesSection />
        <ExperienceSection />
        <ContactSection />
        <TeacherSection />
        <Footer />
    </div>
  );
}

export default App;