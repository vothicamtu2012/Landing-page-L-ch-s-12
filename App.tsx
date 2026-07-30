
import React, { useState } from 'react';
import { TeacherIcon, BookIcon, PuzzleIcon, MindmapIcon, LocalIcon, GameIcon, SoftwareIcon, GlobeAltIcon, PhoneIcon, BuildingLibraryIcon, CheckCircleIcon, TrueFalseIcon, EyeIcon, QandAIcon, DocumentTextIcon, AcademicCapIcon, ClipboardIcon } from './components/Icons';

// --- DateTimeDisplay Component ---
const DateTimeDisplay = () => {
    const [currentTime, setCurrentTime] = React.useState(new Date());
    const [visitCount, setVisitCount] = useState(15420); // Số khởi điểm giả định cho đẹp

    React.useEffect(() => {
        // Cập nhật giờ
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Xử lý bộ đếm lượt truy cập (Lưu vào localStorage để nhớ)
        const storedCount = localStorage.getItem('page_visits');
        let count = storedCount ? parseInt(storedCount) : 15420;
        count = count + 1; // Tăng 1 lượt mỗi khi tải lại trang
        localStorage.setItem('page_visits', count.toString());
        setVisitCount(count);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-paper-dark border-b border-antique-gold/20 shadow-sm px-4 md:px-8 py-3 flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Left: Visitor Counter */}
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full border border-antique-gold/30 shadow-sm">
                <EyeIcon className="w-5 h-5 text-history-red animate-pulse" />
                <span className="text-charcoal font-serif font-medium text-sm md:text-base">
                    Lượt truy cập: <span className="font-bold text-history-red text-lg">{visitCount.toLocaleString('vi-VN')}</span>
                </span>
            </div>

            {/* Right: Clock */}
            <div className="inline-flex items-center rounded-full overflow-hidden shadow-xl border-2 border-history-red/20 transform hover:scale-105 transition-transform duration-300">
                {/* Phần Giờ: Nền Đỏ - Chữ Vàng/Trắng */}
                <div className="bg-history-red text-white px-4 md:px-6 py-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-antique-gold animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xl md:text-3xl font-bold font-sans tracking-widest min-w-[100px] md:min-w-[140px] text-center">
                        {currentTime.toLocaleTimeString('vi-VN')}
                    </span>
                </div>
                
                {/* Phần Ngày: Nền Vàng Đồng - Chữ Đỏ Đậm */}
                <div className="bg-antique-gold text-history-dark px-4 md:px-6 py-2 flex items-center gap-2 hidden sm:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm md:text-xl font-serif font-bold uppercase tracking-wide whitespace-nowrap">
                        {currentTime.toLocaleDateString('vi-VN', { weekday: 'long' })}, {currentTime.toLocaleDateString('vi-VN')}
                    </span>
                </div>
            </div>
        </div>
    );
}

// --- MarqueeSection Component ---
const MarqueeSection = () => {
    return (
        <div className="bg-history-red text-paper py-2 overflow-hidden border-b-4 border-antique-gold relative z-50 shadow-sm">
            <div className="animate-marquee whitespace-nowrap inline-block font-bold text-sm md:text-base uppercase tracking-widest font-sans">
                Trường phổ thông DTNT THPT Bình Phước tỉnh Đồng Nai  - Tổ : TDQP - Sử - Địa - GDKTPL
            </div>
        </div>
    );
}

// --- HeroSection Component ---
const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-end text-center overflow-hidden pb-12">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://i.postimg.cc/63HDQSR1/og-image.jpg"
                    alt="Background" 
                    className="w-full h-full object-cover filter brightness-[0.85] sepia-[0.2]" 
                />
                {/* Vintage Overlay - Warm & Historical */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-history-dark/90"></div>

                {/* Solid Gradient Mask at bottom to hide text in image & hold content */}
                <div className="absolute bottom-0 left-0 w-full h-[85%] bg-gradient-to-t from-[#003366] via-[#003366]/95 to-transparent opacity-100"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 max-w-6xl mx-auto flex flex-col items-center animate-fade-in-up w-full">
                
                {/* Slogan added here */}
                <p className="text-white/90 text-lg md:text-2xl font-serif italic mb-4 tracking-wide drop-shadow-md border-b border-antique-gold/50 pb-2">
                    “Mỗi trang sử – Một bài học làm người.”
                </p>

                {/* Typography Design */}
                <div className="flex flex-col items-center mb-6 w-full">
                    <span className="text-2xl md:text-4xl font-display font-bold text-white mb-2 drop-shadow-lg tracking-wide opacity-95 font-serif">
                        Khám phá Lịch sử
                    </span>
                    
                    {/* Ornamental Divider */}
                    <div className="flex items-center gap-4 opacity-80 mb-2">
                        <div className="h-[2px] w-16 bg-antique-gold"></div>
                    </div>

                    <span className="text-4xl md:text-7xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-antique-gold uppercase tracking-tight drop-shadow-xl text-shadow-lg leading-tight py-2">
                        Nuôi dưỡng lòng yêu nước
                    </span>
                </div>
                
                <p className="text-white/90 text-base md:text-xl max-w-3xl mb-8 font-serif font-light leading-relaxed drop-shadow-md">
                    Học liệu số môn Lịch sử 12 – Dành cho giáo viên & học sinh THPT theo chương trình GDPT 2018.
                </p>

                <button 
                    onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative px-10 py-4 bg-antique-gold hover:bg-white text-[#003366] font-bold text-lg rounded-full shadow-2xl transition-all duration-300 tracking-wider overflow-hidden mb-8"
                >
                    <span className="relative z-10 group-hover:text-[#003366] transition-colors duration-300 uppercase">KHÁM PHÁ NGAY</span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </button>
            </div>
        </section>
    );
}

