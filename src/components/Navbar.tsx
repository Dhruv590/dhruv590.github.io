import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 px-4 py-3 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          <span className="text-white">
            Dhruv Desai
          </span>
        </Link>
        
        <div className="flex gap-8">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="relative font-medium"
            >
              <span className="text-white hover:text-white/90 transition-colors">
                {label}
              </span>
              {location.pathname === path && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute left-0 right-0 h-0.5 bg-white bottom-[-4px]"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}