import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [preselectedService, setPreselectedService] = useState('');

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F5E9DA] text-[#2E1606] relative bg-grid-pattern">
      {/* Subtle atmospheric paper grain */}
      <div className="pointer-events-none fixed inset-0 bg-noise z-50 opacity-50" />

      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <ServicesSection onSelectService={setPreselectedService} />
        <ProcessSection />
        <ContactSection preselectedService={preselectedService} />
      </main>

      <Footer />
    </div>
  );
}
