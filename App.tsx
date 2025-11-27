

import React, { useState } from 'react';
import { TeacherIcon, BookIcon, PuzzleIcon, MindmapIcon, LocalIcon, GameIcon, SoftwareIcon, GlobeAltIcon, PhoneIcon, BuildingLibraryIcon, CheckCircleIcon, TrueFalseIcon } from './components/Icons';

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
        <div className="bg-paper-dark text-history-red px-6 py-3 text-base md:text-xl font-medium font-display flex justify-center md:justify-end items-center border-b border-antique-gold/30">
            <span className="tracking-wide">
                {currentTime.toLocaleTimeString('vi-VN')} <span className="mx-2 text-antique-gold">|</span> {currentTime.toLocaleDateString('vi-VN', { weekday: 'long' })}, {currentTime.toLocaleDateString('vi-VN')}
            </span>
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
        <section className="relative w-full h-screen flex flex-col items-center justify-end text-center overflow-hidden pb-20">
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
                <div className="absolute bottom-0 left-0 w-full h-[85%] bg-gradient-to-t from-[#8B1E1E] via-[#8B1E1E]/95 to-transparent opacity-100"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 max-w-6xl mx-auto flex flex-col items-center animate-fade-in-up w-full">
                
                {/* Typography Design */}
                <div className="flex flex-col items-center mb-10 w-full">
                    <span className="text-2xl md:text-4xl font-display font-bold text-white mb-4 drop-shadow-lg tracking-wide opacity-95 font-serif">
                        Khám phá Lịch sử
                    </span>
                    
                    {/* Ornamental Divider */}
                    <div className="flex items-center gap-4 opacity-80 mb-4">
                        <div className="h-[2px] w-16 bg-antique-gold"></div>
                    </div>

                    <span className="text-4xl md:text-7xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-antique-gold uppercase tracking-tight drop-shadow-xl text-shadow-lg leading-tight py-2">
                        Nuôi dưỡng lòng yêu nước
                    </span>
                </div>
                
                <p className="text-white/90 text-base md:text-xl max-w-3xl mb-12 font-serif font-light leading-relaxed drop-shadow-md">
                    Học liệu số môn Lịch sử 12 – Dành cho giáo viên & học sinh THPT theo chương trình GDPT 2018.
                </p>

                <button 
                    onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative px-10 py-4 bg-antique-gold hover:bg-white text-[#8B1E1E] font-bold text-lg rounded-full shadow-2xl transition-all duration-300 tracking-wider overflow-hidden mb-8"
                >
                    <span className="relative z-10 group-hover:text-[#8B1E1E] transition-colors duration-300 uppercase">KHÁM PHÁ NGAY</span>
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
        // "1": "link_here", 
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

// --- ResourceSection Component ---
interface ResourceSectionProps {
    onOpenMindMap: () => void;
    onOpenExam: () => void;
    onOpenExercise: () => void;
    onOpenTrueFalse: () => void;
}

const ResourceSection = ({ onOpenMindMap, onOpenExam, onOpenExercise, onOpenTrueFalse }: ResourceSectionProps) => {
    // Sử dụng màu Earthy tones (Tông màu đất) để tự nhiên và dịu mắt
    const resources = [
        { title: "Bài giảng điện tử", icon: <BookIcon className="w-12 h-12" />, bg: "bg-stone-100", text: "text-stone-800", border: "border-stone-200", hover: "hover:border-stone-400" },
        { title: "Sơ đồ tư duy", icon: <MindmapIcon className="w-12 h-12" />, bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", hover: "hover:border-amber-400" },
        { title: "Bài tập theo chủ đề", icon: <PuzzleIcon className="w-12 h-12" />, bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200", hover: "hover:border-emerald-400" },
        { title: "Bài tập dạng đúng - sai", icon: <TrueFalseIcon className="w-12 h-12" />, bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200", hover: "hover:border-sky-400" },
        { title: "Trò chơi Lịch sử", icon: <GameIcon className="w-12 h-12" />, bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-200", hover: "hover:border-rose-400" },
        { title: "Luyện thi THPT", icon: <CheckCircleIcon className="w-12 h-12" />, bg: "bg-orange-50", text: "text-orange-900", border: "border-orange-200", hover: "hover:border-orange-400" },
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
        }
    };

    return (
        <section id="resources" className="py-24 px-4 bg-paper-dark relative border-t border-antique-gold/20">
             <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display text-history-red mb-4 font-bold">Kho học liệu</h2>
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
      <section className="py-24 px-4 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-display text-history-red font-bold">Thư viện hình ảnh</h2>
             <p className="mt-4 text-lg text-charcoal/80 font-serif italic">Một số khoảnh khắc và hoạt động tiêu biểu</p>
          </div>
          
          {/* Horizontal Scroll (Carousel) - Styled nicer */}
          <div className="relative">
             <div className="flex overflow-x-auto gap-8 pb-12 snap-x scroll-smooth scrollbar-thin px-4">
                {schoolActivityImages.map((src, index) => (
                    <div 
                        key={index} 
                        className="flex-none w-80 md:w-96 aspect-[4/3] rounded-sm overflow-hidden shadow-md hover:shadow-2xl border-[6px] border-white bg-white snap-center transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <img
                        src={src}
                        alt={`Hình ảnh hoạt động ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
             </div>
          </div>
        </div>
      </section>
    );
};

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
        />
        <PracticeRoomSection />
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
    </div>
  );
}
