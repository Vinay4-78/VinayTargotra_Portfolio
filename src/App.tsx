import Navbar from './components/Navbar';
import BackgroundEffect from './components/BackgroundEffect';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceSection from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-brand-orange selection:text-brand-black bg-brand-black text-neutral-200">
      {/* Interactive Canvas Particle & Glowing blobs background */}
      <BackgroundEffect />

      {/* Floating Shrinkable Glass Navbar */}
      <Navbar />

      <main className="relative z-10 w-full overflow-hidden">
        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
