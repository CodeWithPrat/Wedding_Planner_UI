import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Heart, Calendar, Award, Globe,
    Clock, Users, Star, ChevronRight, ArrowRight, Sparkles,
    ChevronDown, MapPin, Camera, Music, UtensilsCrossed, Plane, Hotel
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import EnhancedCarousel from './HeroCarousel';

import pic1 from "./../../assets/imgs/HomeImgs/pic1.jpg"
import pic3 from "./../../assets/imgs/HomeImgs/pic3.jpg"
import pic4 from "./../../assets/imgs/HomeImgs/pic4.jpg"
import pic5 from "./../../assets/imgs/HomeImgs/pic5.jpg"
import pic6 from "./../../assets/imgs/HomeImgs/pic6.jpg"
import pic7 from "./../../assets/imgs/HomeImgs/pic7.jpg"
import vid1 from "./../../assets/imgs/HomeImgs/vid1.mp4"
import vid2 from "./../../assets/imgs/HomeImgs/vid2.mp4"
import vid3 from "./../../assets/imgs/HomeImgs/vid3.mp4"

import pic101 from "../../assets/imgs/HomeImgs/pic101.jpeg"
import pic102 from "../../assets/imgs/HomeImgs/pic102.jpg"

const FeatureIcon = ({ Icon, label }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center space-x-2 text-gray-600"
    >
        <Icon className="w-4 h-4" />
        <span className="text-sm">{label}</span>
    </motion.div>
);

