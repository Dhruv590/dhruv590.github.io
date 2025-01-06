import { motion } from 'framer-motion';
import { experiences } from '../data/experiences';

export default function Experience() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-bold mb-12 text-white"
        >
          Work Experience
        </motion.h1>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-l-2 border-white/20 pl-8 relative"
            >
              <div className="absolute w-3 h-3 bg-white rounded-full left-[-7px] top-2" />
              <h3 className="text-2xl font-bold text-white mb-2">
                {experience.role}
              </h3>
              <p className="text-white/80 mb-2">
                {experience.company}
              </p>
              <p className="text-white/60 mb-4">
                {experience.period}
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}