import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import Layout from './components/Layout';
import useScrollToTop from './hooks/useScrollToTop';
import ScrollToTop from './components/ScrollToTop';
import SkipToMain from './components/SkipToMain';
import PageTransition from './components/PageTransition';

// Lazy load all pages for better code splitting
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Reviews = React.lazy(() => import('./pages/Reviews'));
const Services = React.lazy(() => import('./pages/Services'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const ValetTrashService = React.lazy(() => import('./pages/ValetTrashService'));
const JunkRemovalService = React.lazy(() => import('./pages/JunkRemovalService'));
const PressureWashingService = React.lazy(() => import('./pages/PressureWashingService'));
const ValetTrashBenefits = React.lazy(() => import('./pages/ValetTrashBenefits'));
const VendorSelectionGuide = React.lazy(() => import('./pages/VendorSelectionGuide'));
const HiddenCostsTrashManagement = React.lazy(() => import('./pages/HiddenCostsTrashManagement'));
const SustainableWasteManagement = React.lazy(() => import('./pages/SustainableWasteManagement'));
const BulkWasteRemovalGuide = React.lazy(() => import('./pages/BulkWasteRemovalGuide'));
const NewConstructionValetTrashGuide = React.lazy(() => import('./pages/NewConstructionValetTrashGuide'));

// Loading component for lazy-loaded pages
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#049704]"></div>
  </div>
);

function ScrollToTopOnNavigate() {
  useScrollToTop();
  return null;
}

// Error Boundary Component
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err: Error) { console.error(err); }
  render() { 
    return this.state.hasError ? <div className="p-6">Something went wrong. Please refresh.</div> : this.props.children; 
  }
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <React.Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition><Home /></PageTransition>
          } />
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
          <Route path="/blog/how-to-choose-valet-trash-vendor" element={<PageTransition><VendorSelectionGuide /></PageTransition>} />
          <Route path="/blog/hidden-costs-in-house-trash-management" element={<PageTransition><HiddenCostsTrashManagement /></PageTransition>} />
          <Route path="/blog/sustainable-waste-management" element={<PageTransition><SustainableWasteManagement /></PageTransition>} />
          <Route path="/blog/bulk-waste-removal-guide" element={<PageTransition><BulkWasteRemovalGuide /></PageTransition>} />
          <Route path="/blog/new-construction-apartments-valet-trash-guide" element={<PageTransition><NewConstructionValetTrashGuide /></PageTransition>} />
        </Routes>
      </React.Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <SkipToMain />
        <ScrollToTopOnNavigate />
        <Layout>
          <main id="main-content">
            <Suspense fallback={<div className="p-6">Loading...</div>}>
              <AnimatedRoutes />
            </Suspense>
          </main>
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
      </ErrorBoundary>
  );
}

export default App;