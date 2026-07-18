import { motion } from 'motion/react';
import { ArrowUp, Terminal, Code } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-brand-black border-t border-neutral-900 py-12 px-4 md:px-8 overflow-hidden">
      {/* Subtle bottom glowing blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[10vw] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.03)_0%,rgba(0,0,0,0)_70%)] filter blur-[30px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Logo and metadata */}
        <div className="flex items-center gap-2.5 font-display text-sm text-neutral-400">
          <Terminal className="h-4 w-4 text-brand-orange" />
          <span>
            vt<span className="text-brand-orange font-bold">.dev</span>
          </span>
          <span className="text-neutral-700">|</span>
          <span className="text-neutral-500 font-mono text-xs">
            MSU CSE Student Portfolio
          </span>
        </div>

        {/* Copyright notice */}
        <div className="text-center md:text-left text-xs font-mono text-neutral-600">
          <span>&copy; {currentYear} Vinay Targotra. Crafted with React & Tailwind 4.0</span>
        </div>

        {/* Back to top action */}
        <motion.button
          id="footer-back-to-top"
          onClick={handleScrollToTop}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full border border-neutral-800 hover:border-brand-orange bg-brand-black/80 text-brand-orange transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.02)] hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>

      </div>
    </footer>
  );
}
