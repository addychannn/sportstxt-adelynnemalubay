import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Main_Navbar';
import CTA from './Pages/CTA';
import Features from './Pages/Features/Features';
import Footer from './Pages/Footer';
import Homepage from './Pages/Homepage/Homepage';
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* The "index" route is your default homepage */}
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <CTA />
      <Footer />
    </Router>
  );
}

export default App;