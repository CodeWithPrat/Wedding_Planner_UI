import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index, isActive, total }) => {
  // Calculate opacity and scale based on position
  const getStyles = () => {
    if (!isActive) {
      return {
        opacity: 0.3,
        scale: 0.85,
        y: 20
      };
    }
    return {
      opacity: 1,
      scale: 1,
      y: 0
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={getStyles()}
      transition={{
        duration: 0.4,
        ease: "easeOut"
      }}
      className="relative w-full"
    >
      <div className="relative group cursor-pointer">
        {/* Card background layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-3xl 
                    transform rotate-2 group-hover:rotate-3 transition-transform duration-300" />
        <div className="absolute inset-0 bg-white/50 rounded-3xl 
                    transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
        
        {/* Main content */}
        <div className="relative p-6 md:p-8 bg-white/90 rounded-3xl shadow-xl hover:shadow-2xl 
                    transition-all duration-300 transform group-hover:-translate-y-2">
          {/* Profile section */}
          <div className="flex items-center gap-4 md:gap-6 mb-6">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-full transform rotate-6" />
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.names || testimonial.name} ${testimonial.surname || ''}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-accent/10 flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-semibold text-accent">
                      {(testimonial.names?.[0] || testimonial.name?.[0] || '?')}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
            
            <div className="flex-1">
              <motion.div 
                whileHover={{ x: 3 }}
                className="space-y-1"
              >
                <h4 className="text-lg md:text-xl font-garamond font-semibold text-slate-800">
                  {testimonial.names || testimonial.name}
                  {testimonial.surname && (
                    <span className="ml-1 text-slate-700">{testimonial.surname}</span>
                  )}
                </h4>
                {testimonial.role && (
                  <p className="text-sm text-gray-600 font-garamond">
                    {testimonial.role}
                  </p>
                )}
              </motion.div>
              <div className="flex items-center gap-2 md:gap-3 mt-2">
                <p className="text-sm text-gray-950 font-garamond italic">
                  {testimonial.eventType}
                </p>
                <div className="h-4 w-px bg-accent/30" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-3 h-3 md:w-4 md:h-4 ${
                        i < testimonial.rating 
                          ? 'fill-amber-500 text-amber-500' 
                          : 'fill-gray-200 text-gray-200'
                      }`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quote section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <Quote className="absolute -top-4 -left-2 w-8 h-8 md:w-10 md:h-10 text-pink-700 transform -rotate-12" />
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-zinc-700 font-garamond text-base md:text-lg leading-relaxed pl-6 md:pl-8 italic"
            >
              {testimonial.quote}
            </motion.p>
          </motion.div>

          {/* Decorative corners */}
          <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-tr-3xl">
            <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 bg-accent/5 transform rotate-45 translate-x-3 -translate-y-3" />
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-bl-3xl">
            <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 bg-accent/5 transform rotate-45 -translate-x-3 translate-y-3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsHome = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle navigation
  const navigate = (newDirection) => {
    if (isDragging) return;
    
    const newIndex = (activeIndex + newDirection + testimonials.length) % testimonials.length;
    setActiveIndex(newIndex);
    
    controls.start({
      x: [-newDirection * 50, 0],
      transition: { duration: 0.3 }
    });
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipeStart: () => setIsDragging(true),
    onSwipedLeft: () => {
      setIsDragging(false);
      navigate(1);
    },
    onSwipedRight: () => {
      setIsDragging(false);
      navigate(-1);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    delta: 50, // Minimum swipe distance
    swipeDuration: 500, // Maximum time for swipe
    trackTouch: true
  });

  // Get visible testimonials based on device
  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[activeIndex]];
    }
    
    let visibleCards = testimonials.slice(activeIndex, activeIndex + 3);
    if (visibleCards.length < 3) {
      visibleCards = [...visibleCards, ...testimonials.slice(0, 3 - visibleCards.length)];
    }
    return visibleCards;
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#f4f3ee] via-[#f4f3ee] to-[#f4f3ee]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent1/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent1/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 bg-accent/10 text-black rounded-full text-sm font-garamond mb-2"
          >
            Testimonials
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-garamond font-bold text-black mb-2">
            What Our Clients Say
          </h2>
          <div className="w-24 md:w-36 h-1 bg-accent mx-auto rounded-full mb-6 transform transition-all duration-300 hover:scale-x-110" />
          <p className="text-lg md:text-xl text-gray-700 font-garamond max-w-2xl mx-auto leading-relaxed">
            Real stories from our happy couples and clients who trusted us with their special moments
          </p>
        </motion.div>

        {/* Testimonials slider */}
        <div className="relative" {...swipeHandlers}>
          <motion.div animate={controls}>
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6 md:gap-8`}>
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard 
                  key={`${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  index={index}
                  isActive={isMobile ? true : index === Math.floor(getVisibleTestimonials().length / 2)}
                  total={testimonials.length}
                />
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8 md:mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              className="p-2 md:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === activeIndex ? 'bg-accent w-6' : 'bg-accent/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(1)}
              className="p-2 md:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </motion.button>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-10 mb-5"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-3 md:py-4 bg-pink-300 text-black rounded-full font-garamond 
                     text-base md:text-lg hover:bg-accent/90 transition-all duration-300 
                     shadow-lg hover:shadow-xl relative overflow-hidden group"
          >
            <Link
            to="/contact"
            >
            <span className="relative z-10">Share Your Experience With Cult Events</span> 
            <div className="absolute inset-0 bg-pink-200 transform scale-x-0 group-hover:scale-x-100 
                          transition-transform duration-500 origin-left opacity-10" />
            </Link>
            
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsHome;