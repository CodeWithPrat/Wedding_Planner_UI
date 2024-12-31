import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Sun, Moon, Facebook, Instagram, Twitter, BookHeart, Menu, X, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyData, navigationLinks } from './Components/Data/Data';
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <div className="bg-gradient-to-br from-background via-primary to-secondary dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen transition-colors duration-300">
          {/* Enhanced Navbar */}
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${
              scrolled 
                ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg' 
                : 'bg-transparent'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                {/* Animated Logo */}
                <motion.div 
                  className="flex-shrink-0 flex items-center space-x-3 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    className="h-12 w-12 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-accent1/50"
                    src={companyData.logo}
                    alt={companyData.name}
                  />
                  <span className="text-2xl font-serif tracking-wide bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
                    {companyData.name}
                  </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                  <div className="flex items-center space-x-6">
                    {navigationLinks.map((link, index) => (
                      <motion.div
                        key={link.path}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={link.path}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                            ${scrolled 
                              ? 'text-gray-700 dark:text-gray-300 hover:bg-accent1/20' 
                              : 'text-gray-800 dark:text-gray-200 hover:bg-white/20'
                            }
                            hover:shadow-md hover:shadow-accent2/30`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={toggleTheme}
                      className="p-3 rounded-full bg-gradient-to-r from-accent1/20 to-accent2/20 
                               hover:from-accent1/30 hover:to-accent2/30 transition-all duration-300 
                               shadow-md hover:shadow-lg"
                    >
                      {isDarkMode ? 
                        <Sun className="h-5 w-5 text-yellow-500" /> : 
                        <Moon className="h-5 w-5 text-gray-600" />
                      }
                    </motion.button>
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 rounded-full bg-gradient-to-r from-accent1/20 to-accent2/20 
                           hover:from-accent1/30 hover:to-accent2/30 transition-all duration-300"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.button>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-800/95 
                             backdrop-blur-lg shadow-lg overflow-hidden"
                  >
                    <div className="flex flex-col space-y-2 px-4 py-4">
                      {navigationLinks.map((link, index) => (
                        <motion.div
                          key={link.path}
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 
                                     hover:bg-gradient-to-r hover:from-accent1/20 hover:to-accent2/20 
                                     transition-all duration-300 text-center"
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>

          {/* Enhanced Footer */}
          <footer className="bg-gradient-to-t from-light/80 to-background/80 dark:from-gray-800/80 
                           dark:to-gray-900/80 backdrop-blur-md shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Company Info */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center md:items-start space-y-4"
                >
                  <div className="flex items-center space-x-3 group">
                    <img
                      className="h-10 w-10 rounded-full shadow-lg transition-all duration-300 
                               group-hover:shadow-accent1/50"
                      src={companyData.logo}
                      alt={companyData.name}
                    />
                    <span className="text-xl font-serif tracking-wide bg-gradient-to-r from-accent1 
                                   to-accent2 bg-clip-text text-transparent">
                      {companyData.name}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left 
                              leading-relaxed">
                    {companyData.description}
                  </p>
                </motion.div>

                {/* Social Media */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-6"
                >
                  <h3 className="text-xl font-serif tracking-wide bg-gradient-to-r from-accent1 
                               to-accent2 bg-clip-text text-transparent">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-6">
                    {[
                      { icon: Facebook, href: companyData.socialMedia.facebook, color: 'hover:text-blue-600' },
                      { icon: Instagram, href: companyData.socialMedia.instagram, color: 'hover:text-pink-600' },
                      { icon: Twitter, href: companyData.socialMedia.twitter, color: 'hover:text-blue-400' },
                      { icon: BookHeart, href: companyData.socialMedia.pinterest, color: 'hover:text-red-600' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href={social.href}
                        className={`transition-colors duration-300 ${social.color}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="h-7 w-7" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Details */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center md:items-end space-y-4"
                >
                  <h3 className="text-xl font-serif tracking-wide bg-gradient-to-r from-accent1 
                               to-accent2 bg-clip-text text-transparent">
                    Contact Us
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-right 
                                space-y-2">
                    <motion.p 
                      whileHover={{ scale: 1.05, x: -5 }}
                      className="hover:text-accent1 transition-colors duration-300"
                    >
                      {companyData.contact.email}
                    </motion.p>
                    <motion.p 
                      whileHover={{ scale: 1.05, x: -5 }}
                      className="hover:text-accent1 transition-colors duration-300"
                    >
                      {companyData.contact.phone}
                    </motion.p>
                    <motion.p 
                      whileHover={{ scale: 1.05, x: -5 }}
                      className="hover:text-accent1 transition-colors duration-300"
                    >
                      {companyData.contact.address}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          </footer>

          {/* Scroll to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-accent1 
                         to-accent2 text-white shadow-lg hover:shadow-xl transition-all duration-300 
                         z-50"
              >
                <ChevronUp className="h-6 w-6" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
};

export default App;