const PackageCard = ({ title, description, features, imageSrc, linkTo, isReversed, accentColor }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} 
                    rounded-3xl overflow-hidden transform transition-all duration-500
                    hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]`}
            style={{
                background: `linear-gradient(135deg, white, ${accentColor}10)`
            }}
        >
            <div className="relative lg:w-1/2 overflow-hidden">
                <motion.div
                    animate={{
                        scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative h-72 lg:h-full"
                >
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <motion.div
                        animate={{
                            opacity: isHovered ? 0.4 : 0.2,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to ${isReversed ? 'left' : 'right'}, 
                            ${accentColor}50, transparent)`
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
                />
            </div>

            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                <motion.div
                    animate={{
                        x: isHovered ? 0 : -10,
                        opacity: isHovered ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 right-0 p-4"
                >
                    <Sparkles className="w-6 h-6 text-amber-400" />
                </motion.div>

                <motion.div className="space-y-6">
                    <motion.h3
                        animate={{
                            color: isHovered ? accentColor : '#1a1a1a',
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-3xl lg:text-4xl font-serif mb-4"
                    >
                        {title}
                    </motion.h3>

                    <motion.p
                        className="text-gray-600 text-lg leading-relaxed"
                        animate={{
                            opacity: isHovered ? 1 : 0.9,
                        }}
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        className="grid grid-cols-2 gap-4 py-6"
                        animate={{
                            opacity: isHovered ? 1 : 0.8,
                        }}
                    >
                        {features.map((feature, index) => (
                            <FeatureIcon key={index} Icon={feature.icon} label={feature.label} />
                        ))}
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link
                            to={linkTo}
                            className="group inline-flex items-center space-x-3 font-medium"
                            style={{ color: accentColor }}
                        >
                            <motion.span
                                animate={{
                                    x: isHovered ? 5 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                Explore Package
                            </motion.span>
                            <motion.div
                                animate={{
                                    x: isHovered ? 5 : 0,
                                }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState({});
    const [isHovered, setIsHovered] = useState(false);

    const packages = [
        {
            title: "16-Day Grand Wedding Package",
            description: "Experience the epitome of luxury with our comprehensive 16-day celebration. Every moment is meticulously crafted to create an unforgettable journey of love, tradition, and modern elegance. Our expert team ensures perfection in every detail.",
            features: [
                { icon: Calendar, label: "16 Day Duration" },
                { icon: Users, label: "Up to 500 Guests" },
                { icon: Camera, label: "Premium Photography" },
                { icon: Music, label: "Live Entertainment" },
                { icon: UtensilsCrossed, label: "Gourmet Catering" },
                { icon: Clock, label: "24/7 Coordinator" }
            ],
            imageSrc: pic101,  // Using pic101 for the first package
            accentColor: "#ff6b6b",
            linkTo: "/sixteendays"
        },
        {
            title: "Destination Wedding Package",
            description: "Transform your wedding dreams into reality at breathtaking locations worldwide. From tropical paradises to historic castles, we handle every detail to create your perfect destination wedding experience.",
            features: [
                { icon: Plane, label: "Travel Planning" },
                { icon: MapPin, label: "Location Scouting" },
                { icon: Hotel, label: "Accommodation" },
                { icon: Users, label: "Local Coordination" },
                { icon: Camera, label: "Destination Photos" },
                { icon: Clock, label: "Timeline Planning" }
            ],
            imageSrc: pic102,  // Using pic102 for the second package
            accentColor: "#4ecdc4",
            linkTo: "/packages/destination-wedding"
        }
    ];

    // Intersection Observer setup
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const heroSlides = [
        {
            image: pic1,
            title: "Your Perfect Day Awaits",
            subtitle: "Creating Unforgettable Wedding Experiences",
            overlayColor: "#faedcd"
        },
        {
            video: vid3,
            title: "Luxury Meets Love",
            subtitle: "Elegant Celebrations for Your Special Moments",
            overlayColor: "#ffcfd2"
        },
        {
            image: pic3,
            title: "Dreams Come True",
            subtitle: "Where Magic Happens and Memories Last Forever",
            overlayColor: "#ffc2d1"
        },
        {
            video: vid2,
            title: "A Celebration Like No Other",
            subtitle: "Immerse Yourself in Timeless Elegance and Joy",
            overlayColor: "#fdc5f5"
        },
        {
            image: pic4,
            title: "Cherish Every Moment",
            subtitle: "Crafting the Perfect Backdrop for Your Love Story",
            overlayColor: "#f8f7ff"
        }
    ];

    const stats = [
        {
            number: "500+",
            label: "Weddings Planned",
            icon: Heart,
            color: "#ffc2d1"
        },
        {
            number: "50+",
            label: "Destinations",
            icon: Globe,
            color: "#ffcfd2"
        },
        {
            number: "98%",
            label: "Happy Couples",
            icon: Star,
            color: "#fdc5f5"
        },
        {
            number: "15+",
            label: "Years Experience",
            icon: Award,
            color: "#faedcd"
        }
    ];

    const services = [
        {
            icon: Calendar,
            title: "Full Wedding Planning",
            description: "From venue selection to the last dance, we handle every detail of your special day with meticulous care and attention.",
            color: "#ffc2d1"
        },
        {
            icon: Clock,
            title: "Day-of Coordination",
            description: "Relax and enjoy your wedding day while our experienced coordinators ensure everything runs perfectly.",
            color: "#ffcfd2"
        },
        {
            icon: Users,
            title: "Destination Weddings",
            description: "Create magical moments at stunning locations worldwide, from beach resorts to historic castles.",
            color: "#fdc5f5"
        },
        {
            icon: Globe,
            title: "Destination Wedding Package",
            description: "Experience luxury destination weddings starting from ₹15 Lakhs. Choose from exotic beaches, palace venues, or international locations.",
            color: "#faedcd"
        }
    ];

    useEffect(() => {
        if (!isHovered) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [isHovered, heroSlides.length]); // Add heroSlides.length to the dependency array

    const slideVariants = {
        enter: { opacity: 0, scale: 1.1 },
        center: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-f8f7ff to-fffcf2">
            {/* Hero Section */}
            <EnhancedCarousel />

            {/* Welcome Section */}
            <section id="welcome" className="py-24 bg-gradient-to-b from-fffcf2 to-faedcd">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible.welcome ? 1 : 0, y: isVisible.welcome ? 0 : 50 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: isVisible.welcome ? 1 : 0, x: isVisible.welcome ? 0 : -50 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight"
                            >
                                Welcome to <span className="text-fdc5f5">Cult Events</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isVisible.welcome ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-lg text-gray-600 leading-relaxed"
                            >
                                We believe every love story deserves a magical celebration. Our team of dedicated wedding planners brings your dreams to life with creativity, passion, and attention to every detail.
                            </motion.p>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="inline-block"
                            >
                                <Link
                                    to="/about"
                                    className="group inline-flex items-center space-x-3 text-ffc2d1 
                                             hover:text-ffcfd2 font-medium transition-colors duration-300"
                                >
                                    <span>Learn More About Us</span>
                                    <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[pic4, pic5, pic6, pic7].map((pic, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{
                                        opacity: isVisible.welcome ? 1 : 0,
                                        y: isVisible.welcome ? 0 : 50
                                    }}
                                    transition={{ duration: 0.8, delay: 0.2 * index }}
                                    className={`relative rounded-2xl overflow-hidden shadow-2xl 
                                              ${index % 2 === 1 ? 'mt-12' : ''}`}
                                >
                                    <img
                                        src={pic}
                                        alt={`Wedding moment ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Enhanced Stats Section */}
            <section id="stats" className="py-20 bg-gradient-to-r from-ffc2d1/10 to-fdc5f5/10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible.stats ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-white rounded-2xl transform 
                                              rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                                <div className="relative p-8 rounded-2xl bg-white/90 backdrop-blur-sm 
                                              shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <stat.icon
                                        className="w-12 h-12 mb-6"
                                        style={{ color: stat.color }}
                                    />
                                    <div className="text-4xl font-serif text-gray-800 mb-3">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Enhanced Services Section */}
            <section id="services" className="py-24 bg-gradient-to-b from-f8f7ff to-fffcf2">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible.services ? 1 : 0, y: isVisible.services ? 0 : 50 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            From intimate gatherings to grand destination weddings...
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03 }}
                                className="group"
                            >
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-white/90 
                                              shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <service.icon className="w-12 h-12 text-ffc2d1 mb-6 
                                                          group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-2xl font-serif text-gray-800 mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <Link
                                        to="/services"
                                        className="inline-flex items-center text-ffc2d1 hover:text-ffcfd2 
                                                 transition-colors duration-300 group"
                                    >
                                        <span>Learn More</span>
                                        <ChevronRight className="ml-2 h-5 w-5 transform 
                                                               group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>



            {/* Premium Packages Section */}
            <section className="py-24 bg-gradient-to-b from-fffcf2 to-faedcd overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-ffc2d1/10 text-ffc2d1 
                           text-sm font-medium mb-4">
                                Luxury Packages
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-serif text-gray-800 mb-8"
                        >
                            Exclusive Wedding Collections
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 max-w-3xl mx-auto"
                        >
                            Choose from our carefully curated wedding packages, each designed to create
                            an extraordinary celebration that reflects your unique love story
                        </motion.p>
                    </div>

                    <div className="space-y-12">
                        {packages.map((pkg, index) => (
                            <PackageCard
                                key={index}
                                {...pkg}
                                isReversed={index % 2 !== 0}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-center mt-20"
                    >
                        <Link
                            to="/packages"
                            className="inline-flex items-center px-8 py-4 bg-white hover:bg-ffc2d1 
                     text-gray-800 hover:text-white rounded-full font-medium 
                     shadow-xl hover:shadow-2xl transition-all duration-500 
                     transform hover:-translate-y-1 group"
                        >
                            <span>View All Wedding Collections</span>
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <ArrowRight className="ml-3 h-5 w-5 group-hover:text-white" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Enhanced CTA Section */}
            <section id="cta" className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <video
                        src={vid1}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible.cta ? 1 : 0, y: isVisible.cta ? 0 : 50 }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
                        Ready to Begin Your Wedding Journey?
                    </h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                        Let's create memories that will last a lifetime...
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-12 py-5 bg-secondary-dark hover:bg-accent1-dark 
                                     text-gray-800 rounded-full font-medium text-lg shadow-2xl 
                                     hover:shadow-3xl transition-all duration-300"
                        >
                            Get Started
                            <ArrowRight className="ml-3 h-6 w-6" />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );


};

export default Home;