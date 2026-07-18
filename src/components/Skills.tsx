import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Layout, Code2, CheckCircle } from 'lucide-react';
import { Skill } from '../types';

// Let's craft beautiful, precise inline SVG logos for each brand to guarantee crispness and custom theme integration
const LOGOS = {
  C: (
    <svg className="h-7 w-7" viewBox="0 0 306 345" fill="none">
      <g clipPath="url(#c__a)">
        <path
          fill="#00599C"
          d="M302.107 258.262c2.401-4.159 3.893-8.845 3.893-13.053V99.139c0-4.207-1.49-8.892-3.892-13.051L153 172.175l149.107 86.087Z"
        />
        <path
          fill="#004482"
          d="m166.25 341.193 126.5-73.034c3.644-2.104 6.956-5.737 9.357-9.897L153 172.175 3.893 258.263c2.4 4.159 5.714 7.793 9.357 9.896l126.5 73.034c7.287 4.208 19.213 4.208 26.5 0Z"
        />
        <path
          fill="#659AD2"
          d="M302.108 86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25 3.156c-7.287-4.208-19.213-4.208-26.5 0L13.25 76.19C5.962 80.397 0 90.725 0 99.14v146.069c0 4.208 1.491 8.894 3.893 13.053L153 172.175l149.108-86.088Z"
        />
        <path
          fill="#fff"
          d="M153 274.175c-56.243 0-102-45.757-102-102s45.757-102 102-102c36.292 0 70.139 19.53 88.331 50.968l-44.143 25.544c-9.105-15.736-26.038-25.512-44.188-25.512-28.122 0-51 22.878-51 51 0 28.121 22.878 51 51 51 18.152 0 35.085-9.776 44.191-25.515l44.143 25.543c-18.192 31.441-52.04 50.972-88.334 50.972Z"
        />
      </g>
      <defs>
        <clipPath id="c__a">
          <path fill="#fff" d="M0 0h306v344.35H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  Cpp: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.5 2C6.25 2 2 6.25 2 11.5S6.25 21 11.5 21c2.95 0 5.59-1.35 7.33-3.47l-1.47-1.14c-1.4 1.7-3.51 2.76-5.86 2.76-4.03 0-7.31-3.28-7.31-7.31S7.47 4.19 11.5 4.19c2.35 0 4.46 1.06 5.86 2.76l1.47-1.14C17.09 3.35 14.45 2 11.5 2zm9.15 8.12v1.88h-1.88v1.25h1.88v1.88h1.25v-1.88h1.88v-1.25h-1.88V10.12h-1.25zm-3.13 0v1.88h-1.88v1.25h1.88v1.88h1.25v-1.88h1.88v-1.25h-1.88V10.12h-1.25z" />
    </svg>
  ),
  Java: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 17.5c0 1.93 4.48 3.5 10 3.5s10-1.57 10-3.5-4.48-3.5-10-3.5-10 1.57-10 3.5zm18.33-7.79c-.58-.33-1.42-.51-2.33-.51h-.08c.5-.5.92-1.08 1.17-1.75.25-.67.25-1.33.08-1.92-.33-1.08-1.5-1.75-3.08-1.75-2.25 0-4.08 1.42-4.08 3.25 0 .58.17 1.08.42 1.5L9.67 9C9 9.17 8.17 9.42 7.5 9.75c-1.33.67-2.08 1.58-2.08 2.58 0 1.58 1.83 2.75 4.58 3.08l.58-1c-2-.33-3.08-1-3.08-1.75 0-.42.33-.83 1-1.17.67-.33 1.5-.58 2.5-.67-.33.5-.5.17-.5.17s2-2 4.17-3.25c.67-.42 1.33-.67 1.92-.67 1 0 1.67.42 1.83 1 .17.5.08 1-.17 1.5-.25.5-.67.92-1.17 1.25h.08c1.08 0 2.08.25 2.75.75.67.5 1 1.08 1 1.75 0 1.42-1.58 2.5-3.83 2.75l.5 1c2.75-.42 4.5-1.83 4.5-3.5 0-.92-.5-1.75-1.42-2.33z" />
    </svg>
  ),
  Python: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 6 2.52 6 6v2h6v1H5c-1.66 0-3 1.34-3 3v5c0 1.66 1.34 3 3 3h1c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V16h-6v-1h7c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3h-1V2zm-3 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 14c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
    </svg>
  ),
  JS: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm11.52 14.28c.45-.27.81-.63 1.05-1.08.24-.45.36-.96.36-1.53 0-.54-.12-1-.36-1.38-.24-.38-.6-.69-1.08-.93-.48-.24-1.05-.45-1.71-.63-.57-.15-.99-.3-1.26-.45-.27-.15-.45-.3-.54-.45-.09-.15-.12-.33-.12-.54 0-.24.06-.45.18-.63.12-.18.33-.3.6-.39.27-.09.63-.12 1.08-.12.57 0 1.05.09 1.44.27.39.18.66.45.81.81l1.53-.99c-.33-.51-.81-.93-1.44-1.23-.63-.3-1.41-.45-2.34-.45-.99 0-1.8.18-2.43.54-.63.36-1.08.84-1.35 1.44-.27.6-.42 1.29-.42 2.07 0 .84.15 1.5.45 2.01.3.51.72.9 1.26 1.17.54.27 1.17.48 1.89.66.57.15 1.02.3 1.35.45.33.15.54.33.66.54.12.21.18.45.18.72 0 .33-.09.6-.27.81-.18.21-.45.36-.81.45-.36.09-.81.12-1.35.12-.87 0-1.53-.15-1.98-.45-.45-.3-.75-.72-.9-1.26l-1.62.9c.27.69.75 1.23 1.44 1.62.69.39 1.59.57 2.7.57 1.17 0 2.13-.21 2.88-.63z" />
    </svg>
  ),
  React: (
    <svg className="h-7 w-7 animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  Node: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.5 13.8L12 19.6l-6.5-3.8V8.2L12 4.4l6.5 3.8v7.6z" />
    </svg>
  ),
  Express: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Tailwind: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 6.018C13.846 3.637 17.286 2 20 2c0 4.142-3.358 7.5-7.5 7.5-1.846 0-3.52-.667-4.818-1.768C6.31 9.387 3.91 11 2 11c0-4.142 3.358-7.5 7.5-7.5 1.053 0 2.049.217 2.954.518h-.454zM12 18.018C13.846 15.637 17.286 14 20 14c0 4.142-3.358 7.5-7.5 7.5-1.846 0-3.52-.667-4.818-1.768C6.31 21.387 3.91 23 2 23c0-4.142 3.358-7.5 7.5-7.5 1.053 0 2.049.217 2.954.518h-.454z" />
    </svg>
  ),
  Git: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.2 11.23l9.57-9.57a1.08 1.08 0 0 1 1.53 0l9.57 9.57a1.08 1.08 0 0 1 0 1.53l-9.57 9.57a1.08 1.08 0 0 1-1.53 0l-9.57-9.57a1.08 1.08 0 0 1 0-1.53zm9.3 5.4a2.26 2.26 0 1 0 1.6-3.8 2.24 2.24 0 0 0-.8-1.15V9a2.26 2.26 0 1 0-1.5 0v3a2.26 2.26 0 1 0 .7 3.63z" />
    </svg>
  ),
  GitHub: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  ),
};

