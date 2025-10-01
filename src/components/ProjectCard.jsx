import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className="group"
    >
      <div
        className="rounded-2xl overflow-hidden border transition-all duration-500
          bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
      >
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Featured
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="text-xs px-3 py-1 rounded-full font-medium bg-gray-800/80 text-gray-300 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4"
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0.5 }}
                whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors"
              >
                <FiExternalLink size={16} />
                <span>Live Demo</span>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0.5 }}
                whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors border bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
              >
                <FiGithub size={16} />
                <span>GitHub</span>
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-medium mb-3 group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed mb-4 text-gray-400">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;