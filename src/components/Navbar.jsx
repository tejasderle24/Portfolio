import { AnimatePresence, motion } from 'motion/react';
import { FaCode, FaSun, FaTimes, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      style={{ opacity: 1 }}
      className="fixed top-0 w-full z-50 px-6 py-4 bg-gray-950/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
          <FaCode size={24} className="text-blue-500" />
          <span className="text-lg ml-1 font-semibold text-white">
            Tejas Derle Patil
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {['Home', 'Skills', 'Work', 'About', 'Contact'].map((item) => (
            <motion.button
              key={item}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm uppercase tracking-wider transition-colors text-gray-400 hover:text-white"
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full transition-colors text-gray-400 hover:text-white hover:bg-gray-800"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 rounded-lg px-6 py-4 bg-gray-900 border border-gray-800"
          >
            {['Home', 'Skills', 'Work', 'About', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-sm uppercase tracking-wider mb-2 transition-colors text-gray-400 hover:text-white"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;