const SKILLS_DATA: Skill[] = [
  // Languages
  { name: 'C', category: 'language', icon: LOGOS.C },
  { name: 'C++', category: 'language', icon: LOGOS.Cpp },
  { name: 'Java', category: 'language', icon: LOGOS.Java },
  { name: 'Python', category: 'language', icon: LOGOS.Python },
  { name: 'JavaScript', category: 'language', icon: LOGOS.JS },
  
  // Frameworks/Libraries
  { name: 'React', category: 'framework', icon: LOGOS.React },
  { name: 'Node.js', category: 'framework', icon: LOGOS.Node },
  { name: 'Express.js', category: 'framework', icon: LOGOS.Express },
  { name: 'Tailwind CSS', category: 'framework', icon: LOGOS.Tailwind },

  // Tools
  { name: 'Git', category: 'tool', icon: LOGOS.Git },
  { name: 'GitHub', category: 'tool', icon: LOGOS.GitHub }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'language' | 'framework' | 'tool'>('all');

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => activeTab === 'all' || skill.category === activeTab
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-24 relative px-4 md:px-8 bg-brand-dark/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,0,0.02)_0%,rgba(0,0,0,0)_50%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-orange/20 bg-brand-orange/5 mb-3">
            <Layout className="h-3.5 w-3.5 text-brand-orange" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange-light">Stack Overview</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Technical <span className="text-brand-orange">Skills</span>
          </h2>
          <div className="h-[2px] w-12 bg-brand-orange mt-4 rounded-full" />
        </motion.div>

        {/* Tab Switchers */}
        <div id="skills-tabs" className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['all', 'language', 'framework', 'tool'].map((tab) => (
            <button
              key={tab}
              id={`skills-tab-${tab}`}
              onClick={() => setActiveTab(tab as any)}
              className={`relative px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeTab === tab
                  ? 'border-brand-orange text-brand-black bg-brand-orange shadow-[0_0_20px_rgba(255,107,0,0.3)]'
                  : 'border-white/5 text-neutral-400 bg-white/4 backdrop-blur-md hover:border-brand-orange/30 hover:text-white'
              }`}
            >
              <span className="relative z-10">
                {tab === 'all' && 'All Stack'}
                {tab === 'language' && 'Languages'}
                {tab === 'framework' && 'Frameworks & Libs'}
                {tab === 'tool' && 'Version Control'}
              </span>
            </button>
          ))}
        </div>

        {/* Grid of Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeTab} // Forces animation replay on tab change
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.03, y: -2 }}
                className="group relative glass-panel rounded-2xl p-5 border-neutral-800/40 hover:border-brand-orange/30 hover:bg-brand-dark/80 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-brand-orange/[0.01] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                
                {/* Icon wrapper */}
                <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 group-hover:border-brand-orange/20 text-neutral-400 group-hover:text-brand-orange group-hover:bg-brand-orange/5 transition-all duration-300 mb-4 flex items-center justify-center">
                  {skill.icon}
                </div>

                {/* Name */}
                <h3 className="font-display font-medium text-sm text-neutral-300 group-hover:text-white transition-colors duration-200">
                  {skill.name}
                </h3>

                {/* Verification Checkmark indicator */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <CheckCircle className="h-3 w-3 text-brand-orange" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Meta stats/quote below grids */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-xs font-mono text-neutral-500"
        >
          <span className="text-brand-orange pr-2">#</span>
          <span>Constantly refining skills and seeking mastery through hands-on product engineering.</span>
        </motion.div>

      </div>
    </section>
  );
}
