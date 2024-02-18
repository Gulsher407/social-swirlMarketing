import React, { useState } from 'react';

function RecentProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    './public/images/Seo.jpg',
    './public/images/Marketing.jpg',
    './public/images/Bulb.jpg',
    './public/images/Design.jpg',
    './public/images/triple.png',
    './public/images/Grow.png',
    './public/images/Ligo.png',
    './public/images/Ideas.png',
    // Add more image paths as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="container mx-auto py-8 mt-40 text-center">
      <h2 className="text-3xl text-white font-bold mb-4">Our Recent Projects</h2>
      <h2 className="text-xl text-white  mb-20">Here Are our Some On progress Projects</h2>

      <div className="relative max-w-sm mx-auto">
        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-l-lg">
          &lt;
        </button>
        <div className="flex justify-center items-center">
          {images.map((image, index) => (
            <div key={index} className={index === currentIndex ? 'block mx-2' : 'hidden'}>
              <img src={image} alt={`Slide ${index + 1}`} className="max-w-[460px] max-h-[300px]" />
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-r-lg">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default RecentProjects;
