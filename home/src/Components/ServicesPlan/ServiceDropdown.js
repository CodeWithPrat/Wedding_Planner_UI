import React, { useState } from "react";
import { ChevronDown, ChevronUp, } from "lucide-react";
import {
  Calendar, Utensils, Book, Scissors, Gift,
  Users, Sparkles, Camera, Music, Plane
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


import pic201 from "../../assets/imgs/ServicesImgs/ServCardImgs/pic201.jpg"
import pic202 from "../../assets/imgs/ServicesImgs/ServCardImgs/pic202.jpeg"
import pic203 from "../../assets/imgs/ServicesImgs/ServCardImgs/pic203.jpeg"
import pic204 from "../../assets/imgs/ServicesImgs/ServCardImgs/pic204.jpg"
import pic205 from "../../assets/imgs/ServicesImgs/ServCardImgs/pic205.jpg"
import pic206 from "../../assets/imgs/ServicesImgs/ServCardImgs/pic206.jpg"
import pic207 from "../../assets/imgs/ServicesImgs/ServCardImgs/pic207.jpeg"
import pic208 from "../../assets/imgs/ServicesImgs/ServCardImgs/pic208.jpg"
import pic209 from "../../assets/imgs/ServicesImgs/ServCardImgs/pic209.jpg"
import pic210 from "../../assets/imgs/ServicesImgs/ServCardImgs/pic210.jpg"


const ServiceMenuDropdown = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (id) => {
    setActiveCategory(activeCategory === id ? null : id);
  };

  const serviceCategories = [
    {
      id: 1,
      title: "Pre-Wedding Services",
      icon: Calendar,
      image: pic201,
      description: "Comprehensive planning and preparation for your special day",
      bgClass: "bg-accent1",
      services: [
        "Venue Selection & Booking",
        "Theme & Concept Development",
        "Budget Planning",
        "Vendor Coordination",
        "Legal & Documentation Support",
        "Pre-Wedding Photoshoot",
        "Custom Invitations Design"
      ],
      path: "/service-one"
    },
    {
      id: 2,
      title: "Travel & Accommodation",
      icon: Plane,
      image: pic202,
      description: "Complete logistics management for you and your guests",
      bgClass: "bg-accent2",
      services: [
        "Guest Travel Coordination",
        "Premium Accommodation Booking",
        "Transportation Services",
        "Welcome Kits Distribution",
        "Airport Transfers",
        "Local Tours Organization"
      ],
      path: "/service-two"
    },
    {
      id: 3,
      title: "Wedding Décor",
      icon: Sparkles,
      image: pic203,
      description: "Transform your venue into a magical setting",
      bgClass: "bg-secondary",
      services: [
        "Mandap Décor",
        "Venue Styling",
        "Stage Design",
        "Photo Booth Setup",
        "Lighting Design",
        "Floral Arrangements"
      ],
      path: "/service-three"
    },
    {
      id: 4,
      title: "Entertainment",
      icon: Music,
      image: pic204,
      description: "Create unforgettable moments with premium entertainment",
      bgClass: "bg-accent1",
      services: [
        "Live Music Bands",
        "Professional DJs",
        "Cultural Performances",
        "Choreography Services",
        "Fireworks Display",
        "Interactive Entertainment"
      ],
      path: "/service-four"
    },
    {
      id: 5,
      title: "Food & Beverage",
      icon: Utensils,
      image: pic205,
      description: "Exquisite culinary experiences for your celebration",
      bgClass: "bg-accent2",
      services: [
        "Multi-Cuisine Menu",
        "Live Cooking Stations",
        "Premium Bar Services",
        "Theme-Based Setups",
        "Custom Wedding Cakes",
        "Dietary Accommodations",
        "Signature Cocktails"
      ],
      path: "/service-five"
    },
    {
      id: 6,
      title: "Photography & Videography",
      icon: Camera,
      image: pic206,
      description: "Capture every precious moment of your celebration",
      bgClass: "bg-secondary",
      services: [
        "Professional Photography",
        "Cinematic Videography",
        "Drone Coverage",
        "Same-Day Edits",
        "Photo Albums",
        "Live Streaming",
        "360° Photography"
      ],
      path: "/service-six"
    },
    {
      id: 7,
      title: "Ritual Management",
      icon: Book,
      image: pic207,
      description: "Perfect coordination of all traditional ceremonies",
      bgClass: "bg-accent1",
      services: [
        "Priest Services",
        "Traditional Ceremonies",
        "Custom Mandap Design",
        "Religious Items",
        "Ritual Coordination",
        "Family Coordination",
        "Traditional Music"
      ],
      path: "/service-seven"
    },
    {
      id: 8,
      title: "Guest Management",
      icon: Users,
      image: pic208,
      description: "Comprehensive guest experience coordination",
      bgClass: "bg-accent2",
      services: [
        "Welcome Ceremony",
        "Guest Hospitality",
        "Concierge Services",
        "Local Experience Tours",
        "Guest Gift Management",
        "Special Assistance",
        "Emergency Support"
      ],
      path: "/service-eight"
    },
    {
      id: 9,
      title: "Styling & Grooming",
      icon: Scissors,
      image: pic209,
      description: "Complete beauty and styling solutions",
      bgClass: "bg-secondary",
      services: [
        "Bridal Makeup",
        "Hair Styling",
        "Grooming Services",
        "Dress Fitting",
        "Personal Styling",
        "Family Styling",
        "Pre-wedding Beauty"
      ],
      path: "/service-nine"
    },
    {
      id: 10,
      title: "Post-Wedding Services",
      icon: Gift,
      image: pic210,
      description: "Ensuring perfect endings and new beginnings",
      bgClass: "bg-accent1",
      services: [
        "Reception Planning",
        "Thank You Notes",
        "Gift Registry",
        "Honeymoon Planning",
        "Photo Album Design",
        "Video Editing",
        "Memory Preservation"
      ],
      path: "/service-ten"
    }
  ];

  return (
    <div className="min-h-full bg-gradient-to-b from-background-50 to-background-300 p-4 sm:p-8 lg:p-12 font-garamond">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className={`group relative rounded-4xl overflow-hidden bg-light-50
                transform transition-all duration-400 ease-bounce-in
                ${hoveredCard === category.id ? 'scale-102 shadow-soft-2xl' : 'shadow-lg'}
                ${activeCategory === category.id ? 'lg:row-span-2' : ''}
                animate-fade-in`}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden font-garamond">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform transition-transform duration-400 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-radial from-transparent to-background-300/40" />
              </div>

              <div
                className={`cursor-pointer p-6 transition-colors duration-300 font-garamond
                  ${activeCategory === category.id ? 'bg-primary-light/30' : ''}`}
                onClick={() => toggleDropdown(category.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-garamond font-bold text-black">
                    {category.title}
                  </h2>
                  {activeCategory === category.id ? (
                    <ChevronUp className="w-6 h-6 text-black animate-bounce-subtle" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-black animate-bounce-subtle" />
                  )}
                </div>
                <p className="text-sm text-black/60 line-clamp-2 font-garamond">
                  {category.description}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the card's onClick from triggering
                    console.log('Navigating to:', category.path); // Debug log
                    navigate(category.path);
                  }}
                        className="mt-4 bg-[#dda15e] text-white px-6 py-3 rounded-xl font-medium
                  hover:bg-[#ac7638] transition-all duration-300 shadow-md
                  hover:shadow-lg transform hover:-translate-y-0.5
                  active:translate-y-0 relative overflow-hidden group w-36 font-garamond"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-[#dda15e] transform scale-x-0 
                  group-hover:scale-x-100 transition-transform 
                  duration-300 origin-left" />
                </button>


              </div>

              {activeCategory === category.id && (
                <ul className="p-6 space-y-3 bg-light-50/80  animate-slide-in-up font-garamond">
                  {category.services.map((service, index) => (
                    <li
                      key={index}
                      className="transform transition-all duration-300
                        text-stone-900 font-medium font-garamond
                        bg-primary-light/50  rounded-xl
                        px-4 py-3 shadow-inner-lg hover:bg-primary-light
                        hover:shadow-soft-xl animate-fade-in-up"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}

              <div className={`absolute inset-0 pointer-events-none transition-opacity duration-400 font-garamond
                ${hoveredCard === category.id ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-conic from-accent2-light/20 via-transparent to-accent1-light/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceMenuDropdown;