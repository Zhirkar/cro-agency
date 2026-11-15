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
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F5E9DA] text-[#2E1606] relative">

      {/* Traditional Kurdish Deq (تاتۆی کوردی) Left Margin Ribbon */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 bottom-0 left-0 w-6 sm:w-12 md:w-16 lg:w-20 xl:w-24 z-30 opacity-30 sm:opacity-35 select-none transition-all duration-300"
        style={{
          backgroundImage: "url('/images/kurdish-deq.png')",
          backgroundRepeat: 'repeat-y',
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
        }}
      />

      {/* Traditional Kurdish Deq (تاتۆی کوردی) Right Margin Ribbon */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 bottom-0 right-0 w-6 sm:w-12 md:w-16 lg:w-20 xl:w-24 z-30 opacity-30 sm:opacity-35 select-none transition-all duration-300"
        style={{
          backgroundImage: "url('/images/kurdish-deq.png')",
          backgroundRepeat: 'repeat-y',
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
        }}
      />

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
