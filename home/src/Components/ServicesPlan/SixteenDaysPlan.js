import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, Sun, Brush, Music, HandHelping, Camera, Users, 
  Flower, PartyPopper, Gem, Eclipse, Star, Headphones, 
  Send, HandHeart, Calendar, Phone, ChevronDown, HandPlatter
} from "lucide-react";

import pic401 from "../../assets/imgs/SixteenDaysImgs/pic401.png"
import pic402 from "../../assets/imgs/SixteenDaysImgs/pic402.jpg"
import pic403 from "../../assets/imgs/SixteenDaysImgs/pic403.jpg"
import pic404 from "../../assets/imgs/SixteenDaysImgs/pic404.jpg"
import pic405 from "../../assets/imgs/SixteenDaysImgs/pic405.jpg"
import pic406 from "../../assets/imgs/SixteenDaysImgs/pic406.jpg"
import pic407 from "../../assets/imgs/SixteenDaysImgs/pic407.jpg"
import pic408 from "../../assets/imgs/SixteenDaysImgs/pic408.jpg"
import pic409 from "../../assets/imgs/SixteenDaysImgs/pic409.jpg"
import pic410 from "../../assets/imgs/SixteenDaysImgs/pic410.jpg"
import pic411 from "../../assets/imgs/SixteenDaysImgs/pic411.jpg"
import pic412 from "../../assets/imgs/SixteenDaysImgs/pic412.jpg"
import pic413 from "../../assets/imgs/SixteenDaysImgs/pic413.jpeg"
import pic414 from "../../assets/imgs/SixteenDaysImgs/pic414.jpg"
import pic415 from "../../assets/imgs/SixteenDaysImgs/pic415.jpg"
import pic416 from "../../assets/imgs/SixteenDaysImgs/pic416.jpg"

