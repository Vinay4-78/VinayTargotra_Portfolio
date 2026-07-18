import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Send, Terminal, ShieldCheck, RefreshCw } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const simulateLogs = async () => {
    const logs = [
      'Initializing secure SMTP socket...',
      'Validating email credentials... OK',
      'Formatting message payload with JSON stream...',
      'Routing payload packet to vija6312@gmail.com...',
      'Secure transaction finalized. SMTP Status: 250 Sent Successfully.'
    ];

    setTerminalLogs([]);
    for (let i = 0; i < logs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 450));
      setTerminalLogs((prev) => [...prev, logs[i]]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('sending');
    await simulateLogs();
    setStatus('success');
  };

  const handleReset = () => {
    setFormState({ name: '', email: '', message: '' });
    setTerminalLogs([]);
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-24 relative px-4 md:px-8 bg-brand-dark/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,107,0,0.03)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />

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
            <Mail className="h-3.5 w-3.5 text-brand-orange" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange-light">Get In Touch</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Contact <span className="text-brand-orange">Me</span>
          </h2>
          <div className="h-[2px] w-12 bg-brand-orange mt-4 rounded-full" />
        </motion.div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct info & social connections */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-neutral-800/40 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display font-semibold text-xl text-white mb-3">
                  Let's Build Something Great
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                  Whether you have an interesting hackathon project, open source collaboration, or freelance development opportunity, my inbox is always open.
                </p>

                {/* Direct Credentials info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5 group">
                    <div className="p-3 rounded-xl bg-brand-orange/5 border border-brand-orange/15 text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-all">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-bold">Email</p>
                      <a href="mailto:vija6312@gmail.com" className="text-sm text-neutral-200 hover:text-brand-orange transition-colors">
                        vija6312@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 group">
                    <div className="p-3 rounded-xl bg-brand-orange/5 border border-brand-orange/15 text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-all">
                      <Terminal className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-bold">Current Focus</p>
                      <p className="text-sm text-neutral-200">
                        CSE Undergraduate & Web Contributor
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glowing Social Buttons */}
              <div className="pt-8 border-t border-neutral-900/60 mt-8">
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-bold mb-4">Connect on Networks</p>
                
                <div className="flex items-center gap-3">
                  <a
                    id="contact-social-github"
                    href="https://github.com/vinaytargotra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-11 w-11 rounded-xl border border-neutral-800 hover:border-brand-orange bg-brand-black/40 text-neutral-400 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.02)] hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:-translate-y-1"
                    title="GitHub Portfolio"
                  >
                    <Github className="h-5 w-5" />
                  </a>

                  <a
                    id="contact-social-linkedin"
                    href="https://linkedin.com/in/vinay-targotra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-11 w-11 rounded-xl border border-neutral-800 hover:border-brand-orange bg-brand-black/40 text-neutral-400 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.02)] hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:-translate-y-1"
                    title="LinkedIn Network"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>

                  <a
                    id="contact-social-email"
                    href="mailto:vija6312@gmail.com"
                    className="flex items-center justify-center h-11 w-11 rounded-xl border border-neutral-800 hover:border-brand-orange bg-brand-black/40 text-neutral-400 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.02)] hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:-translate-y-1"
                    title="Compose Direct Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Working Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-neutral-800/40 relative h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form
                    key="contact-form"
                    id="contact-submission-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-widest font-bold mb-2">
                        Your Name
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        disabled={status === 'sending'}
                        placeholder="e.g. Alexis Carter"
                        className="w-full px-4 py-3 rounded-xl bg-brand-black/40 border border-neutral-800 focus:border-brand-orange text-sm text-white placeholder-neutral-600 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(255,107,0,0.1)] focus:bg-brand-black/80"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-widest font-bold mb-2">
                        Email Address
                      </label>
                      <input
                        id="contact-input-email"
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        disabled={status === 'sending'}
                        placeholder="e.g. alexis@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-brand-black/40 border border-neutral-800 focus:border-brand-orange text-sm text-white placeholder-neutral-600 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(255,107,0,0.1)] focus:bg-brand-black/80"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-widest font-bold mb-2">
                        Detailed Message
                      </label>
                      <textarea
                        id="contact-input-message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        required
                        disabled={status === 'sending'}
                        rows={4}
                        placeholder="Write your brief message here..."
                        className="w-full px-4 py-3 rounded-xl bg-brand-black/40 border border-neutral-800 focus:border-brand-orange text-sm text-white placeholder-neutral-600 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(255,107,0,0.1)] focus:bg-brand-black/80 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={status === 'sending' || !formState.name || !formState.email || !formState.message}
                      className="group w-full py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase bg-gradient-to-r from-brand-orange to-brand-orange-light text-brand-black flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.15)] hover:shadow-[0_0_25px_rgba(255,107,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed active:scale-98 transition-all duration-300"
                    >
                      {status === 'sending' ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          <span>Routing Socket Packets...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Success Terminal view
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6 text-center"
                  >
                    {/* Glowing Check icon */}
                    <div className="flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-brand-orange/10 border border-brand-orange flex items-center justify-center text-brand-orange shadow-[0_0_25px_rgba(255,107,0,0.3)]">
                        <ShieldCheck className="h-8 w-8" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-xl text-white">Transmission Successful</h4>
                      <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                        Thank you, <span className="text-brand-orange font-medium">{formState.name}</span>. Your details are registered and processed correctly.
                      </p>
                    </div>

                    {/* Simulating developer terminals logs */}
                    <div className="bg-brand-black/80 rounded-xl p-4 text-left border border-neutral-900 font-mono text-[10px] sm:text-xs leading-relaxed max-w-lg mx-auto">
                      <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-neutral-900 text-neutral-500 font-bold">
                        <Terminal className="h-3.5 w-3.5 text-brand-orange" />
                        <span>vinay_smtp_compiler.log</span>
                      </div>
                      <div className="space-y-1 text-neutral-400">
                        {terminalLogs.map((log, idx) => (
                          <div key={idx} className="flex gap-2">
                            <span className="text-neutral-600">[{idx + 1}]</span>
                            <span>{log}</span>
                          </div>
                        ))}
                        {terminalLogs.length < 5 && (
                          <div className="flex items-center gap-1.5 text-brand-orange">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-ping" />
                            <span>compiling streams...</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Reset Button */}
                    <button
                      id="contact-reset-btn"
                      onClick={handleReset}
                      className="px-4 py-2 rounded-full border border-neutral-800 hover:border-brand-orange text-[10px] font-mono uppercase tracking-widest text-neutral-400 hover:text-white bg-brand-black/40 transition-colors"
                    >
                      New Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
