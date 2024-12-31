import React, { useState } from 'react';
import { Check, Heart, Crown, Diamond, Sparkles, ArrowRight, Star } from 'lucide-react';

const Packages = () => {
  const [hoveredPackage, setHoveredPackage] = useState(null);

  const packages = [
    {
      name: "Basic",
      subtitle: "Perfect for intimate celebrations",
      price: "7 Lakhs",
      originalPrice: "9 Lakhs",
      savePercent: "16",
      features: [
        "Up to 200 guests",
        "Basic stage with backdrop décor",
        "Simple floral arrangements",
        "On-the-day coordination",
        "One professional photographer",
        "Basic sound system",
        "Simple buffet menu (optional)",
        "Entry arch decoration",
        "Standard lighting setup",
        "Guest seating arrangement"
      ],
      color: "accent1",
      icon: Heart
    },
    {
      name: "Premium",
      subtitle: "Everything you need for your dream wedding",
      price: "15 Lakhs",
      originalPrice: "18 Lakhs",
      savePercent: "16",
      isPopular: true,
      features: [
        "Up to 500 guests",
        "Custom stage with theme design",
        "High-quality floral arrangements",
        "Dedicated event coordinator",
        "Professional photo & video team",
        "DJ services",
        "Customized menu with live counters",
        "Themed lighting setup",
        "Welcome drinks & desserts",
        "Full vendor coordination"
      ],
      color: "accent2",
      icon: Crown
    },
    {
      name: "Luxury",
      subtitle: "The ultimate wedding experience",
      price: "30 Lakhs",
      originalPrice: "36 Lakhs",
      savePercent: "16",
      features: [
        "1000+ guests capacity",
        "Designer stage & décor",
        "Premium floral installations",
        "Full event planning team",
        "Cinematic & drone coverage",
        "Live entertainment options",
        "Multi-cuisine premium menu",
        "Luxury car services",
        "Special effects & lighting",
        "Complete guest hospitality"
      ],
      color: "secondary",
      icon: Diamond
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-50 via-background-100 to-primary-light">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent1-light/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent2-light/20 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 animate-fade-in-down">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-accent2 animate-bounce-subtle" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-6 text-shadow">
            Wedding Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your special day. All packages can be customized to match your unique vision.
          </p>
        </div>

        {/* Enhanced Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl bg-white/90 backdrop-blur-sm transition-all duration-400 
                         hover:shadow-soft-2xl transform hover:-translate-y-2 overflow-hidden
                         ${pkg.isPopular ? 'ring-4 ring-accent2' : ''}
                         animate-slide-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredPackage(index)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-accent2 text-white px-6 py-2 rounded-bl-2xl font-medium animate-pulse-subtle">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8 lg:p-10">
                {/* Package Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-2xl bg-${pkg.color}/10`}>
                    <pkg.icon className={`w-8 h-8 text-${pkg.color}`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-serif text-gray-800">{pkg.name}</h3>
                    <p className="text-gray-600">{pkg.subtitle}</p>
                  </div>
                </div>

                {/* Enhanced Pricing */}
                <div className="mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 line-through text-lg">₹{pkg.originalPrice}</span>
                    <span className={`bg-${pkg.color}/10 text-${pkg.color} px-3 py-1 rounded-full text-sm font-medium`}>
                      SAVE {pkg.savePercent}%
                    </span>
                  </div>
                  <div className="flex items-baseline mt-3">
                    <span className="text-4xl font-bold text-gray-800">₹{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/event</span>
                  </div>
                </div>

                {/* Enhanced Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className={`flex items-start transition-all duration-300 
                                ${hoveredPackage === index ? 'transform translate-x-2' : ''}`}
                    >
                      <div className={`p-1 rounded-full bg-${pkg.color}/10 mr-3`}>
                        <Check className={`w-4 h-4 text-${pkg.color}`} />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Enhanced CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-full font-medium transition-all duration-300
                             flex items-center justify-center group
                             ${pkg.isPopular 
                               ? `bg-${pkg.color} text-white hover:bg-${pkg.color}-dark` 
                               : `bg-${pkg.color}/10 text-gray-800 hover:bg-${pkg.color}/20`}`}
                >
                  Choose {pkg.name} Package
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Information */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft-xl">
            <Star className="w-10 h-10 text-accent1 mx-auto mb-4 animate-float" />
            <p className="text-lg text-gray-600 mb-6">
              All packages include basic amenities and can be customized to your needs.
              Let us help you create the wedding of your dreams!
            </p>
            <button className="inline-flex items-center px-8 py-3 rounded-full bg-accent1/10 text-accent1 
                             hover:bg-accent1 hover:text-white font-medium transition-all duration-300
                             transform hover:-translate-y-1">
              Contact us for custom requirements
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;