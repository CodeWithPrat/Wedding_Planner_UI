import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gift, Sun, Brush, Music, HandHelping, Camera, Users, 
  Flower, PartyPopper, Gem, Eclipse, Star, Headphones, 
  Send, HandHeart, Calendar, Phone, HandPlatter
} from "lucide-react";
import { Link } from 'react-router-dom';

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


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };


  return (
    <div className="min-h-screen bg-[#f4f3ee]">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden rounded-b-3xl bg-gradient-to-r from-[#f8f9fa] to-[#f4f3ee] p-6 md:p-12 lg:p-16 border-b-4 border-[#dda15e]"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-garamond font-bold text-[#dda15e] mb-4">
            16-Day Grand
            <span className="block">Wedding Package</span>
          </h1>
          
          <div className="mt-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-white/90 px-6 py-3 rounded-xl shadow-lg border-2 border-[#dda15e]"
            >
              <span className="text-2xl font-bold font-garamond text-[#dda15e]">₹30L - 1Cr</span>
              <span className="text-gray-600">Starting Range</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {weddingDays.map((day, index) => (
          <motion.div
            key={day.day}
            variants={item}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl border-2 border-[#dda15e]/20"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#dda15e]/10 to-[#f8f9fa] p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#dda15e]/20 flex items-center justify-center">
                  <day.icon className="w-7 h-7 text-[#dda15e]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-garamond text-[#dda15e]">Day {day.day}</h3>
                  <p className="text-lg text-gray-700 font-garamond">{day.title}</p>
                </div>
              </div>
            </div>

            {/* Card Image */}
            <div className="relative overflow-hidden h-48">
              <img 
                src={day.image}
                alt={day.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              <p className="text-gray-700 font-garamond text-lg leading-relaxed">
                {day.desc}
              </p>
              
              <div className="space-y-3">
                {day.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#dda15e]" />
                    <span className="text-gray-700 font-garamond">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 py-16 bg-[#f8f9fa] rounded-3xl my-16 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#dda15e]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#dda15e]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-garamond font-bold text-center text-[#dda15e] mb-12"
        >
          Package Includes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {packageIncludes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#dda15e]/20 hover:border-[#dda15e]/40 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#dda15e]/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-[#dda15e]" />
              </div>
              
              <h3 className="text-xl font-garamond font-bold text-center text-gray-800 mb-2">
                {item.title}
              </h3>
              
              <p className="text-center text-gray-600 font-garamond leading-relaxed">
                {item.description}
              </p>

              <motion.div 
                className="w-12 h-1 bg-[#dda15e]/40 mx-auto mt-4 rounded-full"
                whileHover={{ width: "100%", transition: { duration: 0.3 } }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
          to="/contact"
          >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#dda15e] text-white font-garamond text-lg px-8 py-3 rounded-full shadow-lg hover:bg-[#dda15e]/90 transition-colors"
          >
            Book Your Package
          </motion.button>
          </Link>
          

        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#dda15e] text-white flex items-center justify-center shadow-lg hover:bg-[#dda15e]/90 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
};

export default SixteenDaysPlan;