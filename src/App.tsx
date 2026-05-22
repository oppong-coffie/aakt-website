import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Audience from './components/Audience';
import Problem from './components/Problem';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import DodoWidget from './components/DodoWidget';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 100,
    });
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Audience />
        <Pricing />
      </main>
      <Footer />
      <DodoWidget />
    </div>
  );
}

export default App;
