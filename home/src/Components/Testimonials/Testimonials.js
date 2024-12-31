import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

import pic15 from "../../assets/imgs/TestimonialImgs/pic15.jpg"
import pic16 from "../../assets/imgs/TestimonialImgs/pic16.jpg"
import pic17 from "../../assets/imgs/TestimonialImgs/pic17.jpg"
import pic18 from "../../assets/imgs/TestimonialImgs/pic18.jpg"
import pic19 from "../../assets/imgs/TestimonialImgs/pic19.jpg"
import pic20 from "../../assets/imgs/TestimonialImgs/pic20.jpg"
import pic21 from "../../assets/imgs/TestimonialImgs/pic21.jpg"

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const handleNext = React.useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, testimonials.length]);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-50 via-background-100 to-primary-light">
      {/* Enhanced Hero Section */}
      <div className="relative h-[45vh] lg:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pic15}
            alt="Happy Couples"
            className="w-full h-full object-cover transform scale-102 animate-float"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center animate-fade-in-down">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 text-shadow-lg">
              Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto px-4 font-light animate-fade-in">
              Real stories from our cherished clients
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Testimonials Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative">
          <div className="overflow-hidden rounded-4xl shadow-soft-2xl">
            <div className="relative flex items-center min-h-[600px] lg:min-h-[500px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute w-full transition-all duration-400 ease-bounce-in ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : index < activeIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative group">
                      <div className="overflow-hidden rounded-3xl shadow-soft-xl">
                        <img
                          src={testimonial.image}
                          alt={testimonial.names || testimonial.name}
                          className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-110 transition-all duration-500"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                        <span className="inline-block px-6 py-2 bg-accent1 text-white rounded-full text-sm font-medium shadow-lg animate-bounce-subtle">
                          {testimonial.eventType}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-soft-xl transform hover:scale-102 transition-transform duration-300">
                      <div className="flex mb-6 animate-pulse-subtle">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 text-lg lg:text-xl italic mb-8 font-light leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="font-serif">
                        <p className="text-2xl text-gray-800 mb-2">
                          {testimonial.names || testimonial.name}
                          {testimonial.surname && ` ${testimonial.surname}`}
                        </p>
                        {testimonial.role && (
                          <p className="text-accent1-dark text-lg">{testimonial.role}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 
                     bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-soft-xl hover:bg-accent1 
                     transition-all duration-300 transform hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:text-white transition-colors" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 
                     bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-soft-xl hover:bg-accent1 
                     transition-all duration-300 transform hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      {/* Enhanced Share Experience CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-background-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <Heart className="w-20 h-20 text-accent1 mx-auto mb-8 animate-pulse-subtle" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 mb-8 animate-fade-in">
            Share Your Experience
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            We love hearing from our clients! If you have worked with us and would like to share
            your thoughts, please contact us or leave a review on our social media pages.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 bg-accent1 hover:bg-accent1-dark 
                     text-white rounded-full font-medium shadow-soft-xl hover:shadow-soft-2xl 
                     transition-all duration-300 transform hover:-translate-y-1 text-lg"
          >
            Share Your Story
            <ChevronRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;