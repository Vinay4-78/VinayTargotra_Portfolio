import { motion } from 'motion/react';
import { Award, Trophy, GraduationCap, Github, Medal, Calendar } from 'lucide-react';
import { Achievement } from '../types';

const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: 'Winner - Best UI/UX Design',
    category: 'Hackathon',
    host: 'MSU Faculty Spark Hackathon',
    date: 'Feb 2026',
    description: 'Awarded first place in UI styling and experience mechanics for a smart municipal water-flow grid portal. Praised by regional judges for elegant glassmorphism and responsiveness.',
    highlight: 'Special Design Cup'
  },
  {
    title: 'Top 10 Finalist - Algorithmic CodeWars',
    category: 'Competition',
    host: 'Code Vimarsh Club, MSU Baroda',
    date: 'Nov 2025',
    description: 'Ranked 8th out of 160+ campus-wide engineering participants in a 4-hour speed programming challenge, solving optimized graph and tree problems in C++.',
    highlight: 'Top 5% Performer'
  },
  {
    title: 'Meta Front-End Developer Specialization',
    category: 'Certification',
    host: 'Coursera / Meta Career Credentials',
    date: 'Jul 2025',
    description: 'A comprehensive 9-course technical specialization covering React, HTML/CSS, UI principles, version control, and responsive mock-up development.',
    highlight: 'Professional Credential'
  },
  {
    title: 'Active Open Source Contributor',
    category: 'Milestone',
    host: 'GitHub Octoverse Program',
    date: 'May 2026',
    description: 'Successfully reached 150+ contributions on public student repositories, building utilities and fixing responsive frontends for local campus networks.',
    highlight: '150+ GitHub Contributions'
  }
];

export default function Achievements() {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Hackathon':
        return <Trophy className="h-5 w-5 text-brand-orange" />;
      case 'Competition':
        return <Medal className="h-5 w-5 text-brand-orange" />;
      case 'Certification':
        return <GraduationCap className="h-5 w-5 text-brand-orange" />;
      default:
        return <Github className="h-5 w-5 text-brand-orange" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative px-4 md:px-8 bg-brand-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,0,0.015)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-20 text-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-orange/20 bg-brand-orange/5 mb-3">
            <Award className="h-3.5 w-3.5 text-brand-orange" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange-light">Milestones</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Honors & <span className="text-brand-orange">Achievements</span>
          </h2>
          <div className="h-[2px] w-12 bg-brand-orange mt-4 rounded-full" />
        </motion.div>

        {/* Milestone Vertical timeline track */}
        <div id="achievements-timeline" className="relative ml-4 sm:ml-12 border-l-2 border-brand-orange/15 space-y-12">
          
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-12"
            >
              {/* Timeline marker icon */}
              <div className="absolute left-0 top-1.5 -translate-x-1/2 flex items-center justify-center">
                <span className="absolute h-9 w-9 rounded-full bg-brand-orange/10 border border-brand-orange/20 animate-pulse" />
                <span className="relative h-6 w-6 rounded-full bg-brand-black border border-brand-orange/40 flex items-center justify-center shadow-md">
                  {getIcon(item.category)}
                </span>
              </div>

              {/* Glass milestone box */}
              <div className="glass-panel rounded-2xl p-6 border-neutral-800/40 hover:border-brand-orange/20 hover:bg-brand-dark/60 transition-all duration-300 relative">
                
                {/* Floating Date tag */}
                <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-500 mb-2">
                  <Calendar className="h-3 w-3 text-brand-orange/60" />
                  <span>{item.date}</span>
                </div>

                {/* Milestone title */}
                <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>

                {/* Issuer/host organization */}
                <span className="inline-block text-xs text-brand-orange-light font-medium uppercase tracking-wider mb-3">
                  {item.host}
                </span>

                {/* Narrative */}
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* High-contrast highlight banner chip */}
                {item.highlight && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-orange/10 border border-brand-orange/20 text-[10px] font-mono text-brand-orange font-bold uppercase tracking-widest">
                    <span className="h-1 w-1 rounded-full bg-brand-orange" />
                    <span>{item.highlight}</span>
                  </div>
                )}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
