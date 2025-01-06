import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-[80vh] flex items-center">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl font-bold mb-6 text-white"
            >
              AI Engineer
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Currently on a quest to make my program crash.... slightly less!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}