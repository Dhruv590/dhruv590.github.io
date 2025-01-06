import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const handleClick = (githubLink?: string) => {
    if (githubLink) {
      window.open(githubLink, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden"
      onClick={() => handleClick(project.githubLink)}
      style={{ cursor: project.githubLink ? 'pointer' : 'default' }}
    >
      <div className="aspect-[4/3] mb-4">
        <img
          src={project.image}
          alt={project.title}
          loading={index < 3 ? "eager" : "lazy"}
          decoding="async"
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-xs text-white/90"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}