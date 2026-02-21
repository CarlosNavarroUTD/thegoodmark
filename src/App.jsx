import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import Billboards from '@/pages/Billboards';
import Vallas from '@/pages/Vallas';
import LEDScreens from '@/pages/LEDScreens';
import PuntosExhibicion from '@/pages/PuntosExhibicion';
import SuccessCases from '@/pages/SuccessCases';
import AboutUs from '@/pages/AboutUs';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Catalog from '@/pages/Catalog';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/billboards" element={<Billboards />} />
          <Route path="/vallas" element={<Vallas />} />
          <Route path="/led-screens" element={<LEDScreens />} />
          <Route path="/puntos-exhibicion" element={<PuntosExhibicion />} />
          <Route path="/success-cases" element={<SuccessCases />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;