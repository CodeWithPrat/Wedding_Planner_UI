import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceMenu = ({ serviceCategories }) => {
  const navigate = useNavigate();

  // Enhanced state management with TypeScript-like initializers
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);



  // Optimized constants
  const CONSTANTS = useMemo(() => ({
    MOBILE_BREAKPOINT: 640,
    AUTOPLAY_DELAY: 5000,
    DRAG_THRESHOLD: 5,
    MOBILE_DRAG_THRESHOLD: 15,
    TRANSITION_DURATION: 300,
  }), []);

  // Responsive breakpoint detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < CONSTANTS.MOBILE_BREAKPOINT);
    };

    const debouncedCheck = debounce(checkMobile, 150);
    checkMobile();

    window.addEventListener('resize', debouncedCheck);
    return () => window.removeEventListener('resize', debouncedCheck);
  }, [CONSTANTS.MOBILE_BREAKPOINT]);

  // Optimized responsive sizing with memoization
  const itemsToShow = useMemo(() => {
    if (typeof window === 'undefined') return 3;
    const width = window.innerWidth;

    return width < CONSTANTS.MOBILE_BREAKPOINT ? 1
      : width < 1024 ? 2
        : width < 1536 ? 3
          : 4;
  }, [CONSTANTS.MOBILE_BREAKPOINT]);

  const maxSlides = Math.max(0, serviceCategories.length - itemsToShow);

  // Enhanced slide control with smooth animations
  const goToSlide = useCallback((index) => {
    setCurrentSlide(Math.max(0, Math.min(index, maxSlides)));
  }, [maxSlides]);

  const slideControls = useMemo(() => ({
    next: () => {
      goToSlide(currentSlide === maxSlides ? 0 : currentSlide + 1);
    },
    prev: () => {
      goToSlide(currentSlide === 0 ? maxSlides : currentSlide - 1);
    }
  }), [currentSlide, maxSlides, goToSlide]);

  // Optimized drag handlers with improved touch response
  const dragHandlers = useMemo(() => ({
    start: (e) => {
      if (isMobile) return;
      setIsDragging(true);
      setAutoplayEnabled(false);
      setDragStartX(e.clientX);
    },
    move: (e) => {
      if (!isDragging || isMobile) return;
      const delta = (e.clientX - dragStartX) / window.innerWidth * 100;
      setDragDelta(delta);
    },
    end: () => {
      if (!isDragging || isMobile) return;
      if (Math.abs(dragDelta) > CONSTANTS.DRAG_THRESHOLD) {
        dragDelta > 0 ? slideControls.prev() : slideControls.next();
      }
      setIsDragging(false);
      setDragDelta(0);
      setAutoplayEnabled(true);
    }
  }), [isDragging, isMobile, dragStartX, dragDelta, CONSTANTS.DRAG_THRESHOLD, slideControls]);

  // Enhanced touch handlers for mobile
  const touchHandlers = useMemo(() => ({
    start: (e) => {
      if (!isMobile) return;
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStartX(touch.clientX);
    },
    move: (e) => {
      if (!isDragging || !isMobile) return;
      const touch = e.touches[0];
      const delta = (touch.clientX - dragStartX) / window.innerWidth * 100;
      setDragDelta(delta);
    },
    end: () => {
      if (!isDragging || !isMobile) return;
      if (Math.abs(dragDelta) > CONSTANTS.MOBILE_DRAG_THRESHOLD) {
        dragDelta > 0 ? slideControls.prev() : slideControls.next();
      }
      setIsDragging(false);
      setDragDelta(0);
    }
  }), [isMobile, isDragging, dragStartX, dragDelta, CONSTANTS.MOBILE_DRAG_THRESHOLD, slideControls]);

  // Optimized autoplay with cleanup
  useEffect(() => {
    if (!autoplayEnabled || isDragging || isHovering) return;

    const timeoutId = setTimeout(slideControls.next, CONSTANTS.AUTOPLAY_DELAY);
    return () => clearTimeout(timeoutId);
  }, [autoplayEnabled, isDragging, isHovering, slideControls, CONSTANTS.AUTOPLAY_DELAY]);

  // Enhanced slide container animation variants for desktop only
  const slideContainerVariants = {
    animate: (currentSlide) => ({
      x: isMobile ? 0 : `${-(currentSlide * (100 / itemsToShow))}%`,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        duration: 0.5
      }
    })
  };

  // Modified card style handling with dynamic height for mobile
  const getCardStyle = useCallback((index) => {
    if (!isMobile) {
      return {
        width: `${100 / itemsToShow}%`,
        height: '100%'
      };
    }

    const isActive = index === currentSlide;
    const isPrev = index === (currentSlide - 1 + serviceCategories.length) % serviceCategories.length;
    const isNext = index === (currentSlide + 1) % serviceCategories.length;

    const baseStyles = {
      position: 'absolute',
      width: '100%',
      height: '470px', // Fixed height for mobile
      transition: `all ${CONSTANTS.TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    };

    if (isActive) {
      return {
        ...baseStyles,
        transform: 'translateX(0) scale(1)',
        zIndex: 3,
        opacity: 1,
      };
    } else if (isPrev) {
      return {
        ...baseStyles,
        transform: 'translateX(-65%) scale(0.8)',
        zIndex: 2,
        opacity: 0.7,
        pointerEvents: 'none',
      };
    } else if (isNext) {
      return {
        ...baseStyles,
        transform: 'translateX(65%) scale(0.8)',
        zIndex: 1,
        opacity: 0.7,
        pointerEvents: 'none',
      };
    }

    return {
      ...baseStyles,
      transform: 'translateX(0) scale(0.8)',
      zIndex: 0,
      opacity: 0,
      pointerEvents: 'none',
    };
  }, [isMobile, currentSlide, itemsToShow, CONSTANTS.TRANSITION_DURATION, serviceCategories.length, expandedCardId]);



  // Mobile transition variants
  const mobileCardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
  };



  return (
    <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Enhanced Navigation Buttons */}
      {!isMobile && (
        <div className="fixed-navigation-wrapper">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={slideControls.prev}
            disabled={currentSlide === 0 && !isDragging}
            className="fixed-nav-button left-2 lg:left-8
                     bg-white/95 
                     w-12 h-12 flex items-center justify-center
                     rounded-full shadow-lg hover:shadow-xl
                     transition-all duration-300
                     disabled:opacity-0 disabled:pointer-events-none
                     disabled:translate-x-full
                     border border-gray-200
                     group z-50"
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            <ChevronLeft className="w-6 h-6 text-[#dda15e]
                                  transition-transform duration-300 
                                  group-hover:-translate-x-0.5" />
            <div className="absolute inset-0 rounded-full 
                          bg-gradient-to-r from-blue-50 to-transparent 
                          opacity-0 group-hover:opacity-20 
                          transition-opacity duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={slideControls.next}
            disabled={currentSlide === maxSlides && !isDragging}
            className="fixed-nav-button right-2 lg:right-8
                     bg-white/95
                     w-12 h-12 flex items-center justify-center
                     rounded-full shadow-lg hover:shadow-xl
                     transition-all duration-300
                     disabled:opacity-0 disabled:pointer-events-none
                     disabled:-translate-x-full
                     border border-gray-200
                     group z-50"
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            <ChevronRight className="w-6 h-6 text-[#dda15e]
                                   transition-transform duration-300 
                                   group-hover:translate-x-0.5" />
            <div className="absolute inset-0 rounded-full 
                          bg-gradient-to-l from-blue-50 to-transparent 
                          opacity-0 group-hover:opacity-20 
                          transition-opacity duration-300" />
          </motion.button>
        </div>
      )}

      {/* Enhanced Carousel Container */}
      <div
        className="overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseDown={dragHandlers.start}
        onMouseMove={dragHandlers.move}
        onMouseUp={dragHandlers.end}
        onTouchStart={touchHandlers.start}
        onTouchMove={touchHandlers.move}
        onTouchEnd={touchHandlers.end}
      >
        <motion.div
          className={`flex relative ${isMobile ? 'min-h-[400px]' : ''}`}
          style={{
            height: isMobile && expandedCardId ? 'auto' : undefined,
            minHeight: isMobile && expandedCardId ? '750px' : undefined
          }}
          variants={!isMobile ? slideContainerVariants : undefined}
          animate={!isMobile ? "animate" : undefined}
          custom={currentSlide}
          initial={false}
        >
          {serviceCategories.map((category, index) => {
            const isExpanded = expandedCardId === category.id;

            return (
              <motion.div
                key={category.id}
                className={`flex-shrink-0 p-4 ${isMobile ? 'absolute inset-0' : ''}`}
                style={getCardStyle(index)}
                variants={isMobile ? mobileCardVariants : undefined}
                custom={dragDelta > 0 ? -1 : 1}
                layout={!isMobile}
              >
                <motion.div
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl 
                             transition-all duration-300 overflow-hidden
                             border border-gray-200/50`}
                  whileHover={{ y: -5 }}
                  layoutId={`card-${category.id}`}
                >
                  <div className="relative h-48 lg:h-64 overflow-hidden group font-garamond">
                    <motion.img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b 
                                  from-transparent via-black/20 to-black/80 
                                  opacity-80 group-hover:opacity-90 
                                  transition-opacity duration-300" />
                    <motion.div
                      className="absolute inset-x-6 bottom-6 font-garamond"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2
                                   tracking-tight font-garamond">
                        {category.title}
                      </h2>
                      <p className="text-white/90 text-sm lg:text-base line-clamp-2
                                  font-medium font-garamond">
                        {category.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="p-6 lg:p-8">
                    <p className="text-gray-600 mb-6 line-clamp-3 text-lg
                                leading-relaxed font-garamond">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(category.path)}
                        className="bg-gradient-to-r from-[#dda15e] to-[#d19931]
                                 text-black px-6 py-3 rounded-xl 
                                 font-medium transition-all duration-300 
                                 shadow-md hover:shadow-lg
                                 hover:from-[#dda15e] hover:to-[#d19931]
                                 focus:ring-2 focus:ring-orange-300 focus:ring-offset-2
                                 group"
                      >
                        <span className="flex items-center gap-2">
                          Learn More
                          <ExternalLink className="w-4 h-4 transform 
                                                 group-hover:translate-x-0.5 
                                                 transition-transform" />
                        </span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setExpandedCardId(isExpanded ? null : category.id)}
                        className="p-3 hover:bg-gray-100 rounded-full 
                                 transition-all duration-300 hover:shadow-md
                                 focus:ring-2 focus:ring-gray-200"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-6 h-6 text-[#d19931]" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-[#d19931]" />
                        )}
                      </motion.button>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 space-y-3 max-h-[calc(100vh-600px)] overflow-y-auto custom-scrollbar"
                        >
                          {category.services.map((service, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="bg-gray-50/80 p-4 rounded-xl text-gray-700 
                                       hover:bg-blue-50/80 transition-all duration-300 
                                       shadow-sm hover:shadow-md
                                       border border-gray-100/50 
                                       hover:-translate-x-1
                                       group cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#d19931]
                                              group-hover:scale-150 transition-transform" />
                                <p className="text-gray-700 group-hover:text-black
                                            transition-colors duration-300">{service}</p>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modified Pagination - Hidden on Mobile */}
      <div className="hidden sm:flex justify-center mt-8 gap-3">
        {Array.from({ length: maxSlides + 1 }).map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300
                     ${currentSlide === index
                ? 'bg-gradient-to-r from-[#d19931] to-[#a56f0a] w-8 h-3 shadow-md'
                : 'bg-gray-300 w-3 h-3 hover:bg-blue-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.5) transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(59, 130, 246, 0.5);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </div>
  );
};

// Utility function for debouncing
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default ServiceMenu;