// --- AboutSection Component ---
const AboutSection = () => {
    return (
        <section className="py-24 px-4 bg-paper relative">
            {/* Texture overlay for paper effect */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")'}}></div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                <div className="w-full md:w-5/12 flex justify-center">
                     <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[8px] border-white shadow-2xl ring-1 ring-gray-200">
                         <img 
                            src="https://i.postimg.cc/nrvjdGk3/avatar_vo_van_dung.png" 
                            alt="Thầy Võ Văn Dũng" 
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                     </div>
                </div>
                <div className="w-full md:w-7/12">
                    <h2 className="text-4xl md:text-5xl font-display text-history-red mb-8 text-center md:text-left font-bold">Giới thiệu</h2>
                    <div className="prose prose-lg text-charcoal text-justify font-serif leading-loose">
                        <p className="mb-6">
                            Chào mừng các em đến với trang học liệu số Lịch sử 12. Đây là nơi thầy <strong className="text-history-red">Võ Văn Dũng</strong> tổng hợp các kiến thức, bài giảng và bài tập trắc nghiệm bám sát chương trình Giáo dục phổ thông 2018.
                        </p>
                        <p>
                            Với phương châm <em className="text-history-dark font-medium">"Học mà chơi - Chơi mà học"</em>, thầy hy vọng website sẽ là người bạn đồng hành hữu ích giúp các em chinh phục môn Lịch sử và kỳ thi Tốt nghiệp THPT một cách nhẹ nhàng và hiệu quả nhất.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

// --- MindMapModal Component ---
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MindMapModal = ({ isOpen, onClose }: ModalProps) => {
    const [selectedTopic, setSelectedTopic] = useState("1");

    if (!isOpen) return null;

    // Mapping link cho các chủ đề
    const topicLinks: Record<string, string> = {
        "1": "https://drive.google.com/file/d/1V3FZaiBrYedHVGgJrAUGueDZCLc3PUGX/view?usp=sharing",
        "2": "https://drive.google.com/file/d/1tGTFOd1-uOENIN7zRt8XfTaUzQ8QsOwh/view?usp=sharing",
        "3": "https://drive.google.com/file/d/1RUDWqd8NaOV7EPykdBufq_8UkXsEoJBe/view?usp=sharing",
        "4": "https://drive.google.com/file/d/1zf7LtC_QeXKeRUIFdudMaxbN-Xvy3iHy/view?usp=sharing",
        "5": "https://drive.google.com/file/d/12LnWGs_CPQciYAjAsQ77rVs3WuqPrb85/view?usp=sharing",
        "6": "https://drive.google.com/file/d/1Eco1u47C5UDOB-OQ3JIkUb9bPJwa21FC/view?usp=sharing",
    };

    const handleViewContent = () => {
        const link = topicLinks[selectedTopic];
        if (link) {
            window.open(link, '_blank');
        } else {
            alert(`Đang mở nội dung: Chủ đề ${selectedTopic} \n(Chức năng đang được cập nhật link)`);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-paper border-4 border-double border-antique-gold rounded-lg shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-history-red p-4 flex justify-between items-center border-b border-antique-gold">
                    <h3 className="text-white font-display font-bold text-xl flex items-center gap-2">
                        <MindmapIcon className="w-6 h-6 text-antique-gold" />
                        Sơ đồ tư duy
                    </h3>
                    <button 
                        onClick={onClose}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    <label className="block text-charcoal font-serif font-bold mb-4 text-lg text-center">
                        Bạn chọn chủ đề nào quan tâm?
                    </label>
                    
                    <div className="relative">
                        <select 
                            value={selectedTopic}
                            onChange={(e) => setSelectedTopic(e.target.value)}
                            className="w-full bg-white border-2 border-antique-gold text-charcoal py-3 px-4 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-history-red focus:border-transparent appearance-none font-sans text-lg cursor-pointer"
                        >
                            <option value="1">Chủ đề 1: Thế giới trong và sau Chiến tranh lạnh</option>
                            <option value="2">Chủ đề 2: ASEAN: Những chặng đường lịch sử</option>
                            <option value="3">Chủ đề 3: Cách mạng tháng Tám năm 1945...</option>
                            <option value="4">Chủ đề 4: Công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay</option>
                            <option value="5">Chủ đề 5: Lịch sử đối ngoại của Việt Nam</option>
                            <option value="6">Chủ đề 6: Hồ Chí Minh trong lịch sử Việt Nam</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-charcoal">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-paper-dark p-6 border-t border-antique-gold/30 flex justify-center">
                    <button 
                        onClick={handleViewContent}
                        className="bg-history-red hover:bg-history-dark text-white font-bold py-3 px-8 rounded shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Xem nội dung
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- LectureModal Component (Bài giảng điện tử) ---
const LectureModal = ({ isOpen, onClose }: ModalProps) => {
    const [selectedType, setSelectedType] = useState("ppt");

    if (!isOpen) return null;

    // Mapping link cho tài liệu
    const lectureLinks: Record<string, string> = {
        "ppt": "", // Link Giáo án PowerPoint 12
        "word": "https://docs.google.com/document/d/1lnjo5KfdT8ckjzzSUiyzWd7jXgOYXSBg/edit?usp=sharing&ouid=107740259998793158800&rtpof=true&sd=true" // Link Giáo án Word 12
    };

    const handleViewContent = () => {
        const link = lectureLinks[selectedType];
        if (link) {
            window.open(link, '_blank');
        } else {
            let typeName = selectedType === "ppt" ? "Giáo án PowerPoint 12" : "Giáo án Word 12";
            alert(`Đang mở tài liệu: ${typeName} \n(Chức năng đang được cập nhật link)`);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-paper border-4 border-double border-antique-gold rounded-lg shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-history-red p-4 flex justify-between items-center border-b border-antique-gold">
                    <h3 className="text-white font-display font-bold text-xl flex items-center gap-2">
                        <BookIcon className="w-6 h-6 text-antique-gold" />
                        Bài giảng điện tử
                    </h3>
                    <button 
                        onClick={onClose}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    <label className="block text-charcoal font-serif font-bold mb-4 text-lg text-center">
                        Bạn muốn xem loại tài liệu nào?
                    </label>
                    
                    <div className="relative">
                        <select 
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="w-full bg-white border-2 border-antique-gold text-charcoal py-3 px-4 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-history-red focus:border-transparent appearance-none font-sans text-lg cursor-pointer"
                        >
                            <option value="ppt">Giáo án PowerPoint 12</option>
                            <option value="word">Giáo án Word 12</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-charcoal">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-paper-dark p-6 border-t border-antique-gold/30 flex justify-center">
                    <button 
                        onClick={handleViewContent}
                        className="bg-history-red hover:bg-history-dark text-white font-bold py-3 px-8 rounded shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Xem nội dung
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- ExerciseModal Component (Bài tập theo chủ đề) ---
const ExerciseModal = ({ isOpen, onClose }: ModalProps) => {
    const [selectedTopic, setSelectedTopic] = useState("1");

    if (!isOpen) return null;

    // Mapping link cho các bài tập theo chủ đề
    const exerciseLinks: Record<string, string> = {
        "1": "https://forms.gle/cfqZUeEcqddMchx37",
        "2": "https://forms.gle/u6jMpAA29G5noTKr8",
        "3": "https://forms.gle/Y6ab1vz6sSyj9C3E6",
        "4": "https://forms.gle/WhRP4qusnHsoHBuu5",
        "5": "https://azota.vn/de-thi/ok3l3g",
    };

    const handleViewContent = () => {
        const link = exerciseLinks[selectedTopic];
        if (link) {
            window.open(link, '_blank');
        } else {
            alert(`Đang mở bài tập trắc nghiệm: Chủ đề ${selectedTopic} \n(Chức năng đang được cập nhật link)`);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-paper border-4 border-double border-antique-gold rounded-lg shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-history-red p-4 flex justify-between items-center border-b border-antique-gold">
                    <h3 className="text-white font-display font-bold text-xl flex items-center gap-2">
                        <PuzzleIcon className="w-6 h-6 text-antique-gold" />
                        Bài tập theo chủ đề
                    </h3>
                    <button 
                        onClick={onClose}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    <label className="block text-charcoal font-serif font-bold mb-4 text-lg text-center">
                        Bạn chọn chủ đề cần luyện tập?
                    </label>
                    
                    <div className="relative">
                        <select 
                            value={selectedTopic}
                            onChange={(e) => setSelectedTopic(e.target.value)}
                            className="w-full bg-white border-2 border-antique-gold text-charcoal py-3 px-4 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-history-red focus:border-transparent appearance-none font-sans text-lg cursor-pointer"
                        >
                            <option value="1">Chủ đề 1: Thế giới trong và sau Chiến tranh lạnh</option>
                            <option value="2">Chủ đề 2: ASEAN: Những chặng đường lịch sử</option>
                            <option value="3">Chủ đề 3: Cách mạng tháng Tám năm 1945...</option>
                            <option value="4">Chủ đề 4: Công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay</option>
                            <option value="5">Chủ đề 5: Lịch sử đối ngoại của Việt Nam</option>
                            <option value="6">Chủ đề 6: Hồ Chí Minh trong lịch sử Việt Nam</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-charcoal">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-paper-dark p-6 border-t border-antique-gold/30 flex justify-center">
                    <button 
                        onClick={handleViewContent}
                        className="bg-history-red hover:bg-history-dark text-white font-bold py-3 px-8 rounded shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Làm bài
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- TrueFalseModal Component (Bài tập dạng đúng - sai) ---
const TrueFalseModal = ({ isOpen, onClose }: ModalProps) => {
    const [selectedTopic, setSelectedTopic] = useState("1");

    if (!isOpen) return null;

    // Mapping link cho các bài tập đúng sai (Hiện tại chưa có link cụ thể, dùng alert)
    const trueFalseLinks: Record<string, string> = {
        "1": "https://azota.vn/de-thi/ijkjte",
        "2": "https://azota.vn/de-thi/oaetnf",
        "3": "https://azota.vn/de-thi/dds1zn",
        "4": "https://azota.vn/de-thi/gcbbfv",
        "5": "https://azota.vn/de-thi/gy4mop",
        "6": "https://azota.vn/de-thi/9z18ua",
    };

    const handleViewContent = () => {
        const link = trueFalseLinks[selectedTopic];
        if (link) {
            window.open(link, '_blank');
        } else {
            alert(`Đang mở bài tập đúng - sai: Chủ đề ${selectedTopic} \n(Chức năng đang được cập nhật link)`);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-paper border-4 border-double border-antique-gold rounded-lg shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-history-red p-4 flex justify-between items-center border-b border-antique-gold">
                    <h3 className="text-white font-display font-bold text-xl flex items-center gap-2">
                        <TrueFalseIcon className="w-6 h-6 text-antique-gold" />
                        Bài tập dạng đúng - sai
                    </h3>
                    <button 
                        onClick={onClose}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    <label className="block text-charcoal font-serif font-bold mb-4 text-lg text-center">
                        Bạn chọn chủ đề cần luyện tập?
                    </label>
                    
                    <div className="relative">
                        <select 
                            value={selectedTopic}
                            onChange={(e) => setSelectedTopic(e.target.value)}
                            className="w-full bg-white border-2 border-antique-gold text-charcoal py-3 px-4 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-history-red focus:border-transparent appearance-none font-sans text-lg cursor-pointer"
                        >
                            <option value="1">Chủ đề 1: Thế giới trong và sau Chiến tranh lạnh</option>
                            <option value="2">Chủ đề 2: ASEAN: Những chặng đường lịch sử</option>
                            <option value="3">Chủ đề 3: Cách mạng tháng Tám năm 1945...</option>
                            <option value="4">Chủ đề 4: Công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay</option>
                            <option value="5">Chủ đề 5: Lịch sử đối ngoại của Việt Nam</option>
                            <option value="6">Chủ đề 6: Hồ Chí Minh trong lịch sử Việt Nam</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-charcoal">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-paper-dark p-6 border-t border-antique-gold/30 flex justify-center">
                    <button 
                        onClick={handleViewContent}
                        className="bg-history-red hover:bg-history-dark text-white font-bold py-3 px-8 rounded shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Làm bài
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- QAModal Component (Bài tập dạng Hỏi - Đáp) ---
const QAModal = ({ isOpen, onClose }: ModalProps) => {
    const [selectedTopic, setSelectedTopic] = useState("1");

    if (!isOpen) return null;

    // Mapping link for Q&A exercises
    const qaLinks: Record<string, string> = {
        "1": "https://docs.google.com/document/d/1QM8X1RKMf6mFiIUjb9cwQa4pcgJZpWGH/edit?usp=sharing&ouid=107740259998793158800&rtpof=true&sd=true",
        "2": "https://docs.google.com/document/d/1KWRvOtiLGPIZ3BRvkxL_7O8SerAt_yFx/edit?usp=sharing&ouid=107740259998793158800&rtpof=true&sd=true",
        "3": "https://docs.google.com/document/d/1dngS5jWGYW08fECBniN4qX0DKcw_1sL7/edit?usp=sharing&ouid=107740259998793158800&rtpof=true&sd=true",
        "4": "https://docs.google.com/document/d/13FE9tJvwxo4d3ZTKWbqyKYT6lSfJXjL5/edit?usp=sharing&ouid=107740259998793158800&rtpof=true&sd=true",
        "5": "https://docs.google.com/document/d/1yD_0ENQcdDLZ0l9t8MOlmmrHL9g46div/edit?usp=sharing&ouid=107740259998793158800&rtpof=true&sd=true",
        "6": "https://docs.google.com/document/d/1wavFts1Xx9FAIpVsfRiwByAEL_hgQ_jz/edit?usp=sharing&ouid=107740259998793158800&rtpof=true&sd=true",
    };

    const handleViewContent = () => {
        const link = qaLinks[selectedTopic];
        if (link) {
            window.open(link, '_blank');
        } else {
            alert(`Đang mở bài tập Hỏi - Đáp: Chủ đề ${selectedTopic} \n(Chức năng đang được cập nhật link)`);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-paper border-4 border-double border-antique-gold rounded-lg shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-history-red p-4 flex justify-between items-center border-b border-antique-gold">
                    <h3 className="text-white font-display font-bold text-xl flex items-center gap-2">
                        <QandAIcon className="w-6 h-6 text-antique-gold" />
                        Bài tập dạng Hỏi - Đáp
                    </h3>
                    <button 
                        onClick={onClose}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    <label className="block text-charcoal font-serif font-bold mb-4 text-lg text-center">
                        Bạn chọn chủ đề cần luyện tập?
                    </label>
                    
                    <div className="relative">
                        <select 
                            value={selectedTopic}
                            onChange={(e) => setSelectedTopic(e.target.value)}
                            className="w-full bg-white border-2 border-antique-gold text-charcoal py-3 px-4 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-history-red focus:border-transparent appearance-none font-sans text-lg cursor-pointer"
                        >
                            <option value="1">Chủ đề 1: Thế giới trong và sau Chiến tranh lạnh</option>
                            <option value="2">Chủ đề 2: ASEAN: Những chặng đường lịch sử</option>
                            <option value="3">Chủ đề 3: Cách mạng tháng Tám năm 1945...</option>
                            <option value="4">Chủ đề 4: Công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay</option>
                            <option value="5">Chủ đề 5: Lịch sử đối ngoại của Việt Nam</option>
                            <option value="6">Chủ đề 6: Hồ Chí Minh trong lịch sử Việt Nam</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-charcoal">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-paper-dark p-6 border-t border-antique-gold/30 flex justify-center">
                    <button 
                        onClick={handleViewContent}
                        className="bg-history-red hover:bg-history-dark text-white font-bold py-3 px-8 rounded shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Xem bài
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- ReviewOutlineModal Component (Đề cương ôn tập) ---
const ReviewOutlineModal = ({ isOpen, onClose }: ModalProps) => {
    const [selectedTopic, setSelectedTopic] = useState("mid_term_1");

    if (!isOpen) return null;

    // Mapping link cho đề cương ôn tập
    const reviewLinks: Record<string, string> = {
        "mid_term_1": "https://drive.google.com/file/d/1-auiQmtgE-EB2VMJn7bGtaQR4sFM75NG/view?usp=sharing", // Đề cương ôn tập giữa kỳ I
        "final_term_1": "https://drive.google.com/file/d/103dIxtVgmDqXJuzqbBZtDHZesFPqX7aH/view?usp=sharing", // Đề cương ôn tập cuối kỳ I
        "mid_term_2": "https://drive.google.com/file/d/15d2XeYvfOcxGl9UiZtfKGdIt-ROUjYh7/view?usp=sharing", // Đề cương ôn tập giữa kỳ II
        "final_term_2": "https://drive.google.com/file/d/12wD2AbmeDDmECO9T7JA7s6IkMJSZ3nyJ/view?usp=sharing", // Đề cương ôn tập cuối kỳ II
    };

    const handleViewContent = () => {
        const link = reviewLinks[selectedTopic];
        let topicName = "";
        switch (selectedTopic) {
            case "mid_term_1": topicName = "Đề cương ôn tập giữa kỳ I"; break;
            case "final_term_1": topicName = "Đề cương ôn tập cuối kỳ I"; break;
            case "mid_term_2": topicName = "Đề cương ôn tập giữa kỳ II"; break;
            case "final_term_2": topicName = "Đề cương ôn tập cuối kỳ II"; break;
        }

        if (link) {
            window.open(link, '_blank');
        } else {
            alert(`Đang mở tài liệu: ${topicName} \n(Chức năng đang được cập nhật link)`);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-paper border-4 border-double border-antique-gold rounded-lg shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-history-red p-4 flex justify-between items-center border-b border-antique-gold">
                    <h3 className="text-white font-display font-bold text-xl flex items-center gap-2">
                        <DocumentTextIcon className="w-6 h-6 text-antique-gold" />
                        Đề cương ôn tập
                    </h3>
                    <button 
                        onClick={onClose}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    <label className="block text-charcoal font-serif font-bold mb-4 text-lg text-center">
                        Bạn muốn xem đề cương nào?
                    </label>
                    
                    <div className="relative">
                        <select 
                            value={selectedTopic}
                            onChange={(e) => setSelectedTopic(e.target.value)}
                            className="w-full bg-white border-2 border-antique-gold text-charcoal py-3 px-4 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-history-red focus:border-transparent appearance-none font-sans text-lg cursor-pointer"
                        >
                            <option value="mid_term_1">Đề cương ôn tập giữa kỳ I</option>
                            <option value="final_term_1">Đề cương ôn tập cuối kỳ I</option>
                            <option value="mid_term_2">Đề cương ôn tập giữa kỳ II</option>
                            <option value="final_term_2">Đề cương ôn tập cuối kỳ II</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-charcoal">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-paper-dark p-6 border-t border-antique-gold/30 flex justify-center">
                    <button 
                        onClick={handleViewContent}
                        className="bg-history-red hover:bg-history-dark text-white font-bold py-3 px-8 rounded shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Xem nội dung
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- ExcellentStudentModal Component (Tài liệu ôn thi học sinh giỏi) ---
const ExcellentStudentModal = ({ isOpen, onClose }: ModalProps) => {
    const [selectedTopic, setSelectedTopic] = useState("1");

    if (!isOpen) return null;

    // Mapping link cho tài liệu ôn thi HSG
    const excellentLinks: Record<string, string> = {
        "1": "https://docs.google.com/document/d/1xWvcWPDWepbSGU9wVrEghY6KCYJd4khj/edit?usp=sharing&ouid=107740259998793158800&rtpof=true&sd=true", // Tài liệu 1
        "2": "https://docs.google.com/document/d/1m4LyeBP4hjN4orYbxe3QOICZvGJT-fuB/edit?usp=sharing&ouid=107740259998793158800&rtpof=true&sd=true", // Tài liệu 2
        "3": "", // Tài liệu 3
        "4": "", // Tài liệu 4
        "5": "", // Tài liệu 5
        "6": "", // Tài liệu 6
        "7": "", // Tài liệu 7
        "8": "", // Tài liệu 8
        "9": "", // Tài liệu 9
        "10": "", // Tài liệu 10
    };

    const handleViewContent = () => {
        const link = excellentLinks[selectedTopic];
        if (link) {
            window.open(link, '_blank');
        } else {
            alert(`Đang mở tài liệu: Tài liệu ${selectedTopic} \n(Chức năng đang được cập nhật link)`);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-paper border-4 border-double border-antique-gold rounded-lg shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-history-red p-4 flex justify-between items-center border-b border-antique-gold">
                    <h3 className="text-white font-display font-bold text-xl flex items-center gap-2">
                        <AcademicCapIcon className="w-6 h-6 text-antique-gold" />
                        Tài liệu ôn thi HSG
                    </h3>
                    <button 
                        onClick={onClose}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    <label className="block text-charcoal font-serif font-bold mb-4 text-lg text-center">
                        Chọn tài liệu để xem
                    </label>
                    
                    <div className="relative">
                        <select 
                            value={selectedTopic}
                            onChange={(e) => setSelectedTopic(e.target.value)}
                            className="w-full bg-white border-2 border-antique-gold text-charcoal py-3 px-4 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-history-red focus:border-transparent appearance-none font-sans text-lg cursor-pointer"
                        >
                            {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>Tài liệu {i + 1}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-charcoal">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-paper-dark p-6 border-t border-antique-gold/30 flex justify-center">
                    <button 
                        onClick={handleViewContent}
                        className="bg-history-red hover:bg-history-dark text-white font-bold py-3 px-8 rounded shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Xem nội dung
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- GameModal Component (Trò chơi Lịch sử) ---
const GameModal = ({ isOpen, onClose }: ModalProps) => {
    const [selectedGame, setSelectedGame] = useState("crossword");

    if (!isOpen) return null;

    // Mapping link cho các trò chơi (Hiện tại chưa có link, dùng alert)
    const gameLinks: Record<string, string> = {
        "crossword": "https://gemini.google.com/share/dcc3615e5055", // Link Trò chơi Ô chữ
        "wheel": "https://gemini.google.com/share/4734ce70c067", // Link Chiếc nón kỳ diệu
        "wordsearch": "", // Link Tìm từ khóa
        "goldenbell": "https://docs.google.com/presentation/d/1I2n8UuAqADAd2JB-ejc-4addpm557myk/edit?usp=sharing&ouid=107740259998793158800&rtpof=true&sd=true" // Link Rung chuông vàng
    };

    const handleStartGame = () => {
        const link = gameLinks[selectedGame];
        let gameName = "";
        switch (selectedGame) {
            case "crossword": gameName = "Trò chơi Ô chữ"; break;
            case "wheel": gameName = "Chiếc nón kỳ diệu"; break;
            case "wordsearch": gameName = "Tìm từ khóa"; break;
            case "goldenbell": gameName = "Rung chuông vàng"; break;
        }

        if (link) {
            window.open(link, '_blank');
        } else {
            alert(`Đang khởi động: ${gameName} \n(Chức năng đang được cập nhật link)`);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-paper border-4 border-double border-antique-gold rounded-lg shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-history-red p-4 flex justify-between items-center border-b border-antique-gold">
                    <h3 className="text-white font-display font-bold text-xl flex items-center gap-2">
                        <GameIcon className="w-6 h-6 text-antique-gold" />
                        Các loại Trò chơi Lịch sử
                    </h3>
                    <button 
                        onClick={onClose}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    <label className="block text-charcoal font-serif font-bold mb-4 text-lg text-center">
                        Bạn chọn trò chơi nào để giải trí?
                    </label>
                    
                    <div className="relative">
                        <select 
                            value={selectedGame}
                            onChange={(e) => setSelectedGame(e.target.value)}
                            className="w-full bg-white border-2 border-antique-gold text-charcoal py-3 px-4 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-history-red focus:border-transparent appearance-none font-sans text-lg cursor-pointer"
                        >
                            <option value="crossword">Trò chơi Ô chữ</option>
                            <option value="wheel">Chiếc nón kỳ diệu</option>
                            <option value="wordsearch">Tìm từ khóa</option>
                            <option value="goldenbell">Rung chuông vàng</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-charcoal">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-paper-dark p-6 border-t border-antique-gold/30 flex justify-center">
                    <button 
                        onClick={handleStartGame}
                        className="bg-history-red hover:bg-history-dark text-white font-bold py-3 px-8 rounded shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Bắt đầu
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- ExamModal Component (Luyện thi THPT) ---
const ExamModal = ({ isOpen, onClose }: ModalProps) => {
    const [selectedExam, setSelectedExam] = useState("1");

    if (!isOpen) return null;

    // Mapping link cho các đề thi
    const examLinks: Record<string, string> = {
        "1": "https://azota.vn/de-thi/eibdbc",
        "2": "https://azota.vn/de-thi/reycgy",
        "3": "https://azota.vn/de-thi/cz85bc",
        "4": "https://azota.vn/de-thi/xpoxdw",
        "5": "https://azota.vn/de-thi/d4jjzf",
        "6": "https://azota.vn/de-thi/reycgy",
        "7": "https://azota.vn/de-thi/hrng2r",
        "8": "https://azota.vn/de-thi/c18w0f",
        "9": "https://azota.vn/de-thi/smbuxs",
        "10": "https://azota.vn/de-thi/ucnn5u",
    };

    const handleStartExam = () => {
        const link = examLinks[selectedExam];
        if (link) {
            window.open(link, '_blank');
        } else {
            alert(`Đang mở bài thi: Đề thi thử số ${selectedExam}\n(Chức năng đang được cập nhật link)`);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-paper border-4 border-double border-antique-gold rounded-lg shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-history-red p-4 flex justify-between items-center border-b border-antique-gold">
                    <h3 className="text-white font-display font-bold text-xl flex items-center gap-2">
                        <CheckCircleIcon className="w-6 h-6 text-antique-gold" />
                        Luyện thi THPT
                    </h3>
                    <button 
                        onClick={onClose}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    <label className="block text-charcoal font-serif font-bold mb-4 text-lg text-center">
                        Chọn đề thi thử để bắt đầu
                    </label>
                    
                    <div className="relative">
                        <select 
                            value={selectedExam}
                            onChange={(e) => setSelectedExam(e.target.value)}
                            className="w-full bg-white border-2 border-antique-gold text-charcoal py-3 px-4 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-history-red focus:border-transparent appearance-none font-sans text-lg cursor-pointer"
                        >
                            {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>Đề thi thử số {i + 1}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-charcoal">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-paper-dark p-6 border-t border-antique-gold/30 flex justify-center">
                    <button 
                        onClick={handleStartExam}
                        className="bg-history-red hover:bg-history-dark text-white font-bold py-3 px-8 rounded shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Làm bài
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- MockExamModal Component (Đề thi thử) ---
const MockExamModal = ({ isOpen, onClose }: ModalProps) => {
    const [selectedTopic, setSelectedTopic] = useState("1");

    if (!isOpen) return null;

    // Mapping link cho đề thi thử
    const mockExamLinks: Record<string, string> = {
        "1": "https://azota.vn/de-thi/3jvyuu", // Đề thi thử 1
        "2": "https://azota.vn/de-thi/udadlp", // Đề thi thử 2
        "3": "https://azota.vn/de-thi/eyjim8", // Đề thi thử 3
        "4": "", // Đề thi thử 4
        "5": "", // Đề thi thử 5
        "6": "", // Đề thi thử 6
        "7": "", // Đề thi thử 7
        "8": "", // Đề thi thử 8
        "9": "", // Đề thi thử 9
        "10": "", // Đề thi thử 10
    };

    const handleViewContent = () => {
        const link = mockExamLinks[selectedTopic];
        if (link) {
            window.open(link, '_blank');
        } else {
            alert(`Đang mở tài liệu: Đề thi ${selectedTopic} \n(Chức năng đang được cập nhật link)`);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-paper border-4 border-double border-antique-gold rounded-lg shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-history-red p-4 flex justify-between items-center border-b border-antique-gold">
                    <h3 className="text-white font-display font-bold text-xl flex items-center gap-2">
                        <ClipboardIcon className="w-6 h-6 text-antique-gold" />
                        Đề thi thử
                    </h3>
                    <button 
                        onClick={onClose}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    <label className="block text-charcoal font-serif font-bold mb-4 text-lg text-center">
                        Chọn đề thi thử để xem
                    </label>
                    
                    <div className="relative">
                        <select 
                            value={selectedTopic}
                            onChange={(e) => setSelectedTopic(e.target.value)}
                            className="w-full bg-white border-2 border-antique-gold text-charcoal py-3 px-4 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-history-red focus:border-transparent appearance-none font-sans text-lg cursor-pointer"
                        >
                            {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>Đề thi {i + 1}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-charcoal">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-paper-dark p-6 border-t border-antique-gold/30 flex justify-center">
                    <button 
                        onClick={handleViewContent}
                        className="bg-history-red hover:bg-history-dark text-white font-bold py-3 px-8 rounded shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Bắt đầu làm bài
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- ResourceSection Component ---
interface ResourceSectionProps {
    onOpenMindMap: () => void;
    onOpenExam: () => void;
    onOpenExercise: () => void;
    onOpenTrueFalse: () => void;
    onOpenGame: () => void;
    onOpenLecture: () => void;
    onOpenQA: () => void;
    onOpenReviewOutline: () => void;
    onOpenExcellentStudent: () => void;
    onOpenMockExam: () => void;
}

const ResourceSection = ({ onOpenMindMap, onOpenExam, onOpenExercise, onOpenTrueFalse, onOpenGame, onOpenLecture, onOpenQA, onOpenReviewOutline, onOpenExcellentStudent, onOpenMockExam }: ResourceSectionProps) => {
    // Sử dụng màu Earthy tones (Tông màu đất) để tự nhiên và dịu mắt
    const resources = [
        { title: "Bài giảng điện tử", icon: <BookIcon className="w-12 h-12" />, bg: "bg-stone-100", text: "text-stone-800", border: "border-stone-200", hover: "hover:border-stone-400" },
        { title: "Sơ đồ tư duy", icon: <MindmapIcon className="w-12 h-12" />, bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", hover: "hover:border-amber-400" },
        { title: "Bài tập theo chủ đề", icon: <PuzzleIcon className="w-12 h-12" />, bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200", hover: "hover:border-emerald-400" },
        { title: "Bài tập dạng đúng - sai", icon: <TrueFalseIcon className="w-12 h-12" />, bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200", hover: "hover:border-sky-400" },
        { title: "Bài tập dạng Hỏi - Đáp ngắn", icon: <QandAIcon className="w-12 h-12" />, bg: "bg-teal-50", text: "text-teal-900", border: "border-teal-200", hover: "hover:border-teal-400" },
        { title: "Các loại Trò chơi Lịch sử", icon: <GameIcon className="w-12 h-12" />, bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-200", hover: "hover:border-rose-400" },
        { title: "Luyện thi THPT", icon: <CheckCircleIcon className="w-12 h-12" />, bg: "bg-orange-50", text: "text-orange-900", border: "border-orange-200", hover: "hover:border-orange-400" },
        { title: "Đề cương ôn tập", icon: <DocumentTextIcon className="w-12 h-12" />, bg: "bg-indigo-50", text: "text-indigo-900", border: "border-indigo-200", hover: "hover:border-indigo-400" },
        { title: "Tài liệu ôn thi HSG", icon: <AcademicCapIcon className="w-12 h-12" />, bg: "bg-purple-50", text: "text-purple-900", border: "border-purple-200", hover: "hover:border-purple-400" },
        { title: "Đề thi thử", icon: <ClipboardIcon className="w-12 h-12" />, bg: "bg-fuchsia-50", text: "text-fuchsia-900", border: "border-fuchsia-200", hover: "hover:border-fuchsia-400" },
    ];

    const handleCardClick = (title: string) => {
        if (title === "Sơ đồ tư duy") {
            onOpenMindMap();
        } else if (title === "Luyện thi THPT") {
            onOpenExam();
        } else if (title === "Bài tập theo chủ đề") {
            onOpenExercise();
        } else if (title === "Bài tập dạng đúng - sai") {
            onOpenTrueFalse();
        } else if (title === "Các loại Trò chơi Lịch sử") {
            onOpenGame();
        } else if (title === "Bài giảng điện tử") {
            onOpenLecture();
        } else if (title === "Bài tập dạng Hỏi - Đáp ngắn") {
            onOpenQA();
        } else if (title === "Đề cương ôn tập") {
            onOpenReviewOutline();
        } else if (title === "Tài liệu ôn thi HSG") {
            onOpenExcellentStudent();
        } else if (title === "Đề thi thử") {
            onOpenMockExam();
        }
    };

    return (
        <section id="resources" className="py-24 px-4 bg-paper-dark relative border-t border-antique-gold/20">
             <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display text-history-red mb-4 font-bold">Kho học liệu Lịch Sử 12</h2>
                    <p className="text-charcoal/70 font-serif italic">Tài nguyên học tập phong phú & đa dạng</p>
                    <div className="w-24 h-1 bg-antique-gold mx-auto mt-6"></div>
                </div>
                
                {/* Layout Flexbox căn giữa các card */}
                <div className="flex flex-wrap justify-center gap-8">
                    {resources.map((res, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => handleCardClick(res.title)}
                            className={`${res.bg} ${res.text} ${res.border} border-2 p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center group ${res.hover} relative overflow-hidden w-full sm:w-72 md:w-80`}
                        >
                            {/* Decorative circle */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/40 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
                            
                            <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 text-history-red opacity-90">{res.icon}</div>
                            <h3 className="text-xl font-bold mb-3 font-display tracking-wide">{res.title}</h3>
                            <span className="text-sm font-serif italic opacity-70 group-hover:opacity-100 transition-opacity">Bấm để xem chi tiết &rarr;</span>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    )
}

// --- PracticeRoomSection Component ---
const PracticeRoomSection = () => {
    const schoolActivityImages = [
      'https://i.postimg.cc/9FCPH5mQ/ANH-LUYEN-THI-1.jpg',
      'https://i.postimg.cc/PxBjvQq7/ANH-ON-TAP-12D.jpg', // Updated image
      'https://i.postimg.cc/RFZCmwwF/truong-hoat-dong-03-jpg.png',
      'https://i.postimg.cc/T1Fpwb8v/ANH-12-C.jpg',
      'https://i.postimg.cc/BvSxr9zL/hoat-dong-truong-05.jpg',
      'https://i.postimg.cc/pdvHxkQ5/hoat-dong-truong-06.jpg',
      'https://i.postimg.cc/bY41tWNV/hoat-dong-truong-07.jpg',
      'https://i.postimg.cc/jdsGdd7Z/khoanh_khac_7_jpg.png', // Updated image
      'https://i.postimg.cc/Y2ZJfkn9/hoat-dong-truong-09.jpg',
      'https://i.postimg.cc/9Q7TRP49/hoat-dong-truong-10.jpg',
    ];
  
    return (
      <section className="py-24 px-4 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-display text-history-red font-bold">Thư viện hình ảnh</h2>
             <p className="mt-4 text-lg text-charcoal/80 font-serif italic">Một số khoảnh khắc và hoạt động tiêu biểu</p>
          </div>
          
          {/* Horizontal Scroll (Carousel) - Styled nicer */}
          <div className="relative">
             <div className="flex overflow-x-auto gap-6 pb-12 pt-4 snap-x scroll-smooth scrollbar-thin scrollbar-thumb-antique-gold scrollbar-track-transparent items-center px-4">
                {schoolActivityImages.map((src, index) => (
                    <div 
                        key={index} 
                        className="flex-none w-[85vw] sm:w-96 md:w-[500px] aspect-[4/3] relative group snap-center cursor-pointer perspective-1000"
                    >
                      {/* Stacked paper effect */}
                      <div className="absolute inset-0 bg-white transform rotate-1 group-hover:rotate-3 transition-transform duration-500 rounded shadow-md border border-gray-200/50"></div>
                      
                      {/* Main Frame */}
                      <div className="relative w-full h-full bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] border border-gray-100">
                          <div className="w-full h-full overflow-hidden relative border border-gray-100">
                              <img
                                src={src}
                                alt={`Hình ảnh hoạt động ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
                                loading="lazy"
                              />
                              {/* Overlay Caption */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                  <span className="text-white font-display tracking-widest uppercase text-sm md:text-base border-b border-antique-gold pb-1">Hoạt động {index + 1}</span>
                              </div>
                          </div>
                      </div>
                    </div>
                  ))}
             </div>
          </div>
        </div>
      </section>
    );
};

// --- DocumentarySection Component ---
const DocumentarySection = () => {
    // Dữ liệu mẫu cho video (Bạn có thể thay thế src iframe bằng link video của bạn)
    const videos = [
        { title: "Phim tư liệu 1", src: "https://youtu.be/_090ZoR0HWc?si=thP6fwrvobXeSwF0" },
        { title: "Phim tư liệu 2", src: "https://youtu.be/BTE8r9kRjvs?si=--1fOLjIXySf2SBq" },
        { title: "Phim tư liệu 3", src: "https://youtu.be/srHoCgDF3fo?si=eFeTNo5LQELryNuk" },
        { title: "Phim tư liệu 4", src: "https://www.youtube.com/live/injdXI30g2M?si=kXu1fWIh9riSR5I3" },
        { title: "Phim tư liệu 5", src: "https://youtu.be/U4_HazNusVk?si=tmnRlZbwQp2_X39s" },
        { title: "Phim tư liệu 6", src: "https://www.youtube.com/embed/mP3uw8vvI0Y?si=a2fNtV9Fh0VQ6tb_" },
    ];

    // Helper function to extract Video ID and return Embed URL
    const getEmbedUrl = (url: string) => {
        if (url.includes('youtube.com/embed/')) {
             // Extract ID if it has params, or return cleaner version
             const idMatch = url.match(/embed\/([^?&]+)/);
             return idMatch ? `https://www.youtube.com/embed/${idMatch[1]}?rel=0` : url;
        }

        // Standard regex for YouTube IDs (supports share, watch, live, short)
        // Added 'live/' to support live stream links like youtube.com/live/ID
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|live\/)([^#&?]*).*/;
        const match = url.match(regExp);

        if (match && match[2].length === 11) {
            return `https://www.youtube.com/embed/${match[2]}?rel=0`;
        } else {
            return url; // Return original if no match (e.g. placeholder)
        }
    };

    return (
        <section className="py-24 px-4 bg-paper-dark border-t border-antique-gold/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display text-history-red mb-4 font-black">Phim tư liệu lịch sử</h2>
                    <p className="text-charcoal/70 font-serif italic">Những thước phim hào hùng sống mãi với thời gian</p>
                    <div className="w-24 h-1 bg-antique-gold mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {videos.map((video, idx) => (
                        <div key={idx} className="group relative bg-white p-3 rounded-lg shadow-md border-2 border-transparent hover:border-antique-gold transition-all duration-300">
                            {/* Khung Video giả lập (16:9) */}
                            <div className="relative w-full pt-[56.25%] bg-black rounded overflow-hidden">
                                <iframe 
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={getEmbedUrl(video.src)} 
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h3 className="mt-4 text-lg font-bold text-center text-charcoal group-hover:text-history-red transition-colors font-display">
                                {video.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- FeedbackSection Component ---
const FeedbackSection = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', question: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const webhookUrl = 'https://us-central1-zenleads-ai.cloudfunctions.net/publicWebhook/iiu50Y57FUUlFwKWSUhi';

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Lỗi máy chủ: ' + response.status);
            }

            const responseData = await response.json();

            // Hiển thị popup thành công
            setShowSuccessModal(true);

            // Đợi 5 giây rồi xử lý tiếp
            setTimeout(() => {
                if (responseData.redirectTo) {
                    window.location.href = responseData.redirectTo;
                } else {
                    setShowSuccessModal(false);
                    setFormData({ name: '', phone: '', question: '' });
                }
            }, 5000);

        } catch (error) {
            console.error('Lỗi khi gửi form:', error);
            alert('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 px-4 bg-paper-dark border-t-4 border-antique-gold relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-history-red via-antique-gold to-history-red"></div>

             {/* Success Modal */}
             {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white border-4 border-antique-gold rounded-xl shadow-2xl max-w-lg w-full p-8 text-center relative transform animate-scaleIn">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-display text-history-red font-bold mb-4">
                            Bạn đã gửi phản hồi thành công !
                        </h3>
                        
                        <div className="space-y-4 text-charcoal/80 font-serif text-lg">
                            <p>
                                Chúng tôi sẽ liên hệ lại trong vòng <span className="font-bold text-history-dark">24h</span>.
                            </p>
                            <div className="bg-antique-gold/10 p-4 rounded-lg border border-antique-gold/30 mt-4">
                                <p className="mb-2">Nếu cần hỗ trợ gấp, vui lòng liên hệ:</p>
                                <p className="font-bold text-history-red text-xl">Hotline: 0907.130.900</p>
                                <p className="font-bold text-history-dark">(Thầy Dũng)</p>
                            </div>
                            <p className="text-sm italic opacity-70 mt-6">
                                Tự động chuyển hướng sau 5 giây...
                            </p>
                        </div>
                    </div>
                </div>
             )}

             <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl border border-antique-gold/30 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-display text-history-red font-bold mb-4">Gửi Phản Hồi & Góp Ý</h2>
                    <p className="text-charcoal/80 font-serif italic text-lg">
                        Ý kiến của thầy cô và các em là động lực để trang web ngày càng hoàn thiện hơn.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-history-dark font-bold font-serif">Họ và tên</label>
                            <input 
                                type="text" 
                                required
                                className="w-full px-4 py-3 border-2 border-antique-gold/50 rounded focus:outline-none focus:border-history-red focus:ring-1 focus:ring-history-red transition-colors bg-paper text-charcoal"
                                placeholder="Nhập họ tên của bạn..."
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-history-dark font-bold font-serif">Số điện thoại</label>
                            <input 
                                type="tel" 
                                required
                                className="w-full px-4 py-3 border-2 border-antique-gold/50 rounded focus:outline-none focus:border-history-red focus:ring-1 focus:ring-history-red transition-colors bg-paper text-charcoal"
                                placeholder="Nhập số điện thoại..."
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-history-dark font-bold font-serif">Câu hỏi / Phản hồi</label>
                        <textarea 
                            required
                            rows={4}
                            className="w-full px-4 py-3 border-2 border-antique-gold/50 rounded focus:outline-none focus:border-history-red focus:ring-1 focus:ring-history-red transition-colors bg-paper resize-none text-charcoal"
                            placeholder="Nội dung phản hồi..."
                            value={formData.question}
                            onChange={e => setFormData({...formData, question: e.target.value})}
                        ></textarea>
                    </div>

                    <div className="text-center pt-4">
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className={`bg-history-red hover:bg-history-dark text-white font-bold py-3 px-12 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            <span>{isSubmitting ? 'Đang gửi...' : 'Gửi Phản Hồi'}</span>
                            {!isSubmitting && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </form>
             </div>
        </section>
    );
}

// --- Footer Component ---
const Footer = () => {
    return (
        <footer className="bg-red-950 text-paper/90 pt-16 pb-8 px-4 border-t-8 border-antique-gold font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                
                {/* Cột 1: Giới thiệu */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold font-display text-antique-gold mb-6 uppercase tracking-wider border-b border-white/10 pb-2">
                        Giới thiệu
                    </h3>
                    <div className="space-y-2">
                         <p className="font-bold text-lg text-white">Võ Văn Dũng</p>
                         <p className="text-sm opacity-80">Giáo viên Lịch sử THPT</p>
                         <p className="text-sm opacity-80">Tổ trưởng chuyên môn TDQP – Sử – Địa – GDKTPL</p>
                         <p className="text-sm font-medium mt-2">Trường PT DTNT THPT Bình Phước (Đồng Nai)</p>
                         <div className="mt-4 pt-4 border-t border-white/10">
                            <p className="text-sm"><span className="text-antique-gold font-bold">Kinh nghiệm:</span> 25 năm</p>
                            <p className="text-sm italic mt-2 text-white/80">"Ứng dụng công nghệ số đổi mới phương pháp dạy học Lịch sử 12 – chương trình GDPT 2018."</p>
                         </div>
                    </div>
                </div>

                {/* Cột 2: Sứ mệnh & Trách nhiệm */}
                <div className="space-y-8">
                    <div>
                        <h4 className="text-lg font-bold text-antique-gold mb-3 flex items-center gap-2">
                            <span>📜</span> Sứ mệnh
                        </h4>
                        <p className="text-sm leading-relaxed text-justify opacity-80">
                            Mang đến cho học sinh kho học liệu số Lịch sử 12 dễ hiểu – trực quan – hiện đại, giúp các em học nhanh, nhớ lâu và làm chủ kiến thức.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-antique-gold mb-3 flex items-center gap-2">
                            <span>⚖️</span> Tuyên bố trách nhiệm
                        </h4>
                        <p className="text-sm leading-relaxed text-justify opacity-80">
                            Tất cả tài nguyên trên trang được biên soạn phục vụ mục đích học tập và tham khảo.
                            Nguồn trích dẫn tuân thủ chương trình GDPT 2018 và tài liệu chính thống của Bộ GD&ĐT.
                        </p>
                    </div>
                </div>

                {/* Cột 3: Liên hệ */}
                <div>
                    <h4 className="text-lg font-bold text-antique-gold mb-6 uppercase tracking-wider border-b border-white/10 pb-2">
                        Liên hệ
                    </h4>
                    <ul className="space-y-4">
                        <li>
                            <a href="mailto:vovandungdx@gmail.com" className="group flex items-center gap-3 hover:text-white transition-colors">
                                <span className="bg-white/10 p-2 rounded-full group-hover:bg-antique-gold group-hover:text-history-dark transition-colors">📧</span>
                                <span className="text-sm">vovandungdx@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:0907130900" className="group flex items-center gap-3 hover:text-white transition-colors">
                                <span className="bg-white/10 p-2 rounded-full group-hover:bg-antique-gold group-hover:text-history-dark transition-colors"><PhoneIcon className="w-5 h-5"/></span>
                                <span className="text-sm">0907.130.900</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://vovandung.click" className="group flex items-center gap-3 hover:text-white transition-colors">
                                <span className="bg-white/10 p-2 rounded-full group-hover:bg-antique-gold group-hover:text-history-dark transition-colors"><GlobeAltIcon className="w-5 h-5"/></span>
                                <span className="text-sm">www.vovandung.click</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright & Thanks */}
            <div className="max-w-3xl mx-auto pt-8 border-t border-white/10 text-center space-y-4">
                <div className="text-xs md:text-sm opacity-60 font-serif">
                    <p>© 2024 – Kho học liệu số Lịch sử 12 – Giáo viên Võ Văn Dũng</p>
                    <p>Không sao chép hoặc sử dụng lại nội dung khi chưa được phép.</p>
                </div>
                
                <div className="inline-block border border-antique-gold/30 bg-history-red/30 px-6 py-4 rounded-lg">
                    <p className="text-sm md:text-base font-serif italic text-antique-gold">
                        "Cảm ơn quý thầy cô và các em học sinh đã tin tưởng sử dụng hệ thống học liệu số Lịch sử 12. Chúc các em học tập hiệu quả và đạt thành tích cao!"
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default function App() {
  const [isMindMapModalOpen, setIsMindMapModalOpen] = useState(false);
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [isExerciseModalOpen, setIsExerciseModalOpen] = useState(false);
  const [isTrueFalseModalOpen, setIsTrueFalseModalOpen] = useState(false);
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const [isLectureModalOpen, setIsLectureModalOpen] = useState(false);
  const [isQAModalOpen, setIsQAModalOpen] = useState(false);
  const [isReviewOutlineModalOpen, setIsReviewOutlineModalOpen] = useState(false);
  const [isExcellentStudentModalOpen, setIsExcellentStudentModalOpen] = useState(false);
  const [isMockExamModalOpen, setIsMockExamModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper font-sans text-charcoal flex flex-col selection:bg-antique-gold selection:text-white">
        <DateTimeDisplay />
        <MarqueeSection />
        <HeroSection />
        <AboutSection />
        <ResourceSection 
            onOpenMindMap={() => setIsMindMapModalOpen(true)} 
            onOpenExam={() => setIsExamModalOpen(true)}
            onOpenExercise={() => setIsExerciseModalOpen(true)}
            onOpenTrueFalse={() => setIsTrueFalseModalOpen(true)}
            onOpenGame={() => setIsGameModalOpen(true)}
            onOpenLecture={() => setIsLectureModalOpen(true)}
            onOpenQA={() => setIsQAModalOpen(true)}
            onOpenReviewOutline={() => setIsReviewOutlineModalOpen(true)}
            onOpenExcellentStudent={() => setIsExcellentStudentModalOpen(true)}
            onOpenMockExam={() => setIsMockExamModalOpen(true)}
        />
        <PracticeRoomSection />
        <DocumentarySection />
        <FeedbackSection />
        <Footer />

        <MindMapModal 
            isOpen={isMindMapModalOpen} 
            onClose={() => setIsMindMapModalOpen(false)} 
        />
        <ExerciseModal 
            isOpen={isExerciseModalOpen} 
            onClose={() => setIsExerciseModalOpen(false)} 
        />
        <TrueFalseModal 
            isOpen={isTrueFalseModalOpen} 
            onClose={() => setIsTrueFalseModalOpen(false)} 
        />
        <ExamModal 
            isOpen={isExamModalOpen} 
            onClose={() => setIsExamModalOpen(false)} 
        />
        <GameModal
            isOpen={isGameModalOpen}
            onClose={() => setIsGameModalOpen(false)}
        />
        <LectureModal
            isOpen={isLectureModalOpen}
            onClose={() => setIsLectureModalOpen(false)}
        />
        <QAModal
            isOpen={isQAModalOpen}
            onClose={() => setIsQAModalOpen(false)}
        />
        <ReviewOutlineModal
            isOpen={isReviewOutlineModalOpen}
            onClose={() => setIsReviewOutlineModalOpen(false)}
        />
        <ExcellentStudentModal
            isOpen={isExcellentStudentModalOpen}
            onClose={() => setIsExcellentStudentModalOpen(false)}
        />
        <MockExamModal
            isOpen={isMockExamModalOpen}
            onClose={() => setIsMockExamModalOpen(false)}
        />
    </div>
  );
}
