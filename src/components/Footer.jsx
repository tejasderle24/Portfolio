import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaHeart, FaArrowUp, FaEnvelope } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-50px' });

  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/tejasderle24',
      hoverColor: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/tejas-derle',
      hoverColor: 'hover:text-blue-300',
    },
    {
      name: 'Twitter',
      icon: FaXTwitter,
      url: 'https://x.com/tejasderle',
      hoverColor: 'hover:text-sky-300',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:tejasderle24@gmail.com',
      hoverColor: 'hover:text-green-300',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <footer
      ref={footerRef}
      className="relative pt-16 pb-20 px-4 text-center bg-gray-950 text-gray-100"
      style={{ y: scrollY }}
    >
      {/* Animated line */}
      <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          initial={{ width: '0%', opacity: 0 }}
          animate={isInView ? { width: '100%', opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-0 h-px w-32 blur-sm bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400"
          animate={{ x: ['-50%', 'calc(100vw + 50%)'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 6,
            ease: 'linear',
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        {/* Name and tagline */}
        <motion.div variants={itemVariants} className="space-y-3">
          <div className="inline-flex items-center gap-2 justify-center">
            <motion.div whileHover={{ rotate: 15 }} transition={{ type: 'spring', stiffness: 300 }}>
              <FaCode className="w-6 h-6 text-blue-400" />
            </motion.div>
            <h2 className="text-2xl font-semibold">Tejas Derle Patil</h2>
          </div>
          <p className="max-w-lg mx-auto text-sm text-gray-400">
            Crafting digital experiences with passion, precision, and a touch of magic.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="mt-8 flex justify-center gap-6">
          {socialLinks.map(({ name, icon: Icon, url, hoverColor }) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`text-2xl transition-colors duration-300 text-gray-400 ${hoverColor}`}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider with heart */}
        <motion.div
          variants={itemVariants}
          className="relative mt-12 flex items-center justify-center"
        >
          <span className="absolute left-0 w-full h-px bg-gray-700" />
          <motion.span
            className="relative z-10 px-4 bg-gray-950"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaHeart className="w-5 h-5 text-pink-400" />
          </motion.span>
        </motion.div>

        {/* Footer text */}
        <motion.div variants={itemVariants} className="mt-6 space-y-1 text-xs">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Tejas Derle Patil. All rights reserved.
          </p>
          <p className="text-gray-500">
            Built with React & Framer Motion • Designed with ❤️
          </p>
        </motion.div>

        {/* Back to top Button */}
        <motion.div variants={itemVariants} className="mt-10 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="rounded-full border text-sm font-medium transition-all px-6 py-2 text-white border-gray-600 hover:bg-gray-700/20"
          >
            <div className="flex items-center gap-2">
              <FaArrowUp className="w-4 h-4" />
              Back to top
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;