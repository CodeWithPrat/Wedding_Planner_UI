import React from 'react';
import { motion } from 'framer-motion';
import { 
  Flower, 
  Heart, 
  Sun, 
  Brush, 
  Crown, 
  Music2, 
  Flame, 
  Stars, 
  School, 
  ScrollText, 
  Droplets, 
  FlowerIcon, 
  Users, 
  Gem, 
  Bird, 
  Home, 
  Star,
  Camera,
  Gift
} from 'lucide-react';
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

import tilakcer from "../../assets/imgs/SixteenDaysImgs/tilakCerImg.png"
import kalashimg from "../../assets/imgs/SixteenDaysImgs/kalashimg.jpg"
import navagraha from "../../assets/imgs/SixteenDaysImgs/Navagraha.png"
import mandap from "../../assets/imgs/SixteenDaysImgs/mandap.jpeg"
import kashi from "../../assets/imgs/SixteenDaysImgs/kashiyatra.jpg"
import snana from "../../assets/imgs/SixteenDaysImgs/snana.jpg"
import pravesha from "../../assets/imgs/SixteenDaysImgs/pravesha.jpg"

const SixteenDaysPlan = () => {

  const weddingDays = [
    {
      day: 1,
      title: "Ganesh Puja (Invoking Blessings)",
      items: [
        "Traditional setup for Ganesh puja",
        "Priest arrangements",
        "Sacred items for ritual"
      ],
      icon: Flower,
      image: pic405,
      desc: "The wedding begins with a Ganesh Puja, where Lord Ganesha, the remover of obstacles, is worshiped. This ensures the ceremony proceeds without any hindrances. Both families participate, seeking divine blessings for the union."
    },
    {
      day: 2,
      title: "Engagement Ceremony (Sakharpuda or Nischaytam)",
      items: [
        "Traditional décor setup",
        "Exchange of gifts and symbolic items",
        "Priest for horoscope consultation"
      ],
      icon: Heart,
      image: pic415,
      desc: "The bride and groom exchange symbolic items (like sugar or betel leaves) to formalize the alliance. Families exchange gifts, and the priest announces the wedding date after consulting horoscopes."
    },
    {
      day: 3,
      title: "Haldi Ceremony (Purification)",
      items: [
        "Turmeric paste preparation",
        "Separate setups for bride and groom",
        "Traditional decorations"
      ],
      icon: Sun,
      image: pic402,
      desc: "Turmeric paste is applied to the bride and groom separately at their respective homes. Turmeric is believed to purify the body and enhance beauty while symbolizing prosperity and fertility."
    },
    {
      day: 4,
      title: "Mehndi Ceremony (Henna Application)",
      items: [
        "Professional mehndi artists",
        "Music arrangement",
        "Seating and refreshments for guests"
      ],
      icon: Brush,
      image: pic403,
      desc: "The bride's hands and feet are adorned with intricate henna designs. This day is celebrated with music and dance by women in the family. Mehndi is considered auspicious and represents joy."
    },
    {
      day: 5,
      title: "Tilak Ceremony (Mark of Acceptance)",
      items: [
        "Traditional items for tilak",
        "Seating arrangement for families",
        "Gift exchange setup"
      ],
      icon: Crown,
      image: tilakcer,
      desc: "The groom's family visits the bride's house, where the bride's father applies a tilak (vermilion mark) on the groom's forehead, signifying his acceptance as a son-in-law."
    },
    {
      day: 6,
      title: "Sangeet (Musical Night)",
      items: [
        "Stage and sound system",
        "Dance floor setup",
        "Performance arrangements"
      ],
      icon: Music2,
      image: pic404,
      desc: "A joyous evening of music, dance, and performances is organized, where family members and friends celebrate together. This fosters bonding between both families."
    },
    {
      day: 7,
      title: "Kalash Sthapana (Establishing the Sacred Pot)",
      items: [
        "Decorated Kalash",
        "Mango leaves and coconut",
        "Sacred items for ritual"
      ],
      icon: Flame,
      image: kalashimg,
      desc: "A Kalash (holy pot) filled with water and decorated with mango leaves and a coconut is established in the bride's and groom's homes. This symbolizes the presence of divine energy."
    },
    {
      day: 8,
      title: "Navagraha Puja (Worship of the Nine Planets)",
      items: [
        "Puja items for nine planets",
        "Priest arrangements",
        "Traditional decorations"
      ],
      icon: Stars,
      image: navagraha,
      desc: "A puja is performed to appease the Navagrahas (nine celestial planets) and seek their blessings for the couple's harmonious future."
    },
    {
      day: 9,
      title: "Mandap Construction & Decoration",
      items: [
        "Mandap structure and materials",
        "Floral decorations",
        "Traditional rangoli"
      ],
      icon: School,
      image: mandap,
      desc: "The Mandap (wedding canopy) is built and decorated. It represents the sacred space where the couple will take their vows. Traditional items like banana leaves, flowers, and rangoli are used."
    },
    {
      day: 10,
      title: "Kashi Yatra (Symbolic Renunciation)",
      items: [
        "Traditional attire for groom",
        "Props for ceremonial act",
        "Setup for ritual"
      ],
      icon: ScrollText,
      image: kashi,
      desc: "The groom enacts a symbolic renunciation, declaring he will remain a celibate ascetic. The bride's father or brother persuades him to accept family life and marry the bride."
    },
    {
      day: 11,
      title: "Mangal Snan (Auspicious Bath)",
      items: [
        "Bath ritual items",
        "Traditional herbs and flowers",
        "Sacred water arrangement"
      ],
      icon: Droplets,
      image: snana,
      desc: "The bride and groom take an early morning ritual bath, signifying the cleansing of their bodies and spirits before the wedding ceremony."
    },
    {
      day: 12,
      title: "Gauri Puja (Worship of Goddess Parvati)",
      items: [
        "Puja items for Goddess Gauri",
        "Traditional decorations",
        "Seating for women participants"
      ],
      icon: FlowerIcon,
      image: pic407,
      desc: "The bride worships Goddess Gauri (a form of Parvati) for marital bliss and a long-lasting, harmonious relationship. This is often done with other women in the family."
    },
    {
      day: 13,
      title: "Baraat (Groom's Procession)",
      items: [
        "Music band arrangement",
        "Transportation decoration",
        "Lighting and effects"
      ],
      icon: Users,
      image: pic413,
      desc: "The groom, dressed in regal attire, arrives at the bride's home or wedding venue with a grand procession of friends and family, accompanied by music and dancing."
    },
    {
      day: 14,
      title: "Wedding Ceremony",
      items: [
        "Complete mandap setup",
        "Sacred fire arrangement",
        "Priest and ritual items",
        "Seating for families"
      ],
      icon: Gem,
      image: pic410,
      desc: "The wedding rituals, officiated by a priest, include Kanyadaan, Vivah Homa, and Saptapadi, where the couple takes seven steps around the fire, taking vows of unity, respect, and loyalty."
    },
    {
      day: 15,
      title: "Vidaai (Bride's Farewell)",
      items: [
        "Traditional farewell items",
        "Vehicle decoration",
        "Rice and flowers for ritual"
      ],
      icon: Bird,
      image: pic414,
      desc: "The bride bids an emotional farewell to her family as she departs to her husband's home. This symbolizes her transition into her new life."
    },
    {
      day: 16,
      title: "Griha Pravesh (Welcoming the Bride)",
      items: [
        "Welcome ritual items",
        "Rice-filled pot",
        "Traditional decorations"
      ],
      icon: Home,
      image: pravesha,
      desc: "The bride is welcomed into the groom's home with a ceremonial Griha Pravesh. She kicks a pot of rice at the entrance, symbolizing prosperity and abundance she brings to her new family."
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