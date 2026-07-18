import { motion } from 'motion/react';
import { User, MapPin, Sparkles, Code2, School } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="about" className="py-24 relative px-4 md:px-8">
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
            <User className="h-3.5 w-3.5 text-brand-orange" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange-light">Biography</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            About <span className="text-brand-orange">Me</span>
          </h2>
          <div className="h-[2px] w-12 bg-brand-orange mt-4 rounded-full" />
        </motion.div>

        {/* Contents Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Column: Image/Avatar Card */}
          <motion.div variants={itemVariants} className="md:col-span-5 flex flex-col justify-center">
            <div className="relative group rounded-2xl overflow-hidden glass-panel border-neutral-800 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
              {/* Outer hover border glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              {/* Profile Image with placeholder fallback */}
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-brand-black/80 border border-neutral-800/60 relative">
                <img
                  src="/src/assets/images/developer_avatar_1784357821226.jpg"
                  alt="Vinay Targotra Developer Profile"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-500 scale-102 hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to picsum if local image resolution has issues in compilation
                    e.currentTarget.src = 'https://picsum.photos/seed/vt-developer/600/600';
                  }}
                />
                
                {/* Tech overlay chip */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-brand-black/80 backdrop-blur-md border border-brand-orange/30 text-[10px] font-mono text-brand-orange-light font-bold flex items-center gap-1.5 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>BE_CSE_Y2</span>
                </div>
              </div>

              {/* Status footer inside image card */}
              <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <MapPin className="h-3.5 w-3.5 text-brand-orange" />
                <span>Vadodara, Gujarat, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Details */}
          <motion.div variants={itemVariants} className="md:col-span-7 flex flex-col justify-between gap-6">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-neutral-800/40 relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Sparkles className="h-12 w-12 text-brand-orange" />
              </div>

              <h3 className="font-display font-semibold text-xl sm:text-2xl text-white mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-orange" />
                Engineering Better Digital Realities
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                <p>
                  I'm <span className="text-white font-medium">Vinay Targotra</span>, a passionate computer science undergraduate at{' '}
                  <span className="text-brand-orange hover:underline font-normal">The Maharaja Sayajirao University of Baroda (MSU Baroda)</span>.
                  I focus on designing and engineering responsive, highly performant web architectures that solve real-world student and community challenges.
                </p>
                <p>
                  As an active member of the <span className="text-white font-medium">Web Team of Code Vimarsh Club</span>, I build custom web interfaces, coordinate coding hackathons, and contribute to standard open source utilities.
                </p>
                <p>
                  I believe software engineering is more than just translating logic into syntax — it's about crafting interactive, high-fidelity user environments. I constantly push myself to learn new frameworks, optimize render cycles, and write highly reusable, structured code.
                </p>
              </div>
            </div>

            {/* Academic & Club Bento Cells */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Cell 1: University */}
              <div className="glass-panel rounded-xl p-5 border-neutral-800/40 hover:border-brand-orange/10 transition-colors">
                <div className="flex items-center gap-2.5 mb-2.5 text-brand-orange">
                  <School className="h-4 w-4" />
                  <span className="font-mono text-xs font-bold tracking-wider uppercase text-neutral-400">University</span>
                </div>
                <h4 className="font-display font-semibold text-sm text-white">MSU Baroda</h4>
                <p className="text-xs text-neutral-400 font-light mt-0.5">Faculty of Technology & Engineering</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-brand-orange/10 text-brand-orange text-[10px] font-mono">CSE BE-II</span>
                  <span className="text-[11px] text-neutral-500 font-mono">Graduating 2028</span>
                </div>
              </div>

              {/* Cell 2: Club Experience */}
              <div className="glass-panel rounded-xl p-5 border-neutral-800/40 hover:border-brand-orange/10 transition-colors">
                <div className="flex items-center gap-2.5 mb-2.5 text-brand-orange">
                  <Code2 className="h-4 w-4" />
                  <span className="font-mono text-xs font-bold tracking-wider uppercase text-neutral-400">Club Activities</span>
                </div>
                <h4 className="font-display font-semibold text-sm text-white">Code Vimarsh</h4>
                <p className="text-xs text-neutral-400 font-light mt-0.5">Official Student CS Community</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-brand-orange/10 text-brand-orange text-[10px] font-mono">Web Team</span>
                  <span className="text-[11px] text-neutral-500 font-mono">Frontend Specialist</span>
                </div>
              </div>

            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
