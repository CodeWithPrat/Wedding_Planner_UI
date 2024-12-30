import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Facebook, Instagram, Twitter, BookHeart, Menu, X } from 'lucide-react';
import { companyData, navigationLinks, colorScheme } from './Components/Data/Data';
import About from './Components/ABout/About';
import Home from './Components/Home/Home';
import Packages from './Components/PackagePlans/Packageplan';
import Services from './Components/ServicesPlan/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-b from-[#fffcf2] to-[#faedcd]'}`}>
        {/* Enhanced Navbar */}
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-lg dark:bg-gray-800/90 shadow-lg' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Animated Logo and Company Name */}
              <div className="flex-shrink-0 flex items-center space-x-3 group">
                <img
                  className="h-12 w-12 rounded-full transform transition-transform group-hover:scale-110 shadow-md"
                  src={companyData.logo}
                  alt={companyData.name}
                />
                <span className={`text-2xl font-serif tracking-wide ${
                  scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-800 dark:text-white'
                } group-hover:text-[#ffc2d1] transition-colors duration-300`}>
                  {companyData.name}
                </span>
              </div>

              {/* Enhanced Navigation Links */}
              <div className="hidden lg:block">
                <div className="flex items-center space-x-6">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-2 rounded-full text-sm font-medium transform transition-all duration-300
                        ${scrolled 
                          ? 'text-gray-700 dark:text-gray-300 hover:bg-[#ffcfd2]/20' 
                          : 'text-gray-800 dark:text-gray-200 hover:bg-white/20'
                        }
                        hover:scale-105 hover:shadow-md`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <button
                    onClick={toggleTheme}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-700/50 
                             dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg
                             transform hover:scale-105"
                  >
                    {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Enhanced Mobile Menu */}
              <div className="lg:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg shadow-lg py-4">
                <div className="flex flex-col space-y-2 px-4">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-[#ffcfd2]/20
                               transition-colors duration-300 text-center"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content with Padding for Fixed Navbar */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Enhanced Company Info */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <div className="flex items-center space-x-3 group">
                  <img
                    className="h-10 w-10 rounded-full transform transition-transform group-hover:scale-110 shadow-md"
                    src={companyData.logo}
                    alt={companyData.name}
                  />
                  <span className="text-xl font-serif tracking-wide group-hover:text-[#ffc2d1] transition-colors duration-300">
                    {companyData.name}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left leading-relaxed">
                  {companyData.description}
                </p>
              </div>

              {/* Enhanced Social Media */}
              <div className="flex flex-col items-center space-y-6">
                <h3 className="text-xl font-serif tracking-wide">Connect With Us</h3>
                <div className="flex space-x-6">
                  {[
                    { icon: Facebook, href: companyData.socialMedia.facebook, color: 'hover:text-blue-600' },
                    { icon: Instagram, href: companyData.socialMedia.instagram, color: 'hover:text-pink-600' },
                    { icon: Twitter, href: companyData.socialMedia.twitter, color: 'hover:text-blue-400' },
                    { icon: BookHeart, href: companyData.socialMedia.pinterest, color: 'hover:text-red-600' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`transform transition-all duration-300 hover:scale-125 ${social.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-7 w-7" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Enhanced Contact Details */}
              <div className="flex flex-col items-center md:items-end space-y-4">
                <h3 className="text-xl font-serif tracking-wide">Contact Us</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-right space-y-2">
                  <p className="hover:text-[#ffc2d1] transition-colors duration-300">
                    {companyData.contact.email}
                  </p>
                  <p className="hover:text-[#ffc2d1] transition-colors duration-300">
                    {companyData.contact.phone}
                  </p>
                  <p className="hover:text-[#ffc2d1] transition-colors duration-300">
                    {companyData.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;