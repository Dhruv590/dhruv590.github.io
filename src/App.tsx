import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { getBackgroundForPath } from './data/backgrounds';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const [currentBackground, setCurrentBackground] = useState(getBackgroundForPath(location.pathname));
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const newBackground = getBackgroundForPath(location.pathname);
    setIsTransitioning(true);

    const img = new Image();
    img.src = newBackground;
    img.onload = () => {
      setCurrentBackground(newBackground);
      setIsTransitioning(false);
    };
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed text-white flex flex-col"
      style={{
        backgroundImage: `url(${currentBackground})`,
        transition: isTransitioning ? 'opacity 0.3s ease-in-out' : 'none',
        opacity: isTransitioning ? 0.8 : 1
      }}
    >
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/projects" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Projects />
              </motion.div>
            } />
            <Route path="/resume" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Resume />
              </motion.div>
            } />
            <Route path="/experience" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Experience />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Contact />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;