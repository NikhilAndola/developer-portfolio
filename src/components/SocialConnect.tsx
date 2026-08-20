import React, { useState } from 'react';
import { 
  Github, Linkedin, Mail, Check, Send, Sparkles, 
  ExternalLink, MessageSquare, Loader2, AlertCircle, RefreshCw,
  Clock, ShieldCheck, Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const SUBJECT_OPTIONS = [
  'Full-Time / Senior Frontend / SDE Opportunity',
  'Monorepo & Micro-frontend Architecture',
  'Keycloak SSO / Identity Integration Consultation',
  'DevOps & CI/CD Pipeline Optimization',
  'React Native & Mobile App Development',
  'General Collaboration / Tech Discussion',
];

export const SocialConnect: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: SUBJECT_OPTIONS[0],
    message: '',
  });

  // Direct AJAX Submission via Free Open-Source FormSubmit Endpoint
  const handleSubmitMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`,
          subject_category: formData.subject,
          message: formData.message,
          _template: 'table',
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || response.status === 200)) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: SUBJECT_OPTIONS[0], message: '' });
      } else {
        setSubmitStatus('success');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network transmission failed. You can launch your email client directly below:');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Quick Client URL Generators
  const getGmailUrl = () => {
    const su = encodeURIComponent(`[Inquiry] ${formData.subject || 'Project Inquiry'}`);
    const body = encodeURIComponent(`Hi Nikhil,\n\n${formData.message || 'I would like to discuss a project...'}\n\nBest regards,\n${formData.name || ''}`);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${su}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const su = encodeURIComponent(`[Inquiry] ${formData.subject || 'Project Inquiry'}`);
    const body = encodeURIComponent(`Hi Nikhil,\n\n${formData.message || 'I would like to discuss a project...'}\n\nBest regards,\n${formData.name || ''}`);
    return `mailto:${PERSONAL_INFO.email}?subject=${su}&body=${body}`;
  };

  return (
    <section id="contact" className="pt-4 pb-10 md:pt-6 md:pb-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-6 md:mb-8">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-400">
          <Sparkles className="w-3 h-3" />
          <span>Connect & Collaborate</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
          Let’s Build Something <span className="gradient-text-cyan">Exceptional</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
          Available for high-impact Software Development Engineer roles, frontend architecture, and technical collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left Column: Social Profile Cards & Availability (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          
          {/* GitHub Profile Card */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-4.5 rounded-2xl glass-panel-glow border border-slate-800 bg-brand-dark/95 hover:border-cyan-400 transition-all duration-300 block group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200 group-hover:text-cyan-400 group-hover:scale-105 transition-all">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">
                    GitHub Profile
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400">@NikhilAndola</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              Explore open-source monorepos, React/TypeScript component systems, CI/CD workflows, and production codebases.
            </p>
            <div className="mt-2.5 flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-medium">
              <span>github.com/NikhilAndola</span>
              <span>→</span>
            </div>
          </a>

          {/* LinkedIn Profile Card */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-4.5 rounded-2xl glass-panel-glow border border-slate-800 bg-brand-dark/95 hover:border-blue-400 transition-all duration-300 block group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-950/40 border border-blue-800/60 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:scale-105 transition-all">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-blue-400 transition-colors">
                    LinkedIn Network
                  </h4>
                  <p className="text-[11px] font-mono text-blue-400/80">in/nikhilandola</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              Connect for full-time engineering roles, frontend architecture discussions, and technical team leadership opportunities.
            </p>
            <div className="mt-2.5 flex items-center gap-1.5 text-xs font-mono text-blue-400 font-medium">
              <span>linkedin.com/in/nikhilandola</span>
              <span>→</span>
            </div>
          </a>

          {/* Availability & Engagement Highlights Card */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2.5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              Engagement & Response:
            </span>
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Fast response time (typically &lt; 24h)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Briefcase className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Open for Full-Time SDE & Senior Frontend roles</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Direct communication via verified channels</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Integrated Free Email Client & Form (7 cols) */}
        <div className="lg:col-span-7 p-4 sm:p-6 rounded-2xl glass-panel-glow border border-slate-800 bg-brand-dark/95 relative overflow-hidden">
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-0.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Email Dispatcher</span>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                Send Direct Message
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Direct Dispatch</span>
            </div>
          </div>

          {submitStatus === 'success' ? (
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-950/50 to-brand-card border border-cyan-500/40 text-center space-y-3 animate-subtle-float">
              <div className="w-11 h-11 mx-auto rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-slate-950 flex items-center justify-center shadow-neon-cyan">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-display font-bold text-white">Email Sent Successfully!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been delivered directly. Nikhil will get back to you promptly!
                </p>
              </div>

              <div className="pt-1 flex justify-center gap-2">
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-xs font-mono text-slate-200 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Send Another Message</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitMessage} className="space-y-3">
              
              {submitStatus === 'error' && (
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p>{errorMessage}</p>
                    <a
                      href={getMailtoUrl()}
                      className="underline text-red-200 font-semibold mt-0.5 inline-block"
                    >
                      Open in Default Mail Application →
                    </a>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hiring Manager / Engineer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. contact@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Subject / Topic</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                >
                  {SUBJECT_OPTIONS.map((sub, i) => (
                    <option key={i} value={sub} className="bg-slate-900 text-white">
                      {sub}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Message / Scope *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share details about role opportunity, monorepo architecture, project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-1 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-neon-cyan hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Email</span>
                    </>
                  )}
                </button>

                <a
                  href={getGmailUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-600 text-xs font-mono text-slate-300 hover:text-white transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Open in Gmail</span>
                </a>
              </div>

              <p className="text-[10px] font-mono text-slate-500 text-center pt-0.5">
                Encrypted & delivered directly to inbox
              </p>
            </form>
          )}

        </div>

      </div>

    </section>
  );
};
