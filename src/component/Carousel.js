import React, { useState, useEffect } from 'react';

import dev from '../icons/webimage.webp';

const Carousel = () => {
  // State to track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images for the carousel
  const slides = [
    dev,
    'https://via.placeholder.com/800x300?text=Slide+2',
    'https://via.placeholder.com/800x300?text=Slide+3',
    'https://via.placeholder.com/800x300?text=Slide+4',
  ];

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Optional: Auto-slide functionality (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className='carousel-container min-h-screen bg-gray-100 flex justify-center items-center'>
      <div className='relative w-full max-w-4xl mx-auto'>
        {/* Carousel container */}
        <div className='overflow-hidden relative'>
          {/* Slide wrapper */}
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {/* Slides */}
            {slides.map((src, index) => (
              <div key={index} className='flex-none w-full h-64 bg-gray-400'>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className='object-cover w-full h-full'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-800 focus:outline-none'
        >
          <span className='text-2xl'>&#10094;</span>
        </button>
        <button
          onClick={nextSlide}
          className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-800 focus:outline-none'
        >
          <span className='text-2xl'>&#10095;</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
