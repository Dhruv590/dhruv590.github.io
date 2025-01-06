import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-8 mt-16 bg-gradient-to-t from-black/20 via-black/10 to-transparent backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-white text-sm">
          Made with ❤️ © {new Date().getFullYear()}
        </p>
      </div>
    </motion.footer>
  );
}