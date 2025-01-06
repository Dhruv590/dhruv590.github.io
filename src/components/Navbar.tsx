import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-md"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            <span className="text-white">
              Dhruv Desai
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="relative font-medium group"
              >
                <span className="text-white/90 group-hover:text-white transition-colors">
                  {label}
                </span>
                {location.pathname === path && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 right-0 h-0.5 bg-white/90 bottom-[-4px]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white/90 hover:text-white p-2 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 mx-4 bg-black/80 backdrop-blur-lg rounded-lg shadow-xl md:hidden"
            >
              <div className="flex flex-col p-2">
                {links.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`py-3 px-4 text-white/90 hover:text-white rounded-md transition-colors ${
                      location.pathname === path ? 'bg-white/10' : 'hover:bg-white/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}