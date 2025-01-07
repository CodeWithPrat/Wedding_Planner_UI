import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import pic1 from "./../../assets/imgs/HomeImgs/pic1.jpg"
import pic3 from "./../../assets/imgs/HomeImgs/pic3.jpg"
import pic4 from "./../../assets/imgs/HomeImgs/pic4.jpg"

const EnhancedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "Your Perfect Day Awaits",
      subtitle: "Creating Unforgettable Wedding Experiences",
      overlayColor: "from-pink-200/40 via-transparent to-pink-200/40",
      imageUrl: pic1,
      accent: "bg-pink-500"
    },
    {
      title: "Luxury Meets Love",
      subtitle: "Elegant Celebrations for Your Special Moments",
      overlayColor: "from-purple-200/40 via-transparent to-purple-200/40",
      imageUrl: pic3,
      accent: "bg-purple-500"
    },
    {
      title: "Dreams Come True",
      subtitle: "Where Magic Happens and Memories Last Forever",
      overlayColor: "from-blue-200/40 via-transparent to-blue-200/40",
      imageUrl: pic4,
      accent: "bg-blue-500"
    }
  ];

  const handleSlideChange = useCallback((newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(newIndex > currentSlide ? 1 : -1);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % slides.length;
    handleSlideChange(newIndex);
  }, [currentSlide, handleSlideChange, slides.length]);

  const prevSlide = useCallback(() => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    handleSlideChange(newIndex);
  }, [currentSlide, handleSlideChange, slides.length]);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, nextSlide]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <div
      className="relative mx-auto overflow-hidden bg-black w-full h-screen max-h-[800px] min-h-[500px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
              ? 'opacity-100 translate-x-0 scale-100'
              : `opacity-0 scale-105 ${direction > 0
                ? 'translate-x-full'
                : '-translate-x-full'
              }`
            }`}
        >
          {/* Image and Overlays */}
          <div className="relative h-full w-full">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            {/* Gradient Overlays */}
            <div className={`absolute inset-0 bg-gradient-to-b ${slide.overlayColor}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-12">
              <div className="max-w-5xl w-full">
                <div className="text-center space-y-8">
                  {/* Decorative Line */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className={`h-px w-12 ${slide.accent}`} />
                    <span className="text-white/90 uppercase tracking-[0.2em] text-sm font-garamond">
                      Wedding Planning
                    </span>
                    <div className={`h-px w-12 ${slide.accent}`} />
                  </div>

                  <h1 className="font-garamond text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                    leading-tight tracking-tight transform">
                    {slide.title}
                  </h1>

                  <p className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto 
                    leading-relaxed font-light font-garamond">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <Link
                      to="/contact"
                    >
                      <button
                        className="group relative px-8 py-4 bg-white/90 hover:bg-white text-gray-900
                        rounded-full font-medium font-garamond transition-all duration-300 overflow-hidden
                        transform hover:scale-105 hover:shadow-2xl"
                      >
                        <span className="relative z-10 font-garamond">Start Your Journey</span>
                        <div className={`absolute inset-0 ${slide.accent} transform scale-x-0 
                        group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                      </button>
                    </Link>

                    <Link
                      to="/about"
                    >
                      <button className="px-8 py-4 text-white border border-white/30 rounded-full
                      hover:bg-white/10 transition-all duration-300 font-garamond">
                        Learn More
                      </button>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-x-4 sm:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 rounded-full bg-black/30 backdrop-blur-sm
            text-white pointer-events-auto transform transition-all duration-300
            hover:bg-black/50 hover:scale-110 group"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 rounded-full bg-black/30 backdrop-blur-sm
            text-white pointer-events-auto transform transition-all duration-300
            hover:bg-black/50 hover:scale-110 group"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`group relative h-3 rounded-full transition-all duration-500
              ${currentSlide === index ? 'w-12' : 'w-3 hover:w-6'}`}
          >
            <div className="absolute inset-0 bg-white/30 rounded-full group-hover:bg-white/50 
              transition-colors duration-300" />
            <div
              className={`absolute inset-0 rounded-full transition-all duration-500 
                ${currentSlide === index ? 'bg-white' : 'bg-transparent'}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default EnhancedCarousel;