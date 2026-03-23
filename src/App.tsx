/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Bot, Zap, Share2, TrendingUp, Monitor, ArrowRight } from 'lucide-react';

const translations = {
  en: {
    nav: { services: "Services", howItWorks: "How it Works", whyUs: "Why Us", caseStudies: "Case Studies", contact: "Contact" },
    hero: { badge: "AI Optimization Experts", title: "Optimize Your Business, Maximize Success", subtitle: "Turn operations into automated workflows with tailored AI solutions that deliver real results.", cta: "Get early access", placeholder: "Work Email Address" },
    services: { title: "Our Services", items: [
      { title: "AI Vocal Agent", desc: "Automate customer support with intelligent voice agents." },
      { title: "Automations", desc: "Streamline your workflows and save hundreds of hours." },
      { title: "Social Media", desc: "AI-driven content creation and scheduling." },
      { title: "ADS Campaigns", desc: "Optimize ad spend with machine learning algorithms." },
      { title: "Websites", desc: "High-converting, AI-optimized web platforms." },
      { title: "AI Consulting", desc: "Strategic guidance for implementing AI in your business." }
    ]},
    howItWorks: { title: "How It Works", items: [
      { title: "Start", desc: "We analyze your current processes and identify AI opportunities." },
      { title: "Engage", desc: "We build and integrate custom AI solutions for your needs." },
      { title: "Benefits", desc: "Watch your efficiency skyrocket and costs plummet." }
    ]},
    whyUs: { title: "Reason to Choose OptiMinds", desc: "We are a team of AI experts, digital strategists, and data analysts dedicated to driving your business success. We understand that the digital landscape is constantly evolving, and we stay ahead of the curve with the latest tools to ensure our clients achieve sustainable growth.", badges: ["Search Engine", "Digital Content", "Social Media", "Lead Collection"] },
    caseStudies: { title: "Case Studies", items: [
      { title: "E-commerce Automation", result: "+150% ROI" },
      { title: "Customer Support AI", result: "-40% Response Time" },
      { title: "Lead Generation", result: "3x More Leads" }
    ]},
    contact: { title: "Ready to Optimize?", name: "Name", email: "Email", message: "Message", send: "Send Message" },
    footer: { rights: "All rights reserved." }
  },
  ro: {
    nav: { services: "Servicii", howItWorks: "Cum Funcționează", whyUs: "De Ce Noi", caseStudies: "Studii de Caz", contact: "Contact" },
    hero: { badge: "Experți în Optimizare AI", title: "Optimizează-ți Afacerea, Maximizează Succesul", subtitle: "Transformă operațiunile în fluxuri de lucru automatizate cu soluții AI personalizate care oferă rezultate reale.", cta: "Obține acces", placeholder: "Adresa de Email" },
    services: { title: "Serviciile Noastre", items: [
      { title: "Agent Vocal AI", desc: "Automatizează suportul clienți cu agenți vocali inteligenți." },
      { title: "Automatizări", desc: "Eficientizează fluxurile de lucru și economisește sute de ore." },
      { title: "Social Media", desc: "Creare și programare de conținut bazată pe AI." },
      { title: "Campanii ADS", desc: "Optimizează bugetul de reclame cu algoritmi de machine learning." },
      { title: "Website-uri", desc: "Platforme web optimizate AI, cu rată mare de conversie." },
      { title: "Consultanță AI", desc: "Îndrumare strategică pentru implementarea AI în afacerea ta." }
    ]},
    howItWorks: { title: "Cum Funcționează", items: [
      { title: "Analiză", desc: "Analizăm procesele actuale și identificăm oportunitățile AI." },
      { title: "Implementare", desc: "Construim și integrăm soluții AI personalizate nevoilor tale." },
      { title: "Rezultate", desc: "Urmărește cum eficiența crește și costurile scad." }
    ]},
    whyUs: { title: "De ce să alegi OptiMinds", desc: "Suntem o echipă de experți AI, strategi digitali și analiști de date dedicați succesului afacerii tale. Înțelegem că peisajul digital este în continuă evoluție și rămânem mereu cu un pas înainte folosind cele mai noi instrumente pentru a asigura o creștere sustenabilă.", badges: ["Motoare de Căutare", "Conținut Digital", "Social Media", "Colectare Lead-uri"] },
    caseStudies: { title: "Studii de Caz", items: [
      { title: "Automatizare E-commerce", result: "+150% ROI" },
      { title: "Suport Clienți AI", result: "-40% Timp Răspuns" },
      { title: "Generare Lead-uri", result: "De 3x Mai Multe Lead-uri" }
    ]},
    contact: { title: "Pregătit pentru Optimizare?", name: "Nume", email: "Email", message: "Mesaj", send: "Trimite Mesajul" },
    footer: { rights: "Toate drepturile rezervate." }
  }
};