const SixteenDaysPlan = () => {
  const [expandedDay, setExpandedDay] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-trigger');
      elements.forEach(elem => {
        const rect = elem.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          elem.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const weddingDays = [
    {
      day: 1,
      title: "Lagna Patrika (Engagement Ceremony)",
      items: [
        "Venue with traditional décor",
        "Simple stage for rituals",
        "Live music or traditional instrumental"
      ],
      icon: Gift,
      image: pic401,
      desc: "The engagement ceremony marks the official announcement of the wedding, featuring rituals, music, and a traditionally decorated venue."
    },
    {
      day: 2,
      title: "Haldi Ceremony (Bride & Groom)",
      items: [
        "Floral and turmeric-themed décor",
        "Outdoor or indoor setup",
        "Photo and video coverage"
      ],
      icon: Sun,
      image: pic402,
      desc: "A vibrant and colorful pre-wedding ritual where turmeric is applied to the bride and groom for blessings and radiance."
    },
    {
      day: 3,
      title: "Mehndi Night",
      items: [
        "Vibrant décor with fairy lights and floral installations",
        "Professional mehndi artists for guests",
        "Music or DJ setup with traditional songs"
      ],
      icon: Brush,
      image: pic403,
      desc: "An evening of celebration where intricate mehndi designs are applied, accompanied by music and dance."
    },
    {
      day: 4,
      title: "Sangeet",
      items: [
        "Grand stage and dance floor setup",
        "Choreographer for performances",
        "Sound, lighting, and visuals",
        "Celebrity performer or live band (optional)"
      ],
      icon: Music,
      image: pic404,
      desc: "A lively night of music, dance, and performances by family and friends to celebrate the upcoming wedding."
    },
    {
      day: 5,
      title: "Ganesh Pooja (Traditional Rituals)",
      items: [
        "Mandap décor for pooja",
        "Floral and spiritual arrangements"
      ],
      icon: HandHelping,
      image: pic405,
      desc: "A sacred ritual to invoke blessings from Lord Ganesh for the smooth conduct of the wedding ceremonies."
    },
    {
      day: 6,
      title: "Pre-Wedding Shoot",
      items: [
        "Destination or themed shoot with professional photographers",
        "Drone and cinematic shots included"
      ],
      icon: Camera,
      image: pic406,
      desc: "A creative and memorable photo shoot capturing the love story of the couple in stunning locations."
    },
    {
      day: 7,
      title: "Vara Pooja",
      items: [
        "Groom's special ritual setup",
        "Traditional seating arrangement for families"
      ],
      icon: Users,
      image: pic407,
      desc: "A ceremony to honor the groom and his family, signifying the union of two families."
    },
    {
      day: 8,
      title: "Bride’s Gauri Pooja",
      items: [
        "Exclusive floral arrangements for the bride’s rituals"
      ],
      icon: Flower,
      image: pic408,
      desc: "A ritual dedicated to Goddess Gauri, seeking her blessings for a prosperous married life."
    },
    {
      day: 9,
      title: "Reception Night",
      items: [
        "Luxury venue with stage setup and grand décor",
        "Lighting effects (LED walls, chandeliers)",
        "Multi-cuisine buffet with live counters",
        "Entertainment (live music, fireworks)"
      ],
      icon: PartyPopper,
      image: pic409,
      desc: "A grand celebration to introduce the newlyweds to friends and family, with food, entertainment, and festivities."
    },
    {
      day: 10,
      title: "Marriage Day",
      items: [
        "Lavish mandap and seating arrangement for guests (up to 2000+)",
        "Custom stage with elaborate floral and theme décor",
        "High-end sound system and ceremonial music",
        "Photography and videography coverage of the entire event",
        "Guest hospitality and logistics"
      ],
      icon: Gem,
      image: pic410,
      desc: "The most auspicious day when the couple takes their wedding vows in a beautifully decorated mandap."
    },
    {
      day: 11,
      title: "Post-Marriage Lunch",
      items: [
        "Traditional meal arrangement for close family and friends"
      ],
      icon: Eclipse,
      image: pic411,
      desc: "An intimate lunch gathering for the families and close friends to celebrate the union."
    },
    {
      day: 12,
      title: "Satyanarayana Pooja",
      items: [
        "Simple mandap décor",
        "Comfortable seating arrangements"
      ],
      icon: Star,
      image: pic412,
      desc: "A spiritual ritual conducted to seek blessings for peace and prosperity in the couple’s new life together."
    },
    {
      day: 13,
      title: "Family Cultural Night",
      items: [
        "Interactive games, cultural performances, and entertainment",
        "Open-mic style speeches for family and friends"
      ],
      icon: Headphones,
      image: pic413,
      desc: "A fun-filled night of cultural activities, games, and performances to engage all family members."
    },
    {
      day: 14,
      title: "Traditional Send-off Ceremony",
      items: [
        "Elegant setup for farewell rituals",
        "Floral décor and vehicle arrangement for bride and groom’s send-off"
      ],
      icon: Send,
      image: pic414,
      desc: "An emotional ceremony marking the bride and groom’s departure as a married couple."
    },
    {
      day: 15,
      title: "Reception (Groom's Side)",
      items: [
        "Venue and décor similar to Day 9 reception",
        "Coordination for catering and entertainment at groom’s location"
      ],
      icon: HandHeart,
      image: pic415,
      desc: "A celebratory reception hosted by the groom’s family to welcome the bride."
    },
    {
      day: 16,
      title: "Thank You Dinner",
      items: [
        "Intimate setup for the couple, family, and key guests",
        "Simple décor and gourmet dining experience"
      ],
      icon: HandPlatter,
      image: pic416,
      desc: "A warm and intimate dinner to express gratitude to those who made the wedding a success."
    }
  ];


  const packageIncludes = [
    {
      title: "Complete Coordination",
      description: "Full-scale event coordination for all 16 days",
      icon: Users
    },
    {
      title: "Dedicated Team",
      description: "Professional team for decorations, logistics, and management",
      icon: Star
    },
    {
      title: "Photography & Video",
      description: "Complete coverage of all events and ceremonies",
      icon: Camera
    },
    {
      title: "Guest Services",
      description: "Accommodation and transport arrangements",
      icon: Gift
    }
  ];

  const handleDayClick = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f3ee] to-[#f4f3ee]">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden rounded-b-3xl bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 p-6 md:p-12 lg:p-16"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold bg-gradient-to-r from-[#252422] to-[#252422] bg-clip-text text-transparent">
            16-Day Grand
            <span className="block">Wedding Package</span>
          </h1>
          
          <div className="mt-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg"
            >
              <span className="text-2xl font-bold text-purple-600">₹30L - 1Cr</span>
              <span className="text-gray-600">Starting Range</span>
            </motion.div>
            
            <div className="flex flex-wrap gap-4">
              {['Calendar', 'Phone', 'Camera'].map((icon, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg hover:bg-purple-50 transition-colors"
                >
                  {icon === 'Calendar' ? <Calendar className="text-purple-600" /> :
                   icon === 'Phone' ? <Phone className="text-purple-600" /> :
                   <Camera className="text-purple-600" />}
                  <span className="font-medium text-gray-800">
                    {icon === 'Calendar' ? 'Plan Wedding' :
                     icon === 'Phone' ? 'Contact Us' : 'View Gallery'}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/30 rounded-full filter blur-3xl" />
      </motion.div>

      {/* Timeline Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weddingDays.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              style={{
                height: expandedDay === day.day ? 'auto' : 'fit-content',
                alignSelf: 'start'
              }}
            >
              <div
                onClick={() => handleDayClick(day.day)}
                className="cursor-pointer p-6 bg-gradient-to-r from-purple-50 to-pink-50"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <day.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Day {day.day}</h3>
                      <p className="text-gray-600">{day.title}</p>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: expandedDay === day.day ? 180 : 0 }}>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {expandedDay === day.day && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white">
                      {/* Image */}
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={day.image} 
                          alt={day.title} 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-700 mb-4">{day.desc}</p>
                      
                      {/* Items */}
                      <ul className="space-y-3">
                        {day.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <span className="text-gray-700">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixteenDaysPlan;