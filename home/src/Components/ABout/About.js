import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Map, Package, Users, Palette, PhoneCall, Globe2, Lightbulb, PiggyBank, Sparkles } from 'lucide-react';
import pic8 from "../../assets/imgs/AboutImgs/pic8.jpg"
import pic9 from "../../assets/imgs/AboutImgs/pic9.jpg"
import pic10 from "../../assets/imgs/AboutImgs/pic10.jpg"
import pic11 from "../../assets/imgs/AboutImgs/pic11.jpg"
import pic12 from "../../assets/imgs/AboutImgs/pic12.jpg"
const About = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact'); // Replace '/your-destination' with your target route
  };

  const features = [
    {
      icon: Map,
      title: "Global Wedding Expertise",
      description: "From intimate beach ceremonies to grand palace celebrations, our team brings dreams to life across the globe. With expertise in both domestic and international destinations, we transform any location into your perfect wedding venue."
    },
    {
      icon: Package,
      title: "Personalized Wedding Journey",
      description: "Every love story is unique, and so should be your wedding. We craft bespoke packages that reflect your personality, cultural preferences, and dreams, ensuring every detail resonates with your vision."
    },
    {
      icon: Users,
      title: "Dedicated Event Team",
      description: "Our passionate coordinators orchestrate every element - from venue selection to the final toast. We handle the complexities while you savor every moment of your wedding journey."
    },
    {
      icon: Palette,
      title: "Artistic Design & Innovation",
      description: "Our creative artisans craft immersive experiences through stunning décor, cutting-edge technology, and thoughtful details. We create atmospheres that captivate and inspire."
    },
    {
      icon: Heart,
      title: "Cherished Partnerships",
      description: "Through our curated network of premium vendors and venues, we deliver excellence in every aspect - from gourmet cuisine to mesmerizing entertainment, ensuring unforgettable celebrations."
    }
  ];

  const images = [pic8, pic9, pic10, pic11, pic12];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((elem) => {
      elem.classList.add('opacity-0');
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-50 via-background to-primary-light">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 transform scale-105 transition-transform duration-1000 hover:scale-100">
          <img
            src={images[0]}
            alt="Wedding celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background-100/90" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl animate-fade-in-down">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 text-shadow-lg">
              Crafting Timeless Wedding Moments
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light animate-fade-in">
              Where dreams meet expertise, and love stories become legendary celebrations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Why Choose Us Section */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8 relative inline-block">
            Why Choose Us?
            <span className="absolute -bottom-4 left-0 right-0 h-1 bg-accent1 transform scale-x-50 transition-transform duration-300 hover:scale-x-100"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With years of expertise in crafting perfect weddings, we bring your dreams to life with creativity, precision, and passion.
          </p>
        </div>

        {/* Features Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll group bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-soft-xl hover:shadow-soft-2xl transition-all duration-400 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-primary-light"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-16 h-16 text-accent1 group-hover:text-accent1-dark transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif text-gray-800 mb-4 group-hover:text-accent2-dark transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Gallery with Advanced Hover Effects */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {images.map((image, index) => (
            <div
              key={index}
              className="animate-on-scroll relative overflow-hidden rounded-2xl shadow-soft-xl group aspect-w-3 aspect-h-4 cursor-pointer"
            >
              <img
                src={image}
                alt={`Wedding moment ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-lg font-serif">Happy Couple {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="relative overflow-hidden animate-on-scroll">
          <div className="absolute inset-0 bg-gradient-radial from-accent2-light via-accent1-light to-primary-light opacity-20"></div>
          <div className="relative text-center bg-white/80 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-soft-2xl transform hover:scale-102 transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-8 animate-float">
              Let's Make Your Dream Wedding a Reality!
            </h3>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Every love story deserves a magical celebration. Contact us today to begin planning your perfect wedding.
            </p>
            <button
      onClick={handleClick}
      className="group relative overflow-hidden bg-accent1 hover:bg-accent1-dark text-white px-10 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        Start Your Journey
        <Heart className="w-5 h-5 animate-pulse-subtle" />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent1-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;