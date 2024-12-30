import React from 'react';
import { Heart, Map, Package, Users, Palette, PhoneCall, Globe2, Lightbulb, PiggyBank, Sparkles } from 'lucide-react';
import pic8 from "../../assets/imgs/AboutImgs/pic8.jpg"
import pic9 from "../../assets/imgs/AboutImgs/pic9.jpg"
import pic10 from "../../assets/imgs/AboutImgs/pic10.jpg"
import pic11 from "../../assets/imgs/AboutImgs/pic11.jpg"
import pic12 from "../../assets/imgs/AboutImgs/pic12.jpg"

const About = () => {
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

  // Note: Replace these with actual image paths in your project
  const images = [
    pic8,
    pic9,
    pic10,
    pic11,
    pic12
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faedcd]">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images[0]}
            alt="Wedding celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
              Crafting Timeless Wedding Moments
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Where dreams meet expertise, and love stories become legendary celebrations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With years of expertise in crafting perfect weddings, we bring your dreams to life with creativity, precision, and passion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <feature.icon className="w-12 h-12 text-[#ffc2d1] mb-4" />
              <h3 className="text-xl font-serif text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group aspect-w-3 aspect-h-4"
            >
              <img
                src={image}
                alt={`Wedding moment ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-[#ffc2d1]/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6">
            Let's Make Your Dream Wedding a Reality!
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Every love story deserves a magical celebration. Contact us today to begin planning your perfect wedding.
          </p>
          <button className="bg-[#ffc2d1] hover:bg-[#ffcfd2] text-gray-800 px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;