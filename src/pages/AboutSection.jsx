import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { containerVariants, itemVariants } from '../utils/helper';
import { JOURNEY_STEPS, PASSIONS } from '../utils/data';
import SIGNATURE from '../assets/logo.svg';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const timelineInView = useInView(timelineRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const timelineVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Background Blurs */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-40 bg-blue-500" />
        <div className="absolute bottom-32 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-40 bg-purple-500" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <div>
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="text-center lg:text-left mb-10"
          >
            <motion.div
              variants={itemVariants}
              className="text-sm uppercase tracking-widest text-gray-500 mb-4"
            >
              Who Am I?
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-light mb-6">
              About <span className="text-blue-500 font-medium">Me</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="p-6 rounded-xl border bg-gray-800/40 border-gray-700"
          >
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed font-light text-gray-300"
            >
              I'm a passionate Full Stack Web Developer with hands-on experience in building
              responsive, dynamic web applications using modern technologies. My journey began with
              curiosity and has grown into a profession where I love solving real-world problems
              through clean and scalable code.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed font-light mt-4 text-gray-300"
            >
              With a strong foundation in the MERN stack, I have also worked with SQL, Tailwind CSS,
              and modern backend technologies like Express and Appwrite. When I'm not coding, I
              enjoy sipping <span className="text-yellow-500 font-medium">chai</span> and exploring
              new tech trends. 🚀
            </motion.p>

            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={itemVariants}
              className="mt-6 text-center lg:text-left"
            >
              <div className="text-sm text-gray-500 mb-1">
                Crafted with passion by
              </div>
              <img src={SIGNATURE} alt="signlogo" className="w-40 h-15 mx-auto lg:ml-0" />
              <div className="text-base font-medium text-blue-500 mt-1 pl-8">Tejas Derle Patil</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Section: Timeline */}
        <motion.div
          ref={timelineRef}
          initial="hidden"
          animate={timelineInView ? 'visible' : 'hidden'}
          variants={timelineVariants}
          className="relative"
        >
          <h3 className="text-2xl font-medium mb-6 text-left">My Developer Journey</h3>
          <div className="absolute left-6 top-10 bottom-0 w-px bg-gray-700"></div>
          <div className="space-y-8">
            {JOURNEY_STEPS.map((step, index) => (
              <motion.div
                key={`${step.year}-${step.title}-${index}`}
                variants={stepVariants}
                whileHover={{ x: 4 }}
                className="relative flex items-start space-x-6 group"
              >
                <div
                  className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                    bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 border border-gray-700
                    group-hover:border-blue-500"
                >
                  {step.icon && <step.icon size={20} className="text-blue-500" />}
                </div>

                <div
                  className="flex-grow p-4 rounded-xl border transition-all duration-300
                    bg-gray-800/50 border-gray-700 group-hover:border-blue-500 backdrop-blur-sm"
                >
                  {/* Title and Year */}
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-lg font-medium">{step.title}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-700 text-gray-300">
                      {step.year}
                    </span>
                  </div>

                  {/* Company name on new line */}
                  <h4 className="text-sm text-blue-500 mb-2">{step.company}</h4>

                  {/* Description */}
                  <p className="text-sm text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;