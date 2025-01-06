import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceMenu = ({ serviceCategories }) => {
  const navigate = useNavigate();

  // State management
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  // Constants for better performance and configurability
  const AUTOPLAY_DELAY = 5000;
  const DRAG_THRESHOLD = 50;
  const ANIMATION_DURATION = 300;
  const SLIDE_TRANSITION = `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`;

  // Responsive sizing with memoization
  const itemsToShow = useMemo(() => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1536) return 3;
    return 5;
  }, []);

  // Maximum number of slides
  const maxSlides = Math.max(0, serviceCategories.length - itemsToShow);

  // Slide control functions
  const goToSlide = useCallback((index) => {
    const newIndex = Math.max(0, Math.min(index, maxSlides));
    setCurrentSlide(newIndex);
    setAnimationDirection(newIndex > currentSlide ? 1 : -1);
  }, [currentSlide, maxSlides]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide === maxSlides ? 0 : currentSlide + 1);
  }, [currentSlide, maxSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide === 0 ? maxSlides : currentSlide - 1);
  }, [currentSlide, maxSlides, goToSlide]);

  // Enhanced drag handlers with improved sensitivity
  const handleDragStart = useCallback((e) => {
    setIsDragging(true);
    setAutoplayEnabled(false);
    setDragStartX(e.type === 'mousedown' ? e.clientX : e.touches[0].clientX);
    setDragDelta(0);
  }, []);

  const handleDragMove = useCallback((e) => {
    if (!isDragging) return;

    const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const delta = ((currentX - dragStartX) / window.innerWidth) * 100;

    // Add resistance at edges
    if ((currentSlide === 0 && delta > 0) || (currentSlide === maxSlides && delta < 0)) {
      setDragDelta(delta * 0.2);
    } else {
      setDragDelta(delta);
    }
  }, [isDragging, dragStartX, currentSlide, maxSlides]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;

    if (Math.abs(dragDelta) > DRAG_THRESHOLD / window.innerWidth * 100) {
      if (dragDelta > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    setIsDragging(false);
    setDragDelta(0);
    setAutoplayEnabled(true);
  }, [isDragging, dragDelta, nextSlide, prevSlide]);

  // Autoplay effect with cleanup
  useEffect(() => {
    let timeoutId;
    if (autoplayEnabled && !isDragging) {
      timeoutId = setTimeout(nextSlide, AUTOPLAY_DELAY);
    }
    return () => clearTimeout(timeoutId);
  }, [autoplayEnabled, isDragging, nextSlide]);

  // Resize handler with debounce
  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCurrentSlide(prev => Math.min(prev, maxSlides));
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [maxSlides]);

  // Calculate transform styles
  const getTransformStyle = useCallback(() => {
    const baseTransform = -(currentSlide * (100 / itemsToShow));
    const dragOffset = isDragging ? dragDelta : 0;
    return {
      transform: `translateX(${baseTransform + dragOffset}%)`,
      transition: isDragging ? 'none' : SLIDE_TRANSITION
    };
  }, [currentSlide, itemsToShow, isDragging, dragDelta]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#f4f3ee] via-white to-[#f4f3ee] py-16 px-4 sm:px-6 lg:px-8">
      {/* Enhanced Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0 && !isDragging}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 
                 bg-white/90 p-4 rounded-full shadow-lg backdrop-blur-md
                 transition-all duration-300 hover:bg-blue-50 hover:scale-110
                 disabled:opacity-50 disabled:hover:scale-100
                 border border-gray-100 group"
      >
        <ChevronLeft className="w-6 h-6 text-[#dda15e] group-hover:text-[#ac7638]" />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlide === maxSlides && !isDragging}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 
                 bg-white/90 p-4 rounded-full shadow-lg backdrop-blur-md
                 transition-all duration-300 hover:bg-blue-50 hover:scale-110
                 disabled:opacity-50 disabled:hover:scale-100
                 border border-gray-100 group"
      >
        <ChevronRight className="w-6 h-6 text-[#dda15e] group-hover:text-[#ac7638]" />
      </button>

      {/* Enhanced Carousel Container */}
      <div
        className="overflow-hidden rounded-2xl"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="flex transition-transform"
          style={getTransformStyle()}
        >
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 p-4"
              style={{ width: `${100 / itemsToShow}%` }}
              onMouseEnter={() => setIsHovered(category.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300
                           hover:-translate-y-1 overflow-hidden border border-gray-100 backdrop-blur-lg">
                <div className="relative h-64 lg:h-72 overflow-hidden group font-garamond">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500
                             group-hover:scale-110 transform-gpu font-garamond"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80
                               opacity-80 transition-opacity duration-300" />
                  <div className="absolute inset-x-6 bottom-6 transition-transform duration-300
                               transform group-hover:translate-y-0 translate-y-2">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2
                                tracking-tight font-garamond">{category.title}</h2>
                    <p className="text-white/90 text-sm lg:text-base line-clamp-2
                               font-light font-garamond opacity-0 group-hover:opacity-100
                               transition-opacity duration-300">{category.description}</p>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <p className="text-gray-600 mb-6 line-clamp-3 font-garamond text-lg">{category.description}</p>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => navigate(`/services/${category.id}`)}
                      className="bg-[#dda15e] text-white px-6 py-3 rounded-xl font-medium
                               hover:bg-[#ac7638] transition-all duration-300 shadow-md
                               hover:shadow-lg transform hover:-translate-y-0.5
                               active:translate-y-0 relative overflow-hidden group"
                    >
                      <span className="relative z-10">Learn More</span>
                      <div className="absolute inset-0 bg-[#dda15e] transform scale-x-0 
                                  group-hover:scale-x-100 transition-transform 
                                  duration-300 origin-left" />
                    </button>

                    <button
                      onClick={() => setActiveCategory(
                        activeCategory === category.id ? null : category.id
                      )}
                      className="p-3 hover:bg-gray-100 rounded-full transition-all duration-300
                               hover:shadow-md"
                    >
                      {activeCategory === category.id ? (
                        <ChevronUp className="w-6 h-6 text-[#dda15e]" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-[#dda15e]" />
                      )}
                    </button>
                  </div>

                  {activeCategory === category.id && (
                    <ul className="mt-6 space-y-3">
                      {category.services.map((service, index) => (
                        <li
                          key={index}
                          className="bg-gray-50/80 p-4 rounded-xl text-gray-700
                                   hover:bg-blue-50/80 transition-all duration-300
                                   shadow-sm hover:shadow-md transform hover:-translate-x-1
                                   backdrop-blur-sm border border-gray-100/50"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Pagination */}
      <div className="flex justify-center mt-8 gap-3">
        {Array.from({ length: maxSlides + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 transform
                     hover:scale-110 ${currentSlide === index
                ? 'bg-[#dda15e] w-8 h-3 shadow-md'
                : 'bg-gray-300 w-3 h-3 hover:bg-blue-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceMenu;