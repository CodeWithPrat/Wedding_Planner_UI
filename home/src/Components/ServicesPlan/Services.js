import React, { useState, useEffect } from 'react';
import { 
  Camera, Utensils, Sparkles, Music, Car, Building, 
  Hotel, Gift, Home, Scissors, Shirt, Book, Cake, 
  MapPin, ChevronRight, Globe, ArrowRight, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

import pic13 from "../../assets/imgs/ServicesImgs/pic13.jpeg"


const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [animatedItems, setAnimatedItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimatedItems(prev => [...prev, entry.target.dataset.index]);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-index]').forEach((elem) => {
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

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
        features: ["Basic décor", "Transportation", "Catering", "Photography"],
        color: "accent1"
      },
      {
        name: "Platinum Package",
        price: "₹50 Lakhs",
        destination: "Udaipur Palace or International Beach",
        guests: "150-200 guests",
        features: ["Luxury décor", "Gourmet catering", "Live music", "Full event coverage"],
        color: "accent2"
      },
      {
        name: "Diamond Package",
        price: "₹2 Crores",
        destination: "Maldives Resort or European Castle",
        guests: "200-300 guests",
        features: ["Private resort booking", "Celebrity performances", "Luxury transportation", "Complete coordination"],
        color: "secondary"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background-100 to-primary-light">
      <div className="relative h-[50vh] overflow-hidden">
        {/* Animated Background Layer */}
        <div 
          className={`absolute inset-0 transform scale-110 transition-all duration-3000 ease-out ${
            isLoaded ? 'scale-105 blur-0' : 'scale-125 blur-sm'
          }`}
        >
          <img
            src={pic13}
            alt="Wedding Services"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-3000"
          />
          {/* Multiple Gradient Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-radial from-black/60 via-black/40 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
          
          {/* Animated Particles Effect */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${6 + i * 2}s`
                }}
              >
                <Sparkles className="w-4 h-4 text-accent2-light" />
              </div>
            ))}
          </div>
        </div>

        {/* Content Container with Enhanced Animations */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 space-y-6">
            {/* Animated Title with Decorative Elements */}
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent1-light/20 via-accent2-light/20 to-accent1-light/20 blur-xl animate-pulse-subtle" />
              <h1 
                className={`text-5xl md:text-7xl font-serif text-white mb-6 text-shadow-lg relative
                           transition-all duration-1000 transform
                           ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                Our Services
              </h1>
            </div>

            {/* Animated Subtitle */}
            <p 
              className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light
                         transition-all duration-1000 delay-300 transform
                         ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              Crafting Extraordinary Wedding Experiences with Attention to Every Detail
            </p>

            {/* Enhanced Scroll Indicator */}
            <div 
              className={`mt-12 transition-all duration-1000 delay-600 transform
                         ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="relative inline-block group cursor-pointer">
                <span className="absolute inset-0 bg-white/5 rounded-full blur animate-pulse-subtle" />
                <span className="relative inline-block p-3 rounded-full bg-white/10 backdrop-blur-md 
                               group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                  <ArrowRight className="w-6 h-6 text-white animate-bounce-subtle" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent1-light/20 via-accent2-light/20 to-accent1-light/20 
                              rounded-full blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              </div>
            </div>

            {/* Decorative Side Elements */}
            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <div className="flex justify-between opacity-30">
                <div className="w-32 h-32 border border-white/20 rounded-full blur-sm animate-spin-slow" />
                <div className="w-32 h-32 border border-white/20 rounded-full blur-sm animate-spin-slow animation-delay-2000" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={`service-${index}`}
              className={`group p-8 rounded-2xl bg-white/90 backdrop-blur-md shadow-soft-xl 
                       hover:shadow-soft-2xl transition-all duration-400 cursor-pointer
                       transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-primary-light
                       ${activeService === index ? 'ring-2 ring-accent1' : ''}
                       ${animatedItems.includes(`service-${index}`) ? 'animate-fade-in-up' : 'opacity-0'}`}
              onClick={() => setActiveService(index === activeService ? null : index)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="w-16 h-16 text-accent1 group-hover:text-accent2 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif text-gray-800 mb-4 group-hover:text-accent1-dark transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Destination Wedding Package Section */}
      <section className="py-20 bg-gradient-to-br from-white via-background-50 to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-index="destination-title">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8 relative inline-block">
              Destination Wedding Package
              <span className="absolute -bottom-4 left-0 right-0 h-1 bg-accent2 transform scale-x-50 transition-transform duration-300 hover:scale-x-100"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
              Experience the wedding of your dreams at breathtaking locations worldwide
            </p>
            <p className="text-2xl text-accent1-dark font-semibold animate-pulse-subtle">
              Price Range: {destinationPackage.priceRange}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinationPackage.packages.map((pkg, index) => (
              <div
                key={index}
                data-index={`package-${index}`}
                className={`p-8 rounded-2xl bg-white/80 backdrop-blur-md 
                         shadow-soft-xl hover:shadow-soft-2xl transition-all duration-400 
                         transform hover:-translate-y-2 group
                         ${animatedItems.includes(`package-${index}`) ? 'animate-slide-in-up' : 'opacity-0'}`}
              >
                <div className="relative overflow-hidden">
                  <Globe className="w-16 h-16 text-accent2 mb-6 transform transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-2xl font-serif text-gray-800 mb-3">{pkg.name}</h3>
                  <p className="text-2xl text-accent1-dark font-semibold mb-4">{pkg.price}</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 text-accent2-dark mr-2" />
                      <p>{pkg.destination}</p>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 text-accent2-dark mr-2" />
                      <p>{pkg.guests}</p>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center group">
                          <ChevronRight className="w-4 h-4 text-accent1 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                          <span className="group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16" data-index="cta">
            <Link
              to="/contact"
              className="group inline-flex items-center px-10 py-4 bg-accent1 hover:bg-accent1-dark 
                       text-white rounded-full font-medium shadow-lg hover:shadow-xl 
                       transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Plan Your Destination Wedding
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent1-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;