import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyData, navigationLinks } from './Components/Data/Data';
import About from './Components/ABout/About';
import Home from './Components/Home/Home';
import Packages from './Components/PackagePlans/Packageplan';
import Services from './Components/ServicesPlan/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import SixteenDaysPlan from './Components/ServicesPlan/SixteenDaysPlan';

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

  // Custom style variables
  const styles = {
    primary: '#252422',    // Deep Forest Green
    secondary: '#f4f3ee',  // Cream
    accent: '#dda15e',     // Warm Orange/Brown
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <div style={{ 
          background: `linear-gradient(to bottom right, ${styles.secondary}, ${styles.secondary})`
        }} className="min-h-screen transition-colors duration-300">
          {/* Enhanced Navbar with Custom Colors */}
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full top-0 z-50 transition-all duration-500`}
            style={{
              backgroundColor: scrolled ? `${styles.primary}ee` : 'transparent',
              backdropFilter: scrolled ? 'blur(10px)' : 'none'
            }}
          >
            <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-between h-24">
                {/* Logo */}
                <motion.div 
                  className="flex-shrink-0 flex items-center space-x-4 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    <img
                      className="h-14 w-14 rounded-xl shadow-lg transition-all duration-300"
                      src={companyData.logo}
                      alt={companyData.name}
                    />
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                         style={{ backgroundColor: `${styles.accent}33` }} />
                  </div>
                  <span style={{ color: scrolled ? styles.secondary : styles.primary }} 
                        className="text-3xl font-serif font-bold tracking-wide transition-colors duration-300">
                    {companyData.name}
                  </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                  <div className="flex items-center space-x-8">
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
                          style={{ 
                            color: scrolled ? styles.secondary : styles.primary,
                          }}
                          className="px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 relative overflow-hidden group"
                        >
                          <span className="relative z-10">{link.name}</span>
                          <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                               style={{ backgroundColor: `${styles.accent}33` }} />
                        </Link>
                      </motion.div>
                    ))}
                    {/* <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={toggleTheme}
                      style={{ 
                        backgroundColor: `${styles.accent}22`,
                        color: scrolled ? styles.secondary : styles.primary
                      }}
                      className="p-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {isDarkMode ? 
                        <Sun className="h-6 w-6" /> : 
                        <Moon className="h-6 w-6" />
                      }
                    </motion.button> */}
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  style={{ 
                    backgroundColor: `${styles.accent}22`,
                    color: scrolled ? styles.secondary : styles.primary
                  }}
                  className="lg:hidden p-3 rounded-xl transition-all duration-300 shadow-lg"
                >
                  {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </motion.button>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ backgroundColor: `${styles.primary}fa` }}
                    className="lg:hidden absolute top-full left-0 w-full backdrop-blur-xl shadow-xl overflow-hidden rounded-b-2xl"
                  >
                    <div className="flex flex-col space-y-2 px-6 py-6">
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
                            style={{ color: styles.secondary }}
                            className="block px-6 py-4 rounded-xl transition-all duration-300 text-center text-lg font-medium hover:bg-white/10"
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
          <main className="max-w-[1920px] mx-auto px-6 lg:px-12 pt-32 pb-16">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sixteendays" element={<SixteenDaysPlan />} />
              </Routes>
            </AnimatePresence>
          </main>

          {/* Footer with Custom Colors */}
          <footer style={{ backgroundColor: styles.primary }} className="shadow-inner">
            <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Company Info */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="col-span-1 md:col-span-2 space-y-6"
                >
                  <div className="flex items-center space-x-4 group">
                    <img
                      className="h-12 w-12 rounded-xl shadow-lg transition-all duration-300"
                      src={companyData.logo}
                      alt={companyData.name}
                    />
                    <span style={{ color: styles.secondary }} 
                          className="text-2xl font-serif font-bold tracking-wide">
                      {companyData.name}
                    </span>
                  </div>
                  <p style={{ color: `${styles.secondary}cc` }} className="text-base leading-relaxed max-w-lg">
                    {companyData.description}
                  </p>
                  <div className="space-y-2">
                    <p style={{ color: styles.accent }} className="text-sm font-medium">
                      {companyData.contact.email}
                    </p>
                    <p style={{ color: styles.accent }} className="text-sm font-medium">
                      {companyData.contact.phone}
                    </p>
                  </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 style={{ color: styles.secondary }} className="text-xl font-bold">
                    Quick Links
                  </h3>
                  <div className="space-y-4">
                    {navigationLinks.map((link) => (
                      <motion.div
                        key={link.path}
                        whileHover={{ x: 5 }}
                        className="block"
                      >
                        <Link
                          to={link.path}
                          style={{ color: `${styles.secondary}cc` }}
                          className="hover:text-accent transition-colors duration-300"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Resources */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 style={{ color: styles.secondary }} className="text-xl font-bold">
                    Resources
                  </h3>
                  <div className="space-y-4">
                    {['Privacy Policy', 'Terms of Service', 'FAQ', 'Blog', 'Support'].map((item) => (
                      <motion.div
                        key={item}
                        whileHover={{ x: 5 }}
                        className="block"
                      >
                        <Link
                          to="#"
                          style={{ color: `${styles.secondary}cc` }}
                          className="hover:text-accent transition-colors duration-300"
                        >
                          {item}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Copyright */}
              <div className="mt-11 pt-8 border-t border-white/20 text-center">
                <p style={{ color: `${styles.secondary}99` }} className="text-sm">
                  © {new Date().getFullYear()} {companyData.name}. All rights reserved.
                </p>
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
                style={{ backgroundColor: styles.accent }}
                className="fixed bottom-8 right-8 p-4 rounded-xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 z-50"
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