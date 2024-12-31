import React from 'react';
import { Check, Heart, Crown, Diamond} from 'lucide-react';

const Packages = () => {
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
      color: "#ffcfd2",
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
      color: "#ffc2d1",
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
      color: "#fdc5f5",
      icon: Diamond
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faedcd] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Wedding Packages
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your special day. All packages can be customized to match your unique vision.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl 
                         transform hover:-translate-y-1 overflow-hidden
                         ${pkg.isPopular ? 'ring-4 ring-purple-500' : ''}`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 rounded-bl-lg font-medium">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                {/* Package Header */}
                <div className="flex items-center mb-4">
                  <pkg.icon className="w-8 h-8 mr-3" style={{ color: pkg.color }} />
                  <div>
                    <h3 className="text-2xl font-serif text-gray-800">{pkg.name}</h3>
                    <p className="text-gray-600">{pkg.subtitle}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-gray-400 line-through text-sm">₹{pkg.originalPrice}</span>
                    <span className="ml-2 bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm">
                      SAVE {pkg.savePercent}%
                    </span>
                  </div>
                  <div className="flex items-baseline mt-2">
                    <span className="text-4xl font-bold text-gray-800">₹{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/event</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300
                             ${pkg.isPopular 
                               ? 'bg-purple-500 text-white hover:bg-purple-600' 
                               : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  Choose {pkg.name} Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All packages include basic amenities and can be customized to your needs.
          </p>
          <button className="text-purple-500 hover:text-purple-600 font-medium transition-colors duration-300">
            Contact us for custom requirements →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;