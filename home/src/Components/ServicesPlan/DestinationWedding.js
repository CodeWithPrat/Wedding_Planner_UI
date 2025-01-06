import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Camera,
    MapPin,
    Plane,
    Music,
    Users,
    UtensilsCrossed,
    Star,
    Gift,
    Heart,
    ChevronDown
} from 'lucide-react';

import pic301 from "../../assets/imgs/DestinationWeddingImgs/pic301.jpg"
import pic302 from "../../assets/imgs/DestinationWeddingImgs/pic302.jpg"
import pic303 from "../../assets/imgs/DestinationWeddingImgs/pic303.jpg"
import pic304 from "../../assets/imgs/DestinationWeddingImgs/pic304.jpg"
import pic305 from "../../assets/imgs/DestinationWeddingImgs/pic305.jpg"
import pic306 from "../../assets/imgs/DestinationWeddingImgs/pic306.jpg"
import pic307 from "../../assets/imgs/DestinationWeddingImgs/pic307.jpg"
import pic308 from "../../assets/imgs/DestinationWeddingImgs/pic308.jpg"
import pic309 from "../../assets/imgs/DestinationWeddingImgs/pic309.jpg"
import pic310 from "../../assets/imgs/DestinationWeddingImgs/pic310.jpg"
import pic311 from "../../assets/imgs/DestinationWeddingImgs/pic311.jpg"
import pic312 from "../../assets/imgs/DestinationWeddingImgs/pic312.jpg"

