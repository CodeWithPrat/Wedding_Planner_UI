import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Heart, Calendar, Sparkles, Award, Globe,
    Clock, Users, Star, ChevronRight
} from 'lucide-react';

import pic1 from "./../../assets/imgs/HomeImgs/pic1.jpg"
import pic2 from "./../../assets/imgs/HomeImgs/pic2.jpg"
import pic3 from "./../../assets/imgs/HomeImgs/pic3.jpg"
import pic4 from "./../../assets/imgs/HomeImgs/pic4.jpg"
import pic5 from "./../../assets/imgs/HomeImgs/pic5.jpg"
import pic6 from "./../../assets/imgs/HomeImgs/pic6.jpg"
import pic7 from "./../../assets/imgs/HomeImgs/pic7.jpg"
import vid1 from "./../../assets/imgs/HomeImgs/vid1.mp4"
import vid2 from "./../../assets/imgs/HomeImgs/vid2.mp4"
import vid3 from "./../../assets/imgs/HomeImgs/vid3.mp4"

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Hero carousel data
    const heroSlides = [
        {
            image: pic1,
            title: "Your Perfect Day Awaits",
            subtitle: "Creating Unforgettable Wedding Experiences"
        },
        {
            video: vid3,
            title: "Luxury Meets Love",
            subtitle: "Elegant Celebrations for Your Special Moments"
        },
        {
            image: pic3,
            title: "Dreams Come True",
            subtitle: "Where Magic Happens and Memories Last Forever"
        },
        {
            video: vid2, // Replace `video1` with the path or import for your video file
            title: "A Celebration Like No Other",
            subtitle: "Immerse Yourself in Timeless Elegance and Joy"
        },
        {
            image: pic4, // Replace `pic4` with your new image source
            title: "Cherish Every Moment",
            subtitle: "Crafting the Perfect Backdrop for Your Love Story"
        }
    ];
    

    // Stats data
    const stats = [
        { number: "500+", label: "Weddings Planned" },
        { number: "50+", label: "Destinations" },
        { number: "98%", label: "Happy Couples" },
        { number: "15+", label: "Years Experience" }
    ];

    // Services data
    const services = [
        {
            icon: Calendar,
            title: "Full Wedding Planning",
            description: "From venue selection to the last dance, we handle every detail of your special day with meticulous care and attention."
        },
        {
            icon: Clock,
            title: "Day-of Coordination",
            description: "Relax and enjoy your wedding day while our experienced coordinators ensure everything runs perfectly."
        },
        {
            icon: Users,
            title: "Destination Weddings",
            description: "Create magical moments at stunning locations worldwide, from beach resorts to historic castles."
        },
        {
            icon: Globe,
            title: "Destination Wedding Package",
            description: "Experience luxury destination weddings starting from ₹15 Lakhs. Choose from exotic beaches, palace venues, or international locations."
        }
    ];

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Carousel Section */}
            <div className="relative h-screen">
    {heroSlides.map((slide, index) => (
        <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <div className="relative h-full">
                {slide.video ? (
                    <video
                        src={slide.video}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 transform transition-all duration-700 translate-y-0">
                            {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8">
                            {slide.subtitle}
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-3 bg-[#ffc2d1] hover:bg-[#ffcfd2] text-gray-800 
                             rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 
                             transform hover:-translate-y-1"
                        >
                            Start Planning
                            <ChevronRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>


            {/* Welcome Section */}
            <section className="py-20 bg-gradient-to-b from-[#fffcf2] to-[#faedcd]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
                                Welcome to Cult Events
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We believe every love story deserves a magical celebration. With over 15 years of experience in wedding planning,
                                we transform your dreams into reality through meticulous attention to detail, creative design, and flawless execution.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Our team of dedicated wedding planners works tirelessly to ensure your special day is nothing short of perfect.
                                From intimate gatherings to grand celebrations, we craft unique experiences that reflect your love story.
                            </p>
                            <Link
                                to="/about"
                                className="inline-flex items-center text-[#ffc2d1] hover:text-[#ffcfd2] font-medium transition-colors duration-300"
                            >
                                Learn More About Us
                                <ChevronRight className="ml-1 h-5 w-5" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src= {pic4}
                                alt="Wedding moment 1"
                                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                            />
                            <img
                                src={pic5}
                                alt="Wedding moment 2"
                                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8"
                            />
                            <img
                                src= {pic6}
                                alt="Wedding moment 1"
                                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                            />
                            <img
                                src={pic7}
                                alt="Wedding moment 2"
                                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[#ffc2d1]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
                            Our Services
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            From intimate gatherings to grand destination weddings, we offer customized solutions
                            to make your wedding dreams come true.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-xl bg-gradient-to-b from-[#fffcf2] to-[#faedcd] 
                   shadow-lg hover:shadow-xl transition-all duration-300 
                   transform hover:-translate-y-1"
                            >
                                <service.icon className="w-12 h-12 text-[#ffc2d1] mb-6" />
                                <h3 className="text-xl font-serif text-gray-800 mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center mt-4 text-[#ffc2d1] hover:text-[#ffcfd2] 
                     transition-colors duration-300"
                                >
                                    Learn More
                                    <ChevronRight className="ml-1 h-5 w-5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden">
    <div className="absolute inset-0">
        <video
            src={vid1} // Replace with your video source
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Ready to Begin Your Wedding Journey?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create memories that will last a lifetime. Contact us today to schedule
            your consultation and start planning your perfect wedding.
        </p>
        <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-[#ffc2d1] hover:bg-[#ffcfd2] text-gray-800 
                     rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 
                     transform hover:-translate-y-1"
        >
            Get Started
            <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
    </div>
</section>

        </div>
    );
};

export default Home;