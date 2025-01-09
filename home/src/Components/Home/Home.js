import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Calendar, Utensils, Book, Scissors, Gift,
    Clock, Users, ChevronRight, ArrowRight, Sparkles,
    MapPin, Camera, Music, UtensilsCrossed, Plane, Hotel, IdCard, Heart, Star, ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

import EnhancedCarousel from './HeroCarousel';
import TestimonialsHome from './TestimonialsHome';
import ServiceMenu from './ServiceMenu';

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
import pic211 from "../../assets/imgs/ServicesImgs/ServCardImgs/giftinvite.jpg"



const FeatureIcon = ({ Icon, label }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center space-x-2 text-gray-600 font-garamond"
    >
        <Icon className="w-4 h-4" />
        <span className="text-sm font-garamond">{label}</span>
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
                        className="text-3xl lg:text-4xl font-garamond mb-4"
                    >
                        {title}
                    </motion.h3>

                    <motion.p
                        className="text-gray-600 text-lg leading-relaxed font-garamond"
                        animate={{
                            opacity: isHovered ? 1 : 0.9,
                        }}
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        className="grid grid-cols-2 gap-4 py-6 font-garamond"
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
                            className="group inline-flex items-center space-x-3 font-medium font-garamond"
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

    const navigate = useNavigate();

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
            linkTo: "/destination-wedding"
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
            description: "TProfessional Weddings with Personalized Flourishes",
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
            description: "Our culture is built around meeting customer needs",
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
            description: "Complete beauty and styling solutions for Groom and Bloom",
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
            description: "Ensuring perfect endings and new beginnings for your special day",
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
        },
        {
            id: 11,
            title: "invitation and gift Services",
            icon: IdCard,
            image: pic211,
            description: "Making Moments Memorable with Elegant Invitations and Gifts",
            bgClass: "bg-accent1",
            services: [
                "Royal/Traditional Wedding Invitation and gift Services",
                "Destination Wedding Invitation and gift Services",
                "Modern/Minimalist Wedding Invitation and gift Services",
                "Eco-Friendly Wedding Invitation and gift Services",
                "Luxury Wedding Invitation and gift Services",
                "Theme-Based Wedding Invitation and gift Services",
            ],
            path: "/service-eleven"
        }
    ];



    const features = [
        { icon: Heart, title: "Personalized Planning", description: "Tailored to your unique love story" },
        { icon: Calendar, title: "Seamless Coordination", description: "Every detail perfectly timed" },
        { icon: Users, title: "Expert Team", description: "Dedicated professionals at your service" },
        { icon: Star, title: "Magical Moments", description: "Creating memories that last forever" }
    ];

    useEffect(() => {
        if (!isHovered) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [isHovered, heroSlides.length]); // Add heroSlides.length to the dependency array

    return (
        <div className="min-h-screen bg-gradient-to-b from-f8f7ff to-fffcf2">
            {/* Hero Section */}
            <EnhancedCarousel />

            {/* Welcome Section */}
            <section className="relative py-7 md:py-16 lg:py-20 overflow-hidden ">
                {/* Decorative background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-fdc5f5 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-ffc2d1 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Column - Text Content */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-garamond text-gray-800 leading-tight">
                                    Welcome to <span className="text-fdc5f5 font-garamond">Cult Events</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-garamond">
                                    We believe every love story deserves a magical celebration. Our team of dedicated wedding planners brings your dreams to life with creativity, passion, and attention to every detail.
                                </p>
                                <div className="w-auto flex flex-wrap gap-4">
                                    {/* First Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate('/contact')}
                                        type="button" // Add explicit type
                                        className="px-6 py-3 bg-[#d4a373] text-black rounded-full font-medium shadow-lg hover:bg-opacity-90 transition-all cursor-pointer"
                                    >
                                        <span className="flex items-center gap-2">
                                            Start Planning
                                            <ExternalLink className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                                        </span>
                                    </motion.button>

                                    {/* Second Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate('/about')}
                                        type="button" // Add explicit type
                                        className="group inline-flex items-center px-6 py-3 space-x-2 text-[#000000] hover:text-[#96742a] font-medium transition-colors duration-300 cursor-pointer"
                                    >
                                        <span className="flex items-center gap-2">
                                            Learn More
                                            <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-6 mt-12">
                                {features.map((Feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className="p-4 bg-white bg-opacity-50 rounded-xl"
                                    >
                                        <Feature.icon className="h-8 w-8 text-fdc5f5 mb-2" />
                                        <h3 className="font-garamond text-lg font-medium text-gray-800">{Feature.title}</h3>
                                        <p className="text-gray-600 text-sm">{Feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Image Grid */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="grid grid-cols-2 gap-4 md:gap-6"
                            >
                                {[pic4, pic5, pic6, pic7].map((pic, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 * index }}
                                        className={`relative rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'mt-8' : ''
                                            }`}
                                    >
                                        <img
                                            src={pic}
                                            alt={`Wedding moment ${index + 1}`}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Decorative elements */}
                            <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-ffc2d1 opacity-20 rounded-full filter blur-3xl" />
                            <div className="absolute -left-8 -top-8 w-64 h-64 bg-fdc5f5 opacity-20 rounded-full filter blur-3xl" />
                        </div>
                    </div>
                </motion.div>
            </section>

            <section id="services" className="relative bg-gradient-to-b from-[#f4f3ee] to-[#f8f7f2] py-4 lg:py-4 overflow-hidden">
                {/* Background Patterns */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
                            backgroundSize: '32px 32px'
                        }} />

                    {/* Floating Shapes */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: [0.05, 0.08, 0.05],
                            scale: [1, 1.2, 1],
                            rotate: [0, 360]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-12 left-20 w-64 h-64 rounded-full bg-[#dda15e]/10"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: [0.08, 0.12, 0.08],
                            scale: [1, 1.1, 1],
                            rotate: [360, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#d3853d]/10"
                    />
                </div>

                {/* Content Container with Enhanced Spacing */}
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header with Refined Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center max-w-4xl mx-auto mb-5 md:mb-5 lg:mb-9"
                    >
                        {/* Enhanced Title */}
                        <div className="relative inline-block">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                         font-garamond font-bold mb-6 
                         bg-gradient-to-r from-[#d3853d] to-[#df9433] 
                         bg-clip-text text-transparent 
                         tracking-tight leading-tight"
                            >
                                Our Services
                            </motion.h2>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#d3853d]/20 via-[#df9433]/40 to-[#d3853d]/20 transform origin-left"
                            />
                        </div>

                        {/* Enhanced Subtitle */}
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-[#000000]/80 text-xl md:text-2xl lg:text-3xl 
                       font-garamond font-medium 
                       max-w-2xl mx-auto 
                       leading-relaxed mt-6"
                        >
                            We're here to help you, every step of the way.
                        </motion.h4>

                        {/* Decorative Elements */}
                        <div className="flex items-center justify-center gap-2 mt-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="w-2 h-2 rounded-full bg-[#d3853d]"
                            />
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                viewport={{ once: true }}
                                className="w-24 h-1 bg-gradient-to-r from-[#d3853d] to-[#df9433] rounded-full"
                            />
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="w-2 h-2 rounded-full bg-[#df9433]"
                            />
                        </div>
                    </motion.div>

                    {/* Service Menu with Enhanced Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative z-20 max-w-full mx-auto"
                    >
                        <ServiceMenu serviceCategories={serviceCategories} />
                    </motion.div>
                </div>
            </section>


            {/* Premium Packages Section */}
            <section className="py-10 bg-gradient-to-b from-fffcf2 to-faedcd overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="text-center mb-20 font-garamond">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-ffc2d1/10 text-ffc2d1 text-sm font-garamond font-medium mb-4">
                                Luxury Packages
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-garamond text-gray-800 mb-4"
                        >
                            Exclusive Wedding Collections
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 max-w-3xl mx-auto font-garamond"
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
                        className="text-center mt-8"
                    >
                        <Link
                            to="/packages"
                            className="inline-flex items-center px-8 py-4 bg-white hover:bg-ffc2d1 
                            text-gray-800 hover:text-white rounded-full font-medium font-garamond
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

            {/* Testimonials Section */}
            <section className=" mt-6">
                <TestimonialsHome />
            </section>

            {/* Enhanced CTA Section */}
            <section id="cta" className="relative py-32 overflow-hidden mb-[-50px]">
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
                    className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-garamond text-white mb-8">
                        Ready to Begin Your Wedding Journey?
                    </h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-garamond">
                        Let's create memories that will last a lifetime...
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-12 py-5 bg-secondary-dark hover:bg-accent1-dark 
                                        text-gray-800 rounded-full font-medium font-garamond text-lg shadow-2xl 
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