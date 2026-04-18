/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Users, 
  Lightbulb, 
  Calendar, 
  ShieldCheck, 
  Target, 
  MessageSquare, 
  Library, 
  UserPen,
  ArrowRight,
  Clock,
  ListCheck,
  Star
} from 'lucide-react';
import { PROGRAM_DATA } from './data.ts';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif text-brand-secondary uppercase tracking-tighter mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-text-main/60 max-w-2xl mx-auto uppercase text-xs tracking-[2px]"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      className="h-px bg-brand-secondary/30 w-24 mx-auto mt-8"
    />
  </div>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ background: "rgba(255,255,255,0.05)" }}
    className={`bg-card-bg border border-card-border rounded-[2px] p-6 transition-colors ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-brand-primary/90 backdrop-blur-md z-50 border-b border-brand-secondary/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-end gap-10">
          <div className="flex items-end gap-4">
            <h1 className="font-serif text-4xl font-normal text-text-main uppercase leading-none">
              Youth <span className="accent-text">of</span> Renaissance
            </h1>
            <p className="text-[10px] tracking-[2px] opacity-50 uppercase mb-1 hidden sm:block">
              Sela School Muslim Youth Initiative
            </p>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-bold text-text-main/50 uppercase tracking-[2px]">
            <a href="#about" className="hover:text-brand-secondary transition-colors">Vision</a>
            <a href="#program" className="hover:text-brand-secondary transition-colors">Cycle</a>
            <a href="#curriculum" className="hover:text-brand-secondary transition-colors">Curriculum</a>
            <a href="#roles" className="hover:text-brand-secondary transition-colors">Roles</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6 border-b border-card-border bg-[radial-gradient(circle_at_20%_30%,_rgba(196,164,132,0.05),_transparent)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_400px] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="accent-text text-xl mb-6">
              Empowering the Next Generation
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-text-main leading-[0.9] mb-8 uppercase">
              RENAISSANCE <span className="text-brand-secondary">INITIATIVE</span>
            </h1>
            <p className="text-lg text-text-main/60 mb-10 leading-relaxed font-light max-w-xl">
              {PROGRAM_DATA.vision}
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <button className="bg-brand-secondary text-brand-primary px-10 py-4 rounded-[2px] font-bold uppercase text-xs tracking-[2px] hover:bg-white transition-colors">
                Inquire Now
              </button>
              <div className="text-[11px] border-l border-brand-secondary/30 pl-4 uppercase tracking-[2px] opacity-50">
                Academic Year<br/>2024-2025
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:block"
          >
            <Card className="!p-0 overflow-hidden !rounded-none border-brand-secondary/20">
               <img 
                src="https://picsum.photos/seed/renaissance/800/1000?grayscale" 
                alt="Youth reading" 
                className="w-full h-auto opacity-70"
                referrerPolicy="no-referrer"
              />
            </Card>
          </motion.div>
        </div>
      </header>

      {/* Objectives Section */}
      <section id="about" className="py-24 bg-brand-primary border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Program Core" 
            subtitle="Architecting a generation of confident Muslim leaders."
          />
          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <div className="text-[10px] text-brand-secondary font-bold uppercase tracking-[2px] mb-4">Focus 01</div>
              <h4 className="font-serif text-xl mb-4 uppercase">Critical Thinking</h4>
              <p className="text-text-main/50 text-xs leading-loose">Equipping youth to analyze contemporary challenges through an Islamic lens.</p>
            </Card>
            <Card>
              <div className="text-[10px] text-brand-secondary font-bold uppercase tracking-[2px] mb-4">Focus 02</div>
              <h4 className="font-serif text-xl mb-4 uppercase">Leadership</h4>
              <p className="text-text-main/50 text-xs leading-loose">Building a generation of confident speakers and community change-makers.</p>
            </Card>
            <Card>
              <div className="text-[10px] text-brand-secondary font-bold uppercase tracking-[2px] mb-4">Focus 03</div>
              <h4 className="font-serif text-xl mb-4 uppercase">Academic</h4>
              <p className="text-text-main/50 text-xs leading-loose">Developing a lifelong habit of reading and knowledge acquisition.</p>
            </Card>
            <Card>
              <div className="text-[10px] text-brand-secondary font-bold uppercase tracking-[2px] mb-4">Focus 04</div>
              <h4 className="font-serif text-xl mb-4 uppercase">Heritage</h4>
              <p className="text-text-main/50 text-xs leading-loose">Deepening the collection to Islamic values and reading culture.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Roadmap */}
      <section id="program" className="py-24 bg-brand-primary border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="The Monthly Cycle" subtitle="A structured path to intellectual and spiritual mastery." />
          <div className="grid md:grid-cols-[1fr_350px] gap-8">
            <Card className="flex flex-col">
              <div className="flex justify-between mt-8 mb-12 px-10">
                {PROGRAM_DATA.schedule.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center relative flex-1 group">
                    {idx < PROGRAM_DATA.schedule.length - 1 && (
                      <div className="absolute top-4 left-[60%] w-full h-px bg-brand-secondary/30 hidden sm:block" />
                    )}
                    <div className="w-10 h-10 border border-brand-secondary rounded-full flex items-center justify-center text-brand-secondary text-[11px] font-bold z-10 bg-brand-primary mb-4 group-hover:bg-brand-secondary group-hover:text-brand-primary transition-colors">
                      0{item.week}
                    </div>
                    <div className="text-[10px] font-bold text-text-main uppercase tracking-[2px] mb-2">{item.title}</div>
                    <div className="text-[10px] text-text-main/40 uppercase tracking-wider max-w-[120px] leading-tight">{item.detail}</div>
                  </div>
                ))}
              </div>

              <div className="mt-auto border-t border-brand-secondary/20 pt-10">
                <h3 className="text-[11px] text-brand-secondary uppercase tracking-[2px] font-bold mb-8">Weekly Review Structure</h3>
                <div className="bg-brand-secondary/5 border-l-2 border-brand-secondary p-8 space-y-4">
                  {PROGRAM_DATA.bookReviewStructure.map((step, idx) => (
                    <div key={idx} className="flex justify-between items-end border-b border-dotted border-white/10 pb-2">
                       <span className="text-xs uppercase tracking-wider text-text-main/70">{step.time} &bull; {step.activity}</span>
                       <span className="accent-text text-[13px]">{step.description ? "Analysis" : "Closing"}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            
            <div className="space-y-4">
              <Card className="!bg-brand-secondary !text-brand-primary">
                 <div className="text-[10px] font-bold uppercase tracking-[2px] opacity-70 mb-2">Target Initiative</div>
                 <div className="font-serif text-3xl mb-1">{PROGRAM_DATA.target.grades}</div>
                 <p className="text-[11px] uppercase tracking-wider opacity-60">{PROGRAM_DATA.target.capacity}</p>
              </Card>

              <Card className="flex-grow bg-white/5 border-white/10">
                <div className="text-[10px] font-bold text-brand-secondary uppercase tracking-[2px] mb-6">Discussion Themes</div>
                <div className="space-y-3">
                  {PROGRAM_DATA.panelTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <div className="w-1 h-1 bg-brand-secondary rotate-45" />
                      <span className="text-[11px] uppercase tracking-wider text-text-main/70 group-hover:text-text-main transition-colors">{topic}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-24 bg-brand-primary border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Curriculum" 
            subtitle="Categorized path for intellectual progression."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {PROGRAM_DATA.booklist.map((category, idx) => (
              <Card key={idx} className="!p-0 border-none bg-white/5 border border-white/5 overflow-hidden">
                <div className="p-8 border-b border-white/5">
                  <div className="text-[10px] font-bold text-brand-secondary uppercase tracking-[3px] mb-2">{category.level}</div>
                  <h3 className="text-4xl font-serif text-text-main lowercase italic tracking-tighter">Level {idx + 1}</h3>
                </div>
                <div className="p-8 space-y-4">
                  {category.books.map((book, bIdx) => (
                    <div key={bIdx} className="flex flex-col border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-xs text-brand-secondary font-bold uppercase tracking-widest text-[9px]">{category.level}</span>
                      <span className="text-[13px] text-text-main font-medium uppercase tracking-wider">{book}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section (Stats Layout) */}
      <section id="roles" className="py-24 bg-brand-primary">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                  <div className="card stat-box p-10 bg-white/5 border border-white/5 text-center flex flex-col items-center justify-center">
                      <span className="text-4xl accent-text mb-2">05</span>
                      <span className="text-[10px] uppercase font-bold tracking-[2px] opacity-40">Core Skills Developed</span>
                  </div>
                  <div className="card stat-box p-10 bg-white/5 border border-white/5 text-center flex flex-col items-center justify-center">
                      <span className="text-4xl font-serif text-brand-secondary mb-2 italic">Rotational</span>
                      <span className="text-[10px] uppercase font-bold tracking-[2px] opacity-40">Leadership Roles</span>
                  </div>
                  <div className="card stat-box p-10 bg-white/5 border border-white/5 text-center flex flex-col items-center justify-center">
                      <span className="text-4xl accent-text mb-2 tracking-tighter">60-90m</span>
                      <span className="text-[10px] uppercase font-bold tracking-[2px] opacity-40">Session Duration</span>
                  </div>
                  <div className="card stat-box p-10 bg-brand-secondary text-brand-primary text-center flex flex-col items-center justify-center">
                      <span className="text-4xl font-serif font-black uppercase mb-2">Inquire</span>
                      <span className="text-[10px] uppercase font-bold tracking-[2px] opacity-70">Join the Initiative</span>
                  </div>
              </div>

              <div className="grid md:grid-cols-[400px_1fr] gap-20 items-start">
                  <div>
                    <h2 className="text-4xl font-serif text-text-main mb-6 uppercase tracking-tight">Leadership is <span className="accent-text">Service</span></h2>
                    <p className="text-text-main/50 text-sm leading-relaxed mb-10">
                        The program leverages peer accountability and rotational management to build practical capacity.
                    </p>
                    <div className="bg-brand-secondary/5 border border-brand-secondary/20 p-8">
                        <h4 className="text-[10px] font-bold text-brand-secondary uppercase tracking-[2px] mb-4 underline underline-offset-8 decoration-brand-secondary/30">Guidelines & Rules</h4>
                        <div className="space-y-4">
                            {PROGRAM_DATA.guidelines.map((rule, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-brand-secondary" />
                                    <span className="text-[11px] uppercase tracking-wide text-white/70">{rule}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {PROGRAM_DATA.roles.map((role, idx) => (
                        <Card key={idx}>
                             <h4 className="accent-text text-lg mb-2">{role.role}</h4>
                             <p className="text-[10px] text-text-main/40 uppercase leading-relaxed tracking-wider">{role.description}</p>
                        </Card>
                    ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-primary text-text-main py-20 border-t border-card-border overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
               <h2 className="text-4xl font-serif text-text-main mb-2 uppercase tracking-tighter">
                Youth <span className="accent-text text-3xl italic">of</span> <span className="text-brand-secondary">Renaissance</span>
               </h2>
               <p className="text-[10px] tracking-[4px] uppercase opacity-40 mb-10">Sela School Muslim Youth Initiative</p>
               <div className="flex gap-4">
                  <button className="bg-white text-brand-primary text-[10px] font-bold uppercase tracking-[2px] px-8 py-3 transition-colors hover:bg-brand-secondary">Collaborate</button>
                  <button className="border border-white/20 text-white text-[10px] font-bold uppercase tracking-[2px] px-8 py-3 transition-colors hover:bg-white hover:text-brand-primary">Media Kit</button>
               </div>
            </div>
            
            <div className="grid grid-cols-2 gap-20">
              <div className="space-y-6">
                 <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-brand-secondary">Platform</h4>
                 <div className="flex flex-col gap-3 text-xs text-text-main/40 uppercase tracking-widest font-medium">
                    <a href="#" className="hover:text-white transition-colors">Cohort Rules</a>
                    <a href="#" className="hover:text-white transition-colors">Curriculum</a>
                    <a href="#" className="hover:text-white transition-colors">Leadership</a>
                 </div>
              </div>
              <div className="space-y-6">
                 <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-brand-secondary">Legal</h4>
                 <div className="flex flex-col gap-3 text-xs text-text-main/40 uppercase tracking-widest font-medium">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Support</a>
                 </div>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] text-white/20 uppercase tracking-[2px]">
            <p>&copy; {new Date().getFullYear()} Renaissance Initiative. Precision in thought, excellence in action.</p>
            <p>Designed for Sela School</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
