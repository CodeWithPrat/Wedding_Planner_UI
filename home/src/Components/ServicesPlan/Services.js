// Services.js
import React, { useState } from 'react';
import { 
  Camera, Utensils, Sparkles, Music, Car, Building, 
  Hotel, Gift, Home, Scissors, Shirt, Book, Cake, 
  MapPin, ChevronRight, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

import pic13 from "../../assets/imgs/ServicesImgs/pic13.jpeg"

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Capture your precious moments with our expert photographers and videographers. We offer comprehensive coverage including pre-wedding shoots, drone footage, same-day edits, and cinematic wedding films.",
    },
    {
      icon: Utensils,
      title: "Catering",
      description: "Delight your guests with exquisite culinary experiences. Our catering services include international cuisines, live cooking stations, themed food presentations, and customized menus to match your preferences.",
    },
    {
      icon: Sparkles,
      title: "Decorations",
      description: "Transform your venue into a magical setting with our innovative décor solutions. From traditional to contemporary themes, we create stunning atmospheres with premium flowers, lighting, and artistic installations.",
    },
    {
      icon: Music,
      title: "DJ, Lighting & Music",
      description: "Set the perfect mood with our entertainment packages. Professional DJs, sophisticated sound systems, dynamic lighting effects, and live music options to keep your celebration lively and memorable.",
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Travel in style with our luxury transportation services. From vintage cars for the couple to comfortable shuttles for guests, we ensure smooth logistics throughout your wedding events.",
    },
    {
      icon: Building,
      title: "Venues",
      description: "Choose from our carefully curated selection of stunning venues. Whether you dream of a beach wedding, palace celebration, or garden ceremony, we have the perfect location for your special day.",
    },
    {
      icon: Hotel,
      title: "Stay",
      description: "Luxurious accommodation arrangements for you and your guests. We partner with premium hotels and resorts to provide comfortable and elegant stays with special wedding packages.",
    },
    {
      icon: Gift,
      title: "Gifts & Invitations",
      description: "Make a lasting impression with unique invitations and thoughtful gifts. Our designers create custom wedding stationery and curate memorable wedding favors for your guests.",
    },
    {
      icon: Home,
      title: "Rooms",
      description: "Elegant preparation spaces and comfortable rooms for the wedding party. We ensure every detail is perfect for your getting-ready moments and post-celebration relaxation.",
    },
    {
      icon: Scissors,
      title: "Stylist",
      description: "Look your absolute best with our professional styling services. Our team of expert hair and makeup artists will create the perfect look for your special day.",
    },
    {
      icon: Shirt,
      title: "Designer Clothes",
      description: "Dress to impress with our designer clothing services. We connect you with top fashion designers for custom wedding attire that matches your style and theme.",
    },
    {
      icon: Book,
      title: "Ritual Needs",
      description: "Traditional ceremony requirements handled with care. We arrange all necessary items and setup for your cultural and religious ceremonies.",
    },
    {
      icon: Cake,
      title: "Cake",
      description: "Custom-designed wedding cakes that taste as amazing as they look. Our master bakers create stunning centerpieces that reflect your wedding theme and personal style.",
    }
  ];

  const destinationPackage = {
    title: "Destination Wedding Package",
    priceRange: "₹15 Lakhs - ₹2 Crores",
    packages: [
      {
        name: "Gold Package",
        price: "₹15 Lakhs",
        destination: "Goa or Coorg",
        guests: "50-100 guests",
        features: ["Basic décor", "Transportation", "Catering", "Photography"]
      },
      {
        name: "Platinum Package",
        price: "₹50 Lakhs",
        destination: "Udaipur Palace or International Beach",
        guests: "150-200 guests",
        features: ["Luxury décor", "Gourmet catering", "Live music", "Full event coverage"]
      },
      {
        name: "Diamond Package",
        price: "₹2 Crores",
        destination: "Maldives Resort or European Castle",
        guests: "200-300 guests",
        features: ["Private resort booking", "Celebrity performances", "Luxury transportation", "Complete coordination"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faedcd]">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-[#ffc2d1]">
        <div className="absolute inset-0">
          <img
            src={pic13}
            alt="Wedding Services"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
              Comprehensive wedding planning services to make your special day perfect
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl 
                       transition-all duration-300 transform hover:-translate-y-1 cursor-pointer
                       ${activeService === index ? 'ring-2 ring-[#ffc2d1]' : ''}`}
              onClick={() => setActiveService(index === activeService ? null : index)}
            >
              <service.icon className="w-12 h-12 text-[#ffc2d1] mb-6" />
              <h3 className="text-xl font-serif text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Wedding Package Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Destination Wedding Package
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4">
              Experience the wedding of your dreams at breathtaking locations worldwide
            </p>
            <p className="text-xl text-[#ffc2d1] font-semibold">
              Price Range: {destinationPackage.priceRange}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinationPackage.packages.map((pkg, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-b from-[#fffcf2] to-[#faedcd] 
                         shadow-lg hover:shadow-xl transition-all duration-300 transform 
                         hover:-translate-y-1"
              >
                <Globe className="w-12 h-12 text-[#ffc2d1] mb-6" />
                <h3 className="text-xl font-serif text-gray-800 mb-2">{pkg.name}</h3>
                <p className="text-[#ffc2d1] font-semibold mb-4">{pkg.price}</p>
                <p className="text-gray-600 mb-2">{pkg.destination}</p>
                <p className="text-gray-600 mb-4">{pkg.guests}</p>
                <ul className="text-gray-600">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <ChevronRight className="w-4 h-4 text-[#ffc2d1] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-[#ffc2d1] hover:bg-[#ffcfd2] 
                       text-gray-800 rounded-full font-medium shadow-lg hover:shadow-xl 
                       transition-all duration-300 transform hover:-translate-y-1"
            >
              Plan Your Destination Wedding
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;