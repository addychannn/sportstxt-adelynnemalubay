import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CTA />
      <Footer />
    </Router>
  );
}

export default App;