import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, FileDown, Terminal, GraduationCap, Award } from 'lucide-react';

const TYPED_ROLES = [
  'Computer Science Engineer',
  'Web Team at Code Vimarsh Club',
  'React & Full-Stack Developer',
  'Creative Problem Solver'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect loop
  useEffect(() => {
    const fullText = TYPED_ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause at the end of typing
          timer = setTimeout(() => setIsDeleting(true), 1600);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % TYPED_ROLES.length);
          return;
        }
      }

      // Vary speed based on typing or deleting
      const speed = isDeleting ? 30 : 65;
      timer = setTimeout(handleType, speed);
    };

    timer = setTimeout(handleType, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 90;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-28 pb-16 overflow-hidden md:px-8"
    >
      {/* Background radial gradient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.03)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />

      {/* Main hero container */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Intro Pill Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-orange/20 bg-brand-black/60 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(255,107,0,0.05)]"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-ping" />
          <span className="flex h-2 w-2 rounded-full bg-brand-orange absolute" />
          <span className="text-[11px] font-mono font-medium tracking-widest uppercase text-brand-orange-light pl-2">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Big Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-6 italic uppercase select-none"
        >
          Vinay <br className="sm:hidden" />
          <span className="text-brand-orange bg-gradient-to-r from-brand-orange to-brand-orange-light bg-clip-text text-transparent orange-glow-text">
            Targotra
          </span>
        </motion.h1>

        {/* Dynamic Typewritten Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-10 sm:h-12 flex items-center justify-center font-mono text-base sm:text-lg md:text-2xl text-neutral-400 mb-8"
        >
          <span className="text-brand-orange font-bold mr-1">{'>'}</span>
          <span>{currentText}</span>
          <span className="w-1.5 h-5 bg-brand-orange ml-1 animate-pulse" />
        </motion.div>

        {/* Subtitle bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-neutral-400 font-sans font-light leading-relaxed mb-12 px-4"
        >
          Second-year <span className="text-white font-medium">Computer Science Engineering</span> student at{' '}
          <span className="text-brand-orange font-medium hover:underline cursor-pointer">
            MSU Baroda
          </span>
          . Building highly polished responsive web experiences, interactive systems, and solid software logic.
        </motion.p>

        {/* Call to Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 mb-16"
        >
          <button
            id="hero-cta-projects"
            onClick={() => handleScrollTo('projects')}
            className="group w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase bg-gradient-to-r from-brand-orange to-brand-orange-light text-brand-black flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.2)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] active:scale-95 transition-all duration-300"
          >
            <span>Explore Projects</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            id="hero-cta-resume"
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase border border-neutral-700 hover:border-brand-orange bg-brand-black/40 backdrop-blur-md text-white flex items-center justify-center gap-2 hover:bg-brand-orange/5 active:scale-95 transition-all duration-300"
          >
            <span>Let's Talk</span>
            <Terminal className="h-4 w-4 text-brand-orange" />
          </button>
        </motion.div>

        {/* Quick Bento/Glass Status Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl"
        >
          <div className="glass-panel rounded-2xl p-6 text-left border-neutral-800/40 hover:border-brand-orange/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange border border-brand-orange/15">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-bold">Education</span>
            </div>
            <h3 className="font-display font-semibold text-lg text-white mb-1">MSU Baroda</h3>
            <p className="text-xs text-neutral-400 font-light">BE-2 Computer Science Engineering</p>
          </div>

          <div className="glass-panel rounded-2xl p-6 text-left border-neutral-800/40 hover:border-brand-orange/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange border border-brand-orange/15">
                <Terminal className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-bold">Club Experience</span>
            </div>
            <h3 className="font-display font-semibold text-lg text-white mb-1">Web Team</h3>
            <p className="text-xs text-neutral-400 font-light">Code Vimarsh Club, MSU Baroda</p>
          </div>

          <div className="glass-panel rounded-2xl p-6 text-left border-neutral-800/40 hover:border-brand-orange/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange border border-brand-orange/15">
                <Award className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-bold">Interests</span>
            </div>
            <h3 className="font-display font-semibold text-lg text-white mb-1">Full-Stack & Systems</h3>
            <p className="text-xs text-neutral-400 font-light">Optimized responsive interfaces & tools</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
