import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckSquare, Sparkles } from 'lucide-react';
import { Experience } from '../types';

const CLUB_EXPERIENCE: Experience[] = [
  {
    role: 'Web Team Member',
    organization: 'Code Vimarsh Club — MSU Baroda',
    duration: 'Sep 2025 – Present',
    description: [
      'Partnered with club leads to design, develop, and maintain responsive event web resources and participant dashboards for official workshops and coding competitions.',
      'Configured registration endpoints and live leaderboards for 2 major campus hackathons, successfully handling traffic from over 300+ students without service interruptions.',
      'Enhanced static pages and code layouts utilizing Tailwind CSS v4, improving asset optimization and mobile performance scores by approximately 25%.',
      'Conducted collaborative peer mentorship sessions for 50+ freshman engineering students, covering modern JavaScript modules, Git branching, and GitHub collaboration.'
    ],
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Git', 'GitHub', 'Team Collaboration']
  },
  {
    role: 'Technical Contributor & Coder',
    organization: 'MSU Baroda CSE Community',
    duration: 'Aug 2024 – Sep 2025',
    description: [
      'Active developer participant in regional hackathons and internal university technical challenges, focused on algorithmic problem solving in C++ and Python.',
      'Contributed minor UI enhancements and responsive fixes to internal departmental registration directories.',
      'Collaborated in local study groups on data structures, algorithmic puzzles, and structural database query patterns.'
    ],
    skills: ['C++', 'Data Structures', 'Algorithms', 'UI Design Basics']
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative px-4 md:px-8 bg-brand-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,107,0,0.015)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-orange/20 bg-brand-orange/5 mb-3">
            <Briefcase className="h-3.5 w-3.5 text-brand-orange" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange-light">Core Activities</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Club <span className="text-brand-orange">Experience</span>
          </h2>
          <div className="h-[2px] w-12 bg-brand-orange mt-4 rounded-full" />
        </motion.div>

        {/* Timeline Path */}
        <div id="experience-timeline" className="relative border-l-2 border-brand-orange/15 ml-4 sm:ml-6 space-y-12">
          {CLUB_EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline dot node */}
              <div className="absolute left-0 top-1.5 -translate-x-1/2 flex items-center justify-center">
                <span className="absolute h-5 w-5 rounded-full bg-brand-orange/30 animate-ping" />
                <span className="relative h-3 w-3 rounded-full bg-brand-orange border border-brand-black shadow-[0_0_10px_#FF6B00]" />
              </div>

              {/* Glass Card content */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border-neutral-800/40 hover:border-brand-orange/20 hover:bg-brand-dark/80 transition-all duration-300 relative group">
                {/* Accent glow line inside */}
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-transparent group-hover:bg-brand-orange rounded-l-2xl transition-all duration-300" />
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-brand-orange transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-neutral-300 font-medium">
                      {exp.organization}
                    </p>
                  </div>
                  
                  {/* Duration tag */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-black border border-neutral-800 text-[11px] font-mono text-neutral-400 w-fit">
                    <Calendar className="h-3 w-3 text-brand-orange" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                      <CheckSquare className="h-4 w-4 text-brand-orange shrink-0 mt-0.5 opacity-80" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-neutral-900/60">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-brand-orange/5 border border-brand-orange/10 text-brand-orange-light font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Absolute status pill inside card */}
                {idx === 0 && (
                  <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-orange/10 border border-brand-orange/25 text-[9px] font-mono text-brand-orange font-bold uppercase tracking-wider">
                    <Sparkles className="h-2.5 w-2.5 animate-pulse" />
                    <span>Current Role</span>
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
