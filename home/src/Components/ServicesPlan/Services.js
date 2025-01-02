import React, { useState, useEffect } from 'react';
import {
  ChevronDown, Calendar, Plane, Sparkles, Music, Utensils, Building,
  Hotel, Gift, Camera, Heart, Users, Scissors, Book, ChevronRight, ArrowDown,
  Star, Globe, MapPin, Notebook
} from 'lucide-react';
import ServiceMenuDropdown from './ServiceDropdown';
import { motion } from 'framer-motion';
// Import background image
import backgroundImage from "../../assets/imgs/ServicesImgs/pic13.jpeg";

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

const ServicesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimatedItems(prev => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-index]').forEach((elem) => {
      observer.observe(elem);
    });

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / max) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#dda15e] to-[#252422] z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-[#252422] via-[#252422]/90 to-[#dda15e]/80" />
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            >
              {i % 3 === 0 ? (
                <Heart className="text-[#dda15e]/20 w-6 h-6" />
              ) : i % 3 === 1 ? (
                <Star className="text-[#f4f3ee]/20 w-4 h-4" />
              ) : (
                <Sparkles className="text-[#dda15e]/20 w-5 h-5" />
              )}
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#f4f3ee] leading-tight">
                Crafting Your Perfect
                <span className="block text-[#dda15e]">Wedding Journey</span>
              </h1>
              <p className="text-lg md:text-xl text-[#f4f3ee]/90 max-w-2xl mx-auto font-light">
                Where every detail is thoughtfully curated to create unforgettable moments
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-[#dda15e] text-[#252422] rounded-full font-medium hover:bg-[#dda15e]/90 transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
              <button className="px-8 py-3 border border-[#f4f3ee] text-[#f4f3ee] rounded-full font-medium hover:bg-[#f4f3ee]/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>

          <div className="absolute bottom-10 animate-bounce">
            <ArrowDown className="w-6 h-6 text-[#f4f3ee]" />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-[#f4f3ee] py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#252422] mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[#dda15e] mx-auto" />
          </div>

          <ServiceMenuDropdown serviceCategories={serviceCategories} />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#252422] text-[#f4f3ee] py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Global Experience",
              description: "Expertise in multicultural weddings across various traditions"
            },
            {
              icon: Users,
              title: "Dedicated Team",
              description: "Professional planners committed to your vision"
            },
            {
              icon: Sparkles,
              title: "Attention to Detail",
              description: "Every element carefully crafted to perfection"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-gradient-to-br from-[#252422] to-[#252422]/80 border border-[#dda15e]/20 hover:border-[#dda15e] transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-[#dda15e] mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-[#f4f3ee]/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;