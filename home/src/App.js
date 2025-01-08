import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyData, navigationLinks } from './Components/Data/Data';
import About from './Components/ABout/About';
import Home from './Components/Home/Home';
import Packages from './Components/PackagePlans/Packageplan';
import Services from './Components/ServicesPlan/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import SixteenDaysPlan from './Components/ServicesPlan/SixteenDaysPlan';
import DestinationWedding from './Components/ServicesPlan/DestinationWedding';

import companyLogo from "./assets/imgs/CultBlackLogo2.png"

import ServiceOneDesign from './Components/SecondaryServices/ServiceOne/ServiceOneDesign';
import ServiceTwoDesign from './Components/SecondaryServices/ServiceTwo/ServiceTwoDesign';
import ServiceThreeDesign from './Components/SecondaryServices/ServiceThree/serviceThreeDesign';
import ServiceFourDesign from './Components/SecondaryServices/ServiceFour/serviceFourDesign';
import ServiceFiveDesign from './Components/SecondaryServices/ServiceFive/serviceFiveDesign';
import ServiceSixDesign from './Components/SecondaryServices/ServiceSix/serviceSixDesign';
import ServiceSevenDesign from './Components/SecondaryServices/ServiceSeven/ServiceSevenDesign';
import ServiceEightDesign from './Components/SecondaryServices/ServiceEight/serviceEightDesign';
import ServiceNineDesign from './Components/SecondaryServices/ServiceNine/ServiceNineDesign';
import ServiceTenDesign from './Components/SecondaryServices/ServiceTen/ServiceTenDesign';
import InvitationServicesDesign from './Components/SecondaryServices/ServiceEleven/ServiceElevenDesign';
import ScrollToTop from './Components/Navigation/ScrollToTop';


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
    navbarcolor: '#f8f9fa'
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} font-garamond`}>
        <div style={{
          background: `linear-gradient(to bottom right, ${styles.secondary}, ${styles.secondary})`
        }} className="min-h-screen transition-colors duration-300">
          {/* Enhanced Navbar with Custom Colors */}
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full top-0 z-50 transition-all duration-500`}
            style={{
              backgroundColor: scrolled ? `${styles.navbarcolor}ee` : 'transparent',
              backdropFilter: scrolled ? 'blur(10px)' : 'none'
            }}
          >
            <div className="max-w-[1920px] mx-auto px-6 lg:px-12 font-garamond text-slate-950">
              <div className="flex items-center justify-between h-24">
                {/* Logo */}
                <motion.div
                  className="flex items-center space-x-6"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Plain company logo with hover effect */}
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={companyLogo}
                      alt={companyData.name}
                      className="h-16 w-24 object-contain"
                    />
                  </motion.div>

                  {/* Stylized company name */}
                  {/* <motion.div
                    className="relative"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span
                      style={{ color: scrolled ? styles.primary : styles.primary }}
                      className="text-4xl font-garamond font-bold tracking-wider relative"
                    >
                      {companyData.name}
                      <span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"
                      />
                    </span>
                  </motion.div> */}
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
                            color: scrolled ? styles.primary : styles.primary,
                          }}
                          className="px-6 py-3 rounded-xl font-garamond text-base font-medium transition-all duration-300 relative overflow-hidden group"
                        >
                          <span className="relative font-garamond z-10">{link.name}</span>
                          <div className="absolute inset-0 transform font-garamond scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
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
                    color: scrolled ? styles.primary : styles.primary
                  }}
                  className="lg:hidden p-3 rounded-xl transition-all font-garamond duration-300 shadow-lg"
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
                    className="lg:hidden absolute top-full left-0 w-full  shadow-xl overflow-hidden rounded-b-2xl"
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
                            className="block px-6 py-4 rounded-xl transition-all duration-300 text-center text-lg font-garamond font-medium hover:bg-white/10"
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
          <main className="max-w-[1920px] mx-auto px-6 lg:px-12 pt-24 pb-16 font-garamond">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sixteendays" element={<SixteenDaysPlan />} />
                <Route path="/destination-wedding" element={<DestinationWedding />} />
                
                <Route path="/service-one" element={<ServiceOneDesign />} />
                <Route path="/service-two" element={<ServiceTwoDesign />} />
                <Route path="/service-three" element={<ServiceThreeDesign />} />
                <Route path="/service-four" element={<ServiceFourDesign />} />
                <Route path="/service-five" element={<ServiceFiveDesign />} />
                <Route path="/service-six" element={<ServiceSixDesign />} />
                <Route path="/service-seven" element={<ServiceSevenDesign />} />
                <Route path="/service-eight" element={<ServiceEightDesign />} />
                <Route path="/service-nine" element={<ServiceNineDesign />} />
                <Route path="/service-ten" element={<ServiceTenDesign />} />
                <Route path="/service-eleven" element={<InvitationServicesDesign />} />
              </Routes>
            </AnimatePresence>
          </main>

          {/* Footer with Custom Colors */}
          <footer style={{ backgroundColor: styles.primary }} className="shadow-inner font-garamond">
            <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Company Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="col-span-1 md:col-span-2 space-y-6 font-garamond"
                >
                  <div className="flex items-center space-x-4 group">
                    <img
                      className="h-14 w-24 rounded-xl shadow-lg font-garamond transition-all duration-300"
                      src={companyData.logo}
                      alt={companyData.name}
                    />
                    {/* <span style={{ color: styles.secondary }}
                      className="text-2xl font-garamond font-bold tracking-wide">
                      {companyData.name}
                    </span> */}
                  </div>
                  <p style={{ color: `${styles.secondary}cc` }} className="text-base font-garamond leading-relaxed max-w-lg">
                    {companyData.description}
                  </p>
                  <div className="space-y-2">
                    <p style={{ color: styles.accent }} className="text-sm font-medium font-garamond">
                      {companyData.contact.email}
                    </p>
                    <p style={{ color: styles.accent }} className="text-sm font-medium font-garamond">
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
                  <h3 style={{ color: styles.secondary }} className="text-xl font-garamond font-bold">
                    Quick Links
                  </h3>
                  <div className="space-y-4 font-garamond">
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
                  className="space-y-6 font-garamond"
                >
                  <h3 style={{ color: styles.secondary }} className="text-xl font-garamond font-bold">
                    Resources
                  </h3>
                  <div className="space-y-4 font-garamond">
                    {['Terms of Service', 'FAQ', 'Support'].map((item) => (
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
              <div className="mt-11 pt-8 border-t border-white/20 font-garamond text-center">
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