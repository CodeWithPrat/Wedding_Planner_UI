import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Heart, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import pic1 from "./../../assets/imgs/HomeImgs/pic1.jpg"
import pic3 from "./../../assets/imgs/HomeImgs/pic3.jpg"
import pic4 from "./../../assets/imgs/HomeImgs/pic4.jpg"

// Custom hook for screen size detection
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isLandscape: false
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setScreenSize({
        isMobile: window.innerWidth <= 768, // Standard mobile breakpoint
        isLandscape: window.innerWidth > window.innerHeight && window.innerWidth < 1024
      });
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return screenSize;
};

// Custom hook for detecting mobile screen
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Standard mobile breakpoint
    };

    // Check initially
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};


const EnhancedCarousel = () => {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  // Check if device is in landscape mode
  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight && window.innerWidth < 1024);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

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

  const getMobileStyles = () => ({
    container: 'h-[calc(100vh-60px)] min-h-[400px]', // Adjusted height for mobile
    heading: 'text-2xl sm:text-3xl', // Smaller text for mobile
    subtitle: 'text-base sm:text-lg',
    description: 'text-sm hidden sm:block', // Hide description on very small screens
    features: 'gap-2 mt-2',
    buttons: 'space-y-2 mt-4',
    navigationArrows: 'w-4 h-4',
    progressIndicators: 'bottom-4 space-x-2'
  });

  // Desktop styles (your existing styles)
  const getDesktopStyles = () => ({
    container: 'h-screen max-h-[700px] min-h-[500px]',
    heading: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
    subtitle: 'text-xl sm:text-2xl',
    description: 'text-base sm:text-lg',
    features: 'gap-6 mt-2',
    buttons: 'space-y-4 sm:space-y-0 sm:space-x-6 mt-8',
    navigationArrows: 'w-6 h-6 sm:w-8 sm:h-8',
    progressIndicators: 'bottom-8 space-x-4'
  });

  const styles = isMobile ? getMobileStyles() : getDesktopStyles();

  return (
    <div
      className={`relative mx-auto overflow-hidden bg-black w-full transition-height duration-300 mt-[-25px] ease-in-out ${isMobile
          ? 'h-[400px]'
          : 'h-[800px]'
        }`}
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
              : `opacity-0 scale-105 ${direction > 0 ? 'translate-x-full' : '-translate-x-full'
              }`
            }`}
        >
          {/* Image and Overlays */}
          <div className="relative h-full w-full">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className={`h-full w-full object-cover ${isLandscape ? 'object-center' : ''
                }`}
            />

            {/* Gradient Overlays */}
            <div className={`absolute inset-0 bg-gradient-to-b ${slide.overlayColor}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Content */}
            <div className={`absolute inset-0 flex items-center justify-center px-4 ${isMobile ? 'py-8' : 'sm:px-8 md:px-12'
              }`}>
              <div className={`max-w-6xl w-full ${isMobile ? 'space-y-4' : ''}`}>
                {/* Highlight Badge */}
                <div className="flex justify-center">
                  <span className={`${slide.accent} text-white px-4 py-1 rounded-full ${isMobile ? 'text-xs' : 'text-sm'
                    } font-medium tracking-wide transform -translate-y-2 opacity-90`}>
                    {slide.highlight}
                  </span>
                </div>

                {/* Main Content */}
                <div className={`text-center ${isMobile ? 'space-y-3' : 'space-y-6'}`}>
                  <h1 className={`font-garamond text-white leading-tight tracking-tight ${isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
                    }`}>
                    {slide.title}
                  </h1>

                  <p className={`text-white/90 font-light font-garamond mx-auto ${isMobile ? 'text-lg' : 'text-xl sm:text-2xl'
                    } max-w-3xl`}>
                    {slide.subtitle}
                  </p>

                  {!isMobile && (
                    <p className="text-white/80 font-garamond mx-auto text-base sm:text-lg max-w-2xl">
                      {slide.description}
                    </p>
                  )}

                  {/* Features */}
                  <div className={`flex flex-wrap justify-center gap-4 mx-auto ${isMobile ? 'mt-4' : 'gap-6 max-w-3xl mt-8'
                    }`}>
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-white/90">
                        <feature.icon className={isMobile ? 'w-4 h-4' : 'w-5 h-5'} />
                        <span className={`font-garamond ${isMobile ? 'text-sm' : ''}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className={`flex flex-col sm:flex-row items-center justify-center ${isMobile ? 'space-y-3 mt-6' : 'space-y-4 sm:space-y-0 sm:space-x-6 mt-8'
                    }`}>
                    <Link to="/contact">
                      <button className={`group relative bg-white/90 hover:bg-white text-gray-900 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${isMobile ? 'px-6 py-2 text-sm' : 'px-8 py-4'
                        }`}>
                        <span className="relative z-10 font-garamond">Start Your Journey</span>
                      </button>
                    </Link>
                    <Link to="/about">
                      <button className={`text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 font-garamond ${isMobile ? 'px-6 py-2 text-sm' : 'px-8 py-4'
                        }`}>
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

      {/* Navigation Arrows - Hidden on mobile */}
      {!isMobile && (
        <div className="absolute inset-x-4 sm:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
          <button
            onClick={prevSlide}
            className="p-2 sm:p-3 rounded-full bg-black/30 text-white pointer-events-auto transform transition-all duration-300 hover:bg-black/50 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 sm:p-3 rounded-full bg-black/30 text-white pointer-events-auto transform transition-all duration-300 hover:bg-black/50 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* Progress Indicators */}
      <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex ${isMobile ? 'space-x-2' : 'bottom-8 space-x-4'
        }`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`group relative transition-all duration-500 ${isMobile
                ? currentSlide === index ? 'w-6 h-2' : 'w-2 h-2'
                : currentSlide === index ? 'w-12 h-3' : 'w-3 h-3 hover:w-6'
              } rounded-full`}
          >
            <div className="absolute inset-0 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors duration-300" />
            <div
              className={`absolute inset-0 rounded-full transition-all duration-500 ${currentSlide === index ? 'bg-white' : 'bg-transparent'
                }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default EnhancedCarousel;