import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ValetTrashService from './pages/ValetTrashService';
import JunkRemovalService from './pages/JunkRemovalService';
import PressureWashingService from './pages/PressureWashingService';
import ValetTrashBenefits from './pages/ValetTrashBenefits';
import AboutUs from './pages/AboutUs';
import useScrollToTop from './hooks/useScrollToTop';
import ScrollToTop from './components/ScrollToTop';
import SkipToMain from './components/SkipToMain';
import PageTransition from './components/PageTransition';

function ScrollToTopOnNavigate() {
  useScrollToTop();
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/reviews" element={<PageTransition><Reviews /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:id" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="/services/valet-trash" element={<PageTransition><ValetTrashService /></PageTransition>} />
        <Route path="/services/junk-removal" element={<PageTransition><JunkRemovalService /></PageTransition>} />
        <Route path="/services/pressure-washing" element={<PageTransition><PressureWashingService /></PageTransition>} />
        <Route path="/blog/valet-trash-benefits" element={<PageTransition><ValetTrashBenefits /></PageTransition>} />
        <Route path="/about-us" element={<PageTransition><AboutUs /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <SkipToMain />
      <ScrollToTopOnNavigate />
      <Layout>
        <main id="main-content">
          <AnimatedRoutes />
        </main>
      </Layout>
      <ScrollToTop />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </Router>
  );
}

export default App;