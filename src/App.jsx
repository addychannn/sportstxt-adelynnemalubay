import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/Main_Navbar';
import CTA from './Pages/CTA';
import Features from './Pages/Features/Features';
import Footer from './Pages/Footer';
import Homepage from './Pages/Homepage/Homepage';
import ContactUs from './Pages/ContactUs/ContactUs';
import AboutUs from './Pages/About/index';
import NotFound from './Pages/NotFound';

function AppContent() {
  const location = useLocation();
  
  const showExtraContent = ['/', '/features', '/about', '/contact'].includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {showExtraContent && (
        <>
          <CTA />
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;