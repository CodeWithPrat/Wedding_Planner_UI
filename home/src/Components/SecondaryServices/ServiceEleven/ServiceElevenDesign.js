import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { invitationServices } from './ServiceElevenData';
import { ArrowRight, Gift } from 'lucide-react';

const InvitationServicesDesign = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [expandedGifts, setExpandedGifts] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const serviceVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const floatingGiftVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f3ee] relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute transform rotate-45 bg-[#dda15e]"
            style={{
              width: '50px',
              height: '50px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-10 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-4 relative pt-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12"
          >
            <Gift className="w-16 h-16 text-[#dda15e]" />
          </motion.div>

          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-garamond font-bold text-[#dda15e] mb-6"
          >
            Wedding Invitation Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-garamond"
          >
            Crafting Unique Invitations and Memorable Gift Experiences
          </motion.p>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="w-32 h-1 bg-[#dda15e] mx-auto"
          />
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto"
        >
          {invitationServices.map((service, index) => (
            <motion.div
              key={service.MainServiceName}
              variants={serviceVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="relative bg-[#f8f9fa] rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 bg-opacity-90"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#dda15e] opacity-10 rounded-bl-full" />
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon 
                      className={`w-10 h-10 text-[#dda15e] transition-all duration-300 ${
                        hoveredService === index ? 'scale-110' : ''
                      }`}
                    />
                  </motion.div>
                  <div className="w-14 h-14 rounded-full bg-[#f4f3ee] flex items-center justify-center shadow-inner">
                    <span className="font-garamond font-bold text-[#dda15e] text-xl">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <h3 className="font-garamond text-2xl font-bold text-[#dda15e] mb-3">
                  {service.MainServiceName}
                </h3>
                <h4 className="font-garamond text-lg text-gray-600 mb-4 italic">
                  {service.SubServiceName}
                </h4>
                <p className="font-garamond text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <motion.button
                  onClick={() => setExpandedGifts(expandedGifts === index ? null : index)}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-[#dda15e] font-garamond font-semibold"
                >
                  View Gift Ideas 
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>

                {expandedGifts === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-2"
                  >
                    {service.giftIdeas.map((gift, giftIndex) => (
                      <motion.div
                        key={giftIndex}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: giftIndex * 0.1 }}
                        className="flex items-center space-x-2 text-gray-600"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#dda15e]" />
                        <p className="font-garamond">{gift}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredService === index ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-[#dda15e]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          variants={floatingGiftVariants}
          animate="animate"
          className="fixed top-20 left-10 text-[#dda15e] opacity-20"
        >
          <Gift className="w-12 h-12" />
        </motion.div>
        <motion.div 
          variants={floatingGiftVariants}
          animate="animate"
          className="fixed bottom-20 right-10 text-[#dda15e] opacity-20"
        >
          <Gift className="w-12 h-12" />
        </motion.div>
      </div>
    </div>
  );
};

export default InvitationServicesDesign;