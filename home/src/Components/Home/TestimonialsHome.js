import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

import pic16 from "../../assets/imgs/TestimonialImgs/pic16.jpg"
import pic17 from "../../assets/imgs/TestimonialImgs/pic17.jpg"
import pic18 from "../../assets/imgs/TestimonialImgs/pic18.jpg"
import pic19 from "../../assets/imgs/TestimonialImgs/pic19.jpg"
import pic20 from "../../assets/imgs/TestimonialImgs/pic20.jpg"
import pic21 from "../../assets/imgs/TestimonialImgs/pic21.jpg"

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Raghavendra Rao",
      role: "Anandam Retirement Community",
      image: pic18,
      quote: "Working with Cult Event was an absolute pleasure! They organized our grand opening ceremony flawlessly. The attention to detail, beautiful décor, and seamless coordination exceeded our expectations. Highly recommend their services!",
      rating: 5,
      eventType: "Corporate Event"
    },
    {
      id: 2,
      names: "Priya & Arjun",
      surname: "Sharma",
      image: pic16,
      quote: "Our wedding was a dream come true, all thanks to Cult Event! From the stunning venue to the exceptional catering, every moment was perfect. Their team made sure everything went smoothly, allowing us to enjoy our special day without any worries!",
      rating: 5,
      eventType: "Wedding Ceremony"
    },
    {
      id: 3,
      names: "Anita & Ravi",
      surname: "Kumar",
      image: pic17,
      quote: "We chose Cult Event for our destination wedding, and it was the best decision ever! They took care of everything from travel arrangements to decorations. Our guests are still raving about the beautiful setup and delicious food!",
      rating: 5,
      eventType: "Destination Wedding"
    },
    {
      id: 4,
      name: "Deepak Jain",
      role: "Corporate Client",
      image: pic19,
      quote: "Our annual corporate event was a huge success, thanks to Cult Event! They managed everything professionally, from the venue selection to the entertainment. Their creativity and organization made our event truly memorable!",
      rating: 5,
      eventType: "Corporate Event"
    },
    {
      id: 5,
      names: "Meena & Rajesh",
      surname: "Singh",
      image: pic20,
      quote: "Thank you, Cult Event, for making our anniversary celebration so special! The décor was stunning, and the team was incredibly attentive. We couldn't have asked for a better experience!",
      rating: 5,
      eventType: "Anniversary Celebration"
    },
    {
      id: 6,
      names: "Nisha & Vinay",
      surname: "Gupta",
      image: pic21,
      quote: "Our engagement was an amazing experience, all thanks to the team at Cult Event! They brought our vision to life with beautiful decorations and a fantastic atmosphere. We received so many compliments from our guests!",
      rating: 5,
      eventType: "Engagement Ceremony"
    }
  ];

  // Constants for desktop view
  const CARD_WIDTH = 400; // Width of each card
  const CARD_GAP = 24; // Gap between cards
  const ANIMATION_SPEED = 50; // Lower number = faster animation

  // Mobile view handlers
  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isAnimating) {
      if (touchStart - touchEnd > 75) {
        handleNext();
      }
      if (touchStart - touchEnd < -75) {
        handlePrev();
      }
    }
  };

  // Desktop animation effect
  useEffect(() => {
    if (window.innerWidth >= 768) {
      const animate = () => {
        setPosition((prev) => {
          const newPosition = prev - 1;
          const maxOffset = -(testimonials.length * (CARD_WIDTH + CARD_GAP));
          return newPosition <= maxOffset ? 0 : newPosition;
        });
      };

      const interval = setInterval(animate, ANIMATION_SPEED);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  // Mobile view card style handler
  const getCardStyle = (index) => {
    const isActive = index === activeIndex;
    const isPrev = (index === activeIndex - 1) || (activeIndex === 0 && index === testimonials.length - 1);
    const isNext = (index === activeIndex + 1) || (activeIndex === testimonials.length - 1 && index === 0);

    let classes = 'absolute transition-all duration-500 ease-out';

    if (window.innerWidth < 768) {
      if (isActive) {
        return `${classes} left-1/2 -translate-x-1/2 scale-100 opacity-100 z-30`;
      }
      if (isPrev) {
        return `${classes} left-0 -translate-x-[10%] scale-90 opacity-70 z-20`;
      }
      if (isNext) {
        return `${classes} right-0 translate-x-[10%] scale-90 opacity-70 z-20`;
      }
      return `${classes} left-1/2 -translate-x-1/2 scale-75 opacity-0 z-10`;
    }

    return classes;
  };

  return (
    <div className="relative w-full bg-[#f4f3ee] py-2 md:py-2 overflow-hidden font-garamond">
      <div className="max-w-full mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-[#dda15e] font-bold">
          Client Testimonials
        </h2>

        {/* Mobile View */}
        <div
          className="relative h-[450px] md:hidden mt-[-45px] mb-24"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`w-[100%] ${getCardStyle(index)}`}
            >
              <div className="bg-gradient-to-br from-[#f8f9fa] to-[#f4f3ee] rounded-3xl shadow-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-3xl border border-[#dda15e]/10">
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto relative">
                    <div className="absolute inset-0 bg-[#dda15e] rounded-full opacity-10"></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name || testimonial.names}
                      className="w-full h-full object-cover rounded-full ring-4 ring-[#dda15e]/20"
                    />
                    <Quote className="absolute -bottom-2 -right-2 w-8 h-8 text-[#dda15e] bg-[#f8f9fa] rounded-full p-1" />
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#dda15e] text-[#dda15e]" />
                    ))}
                  </div>

                  <p className="text-lg mb-6 italic text-gray-700 leading-relaxed">
                    {testimonial.quote}
                  </p>

                  <div className="pt-4 mt-4 border-t border-[#dda15e]/10">
                    <h3 className="text-xl font-semibold text-[#dda15e]">
                      {testimonial.name || `${testimonial.names} ${testimonial.surname}`}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {testimonial.role || testimonial.eventType}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block relative h-[400px] overflow-hidden mt-[-45px]">
          <div 
            className="flex transition-transform duration-300 ease-linear"
            style={{
              transform: `translateX(${position}px)`,
              gap: `${CARD_GAP}px`,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0"
                style={{ width: `${CARD_WIDTH}px` }}
              >
                <div className="bg-gradient-to-br from-[#f8f9fa] to-[#f4f3ee] rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl border border-[#dda15e]/10">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto relative">
                      <div className="absolute inset-0 bg-[#dda15e] rounded-full opacity-10"></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name || testimonial.names}
                        className="w-full h-full object-cover rounded-full ring-4 ring-[#dda15e]/20"
                      />
                      <Quote className="absolute -bottom-2 -right-2 w-6 h-6 text-[#dda15e] bg-[#f8f9fa] rounded-full p-1" />
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#dda15e] text-[#dda15e]" />
                      ))}
                    </div>

                    <p className="text-base mb-4 italic text-gray-700 leading-relaxed line-clamp-4">
                      {testimonial.quote}
                    </p>

                    <div className="pt-3 mt-3 border-t border-[#dda15e]/10">
                      <h3 className="text-lg font-semibold text-[#dda15e]">
                        {testimonial.name || `${testimonial.names} ${testimonial.surname}`}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {testimonial.role || testimonial.eventType}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons (mobile only) */}
        <div className="md:hidden absolute top-1/2 -translate-y-1/2 w-full px-4">
          <button
            onClick={handlePrev}
            className="absolute left-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-[#dda15e] hover:text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#dda15e] focus:ring-opacity-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-[#dda15e] hover:text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#dda15e] focus:ring-opacity-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;