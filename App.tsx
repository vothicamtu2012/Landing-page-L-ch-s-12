
import React from 'react';

const PracticeRoomSection = () => {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    const schoolActivityImages = [
      'https://i.postimg.cc/bY41tWNV/hoat-dong-truong-01.jpg',
      'https://i.postimg.cc/BvSxr9zL/hoat-dong-truong-05.jpg', // Thay thế ảnh trùng (cũ là 02) bằng ảnh 05
      'https://i.postimg.cc/RFZCmwwF/truong-hoat-dong-03-jpg.png', // Vị trí số 3 vẫn là ảnh cũ
      'https://i.postimg.cc/Y0h4QqWw/hoat-dong-truong-04.jpg',
      'https://i.postimg.cc/BvSxr9zL/hoat-dong-truong-05.jpg',
      'https://i.postimg.cc/pdvHxkQ5/hoat-dong-truong-06.jpg',
      'https://i.postimg.cc/bY41tWNV/hoat-dong-truong-07.jpg', // Cập nhật theo link người dùng gửi
      'https://i.postimg.cc/9Q7TRP49/hoat-dong-truong-10.jpg', // Thay thế ảnh trùng (cũ là 08) bằng ảnh 10
      'https://i.postimg.cc/Y2ZJfkn9/hoat-dong-truong-09.jpg',
      'https://i.postimg.cc/9Q7TRP49/hoat-dong-truong-10.jpg',
    ];
  
    return (
      <section className="py-16 px-4 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
             <h2 className="text-4xl md:text-5xl font-display text-red-earth">Thư viện hình ảnh nhà trường</h2>
             <p className="mt-4 text-xl text-gray-700">Một số khoảnh khắc và hoạt động tiêu biểu</p>
             <p className="mt-2 text-sm text-gray-500 italic">(Bấm vào ảnh để xem chi tiết)</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
             {schoolActivityImages.map((src, index) => (
                <div 
                    key={index} 
                    className="aspect-square group overflow-hidden rounded-lg shadow-md border-2 border-bronze-gold/20 cursor-pointer"
                    onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Hình ảnh hoạt động của trường ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
            <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 animate-fade-in-up"
                onClick={() => setSelectedImage(null)}
                role="dialog"
                aria-modal="true"
            >
                <button 
                    className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 focus:outline-none"
                    onClick={() => setSelectedImage(null)}
                    aria-label="Đóng"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <img 
                    src={selectedImage} 
                    alt="Phóng to" 
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    onClick={(e) => e.stopPropagation()} 
                />
            </div>
        )}
      </section>
    );
};

export default function App() {
  return <PracticeRoomSection />;
}
