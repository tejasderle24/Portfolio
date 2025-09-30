import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowDown, FaEnvelope } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import PROFILE_PI from '../assets/profile-image.jpg';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen transition-all duration-500 bg-gray-950 text-white">
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="relative min-h-screen px-8 pt-[100px] pb-20 overflow-hidden"
      >
        {/* Decorative Background Blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-10 bg-blue-500"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-3xl opacity-10 bg-purple-500"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Left Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Mobile Profile Image */}
            <motion.div
              variants={imageVariants}
              className="relative flex justify-center items-center mb-4 mt-4 md:order-1 lg:hidden"
            >
              <div className="relative">
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-gray-400 shadow-2xl relative z-10"
                >
                  <img src={PROFILE_PI} alt="Profile" className="w-full h-full object-cover" />
                </motion.div>

                {/* Rotating Rings */}
                <motion.div
                  animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, 360] }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-2xl border-2 border-blue-300"
                />
                <motion.div
                  animate={{ scale: [0.8, 1.2, 0.8], rotate: [360, 0] }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 0.5 }}
                  className="absolute inset-0 rounded-2xl border border-purple-300"
                />
              </div>
            </motion.div>

            <motion.div
              variants={textVariants}
              className="text-sm pt-2 uppercase tracking-wider text-gray-400 md:order-2"
            >
              Full Stack Developer
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold md:mt-4 leading-tight md:order-3"
            >
              <span className="text-white">Building digital </span>
              <span className="text-blue-500">experiences</span>
              <br />
              <span className="text-white">that matter</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 mb-1 max-w-xl font-light leading-relaxed mt-2 md:order-4"
            >
              I craft beautiful, functional web applications with modern technologies and thoughtful
              user experiences.
            </motion.p>

            {/* Mobile CTA */}
            <motion.div variants={itemVariants} className="mt-2 flex flex-wrap gap-4 md:hidden">
              <button
                onClick={() => scrollToSection('work')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-white text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Desktop CTA (circular) */}
            <motion.div variants={itemVariants} className="hidden md:flex gap-4 mt-2 md:order-4">
              <button
                onClick={() => scrollToSection('work')}
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition"
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Tech Tags */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex gap-1 md:gap-6 text-base text-gray-400 font-medium tracking-wide md:order-5"
            >
              {['REACT', 'NODEJS', 'JAVASCRIPT', 'MONGODB'].map((tech, i) => (
                <span key={i} className="md:mx-2">
                  {tech}
                  {i !== 3 && <span className="md:mx-2">.</span>}
                </span>
              ))}
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="mt-2 flex gap-6 md:order-6">
              {[
                { icon: FiGithub, link: 'https://github.com/tejasderle24' },
                { icon: FiLinkedin, link: 'https://linkedin.com/in/tejas-derle' },
                { icon: FaEnvelope, link: 'mailto:tejasderle24@gmail.com' },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="text-2xl p-2 rounded-full transition text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <item.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll down */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="lg:hidden mt-10 text-blue-500 flex flex-col items-center md:order-7"
            >
              <span className="text-xs mb-1">Scroll down</span>
              <FaArrowDown size={20} />
            </motion.div>
          </motion.div>

          {/* Right Profile Image (for large screens) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full lg:w-1/2 flex flex-col items-center"
          >
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex pt-10 mb-8 text-base gap-8 text-gray-400 font-medium tracking-wide"
            >
              {['REACT', 'NODEJS', 'TYPESCRIPT', 'MONGODB'].map((tech, i) => (
                <span key={i} className="mx-4">
                  {tech}
                  {i !== 3 && <span className="ml-2">•</span>}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="relative flex justify-center items-center hidden lg:flex"
            >
              <div className="relative">
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-72 h-72 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl relative z-10"
                >
                  <img src={PROFILE_PI} alt="Profile" className="w-full h-full object-cover" />
                </motion.div>

                {/* Rotating Rings */}
                <motion.div
                  animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, 360] }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                />
                <motion.div
                  animate={{ scale: [0.8, 1.2, 0.8], rotate: [360, 0] }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 0.5 }}
                  className="absolute inset-0 rounded-2xl border border-purple-400"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;