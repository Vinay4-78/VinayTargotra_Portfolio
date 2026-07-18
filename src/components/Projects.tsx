import { motion } from 'motion/react';
import { FolderCode, Github, ExternalLink, Sparkles, Code } from 'lucide-react';
import { Project } from '../types';

const PROJECTS_DATA: Project[] = [
  {
    title: 'AlgoVis — Pathfinding visualizer',
    description: 'An interactive 2D grid visualizer demonstrating pathfinding and sorting algorithms (Dijkstra, A*, BFS, DFS) in real-time. Created to help fellow MSU CSE freshmen visually grasp complex graph search structures.',
    tech: ['React', 'CSS Grid', 'Tailwind CSS', 'Vite', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=600',
    github: 'https://github.com/vinaytargotra/algovis-pathfinder',
    live: 'https://algovis-demo.vinaytargotra.vercel.app',
    metric: 'Real-Time DFS/A* Matrix'
  },
  {
    title: 'DevScribe — Collaborative Document Sandbox',
    description: 'A modern, high-fidelity markdown documentation hub featuring real-time client state caching, dynamic theme previews, and document hierarchy trees. Ideal for developers hosting project notes.',
    tech: ['React', 'Node.js', 'Express', 'LocalStorage', 'Markdown-Editor'],
    image: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=600',
    github: 'https://github.com/vinaytargotra/devscribe-sandbox',
    live: 'https://devscribe.vinaytargotra.vercel.app',
    metric: 'Offline Caching Enabled'
  },
  {
    title: 'VimarshHub — Community Hackathon Engine',
    description: 'The centralized registration and peer matching platform for MSU Baroda student coding events. Organizes participant profiles, supports team mergers, and hosts automatic check-in gates.',
    tech: ['React', 'Express', 'Tailwind v4', 'REST APIs', 'Lucide Icons'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600',
    github: 'https://github.com/vinaytargotra/vimarsh-hub',
    live: 'https://code-vimarsh-msu.vercel.app',
    metric: 'Built for Code Vimarsh'
  },
  {
    title: 'GitRadar — Active Repository Dashboard',
    description: 'A terminal-styled dashboard tracking open-source contribution pull requests, commits, and active issue counts from Github APIs. Built with custom interactive statistics.',
    tech: ['React', 'GitHub API', 'Recharts', 'JetBrains Mono', 'SVG Rendering'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600',
    github: 'https://github.com/vinaytargotra/gitradar-dashboard',
    live: 'https://gitradar-stats.vinaytargotra.vercel.app',
    metric: 'Direct GitHub Integration'
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="projects" className="py-24 relative px-4 md:px-8 bg-brand-dark/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,107,0,0.02)_0%,rgba(0,0,0,0)_50%)] pointer-events-none" />

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
            <FolderCode className="h-3.5 w-3.5 text-brand-orange" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange-light">Creative Outputs</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Featured <span className="text-brand-orange">Projects</span>
          </h2>
          <div className="h-[2px] w-12 bg-brand-orange mt-4 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={idx}
              id={`project-card-${project.title.toLowerCase().split(' ')[0]}`}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group glass-panel rounded-2xl overflow-hidden border-neutral-800/40 hover:border-brand-orange/30 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between h-full transition-all duration-300 relative"
            >
              <div>
                {/* Banner Image */}
                <div className="relative h-48 w-full bg-neutral-950 overflow-hidden border-b border-neutral-900">
                  {/* Glass tint mask */}
                  <div className="absolute inset-0 bg-brand-black/40 z-10 group-hover:bg-brand-black/20 transition-colors duration-300" />
                  
                  {/* Subtle orange ambient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent opacity-60 z-10" />

                  <img
                    src={project.image}
                    alt={`${project.title} Banner`}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top floating metrics badge */}
                  <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded bg-brand-black/85 backdrop-blur-md border border-brand-orange/30 text-[10px] font-mono text-brand-orange-light flex items-center gap-1.5 font-bold shadow-md">
                    <Sparkles className="h-2.5 w-2.5 animate-pulse text-brand-orange" />
                    <span>{project.metric}</span>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center gap-1"
                      >
                        <Code className="h-2.5 w-2.5 text-brand-orange/60" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action footer */}
              <div className="px-6 pb-6 pt-4 border-t border-neutral-900/60 flex items-center justify-between mt-auto">
                <span className="text-xs font-mono text-neutral-500 font-medium">CS_STUDENT_LABS //</span>
                
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      id={`project-github-${idx}`}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-neutral-800 hover:border-brand-orange/30 bg-neutral-900/40 text-neutral-400 hover:text-white transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,107,0,0.1)]"
                      title="View Codebase"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      id={`project-live-${idx}`}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-brand-orange/20 hover:border-brand-orange bg-brand-orange/10 hover:bg-brand-orange hover:text-brand-black text-brand-orange transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,107,0,0.3)]"
                      title="Launch Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore more button calling Github */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            id="projects-github-cta"
            href="https://github.com/vinaytargotra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-800 hover:border-brand-orange bg-brand-black text-xs font-semibold tracking-wider uppercase text-neutral-400 hover:text-white transition-all duration-300"
          >
            <Github className="h-3.5 w-3.5 text-brand-orange" />
            <span>Explore More on GitHub</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
