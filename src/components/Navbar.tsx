import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Shring condition
      setIsScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = NAV_ITEMS.map(item => item.href.slice(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold based on section offset
          if (rect.top <= 140 && rect.bottom >= 140) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90; // Navbar offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300">
        <motion.nav
          id="main-navbar"
          animate={{
            width: isScrolled ? '90%' : '100%',
            maxWidth: isScrolled ? '850px' : '1200px',
            paddingLeft: isScrolled ? '1.5rem' : '2rem',
            paddingRight: isScrolled ? '1.5rem' : '2rem',
            backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.85)' : 'rgba(10, 10, 10, 0.4)',
            borderColor: isScrolled ? 'rgba(255, 107, 0, 0.3)' : 'rgba(255, 107, 0, 0.1)',
            boxShadow: isScrolled ? '0 10px 25px -10px rgba(255, 107, 0, 0.25)' : 'none',
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex items-center justify-between rounded-full border backdrop-blur-xl py-3 text-white transition-shadow"
        >
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group font-display font-bold text-lg text-white"
          >
            <Terminal className="h-5 w-5 text-brand-orange transition-transform group-hover:rotate-12" />
            <span className="tracking-tight">
              vt<span className="text-brand-orange">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div id="desktop-menu" className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                id={`nav-link-${item.href.slice(1)}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 py-1 ${
                  activeSection === item.href.slice(1) ? 'text-brand-orange' : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <a
              id="nav-cta"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-brand-black transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.1)] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center p-2 rounded-full border border-brand-orange/20 bg-brand-black/40 text-gray-300 hover:text-white hover:border-brand-orange/40 transition-all duration-300"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 text-brand-orange" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Glass Menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-fullscreen-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 mx-4 p-6 rounded-2xl glass-panel border-brand-orange/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  id={`nav-link-mobile-${item.href.slice(1)}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border border-transparent transition-all duration-200 text-base font-bold ${
                    activeSection === item.href.slice(1)
                      ? 'bg-brand-orange/10 border-brand-orange/35 text-brand-orange'
                      : 'hover:bg-brand-orange/5 hover:border-brand-orange/15 text-neutral-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.href.slice(1) && (
                    <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                  )}
                </a>
              ))}
              <div className="h-[1px] bg-brand-orange/20 my-2" />
              <a
                id="nav-cta-mobile"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 rounded-xl font-bold tracking-wider text-sm uppercase bg-gradient-to-r from-brand-orange to-brand-orange-light text-brand-black hover:opacity-90 active:scale-95 transition-all"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