const DestinationWedding = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [activeImage, setActiveImage] = useState(0);

    const packages = [
        {
            name: 'Gold Package',
            price: '₹15 Lakhs',
            destination: 'Goa or Coorg',
            guests: '50-100',
            features: ['Basic décor', 'Transportation', 'Catering', 'Photography'],
            image: pic301
        },
        {
            name: 'Platinum Package',
            price: '₹50 Lakhs',
            destination: 'Udaipur Palace or International Beach',
            guests: '150-200',
            features: ['Luxury décor', 'Gourmet catering', 'Live music', 'Full event coverage'],
            image: pic302
        },
        {
            name: 'Diamond Package',
            price: '₹2 Crores',
            destination: 'Maldives Resort or European Castle',
            guests: '200-300',
            features: ['Private resort booking', 'Celebrity performances', 'Luxury transportation', 'Complete coordination'],
            image: pic303
        }
    ];

    const features = [
        { icon: <MapPin className="w-6 h-6" />, image: pic304, title: 'Destination Selection', description: 'Exotic beaches, palaces, hill stations & international destinations' },
        { icon: <Star className="w-6 h-6" />, image: pic305, title: 'Accommodation', description: '5-star resorts with luxury amenities for all guests' },
        { icon: <Plane className="w-6 h-6" />, image: pic306, title: 'Transportation', description: 'Complete travel coordination with luxury vehicles' },
        { icon: <Heart className="w-6 h-6" />, image: pic307, title: 'Venue & Décor', description: 'Customized themed setups for all ceremonies' },
        { icon: <UtensilsCrossed className="w-6 h-6" />, image: pic308, title: 'Catering', description: 'Multi-cuisine gourmet menu with live stations' },
        { icon: <Camera className="w-6 h-6" />, image: pic309, title: 'Photography', description: 'Pre-wedding shoots and cinematic coverage' },
        { icon: <Music className="w-6 h-6" />, image: pic310, title: 'Entertainment', description: 'Live performances, DJ, and cultural shows' },
        { icon: <Users className="w-6 h-6" />, image: pic311, title: 'Guest Management', description: 'Dedicated hospitality and coordination' },
        { icon: <Gift className="w-6 h-6" />, image: pic312, title: 'Special Effects', description: 'Drone shows, projection mapping & dramatic entries' }
    ];

    return (
        <div className="min-h-screen bg-[#f4f3ee] font-garamond">
            {/* Hero Section with Image Carousel */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-[55vh] w-full overflow-hidden"
            >
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={features[activeImage].image}
                        alt="Wedding"
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#252422]/70 to-[#dda15e]/70"></div>
                </motion.div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                    <div className="text-white px-4">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold font-garamond mb-6"
                        >
                            Your Dream Destination Wedding
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl lg:text-2xl mb-8 font-garamond"
                        >
                            Create unforgettable memories in breathtaking locations
                        </motion.p>
                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ delay: 0.6 }}
                            className="bg-[#dda15e] text-white px-6 md:px-8 font-garamond py-2 md:py-3 rounded-full text-base md:text-lg hover:bg-[#252422] transition-all"
                        >
                            Start Planning
                        </motion.button>
                    </div>

                    {/* Carousel Navigation Dots */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                        {features.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setActiveImage(index)}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className={`h-2 transition-all duration-300 rounded-full ${activeImage === index
                                        ? 'w-6 bg-[#dda15e]'
                                        : 'w-2 bg-white/50 hover:bg-white/80'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Auto-advance carousel effect */}
                {React.useEffect(() => {
                    const timer = setInterval(() => {
                        setActiveImage((prev) => (prev + 1) % features.length);
                    }, 5000);
                    return () => clearInterval(timer);
                }, [])}
            </motion.div>

            {/* Features Grid */}
            <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold font-garamond text-center text-[#252422] mb-16"
                >
                    Our Services
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden group"
                        >
                            <div className="relative h-48 overflow-hidden font-garamond">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 font-garamond text-white">
                                    <div className="flex items-center">
                                        <div className="p-3 bg-[#dda15e] rounded-full mr-4">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold font-garamond">{feature.title}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 font-garamond">
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Packages Section */}
            <div className="bg-[#252422] py-20 px-4 md:px-8 font-garamond">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold font-garamond text-center text-white mb-16"
                    >
                        Wedding Packages
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-garamond">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-xl overflow-hidden shadow-xl font-garamond"
                            >
                                <div className="relative h-48 font-garamond">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-2xl font-bold font-garamond text-white mb-2">{pkg.name}</h3>
                                        <p className="text-3xl font-bold font-garamond text-[#dda15e]">{pkg.price}</p>
                                    </div>
                                </div>
                                <div className="p-6 font-garamond">
                                    <div className="mb-6">
                                        <p className="text-gray-600 mb-2 font-garamond">
                                            <MapPin className="inline w-4 h-4 mr-2 font-garamond" />{pkg.destination}
                                        </p>
                                        <p className="text-gray-600 font-garamond">
                                            <Users className="inline w-4 h-4 mr-2" />{pkg.guests} Guests
                                        </p>
                                    </div>
                                    <ul className="text-left mb-6 font-garamond">
                                        {pkg.features.map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                className="mb-2 flex items-center font-garamond"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                <ChevronDown className="w-4 h-4 text-[#dda15e] mr-2 font-garamond" />
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full font-garamond bg-[#dda15e] text-white py-3 rounded-lg hover:bg-[#252422] transition-colors"
                                    >
                                        Choose Package
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-20 px-4 md:px-8 bg-[#f4f3ee]">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold font-garamond text-center text-[#252422] mb-16"
                    >
                        Why Choose Us
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-garamond">
                        {[
                            { title: 'Expertise in Destination Weddings', desc: 'Our team specializes in planning destination weddings across India and internationally.' },
                            { title: 'Tailored Packages', desc: 'Customizable wedding packages that cater to your unique vision and requirements.' },
                            { title: 'Comprehensive Management', desc: 'From venue selection to logistics, we handle every aspect of your wedding planning.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.03 }}
                                className="bg-white p-6 rounded-xl shadow-lg backdrop-blur-md font-garamond bg-white/90"
                            >
                                <h3 className="text-xl font-semibold font-garamond text-[#252422] mb-4">{item.title}</h3>
                                <p className="text-gray-600 font-garamond">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-[#252422] text-white font-garamond py-20 px-4 text-center relative overflow-hidden"
            >
                <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="absolute font-garamond inset-0 bg-gradient-to-r from-[#dda15e] to-[#252422]"></div>
                </motion.div>
                <div className="relative z-10 max-w-3xl mx-auto font-garamond">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="text-4xl font-bold mb-6 font-garamond"
                    >
                        Ready to Start Planning?
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl mb-8 font-garamond"
                    >
                        Let's create your perfect destination wedding together
                    </motion.p>
                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: 0.4 }}
                        className="bg-[#dda15e] font-garamond text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-[#252422] transition-all"
                    >
                        Contact Us Today
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default DestinationWedding;