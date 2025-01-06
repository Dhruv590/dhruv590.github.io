import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-bold mb-12 text-[#E2E2E2]"
        >
          Contact
        </motion.h1>
        
        <div className="bg-[#1A1A1A] rounded-lg p-8">
          <p className="text-[#888888] mb-8 text-lg">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#E2E2E2]">Email</h2>
              <a href="mailto:dhruvscu@gmail.com" className="text-[#888888] hover:text-white transition-colors">
                dhruvscu@gmail.com
              </a>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#E2E2E2]">LinkedIn</h2>
              <a href="https://www.linkedin.com/in/dhruvdesai590/" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-white transition-colors">
                linkedin.com/in/dhruvdesai590
              </a>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#E2E2E2]">GitHub</h2>
              <a href="https://github.com/Dhruv590" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-white transition-colors">
                github.com/Dhruv590
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}