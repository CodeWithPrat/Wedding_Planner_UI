import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Heart, Star, MapPin } from 'lucide-react';
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
      description: "From intimate gatherings to grand celebrations, we craft bespoke wedding experiences that reflect your unique love story.",
      features: [
        { icon: Calendar, text: "Customized Timeline" },
        { icon: Heart, text: "Personal Touch" },
        { icon: Star, text: "Premium Service" }
      ],
      stats: [
        { number: "500+", label: "Happy Couples" },
        { number: "15+", label: "Years Experience" },
        { number: "100%", label: "Satisfaction" }
      ],
      overlayColor: "from-pink-200/40 via-transparent to-pink-200/40",
      imageUrl: pic1,
      accent: "bg-pink-500",
      highlight: "Featured Service"
    },
    {
      title: "Luxury Meets Love",
      subtitle: "Elegant Celebrations for Your Special Moments",
      description: "Experience the perfect blend of sophistication and romance with our luxury wedding planning services.",
      features: [
        { icon: MapPin, text: "Prime Venues" },
        { icon: Star, text: "5-Star Service" },
        { icon: Heart, text: "Unique Design" }
      ],
      stats: [
        { number: "50+", label: "Luxury Venues" },
        { number: "200+", label: "Vendors" },
        { number: "4.9", label: "Rating" }
      ],
      overlayColor: "from-purple-200/40 via-transparent to-purple-200/40",
      imageUrl: pic3,
      accent: "bg-purple-500",
      highlight: "Premium Package"
    },
    {
      title: "Dreams Come True",
      subtitle: "Where Magic Happens and Memories Last Forever",
      description: "Let us transform your vision into reality with our exceptional attention to detail and creative expertise.",
      features: [
        { icon: Heart, text: "Custom Design" },
        { icon: Calendar, text: "Perfect Timing" },
        { icon: Star, text: "Dream Team" }
      ],
      stats: [
        { number: "1000+", label: "Events" },
        { number: "25+", label: "Awards" },
        { number: "100%", label: "Dedication" }
      ],
      overlayColor: "from-blue-200/40 via-transparent to-blue-200/40",
      imageUrl: pic4,
      accent: "bg-[#6f1d1b]",
      highlight: "Most Popular"
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
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 translate-x-0 scale-100'
              : `opacity-0 scale-105 ${
                  direction > 0 ? 'translate-x-full' : '-translate-x-full'
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-12">
              <div className="max-w-6xl w-full">
                <div className="text-center space-y-6">
                  {/* Highlight Badge */}
                  <div className="flex justify-center">
                    <span className={`${slide.accent} text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide transform -translate-y-2 opacity-90`}>
                      {slide.highlight}
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="space-y-6">
                    <h1 className="font-garamond text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
                      {slide.title}
                    </h1>

                    <p className="text-white/90 text-xl sm:text-2xl font-light font-garamond max-w-3xl mx-auto">
                      {slide.subtitle}
                    </p>

                    <p className="text-white/80 text-base sm:text-lg font-garamond max-w-2xl mx-auto">
                      {slide.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto mt-8">
                      {slide.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-white/90">
                          <feature.icon className="w-5 h-5" />
                          <span className="font-garamond">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats
                    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
                      {slide.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-white text-2xl sm:text-3xl font-bold font-garamond">
                            {stat.number}
                          </div>
                          <div className="text-white/70 text-sm sm:text-base font-garamond">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div> */}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
                      <Link to="/contact">
                        <button className="group relative px-8 py-4 bg-white/90 hover:bg-white text-gray-900 rounded-full font-medium transition-all duration-300 transform hover:rounded-full hover:scale-105 hover:shadow-2xl">
                          <span className="relative z-10 font-garamond">Start Your Journey</span>
                          {/* <div className={`absolute inset-0 ${slide.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} /> */}
                        </button>
                      </Link>
                      <Link to="/about">
                        <button className="px-8 py-4 text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 font-garamond">
                          Learn More
                        </button>
                      </Link>
                    </div>
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
          className="p-2 sm:p-3 rounded-full bg-black/30 
            text-white pointer-events-auto transform transition-all duration-300
            hover:bg-black/50 hover:scale-110 group"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 rounded-full bg-black/30 
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