export default function App() {
  const [lang, setLang] = useState<'ro' | 'en'>('ro');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2.5 group cursor-pointer">
            <div className="relative flex items-center justify-center w-10 h-10">
              <div className="absolute inset-0 bg-indigo-500 rounded-xl rotate-45 opacity-20 group-hover:rotate-90 transition-transform duration-700 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-emerald-500 rounded-xl shadow-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <Zap className="w-5 h-5 text-white fill-white/20" />
              </div>
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Opti<span className="text-indigo-600">Minds</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-indigo-600 transition-colors">{t.nav.services}</a>
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">{t.nav.howItWorks}</a>
            <a href="#why-us" className="hover:text-indigo-600 transition-colors">{t.nav.whyUs}</a>
            <a href="#case-studies" className="hover:text-indigo-600 transition-colors">{t.nav.caseStudies}</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'ro' ? 'en' : 'ro')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors text-sm font-medium text-slate-700"
            >
              <Globe className="w-4 h-4" />
              {lang.toUpperCase()}
            </button>
            <a href="#contact" className="hidden md:inline-flex bg-emerald-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-colors shadow-sm">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-40 left-10 w-20 h-20 bg-amber-500/10 blur-[30px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 text-sm font-medium mb-8"
          >
            {t.hero.badge}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight text-slate-900"
          >
            {t.hero.title.split(',')[0]},<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">
              {t.hero.title.split(',')[1]}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <input 
                type="email" 
                placeholder={t.hero.placeholder}
                className="w-full bg-white border border-slate-200 rounded-full pl-6 pr-40 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-sm"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-emerald-500 text-white font-semibold rounded-full px-6 hover:bg-emerald-600 transition-colors flex items-center gap-2 shadow-sm">
                {t.hero.cta}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative" id="how-it-works">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connecting Line */}
             <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0" />
             
             {t.howItWorks.items.map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ delay: i * 0.2 }}
                 className="text-center relative"
               >
                 <div className="w-6 h-6 bg-white border-2 border-indigo-500 rounded-full mx-auto mb-8 relative z-10 shadow-[0_0_20px_rgba(99,102,241,0.2)]" />
                 <h3 className="text-2xl font-semibold mb-4 text-slate-900">{item.title}</h3>
                 <p className="text-slate-600 leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 relative bg-slate-50" id="why-us">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-medium text-indigo-600 mb-8"
          >
            About us
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-medium leading-relaxed text-slate-500 mb-12"
          >
            {t.whyUs.desc.split(' ').map((word, i) => {
              const highlight = ['AI', 'OptiMinds', 'experți', 'experts', 'digital', 'data', 'date'].some(w => word.toLowerCase().includes(w.toLowerCase()));
              return (
                <span key={i} className={highlight ? 'text-slate-900 font-semibold' : ''}>
                  {word}{' '}
                </span>
              );
            })}
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {t.whyUs.badges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm text-slate-700 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 relative" id="services">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">{t.services.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((srv, i) => {
              const icons = [Bot, Zap, Share2, TrendingUp, Monitor, Zap];
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300">
                    <Icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">{srv.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{srv.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-50" id="case-studies">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900">{t.caseStudies.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.caseStudies.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-slate-50/50 border border-slate-200 p-10 text-center group hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 transition-all"
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500 mb-6 group-hover:scale-105 transition-transform duration-300">
                  {item.result}
                </div>
                <h3 className="text-xl font-medium text-slate-700">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 relative" id="contact">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl shadow-slate-200/50"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">{t.contact.title}</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">{t.contact.name}</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">{t.contact.email}</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">{t.contact.message}</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none" />
              </div>
              <button className="w-full bg-emerald-500 text-white font-bold rounded-2xl px-6 py-4 hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 text-lg shadow-lg shadow-emerald-500/25">
                {t.contact.send}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 text-center text-slate-500 text-sm relative z-10 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-black text-slate-900 text-lg">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-600 to-emerald-500 flex items-center justify-center text-white">
              <Zap className="w-3 h-3 fill-white/20" />
            </div>
            Opti<span className="text-indigo-600">Minds</span>
          </div>
          <p>&copy; {new Date().getFullYear()} OptiMinds. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
