import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, ArrowLeft, ArrowRight, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceMenu = ({ serviceCategories }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [autoplay, setAutoplay] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Enhanced responsive sizing
  const getItemsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      if (window.innerWidth < 1536) return 3;
      return 4;
    }
    return 3;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());

  // Scroll handler for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced resize handler with debounce
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setItemsToShow(getItemsToShow());
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Enhanced autoplay with pause on user interaction
  useEffect(() => {
    let interval;
    if (autoplay && !hoveredCard) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [currentSlide, autoplay, hoveredCard]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => 
      prev === serviceCategories.length - itemsToShow ? 0 : prev + 1
    );
  }, [serviceCategories.length, itemsToShow]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => 
      prev === 0 ? serviceCategories.length - itemsToShow : prev - 1
    );
  }, [serviceCategories.length, itemsToShow]);

  const toggleDropdown = (id) => {
    setActiveCategory(activeCategory === id ? null : id);
    setAutoplay(false);
  };

  // Card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, y: -10 }
  };

  // Service item animations
  const serviceItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-24 min-w-full bg-gradient-to-b from-[#f4f3ee] via-[#f4f3ee] to-[#dda15e] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" 
             style={{ transform: `translateY(${scrollY * 0.2}px)` }} />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#dda15e] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 
                   bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm
                   transition-all duration-300 hover:bg-blue-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-[#dda15e]" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 
                   bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm
                   transition-all duration-300 hover:bg-blue-50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-[#dda15e]" />
        </motion.button>

        {/* Carousel Container */}
        <div className="overflow-hidden rounded-3xl">
          <motion.div 
            className="flex"
            initial={false}
            animate={{ x: `${-currentSlide * (100 / itemsToShow)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {serviceCategories.map((category) => (
              <motion.div
                key={category.id}
                className="flex-shrink-0 p-4"
                style={{ width: `${100 / itemsToShow}%` }}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <div
                  className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl
                           border border-gray-100 h-full transform-gpu"
                  onMouseEnter={() => {
                    setHoveredCard(category.id);
                    setAutoplay(false);
                  }}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    setAutoplay(true);
                  }}
                >
                  <div className="relative h-56 lg:h-64 overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                    <motion.h2 
                      className="absolute bottom-6 left-6 text-3xl font-bold text-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {category.title}
                    </motion.h2>
                  </div>

                  <div className="p-6">
                    <motion.div
                      className="cursor-pointer"
                      onClick={() => toggleDropdown(category.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-lg text-gray-700 font-medium line-clamp-2">
                          {category.description}
                        </p>
                        <motion.div
                          animate={{ rotate: activeCategory === category.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {activeCategory === category.id ? (
                            <Minus className="w-6 h-6 text-[#dda15e]" />
                          ) : (
                            <Plus className="w-6 h-6 text-[#dda15e]" />
                          )}
                        </motion.div>
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {activeCategory === category.id && (
                        <motion.ul
                          className="space-y-3 mt-4"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {category.services.map((service, index) => (
                            <motion.li
                              key={index}
                              variants={serviceItemVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              transition={{ delay: index * 0.1 }}
                              className="bg-blue-50/50 backdrop-blur-sm rounded-xl px-6 py-4 
                                       text-gray-800 font-medium shadow-sm hover:shadow-md
                                       transform-gpu transition-all duration-300
                                       hover:bg-blue-100/50 hover:translate-x-2"
                            >
                              {service}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: serviceCategories.length - itemsToShow + 1 }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300
                ${currentSlide === index ? 'bg-[#dda15e] w-10' : 'bg-blue-200 w-2'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceMenu;