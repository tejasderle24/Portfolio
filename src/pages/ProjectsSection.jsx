// ProjectsSection.jsx
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PROJECTS } from '../utils/data';
import { ProjectCard } from '../components';
import { containerVariants, itemVariants } from '../utils/helper';

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 px-6 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-50 bg-blue-500" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-50 bg-purple-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-gray-500 mb-4"
          >
            Featured Work
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-light mb-6">
            Recent <span className="text-blue-500 font-medium">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto font-light"
          >
            A collection of projects that showcase my expertise in building modern web applications
            and solving complex problems.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;